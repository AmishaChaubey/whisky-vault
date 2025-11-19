import React, { useState, useEffect } from "react";
import {
  ChevronDown,
  HelpCircle,
  Phone,
  Clock,
  Shield,
  CreditCard,
  Package,
  Truck,
  Star,
} from "lucide-react";

const FAQSection = () => {
  const faqData = [
    {
      icon: <HelpCircle className="w-5 h-5" />,
      question: "What products does Blu Kings Distillers offer?",
      answer:
        "Blu Kings Distillers offers a premium range of spirits including whisky, rum, gin, and vodka. Each blend is carefully crafted with high-quality ingredients, inspired by nature, and perfected through expert distillation techniques.",
    },
    {
      icon: <Clock className="w-5 h-5" />,
      question: "What are your operating hours?",
      answer:
        "Our distillery operates from Monday to Saturday, 9:00 AM to 6:00 PM. While the distillery is closed on Sundays, customer inquiries and business queries can be submitted online anytime.",
    },
    {
      icon: <Phone className="w-5 h-5" />,
      question: "How can I get in touch with Blu Kings Distillers?",
      answer:
        "You can contact us via phone at +91 98765 43210, email us at info@blukingsdistillers.com, or use the contact form on our official website. Our team will respond to your query promptly.",
    },
    {
      icon: <Shield className="w-5 h-5" />,
      question: "Are Blu Kings products authentic and safe?",
      answer:
        "Absolutely. Every Blu Kings bottle is produced under strict quality standards, ensuring authenticity and purity. Our spirits are crafted in licensed facilities and meet all legal and safety regulations.",
    },
    {
      icon: <Package className="w-5 h-5" />,
      question: "Do you offer custom or limited-edition blends?",
      answer:
        "Yes, Blu Kings Distillers occasionally releases limited-edition blends and custom-crafted spirits for special occasions, corporate gifting, and events. Stay updated through our website and social media pages.",
    },
    {
      icon: <Truck className="w-5 h-5" />,
      question: "Where can I find Blu Kings products?",
      answer:
        "Blu Kings products are available at select premium liquor stores, hotels, and bars across India. You can also contact our distributors or visit our website to find the nearest retail partner.",
    },
    {
      icon: <CreditCard className="w-5 h-5" />,
      question: "Do you sell products online?",
      answer:
        "Due to regional alcohol regulations, direct online sales are limited. However, you can connect with authorized partners listed on our website for online purchase options where permitted by law.",
    },
    {
      icon: <Star className="w-5 h-5" />,
      question: "Does Blu Kings Distillers host tastings or tours?",
      answer:
        "Yes, we occasionally host exclusive tasting events and guided distillery tours. Follow Blu Kings on social media or subscribe to our newsletter for announcements and invitations.",
    },
  ];

  const half = Math.ceil(faqData.length / 2);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (isMobile) {
      setActiveIndex(0);
    } else {
      setActiveIndex([0, half]);
    }
  }, [isMobile, half]);

  const toggleFAQ = (index) => {
    if (isMobile) {
      setActiveIndex(activeIndex === index ? null : index);
    } else {
      setActiveIndex((prev) => {
        if (Array.isArray(prev)) {
          if (prev.includes(index)) {
            return prev.filter((i) => i !== index);
          }
          if (index < half) {
            return [index, prev[1]];
          } else {
            return [prev[0], index];
          }
        }
        return [index];
      });
    }
  };

  const isOpen = (index) =>
    Array.isArray(activeIndex)
      ? activeIndex.includes(index)
      : activeIndex === index;

  return (
    <div className="min-h-screen bg-white py-8">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 text-center">
        <div
          className="inline-flex items-center justify-center w-14 h-14 rounded-full mb-3"
          style={{
            background: "linear-gradient(135deg, #040472 0%, #0606b8 100%)",
          }}
        >
          <HelpCircle className="w-7 h-7 text-white" />
        </div>
        <h1
          className="text-2xl md:text-3xl font-bold mb-2"
          style={{
            background: "linear-gradient(135deg, #040472 0%, #0606b8 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Frequently Asked Questions
        </h1>
        <p className="text-gray-600 text-sm md:text-base max-w-xl mx-auto">
          Discover more about Blu Kings Distillers, our premium spirits, and our
          commitment to excellence. Here are some answers to our most frequently
          asked questions.
        </p>
      </div>

      {/* FAQ Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <div className="bg-gradient-to-l from-white via-blue-50 to-blue-50 rounded-2xl shadow-xl overflow-hidden">
          <div className="relative">
            {/* Center Divider */}
            <div
              className="absolute top-0 left-1/2 transform -translate-x-1/2 w-px h-full hidden md:block"
              style={{
                background:
                  "linear-gradient(to bottom, transparent, #040472, transparent)",
              }}
            ></div>

            {/* Two Columns */}
            <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-gray-100 py-10 px-6 md:px-10">
              {/* Left Column */}
              <div className="divide-y divide-gray-100">
                {faqData.slice(0, half).map((item, index) => (
                  <FAQItem
                    key={index}
                    item={item}
                    index={index}
                    isOpen={isOpen(index)}
                    toggleFAQ={toggleFAQ}
                  />
                ))}
              </div>

              {/* Right Column */}
              <div className="divide-y divide-gray-100">
                {faqData.slice(half).map((item, index) => (
                  <FAQItem
                    key={index + half}
                    item={item}
                    index={index + half}
                    isOpen={isOpen(index + half)}
                    toggleFAQ={toggleFAQ}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Individual FAQ Item
const FAQItem = ({ item, index, isOpen, toggleFAQ }) => {
  return (
    <div className="overflow-hidden">
      <button
        onClick={() => toggleFAQ(index)}
        className="w-full px-4 md:px-6 py-3 md:py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
      >
        <div className="flex items-center space-x-3">
          <div
            className="flex-shrink-0 w-9 h-9 md:w-10 md:h-10 rounded-lg flex items-center justify-center transition-transform duration-200"
            style={{
              backgroundColor: "rgba(4, 4, 114, 0.1)",
              color: "#040472",
            }}
          >
            {item.icon}
          </div>
          <h3 className="font-semibold text-gray-800 pr-4 text-sm sm:text-base md:text-lg leading-snug">
            {item.question}
          </h3>
        </div>
        <div
          className={`flex-shrink-0 transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
          style={{ color: "#040472" }}
        >
          <ChevronDown className="w-5 h-5" />
        </div>
      </button>

      <div
        className={`transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        } overflow-hidden`}
      >
        <div className="px-6 pb-4">
          <div
            className="pl-3 border-l-2"
            style={{ borderColor: "rgba(4, 4, 114, 0.2)" }}
          >
            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              {item.answer}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
