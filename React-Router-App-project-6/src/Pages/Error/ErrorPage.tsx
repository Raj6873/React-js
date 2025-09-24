import { Link } from "react-router-dom";

export default function Error() {
  return (
    <section className="h-screen flex items-center justify-center  px-6 py-12">
      <div className="text-center">
        {/*  Heading */}
        <h1 className="text-9xl font-bold text-[#b78a6e] font-serif mb-4">
          404
        </h1>

        {/* description */}
        <h2 className="text-3xl md:text-4xl font-semibold text-[#333333] mb-4">
          Page Not Found
        </h2>
        <p className="max-w-md mx-auto text-gray-600 mb-8">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>

        {/*  button */}
        <Link
          to="/"
          className="bg-[#b78a6e] text-white px-8 py-3 rounded-lg font-medium hover:bg-[#a57e62] transition-colors"
        >
          Go to Homepage
        </Link>
      </div>
    </section>
  );
}