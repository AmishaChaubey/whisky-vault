// AboutSection.jsx - Fully Responsive About Component

import React from 'react';

export default function AboutSection({ data }) {
  const { hero, content, images } = data;
 window.scrollTo(0, 0);
  return (
    <section className="bg-white relative overflow-hidden">
      <style>{`
        @keyframes zoom {
          0% { transform: scale(1); }
          50% { transform: scale(1.06); }
          100% { transform: scale(1); }
        }

        .animate-zoom {
          animation: zoom 12s infinite ease-in-out;
        }
      `}</style>
      
      {/* Header Banner with Background Image */}
      <div className="relative mb-0 overflow-hidden h-[400px] sm:h-[500px] md:h-[550px] lg:h-[650px]">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center animate-zoom"
          style={{ 
            backgroundImage: `url(${hero.backgroundImage})`,
          }}
        ></div>
        
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/30"></div>
        
        {/* Content - Left Aligned */}
        <div className="relative h-full flex items-center px-4 sm:px-8 md:px-8 lg:px-12 max-w-7xl mx-auto">
          <div className="text-left -mt-4 sm:-mt-6 md:-mt-8 lg:-mt-10">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-medium mb-2 sm:mb-3 text-white tracking-wide font-serif" style={{ fontWeight: 700 }}>
              {hero.title}
            </h1>
            <div className="w-12 sm:w-16 md:w-20 mb-3 sm:mb-4" style={{ height: '3px', backgroundColor: '#ef4444' }}></div>
            <p className="text-white text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg font-serif" style={{ opacity: 0.99, lineHeight: '1.7' }}>
              {hero.description.map((line, index) => (
                <React.Fragment key={index}>
                  {line}
                  {index < hero.description.length - 1 && <br className="hidden sm:block" />}
                </React.Fragment>
              ))}
            </p>
          </div>
        </div>

       
      </div>
      
      <div className="max-w-7xl mx-auto relative py-8 sm:py-12 md:py-16 lg:py-18 px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 sm:gap-16 md:gap-20 lg:gap-32 items-center">
          <div className="space-y-6 sm:space-y-7 md:space-y-8 order-1 lg:order-1">
            {/* Enhanced Eyebrow */}
            <div className="inline-flex items-center gap-2 sm:gap-3 px-3 sm:px-4 md:px-5 py-2 sm:py-2.5 rounded-full border border-amber-400/40 bg-gradient-to-r from-amber-50 to-orange-50 shadow-sm">
              {content.eyebrow.hasAnimation && (
                <div className="w-1.5 h-1.5 rounded-full bg-amber-600 animate-pulse"></div>
              )}
              <span className="text-amber-900 uppercase tracking-[0.15em] sm:tracking-[0.25em] text-[10px] sm:text-xs font-bold" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                {content.eyebrow.badge}
              </span>
            </div>
            
            {/* Improved Heading with Gradient */}
            <div className="space-y-3 sm:space-y-4 md:space-y-5">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif leading-[1.1] tracking-tight text-[#040472]">
                {content.heading.line1}
                <span className="block mt-1 sm:mt-2 bg-[#040472] bg-clip-text text-transparent">
                  {content.heading.line2}
                </span>
              </h2>
              
              {/* Animated Underline */}
              <div className="w-20 sm:w-24 md:w-30 h-1 bg-[#040472] rounded-full"></div>
            </div>
            
            {/* Enhanced Subheading */}
            <p className="text-base sm:text-lg md:text-xl text-slate-600 leading-relaxed max-w-xl" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
              {content.subheading}
            </p>
            
            {/* Improved Description */}
            <div className="space-y-4 sm:space-y-5 text-slate-700 text-sm sm:text-base md:text-lg text-justify leading-relaxed max-w-xl" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
              {content.description.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>

          {/* Enhanced Image Side with Overlapping Design */}
          <div className="order-2 lg:order-2 relative px-4 sm:px-0">
            <div className="relative">
              {/* Main Large Image */}
              <div className="relative h-[400px] sm:h-[450px] md:h-[500px] lg:h-[550px] xl:h-[600px] w-full rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl group">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-amber-600/20 blur-xl transform scale-105 group-hover:scale-110 transition-transform duration-700"></div>
                
                <img
                  src={images.main.src}
                  alt={images.main.alt}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              
              {/* Small Overlapping Image Bottom Left */}
              <div className="absolute -bottom-1 -left-4 sm:-left-8 md:-left-12 lg:-left-17 w-48 sm:w-56 md:w-64 lg:w-74 h-52 sm:h-60 md:h-72 lg:h-82 rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl border-2 sm:border-4 border-white transform hover:-translate-y-2 transition-transform duration-500">
                <img
                  src={images.secondary.src}
                  alt={images.secondary.alt}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>
              
              {/* Decorative Element Top Left */}
              <div className="hidden sm:block absolute -top-4 sm:-top-6 -left-4 sm:-left-6 w-12 sm:w-16 md:w-20 h-12 sm:h-16 md:h-20 border-t-2 sm:border-t-4 border-l-2 sm:border-l-4 rounded-tl-2xl sm:rounded-tl-3xl border-[#040472]"></div>
              
              {/* Decorative Element Bottom Right */}
              <div className="hidden sm:block absolute -bottom-4 sm:-bottom-6 -right-4 sm:-right-6 w-12 sm:w-16 md:w-20 h-12 sm:h-16 md:h-20 border-b-2 sm:border-b-4 border-r-2 sm:border-r-4 rounded-br-2xl sm:rounded-br-3xl border-[#040472]"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}