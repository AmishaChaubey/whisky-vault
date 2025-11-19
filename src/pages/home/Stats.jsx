import React, { useState, useEffect, useRef } from 'react';

const WhiskyStats = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState({
    years: 0,
    bottles: 0,
    awards: 0,
    countries: 0
  });
  
  const sectionRef = useRef(null);
  const hasAnimated = useRef(false);

  const finalValues = {
    years: 150,
    bottles: 5000,
    awards: 87,
    countries: 45
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated.current) {
          setIsVisible(true);
          hasAnimated.current = true;
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000;
    const steps = 60;
    const stepDuration = duration / steps;

    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;

      setCounts({
        years: Math.floor(finalValues.years * progress),
        bottles: Math.floor(finalValues.bottles * progress),
        awards: Math.floor(finalValues.awards * progress),
        countries: Math.floor(finalValues.countries * progress)
      });

      if (currentStep >= steps) {
        setCounts(finalValues);
        clearInterval(timer);
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, [isVisible]);

  const stats = [
    {
      number: counts.years,
      suffix: '+',
      label: 'Years of Heritage',
      icon: (
        <svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Whisky barrel with detailed bands and wood grain effect */}
          <ellipse cx="36" cy="16" rx="14" ry="4" fill="#040472" opacity="0.15"/>
          <rect x="22" y="16" width="28" height="40" fill="url(#barrel-gradient)" rx="2"/>
          <ellipse cx="36" cy="56" rx="14" ry="4" fill="#040472" opacity="0.2"/>
          
          {/* Barrel bands */}
          <rect x="20" y="22" width="32" height="2.5" fill="#040472" opacity="0.4" rx="1"/>
          <rect x="20" y="34" width="32" height="3" fill="#040472" opacity="0.5" rx="1"/>
          <rect x="20" y="48" width="32" height="2.5" fill="#040472" opacity="0.4" rx="1"/>
          
          {/* Wood grain details */}
          <path d="M26 20 Q28 28 26 36 Q28 44 26 52" stroke="#040472" strokeWidth="0.5" opacity="0.2"/>
          <path d="M30 20 Q32 28 30 36 Q32 44 30 52" stroke="#040472" strokeWidth="0.5" opacity="0.2"/>
          <path d="M42 20 Q40 28 42 36 Q40 44 42 52" stroke="#040472" strokeWidth="0.5" opacity="0.2"/>
          <path d="M46 20 Q44 28 46 36 Q44 44 46 52" stroke="#040472" strokeWidth="0.5" opacity="0.2"/>
          
          {/* Center emblem */}
          <circle cx="36" cy="36" r="6" fill="#040472" opacity="0.15"/>
          <text x="36" y="40" fontSize="8" fontWeight="bold" fill="#040472" textAnchor="middle">150</text>
          
          <defs>
            <linearGradient id="barrel-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#040472" stopOpacity="0.15"/>
              <stop offset="50%" stopColor="#040472" stopOpacity="0.25"/>
              <stop offset="100%" stopColor="#040472" stopOpacity="0.15"/>
            </linearGradient>
          </defs>
        </svg>
      )
    },
    {
      number: counts.bottles,
      suffix: '+',
      label: 'Premium Bottles',
      icon: (
        <svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Premium whisky bottle with label and details */}
          <rect x="30" y="8" width="12" height="8" rx="2" fill="#040472" opacity="0.3"/>
          <rect x="31" y="10" width="10" height="4" fill="#040472" opacity="0.2"/>
          
          {/* Bottle neck */}
          <path d="M29 16 L29 24 L28 26 L28 58 C28 60 29 62 31 62 L41 62 C43 62 44 60 44 58 L44 26 L43 24 L43 16 Z" fill="url(#bottle-gradient)"/>
          
          {/* Bottle shoulder highlight */}
          <path d="M29 24 Q36 22 43 24" stroke="#040472" strokeWidth="1" opacity="0.2" fill="none"/>
          
          {/* Label */}
          <rect x="30" y="32" width="12" height="16" fill="#040472" opacity="0.2" rx="1"/>
          <rect x="31" y="34" width="10" height="3" fill="#040472" opacity="0.4" rx="0.5"/>
          <rect x="31" y="39" width="10" height="1" fill="#040472" opacity="0.3"/>
          <rect x="31" y="42" width="10" height="1" fill="#040472" opacity="0.3"/>
          <rect x="31" y="45" width="6" height="1" fill="#040472" opacity="0.3"/>
          
          {/* Liquid level */}
          <rect x="30" y="50" width="12" height="8" fill="#040472" opacity="0.35" rx="1"/>
          
          {/* Bottom detail */}
          <ellipse cx="36" cy="61" rx="7" ry="2" fill="#040472" opacity="0.3"/>
          
          {/* Shine effect */}
          <path d="M32 20 L33 22 L33 56 L32 58" stroke="#ffffff" strokeWidth="1.5" opacity="0.3"/>
          
          <defs>
            <linearGradient id="bottle-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#040472" stopOpacity="0.15"/>
              <stop offset="50%" stopColor="#040472" stopOpacity="0.25"/>
              <stop offset="100%" stopColor="#040472" stopOpacity="0.15"/>
            </linearGradient>
          </defs>
        </svg>
      )
    },
    {
      number: counts.awards,
      suffix: '+',
      label: 'International Awards',
      icon: (
        <svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Trophy with detailed base and handles */}
          <path d="M20 16 L20 20 Q20 26 24 28 L24 32" stroke="#040472" strokeWidth="2.5" opacity="0.3" fill="none"/>
          <path d="M52 16 L52 20 Q52 26 48 28 L48 32" stroke="#040472" strokeWidth="2.5" opacity="0.3" fill="none"/>
          
          {/* Main cup */}
          <path d="M26 16 L26 22 Q26 34 36 38 Q46 34 46 22 L46 16 Z" fill="url(#trophy-gradient)"/>
          <rect x="26" y="14" width="20" height="4" fill="#040472" opacity="0.3" rx="1"/>
          
          {/* Trophy stem */}
          <rect x="34" y="38" width="4" height="14" fill="#040472" opacity="0.35" rx="1"/>
          
          {/* Trophy base */}
          <ellipse cx="36" cy="52" rx="10" ry="3" fill="#040472" opacity="0.3"/>
          <rect x="28" y="52" width="16" height="4" fill="#040472" opacity="0.35" rx="1"/>
          <ellipse cx="36" cy="56" rx="12" ry="3" fill="#040472" opacity="0.4"/>
          
          {/* Decorative elements */}
          <circle cx="36" cy="24" r="6" fill="#040472" opacity="0.2"/>
          <path d="M36 20 L37.5 23 L41 23.5 L38.5 26 L39 29.5 L36 28 L33 29.5 L33.5 26 L31 23.5 L34.5 23 Z" fill="#040472" opacity="0.4"/>
          
          {/* Shine effects */}
          <path d="M29 18 Q30 24 29 32" stroke="#ffffff" strokeWidth="1.5" opacity="0.3" fill="none"/>
          <circle cx="39" cy="20" r="2" fill="#ffffff" opacity="0.3"/>
          
          <defs>
            <linearGradient id="trophy-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#040472" stopOpacity="0.2"/>
              <stop offset="50%" stopColor="#040472" stopOpacity="0.35"/>
              <stop offset="100%" stopColor="#040472" stopOpacity="0.25"/>
            </linearGradient>
          </defs>
        </svg>
      )
    },
    {
      number: counts.countries,
      suffix: '+',
      label: 'Countries Worldwide',
      icon: (
        <svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Detailed globe with continents */}
          <circle cx="36" cy="36" r="22" fill="url(#globe-gradient)"/>
          <circle cx="36" cy="36" r="22" stroke="#040472" strokeWidth="2" opacity="0.3" fill="none"/>
          
          {/* Latitude lines */}
          <ellipse cx="36" cy="36" rx="22" ry="8" stroke="#040472" strokeWidth="1" opacity="0.2" fill="none"/>
          <ellipse cx="36" cy="36" rx="22" ry="16" stroke="#040472" strokeWidth="1" opacity="0.15" fill="none"/>
          
          {/* Longitude lines */}
          <ellipse cx="36" cy="36" rx="8" ry="22" stroke="#040472" strokeWidth="1" opacity="0.2" fill="none"/>
          <ellipse cx="36" cy="36" rx="16" ry="22" stroke="#040472" strokeWidth="1" opacity="0.15" fill="none"/>
          
          {/* Equator */}
          <line x1="14" y1="36" x2="58" y2="36" stroke="#040472" strokeWidth="1.5" opacity="0.25"/>
          
          {/* Prime meridian */}
          <line x1="36" y1="14" x2="36" y2="58" stroke="#040472" strokeWidth="1.5" opacity="0.25"/>
          
          {/* Stylized continents */}
          <path d="M20 28 Q22 26 24 27 Q26 28 27 26 Q29 24 31 25 L32 27 Q30 29 28 30 L26 32 Q24 31 22 30 L20 28 Z" fill="#040472" opacity="0.4"/>
          <path d="M38 22 Q40 20 42 21 Q44 22 45 24 L44 26 Q42 27 40 26 L38 24 Z" fill="#040472" opacity="0.4"/>
          <path d="M34 40 Q36 38 38 39 L40 41 Q42 43 41 45 L39 47 Q37 46 35 45 L33 43 Z" fill="#040472" opacity="0.4"/>
          <path d="M48 34 Q50 32 52 34 L51 36 Q49 37 47 36 Z" fill="#040472" opacity="0.4"/>
          
          {/* Location pins */}
          <circle cx="28" cy="29" r="1.5" fill="#040472"/>
          <circle cx="40" cy="23" r="1.5" fill="#040472"/>
          <circle cx="37" cy="42" r="1.5" fill="#040472"/>
          <circle cx="49" cy="35" r="1.5" fill="#040472"/>
          
          {/* Outer glow */}
          <circle cx="36" cy="36" r="24" stroke="#040472" strokeWidth="1" opacity="0.1" fill="none"/>
          
          <defs>
            <radialGradient id="globe-gradient">
              <stop offset="0%" stopColor="#040472" stopOpacity="0.1"/>
              <stop offset="50%" stopColor="#040472" stopOpacity="0.15"/>
              <stop offset="100%" stopColor="#040472" stopOpacity="0.25"/>
            </radialGradient>
          </defs>
        </svg>
      )
    }
  ];

  return (
    <section ref={sectionRef} className="relative py-20 px-4 sm:py-24 md:py-32 overflow-hidden" style={{ background: 'linear-gradient(135deg, #fffff 0%, #fffff 100%)' }}>
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-64 h-64 rounded-full opacity-10" style={{ background: 'radial-gradient(circle, #040472 0%, transparent 70%)', transform: 'translate(-50%, -50%)' }}></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full opacity-10" style={{ background: 'radial-gradient(circle, #040472 0%, transparent 70%)', transform: 'translate(30%, 30%)' }}></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 md:mb-20">
          <div className="inline-block mb-4 px-4 py-2 rounded-full text-xs font-semibold tracking-wider uppercase" style={{ backgroundColor: 'rgba(4, 4, 114, 0.1)', color: '#040472' }}>
            Excellence & Heritage
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 tracking-tight" style={{ color: '#040472' }}>
            Our Legacy in Numbers
          </h2>
          <div className="w-24 h-0.5 mx-auto mb-6" style={{ background: 'linear-gradient(90deg, transparent, #040472, transparent)' }}></div>
          <p className="text-gray-600 text-lg sm:text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
            Crafting excellence and building trust across generations
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 mb-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="group text-center p-8 sm:p-10 rounded-3xl transition-all duration-500 hover:scale-105 relative overflow-hidden"
              style={{ 
                background: 'linear-gradient(145deg, #ffffff 0%, #f8f9fa 100%)',
                border: '2px solid rgba(4, 4, 114, 0.08)',
                boxShadow: '0 20px 50px rgba(4, 4, 114, 0.12), inset 0 1px 0 rgba(255, 255, 255, 0.8)',
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                transitionDelay: `${index * 150}ms`
              }}
            >
              {/* Animated gradient overlay */}
              {/* <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700" style={{ 
                background: 'linear-gradient(135deg, rgba(4, 4, 114, 0.05) 0%, rgba(4, 4, 114, 0.15) 50%, rgba(4, 4, 114, 0.05) 100%)',
                backgroundSize: '200% 200%',
                animation: 'gradient-shift 3s ease infinite'
              }}></div> */}
              
              {/* Corner ornaments */}
              <div className="absolute top-0 left-0 w-20 h-20">
                <div className="absolute top-3 left-3 w-12 h-12 border-t-2 border-l-2 rounded-tl-xl" style={{ borderColor: 'rgba(4, 4, 114, 0.15)' }}></div>
                <div className="absolute top-5 left-5 w-8 h-8 border-t border-l rounded-tl-lg" style={{ borderColor: 'rgba(4, 4, 114, 0.1)' }}></div>
              </div>
              <div className="absolute bottom-0 right-0 w-20 h-20">
                <div className="absolute bottom-3 right-3 w-12 h-12 border-b-2 border-r-2 rounded-br-xl" style={{ borderColor: 'rgba(4, 4, 114, 0.15)' }}></div>
                <div className="absolute bottom-5 right-5 w-8 h-8 border-b border-r rounded-br-lg" style={{ borderColor: 'rgba(4, 4, 114, 0.1)' }}></div>
              </div>
              
              {/* Decorative pattern */}
              <div className="absolute top-5 right-5 flex flex-col gap-1.5">
                <div className="flex gap-1.5">
                  <div className="w-1 h-1 rounded-full" style={{ backgroundColor: 'rgba(4, 4, 114, 0.2)' }}></div>
                  <div className="w-1 h-1 rounded-full" style={{ backgroundColor: 'rgba(4, 4, 114, 0.3)' }}></div>
                  <div className="w-1 h-1 rounded-full" style={{ backgroundColor: 'rgba(4, 4, 114, 0.4)' }}></div>
                </div>
                <div className="flex gap-1.5">
                  <div className="w-1 h-1 rounded-full" style={{ backgroundColor: 'rgba(4, 4, 114, 0.3)' }}></div>
                  <div className="w-1 h-1 rounded-full" style={{ backgroundColor: 'rgba(4, 4, 114, 0.4)' }}></div>
                </div>
                <div className="flex gap-1.5">
                  <div className="w-1 h-1 rounded-full" style={{ backgroundColor: 'rgba(4, 4, 114, 0.4)' }}></div>
                </div>
              </div>
              
              <div className="relative z-10">
                {/* Icon container with animated ring */}
                <div className="relative inline-block mb-6">
                 
                  <div className="absolute inset-0 rounded-full" style={{ 
                    background: 'radial-gradient(circle, rgba(4, 4, 114, 0.1) 0%, transparent 70%)',
                    transform: 'scale(1.5)'
                  }}></div>
                  <div className="relative transform group-hover:scale-110  transition-all duration-700">{stat.icon}</div>
                </div>
                
                <div className="text-xl sm:text-4xl md:text-5xl font-bold mb-4 tracking-tight" style={{ 
                  color: '#040472',
                  textShadow: '0 2px 10px rgba(4, 4, 114, 0.1)'
                }}>
                  {stat.number.toLocaleString()}{stat.suffix}
                </div>
                
                {/* Elegant divider */}
                <div className="flex items-center justify-center gap-2 mb-5">
                  <div className="h-px w-8" style={{ background: 'linear-gradient(90deg, transparent, #040472, transparent)', opacity: 0.3 }}></div>
                  <div className="relative">
                    <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#040472', opacity: 0.4 }}></div>
                    <div className="absolute inset-0 w-2 h-2 rounded-full animate-ping" style={{ backgroundColor: '#040472', opacity: 0.2 }}></div>
                  </div>
                  <div className="h-px w-8" style={{ background: 'linear-gradient(90deg, transparent, #040472, transparent)', opacity: 0.3 }}></div>
                </div>
                
                <div className="text-gray-700 text-base sm:text-lg font-semibold tracking-wide uppercase" style={{ letterSpacing: '0.05em' }}>
                  {stat.label}
                </div>
              </div>
              
              {/* Premium accent line */}
              <div className="absolute bottom-0 left-1/2 w-0 h-1 transition-all duration-500 group-hover:w-full group-hover:left-0" style={{ 
                background: 'linear-gradient(90deg, transparent, #040472, transparent)',
                opacity: 0.3
              }}></div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <div className="inline-flex items-center gap-3 px-8 py-4 sm:px-10 sm:py-5 rounded-full shadow-lg transition-all duration-300 hover:shadow-2xl hover:scale-105" style={{ background: 'linear-gradient(135deg, #040472 0%, #0505a0 100%)' }}>
            <span className="text-2xl">✨</span>
            <p className="text-white text-base sm:text-lg md:text-xl font-semibold tracking-wide">
              Trusted by connoisseurs since 2021
            </p>
            <span className="text-2xl">✨</span>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes pulse-ring {
          0%, 100% {
            opacity: 1;
            transform: scale(1.4);
          }
          50% {
            opacity: 0.5;
            transform: scale(1.6);
          }
        }
        
        @keyframes gradient-shift {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
      `}</style>
    </section>
  );
};

export default WhiskyStats;