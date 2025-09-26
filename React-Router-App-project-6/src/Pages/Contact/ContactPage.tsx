import React from 'react';

// Reusable classes for consistency
const PRIMARY_TEXT = "text-gray-900 dark:text-white"; 
const ACCENT_COLOR = "text-pink-700 dark:text-pink-300"; 
const INPUT_RING = "focus:ring-pink-400 focus:border-pink-400 dark:focus:ring-pink-600 dark:focus:border-pink-600 dark:bg-gray-700 dark:text-white dark:border-gray-600";
const BUTTON_CLASSES = "w-full md:w-auto bg-pink-700 text-white px-10 py-3 rounded-full font-semibold uppercase text-sm tracking-wider transition duration-300 hover:bg-pink-800 shadow-lg shadow-pink-200 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-pink-300 focus:ring-opacity-50";

export default function Contact() {
  // SVG icon definitions have been removed as requested. 
  // Placeholder spans with emojis are used below to represent the icons' space.

  return (
    <section className="w-full bg-[#fdfaf8] dark:bg-gray-900 py-20 md:py-32 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Block */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className={`text-sm uppercase tracking-wider ${ACCENT_COLOR} font-semibold mb-2`}>
            We're Here to Help
          </p>
          <h1 className={`text-5xl font-serif ${PRIMARY_TEXT} mb-4`}>
            Let's Get in Touch
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            For support, partnership inquiries, or just to say hello, use the form below or connect with us directly.
          </p>
        </div>

        {/* Main Grid: Asymmetric Layout (Form wider than Info) */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* 1. Contact Form (Spans 2 columns on desktop) */}
          <div className="lg:col-span-2 bg-white dark:bg-gray-800 rounded-3xl shadow-2xl shadow-pink-100 p-8 md:p-14 transition duration-500">
            <form className="w-full space-y-6">
              
              {/* Form Title */}
              <h3 className={`text-2xl font-serif ${PRIMARY_TEXT} mb-6`}>Send Us a Message</h3>

              {/* Name Fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">First Name</label>
                  <input
                    id="firstName"
                    type="text"
                    placeholder="Jane"
                    className={`w-full px-5 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 ${INPUT_RING}`}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Last Name</label>
                  <input
                    id="lastName"
                    type="text"
                    placeholder="Doe"
                    className={`w-full px-5 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 ${INPUT_RING}`}
                    required
                  />
                </div>
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email Address</label>
                <input
                  id="email"
                  type="email"
                  placeholder="name@example.com"
                  className={`w-full px-5 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 ${INPUT_RING}`}
                  required
                />
              </div>
              
              {/* Subject Field */}
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Subject</label>
                <input
                  id="subject"
                  type="text"
                  placeholder="Regarding my recent order..."
                  className={`w-full px-5 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 ${INPUT_RING}`}
                  required
                />
              </div>

              {/* Message Field */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Your Message</label>
                <textarea
                  id="message"
                  placeholder="I have a question about..."
                  rows={5}
                  className={`w-full px-5 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 ${INPUT_RING}`}
                  required
                ></textarea>
              </div>

              {/* Submit Button */}
              <div className="pt-4 flex justify-center md:justify-start">
                <button
                  type="submit"
                  className={BUTTON_CLASSES}
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>

          {/* 2. Contact Info & Map (Spans 1 column on desktop) */}
          <div className="lg:col-span-1 flex flex-col justify-between bg-pink-50 dark:bg-gray-700 rounded-3xl shadow-xl p-8 transition duration-500">
            <div className="flex flex-col">
              <h3 className={`text-3xl font-serif ${PRIMARY_TEXT} mb-8`}>
                Contact Details
              </h3>
              
              {/* Info Items with Placeholder Icons (Emojis) */}
              <ul className="space-y-8 text-gray-700 dark:text-gray-300">
                
                <li className="flex items-start">
                  <span className={`w-6 h-6 mr-4 ${ACCENT_COLOR} mt-1 flex-shrink-0 flex items-center justify-center text-xl`}>
                    📍
                  </span>
                  <div>
                    <span className={`block font-bold ${PRIMARY_TEXT}`}>Find Our Office:</span>
                    188 Beauty Avenue, SURAT, India
                  </div>
                </li>

                <li className="flex items-start">
                  <span className={`w-6 h-6 mr-4 ${ACCENT_COLOR} mt-1 flex-shrink-0 flex items-center justify-center text-xl`}>
                    📧
                  </span>
                  <div>
                    <span className={`block font-bold ${PRIMARY_TEXT}`}>Email Us:</span>
                    <a href="mailto:support@lipsacosmetics.com" className={`hover:${ACCENT_COLOR}`}>support@lipsacosmetics.com</a>
                  </div>
                </li>

                <li className="flex items-start">
                  <span className={`w-6 h-6 mr-4 ${ACCENT_COLOR} mt-1 flex-shrink-0 flex items-center justify-center text-xl`}>
                    📞
                  </span>
                  <div>
                    <span className={`block font-bold ${PRIMARY_TEXT}`}>Call Us:</span>
                    <a href="tel:+9178618216821691" className={`hover:${ACCENT_COLOR}`}>+91 78618216821691</a>
                  </div>
                </li>
                
                <li className="flex items-start">
                  <span className={`w-6 h-6 mr-4 ${ACCENT_COLOR} mt-1 flex-shrink-0 flex items-center justify-center text-xl`}>
                    ⏰
                  </span>
                  <div>
                    <span className={`block font-bold ${PRIMARY_TEXT}`}>Working Hours:</span>
                    Mon – Sat: 9:00 AM – 8:00 PM (IST)
                  </div>
                </li>
              </ul>
            </div>

            {/* Map (Integrated at the bottom of the info panel) */}
            <div className="mt-12 pt-6 border-t border-pink-200 dark:border-gray-600">
              <h4 className={`text-lg font-semibold ${PRIMARY_TEXT} mb-3`}>Our Location</h4>
              <iframe
                title="Lipsa Cosmetics Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.11609619314!2d72.74109924257403!3d19.082197839672733!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b63bf9fbbef1%3A0x1234567890abcdef!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1690000000000"
                width="100%"
                height="200"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                className="rounded-xl shadow-md"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
