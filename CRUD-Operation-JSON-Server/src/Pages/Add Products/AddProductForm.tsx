import { useState, useMemo } from "react";

// Mock API service (same as before)
const productAPIServices = {
  addNewProduct: async (data: any) => {
    await new Promise(resolve => setTimeout(resolve, 1500));
    return Math.random() < 0.8;
  },
};

type ProductData = {
  id: string;
  name: string;
  price: string;
  image: string;
  category: string;
  stock: string;
  brand: string;
  rating: string;
  reviews: string;
  warranty: string;
  features: string;
  description: string;
};

const getInitialProductState = (): ProductData => ({
  id: Math.floor(Math.random() * 1000000).toString(),
  name: "",
  price: "",
  image: "",
  category: "",
  stock: "",
  brand: "",
  rating: "",
  reviews: "",
  warranty: "",
  features: "",
  description: "",
});

// Define form steps
const formSteps = [
  { id: 1, title: "Identity & Content", icon: "📝" },
  { id: 2, title: "Pricing & Stock", icon: "💰" },
  { id: 3, title: "Ratings & Specs", icon: "⭐" },
];

export default function AddProductForm() {
  const [addProductData, setAddProductData] = useState<ProductData>(getInitialProductState());
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState<{ type: 'success' | 'error' | null, text: string | null }>({ type: null, text: null });
  const [currentStep, setCurrentStep] = useState(1); // New state for tabs

  // Simple validation for required fields on step 1 (Product Name)
  const isStepOneValid = useMemo(() => addProductData.name.trim() !== "" && addProductData.category.trim() !== "", [addProductData.name, addProductData.category]);
  const isProductNameInvalid = useMemo(() => addProductData.name.trim() === "", [addProductData.name]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    if (statusMessage.type) setStatusMessage({ type: null, text: null });
    const { name, value } = event.target;
    setAddProductData(prev => ({ ...prev, [name]: value }));
  }

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (isProductNameInvalid) {
      setCurrentStep(1); // Go back to the first step if the name is missing
      setStatusMessage({ type: 'error', text: "Product Name is required to submit. Please check Step 1." });
      return;
    }

    setIsSubmitting(true);
    setStatusMessage({ type: null, text: null });

    try {
      const status = await productAPIServices.addNewProduct(addProductData);

      if (status) {
        setStatusMessage({ type: 'success', text: "Product published successfully! Form has been reset." });
        setAddProductData(getInitialProductState());
        setCurrentStep(1); // Reset to first step
      } else {
        setStatusMessage({ type: 'error', text: "Failed to publish product. Please try again." });
      }
    } catch (error) {
      setStatusMessage({ type: 'error', text: "An unexpected error occurred during submission." });
    } finally {
      setIsSubmitting(false);
    }
  }

  // --- UI Components ---

  // Custom Input with Neumorphic/Soft UI feel
  const FormInput = ({ label, name, type = 'text', placeholder, ...rest }: any) => {
    const isError = name === 'name' && isProductNameInvalid && currentStep === 1 && statusMessage.type === 'error';

    // Base style for the soft, inset look
    const inputBaseClasses = `
      w-full bg-gray-100 px-5 py-3 rounded-xl shadow-inner
      border border-transparent transition-all duration-300
      focus:outline-none focus:ring-4 font-medium text-gray-800
    `;

    // Error and Focus states
    const inputStateClasses = isError
      ? 'border-red-300 focus:ring-red-100 focus:border-red-500'
      : 'hover:border-blue-200 focus:ring-blue-100 focus:border-blue-500';

    const labelClasses = `
      block text-sm font-semibold mb-2 transition-colors duration-300
      ${isError ? 'text-red-600' : 'text-gray-700'}
    `;

    return (
      <div className="space-y-1">
        <label htmlFor={name} className={labelClasses}>
          {label}
          {isError && <span className="ml-1 text-red-500 font-normal">(Required)</span>}
        </label>

        {type === 'textarea' ? (
          <textarea
            id={name}
            name={name}
            value={(addProductData as any)[name]}
            onChange={handleChange}
            placeholder={placeholder}
            className={`${inputBaseClasses} ${inputStateClasses} resize-none min-h-[100px]`}
            rows={rest.rows || 4}
          />
        ) : type === 'select' ? (
          <select
            id={name}
            name={name}
            value={(addProductData as any)[name]}
            onChange={handleChange}
            className={`${inputBaseClasses} ${inputStateClasses} appearance-none`}
          >
            <option value="" disabled className="text-gray-400">Select {label.toLowerCase()}</option>
            {rest.options.map((opt: string) => (
              <option key={opt} value={opt} className="text-gray-800">{opt}</option>
            ))}
          </select>
        ) : (
          <input
            id={name}
            type={type}
            name={name}
            value={(addProductData as any)[name]}
            onChange={handleChange}
            placeholder={placeholder}
            className={`${inputBaseClasses} ${inputStateClasses}`}
            {...rest}
          />
        )}
      </div>
    );
  };

  // Notification Style
  const notificationClasses = statusMessage.type === 'success'
    ? "bg-green-100 border-l-4 border-green-500 text-green-800"
    : "bg-red-100 border-l-4 border-red-500 text-red-800";

  // Navigation handlers
  const goToNextStep = () => {
    if (currentStep === 1 && !isStepOneValid) {
      setStatusMessage({ type: 'error', text: "Please fill in the Product Name and Category before proceeding." });
      return;
    }
    if (currentStep < formSteps.length) {
      setCurrentStep(prev => prev + 1);
      setStatusMessage({ type: null, text: null });
    }
  }

  const goToPrevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(prev => prev - 1);
      setStatusMessage({ type: null, text: null });
    }
  }

  // --- RENDER SECTIONS ---

  const renderFormContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <FormInput label="Product Name" name="name" placeholder="E.g., Pro X Noise-Cancelling Headphones" />
            <FormInput label="Product Image URL" name="image" placeholder="https://example.com/image.jpg" />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <FormInput
                label="Category"
                name="category"
                type="select"
                options={["Electronics", "Fashion", "Home & Kitchen", "Books", "Sports", "Others"]}
              />
              <FormInput label="Brand Name" name="brand" placeholder="E.g., Sonic Industries" />
            </div>
            <FormInput
              label="Key Features (Comma Separated)"
              name="features"
              type="textarea"
              rows={3}
              placeholder="Comfortable earcups, 24-hour battery life, Wireless charging..."
            />
            <FormInput
              label="Full Description"
              name="description"
              type="textarea"
              rows={5}
              placeholder="Provide a detailed and engaging product description..."
            />
          </div>
        );
      case 2:
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormInput label="Price (INR ₹)" name="price" type="number" min="0" placeholder="9999.00" />
            <FormInput label="Stock Quantity" name="stock" type="number" min="0" placeholder="150" />
            <FormInput label="Warranty Information" name="warranty" placeholder="E.g., 2 Years Limited Warranty" />
            {/* Empty column for alignment */}
            <div></div>
          </div>
        );
      case 3:
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormInput label="Rating (0-5)" name="rating" type="number" step="0.1" min="0" max="5" placeholder="4.7" />
            <FormInput label="Number of Reviews" name="reviews" type="number" min="0" placeholder="1240" />
          </div>
        );
      default:
        return null;
    }
  };


  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-8">
      <div className="max-w-4xl mx-auto">

        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-extrabold text-gray-800 mb-2">Create New Product Listing</h1>
          <p className="text-gray-500 text-lg">Use the steps below to complete the product form.</p>
        </div>

        {/* Status Message */}
        {statusMessage.type && (
          <div className={`${notificationClasses} px-6 py-4 rounded-xl shadow-sm mb-8 transition-opacity duration-300`} role="alert">
            <div className="flex items-center">
              <span className={`text-xl mr-3 ${statusMessage.type === 'success' ? 'text-green-500' : 'text-red-500'}`}>{statusMessage.type === 'success' ? '✔' : '❗'}</span>
              <span className="font-medium">{statusMessage.text}</span>
            </div>
          </div>
        )}

        <form onSubmit={handleSubmit}>

          {/* STEPPER/TAB NAVIGATION */}
          <div className="flex justify-between items-center mb-8 p-4 bg-white rounded-2xl shadow-lg">
            {formSteps.map((step) => (
              <div
                key={step.id}
                onClick={() => setCurrentStep(step.id)}
                className={`flex-1 flex flex-col items-center cursor-pointer p-2 transition-all duration-300 relative 
                            ${currentStep === step.id ? 'text-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
              >
                <div className={`w-10 h-10 flex items-center justify-center rounded-full font-bold text-lg mb-1 transition-all duration-300
                                ${currentStep === step.id
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'bg-gray-200 text-gray-600'}`}>
                  {step.icon}
                </div>
                <span className="text-sm font-semibold text-center mt-1 hidden sm:block">{step.title}</span>
                {currentStep === step.id && (
                  <div className="absolute bottom-0 w-full h-1 bg-blue-600 rounded-t-full transform translate-y-4"></div>
                )}
              </div>
            ))}
          </div>

          {/* FORM CONTENT CARD (Soft UI) */}
          <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100 min-h-[400px]">
            {renderFormContent()}
          </div>

          {/* STICKY ACTION BAR */}
          <div className="sticky bottom-0 mt-8">
            <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl border border-gray-200 p-4 flex justify-between items-center">

              {/* Previous Button */}
              <button
                type="button"
                onClick={goToPrevStep}
                disabled={currentStep === 1 || isSubmitting}
                className={`px-6 py-3 font-semibold rounded-xl transition-all duration-300 min-w-[120px]
                            ${currentStep === 1
                    ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:shadow-md'
                  }`}
              >
                ← Back
              </button>

              {/* Next/Submit Button */}
              {currentStep < formSteps.length ? (
                <button
                  type="button"
                  onClick={goToNextStep}
                  disabled={isSubmitting || (currentStep === 1 && !isStepOneValid)}
                  className={`px-6 py-3 font-semibold rounded-xl transition-all duration-300 min-w-[120px]
                              ${isSubmitting || (currentStep === 1 && !isStepOneValid)
                      ? 'bg-blue-300 text-white cursor-not-allowed'
                      : 'bg-blue-600 text-white hover:bg-blue-700 shadow-lg hover:shadow-xl'
                    }`}
                >
                  Next Step ({currentStep + 1}/{formSteps.length}) →
                </button>
              ) : (
                <button
                  type="submit"
                  disabled={isSubmitting || isProductNameInvalid}
                  className={`px-6 py-3 font-semibold rounded-xl transition-all duration-300 min-w-[180px]
                              transform hover:scale-105 active:scale-95
                              ${isSubmitting || isProductNameInvalid
                      ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                      : 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-xl hover:shadow-2xl'
                    }`}
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Publishing...
                    </span>
                  ) : (
                    'Publish Product'
                  )}
                </button>
              )}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}