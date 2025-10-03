import { useState } from "react";
import {
  Send,
  User,
  Mail,
  Phone,
  MessageSquare,
  MapPin,
  Clock,
  Headphones,
  CheckCircle2,
  ArrowRight,
  Star
} from "lucide-react";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));

    console.log("Form submitted:", formData);
    setIsSubmitted(true);
    setIsSubmitting(false);

    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
  };

  const contactInfo = [
    {
      icon: <Phone size={24} />,
      title: "Call Us",
      details: "+1 (555) 123-4567",
      subtitle: "Mon to Fri 9am to 6pm",
      color: "text-blue-500 bg-blue-50"
    },
    {
      icon: <Mail size={24} />,
      title: "Email Us",
      details: "support@gocart.com",
      subtitle: "Send us your query anytime",
      color: "text-green-500 bg-green-50"
    },
    {
      icon: <MapPin size={24} />,
      title: "Visit Us",
      details: "123 Commerce Street",
      subtitle: "Bengaluru, KA 560001",
      color: "text-purple-500 bg-purple-50"
    },
    {
      icon: <Clock size={24} />,
      title: "Working Hours",
      details: "24/7 Support",
      subtitle: "Live chat available",
      color: "text-orange-500 bg-orange-50"
    }
  ];

  const features = [
    "24/7 Customer Support",
    "Instant Response",
    "Expert Assistance",
    "Secure & Private"
  ];

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/20 flex items-center justify-center p-6">
        <div className="max-w-md w-full bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl border border-slate-200/60 p-8 text-center">
          <div className="w-20 h-20 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="text-green-600" size={40} />
          </div>
          <h2 className="text-3xl font-bold text-slate-800 mb-4">Message Sent!</h2>
          <p className="text-slate-600 mb-6 leading-relaxed">
            Thank you for reaching out! We've received your message and our team will get back to you within 24 hours.
          </p>
          <button
            onClick={() => setIsSubmitted(false)}
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-4 rounded-xl hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            Send Another Message
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/20 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <Headphones size={16} />
            We're Here to Help
          </div>
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-slate-800 via-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Get in Touch
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-6">
            {contactInfo.map((item, index) => (
              <div
                key={index}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-slate-200/60 hover:shadow-xl transition-all duration-300 hover:scale-105 group"
              >
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 ${item.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-800 mb-1">{item.title}</h3>
                    <p className="text-slate-700 font-medium">{item.details}</p>
                    <p className="text-slate-500 text-sm mt-1">{item.subtitle}</p>
                  </div>
                </div>
              </div>
            ))}

            {/* Features */}
            <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-6 text-white">
              <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
                <Star size={18} className="fill-current" />
                Why Choose Us?
              </h3>
              <ul className="space-y-3">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-3 text-blue-50">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl border border-slate-200/60 p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                  <MessageSquare className="text-white" size={20} />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-slate-800">Send us a Message</h2>
                  <p className="text-slate-600">Fill out the form below</p>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name + Email */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="flex items-center gap-2 text-sm font-semibold text-slate-700">
                      <User size={16} />
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full border border-slate-200 bg-white rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all placeholder-slate-400"
                      placeholder="John Doe"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="flex items-center gap-2 text-sm font-semibold text-slate-700">
                      <Mail size={16} />
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full border border-slate-200 bg-white rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all placeholder-slate-400"
                      placeholder="example@email.com"
                    />
                  </div>
                </div>

                {/* Phone + Subject */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="flex items-center gap-2 text-sm font-semibold text-slate-700">
                      <Phone size={16} />
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full border border-slate-200 bg-white rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all placeholder-slate-400"
                      placeholder="+91 9876543210"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="flex items-center gap-2 text-sm font-semibold text-slate-700">
                      <MessageSquare size={16} />
                      Subject *
                    </label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full border border-slate-200 bg-white rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all appearance-none"
                    >
                      <option value="">Select a subject</option>
                      <option value="order-inquiry">Order Inquiry</option>
                      <option value="product-support">Product Support</option>
                      <option value="payment-issue">Payment Issue</option>
                      <option value="return-refund">Return & Refund</option>
                      <option value="seller-inquiry">Seller Inquiry</option>
                      <option value="technical-support">Technical Support</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <label className="flex items-center gap-2 text-sm font-semibold text-slate-700">
                    <MessageSquare size={16} />
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full border border-slate-200 bg-white rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none placeholder-slate-400"
                    placeholder="Please describe your inquiry in detail. We're here to help!"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none group"
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center gap-3">
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Sending Message...
                    </div>
                  ) : (
                    <div className="flex items-center justify-center gap-3">
                      <Send size={18} />
                      Send Message
                      <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </div>
                  )}
                </button>

                {/* Privacy Note */}
                <p className="text-center text-slate-500 text-sm">
                  Your information is secure and will never be shared with third parties.
                </p>
              </form>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
          {[
            { number: "24/7", label: "Support Available" },
            { number: "15min", label: "Average Response" },
            { number: "98%", label: "Satisfaction Rate" },
            { number: "50k+", label: "Customers Helped" }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-slate-800 mb-2">{stat.number}</div>
              <div className="text-slate-600 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactPage;