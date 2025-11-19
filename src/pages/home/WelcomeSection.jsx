import React, { useState, useEffect } from "react";
import { ArrowRight, Star, Droplet, Gift } from "lucide-react";
import { Link } from "react-router-dom";

export default function BluKinsWelcome() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

   useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Decorative navy shapes */}
      <div className="absolute top-0 right-0 w-1/3 h-64 bg-blue-900 opacity-5"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-96 bg-blue-900 opacity-5"></div>

      {/* Navigation placeholder */}
      <div className="h-20"></div>

      {/* Main Hero Section */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-8 lg:px-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div
            className={`space-y-6 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            {/* Badge */}
            <div className="inline-flex items-center border-2 border-blue-900 px-4 py-1.5 sm:px-6 sm:py-2">
              <Star className="w-4 h-4 text-blue-900 mr-2" />
              <span className="text-blue-900 text-[10px] sm:text-xs tracking-[0.3em] uppercase font-medium">
                Premium Experience
              </span>
            </div>

            {/* Main Heading */}
            <div className="space-y-6">
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light text-blue-950 tracking-tight">
                Blu Kings
              </h1>

              <div className="flex items-center gap-4">
                <div className="w-16 sm:w-20 h-0.5 bg-blue-900"></div>
                <p className="text-blue-900 text-xs sm:text-sm tracking-[0.25em] uppercase">
                  Since 2021
                </p>
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-blue-900 leading-snug mt-4 sm:mt-6">
                Whisky & Rum  <br className="hidden sm:block" /> Refined to Perfection
              </h2>
            </div>

            {/* Description */}
            <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed font-light max-w-xl">
              Constantly Blending up to perfection.<br/>
              Every bottle celebration of taste and tradition.
            </p>

            {/* Icon Features */}
            <div className="grid grid-cols-3 gap-4 sm:gap-6 md:gap-8 py-6 sm:py-8 border-t border-b border-gray-200">
              <div className="text-center">
                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-blue-900 flex items-center justify-center mx-auto mb-3 sm:mb-4 rounded-lg">
                  <Droplet className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                </div>
                <p className="text-blue-950 font-medium text-xs sm:text-sm">200+ Spirits</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-blue-900 flex items-center justify-center mx-auto mb-3 sm:mb-4 rounded-lg">
                  <Star className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                </div>
                <p className="text-blue-950 font-medium text-xs sm:text-sm">Award Winning</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-blue-900 flex items-center justify-center mx-auto mb-3 sm:mb-4 rounded-lg">
                  <Gift className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                </div>
                <p className="text-blue-950 font-medium text-xs sm:text-sm">Rare Editions</p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 pt-4 mb-6">
              <Link to="/gallery">
              <button className="group bg-blue-900 text-white px-8 sm:px-10 md:px-12 py-2.5 sm:py-3 hover:bg-blue-950 transition-all duration-300 flex items-center gap-3 sm:gap-4 shadow-lg hover:shadow-xl">
                <span className="text-xs sm:text-sm tracking-[0.2em] uppercase font-medium">
                  View Gallery
                </span>
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-2 transition-transform duration-300" />
              </button>
              </Link>
              <Link to="/contact">
              <button className="border-2 border-blue-900 text-blue-900 px-8 sm:px-10 md:px-12 py-2.5 sm:py-3 hover:bg-blue-900 hover:text-white transition-all duration-300">
                <span className="text-xs sm:text-sm tracking-[0.2em] uppercase font-medium">
                  Book Tasting
                </span>
              </button>
              </Link>
            </div>
          </div>

          {/* Right Image Section */}
          <div
            className={`relative transition-all duration-1000 delay-300 mb-8 lg:mb-10 ${
              isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
            }`}
          >
            <div className="relative w-full">
              {/* Main Image */}
              <div className="relative w-full overflow-hidden rounded-md">
                <img
                  src="/welcome/welcome.webp"
                  alt="Premium Whisky"
                  className="w-full h-auto max-h-[650px] object-contain sm:object-cover rounded-md shadow-2xl"
                />

                {/* Bottom Overlay Card */}
                <div className="absolute bottom-3 sm:bottom-6 md:bottom-8 left-3 sm:left-6 md:left-8 right-3 sm:right-6 md:right-8 bg-blue-900/80 backdrop-blur-xl p-4 sm:p-6 md:p-8 shadow-2xl rounded-md">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <div>
                      <p className="text-xs tracking-[0.25em] uppercase text-gray-200 mb-1 font-medium">
                        Featured This Week
                      </p>
                      <h3 className="text-xl sm:text-2xl md:text-3xl font-light text-white mb-1">
                        Highland Reserve 25
                      </h3>
                      <p className="text-gray-100 text-sm sm:text-base">
                        Cheers to Life Every Day...!
                      </p>
                    </div>
                    <div className="text-left sm:text-right">
                      <div className="flex gap-1 mb-1 justify-start sm:justify-end">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className="w-4 h-4 fill-yellow-500 text-yellow-500"
                          />
                        ))}
                      </div>
                      <p className="text-xs sm:text-sm text-gray-300">5.0 Rating</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative Corners */}
              <div className="absolute -top-6 sm:-top-8 -left-6 sm:-left-8 w-20 sm:w-28 md:w-32 h-20 sm:h-28 md:h-32 border-l-4 border-t-4 border-blue-900"></div>
              <div className="absolute -bottom-6 sm:-bottom-8 -right-6 sm:-right-8 w-20 sm:w-28 md:w-32 h-20 sm:h-28 md:h-32 border-r-4 border-b-4 border-blue-900"></div>

              {/* Floating Info Card */}
              <div className="absolute hidden md:block -right-12 bottom-1/3 bg-white border-2 border-blue-900 p-6 shadow-xl transform hover:scale-105 transition-transform duration-300 rounded-md">
                <p className="text-3xl lg:text-4xl font-light text-blue-950 mb-1">12K</p>
                <p className="text-sm tracking-wider uppercase text-blue-900">Members</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
