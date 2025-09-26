import { Link } from "react-router-dom";
const WrenchIcon = () => (
  <svg 
    // Setting size and color directly for simplicity
    className="w-16 h-16 mx-auto text-orange-600 mb-6 animate-pulse"
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-3.76 3.76a2 2 0 0 1-2.83 0l-1.66-1.66a2 2 0 0 1 0-2.83l2.83-2.83a6 6 0 0 1 7.94-7.94l-3.75-3.75z"/>
    <path d="M18.17 4.19a2.43 2.43 0 0 1 2.83 2.83l-2.83 2.83"/>
    <path d="M8.29 17.62l1.66 1.66"/>
  </svg>
);

export default function NotFound() {
  return (
    // Outer container: Full screen height, centered, subtle background
    <div className="min-h-screen flex items-center justify-centerp-6">
      
      {/* Content Box: Focus container with modern styling */}
      <div className="text-center p-8 max-w-lg w-full bg-white rounded-xl shadow-2xl border border-slate-200 transition-all duration-300 transform hover:shadow-3xl">

        {/* Visual Icon (Self-contained SVG component) */}
        <WrenchIcon /> {/* No props passed here! */}

        {/* 404 Heading */}
        <h1 className="text-8xl md:text-9xl font-extrabold text-slate-800 tracking-tight mb-4 select-none">
          404
        </h1>

        {/* Secondary Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-slate-700 mb-4">
          Oops! Page Not Found
        </h2>

        {/* Description */}
        <p className="mx-auto text-slate-600 mb-8 leading-relaxed">
          It looks like the page you were looking for doesn't exist or has been moved. Don't worry, we're here to help you get back on track.
        </p>

        {/* Action Buttons Container */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          
          {/* Primary Button: Go to Homepage */}
          <Link
            to="/"
            className="w-full sm:w-auto bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold shadow-md hover:bg-orange-700 focus:outline-none focus:ring-4 focus:ring-orange-300 transition duration-300 ease-in-out transform hover:scale-[1.02]"
          >
            🚀 Go to Homepage
          </Link>

          {/* Secondary Button: Contact Support */}
          <Link
            to="/contact" 
            className="w-full sm:w-auto border border-slate-300 text-slate-600 bg-white px-8 py-3 rounded-lg font-medium hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-slate-300 transition duration-300 ease-in-out"
          >
            Contact Support
          </Link>
        </div>

      </div>
    </div>
  );
}