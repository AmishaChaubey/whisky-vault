import React, { useState } from 'react';
import { Heart, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const CocktailsCatalog = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [liked, setLiked] = useState(false);

  const cocktails = [
    {
      name: "Mojito Classic",
      description:
        "A refreshing Cuban cocktail made with white rum, fresh mint leaves, lime juice, sugar, and soda water. Perfect for summer evenings with its crisp, minty flavor profile.",
      price: "₹450",
      image: "/cocktails/19.png",
      details: {
        Type: "Highball",
        Strength: "Medium",
        Base: "White Rum",
        "Alcohol Strength": "10%",
        Capacity: "350ml",
        Garnish: "Mint"
      }
    },
    {
      name: "Margarita",
      description:
        "A classic Mexican cocktail featuring premium tequila, fresh lime juice, and orange liqueur. Served with a salted rim for the perfect balance of sweet, sour, and salty.",
      price: "₹1450",
      image: "/cocktails/20.png",
      details: {
        Type: "Cocktail",
        Strength: "Strong",
        Base: "Tequila",
        "Alcohol Strength": "15%",
        Capacity: "200ml",
        Garnish: "Salt & Lime"
      }
    },
    {
      name: "Piña Colada",
      description:
        "Tropical paradise in a glass with smooth rum, creamy coconut cream, and sweet pineapple juice. A vacation in every sip with its luscious Caribbean flavors.",
      price: "₹1389",
      image:
        "/cocktails/21.png",
      details: {
        Type: "Tropical",
        Strength: "Medium",
        Base: "White Rum",
        "Alcohol Strength": "12%",
        Capacity: "300ml",
        Garnish: "Pineapple"
      }
    }
  ];

  const currentCocktail = cocktails[currentIndex];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % cocktails.length);
    setLiked(false);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + cocktails.length) % cocktails.length);
    setLiked(false);
  };

  return (
    <div className="min-h-screen bg-white relative overflow-hidden lg:py-20 px-4 sm:px-6 lg:px-16 font-['Playfair_Display']">

      {/* Decorative Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute -top-24 -right-24 w-24 sm:w-80 md:w-96 h-24 sm:h-80 md:h-96 rounded-full border-2 opacity-5 sm:opacity-10" style={{ borderColor: '#040472' }}></div>
        <div className="absolute -bottom-16 -left-16 w-24 sm:w-64 md:w-64 h-24 sm:h-64 md:h-64 rounded-full border-2 opacity-5 sm:opacity-10" style={{ borderColor: '#040472' }}></div>
        <div className="absolute top-1/2 right-4 sm:right-10 w-6 sm:w-16 h-6 sm:h-20 opacity-20 sm:opacity-50" style={{ border: '2px solid #040472', transform: 'rotate(45deg)' }}></div>
        <div className="absolute bottom-24 left-1/4 w-6 sm:w-16 h-6 sm:h-16 rounded-full opacity-5" style={{ backgroundColor: '#040472' }}></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10 py-8">

        {/* Header */}
        <div className="mb-6 sm:mb-10 md:mb-16 text-center md:text-left">
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold tracking-wider text-[#040472] relative inline-block font-['Cinzel']">
            COCKTAILS
            {/* Thin blue underline */}
            <div className="absolute bottom-0 left-0 w-12 sm:w-20 h-0.5 mt-1 sm:mt-2 bg-[#040472]"></div>
          </h1>
          <p className="text-xs sm:text-sm md:text-base tracking-widest text-gray-400 mt-1 sm:mt-2 md:mt-4 font-['Montserrat']">
            CURATED SELECTION
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-12 items-start">

          {/* Left Column */}
          <div className="space-y-3 md:space-y-6 animate-fadeIn order-2 md:order-1">
            <div className="flex items-start justify-between flex-wrap">
              <h2 className="text-lg sm:text-2xl md:text-4xl font-bold text-gray-800 tracking-wide max-w-[80%] sm:max-w-[90%] font-['Playfair_Display']">
                {currentCocktail.name}
              </h2>
              <button onClick={() => setLiked(!liked)} className="ml-2 sm:ml-4 transform transition-all duration-300 hover:scale-110 hover:rotate-6">
                <Heart className={`w-5 sm:w-6 md:w-7 h-5 sm:h-6 md:h-7 transition-colors duration-300 ₹{liked ? 'fill-red-500 text-red-500' : 'text-gray-400 hover:text-red-500'}`} />
              </button>
            </div>

            <p className="text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed font-['Lato']">
              {currentCocktail.description}
            </p>

            <div className="pt-2 md:pt-4 space-y-2">
              <div className="text-2xl sm:text-4xl md:text-5xl font-bold text-[#040472] font-['Bebas_Neue']">
                {currentCocktail.price}
              </div>

              <div className="space-y-4">
                <div>
                   <Link to='/contact'>
                <button className="w-full px-4 py-2 sm:px-6 sm:py-3 md:py-4 text-xs sm:text-sm md:text-base font-semibold rounded-lg transition-all duration-300 hover:shadow-2xl transform hover:-translate-y-1 hover:scale-105 tracking-wider bg-[#040472] text-white font-['Montserrat']">
                
                  BUY NOW
                  
                </button>
                </Link>
                </div>
                <Link to='/cocktails'>
                <button className="w-full px-4 py-2 sm:px-6 sm:py-3 md:py-4 text-xs sm:text-sm md:text-base font-semibold rounded-lg border-2 transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1 tracking-wider border-[#040472] text-[#040472] font-['Montserrat']">
                  Visit the recipes
                </button>
                </Link>
              </div>
            </div>
          </div>

          {/* Center Column */}
          <div className="flex flex-col items-center justify-center mt-4 md:mt-0 order-1 md:order-2 relative z-10">
            <h2 className="text-lg sm:text-2xl md:text-3xl xl:ml-25 ml-10 font-bold tracking-widest mb-2 sm:mb-3 md:mb-6 text-[#040472] font-['Cinzel']">
              SIGNATURE COCKTAILS
            </h2>

            <div className="relative w-full flex items-center justify-center mb-4 sm:mb-6 h-48 sm:h-80 md:h-91">
              <img src={currentCocktail.image} alt={currentCocktail.name} className="h-full max-h-96 w-auto object-contain drop-shadow-2xl relative z-10" />
            </div>

            {/* Navigation */}
            <div className="flex items-center gap-2 sm:gap-4 mt-2 sm:mt-4">
              <button onClick={prevSlide} className="p-2 sm:p-2.5 rounded-full transition-all duration-300 hover:shadow-md transform hover:scale-110 z-10 bg-[rgba(4,4,114,0.1)]">
                <ChevronLeft className="w-4 sm:w-5 h-4 sm:h-5 text-[#040472]" />
              </button>
              <div className="flex gap-1 sm:gap-2">
                {cocktails.map((_, index) => (
                  <button key={index} onClick={() => { setCurrentIndex(index); setLiked(false); }} className="transition-all duration-300 rounded-full"
                    style={{
                      width: index === currentIndex ? '20px' : '6px',
                      height: '6px',
                      backgroundColor: index === currentIndex ? '#040472' : '#d1d5db'
                    }}
                  />
                ))}
              </div>
              <button onClick={nextSlide} className="p-2 sm:p-2.5 rounded-full transition-all duration-300 hover:shadow-md transform hover:scale-110 z-10 bg-[rgba(4,4,114,0.1)]">
                <ChevronRight className="w-4 sm:w-5 h-4 sm:h-5 text-[#040472]" />
              </button>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-0 animate-fadeIn mt-6 md:mt-0 order-3">
            <div className="rounded-xl p-4 sm:p-6 md:p-8 shadow-lg border border-gray-200 backdrop-blur-sm bg-[rgba(255,255,255,0.9)]">
              <h3 className="text-base sm:text-xl md:text-2xl font-bold mb-2 sm:mb-6 text-[#040472] font-['Cinzel']">DETAILS</h3>
              {Object.entries(currentCocktail.details).map(([key, value]) => (
                <div key={key} className="flex justify-between py-1 sm:py-2 md:py-3 text-xs sm:text-sm md:text-base border-b border-gray-200 last:border-b-0 transition-all duration-300 hover:bg-gray-50 hover:px-2 rounded">
                  <span className="text-gray-500 font-medium tracking-wide font-['Montserrat']">{key}</span>
                  <span className="font-bold text-gray-800 font-['Lato']">{value}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn { animation: fadeIn 0.5s ease-out; }
      `}</style>
    </div>
  );
};

export default CocktailsCatalog;