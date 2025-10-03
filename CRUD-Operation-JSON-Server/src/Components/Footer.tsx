import { useState } from "react";
import {
  Facebook,
  Twitter,
  Youtube,
  Instagram,
  Mail,
  Phone,
  MapPin,
  Heart,
  ArrowUp,
  Shield,
  Truck,
  Headphones,
  Award,
  CreditCard,
  Send
} from "lucide-react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail("");
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const features = [
    { icon: <Truck size={20} />, text: "Free Shipping", desc: "On orders over ₹999" },
    { icon: <Shield size={20} />, text: "Secure Payment", desc: "100% protected" },
    { icon: <Headphones size={20} />, text: "24/7 Support", desc: "Ready to help" },
    { icon: <Award size={20} />, text: "Quality Guarantee", desc: "Best products" },
    { icon: <CreditCard size={20} />, text: "Easy Returns", desc: "30-day policy" }
  ];

  const socialLinks = [
    { icon: <Facebook size={20} />, href: "#", label: "Facebook" },
    { icon: <Twitter size={20} />, href: "#", label: "Twitter" },
    { icon: <Instagram size={20} />, href: "#", label: "Instagram" },
    { icon: <Youtube size={20} />, href: "#", label: "YouTube" }
  ];

  return (
    <footer className="bg-gradient-to-b from-slate-900 to-slate-800 text-slate-300 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      {/* Features Bar */}
      <div className="relative border-b border-slate-700/50">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center gap-3 group">
                <div className="text-blue-400 group-hover:text-blue-300 transition-colors duration-300">
                  {feature.icon}
                </div>
                <div>
                  <p className="font-semibold text-white text-sm">{feature.text}</p>
                  <p className="text-slate-400 text-xs">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="relative max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-12">

          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-lg">LC</span>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-white to-slate-200 bg-clip-text text-transparent">
                LIPSA
                COSMETICS

              </span>
            </div>
            <p className="text-slate-400 mb-6 leading-relaxed max-w-md">
              Your trusted online shopping destination. We bring you the best products with exceptional service and fast delivery.
            </p>

            {/* Newsletter Subscription */}
            <div className="space-y-3">
              <h4 className="text-white font-semibold">Stay Updated</h4>
              {isSubscribed ? (
                <div className="bg-green-500/10 border border-green-500/20 text-green-400 px-4 py-3 rounded-xl text-sm">
                  🎉 Thank you for subscribing!
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex gap-2">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="flex-1 bg-slate-800 border border-slate-600 rounded-xl px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                  <button
                    type="submit"
                    className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-3 rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-105"
                  >
                    <Send size={18} />
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-lg">Company</h4>
            <ul className="space-y-3">
              {["About Us", "Careers", "Press", "Blog", "GoCart Stories"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-slate-400 hover:text-white transition-colors duration-200 hover:translate-x-1 transform block">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-lg">Support</h4>
            <ul className="space-y-3">
              {["Contact Us", "FAQ", "Shipping", "Returns", "Order Tracking"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-slate-400 hover:text-white transition-colors duration-200 hover:translate-x-1 transform block">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Policies */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-lg">Policies</h4>
            <ul className="space-y-3">
              {["Return Policy", "Terms of Use", "Security", "Privacy", "Sitemap"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-slate-400 hover:text-white transition-colors duration-200 hover:translate-x-1 transform block">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-lg">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-slate-400">
                <Mail size={16} className="text-blue-400" />
                <span>support@gocart.com</span>
              </div>
              <div className="flex items-center gap-3 text-slate-400">
                <Phone size={16} className="text-green-400" />
                <span>+91 1800-123-4567</span>
              </div>
              <div className="flex items-start gap-3 text-slate-400">
                <MapPin size={16} className="text-red-400 mt-1" />
                <span className="text-sm">
                  GoCart Internet Private Limited,<br />
                  Bengaluru, Karnataka 560103
                </span>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-6">
              <h5 className="text-white font-semibold mb-3">Follow Us</h5>
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="w-10 h-10 bg-slate-700 hover:bg-slate-600 rounded-xl flex items-center justify-center text-slate-300 hover:text-white transition-all duration-300 hover:scale-110 hover:shadow-lg"
                    aria-label={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative border-t border-slate-700/50">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
            {/* Copyright */}
            <div className="flex items-center gap-2 text-slate-400 text-sm">
              <span>© 2007-{new Date().getFullYear()} GoCart</span>
              <span>•</span>
              <span>Made with <Heart size={14} className="inline text-red-400" /> in India</span>
            </div>

            {/* Payment Methods */}
            <div className="flex items-center gap-4">
              <span className="text-slate-400 text-sm">We Accept:</span>
              <div className="flex gap-3">
                {[
                  "https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.png",
                  "https://upload.wikimedia.org/wikipedia/commons/0/04/Mastercard-logo.png",
                  "https://upload.wikimedia.org/wikipedia/commons/c/cb/Rupay-Logo.png",
                  "https://cdn.iconscout.com/icon/free/png-256/free-upi-logo-icon-svg-download-png-1747946.png"
                ].map((logo, index) => (
                  <div key={index} className="w-8 h-8 bg-white rounded-lg p-1 flex items-center justify-center">
                    <img src={logo} alt="Payment method" className="max-w-full max-h-full object-contain" />
                  </div>
                ))}
              </div>
            </div>

            {/* Scroll to Top */}
            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 bg-slate-700 hover:bg-slate-600 text-slate-300 px-4 py-2 rounded-xl transition-all duration-300 hover:scale-105 hover:text-white group"
            >
              <span className="text-sm">Back to Top</span>
              <ArrowUp size={16} className="group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>
        </div>
      </div>

      {/* Security Badge */}
      <div className="bg-slate-800/50 border-t border-slate-700/50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-center gap-2 text-slate-400 text-sm">
            <Shield size={16} className="text-green-400" />
            <span>100% Secure and Trusted • SSL Encrypted</span>
          </div>
        </div>
      </div>
    </footer>
  );
}