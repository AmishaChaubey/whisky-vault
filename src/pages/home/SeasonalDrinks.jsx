import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const cocktailDrinks = [
  {
    name: ["Whisky", "Sour"],
    spirit: "Whisky",
    color: "from-amber-100 to-orange-100",
    overlayColor: "bg-amber-100",
    image: "https://raw.githubusercontent.com/nidal1111/storage/master/assets/milkshake_banana.png",
    nutrition: ["45%", "2oz", "150", "Classic", "★★★★★"],
    description: "Smooth bourbon with lemon and sugar"
  },
  {
    name: ["Tequila", "Sunrise"],
    spirit: "Tequila",
    color: "from-rose-100 to-pink-100",
    overlayColor: "bg-rose-100",
    image: "https://raw.githubusercontent.com/nidal1111/storage/master/assets/milkShake_caffe%CC%80.png",
    nutrition: ["40%", "2oz", "200", "Tropical", "★★★★☆"],
    description: "Tequila with orange juice and grenadine"
  },
  {
    name: ["Vodka", "Martini"],
    spirit: "Vodka",
    color: "from-blue-100 to-cyan-100",
    overlayColor: "bg-blue-100",
    image: "https://raw.githubusercontent.com/nidal1111/storage/master/assets/milkShake_fragole.png",
    nutrition: ["40%", "2.5oz", "120", "Elegant", "★★★★★"],
    description: "Premium vodka with dry vermouth"
  },
  {
    name: ["Beer", "Crafts"],
    spirit: "Beer",
    color: "from-yellow-100 to-amber-100",
    overlayColor: "bg-yellow-100",
    image: "https://raw.githubusercontent.com/nidal1111/storage/master/assets/milkshake_banana.png",
    nutrition: ["6.5%", "16oz", "180", "Hoppy", "★★★★☆"],
    description: "Citrus notes with crisp finish"
  },
  {
    name: ["Rum", "Mojito"],
    spirit: "Rum",
    color: "from-green-100 to-emerald-100",
    overlayColor: "bg-green-100",
    image: "https://raw.githubusercontent.com/nidal1111/storage/master/assets/milkShake_caffe%CC%80.png",
    nutrition: ["40%", "2oz", "170", "Refreshing", "★★★★★"],
    description: "White rum with mint and lime"
  },
  {
    name: ["Gin", "Tonic"],
    spirit: "Gin",
    color: "from-purple-100 to-indigo-100",
    overlayColor: "bg-purple-100",
    image: "https://raw.githubusercontent.com/nidal1111/storage/master/assets/milkShake_fragole.png",
    nutrition: ["37.5%", "2oz", "140", "Botanical", "★★★★☆"],
    description: "Botanical gin with premium tonic"
  }
];

export default function CocktailSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [showOverlay, setShowOverlay] = useState(false);
  const [firstWord, setFirstWord] = useState(cocktailDrinks[0].name[0]);
  const [secondWord, setSecondWord] = useState(cocktailDrinks[0].name[1]);
  const [wordOffset, setWordOffset] = useState(0);
  const intervalRef = useRef(null);

  const morphWords = (fromWords, toWords) => {
    const [fromFirst, fromSecond] = fromWords;
    const [toFirst, toSecond] = toWords;
    
    let step = 0;
    const totalSteps = 30;
    
    const animate = () => {
      if (step < totalSteps) {
        const progress = step / totalSteps;
        const easeProgress = progress * progress * progress;
        
        setWordOffset(20 * easeProgress);
        
        const firstChars = Math.max(0, Math.ceil(fromFirst.length * (1 - easeProgress)));
        const secondChars = Math.max(0, Math.ceil(fromSecond.length * (1 - easeProgress)));
        
        setFirstWord(fromFirst.substring(0, firstChars));
        setSecondWord(fromSecond.substring(fromSecond.length - secondChars));
        
        step++;
        requestAnimationFrame(animate);
      } else {
        setTimeout(() => {
          let expandStep = 0;
          const expandSteps = 30;
          
          const expand = () => {
            const expandProgress = expandStep / expandSteps;
            const easeExpand = expandProgress * expandProgress * (3 - 2 * expandProgress);
            
            setWordOffset(20 * (1 - easeExpand));
            
            const firstChars = Math.ceil(toFirst.length * easeExpand);
            const secondChars = Math.ceil(toSecond.length * easeExpand);
            
            setFirstWord(toFirst.substring(0, firstChars));
            setSecondWord(toSecond.substring(toSecond.length - secondChars));
            
            if (expandStep < expandSteps) {
              expandStep++;
              requestAnimationFrame(expand);
            } else {
              setWordOffset(0);
              setFirstWord(toFirst);
              setSecondWord(toSecond);
            }
          };
          expand();
        }, 100);
      }
    };
    animate();
  };

  const changeSlide = (newIndex) => {
    if (newIndex === currentIndex || isAnimating) return;
    
    setIsAnimating(true);
    const currentDrink = cocktailDrinks[currentIndex];
    const newDrink = cocktailDrinks[newIndex];
    
    setShowOverlay(true);
    
    setTimeout(() => {
      morphWords(currentDrink.name, newDrink.name);
      
      setTimeout(() => {
        setShowOverlay(false);
        setCurrentIndex(newIndex);
        
        setTimeout(() => {
          setIsAnimating(false);
        }, 600);
      }, 500);
    }, 100);
  };

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      if (!isAnimating) {
        const nextIndex = (currentIndex + 1) % cocktailDrinks.length;
        changeSlide(nextIndex);
      }
    }, 5000);

    return () => clearInterval(intervalRef.current);
  }, [currentIndex, isAnimating]);

  const currentDrink = cocktailDrinks[currentIndex];

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-4 sm:p-6 lg:p-8">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700;900&family=Montserrat:wght@300;400;500;600;700&display=swap');
      `}</style>
      
      <div className="w-full max-w-7xl flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
        {/* Left Side - Text Content */}
        <div className="w-full lg:flex-1 space-y-4 sm:space-y-6 lg:space-y-8 text-center lg:text-left">
          <div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#040472] mb-2 sm:mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
              Seasonal
            </h1>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#040472] mb-2 sm:mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
              Drinks
            </h1>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-[#040472] mt-3 sm:mt-4 lg:mt-6" style={{ fontFamily: 'Playfair Display, serif', fontStyle: 'italic' }}>
              Which you like 
            </h2>
          </div>
          
          <div className="h-1 w-16 sm:w-20 lg:w-24 bg-[#040472] mx-auto lg:mx-0"></div>
          
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed max-w-lg mx-auto lg:mx-0 px-4 lg:px-0" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 300 }}>
            Discover our carefully curated collection of premium cocktails, 
            crafted with the finest spirits and ingredients to elevate your experience.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4 lg:gap-6 pt-2 sm:pt-4">
            <Link to="/contact">
            <button className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-[#040472] text-white font-semibold rounded-full hover:bg-gray-800 transition-all shadow-lg" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              Taste Sample
            </button>
            </Link>
            <Link to ='/cocktails'>
            <button className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 border-2 border-[#040472] text-gray-900 font-semibold rounded-full hover:bg-[#040472] hover:text-white transition-all" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              View All
            </button>
            </Link>
          </div>
        </div>

        {/* Right Side - Slider Card */}
        <div className="w-full lg:flex-1 max-w-2xl lg:max-w-none">
          <div className="relative w-full h-[500px] sm:h-[550px] lg:h-[600px] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl">
            {/* Pastel Background Gradient */}
            <div className={`absolute inset-0 bg-gradient-to-br ${currentDrink.color} transition-all duration-1000`} />
            
            {/* Overlay for transitions */}
            <div 
              className={`absolute inset-0 ${cocktailDrinks[(currentIndex + 1) % cocktailDrinks.length].overlayColor} transition-transform duration-1000 ${
                showOverlay ? 'translate-y-0' : '-translate-y-full'
              }`}
              style={{ zIndex: 10 }}
            />
            
            {/* Content Container */}
            <div className="relative h-full flex flex-col items-center justify-between py-6 sm:py-8 px-4 sm:px-6" style={{ zIndex: 15 }}>
              {/* Spirit Badge */}
              <div className="bg-white/80 backdrop-blur-sm px-4 sm:px-6 lg:px-8 py-2 sm:py-3 rounded-full shadow-lg border border-gray-200">
                <span className="text-gray-800 text-xs sm:text-sm font-bold tracking-widest" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  {currentDrink.spirit.toUpperCase()}
                </span>
              </div>
              
              {/* Product Name with Morph Animation */}
              <div className="flex items-center gap-6 sm:gap-10 lg:gap-14 my-4 sm:my-6">
                <span 
                  className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 transition-transform duration-500"
                  style={{ transform: `translateX(${wordOffset}px)`, fontFamily: 'Playfair Display, serif' }}
                >
                  {firstWord}
                </span>
                <span 
                  className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 transition-transform duration-500"
                  style={{ transform: `translateX(-${wordOffset}px)`, fontFamily: 'Playfair Display, serif' }}
                >
                  {secondWord}
                </span>
              </div>
              
              {/* Description */}
              <p className="text-gray-700 text-center text-sm sm:text-base mb-4 sm:mb-6 max-w-xs sm:max-w-md px-2 font-medium" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                {currentDrink.description}
              </p>
              
              {/* Drink Image */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                <img 
                  src={currentDrink.image}
                  alt={`${currentDrink.spirit} cocktail`}
                  className="w-48 h-48 sm:w-60 sm:h-60 lg:w-72 lg:h-72 object-contain transition-opacity duration-1000"
                  style={{ opacity: showOverlay ? 0 : 1 }}
                />
              </div>
              
              {/* Info Panel */}
              <div className="bg-white/90 backdrop-blur-md rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-xl w-full max-w-lg border border-gray-200">
                <div className="grid grid-cols-5 gap-2 sm:gap-3 lg:gap-4">
                  {[
                    { value: currentDrink.nutrition[0], label: "ABV" },
                    { value: currentDrink.nutrition[1], label: "Serving" },
                    { value: currentDrink.nutrition[2], label: "Calories" },
                    { value: currentDrink.nutrition[3], label: "Style" },
                    { value: currentDrink.nutrition[4], label: "Rating" }
                  ].map((item, index) => (
                    <div key={index} className="text-center">
                      <div className="text-xs sm:text-sm lg:text-base font-bold text-gray-800 mb-1 transition-all duration-300" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                        {item.value}
                      </div>
                      <div className="text-[10px] sm:text-xs text-gray-600 leading-tight font-medium" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                        {item.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Control Dots */}
              <div className="flex gap-2 sm:gap-3 mt-4 sm:mt-6">
                {cocktailDrinks.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => changeSlide(index)}
                    className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                      index === currentIndex 
                        ? 'bg-gray-800 scale-125 shadow-lg' 
                        : 'bg-gray-400 hover:bg-gray-600'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}