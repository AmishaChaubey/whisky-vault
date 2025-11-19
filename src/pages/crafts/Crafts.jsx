import React from 'react';

const WhiskyMakingProcess = () => {
   window.scrollTo(0, 0);
  const processSteps = [
    {
      step: 1,
      title: "Malting",
      description: "Barley is soaked in water and allowed to germinate, converting starches into fermentable sugars. The germination is then stopped by drying the malted barley in a kiln, often using peat smoke to impart distinctive flavors.",
      icon: "🌾",
      image: "https://images.pexels.com/photos/5538163/pexels-photo-5538163.jpeg",
      duration: "5-7 Days",
      details: ["Steeping", "Germination", "Kiln Drying"]
    },
    {
      step: 2,
      title: "Mashing",
      description: "The dried malt is ground into grist and mixed with hot water in a mash tun. This process extracts the soluble sugars, creating a sweet liquid called wort that forms the foundation of the whisky.",
      icon: "⚗️",
      image: "https://i.pinimg.com/1200x/cf/fc/7e/cffc7ed82721b1ed09f31ad315383a8e.jpg",
      duration: "4-8 Hours",
      details: ["Gristing", "Mashing", "Wort Extraction"]
    },
    {
      step: 3,
      title: "Fermentation",
      description: "The wort is cooled and transferred to fermentation vessels called washbacks where yeast is added. Over several days, yeast converts sugars into alcohol, producing a liquid called wash with complex flavors.",
      icon: "🫧",
      image: "https://images.pexels.com/photos/1267358/pexels-photo-1267358.jpeg",
      duration: "48-96 Hours",
      details: ["Cooling", "Yeast Addition", "Fermentation"]
    },
    {
      step: 4,
      title: "Distillation",
      description: "The wash is distilled twice in traditional copper pot stills. The first distillation produces low wines, and the second refines them into new-make spirit, separating impurities and concentrating flavors.",
      icon: "🔥",
      image: "https://i.pinimg.com/736x/80/3c/63/803c63087e1f54cfecc56b28f19b3657.jpg",
      duration: "6-8 Hours",
      details: ["First Distillation", "Second Distillation", "Spirit Collection"]
    },
    {
      step: 5,
      title: "Maturation",
      description: "The spirit is aged in carefully selected oak casks for a minimum of 3 years. During this time, it develops its golden color, complex flavor profile, and smooth character through interaction with the wood.",
      icon: "🛢️",
      image: "https://images.pexels.com/photos/3769144/pexels-photo-3769144.jpeg",
      duration: "3+ Years",
      details: ["Cask Selection", "Aging", "Angel's Share"]
    },
    {
      step: 6,
      title: "Bottling",
      description: "After maturation, the whisky is carefully selected, may be filtered and diluted with pure water to achieve the desired alcohol content, then bottled to preserve its exceptional quality and character.",
      icon: "🍾",
      image: "https://i.pinimg.com/1200x/99/1d/a0/991da0d9621a7cafe5c53235e39f1e2a.jpg",
      duration: "Final Step",
      details: ["Selection", "Dilution", "Bottling"]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[70vh] sm:h-[80vh] md:h-[90vh] overflow-hidden">
        <img
          src="https://images.pexels.com/photos/1267311/pexels-photo-1267311.jpeg"
          alt="Whisky Banner"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/70 to-black/90"></div>

        {/* Decorative Elements */}
        <div className="absolute top-10 right-10 sm:top-20 sm:right-20 w-32 h-32 sm:w-64 sm:h-64 bg-[#040472]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 sm:bottom-40 sm:left-20 w-48 h-48 sm:w-96 sm:h-96 bg-[#ef4444]/10 rounded-full blur-3xl"></div>

        {/* Content */}
        <div className="relative h-full flex items-center px-4 sm:px-8 md:px-16 lg:px-10 max-w-7xl mx-auto">
          <div className="text-left w-full">
            <h1 className="text-5xl xs:text-6xl sm:text-7xl md:text-8xl font-bold mb-4 text-white tracking-tight font-serif" 
                style={{ fontWeight: 700, textShadow: '0 4px 20px rgba(0,0,0,0.5)' }}>
              Crafting
            </h1>
            <div className="w-16 sm:w-20 h-1 mb-4 sm:mb-6" 
                 style={{ background: 'linear-gradient(90deg, #ef4444, #dc2626)' }}></div>
            <p className="text-white text-sm sm:text-base md:text-lg leading-relaxed font-serif max-w-md opacity-95 text-justify" 
               style={{ lineHeight: '1.7', textShadow: '0 2px 10px rgba(0,0,0,0.5)' }}>
              Blu Kings Distillers, crafting whisky is more than a process
            it’s an art form perfected through time, tradition, and precision.
              Every bottle reflects a legacy of craftsmanship and an unwavering pursuit of excellence.
            </p>
          </div>
        </div>
        

      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto py-8 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Background Blobs */}
        <div className="absolute top-0 left-0 w-48 h-48 sm:w-64 sm:h-64 md:w-96 md:h-96 bg-amber-50 rounded-full filter blur-3xl opacity-20 -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-48 h-48 sm:w-64 sm:h-64 md:w-96 md:h-96 bg-blue-50 rounded-full filter blur-3xl opacity-20 translate-x-1/2 translate-y-1/2"></div>

        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 md:mb-20 lg:mb-24">
          <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-bold mb-4 md:mb-6 px-4" style={{ color: '#040472' }}>
            The Art of Whisky Making
          </h1>
          <div className="w-12 sm:w-16 md:w-20 h-0.5 md:h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto mb-4 md:mb-6"></div>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
            A journey through six meticulous steps where science meets artistry, transforming humble grains 
            into liquid gold through centuries-old traditions.
          </p>
        </div>

        {/* Process Timeline */}
        <div className="space-y-16 sm:space-y-20 md:space-y-24 lg:space-y-32">
          {processSteps.map((step, index) => (
            <div 
              key={step.step}
              className={`relative flex flex-col lg:flex-row items-center gap-6 sm:gap-8 md:gap-12 lg:gap-16 ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              }`}
            >
              {/* Connecting Line for Desktop */}
              {index < processSteps.length - 1 && (
                <div className="hidden lg:block absolute left-1/2 top-full w-px h-20 lg:h-32 bg-gradient-to-b from-amber-300 to-transparent transform -translate-x-1/2"></div>
              )}

              {/* Image Section */}
              <div className="w-full lg:flex-1">
                <div className="relative group">
                  <div className="absolute -inset-0.5 sm:-inset-1 bg-gradient-to-r from-amber-400 to-amber-500 rounded-xl sm:rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-700"></div>
                  <div className="relative overflow-hidden rounded-xl sm:rounded-2xl shadow-lg transform group-hover:scale-[1.01] transition-all duration-700">
                    <img 
                      src={step.image} 
                      alt={step.title}
                      className="w-full h-48 xs:h-56 sm:h-64 md:h-72 lg:h-110 object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent"></div>
                    
                    {/* Step Badge */}
                    <div 
                      className="absolute top-3 left-3 sm:top-4 sm:left-4 md:top-6 md:left-6 w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-lg sm:rounded-xl flex flex-col items-center justify-center text-white shadow-lg"
                      style={{ backgroundColor: '#040472' }}
                    >
                      <span className="text-[8px] xs:text-xs font-semibold uppercase tracking-wide opacity-90">Step</span>
                      <span className="text-sm sm:text-base md:text-lg font-bold">{step.step}</span>
                    </div>

                    {/* Duration Badge */}
                    <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 md:bottom-6 md:right-6 bg-white/95 backdrop-blur-sm px-2 py-1 sm:px-3 sm:py-1.5 md:px-4 md:py-2 rounded-full shadow-md">
                      <div className="flex items-center gap-1 sm:gap-1.5">
                        <span className="text-sm sm:text-base md:text-lg">⏱️</span>
                        <span className="text-xs font-bold whitespace-nowrap" style={{ color: '#040472' }}>{step.duration}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content Section */}
              <div className="w-full lg:flex-1">
                <div className="relative bg-gradient-to-br from-gray-50 to-white rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 shadow-lg border border-gray-100">
                  {/* Decorative Icon */}
                  <div className="hidden sm:block absolute -top-3 -right-3 md:-top-4 md:-right-4 text-3xl md:text-4xl lg:text-5xl opacity-5 transform rotate-12">
                    {step.icon}
                  </div>

                  {/* Step Indicator */}
                  <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                    <div className="w-8 sm:w-10 md:w-12 h-px bg-gradient-to-r from-amber-400 to-transparent"></div>
                    <span className="text-xs font-bold uppercase tracking-wider text-gray-500">
                      Step {step.step} of {processSteps.length}
                    </span>
                  </div>

                  {/* Title */}
                  <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                    <div className="text-2xl sm:text-3xl md:text-4xl">{step.icon}</div>
                    <h2 
                      className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-tight"
                      style={{ color: '#040472' }}
                    >
                      {step.title}
                    </h2>
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm md:text-base text-gray-700 leading-relaxed mb-4 sm:mb-6 border-l-2 sm:border-l-3 border-amber-400 pl-3 sm:pl-4">
                    {step.description}
                  </p>

                  {/* Process Details */}
                  <div className="mb-4 sm:mb-6">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-2 sm:mb-3 flex items-center gap-1.5">
                      <div className="w-1.5 h-1.5 bg-amber-400 rounded-full"></div>
                      Process Stages
                    </h4>
                    <div className="flex flex-wrap gap-1.5 sm:gap-2">
                      {step.details.map((detail, idx) => (
                        <span 
                          key={idx}
                          className="px-2 py-1 sm:px-3 sm:py-1.5 rounded-full text-xs bg-white text-gray-700 border border-gray-200 shadow-sm hover:border-amber-400 hover:shadow-md transition-all duration-300"
                        >
                          {detail}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Progress Indicator */}
                  <div className="flex items-center gap-2 sm:gap-3">
                    <div className="flex-1 bg-gray-200 rounded-full h-1.5 sm:h-2 shadow-inner overflow-hidden">
                      <div 
                        className="h-full rounded-full transition-all duration-1000 shadow-sm relative overflow-hidden"
                        style={{ 
                          width: `${(step.step / processSteps.length) * 100}%`,
                          backgroundColor: '#040472'
                        }}
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"></div>
                      </div>
                    </div>
                    <span className="text-xs font-bold text-gray-600 min-w-fit">
                      {Math.round((step.step / processSteps.length) * 100)}%
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Process Overview */}
        <div className="mt-16 sm:mt-20 md:mt-24 lg:mt-32 relative">
          <div className="absolute -inset-0.5 sm:-inset-1 bg-gradient-to-r from-amber-400 via-amber-300 to-amber-400 rounded-xl sm:rounded-2xl blur opacity-15"></div>
          <div className="relative bg-gradient-to-br from-gray-50 to-white rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-12 shadow-xl border border-gray-100 overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 bg-amber-100 rounded-full filter blur-3xl opacity-20"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 sm:w-32 sm:h-32 md:w-48 md:h-48 bg-blue-100 rounded-full filter blur-3xl opacity-20"></div>
            
            <div className="text-center mb-8 sm:mb-12 md:mb-16 relative z-10">
              <div className="inline-block mb-3 sm:mb-4 md:mb-6">
                <div className="flex items-center gap-1.5 sm:gap-2 bg-gradient-to-r from-amber-50 to-amber-100 rounded-full px-3 py-1.5 sm:px-4 sm:py-2 md:px-5 md:py-2.5 border border-amber-200 shadow-md">
                  <span className="text-base sm:text-lg md:text-xl">📖</span>
                  <span className="text-xs font-bold text-amber-900 uppercase tracking-wider">Complete Journey</span>
                </div>
              </div>
              <h2 
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 md:mb-6 px-4"
                style={{ color: '#040472' }}
              >
                The Whisky Journey
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed px-4">
                Six essential steps that transform simple grains into exceptional whisky
              </p>
            </div>

            {/* Timeline Design */}
            <div className="relative z-10">
              {/* Desktop/Tablet Timeline */}
              <div className="hidden md:block relative">
                <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ height: '500px' }}>
                  <defs>
                    <linearGradient id="pathGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" style={{ stopColor: '#FCD34D', stopOpacity: 0.3 }} />
                      <stop offset="50%" style={{ stopColor: '#FBBF24', stopOpacity: 0.5 }} />
                      <stop offset="100%" style={{ stopColor: '#F59E0B', stopOpacity: 0.3 }} />
                    </linearGradient>
                  </defs>
                  <path
                    d="M 60 80 Q 150 40, 240 80 T 420 80 Q 510 40, 600 80 T 780 80"
                    fill="none"
                    stroke="url(#pathGradient)"
                    strokeWidth="2"
                    strokeDasharray="8,4"
                    className="animate-dash"
                  />
                </svg>

                <div className="relative grid grid-cols-3 gap-4 sm:gap-6 lg:gap-8" style={{ paddingTop: '30px', paddingBottom: '30px' }}>
                  {processSteps.map((step, idx) => (
                    <div 
                      key={step.step} 
                      className="group cursor-pointer"
                      style={{ 
                        marginTop: idx % 2 === 0 ? '0' : '80px',
                        transition: 'all 0.5s ease'
                      }}
                    >
                      <div className="relative">
                        {/* Card */}
                        <div className="relative bg-white rounded-xl sm:rounded-2xl p-4 sm:p-5 shadow-lg border border-gray-100 group-hover:border-amber-300 transition-all duration-500 transform group-hover:-translate-y-1 group-hover:shadow-xl">
                          {/* Step Number Badge */}
                          <div 
                            className="absolute -top-2 -right-2 sm:-top-3 sm:-right-3 w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-white shadow-lg transform group-hover:rotate-12 transition-transform duration-500 z-10"
                            style={{ backgroundColor: '#040472' }}
                          >
                            <span className="text-sm sm:text-base font-bold">{step.step}</span>
                          </div>

                          {/* Icon */}
                          <div 
                            className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl flex items-center justify-center text-white text-2xl sm:text-3xl mx-auto mb-3 shadow-md transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500"
                            style={{ backgroundColor: '#040472' }}
                          >
                            {step.icon}
                          </div>

                          {/* Content */}
                          <h4 className="font-bold text-base sm:text-lg mb-1 sm:mb-2 text-center group-hover:scale-105 transition-transform duration-300" style={{ color: '#040472' }}>
                            {step.title}
                          </h4>
                          <p className="text-xs text-gray-600 text-center mb-2 leading-tight">
                            {step.description.substring(0, 60)}...
                          </p>
                          
                          {/* Duration */}
                          <div className="flex items-center justify-center gap-1 bg-blue-50 rounded-full px-2 py-1 sm:px-3 sm:py-1.5 border border-[#040472]/20">
                            <span className="text-sm">⏱️</span>
                            <span className="text-xs font-bold text-amber-900">{step.duration}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Mobile Vertical Timeline */}
              <div className="md:hidden space-y-6">
                {processSteps.map((step, idx) => (
                  <div key={step.step} className="relative">
                    {/* Connecting Line */}
                    {idx < processSteps.length - 1 && (
                      <div className="absolute left-6 top-16 w-0.5 h-8 bg-[#040472]/30"></div>
                    )}

                    <div className="flex gap-3 sm:gap-4">
                      {/* Step Number */}
                      <div 
                        className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex flex-col items-center justify-center text-white shadow-lg"
                        style={{ backgroundColor: '#040472' }}
                      >
                        <span className="text-[8px] sm:text-xs font-semibold uppercase opacity-80">Step</span>
                        <span className="text-sm sm:text-base font-bold">{step.step}</span>
                      </div>

                      {/* Content Card */}
                      <div className="flex-1 bg-white rounded-xl p-3 sm:p-4 shadow-md border border-gray-100">
                        <div className="flex items-start gap-2 sm:gap-3 mb-2">
                          <div className="text-xl sm:text-2xl">{step.icon}</div>
                          <div className="flex-1">
                            <h4 className="font-bold text-base sm:text-lg mb-1" style={{ color: '#040472' }}>
                              {step.title}
                            </h4>
                            <div className="flex items-center gap-1 bg-amber-50 rounded-full px-2 py-1 inline-flex border border-amber-200">
                              <span className="text-xs">⏱️</span>
                              <span className="text-xs font-bold text-amber-900">{step.duration}</span>
                            </div>
                          </div>
                        </div>
                        <p className="text-xs text-gray-600 leading-relaxed">
                          {step.description.substring(0, 80)}...
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Completion Badge */}
            <div className="mt-8 sm:mt-12 text-center relative z-10">
              <div className="inline-flex items-center gap-2 bg-[#040472] text-white rounded-full px-4 py-2 sm:px-6 sm:py-3 shadow-lg transform hover:scale-105 transition-transform duration-300">
                <span className="text-lg sm:text-xl">🏆</span>
                <span className="font-bold text-sm sm:text-base">Six Steps to Perfection</span>
                <span className="text-lg sm:text-xl">🥃</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-12 sm:mt-16 md:mt-20 pt-8 sm:pt-12 border-t border-gray-200 relative">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-white rounded-full border-2 border-gray-200 flex items-center justify-center shadow-md">
            <span className="text-lg sm:text-xl md:text-2xl">✨</span>
          </div>
          
          <p className="text-gray-600 text-base sm:text-lg md:text-xl italic mb-4 sm:mb-6 max-w-2xl mx-auto px-4">
            "Every bottle tells a story of time, tradition, and craftsmanship"
          </p>
          
          <div className="flex justify-center gap-2 sm:gap-3 flex-wrap mb-4 sm:mb-6 px-4">
            <span className="px-3 py-1.5 sm:px-4 sm:py-2 text-white rounded-full text-xs font-bold shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300"
              style={{ backgroundColor: '#040472' }}
            >
              🕰️ Aged to Perfection
            </span>
            <span className="px-3 py-1.5 sm:px-4 sm:py-2 bg-gradient-to-br from-amber-100 to-amber-50 text-amber-900 rounded-full text-xs font-bold border border-amber-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300">
              🌟 Crafted with Care
            </span>
            <span className="px-3 py-1.5 sm:px-4 sm:py-2 bg-gradient-to-br from-blue-50 to-gray-50 rounded-full text-xs font-bold border border-gray-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300"
              style={{ color: '#040472' }}
            >
              🎨 Artisan Methods
            </span>
          </div>

          <div className="text-2xl sm:text-3xl md:text-4xl opacity-10 mt-4 sm:mt-6">🥃</div>
        </div>
      </div>

      <style>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        
        .animate-shimmer {
          animation: shimmer 2s infinite;
        }

        @keyframes dash {
          to {
            stroke-dashoffset: -30;
          }
        }
        
        .animate-dash {
          animation: dash 2s linear infinite;
        }

        /* Extra small devices */
        @media (min-width: 475px) {
          .xs\\:block { display: block; }
          .xs\\:text-6xl { font-size: 3.75rem; }
          .xs\\:h-56 { height: 14rem; }
        }
      `}</style>
    </div>
  );
};

export default WhiskyMakingProcess;