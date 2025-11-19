import React from 'react';
import { Target, Eye } from 'lucide-react';

export default function MissionVisionCards() {
  return (
    <div className="min-h-screen bg-white py-20 px-4 sm:py-20 sm:px-6 lg:px-20">
      <div className="max-w-7xl mx-auto space-y-8 sm:space-y-12 md:space-y-16 lg:space-y-20 xl:space-y-24 px-8">

        {/* Mission Card */}
        <div className="relative group bg-white rounded-3xl shadow-2xl overflow-hidden transition-all duration-500 hover:-translate-y-2">
          <div className="flex flex-col lg:flex-row items-stretch relative">

            {/* Image Side */}
            <div className="w-full lg:w-1/2 h-56 sm:h-72 md:h-80 lg:h-[520px] relative overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop"
                alt="Our Mission"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
            </div>

            {/* Gradient Divider */}
            <div className="hidden lg:block w-0.5 bg-gradient-to-b from-transparent via-[#040472] to-transparent"></div>

            {/* Text Side */}
            <div className="w-full lg:w-1/2 p-6 sm:p-8 md:p-10 lg:p-14 xl:p-16 flex flex-col justify-center relative">
              {/* Decorative Corners */}
              <div className="absolute top-4 sm:top-6 lg:top-8 right-4 sm:right-6 lg:right-8 w-10 sm:w-14 lg:w-20 h-10 sm:h-14 lg:h-20 border-t-2 border-r-2 border-[#7e7ed8] rounded-tr-3xl"></div>
              <div className="absolute bottom-4 sm:bottom-6 lg:bottom-8 left-4 sm:left-6 lg:left-8 w-10 sm:w-14 lg:w-20 h-10 sm:h-14 lg:h-20 border-b-2 border-l-2 border-[#7e7ed8] rounded-bl-3xl"></div>
              
              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6 bg-[#040472] text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
                  <Target className="w-5 h-5 sm:w-6 sm:h-6 font-extralight" />
                  <span className="font-bold font-serif text-sm sm:text-lg">Our Mission</span>
                </div>
                <h2 className="text-2xl sm:text-4xl lg:text-5xl font-medium bg-[#040472] bg-clip-text text-transparent mb-4 sm:mb-6 font-serif leading-snug sm:leading-tight">
                  Perfect harmony of Indian heritage
                </h2>
                <p className="text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed mb-4 sm:mb-6 ">
To craft world-class spirits that embody the perfect harmony of Indian heritage and global excellence. At Blu Kings Distillers, our mission is to blend tradition, craftsmanship, and innovation to create whiskies like Black & Black Platinum Scotch — refined, smooth, and timeless. We strive to deliver an exceptional experience in every sip, offering our consumers not just a drink, but a journey of indulgence and distinction                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Vision Card */}
        <div className="relative group bg-white rounded-3xl shadow-2xl overflow-hidden border border-purple-200/50 transition-all duration-500 hover:-translate-y-2">
          <div className="flex flex-col lg:flex-row-reverse items-stretch relative">

            {/* Image Side */}
            <div className="w-full lg:w-1/2 h-56 sm:h-72 md:h-80 lg:h-[500px] relative overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&h=600&fit=crop"
                alt="Our Vision"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
            </div>

            {/* Gradient Divider */}
            <div className="hidden lg:block w-0.5 bg-gradient-to-b from-transparent via-[#040472] to-transparent"></div>

            {/* Text Side */}
            <div className="w-full lg:w-1/2 p-6 sm:p-8 md:p-10 lg:p-14 xl:p-16 flex flex-col justify-center relative">
              {/* Decorative Corners */}
              <div className="absolute top-4 sm:top-6 lg:top-8 left-4 sm:left-6 lg:left-8 w-10 sm:w-14 lg:w-20 h-10 sm:h-14 lg:h-20 border-t-2 border-l-2 border-[#7e7ed8] rounded-tl-3xl"></div>
              <div className="absolute bottom-4 sm:bottom-6 lg:bottom-8 right-4 sm:right-6 lg:right-8 w-10 sm:w-14 lg:w-20 h-10 sm:h-14 lg:h-20 border-b-2 border-r-2 border-[#7e7ed8] rounded-br-3xl"></div>
              
              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6 bg-[#040472] text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
                  <Eye className="w-5 h-5 sm:w-6 sm:h-6" />
                  <span className="font-semibold text-sm sm:text-lg">Our Vision</span>
                </div>
                <h2 className="text-2xl sm:text-4xl lg:text-5xl font-medium bg-[#040472] font-serif bg-clip-text text-transparent mb-4 sm:mb-6 leading-snug sm:leading-tight">
               Global symbol of premium craftsmanship
                </h2>
                <p className="text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed mb-4 sm:mb-6 ">
To be recognized as a global symbol of premium craftsmanship, representing India’s evolving luxury spirits industry on the world stage. Through brands like Black & Black Platinum, our vision is to inspire connoisseurs across borders — redefining sophistication, setting new standards in quality, and celebrating the spirit of perfection in every bottle.                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}