import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState('');
 
  // Add CSS styles directly to the document
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      @keyframes float-slow {
        0%, 100% { transform: translateY(0) rotate(0deg); }
        50% { transform: translateY(-10px) rotate(2deg); }
      }
      
      @keyframes float-medium {
        0%, 100% { transform: translateY(0) rotate(0deg); }
        50% { transform: translateY(-15px) rotate(-2deg); }
      }
      
      @keyframes float-fast {
        0%, 100% { transform: translateY(0) rotate(0deg); }
        50% { transform: translateY(-8px) rotate(1deg); }
      }
      
      @keyframes pulse-glow {
        0%, 100% { opacity: 0.1; transform: scale(1); }
        50% { opacity: 0.2; transform: scale(1.05); }
      }
      
      @keyframes rotate-slow {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
      }
      
      @keyframes bounce-gentle {
        0%, 100% { transform: translateY(0); }
        50% { transform: translateY(-5px); }
      }
      
      .animate-float-slow {
        animation: float-slow 8s ease-in-out infinite;
      }
      
      .animate-float-medium {
        animation: float-medium 6s ease-in-out infinite;
      }
      
      .animate-float-fast {
        animation: float-fast 4s ease-in-out infinite;
      }
      
      .animate-pulse-glow {
        animation: pulse-glow 3s ease-in-out infinite;
      }
      
      .animate-rotate-slow {
        animation: rotate-slow 20s linear infinite;
      }
      
      .animate-bounce-gentle {
        animation: bounce-gentle 2s ease-in-out infinite;
      }
      
      .card-shadow {
        box-shadow: 0 20px 25px -5px rgba(4, 4, 114, 0.1), 0 10px 10px -5px rgba(4, 4, 114, 0.04);
      }
      
      .input-focus {
        transition: all 0.3s ease;
      }
      
      .input-focus:focus {
        box-shadow: 0 0 0 3px rgba(4, 4, 114, 0.1);
      }
      
      .hover-lift {
        transition: transform 0.3s ease, box-shadow 0.3s ease;
      }
      
      .hover-lift:hover {
        transform: translateY(-2px);
        box-shadow: 0 10px 15px -3px rgba(4, 4, 114, 0.1), 0 4px 6px -2px rgba(4, 4, 114, 0.05);
      }
      
      .pattern-dots {
        background-image: radial-gradient(#040472 1px, transparent 1px);
        background-size: 20px 20px;
      }
    `;
    document.head.appendChild(style);
    
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone is required';
    } else if (!/^\d{10}$/.test(formData.phone.replace(/\D/g, ''))) {
      newErrors.phone = 'Phone number must be 10 digits';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    return newErrors;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate form first
    const newErrors = validateForm();
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    
    // Clear errors and start submission
    setErrors({});
    setStatus("");
    setLoading(true);
     
    try {
      const response = await fetch("https://test2.deboxtechnology.com/send_contact.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      const result = await response.json();
      setLoading(false);

      if (result.success) {
        setStatus("Message sent successfully! We'll get back to you soon.");
        setSubmitted(true);
        setFormData({ name: "", email: "", message: "", phone: "", subject: "" });
        
        // Reset success message after 5 seconds
        setTimeout(() => {
          setSubmitted(false);
          setStatus("");
        }, 5000);
      } else {
        setStatus("Failed: " + result.message);
      }
    } catch(error) {
      setLoading(false);
      setStatus("Something went wrong. Please check your connection!");
    }
  };

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      {/* Header Banner with Background Image */}
      <div className="relative mb-0 overflow-hidden" style={{ height: '600px' }}>
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: 'url(https://images.pexels.com/photos/28321235/pexels-photo-28321235.jpeg)',
          }}
        ></div>
        
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/30"></div>
        
        {/* Content - Left Aligned */}
        <div className="relative h-full flex items-center px-8 sm:px-16 lg:px-32 max-w-7xl">
          <div className="text-left" style={{ marginTop: '-40px' }}>
            <h1 className="text-8xl sm:text-8xl font-semibold mb-3 text-white tracking-tight font-serif" style={{ fontWeight: 700 }}>
             Contact Us
            </h1>
            <div className="w-16 mb-4" style={{ height: '3px', backgroundColor: '#ef4444' }}></div>
            <p className="text-white text-midium leading-relaxed max-w-lg" style={{ fontSize: '15px', opacity: 0.95, lineHeight: '1.7' }}>
              See your indulgent as this, he occasional admittance unreserved<br className="hidden sm:block" />
              friendship: unfeeling as. Is voice seemed to. Settling of goodness<br className="hidden sm:block" />
              felicity. Elderly it among as sense. Waited his if spoke no juvenile.
            </p>
          </div>
        </div>

      
      </div>

      {/* Contact Card Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="bg-gradient-to-l from-blue-50 via-blue-50 to-white/50 rounded-2xl card-shadow overflow-hidden relative">
          {/* Premium Animated Background */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {/* Top left corner elements */}
            <FloatingEnvelope top="5%" left="2%" animation="animate-float-slow" />
            
            {/* Top right corner elements */}
            <FloatingMessageBubble top="8%" right="5%" animation="animate-float-fast" />
            
            {/* Bottom left corner elements */}
            <FloatingPaperPlane bottom="8%" left="45%" animation="animate-float-fast" />
            
            {/* Subtle background pattern */}
            <div className="absolute inset-0 opacity-5 pattern-dots"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 relative z-10">
            {/* Left Section - Company Info */}
            <div className="bg-transparent p-8 lg:border-r-2 border-gray-200" style={{
              color: '#040472'
            }}>
              <h2 className="text-2xl font-bold mb-4 pt-10" style={{ color: '#040472' }}>Contact Information</h2>
              <p className="text-gray-600 mb-6">Fill out the form and our team will get back to you within 24 hours.</p>
              
              <div className="space-y-4">
                <div className="flex items-start hover-lift p-2 rounded-lg">
                  <div className="p-2 rounded-lg mr-3" style={{ backgroundColor: '#040472', color: 'white' }}>
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1 text-sm" style={{ color: '#040472' }}>Phone</h3>
                    <p className="text-gray-600 text-sm">+91 81716 63579</p>
                    <p className="text-gray-600 text-sm"> +0120 3585886</p>
                  </div>
                </div>

                <div className="flex items-start hover-lift p-2 rounded-lg">
                  <div className="p-2 rounded-lg mr-3" style={{ backgroundColor: '#040472', color: 'white' }}>
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1 text-sm" style={{ color: '#040472' }}>Email</h3>
                    <p className="text-gray-600 text-sm">info@blukingsdistillers.com</p>
                    <p className="text-gray-600 text-sm">support@blukingsdistillers.com</p>
                  </div>
                </div>

                <div className="flex items-start hover-lift p-2 rounded-lg">
                  <div className="p-2 rounded-lg mr-3" style={{ backgroundColor: '#040472', color: 'white' }}>
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1 text-sm" style={{ color: '#040472' }}>Address</h3>
                    <p className="text-gray-600 text-sm">B-14, Block C-127 Sector-63 Noida</p>
                    <p className="text-gray-600 text-sm">Uttar Pradesh , 201301</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Section - Contact Form */}
            <div className="p-8 bg-transparent">
              <h2 className="text-2xl font-bold mb-2" style={{ color: '#040472' }}>Send Us a Message</h2>
              <p className="text-gray-600 mb-6">We'll respond as soon as possible</p>

              {submitted && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg text-green-800 flex items-center">
                  <div className="w-3 h-3 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                  {status || "Thank you! Your message has been sent successfully."}
                </div>
              )}
              
              {!submitted && status && (
                <div className={`mb-6 p-4 rounded-lg ${status.includes('Failed') || status.includes('wrong') ? 'bg-red-50 border border-red-200 text-red-800' : 'bg-blue-50 border border-blue-200 text-blue-800'}`}>
                  {status}
                </div>
              )}

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 border rounded-lg focus:outline-none input-focus transition-colors ${
                      errors.name ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="John Doe"
                  />
                  {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 border rounded-lg focus:outline-none input-focus transition-colors ${
                      errors.email ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="john@example.com"
                  />
                  {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 border rounded-lg focus:outline-none input-focus transition-colors ${
                      errors.phone ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="+1 (555) 123-4567"
                  />
                  {errors.phone && <p className="mt-1 text-sm text-red-600">{errors.phone}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Subject *
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 border rounded-lg focus:outline-none input-focus transition-colors ${
                      errors.subject ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="How can we help?"
                  />
                  {errors.subject && <p className="mt-1 text-sm text-red-600">{errors.subject}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="3"
                    className={`w-full px-4 py-2 border rounded-lg focus:outline-none input-focus transition-colors resize-none ${
                      errors.message ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="Tell us more about your inquiry..."
                  />
                  {errors.message && <p className="mt-1 text-sm text-red-600">{errors.message}</p>}
                </div>

                <button
                  onClick={handleSubmit}
                  disabled={loading}
                  className="w-full py-3 px-6 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-center group relative overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed"
                  style={{
                    backgroundColor: '#040472'
                  }}
                >
                  <div className="absolute inset-0 opacity-0 hover:opacity-20 transition-opacity duration-200 bg-white"></div>
                  <Send className="w-5 h-5 mr-2 transition-transform group-hover:translate-x-1" />
                  {loading ? "Sending..." : "Send Message"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Spacing */}
      <div className="h-20"></div>
    </div>
  );
}

// New floating components - Contact/Business themed
const FloatingEnvelope = ({ top, left, animation, opacity = 0.1 }) => {
  return (
    <div className={`absolute ${animation} opacity-${opacity}`} style={{ top, left }}>
      <svg width="40" height="30" viewBox="0 0 40 30">
        <rect x="2" y="5" width="36" height="20" fill="none" stroke="#040472" strokeWidth="1.5" opacity="0.3" />
        <path d="M 2 5 L 20 18 L 38 5" stroke="#040472" strokeWidth="1.5" fill="none" opacity="0.3" />
        <circle cx="32" cy="10" r="2" fill="#040472" opacity="0.2" />
      </svg>
    </div>
  );
};

const FloatingMessageBubble = ({ top, right, animation, opacity = 0.1 }) => {
  return (
    <div className={`absolute ${animation} opacity-${opacity}`} style={{ top, right }}>
      <svg width="45" height="35" viewBox="0 0 45 35">
        <path d="M 5 5 Q 5 2 8 2 L 32 2 Q 35 2 35 5 L 35 20 Q 35 23 32 23 L 12 23 L 5 30 L 5 23 Q 5 23 5 20 Z" 
              fill="none" stroke="#040472" strokeWidth="1.5" opacity="0.3" />
        <circle cx="12" cy="12" r="1.5" fill="#040472" opacity="0.2" />
        <circle cx="20" cy="12" r="1.5" fill="#040472" opacity="0.2" />
        <circle cx="28" cy="12" r="1.5" fill="#040472" opacity="0.2" />
      </svg>
    </div>
  );
};

const FloatingPaperPlane = ({ bottom, left, animation, opacity = 0.1 }) => {
  return (
    <div className={`absolute ${animation} opacity-${opacity}`} style={{ bottom, left }}>
      <svg width="40" height="30" viewBox="0 0 40 30">
        <path d="M 5 15 L 35 5 L 25 15 L 35 25 Z" 
              fill="none" stroke="#040472" strokeWidth="1.5" opacity="0.3" />
        <path d="M 5 15 L 20 15" stroke="#040472" strokeWidth="1.5" opacity="0.3" />
      </svg>
    </div>
  );
};