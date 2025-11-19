import React, { useState, useEffect } from 'react';

const CocktailSlider = () => {
  const [activeIndex, setActiveIndex] = useState(-1);
  const [isMobile, setIsMobile] = useState(false);

  const cocktails = [
    {
      id: 1,
      name: "Old Fashioned",
      brand: "Classic Whiskey",
      subtitle: "Timeless Bourbon Excellence",
      image: "/cocktails/Classic-Whisky.jpg",
      specs: [
        { label: "Base Spirit:", value: "Bourbon Whiskey" },
        { label: "Sweetener:", value: "Sugar Cube & Bitters" },
        { label: "Garnish:", value: "Orange Peel & Cherry" },
        { label: "Glass:", value: "Rocks Glass" }
      ],
      badges: [
        { text: "ABV: 35%" },
        { text: "Prep: 5 min" },
        { text: "Difficulty: Easy" }
      ]
    },
    {
      id: 2,
      name: "Negroni",
      brand: "Italian Classic",
      subtitle: "Perfectly Balanced Bitterness",
      image: "/cocktails/Negroni.jpg",
      specs: [
        { label: "Base Spirit:", value: "Gin" },
        { label: "Vermouth:", value: "Sweet Red Vermouth" },
        { label: "Bitter:", value: "Campari" },
        { label: "Glass:", value: "Rocks Glass" }
      ],
      badges: [
        { text: "ABV: 24%" },
        { text: "Prep: 3 min" },
        { text: "Difficulty: Easy" }
      ]
    },
    {
      id: 3,
      name: "Espresso Martini",
      brand: "Modern Classic",
      subtitle: "Coffee-Infused Sophistication",
      image: "/cocktails/Essperso-martini.jpg",
      specs: [
        { label: "Base Spirit:", value: "Vodka" },
        { label: "Coffee:", value: "Fresh Espresso Shot" },
        { label: "Liqueur:", value: "Coffee Liqueur" },
        { label: "Glass:", value: "Martini Glass" }
      ],
      badges: [
        { text: "ABV: 18%" },
        { text: "Prep: 4 min" },
        { text: "Difficulty: Medium" }
      ]
    },
    {
      id: 4,
      name: "Margarita",
      brand: "Mexican Favorite",
      subtitle: "Citrus Paradise Perfection",
      image: "/cocktails/margarita.jpg",
      specs: [
        { label: "Base Spirit:", value: "Tequila Blanco" },
        { label: "Liqueur:", value: "Triple Sec" },
        { label: "Citrus:", value: "Fresh Lime Juice" },
        { label: "Glass:", value: "Margarita Glass" }
      ],
      badges: [
        { text: "ABV: 22%" },
        { text: "Prep: 4 min" },
        { text: "Difficulty: Easy" }
      ]
    }
  ];

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleSlideClick = (index) => {
    setActiveIndex(activeIndex === index ? -1 : index);
  };

  const nextSlide = () => {
    const nextIndex = activeIndex === -1 ? 0 : (activeIndex + 1) % cocktails.length;
    setActiveIndex(nextIndex);
  };

  const previousSlide = () => {
    const prevIndex = activeIndex === -1 
      ? cocktails.length - 1 
      : (activeIndex - 1 + cocktails.length) % cocktails.length;
    setActiveIndex(prevIndex);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') previousSlide();
      if (e.key === 'ArrowRight') nextSlide();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeIndex]);

  return (
    <div className='min-h-screen bg-white font-sans overflow-x-hidden'>
      <div className="w-full h-screen mx-auto relative overflow-hidden shadow-2xl">
        {/* Header Badge */}
        <div className="absolute top-3 left-3 sm:top-5 sm:left-5 z-10 flex items-center gap-2 text-amber-400 text-xs sm:text-sm font-semibold">
          <div className="w-1.5 h-1.5 bg-amber-400 rounded-full animate-pulse"></div>
          <span>Bluking's Famous Cocktails</span>
        </div>

        {/* Slider Container */}
        <div className={`flex h-full ${isMobile ? 'flex-col' : 'flex-row'}`}>
          {cocktails.map((cocktail, index) => (
            <div
              key={cocktail.id}
              onClick={() => handleSlideClick(index)}
              className={`relative cursor-pointer transition-all duration-700 ease-out overflow-hidden
                ${isMobile 
                  ? (activeIndex === index ? 'flex-[3]' : 'flex-1')
                  : (activeIndex === index ? 'flex-[2.5] grayscale-0' : 'flex-1 grayscale-0 hover:grayscale-0')
                }
              `}
            >
              {/* Responsive Background Image */}
              <div 
                className="absolute inset-0 bg-cover bg-center transition-all duration-700"
                style={{ 
                  backgroundImage: `url(${cocktail.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              ></div>

              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>

              {/* Content */}
              <div className={`absolute text-white z-10 transition-all duration-700 ease-out delay-200
                ${isMobile 
                  ? (activeIndex === index ? 'bottom-12 left-4 right-4' : 'bottom-2 left-2 right-2')
                  : (activeIndex === index ? 'bottom-20 left-8 right-8' : 'bottom-8 left-8 right-8')
                }
              `}>
                {/* Slide Number */}
                <div className={`font-light text-white/60 leading-none transition-all duration-700 ease-out
                  ${activeIndex === index 
                    ? (isMobile ? 'text-2xl sm:text-4xl mb-1 relative' : 'text-5xl absolute -top-12 left-0')
                    : (isMobile ? 'text-3xl mb-1 relative' : 'text-6xl absolute bottom-8 left-4')
                  }
                `}>
                  {String(index + 1).padStart(2, '0')}
                </div>

                      {/* Brand */}
                <div className={`text-xs sm:text-sm font-semibold text-white/80 mb-1 transition-all duration-700 ease-out whitespace-nowrap
                  ${activeIndex === index 
                    ? 'transform-none relative' 
                    : (isMobile 
                      ? 'relative opacity-100'
                      : 'absolute bottom-32 -left-4 origin-left-bottom -rotate-90')
                  }
                `}>
                  {cocktail.brand}
                </div>

                {/* Name */}
                <h3 className={`text-xl sm:text-2xl md:text-3xl font-bold mb-1 sm:mb-2 transition-all duration-500 ease-out
                  ${activeIndex === index 
                    ? 'opacity-100 translate-y-0 delay-300' 
                    : 'opacity-0 translate-y-8'}
                `}>
                  {cocktail.name}
                </h3>

                {/* Subtitle */}
                <p className={`text-sm sm:text-base text-white/80 mb-3 sm:mb-5 transition-all duration-500 ease-out
                  ${activeIndex === index 
                    ? 'opacity-100 translate-y-0 delay-[400ms]' 
                    : 'opacity-0 translate-y-8'}
                `}>
                  {cocktail.subtitle}
                </p>

                {/* Specs */}
                <div className={`transition-all duration-500 ease-out
                  ${activeIndex === index 
                    ? 'opacity-100 translate-y-0 delay-500' 
                    : 'opacity-0 translate-y-8'}
                `}>
                  {cocktail.specs.map((spec, i) => (
                    <div 
                      key={i}
                      className={`flex justify-between mb-1 sm:mb-1.5 text-xs sm:text-sm transition-all duration-300 ease-out
                        ${activeIndex === index 
                          ? 'opacity-100 translate-x-0' 
                          : 'opacity-0 -translate-x-5'}
                      `}
                      style={{ transitionDelay: activeIndex === index ? `${600 + i * 50}ms` : '0ms' }}
                    >
                      <span className="text-white/70">{spec.label}</span>
                      <span className="font-semibold">{spec.value}</span>
                    </div>
                  ))}
                </div>

                {/* Badges */}
                <div className={`flex flex-wrap gap-2 sm:gap-3 mt-3 sm:mt-4 transition-all duration-500 ease-out
                  ${activeIndex === index 
                    ? 'opacity-100 translate-y-0 delay-[800ms]' 
                    : 'opacity-0 translate-y-8'}
                `}>
                  {cocktail.badges.map((badge, i) => (
                    <div 
                      key={i}
                      className={`flex items-center gap-1 sm:gap-1.5 px-2 py-1 bg-white/10 backdrop-blur-sm rounded-xl text-xs font-medium transition-all duration-300 ease-out
                        ${activeIndex === index 
                          ? 'opacity-100 scale-100' 
                          : 'opacity-0 scale-75'}
                      `}
                      style={{ transitionDelay: activeIndex === index ? `${850 + i * 50}ms` : '0ms' }}
                    >
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-amber-400 rounded-full"></div>
                      <span>{badge.text}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Add Button */}
              <button className={`absolute z-20 border-2 border-amber-400 rounded-full flex items-center justify-center transition-all duration-300 hover:bg-amber-400/20
                ${isMobile ? 'bottom-4 right-4 w-7 h-7' : 'bottom-8 right-8 w-8 h-8'}
              `}>
                <div className={`relative ${isMobile ? 'w-2.5 h-2.5' : 'w-3 h-3'}`}>
                  <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-amber-400 transition-transform duration-300
                    ${isMobile ? 'w-2.5 h-0.5' : 'w-3 h-0.5'}
                    ${activeIndex === index ? 'rotate-0' : 'rotate-0'}
                  `}></div>
                  <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-amber-400 transition-all duration-300
                    ${isMobile ? 'w-0.5 h-2.5' : 'w-0.5 h-3'}
                    ${activeIndex === index ? 'opacity-0 scale-0' : 'opacity-100 scale-100'}
                  `}></div>
                </div>
              </button>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <button 
          onClick={previousSlide}
          className={`absolute top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-md border-none rounded-full text-white flex items-center justify-center transition-all duration-300 hover:bg-white/20 z-20
            ${isMobile ? 'left-3 w-10 h-10 text-xl' : 'left-5 w-12 h-12 text-2xl'}
          `}
        >
          ‹
        </button>
        <button 
          onClick={nextSlide}
          className={`absolute top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-md border-none rounded-full text-white flex items-center justify-center transition-all duration-300 hover:bg-white/20 z-20
            ${isMobile ? 'right-3 w-10 h-10 text-xl' : 'right-5 w-12 h-12 text-2xl'}
          `}
        >
          ›
        </button>
      </div>
    </div>
  );
};

export default CocktailSlider;