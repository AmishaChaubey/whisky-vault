import React from 'react';
import { Wine, Award, Users, Star, GlassWater } from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import { useSpring, animated } from '@react-spring/web';
import { Link } from 'react-router-dom';

const WhyChooseUs = () => {
  const { ref, inView } = useInView({ 
    triggerOnce: true, 
    threshold: 0.1,
    rootMargin: '-50px 0px'
  });

  const titleSpring = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateY(0)' : 'translateY(30px)',
    config: { tension: 280, friction: 20 }
  });

  const cards = [
    {
      size: 'large',
      icon: Wine,
      title: 'Curated Collection',
      description: 'Handpicked selection of rare whiskies and premium wines from renowned distilleries and vineyards worldwide',
      stats: '500+ Premium Selections',
      image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=800&h=600&fit=crop',
      gradient: 'from-black/20 to-black'
    },
    {
      size: 'medium',
      icon: Award,
      title: 'Award-Winning Portfolio',
      description: 'Featured collections with medals from international spirit competitions',
      stats: '50+ Gold Medals',
      gradient: 'from-blue-900 to-blue-800'
    },
    {
      size: 'medium',
      icon: Users,
      title: '10,000+ Connoisseurs',
      description: 'Join a community of discerning collectors and enthusiasts',
      stats: '99% Return Rate',
      gradient: 'from-blue-900 to-blue-800'
    },
  ];

  return (
    <section ref={ref} className="py-12 relative overflow-hidden" style={{ backgroundColor: '#f8f9ff' }} id="why-choose-us">
            <div className="absolute inset-0 opacity-5">
        <div className="h-full w-full" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23040472' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }}></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <animated.div style={titleSpring} className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
            <div className="w-10 sm:w-16 h-px" style={{ background: 'linear-gradient(to right, transparent, #040472)' }}></div>
            <GlassWater className="w-5 h-5 sm:w-7 sm:h-7" style={{ color: '#040472' }} />
            <div className="w-10 sm:w-16 h-px" style={{ background: 'linear-gradient(to left, transparent, #040472)' }}></div>
          </div>
          
          <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-[#040472] mb-4 sm:mb-6 leading-snug sm:leading-tight tracking-tight" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            Why Choose Us
          </h2>
          
          <p className="text-gray-600 text-base sm:text-lg md:text-xl max-w-2xl sm:max-w-3xl mx-auto leading-relaxed" style={{ fontFamily: "'Montserrat', sans-serif" }}>
            Where tradition meets excellence, every bottle tells a story
          </p>
        </animated.div>

        {/* Masonry Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 gap-4 sm:gap-6 auto-rows-auto">
          {cards.map((card, index) => {
            const sizeClasses = {
              large: 'md:col-span-6 lg:col-span-3 md:row-span-2',
              medium: 'md:col-span-3 md:row-span-1',
              small: 'md:col-span-2 md:row-span-1'
            };

            return (
              <div
                key={index}
                className={`${sizeClasses[card.size]} group relative overflow-hidden rounded-2xl`}
                style={{
                  animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`
                }}
              >
                {card.image ? (
                  <div className="relative w-full h-64 sm:h-72 md:h-full">
                    <img 
                      src={card.image} 
                      alt={card.title}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-br ${card.gradient} opacity-80 group-hover:opacity-90 transition-opacity duration-500`}></div>
                    
                    <div className="relative h-full flex flex-col justify-end p-6 sm:p-8 text-white">
                      <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-500">
                        <card.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                      </div>
                      
                      <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 sm:mb-3" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                        {card.title}
                      </h3>
                      
                      <p className="text-white/90 text-sm sm:text-base md:text-base mb-2 sm:mb-4 leading-relaxed" style={{ fontFamily: "'mono', sans-serif" }}>
                        {card.description}
                      </p>
                      
                      {card.stats && (
                        <div className="inline-flex items-center gap-1 sm:gap-2 bg-white/20 backdrop-blur-sm px-3 py-1 sm:px-4 sm:py-2 rounded-full w-fit">
                          <Star className="w-3 h-3 sm:w-4 sm:h-4" />
                          <span className="text-xs sm:text-sm font-semibold" style={{ fontFamily: "'mono', sans-serif" }}>
                            {card.stats}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                ) : (
                  <div className={`relative h-48 sm:h-56 md:h-full bg-gradient-to-br ${card.gradient} p-4 sm:p-6 flex flex-col justify-between`}>
                    <div>
                      <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center mb-2 sm:mb-4 group-hover:scale-110 transition-transform duration-500">
                        <card.icon className="w-5 h-5 sm:w-7 sm:h-7 text-white" />
                      </div>
                      
                      <h3 className={`font-bold mb-2 sm:mb-3 text-white ${card.size === 'medium' ? 'text-xl sm:text-2xl' : 'text-lg sm:text-xl'}`} style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                        {card.title}
                      </h3>
                      
                      <p className="text-white/90 text-xs sm:text-sm leading-relaxed" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                        {card.description}
                      </p>
                    </div>
                    
                    {card.stats && (
                      <div className="mt-2 sm:mt-4 inline-flex items-center gap-1 sm:gap-2 bg-white/20 backdrop-blur-sm px-3 py-1 sm:px-4 sm:py-2 rounded-full w-fit">
                        <Star className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                        <span className="text-xs sm:text-sm font-semibold text-white" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                          {card.stats}
                        </span>
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="mt-12 sm:mt-20 text-center">
          <div className="inline-block relative group cursor-pointer">
            <div className="absolute -inset-1 rounded-full blur opacity-50 group-hover:opacity-100 transition-opacity duration-500" style={{ background: 'linear-gradient(to right, #040472, black, #040472)' }}></div>
            <Link to ="/collections">
            <button className="relative px-8 sm:px-12 py-3 sm:py-5 text-white rounded-full transition-all duration-500 shadow-xl font-semibold text-sm sm:text-lg tracking-wide" style={{ backgroundColor: '#040472', fontFamily: "'Montserrat', sans-serif" }}>
              Explore Our Collection
            </button>
            </Link>
          </div>
        </div>
      </div>

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;600;700&family=Montserrat:wght@400;500;600;700&display=swap');
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default WhyChooseUs;
