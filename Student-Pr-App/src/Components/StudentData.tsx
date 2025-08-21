import { useState } from "react";

function StudentForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    gender: "",
    std: "",
    hobby: [] as string[],
  });

  const allStd: string[] = [
    "Nursery","LKG","UKG", "1st", "2nd", "3rd", "4th", "5th",
    "6th", "7th", "8th", "9th", "10th",
    "11th", "12th",
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleHobbyChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = event.target;
    setFormData((prev) => ({
      ...prev,
      hobby: checked ? [...prev.hobby, value] : prev.hobby.filter((h) => h !== value),
    }));
  };

  const submitStudentForm = (event: React.FormEvent) => {
    event.preventDefault();
    console.log(formData);
    // Reset the form after submission
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      gender: "",
      std: "",
      hobby: [],
    });
  };

  return (
    <div className="flex justify-center items-center p-4 min-h-screen bg-gray-900">
      <div className="w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden p-8 md:p-12">
        <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-2">
          Student Registration
        </h2>
        <p className="text-center text-gray-500 mb-8">
          Please provide your details to register.
        </p>

        <form onSubmit={submitStudentForm} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="firstName" className="block text-sm font-semibold text-gray-700 mb-1">
                First Name
              </label>
              <input
                id="firstName"
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg p-3 text-gray-800 focus:border-blue-500 focus:ring-1 focus:ring-blue-200 outline-none transition duration-300"
                required
              />
            </div>

            <div>
              <label htmlFor="lastName" className="block text-sm font-semibold text-gray-700 mb-1">
                Last Name
              </label>
              <input
                id="lastName"
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg p-3 text-gray-800 focus:border-blue-500 focus:ring-1 focus:ring-blue-200 outline-none transition duration-300"
                required
              />
            </div>
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-1">
              Email Address
            </label>
            <input
              id="email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg p-3 text-gray-800 focus:border-blue-500 focus:ring-1 focus:ring-blue-200 outline-none transition duration-300"
              required
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-1">
              Phone Number
            </label>
            <input
              id="phone"
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg p-3 text-gray-800 focus:border-blue-500 focus:ring-1 focus:ring-blue-200 outline-none transition duration-300"
              required
            />
          </div>

          <div>
            <span className="block text-sm font-semibold text-gray-700 mb-2">Gender</span>
            <div className="flex space-x-6">
              <label className="inline-flex items-center cursor-pointer">
                <input
                  type="radio"
                  name="gender"
                  value="Male"
                  checked={formData.gender === "Male"}
                  onChange={handleChange}
                  className="w-5 h-5 text-blue-600 border-gray-300 focus:ring-blue-500"
                />
                <span className="ml-2 text-gray-700">Male</span>
              </label>
              <label className="inline-flex items-center cursor-pointer">
                <input
                  type="radio"
                  name="gender"
                  value="Female"
                  checked={formData.gender === "Female"}
                  onChange={handleChange}
                  className="w-5 h-5 text-blue-600 border-gray-300 focus:ring-blue-500"
                />
                <span className="ml-2 text-gray-700">Female</span>
              </label>
            </div>
          </div>

          <div>
            <label htmlFor="std" className="block text-sm font-semibold text-gray-700 mb-1">
              Standard
            </label>
            <select
              id="std"
              name="std"
              value={formData.std}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg p-3 text-gray-800 focus:border-blue-500 focus:ring-1 focus:ring-blue-200 outline-none transition duration-300"
              required
            >
              <option value="" disabled>Select Standard</option>
              {allStd.map((stdOption, idx) => (
                <option key={idx} value={stdOption}>
                  {stdOption}
                </option>
              ))}
            </select>
          </div>

          <div>
            <span className="block text-sm font-semibold text-gray-700 mb-2">Hobbies</span>
            <div className="flex flex-wrap gap-4">
              {["Reading", "Writing", "Sleeping"].map((h, idx) => (
                <label key={idx} className="inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    value={h}
                    onChange={handleHobbyChange}
                    checked={formData.hobby.includes(h)}
                    className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                  />
                  <span className="ml-2 text-gray-700">{h}</span>
                </label>
              ))}
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-bold hover:bg-blue-700 transition duration-300 shadow-lg transform hover:scale-[1.01]"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default StudentForm;