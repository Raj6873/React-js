import React from 'react';

// Reusable Tailwind classes for consistency and clarity
const SECTION_PADDING = "py-16 md:py-24 lg:py-32 px-6";
const CONTAINER_CLASSES = "max-w-7xl mx-auto";
const HEADLINE_CLASSES = "text-4xl md:text-5xl font-serif text-gray-900 dark:text-white leading-tight mb-6"; // Added dark:text-white
const SUBHEADING_CLASSES = "text-sm uppercase tracking-widest text-pink-700 font-semibold mb-3";
const PARAGRAPH_CLASSES = "text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-4"; // Improved dark mode text color
const ACCENT_BUTTON_CLASSES = "inline-block bg-pink-700 text-white px-10 py-4 rounded-full font-semibold uppercase text-sm tracking-wide transition duration-300 hover:bg-pink-800 shadow-lg hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-pink-300 focus:ring-opacity-50";

export default function About() {
  return (
    <div className="w-full bg-[#fdfaf8] dark:bg-gray-900 font-sans">
      {/* 1. Hero Section: Catchy Intro with Image */}
      <section className={`${SECTION_PADDING} text-center relative overflow-hidden`}>
        <div className={`${CONTAINER_CLASSES}`}>
          <p className={`${SUBHEADING_CLASSES} mx-auto mb-4`}>Our Journey of Beauty</p>
          <h1 className={`${HEADLINE_CLASSES} text-center mx-auto max-w-3xl mb-8`}>
            Crafting Elegance, Empowering You
          </h1>
          {/* Changed text-xl to text-lg for better readability on white background */}
          <p className={`${PARAGRAPH_CLASSES} mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-300`}> 
            At Lipsa Cosmetics, we believe true beauty is an expression of self-love and confidence. We are dedicated to creating exceptional, ethical, and effective beauty solutions.
          </p>
          
          <div className="relative mt-16 max-w-4xl mx-auto">
            <img
              src="https://images.pexels.com/photos/3738097/pexels-photo-3738097.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Lipsa Cosmetics - Beauty Products"
              className="w-full h-96 object-cover rounded-3xl shadow-2xl transform hover:scale-102 transition-transform duration-700 ease-in-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-pink-700/20 to-transparent rounded-3xl"></div>
          </div>
        </div>
      </section>

      {/* 2. Our Philosophy: Core Values */}
      <section className={`${SECTION_PADDING} bg-white dark:bg-gray-800`}>
        <div className={`${CONTAINER_CLASSES} grid grid-cols-1 md:grid-cols-2 gap-12 items-center`}>
          <div className="md:order-2">
            <p className={SUBHEADING_CLASSES}>Our Core Beliefs</p>
            <h2 className={HEADLINE_CLASSES}>
              Where Purity Meets Performance
            </h2>
            <p className={PARAGRAPH_CLASSES}>
              Every Lipsa product is a testament to our commitment to excellence. We meticulously select high-quality, ethically sourced ingredients, ensuring that what you put on your skin is as good as it looks.
            </p>
            {/* List items text color fixed */}
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 text-lg space-y-2 pl-4">
              <li>Cruelty-Free & Vegan</li>
              <li>Paraben & Sulfate-Free</li>
              <li>Dermatologist Tested</li>
              <li>Sustainable Sourcing</li>
            </ul>
          </div>
          <div className="md:order-1 relative">
            <img
              src="https://images.pexels.com/photos/3373744/pexels-photo-3373744.jpeg?auto=compress&cs=tinysrgb&w=900"
              alt="Cruelty-Free & Natural Ingredients"
              className="w-full h-80 object-cover rounded-3xl shadow-xl transform hover:rotate-1 transition-transform duration-500 ease-in-out"
            />
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-pink-100 rounded-full mix-blend-multiply opacity-70 animate-pulse-slow"></div>
          </div>
        </div>
      </section>

      {/* 3. Our Vision: Future & Community */}
      <section className={`${SECTION_PADDING} bg-[#fdfaf8] dark:bg-gray-900`}>
        <div className={`${CONTAINER_CLASSES} text-center`}>
          <p className={SUBHEADING_CLASSES}>Looking Ahead</p>
          <h2 className={`${HEADLINE_CLASSES} mx-auto max-w-3xl`}>
            A Community That Shines Together
          </h2>
          {/* Changed text-xl to text-lg and adjusted dark mode color */}
          <p className={`${PARAGRAPH_CLASSES} mx-auto max-w-3xl text-lg text-gray-600 dark:text-gray-300`}>
            We're more than just a cosmetics brand; we're a movement towards a more conscious and beautiful world. Join the Lipsa family and be part of a community that celebrates individuality and collective empowerment.
          </p>
          <div className="mt-10">
            <a href="/shop" className={ACCENT_BUTTON_CLASSES}>
              Explore Our Collections
            </a>
          </div>
        </div>
      </section>

      {/* 4. Meet The Team (Text visibility is crucial here) */}
      <section className={`${SECTION_PADDING} bg-white dark:bg-gray-800`}>
        <div className={`${CONTAINER_CLASSES}`}>
          <p className={`${SUBHEADING_CLASSES} text-center`}>The Faces Behind the Glow</p>
          <h2 className={`${HEADLINE_CLASSES} text-center mb-12`}>
            Meet Our Passionate Team
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <div className="text-center group p-6 bg-gray-50 dark:bg-gray-700 rounded-2xl shadow-md hover:shadow-xl transition duration-300 transform hover:-translate-y-2">
              <img
                src="https://images.pexels.com/photos/7732053/pexels-photo-7732053.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&dpr=2" 
                alt="Team Member 1"
                className="w-32 h-32 rounded-full object-cover mx-auto mb-4 border-4 border-pink-200 group-hover:border-pink-400 transition"
              />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">Jane Doe</h3>
              <p className="text-pink-600 text-sm font-medium">Founder & CEO</p>
              {/* Added dark mode support for description text */}
              <p className="text-gray-600 dark:text-gray-300 text-sm mt-3">"Inspired by natural beauty."</p>
            </div>
            {/* Team Member 2 */}
            <div className="text-center group p-6 bg-gray-50 dark:bg-gray-700 rounded-2xl shadow-md hover:shadow-xl transition duration-300 transform hover:-translate-y-2">
              <img
                src="https://images.pexels.com/photos/7631317/pexels-photo-7631317.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&dpr=2" 
                alt="Team Member 2"
                className="w-32 h-32 rounded-full object-cover mx-auto mb-4 border-4 border-pink-200 group-hover:border-pink-400 transition"
              />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">Emily White</h3>
              <p className="text-pink-600 text-sm font-medium">Head of Product Development</p>
              <p className="text-gray-600 dark:text-gray-300 text-sm mt-3">"Innovation for your skin."</p>
            </div>
            {/* Team Member 3 */}
            <div className="text-center group p-6 bg-gray-50 dark:bg-gray-700 rounded-2xl shadow-md hover:shadow-xl transition duration-300 transform hover:-translate-y-2">
              <img
                src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&dpr=2" 
                alt="Team Member 3"
                className="w-32 h-32 rounded-full object-cover mx-auto mb-4 border-4 border-pink-200 group-hover:border-pink-400 transition"
              />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">Sophia Lee</h3>
              <p className="text-pink-600 text-sm font-medium">Brand Strategist</p>
              <p className="text-gray-600 dark:text-gray-300 text-sm mt-3">"Connecting with our community."</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Call to Action (Final Push) */}
      <section className={`${SECTION_PADDING} bg-gradient-to-br from-pink-50 to-pink-100 dark:from-gray-800 dark:to-gray-900 text-center`}>
        <div className={`${CONTAINER_CLASSES}`}>
          {/* Headline color changed for contrast on light gradient */}
          <h2 className={`${HEADLINE_CLASSES} mx-auto max-w-3xl text-pink-900 dark:text-pink-300`}> 
            Ready to Experience Lipsa?
          </h2>
          {/* Paragraph color changed for contrast */}
          <p className={`text-xl mx-auto max-w-2xl text-pink-800 dark:text-pink-400 mb-10 leading-relaxed`}>
            Discover our full range of products designed to enhance your natural beauty and boost your confidence.
          </p>
          <a href="/shop" className={ACCENT_BUTTON_CLASSES}>
            Shop Our Collections Now
          </a>
        </div>
      </section>

    </div>
  );
}