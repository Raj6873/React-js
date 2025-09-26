import React from 'react';
// Note: For real-world use, replace the comments below with actual icon imports
// import { Mail, Instagram, Facebook, Twitter } from 'lucide-react'; 

// Using a deep pink for accent consistent with premium branding
const accentColor = "text-pink-800";
const hoverColor = "hover:text-pink-600"; 
const iconBgColor = "bg-pink-800 hover:bg-pink-600"; 

export default function Footer() {
  return (
    // Background: Clean off-white and subtle gradient
    <footer className="bg-[#fefaf6] dark:bg-gray-900 border-t border-gray-200 mt-12">
      <div className="mx-auto w-full max-w-screen-xl p-8 lg:p-12">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-5 md:justify-between md:items-start">
          
          {/* 1. Logo & Description */}
          <div className="col-span-2 md:col-span-2 mb-8 md:mb-0">
            <a href="/" className="mb-4 inline-block">
              <span className={`self-center text-4xl font-serif italic tracking-wider ${accentColor} font-bold whitespace-nowrap`}>
                Lipsa 
                <span className="text-xl font-sans font-light ml-1 text-gray-700">Cosmetics</span>
              </span>
            </a>
            <p className="text-gray-600 dark:text-gray-400 font-sans text-sm mt-4 max-w-xs">
              Experience luxury in every shade. We offer clean, cruelty-free beauty products crafted for your confidence.
            </p>
          </div>

          {/* 2. Quick Links */}
          <div>
            <h2 className={`mb-6 text-sm font-bold ${accentColor} uppercase tracking-wider`}>
              Explore
            </h2>
            <ul className="text-gray-600 dark:text-gray-400 font-sans font-medium space-y-3">
              <li>
                <a href="/shop" className={`${hoverColor} transition-colors`}>
                  Shop All
                </a>
              </li>
              <li>
                <a href="/about" className={`${hoverColor} transition-colors`}>
                  Our Story
                </a>
              </li>
              <li>
                <a href="/contact" className={`${hoverColor} transition-colors`}>
                  Contact Us
                </a>
              </li>
              <li>
                <a href="/faq" className={`${hoverColor} transition-colors`}>
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* 3. Customer Care */}
          <div>
            <h2 className={`mb-6 text-sm font-bold ${accentColor} uppercase tracking-wider`}>
              Support
            </h2>
            <ul className="text-gray-600 dark:text-gray-400 font-sans font-medium space-y-3">
              <li>
                <a href="/shipping" className={`${hoverColor} transition-colors`}>
                  Shipping & Returns
                </a>
              </li>
              <li>
                <a href="/privacy" className={`${hoverColor} transition-colors`}>
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/terms" className={`${hoverColor} transition-colors`}>
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="/careers" className={`${hoverColor} transition-colors`}>
                  Careers
                </a>
              </li>
            </ul>
          </div>

          {/* 4. Newsletter Signup (High-Value Addition) */}
          <div className="col-span-2 md:col-span-1">
            <h2 className={`mb-6 text-sm font-bold ${accentColor} uppercase tracking-wider`}>
              Join The Club
            </h2>
            <p className="text-gray-600 dark:text-gray-400 font-sans text-sm mb-4">
              Get 10% off your first order and exclusive updates.
            </p>
            <form>
              <div className="flex flex-col space-y-3">
                <input
                  type="email"
                  placeholder="Your Email Address"
                  className="p-3 border border-gray-300 rounded-md focus:ring-pink-400 focus:border-pink-400 text-sm"
                  required
                />
                <button
                  type="submit"
                  className={`p-3 text-sm font-semibold uppercase tracking-widest text-white rounded-md transition duration-300 ${iconBgColor}`}
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* --- Divider and Social/Copyright --- */}
        <hr className="my-10 border-gray-300 dark:border-gray-700 sm:mx-auto" />

        <div className="sm:flex sm:items-center sm:justify-between flex-wrap gap-4">
          {/* Copyright */}
          <span className="text-sm text-gray-500 dark:text-gray-400 sm:text-left order-2 sm:order-1 w-full sm:w-auto mt-4 sm:mt-0">
            © {new Date().getFullYear()}{" "}
            <a href="/" className={`${hoverColor} font-semibold`}>
              Lipsa Cosmetics
            </a>
            . All Rights Reserved.
          </span>
          
          {/* Social Media Icons */}
          <div className="flex space-x-4 sm:space-x-6 order-1 sm:order-2">
            {/* Instagram */}
            <a href="#" className={`text-white p-2 rounded-full transition ${iconBgColor}`} title="Instagram">
                {/* Replace with <Instagram size={18} /> */}
                <span className="w-5 h-5 block text-center leading-5">i</span> 
            </a>
            {/* Facebook */}
            <a href="#" className={`text-white p-2 rounded-full transition ${iconBgColor}`} title="Facebook">
                {/* Replace with <Facebook size={18} /> */}
                <span className="w-5 h-5 block text-center leading-5">f</span>
            </a>
            {/* Twitter */}
            <a href="#" className={`text-white p-2 rounded-full transition ${iconBgColor}`} title="Twitter">
                {/* Replace with <Twitter size={18} /> */}
                <span className="w-5 h-5 block text-center leading-5">t</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}