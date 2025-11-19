import React, { useState } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { Link } from 'react-router-dom';
export default function WhiskyHeroSection() {
  
  const [isMuted, setIsMuted] = useState(true);

  return (
    <div className="relative h-screen w-full overflow-hidden bg-black">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <video
          autoPlay
          loop
          muted={isMuted}
          playsInline
          className="w-full h-full object-cover opacity-50"
        >
          <source
            src="/herosection/Banner4.mp4"
            type="video/mp4"
          />
        </video>
        
        {/* Sophisticated Overlay */}
        {/* <div className="absolute inset-0 bg-gradient-to-b from-[#040472]/60 via-[#040472]/30 to-black/90"></div> */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
      </div>

    

      {/* Main Content Container */}
      <div className="relative h-full flex items-center justify-center px-4 sm:px-6 lg:px-8 z-10">
        <div className="max-w-4xl w-full">
          
          {/* Hero Content */}
          <div className="text-center ">
            
            {/* Premium Badge */}
            <div className="inline-flex items-center gap-3 px-8 py-3 border mt-19 border-white  backdrop-blur-xl rounded-full animate-fade-in shadow-lg shadow-[#040472]/20">
              <div className="w-2 h-2 bg-white rounded-full animate-pulse-glow"></div> 
              <span className="text-white text-xs font-bold tracking-[0.4em] uppercase">Est. 2021</span>
         </div>

            {/* Main Headline */}
            <div className="space-y-6 animate-slide-up xl:mt-5">
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-7xl xl:text-9xl font-semibold text-white tracking-wide leading-none" style={{ fontFamily: "'Cormorant Garamond', 'Georgia', serif" }}>
                Crafted for
              </h1>
              <div className="relative inline-block">
                <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-7xl xl:text-8xl font-Semibold text-white relative z-10 tracking-tight leading-none font-serif">
                  Connoisseurs
                </h1>
                {/* Elegant Glow Effect */}
                <div className="absolute inset-0 text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-[#040472] blur-3xl opacity-60 animate-pulse-slow" style={{ fontFamily: "'Cormorant Garamond', 'Georgia', serif" }}>
                  Connoisseurs
                </div>
              </div>
            </div>

            {/* Decorative Divider */}
            <div className="flex items-center justify-center gap-4 pt-4 animate-fade-in-delay mb-5">
              <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-[#ffff] to-transparent"></div>
              <div className="w-3 h-3 bg-[#ffff] rounded-full"></div>
              <div className="w-16 h-0.5 bg-gradient-to-l from-transparent via-[#ffff] to-transparent"></div>
            </div>

            {/* Description */}
            <div className="animate-fade-in-delay">
              <p className="text-gray-300 text-base sm:text-lg md:text-xl max-w-5xl mx-auto leading-relaxed px-4 font-light" style={{ fontFamily: "'Inter', 'Arial', sans-serif" }}>
                Blu Kings is Mainly Producing and Selling Scotch, Whisky, Vodka, Rum , Brandy , Tequila , Wine & Gin .
                <span className="hidden sm:inline"> Each bottle tells a story of tradition, patience, and unparalleled craftsmanship.</span>
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4 animate-fade-in-delay-more">
              
              {/* Primary CTA */}
              <Link to='/collections'>
              <button className="group relative px-10 sm:px-12 py-4 bg-[#2222a2] text-white font-medium text-sm tracking-[0.2em] uppercase overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-[#040472]/50 hover:-translate-y-1 border border-[#040472]" style={{ fontFamily: "'Inter', 'Arial', sans-serif" }}>
                <span className="relative z-10 flex items-center gap-3">
                  Explore Collection
                  <svg className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#0505a0] to-[#040472] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute inset-0 bg-white/10 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 skew-x-12"></div>
              </button>
              </Link>
              
              {/* Secondary CTA */}
              <Link to ='/blog'>
              <button className="group px-10 sm:px-12 py-4 bg-transparent backdrop-blur-sm border-2 border-white/40 text-white font-medium text-sm tracking-[0.2em] uppercase transition-all duration-500 hover:bg-white hover:text-[#040472] hover:border-white hover:-translate-y-1 hover:shadow-xl" style={{ fontFamily: "'Inter', 'Arial', sans-serif" }}>
                Our Blog
              </button>
              </Link>
            </div>
          </div>

        </div>
      </div>


      {/* Elegant Corner Accents */}


      {/* Side Accent Lines */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-24 h-px bg-gradient-to-r from-[#040472]/60 to-transparent hidden xl:block"></div>
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-24 h-px bg-gradient-to-l from-[#040472]/60 to-transparent hidden xl:block"></div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;600&family=Inter:wght@300;400;500;600&display=swap');

        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes pulse-slow {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 0.8; }
        }

        @keyframes pulse-glow {
          0%, 100% { 
            opacity: 1;
            box-shadow: 0 0 8px #040472;
          }
          50% { 
            opacity: 0.6;
            box-shadow: 0 0 15px #040472;
          }
        }

        @keyframes scroll {
          0% {
            transform: translateY(0);
            opacity: 1;
          }
          50% {
            transform: translateY(14px);
            opacity: 0;
          }
          51% {
            transform: translateY(0);
            opacity: 0;
          }
          100% {
            transform: translateY(0);
            opacity: 1;
          }
        }

        @keyframes bounce-slow {
          0%, 100% {
            transform: translateX(-50%) translateY(0);
          }
          50% {
            transform: translateX(-50%) translateY(-12px);
          }
        }

        .animate-fade-in {
          animation: fade-in 1s ease-out forwards;
        }

        .animate-slide-up {
          animation: slide-up 1.2s ease-out 0.3s forwards;
          opacity: 0;
        }

        .animate-fade-in-delay {
          animation: fade-in 1s ease-out 0.8s forwards;
          opacity: 0;
        }

        .animate-fade-in-delay-more {
          animation: fade-in 1s ease-out 1.2s forwards;
          opacity: 0;
        }

        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }

        .animate-pulse-glow {
          animation: pulse-glow 2s ease-in-out infinite;
        }

        .animate-scroll {
          animation: scroll 2.5s ease-in-out infinite;
        }

        .animate-bounce-slow {
          animation: bounce-slow 2.5s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}