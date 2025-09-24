export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-[#fef6f0] to-[#fdfaf6] dark:bg-gray-900 border-t border-gray-200">
      <div className="mx-auto w-full max-w-screen-xl p-6 lg:p-12">
        <div className="md:flex md:justify-between md:items-start">
          {/* Logo & Description */}
          <div className="mb-8 md:mb-0 md:w-1/3">
            <a href="/" className="flex items-center mb-4">
              <span className="self-center text-3xl font-serif text-[#b78a6e] font-bold whitespace-nowrap">
                Lipsa Cosmetics
              </span>
            </a>
            <p className="text-gray-600 dark:text-gray-400 font-sans text-sm">
              Premium dried flower arrangements that last. Custom bouquets and occasion flowers for every memorable moment.
            </p>
          </div>

          {/* Links Section */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 sm:gap-10">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-[#333333] dark:text-gray-300 uppercase">
                Company
              </h2>
              <ul className="text-gray-600 dark:text-gray-400 font-sans font-medium space-y-2">
                <li>
                  <a href="#" className="hover:text-[#b78a6e] transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#b78a6e] transition-colors">
                    Services
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="mb-6 text-sm font-semibold text-[#333333] dark:text-gray-300 uppercase">
                Follow us
              </h2>
              <ul className="flex gap-4">
                <li>
                  <a href="#" className="block w-6 h-6 bg-[#b78a6e] rounded-full hover:bg-[#a6725b] transition-colors" title="Instagram"></a>
                </li>
                <li>
                  <a href="#" className="block w-6 h-6 bg-[#3b5998] rounded-full hover:bg-[#2d4473] transition-colors" title="Facebook"></a>
                </li>
                <li>
                  <a href="#" className="block w-6 h-6 bg-[#00acee] rounded-full hover:bg-[#0084b4] transition-colors" title="Twitter"></a>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="mb-6 text-sm font-semibold text-[#333333] dark:text-gray-300 uppercase">
                Legal
              </h2>
              <ul className="text-gray-600 dark:text-gray-400 font-sans font-medium space-y-2">
                <li>
                  <a href="#" className="hover:text-[#b78a6e] transition-colors">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#b78a6e] transition-colors">
                    Terms & Conditions
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <hr className="my-6 border-gray-300 dark:border-gray-700 sm:mx-auto lg:my-8" />

        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 dark:text-gray-400 sm:text-center">
            © 2023{" "}
            <a href="/" className="hover:text-[#b78a6e] transition-colors">
              Lipsa Cosmetics
            </a>
            . All Rights Reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}
