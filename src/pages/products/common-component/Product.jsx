
import React, { useState } from 'react';

const InteractiveCard = ({ title, imageUrl, index, onHover }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    setMousePosition({ x, y });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
    onHover(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    onHover(false);
  };

  return (
    <div
      className="relative w-64 h-80 sm:w-72 sm:h-[22rem] md:w-80 md:h-96 cursor-pointer flex-shrink-0 mx-2 sm:mx-3 md:mx-4"
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ perspective: 1000 }}
    >
      <div
        className="w-full h-full relative transition-transform duration-300 ease-out"
        style={{
          transform: isHovered
            ? `rotateX(${((mousePosition.y - 192) / 192) * -10}deg) rotateY(${((mousePosition.x - 160) / 160) * 10}deg) translateZ(20px)`
            : 'rotateX(0deg) rotateY(0deg) translateZ(0px)',
          transformStyle: "preserve-3d",
        }}
      >
        <div
          className="relative w-full h-full rounded-xl shadow-xl overflow-hidden transition-shadow duration-300"
          style={{
            boxShadow: isHovered
              ? "0 20px 40px -12px rgba(0, 0, 0, 0.4)"
              : "0 10px 25px -12px rgba(0, 0, 0, 0.25)",
          }}
        >
          {/* Enhanced image container */}
          <div 
            className="absolute inset-0 bg-cover bg-center transition-transform duration-700"
            style={{
              backgroundImage: `url("${imageUrl}")`,
              transform: isHovered ? 'scale(1.1)' : 'scale(1)'
            }}
          />
          
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
          
          <div className="relative z-10 p-4 sm:p-5 md:p-6 h-full flex items-end justify-start">
            <h3 className="text-base sm:text-lg md:text-xl font-bold text-white drop-shadow-lg backdrop-blur-sm bg-white/10 py-2 px-3 sm:py-2.5 sm:px-3.5 md:py-3 md:px-4 rounded-lg border border-white/20">
              {title}
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

const Marquee = ({ cards, direction = 'left', speed = 40 }) => {
  const [isPaused, setIsPaused] = useState(false);
  
  // Create enough duplicates for seamless looping
  const duplicatedCards = [...cards, ...cards, ...cards];
  
  // Calculate card width based on screen size
  const getCardWidth = () => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth < 640) return 272; // w-64 + margins (256 + 16)
      if (window.innerWidth < 768) return 304; // w-72 + margins (288 + 16)
      return 336; // w-80 + margins (320 + 16)
    }
    return 336; // default
  };
  
  return (
    <div className="relative overflow-hidden py-4 sm:py-6 md:py-8">
      <div
        className="flex"
        style={{
          animation: `marquee-${direction} ${speed}s linear infinite`,
          animationPlayState: isPaused ? 'paused' : 'running',
          willChange: 'transform',
          width: `${cards.length * getCardWidth() * 3}px`,
        }}
      >
        {duplicatedCards.map((card, index) => (
          <InteractiveCard
            key={`${direction}-${index}`}
            title={card.title}
            imageUrl={card.imageUrl}
            index={index}
            onHover={setIsPaused}
          />
        ))}
      </div>
    </div>
  );
};

const InteractiveMarquee = ({ 
  topRowCards, 
  bottomRowCards,
  title = "Premium Collection",
  subtitle = "Crafted with tradition, aged to perfection",
  topRowSpeed = 30,
  bottomRowSpeed = 35,
  primaryColor = '#040472',
  backgroundColor = 'white'
}) => {
  return (
    <div className="min-h-screen overflow-hidden" style={{ backgroundColor }}>
      <style jsx>{`
        @keyframes marquee-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.33%);
          }
        }
        
        @keyframes marquee-right {
          0% {
            transform: translateX(-33.33%);
          }
          100% {
            transform: translateX(0);
          }
        }
      `}</style>
      
      <div className="py-8 sm:py-10 md:py-12 px-4 sm:px-6 md:px-8">
        <h1 
          className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-center pt-12 sm:pt-16 md:pt-20 mb-3 sm:mb-4 tracking-wider font-serif" 
          style={{ color: primaryColor }}
        >
          {title}
        </h1>
        <p 
          className="text-center text-lg sm:text-base md:text-xl mb-8 sm:mb-10 md:mb-12  px-4" 
          style={{ color: primaryColor, opacity: 0.7 }}
        >
          {subtitle}
        </p>
        
        <Marquee cards={topRowCards} direction="left" speed={topRowSpeed} />
        <Marquee cards={bottomRowCards} direction="right" speed={bottomRowSpeed} />
      </div>
    </div>
  );
};
export default InteractiveMarquee