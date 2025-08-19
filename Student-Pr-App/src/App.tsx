export default function App() {
  return (
    <div
      className="min-h-screen py-12 px-6 sm:px-8 lg:px-12 flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('https://images.unsplash.com/photo-1579546929518-9e396f3cc809?q=80&w=2070&auto=format&fit=crop')" }}
    >
      <form className="max-w-3xl w-full mx-auto bg-white dark:bg-gray-800 p-8 sm:p-12 rounded-2xl shadow-2xl space-y-8 font-sans transition-all duration-300">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-center text-gray-900 dark:text-white tracking-tight leading-tight">
          Student Registration
        </h1>
        <p className="text-center text-gray-600 dark:text-gray-400 text-lg">
          Fill out the form below to register your child for the upcoming school year.
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* First Name */}
          <div>
            <label htmlFor="firstName" className="block text-sm font-semibold text-gray-700 dark:text-gray-200 mb-2">
              First Name
            </label>
            <input
              id="firstName"
              type="text"
              placeholder="Enter first name"
              className="w-full p-3 border border-gray-300 rounded-lg dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-600 transition duration-200 shadow-sm"
              required
            />
          </div>
          {/* Last Name */}
          <div>
            <label htmlFor="lastName" className="block text-sm font-semibold text-gray-700 dark:text-gray-200 mb-2">
              Last Name
            </label>
            <input
              id="lastName"
              type="text"
              placeholder="Enter last name"
              className="w-full p-3 border border-gray-300 rounded-lg dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-600 transition duration-200 shadow-sm"
              required
            />
          </div>
          {/* Email */}
          <div className="sm:col-span-2">
            <label htmlFor="email" className="block text-sm font-semibold text-gray-700 dark:text-gray-200 mb-2">
              Email Address
            </label>
            <input
              id="email"
              type="email"
              placeholder="your.email@example.com"
              className="w-full p-3 border border-gray-300 rounded-lg dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-600 transition duration-200 shadow-sm"
              required
            />
          </div>
          {/* Gender */}
          <div>
            <label htmlFor="gender" className="block text-sm font-semibold text-gray-700 dark:text-gray-200 mb-2">
              Gender
            </label>
            <select
              id="gender"
              className="w-full p-3 border border-gray-300 rounded-lg dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-600 transition duration-200 shadow-sm"
              required
              defaultValue=""
            >
              <option value="" disabled>Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
          {/* Class */}
          <div>
            <label htmlFor="class" className="block text-sm font-semibold text-gray-700 dark:text-gray-200 mb-2">
              Class
            </label>
            <select
              id="class"
              className="w-full p-3 border border-gray-300 rounded-lg dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-600 transition duration-200 shadow-sm"
              required
              defaultValue=""
            >
              <option value="" disabled>Select Class</option>
              <option value="nursery">Nursery</option>
              <option value="lkg">LKG</option>
              <option value="ukg">UKG</option>
              <option value="1">Class 1</option>
              <option value="2">Class 2</option>
              <option value="3">Class 3</option>
              <option value="4">Class 4</option>
              <option value="5">Class 5</option>
              <option value="6">Class 6</option>
              <option value="7">Class 7</option>
              <option value="8">Class 8</option>
              <option value="9">Class 9</option>
              <option value="10">Class 10</option>
              <option value="11">Class 11</option>
              <option value="12">Class 12</option>
            </select>
          </div>
          {/* Phone Number */}
          <div className="sm:col-span-2">
            <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 dark:text-gray-200 mb-2">
              Phone Number
            </label>
            <input
              id="phone"
              type="tel"
              pattern="[0-9]{10}"
              placeholder="10-digit number"
              className="w-full p-3 border border-gray-300 rounded-lg dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-600 transition duration-200 shadow-sm"
              required
            />
          </div>
          {/* Address */}
          <div className="sm:col-span-2">
            <label htmlFor="address" className="block text-sm font-semibold text-gray-700 dark:text-gray-200 mb-2">
              Address
            </label>
            <textarea

              id="address"
              placeholder="Enter your address"
              className="w-full p-3 border border-gray-300 rounded-lg resize-none dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-600 transition duration-200 shadow-sm"
              required
            ></textarea>
          </div>
          {/* Upload Image */}
          <div className="sm:col-span-2">
            <label htmlFor="image" className="block text-sm font-semibold text-gray-700 dark:text-gray-200 mb-2">
              Upload Your Image
            </label>
            <div className="flex items-center justify-center w-full">
              <label htmlFor="image" className="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 dark:hover:bg-gray-700 dark:bg-gray-800 dark:border-gray-600 transition duration-200">
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                  <svg className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" fill="none" viewBox="0 0 20 16">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
                  </svg>
                  <p className="mb-2 text-sm text-gray-500 dark:text-gray-400 text-center"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                </div>
                <input id="image" type="file" className="hidden" accept="image/*" required />
              </label>
            </div>
          </div>
        </div>

        {/* Remember Me */}
        <div className="flex items-center space-x-3 mt-6">
          <input
            id="remember"
            type="checkbox"
            className="w-5 h-5 text-purple-600 bg-gray-100 border-gray-300 rounded focus:ring-4 focus:ring-purple-400 dark:bg-gray-700 dark:border-gray-600"
            required
          />
          <label
            htmlFor="remember"
            className="text-sm font-medium text-gray-700 dark:text-gray-300 select-none"
          >
            I agree to the <a href="#" className="text-purple-600 hover:text-purple-800 dark:hover:text-purple-400 underline">Terms and Conditions</a>
          </label>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-lg text-lg font-semibold focus:outline-none focus:ring-4 focus:ring-purple-500 transition duration-200 shadow-lg transform hover:scale-105"
        >
          Submit
        </button>
      </form>
    </div>
  );
}