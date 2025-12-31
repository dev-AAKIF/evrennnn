import React, { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle2,
  Sparkles,
  MessageSquare,
  Clock,
  Users,
} from "lucide-react";
import emailjs from '@emailjs/browser';
// import { Send } from 'lucide-react'

const Contact = () => {

 const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [previewUrl, setPreviewUrl] = useState("");

 emailjs.init("uH-pGiD9_znq1JrnF"); // Replace with your actual public key
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };



  const sendToGoogleSheets = async (data) => {
    try {
      const response = await fetch('https://script.google.com/macros/s/AKfycbwoOrc2SfnHvURqwiJDuX-tIIVJCidKiLNk1I4sQRm8UT3z3r5XYnc8bnjWDdaZjQtZKA/exec', {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          message: data.message,
          timestamp: new Date().toISOString()
        })
      });
      return true;
    } catch (err) {
      console.error('Google Sheets error:', err);
      return false;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      // Send email via EmailJS
      const emailResult = await emailjs.send(
        'service_e50othq',      // Replace with your Service ID
        'template_myjejul',     // Replace with your Template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_name: 'Evron Research Team',
        }
      );

      // Send to Google Sheets
      await sendToGoogleSheets(formData);

      if (emailResult.status === 200) {
        setIsSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
        
        // Reset success message after 5 seconds
        setTimeout(() => {
          setIsSubmitted(false);
        }, 5000);
      }
    } catch (err) {
      console.error('Error:', err);
      setError('Failed to send message. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // if (isSubmitted) {
  //   return (
  //     <div className="bg-green-900/20 text-green-400 p-6 rounded-lg border border-green-800 text-center">
  //       <h3 className="text-xl font-semibold mb-2">Thank You!</h3>
  //       <p>Your message has been sent successfully. We'll get back to you soon.</p>
  //     </div>
  //   );
  // }
  

  const contactInfo = [
    // {
    //   icon: MapPin,
    //   title: "Visit Us",
    //   content: "Navi Mumbai - Kopar Khairane",
    //   gradient: "from-purple-500 to-pink-500",
    // },
    {
      icon: Phone,
      title: "Call Us",
      content: "+919967810464",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: Mail,
      title: "Email Us",
      content: "aslan@evrenresearch.com",
      gradient: "from-orange-500 to-red-500",
    },
  ];

  const features = [
    { icon: Clock, text: "24/7 Support" },
    { icon: Users, text: "Expert Team" },
    { icon: MessageSquare, text: "Quick Response" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50 to-pink-50">
      {/* Hero Section */}
    <section className="relative overflow-hidden bg-[#260433]">
        <div className="relative w-full flex flex-col items-center justify-center overflow-hidden ">
          {/* Lamp Effect Background */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative w-full h-full">
              {/* Main Lamp Glow */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[40rem] h-[40rem] bg-purple-500/30 rounded-full blur-[120px] animate-pulse"></div>
              
              {/* Secondary Glows */}
              <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[30rem] h-[30rem] bg-pink-500/20 rounded-full blur-[100px]"></div>
              <div className="absolute top-40 left-1/2 -translate-x-1/2 w-[20rem] h-[20rem] bg-blue-500/15 rounded-full blur-[80px]"></div>
            </div>
          </div>

          {/* Content */}
          <div className="relative z-10 container mx-auto px-4 pt-32 pb-20 md:pt-40 md:pb-24">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm shadow-lg mb-8 border border-white/20">
                <Sparkles className="w-4 h-4 text-purple-300" />
                <span className="text-sm font-semibold text-white">
                  Let's Connect
                </span>
              </div>
              
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                <span className="bg-white bg-clip-text text-transparent">
                  Get in Touch
                </span>
              </h1>
              
              <p className="text-lg md:text-xl text-white max-w-2xl mx-auto">
                Have a question or ready to transform your business? We're here to help you succeed.
              </p>
            </div>
          </div>

          {/* Bottom Gradient Fade */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-50 to-transparent"></div>
        </div>
      </section>

      {/* Features Bar */}
      <section className="py-6 bg-white/50 backdrop-blur-sm border-y border-purple-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-8 md:gap-16">
            {features.map((feature, idx) => (
              <div key={idx} className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-fuchsia-800 flex items-center justify-center ">
                  <feature.icon className="w-5 h-5 text-purple-200" />
                </div>
                <span className="font-semibold text-gray-700">{feature.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
              {/* Left Side - Contact Cards */}
              <div className="space-y-6">
                <div className="bg-white rounded-3xl p-6 md:p-8 shadow-xl border border-purple-100">
                  <h2 className="text-2xl md:text-3xl font-bold mb-2 bg-fuchsia-800 bg-clip-text text-transparent">
                    Contact Information
                  </h2>
                  <p className="text-gray-600 mb-8 text-sm md:text-base">
                    Choose your preferred way to reach us
                  </p>

                 <div className="space-y-4">
  {contactInfo.map((item, idx) => {
    const isCall = item.title.toLowerCase().includes("call");
    const isEmail = item.title.toLowerCase().includes("email");
    
    // Determine href
    const href = isCall
      ? `tel:${item.content.replace(/\s+/g, "")}`
      : isEmail
      ? `mailto:${item.content}`
      : null;

    return (
      <div
        key={idx}
        className="group relative overflow-hidden bg-gradient-to-br from-gray-50 to-white rounded-2xl p-5 md:p-6 hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-purple-200"
      >
        <div className="flex items-start gap-4">
          <div
            className={`w-12 h-12 md:w-14 md:h-14 rounded-xl bg-fuchsia-800 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}
          >
            <item.icon className="w-6 h-6 md:w-7 md:h-7 text-purple-200" />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="font-bold text-base md:text-lg text-gray-900 mb-1">
              {item.title}
            </h3>
            {href ? (
              <a
                href={href}
                className="text-sm md:text-base text-gray-600 break-words hover:text-purple-800 transition-colors duration-300"
              >
                {item.content}
              </a>
            ) : (
              <p className="text-sm md:text-base text-gray-600 break-words">
                {item.content}
              </p>
            )}
          </div>
        </div>
      </div>
    );
  })}
</div>

                </div>

                {/* CTA Card */}
                <div className=" bg-[#260433] border-fuchsia-700 rounded-3xl p-6 md:p-8 text-white shadow-xl">
                  <h3 className="text-xl md:text-2xl font-bold mb-3">Ready to Start?</h3>
                  <p className="text-purple-100 mb-6 text-sm md:text-base">
                    Join hundreds of businesses that trust us with their research needs.
                  </p>
                  <div className="flex items-center gap-3 text-sm">
                    <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                    <span>Response within 24 hours</span>
                  </div>
                </div>
              </div>

              {/* Right Side - Form */}
              <div className="bg-white rounded-3xl shadow-2xl border border-purple-100 overflow-hidden">
                {isSubmitted ? (
                  <div className="p-8 md:p-12 text-center min-h-[500px] md:min-h-[600px] flex flex-col items-center justify-center">
                    <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center mb-6 animate-bounce">
                      <CheckCircle2 className="w-8 h-8 md:w-10 md:h-10 text-white" />
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                      Message Sent! 🎉
                    </h3>
                    <p className="text-gray-600 mb-8 max-w-md text-sm md:text-base">
                      Thank you for reaching out! Our team will get back to you within 24 hours.
                    </p>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="px-6 md:px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105 text-sm md:text-base"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <div className="p-6 md:p-12">
                    <div className="mb-8">
                      <h2 className="text-2xl md:text-3xl font-bold mb-2 bg-fuchsia-800 bg-clip-text text-transparent">
                        Send us a Message
                      </h2>
                      <p className="text-gray-600 text-sm md:text-base">
                        Fill out the details below and we'll respond shortly
                      </p>
                    </div>

                    {error && (
                      <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl text-red-600 text-sm">
                        {error}
                      </div>
                    )}

                    <div className="space-y-6">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 md:px-5 py-3 md:py-4 rounded-xl bg-gray-50 border-2 border-gray-200 text-gray-900 placeholder-gray-400 focus:border-purple-500 focus:bg-white transition-all duration-200 outline-none text-sm md:text-base"
                          placeholder="John Doe"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 md:px-5 py-3 md:py-4 rounded-xl bg-gray-50 border-2 border-gray-200 text-gray-900 placeholder-gray-400 focus:border-purple-500 focus:bg-white transition-all duration-200 outline-none text-sm md:text-base"
                          placeholder="john@company.com"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Your Message *
                        </label>
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          rows={6}
                          className="w-full px-4 md:px-5 py-3 md:py-4 rounded-xl bg-gray-50 border-2 border-gray-200 text-gray-900 placeholder-gray-400 focus:border-purple-500 focus:bg-white transition-all duration-200 outline-none resize-none text-sm md:text-base"
                          placeholder="Tell us about your project or question..."
                        ></textarea>
                      </div>

                      <button
                        onClick={handleSubmit}
                        disabled={isSubmitting}
                        className={`w-full flex items-center justify-center gap-3 px-6 md:px-8 py-4 md:py-5 rounded-xl text-white font-bold text-base md:text-lg transition-all duration-300 ${
                          isSubmitting
                            ? "bg-gray-400 cursor-not-allowed"
                            : "text-white bg-fuchsia-900 hover:shadow-xl hover:scale-[1.02] active:scale-[0.98]"
                        }`}
                      >
                        {isSubmitting ? (
                          <>
                            <div className="w-5 h-5 md:w-6 md:h-6 border-3 border-white border-t-transparent rounded-full animate-spin"></div>
                            Sending...
                          </>
                        ) : (
                          <>
                            Send Message
                            <Send className="w-4 h-4 md:w-5 md:h-5" />
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;