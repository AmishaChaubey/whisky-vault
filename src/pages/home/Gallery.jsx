import React, { useState, useEffect, useRef } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const getResponsivePositions = () => {
  const width = typeof window !== 'undefined' ? window.innerWidth : 1200;
  
  if (width < 640) {
    return [
      { height: 320, z: 90, rotateY: 45, y: 0, clip: "polygon(0px 0px, 100% 10%, 100% 90%, 0px 100%)" },
      { height: 290, z: 70, rotateY: 32, y: 0, clip: "polygon(0px 0px, 100% 8%, 100% 92%, 0px 100%)" },
      { height: 250, z: 50, rotateY: 18, y: 0, clip: "polygon(0px 0px, 100% 7%, 100% 93%, 0px 100%)" },
      { height: 220, z: 30, rotateY: 8, y: 0, clip: "polygon(0px 0px, 100% 5%, 100% 95%, 0px 100%)" },
      { height: 200, z: 0, rotateY: 0, y: 0, clip: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" },
      { height: 220, z: 30, rotateY: -8, y: 0, clip: "polygon(0px 5%, 100% 0px, 100% 100%, 0px 95%)" },
      { height: 250, z: 50, rotateY: -18, y: 0, clip: "polygon(0px 7%, 100% 0px, 100% 100%, 0px 93%)" },
      { height: 290, z: 70, rotateY: -32, y: 0, clip: "polygon(0px 8%, 100% 0px, 100% 100%, 0px 92%)" }
    ];
  } else if (width < 1024) {
    return [
      { height: 450, z: 150, rotateY: 45, y: 0, clip: "polygon(0px 0px, 100% 10%, 100% 90%, 0px 100%)" },
      { height: 410, z: 115, rotateY: 32, y: 0, clip: "polygon(0px 0px, 100% 8%, 100% 92%, 0px 100%)" },
      { height: 360, z: 80, rotateY: 18, y: 0, clip: "polygon(0px 0px, 100% 7%, 100% 93%, 0px 100%)" },
      { height: 310, z: 45, rotateY: 8, y: 0, clip: "polygon(0px 0px, 100% 5%, 100% 95%, 0px 100%)" },
      { height: 280, z: 0, rotateY: 0, y: 0, clip: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" },
      { height: 310, z: 45, rotateY: -8, y: 0, clip: "polygon(0px 5%, 100% 0px, 100% 100%, 0px 95%)" },
      { height: 360, z: 80, rotateY: -18, y: 0, clip: "polygon(0px 7%, 100% 0px, 100% 100%, 0px 93%)" },
      { height: 410, z: 115, rotateY: -32, y: 0, clip: "polygon(0px 8%, 100% 0px, 100% 100%, 0px 92%)" }
    ];
  } else {
    return [
      { height: 600, z: 210, rotateY: 45, y: 0, clip: "polygon(0px 0px, 100% 10%, 100% 90%, 0px 100%)" },
      { height: 550, z: 160, rotateY: 32, y: 0, clip: "polygon(0px 0px, 100% 8%, 100% 92%, 0px 100%)" },
      { height: 480, z: 110, rotateY: 18, y: 0, clip: "polygon(0px 0px, 100% 7%, 100% 93%, 0px 100%)" },
      { height: 420, z: 60, rotateY: 8, y: 0, clip: "polygon(0px 0px, 100% 5%, 100% 95%, 0px 100%)" },
      { height: 380, z: 0, rotateY: 0, y: 0, clip: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" },
      { height: 420, z: 60, rotateY: -8, y: 0, clip: "polygon(0px 5%, 100% 0px, 100% 100%, 0px 95%)" },
      { height: 480, z: 110, rotateY: -18, y: 0, clip: "polygon(0px 7%, 100% 0px, 100% 100%, 0px 93%)" },
      { height: 550, z: 160, rotateY: -32, y: 0, clip: "polygon(0px 8%, 100% 0px, 100% 100%, 0px 92%)" }
    ];
  }
};

const cardData = [
  { title: "Beverage Branding", desc: "Fresh and vibrant packaging design for premium juice products with natural ingredients", img: "https://i.pinimg.com/1200x/fb/74/ae/fb74aee5db40843127425ab02b383580.jpg" },
  { title: "Apparel Design", desc: "Minimalist fashion collection with sustainable materials and modern aesthetics", img: "https://i.pinimg.com/736x/e0/48/5c/e0485c00ece1d08801f7561a4b334756.jpg" },
  { title: "Luxury Packaging", desc: "Premium product packaging with attention to detail and sophisticated finishes", img: "https://i.pinimg.com/1200x/92/87/64/928764400d6e9e1798a4be0aa6b260c5.jpg" },
  { title: "Cosmetics Brand", desc: "Clean beauty brand identity with elegant and timeless design approach", img: "https://i.pinimg.com/1200x/4e/4a/d5/4e4ad5151f790aa658eedb306ee29579.jpg" },
  { title: "Fashion Editorial", desc: "Editorial photography and art direction for contemporary fashion magazine", img: "https://i.pinimg.com/1200x/95/78/6f/95786fb3a050f488ebee51a8b3ec8aee.jpg" },
  { title: "Botanical Series", desc: "Natural product line with organic ingredients and eco-friendly packaging", img: "https://i.pinimg.com/736x/22/3f/f5/223ff5c5165238cdc03f2aa180b204e6.jpg" },
  { title: "Product Photography", desc: "Professional product photography with creative lighting and composition", img: "https://i.pinimg.com/736x/8f/02/1e/8f021e24f2fc6ae3623a70ef4cabc981.jpg" },
  { title: "Streetwear Brand", desc: "Urban fashion line with bold graphics and contemporary street style", img: "https://i.pinimg.com/736x/67/b4/66/67b466a045b98975b8073bdfffa573e9.jpg" }
];

export default function CircularSlider() {
  const [positions, setPositions] = useState(getResponsivePositions());
  const [cards, setCards] = useState(cardData);
  const [expandedCard, setExpandedCard] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const [cardStyles, setCardStyles] = useState({});
  const [isPaused, setIsPaused] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);
  const dragRef = useRef({ startX: 0, dragDistance: 0, processedSteps: 0 });
  const threshold = 60;
  const autoSlideInterval = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setPositions(getResponsivePositions());
      setWindowWidth(window.innerWidth);
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const styles = {};
    cards.forEach((_, index) => {
      const pos = positions[index];
      styles[index] = {
        height: `${pos.height}px`,
        clipPath: pos.clip,
        transform: `translateZ(${pos.z}px) rotateY(${pos.rotateY}deg) translateY(${pos.y}px)`,
        transition: 'all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
      };
    });
    setCardStyles(styles);
  }, [cards, positions]);

  const rotate = (direction) => {
    if (expandedCard !== null) return;

    setCards(prev => {
      if (direction === 'next') {
        return [...prev.slice(1), prev[0]];
      } else {
        return [prev[prev.length - 1], ...prev.slice(0, -1)];
      }
    });

    setCurrentIndex(prev => {
      if (direction === 'next') {
        return (prev + 1) % cardData.length;
      } else {
        return (prev - 1 + cardData.length) % cardData.length;
      }
    });
  };

  useEffect(() => {
    if (!isPaused && expandedCard === null) {
      autoSlideInterval.current = setInterval(() => {
        rotate('next');
      }, 1000);
    }

    return () => {
      if (autoSlideInterval.current) {
        clearInterval(autoSlideInterval.current);
      }
    };
  }, [isPaused, expandedCard, cards]);

  const handleDragStart = (e) => {
    if (expandedCard !== null) return;
    setIsDragging(true);
    setIsPaused(true);
    dragRef.current.startX = e.type.includes('mouse') ? e.clientX : e.touches[0].clientX;
    dragRef.current.dragDistance = 0;
    dragRef.current.processedSteps = 0;
  };

  const handleDragMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const currentX = e.type.includes('mouse') ? e.clientX : e.touches[0].clientX;
    dragRef.current.dragDistance = currentX - dragRef.current.startX;

    const steps = Math.floor(Math.abs(dragRef.current.dragDistance) / threshold);
    if (steps > dragRef.current.processedSteps) {
      const direction = dragRef.current.dragDistance > 0 ? 'prev' : 'next';
      rotate(direction);
      dragRef.current.processedSteps = steps;
    }
  };

  const handleDragEnd = () => {
    setIsDragging(false);
    setTimeout(() => setIsPaused(false), 1000);
  };

  useEffect(() => {
    document.addEventListener('mousemove', handleDragMove);
    document.addEventListener('touchmove', handleDragMove, { passive: false });
    document.addEventListener('mouseup', handleDragEnd);
    document.addEventListener('touchend', handleDragEnd);

    return () => {
      document.removeEventListener('mousemove', handleDragMove);
      document.removeEventListener('touchmove', handleDragMove);
      document.removeEventListener('mouseup', handleDragEnd);
      document.removeEventListener('touchend', handleDragEnd);
    };
  }, [isDragging]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && expandedCard !== null) {
        setExpandedCard(null);
      } else if (e.key === 'ArrowLeft' && expandedCard === null) {
        setIsPaused(true);
        rotate('prev');
        setTimeout(() => setIsPaused(false), 2000);
      } else if (e.key === 'ArrowRight' && expandedCard === null) {
        setIsPaused(true);
        rotate('next');
        setTimeout(() => setIsPaused(false), 2000);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [expandedCard]);

  const handleCardClick = (index) => {
    if (!isDragging && expandedCard === null) {
      setExpandedCard(index);
      setIsPaused(true);
    }
  };

  const handleClose = () => {
    setExpandedCard(null);
    setIsPaused(false);
  };

  const handleIndicatorClick = (index) => {
    if (expandedCard !== null) return;
    setIsPaused(true);
    
    const diff = (index - currentIndex + cardData.length) % cardData.length;
    const direction = diff <= cardData.length / 2 ? 'next' : 'prev';
    const steps = diff <= cardData.length / 2 ? diff : cardData.length - diff;
    
    for (let i = 0; i < steps; i++) {
      setTimeout(() => rotate(direction), i * 100);
    }
    
    setTimeout(() => setIsPaused(false), steps * 100 + 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 flex flex-col items-center justify-center py-8 sm:py-12 md:py-16 px-4 sm:px-5 select-none font-sans relative overflow-hidden">
      <div className="text-center mb-12 sm:mb-16 md:mb-20 relative z-10 px-4">
        <p className="text-[#040472] text-[10px] sm:text-xs font-bold uppercase tracking-[2px] sm:tracking-[3px] mb-3 sm:mb-5 opacity-70 animate-fadeInDown">
          Behind creativity
        </p>
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-medium font-serif leading-tight mb-3 animate-fadeInUp">
          Curious what else<br/><span className='text-[#040472]'>we've created?</span>
        </h1>
        <div className="w-16 sm:w-20 md:w-24 h-0.5 bg-gradient-to-r from-transparent via-[#040472] to-transparent mx-auto mt-4 sm:mt-6 animate-expandWidth"></div>
      </div>

      <div
        className={`w-full overflow-visible relative z-10 ${isDragging ? 'cursor-grabbing' : 'cursor-grab'}`}
        style={{ perspective: windowWidth < 640 ? '800px' : windowWidth < 1024 ? '1400px' : '2000px', perspectiveOrigin: '50% 50%' }}
        onMouseDown={handleDragStart}
        onTouchStart={handleDragStart}
        onMouseEnter={() => !expandedCard && setIsPaused(true)}
        onMouseLeave={() => !expandedCard && setIsPaused(false)}
      >
        <div
          className={`flex items-center justify-center gap-2 sm:gap-3 md:gap-4 -mt-8 sm:-mt-12 md:-mt-20 -ml-32 sm:-ml-44 md:-ml-59 transition-all duration-500 ${expandedCard !== null ? 'blur-sm scale-95' : ''}`}
          style={{ transformStyle: 'preserve-3d' }}
        >
          {cards.map((card, index) => (
            <div
              key={`${card.title}-${index}`}
              className="flex-shrink-0 w-40 sm:w-52 md:w-64 lg:w-72 bg-white overflow-hidden relative group shadow-2xl"
              style={{
                ...cardStyles[index],
                transformStyle: 'preserve-3d',
                opacity: expandedCard === index ? 0 : 1,
                borderRadius: windowWidth < 640 ? '8px' : '12px',
                boxShadow: '0 30px 60px -12px rgba(4, 4, 114, 0.25), 0 0 0 1px rgba(0,0,0,0.05)',
                willChange: 'transform'
              }}
              onClick={() => handleCardClick(index)}
            >
              <div
                className="absolute inset-0 pointer-events-none z-20"
                style={{
                  background: 'linear-gradient(135deg, rgba(255,255,255,0.15) 0%, transparent 40%, rgba(4,4,114,0.1) 40%)',
                  transform: 'translateZ(3px)',
                  mixBlendMode: 'overlay',
                  transition: 'opacity 0.3s ease'
                }}
              />
              
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: 'linear-gradient(to right, rgba(0,0,0,0.15) 0%, transparent 5%, transparent 95%, rgba(0,0,0,0.15) 100%)',
                  transform: 'translateZ(-1px)'
                }}
              />
              
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background: i === 0 
                      ? 'linear-gradient(to bottom, #f8f9fa, #e9ecef)'
                      : 'linear-gradient(to bottom, #dee2e6, #ced4da)',
                    transform: `translateZ(-${1 + i * 2.5}px)`,
                    opacity: 0.95 - (i * 0.12),
                    borderRadius: windowWidth < 640 ? '8px' : '12px'
                  }}
                />
              ))}
              
              <div
                className="absolute inset-0 bg-gradient-to-br from-gray-200 via-gray-300 to-gray-400 pointer-events-none"
                style={{
                  transform: 'translateZ(-18px)',
                  filter: 'blur(12px)',
                  opacity: 0.9,
                  borderRadius: windowWidth < 640 ? '8px' : '12px'
                }}
              />
              
              <img
                src={card.img}
                alt={card.title}
                className="w-full h-full object-cover block pointer-events-none relative z-10"
                style={{ 
                  transform: 'translateZ(2px)',
                  filter: 'contrast(1.08) saturate(1.15) brightness(0.98)'
                }}
              />
              
              <div
                className="absolute inset-0 pointer-events-none z-15"
                style={{
                  background: 'radial-gradient(circle at center, transparent 40%, rgba(0,0,0,0.15) 100%)',
                  transform: 'translateZ(2.5px)',
                  mixBlendMode: 'multiply'
                }}
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/80 to-transparent opacity-0 group-hover:opacity-90 transition-all duration-500 z-25 flex flex-col items-center justify-end pb-6 sm:pb-8 md:pb-10"
                style={{ transform: 'translateZ(4px)' }}>
                <div className="w-12 sm:w-14 md:w-16 h-px bg-gradient-to-r from-transparent via-white to-transparent mb-3 sm:mb-4 md:mb-5 opacity-80"></div>
                <span className="text-white text-[10px] sm:text-xs font-bold uppercase tracking-[2px] sm:tracking-[3px] px-3 sm:px-4 text-center mb-1 sm:mb-2">
                  View Project
                </span>
                <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 border-2 border-white rounded-full flex items-center justify-center opacity-80 mt-1">
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white rounded-full"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8 sm:mt-6 md:mt-2 flex items-center gap-4 sm:gap-6 md:gap-8 relative z-10">
        <button
          onClick={() => { setIsPaused(true); rotate('prev'); setTimeout(() => setIsPaused(false), 2000); }}
          className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-full bg-white shadow-lg hover:shadow-xl hover:bg-[#040472] hover:text-white transition-all duration-300 flex items-center justify-center group disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={expandedCard !== null}
        >
          <ChevronLeft size={windowWidth < 640 ? 20 : 24} className="transition-transform group-hover:-translate-x-0.5" />
        </button>
        
        <div className="flex items-center gap-1.5 sm:gap-2">
          {cardData.map((_, index) => (
            <button
              key={index}
              onClick={() => handleIndicatorClick(index)}
              disabled={expandedCard !== null}
              className={`h-1 sm:h-1.5 rounded-full transition-all duration-500 cursor-pointer hover:bg-[#040472]/70 disabled:cursor-not-allowed ${
                index === currentIndex ? 'w-8 sm:w-10 md:w-12 bg-[#040472] shadow-lg' : 'w-1 sm:w-1.5 bg-gray-300'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
        
        <button
          onClick={() => { setIsPaused(true); rotate('next'); setTimeout(() => setIsPaused(false), 2000); }}
          className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-full bg-white shadow-lg hover:shadow-xl hover:bg-[#040472] hover:text-white transition-all duration-300 flex items-center justify-center group disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={expandedCard !== null}
        >
          <ChevronRight size={windowWidth < 640 ? 20 : 24} className="transition-transform group-hover:translate-x-0.5" />
        </button>
      </div>

      {expandedCard !== null && (
        <>
          <div className="fixed inset-0 bg-black/60 backdrop-blur-md z-[999]" onClick={handleClose}></div>
          
          <div
            className="fixed inset-0 flex items-center justify-center z-[1000] pointer-events-none p-4"
            style={{
              animation: 'expandCard 0.7s cubic-bezier(0.34, 1.56, 0.64, 1) forwards'
            }}
          >
            <div className="w-full max-w-[320px] sm:max-w-[420px] md:max-w-[520px] max-h-[70vh] sm:max-h-[75vh] md:max-h-[85vh] h-[480px] sm:h-[580px] md:h-[680px] bg-white overflow-hidden shadow-2xl pointer-events-auto" style={{
              borderRadius: windowWidth < 640 ? '12px' : '16px',
              border: '1px solid rgba(255,255,255,0.2)'
            }}>
              <img
                src={cards[expandedCard].img}
                alt={cards[expandedCard].title}
                className="w-full h-full object-cover"
                style={{ filter: 'contrast(1.08) saturate(1.2) brightness(0.98)' }}
              />
            </div>
          </div>

          <div className="fixed bottom-8 sm:bottom-12 md:bottom-13 left-1/2 -translate-x-1/2 text-center z-[1001] max-w-[85vw] sm:max-w-xl md:max-w-2xl px-3 sm:px-3 md:px-3 py-3 sm:py-3 md:py-4 bg-white/40 backdrop-blur-lg shadow-2xl min-w-[280px] sm:min-w-[360px] md:min-w-[350px] animate-fadeIn pointer-events-auto " style={{ borderRadius: windowWidth < 640 ? '12px' : '16px' }}>
            <div className="w-12 sm:w-14 md:w-16 h-0.5 sm:h-0.5 bg-gradient-to-r from-transparent via-white/60 to-transparent mx-auto mb-1 sm:mb-2 md:mb-2"></div>
            <h2 className="text-3xl sm:text-2xl md:text-5xl font-medium text-black mb-1 sm:mb-1.5 md:mb-1 tracking-tight font-serif">
              {cards[expandedCard].title}
            </h2>
            <p className="text-base sm:text-base text-gray-800 leading-relaxed font-light font-mono">
              {cards[expandedCard].desc}
            </p>
          </div>

          <button
            onClick={handleClose}
            className="fixed top-6 right-6 sm:top-8 sm:right-8 md:top-12 md:right-12 w-12 h-12 sm:w-13 sm:h-13 md:w-14 md:h-14 bg-white rounded-full flex items-center justify-center z-[1002] shadow-2xl hover:bg-[#040472] hover:text-white hover:rotate-90 hover:scale-110 transition-all duration-300 animate-fadeIn pointer-events-auto"
          >
            <X size={windowWidth < 640 ? 22 : 26} strokeWidth={2.5} />
          </button>
        </>
      )}

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes expandCard {
          from {
            transform: scale(0.3);
            opacity: 0;
          }
          to {
            transform: scale(1);
            opacity: 1;
          }
        }
        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 0.7;
            transform: translateY(0);
          }
        }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes expandWidth {
          from {
            width: 0;
            opacity: 0;
          }
          to {
            width: 6rem;
            opacity: 1;
          }
        }
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.5;
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }
        .animate-fadeInDown {
          animation: fadeInDown 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }
        .animate-fadeInUp {
          animation: fadeInUp 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) 0.2s both;
        }
        .animate-expandWidth {
          animation: expandWidth 1s cubic-bezier(0.34, 1.56, 0.64, 1) 0.4s both;
        }
      `}</style>
    </div>
  );
}