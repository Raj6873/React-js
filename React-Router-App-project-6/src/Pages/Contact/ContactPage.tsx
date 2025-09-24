export default function Contact() {
  return (
    <section className="w-full bg-[#fffaf8] py-20 px-6">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-serif text-[#333333] mb-4 mt-5">
          Contact Lipsa Cosmetics
        </h2>
        <p className="max-w-2xl mx-auto text-gray-600">
          Have questions or need assistance? We’re here to help. 
          Reach out through the form or our contact details below.
        </p>
      </div>

      {/* Main Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Contact Form */}
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <form className="w-full space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="First Name"
                className="w-full px-5 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#d99177]"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="w-full px-5 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#d99177]"
              />
            </div>
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-5 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#d99177]"
            />
            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full px-5 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#d99177]"
            />
            <textarea
              placeholder="Your Message"
              rows={5}
              className="w-full px-5 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#d99177]"
            ></textarea>
            <div className="flex justify-center md:justify-start">
              <button
                type="submit"
                className="bg-[#d99177] text-white px-8 py-3 rounded-lg font-medium hover:bg-[#b86d56] transition-colors"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col justify-center bg-[#fff1ec] rounded-2xl shadow-md p-8 md:p-12">
          <h3 className="text-2xl font-serif text-[#333333] mb-6">
            Get in Touch
          </h3>
          <ul className="space-y-6 text-gray-700">
            <li>
              <span className="block font-medium text-[#d99177]">Address:</span>
              188 Beauty Avenue, SURAT, India
            </li>
            <li>
              <span className="block font-medium text-[#d99177]">Email:</span>
              support@lipsacosmetics.com
            </li>
            <li>
              <span className="block font-medium text-[#d99177]">Phone:</span>
              +91 78618216821691
            </li>
            <li>
              <span className="block font-medium text-[#d99177]">
                Working Hours:
              </span>
              Mon – Sat: 9:00 AM – 8:00 PM
            </li>
          </ul>

          {/* Map */}
          <div className="mt-8">
            <iframe
              title="Lipsa Cosmetics Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.11609619314!2d72.74109924257403!3d19.082197839672733!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b63bf9fbbef1%3A0x1234567890abcdef!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1690000000000"
              width="100%"
              height="220"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              className="rounded-lg shadow-md"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
