import React, { useState, useEffect, useRef } from 'react';
import { Star, ChevronLeft, ChevronRight, Play, Pause, Quote } from 'lucide-react';

export default function TestimonialsSection() {
  const primaryColor = "#040472";
  const [activeIndex, setActiveIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState(null);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [touchStart, setTouchStart] = useState(null);
  const sectionRef = useRef(null);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Anderson",
      role: "CEO & Founder",
      company: "TechVision Inc.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
      content:
        "Absolutely transformative! The level of professionalism and attention to detail exceeded all our expectations. This partnership has been instrumental in our company's growth trajectory.",
      rating: 5,
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Product Manager",
      company: "InnovateLabs",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
      content:
        "Working with this team has been an absolute game-changer. Their innovative approach and dedication to excellence shine through in every interaction.",
      rating: 5,
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Creative Director",
      company: "Design Studio Co.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
      content:
        "The creativity and strategic thinking brought to our project was phenomenal. Every deliverable exceeded our wildest expectations.",
      rating: 5,
    },
    {
      id: 4,
      name: "James Patterson",
      role: "Operations Director",
      company: "Global Solutions Ltd.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
      content:
        "Outstanding results delivered consistently. The team's expertise has made them an invaluable partner in our success.",
      rating: 5,
    },
    {
      id: 5,
      name: "Lisa Thompson",
      role: "Marketing Lead",
      company: "BrandWorks Agency",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop",
      content:
        "From start to finish, the experience has been flawless. The strategic insights have helped us achieve remarkable results.",
      rating: 5,
    },
    {
      id: 6,
      name: "David Kumar",
      role: "Tech Lead",
      company: "Digital Dynamics",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
      content:
        "The technical expertise combined with excellent communication makes this team stand out from the competition.",
      rating: 5,
    },
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      goToNext();
    }, 4500);
    return () => clearInterval(interval);
  }, [isAutoPlaying, activeIndex]);

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.keyCode === 37) goToPrev();
      if (e.keyCode === 39) goToNext();
    };
    document.addEventListener('keyup', handleKeyPress);
    return () => document.removeEventListener('keyup', handleKeyPress);
  }, [activeIndex]);

  const goToNext = () => {
    setPrevIndex(activeIndex);
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const goToPrev = () => {
    setPrevIndex(activeIndex);
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToSlide = (index) => {
    setPrevIndex(activeIndex);
    setActiveIndex(index);
  };

  const handleTouchStart = (e) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchEnd = (e) => {
    if (!touchStart) return;
    const touchEnd = e.changedTouches[0].clientX;
    const diff = touchStart - touchEnd;
    const ignoreTouch = 30;

    if (diff > ignoreTouch) {
      goToNext();
    } else if (diff < -ignoreTouch) {
      goToPrev();
    }
    setTouchStart(null);
  };

  return (
    <>
      <style>{`
        @keyframes testimScale {
          0% { box-shadow: 0px 0px 0px 0px #eee; }
          35% { box-shadow: 0px 0px 10px 5px #eee; }
          70% { box-shadow: 0px 0px 10px 5px ${primaryColor}; }
          100% { box-shadow: 0px 0px 0px 0px ${primaryColor}; }
        }

        @keyframes testimContentIn {
          from {
            opacity: 0;
            transform: translateY(100%);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes testimContentOut {
          from {
            opacity: 1;
            transform: translateY(0);
          }
          to {
            opacity: 0;
            transform: translateY(-100%);
          }
        }

        @keyframes testimShow {
          from {
            opacity: 0;
            transform: scale(0);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes testimHide {
          from {
            opacity: 1;
            transform: scale(1);
          }
          to {
            opacity: 0;
            transform: scale(0);
          }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }

        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-25px) rotate(-5deg); }
        }

        @keyframes pulse-slow {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.05); }
        }

        @keyframes shimmer {
          0% { transform: translateX(-100%) translateY(-100%) rotate(45deg); }
          100% { transform: translateX(100%) translateY(100%) rotate(45deg); }
        }

        .testimonial-active .testimonial-image {
          animation: testimShow 0.5s ease-in-out forwards;
        }

        .testimonial-inactive .testimonial-image {
          animation: testimHide 0.5s ease-in-out forwards;
        }

        .testimonial-active .testimonial-name {
          animation: testimContentIn 0.4s ease-in-out forwards;
        }

        .testimonial-inactive .testimonial-name {
          animation: testimContentOut 0.4s ease-in-out forwards;
        }

        .testimonial-active .testimonial-text {
          animation: testimContentIn 0.5s ease-in-out forwards;
        }

        .testimonial-inactive .testimonial-text {
          animation: testimContentOut 0.5s ease-in-out forwards;
        }

        .testimonial-active .testimonial-role {
          animation: testimContentIn 0.45s ease-in-out forwards;
        }

        .testimonial-inactive .testimonial-role {
          animation: testimContentOut 0.45s ease-in-out forwards;
        }

        .dot-active {
          animation: testimScale 0.5s ease-in-out forwards;
        }

        .testimonial-card-wrapper {
          position: relative;
          min-height: 400px;
        }

        .testimonial-card-absolute {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          opacity: 0;
        }

        .testimonial-active {
          position: relative;
          opacity: 1;
        }

        .testimonial-inactive {
          opacity: 0;
        }

        .float-element {
          animation: float 6s ease-in-out infinite;
        }

        .float-element-delayed {
          animation: float-delayed 7s ease-in-out infinite;
        }

        .pulse-element {
          animation: pulse-slow 4s ease-in-out infinite;
        }

        .shimmer-effect {
          position: relative;
          overflow: hidden;
        }

        .shimmer-effect::before {
          content: '';
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: linear-gradient(
            45deg,
            transparent,
            rgba(255, 255, 255, 0.1),
            transparent
          );
          animation: shimmer 3s infinite;
        }
      `}</style>

      <section 
        ref={sectionRef}
        className="relative bg-white py-16 sm:py-20 lg:py-24 px-4 sm:px-6 overflow-hidden"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {/* Enhanced Background Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Large gradient orbs */}
          <div className="absolute -top-24 -left-20 w-64 sm:w-72 h-64 sm:h-72 bg-blue-50 rounded-full opacity-90 blur-3xl pulse-element"></div>
          <div className="absolute -bottom-32 -right-32 w-80 sm:w-96 h-80 sm:h-96 bg-blue-50 rounded-full opacity-90 blur-3xl pulse-element"></div>
          
          {/* Floating circles */}
          {/* <div className="absolute top-20 right-20 w-32 h-32 border-2 border-blue-100 rounded-full opacity-90 float-element"></div> */}
          <div className="absolute bottom-40 left-32 w-24 h-24 border-2 border-blue-100 rounded-full opacity-90 float-element-delayed"></div>
          {/* <div className="absolute top-1/3 right-1/4 w-16 h-16 border-2 border-blue-100 rounded-full opacity-90 float-element"></div> */}
          {/* <div className="absolute bottom-1/4 left-1/3 w-20 h-20 border-2 border-blue-100 rounded-full opacity-90 float-element-delayed"></div> */}
          
          {/* Small dots pattern */}
          <div className="absolute top-32 left-1/4 w-2 h-2 rounded-full bg-blue-200 opacity-90"></div>
          <div className="absolute top-48 right-1/3 w-2 h-2 rounded-full bg-blue-200 opacity-90"></div>
          <div className="absolute bottom-32 left-1/2 w-2 h-2 rounded-full bg-blue-200 opacity-90"></div>
          <div className="absolute bottom-48 right-1/4 w-2 h-2 rounded-full bg-blue-200 opacity-90"></div>
          <div className="absolute top-64 left-16 w-2 h-2 rounded-full bg-blue-200 opacity-90"></div>
          <div className="absolute bottom-64 right-16 w-2 h-2 rounded-full bg-blue-200 opacity-90"></div>
          
     
          

          
          {/* Additional decorative elements */}
          <div className="absolute top-1/2 left-8 w-1 h-1 rounded-full bg-blue-300 opacity-90"></div>
          <div className="absolute top-2/3 right-24 w-1 h-1 rounded-full bg-blue-300 opacity-90"></div>
          <div className="absolute bottom-1/2 left-1/4 w-1 h-1 rounded-full bg-blue-300 opacity-90"></div>

        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Section Header */}
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-blue-50 mb-4 sm:mb-6 shadow-sm backdrop-blur-sm shimmer-effect">
              <div className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: primaryColor }}></div>
              <span className="text-xs sm:text-sm font-semibold tracking-wide" style={{ color: primaryColor }}>
                TESTIMONIALS
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-slate-900 mb-4 sm:mb-5 font-serif leading-tight">
              What Our <span style={{ color: primaryColor }} className="relative inline-block">
                Clients Say
                <div className="absolute -bottom-2 left-0 right-0 h-1 bg-[#040472] opacity-65 rounded-full"></div>
              </span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Discover the experiences that drive our passion for excellence
            </p>
          </div>

          {/* Main Testimonial Card */}
          <div className="relative mb-10 sm:mb-12 px-10 max-w-7xl mx-auto sm:px-16">
            <div className="testimonial-card-wrapper  ">
              {testimonials.map((testimonial, index) => (
                <div
                  key={testimonial.id}
                  className={`testimonial-card-absolute ${
                    index === activeIndex
                      ? 'testimonial-active'
                      : index === prevIndex
                      ? 'testimonial-inactive'
                      : ''
                  }`}
                >
                  <div className="bg-white rounded-3xl max-w-5xl p-8 sm:p-10 md:p-12 lg:p-14 shadow-2xl border border-slate-100 mx-auto relative overflow-hidden backdrop-blur-sm shimmer-effect">
                    {/* Decorative corner elements */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#040472] to-[#040472] rounded-bl-full opacity-60"></div>
                    {/* <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-[#040472] to-transparent rounded-tr-full opacity-60"></div> */}
                    
                    {/* Quote Icon */}
                    <div className="relative">
                      <Quote className="testimonial-text w-10 h-10 sm:w-12 sm:h-12 mb-5 sm:mb-7" style={{ color: primaryColor, opacity: 0.2 }} />
                    </div>
                    
                    {/* Testimonial Text */}
                    <p className="testimonial-text text-base sm:text-lg md:text-xl text-slate-700 leading-relaxed mb-6 sm:mb-8 italic">
                      "{testimonial.content}"
                    </p>

                    {/* Rating */}
                    <div className="testimonial-text flex gap-1 mb-6 sm:mb-8">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-5 h-5 sm:w-6 sm:h-6"
                          style={{ color: primaryColor }}
                          fill={primaryColor}
                        />
                      ))}
                    </div>

                    {/* Author Section */}
                    <div className="flex items-center gap-4 sm:gap-5">
                      {/* Client Image */}
                      <div className="flex-shrink-0">
                        <div className="relative">
                          <div className="absolute -inset-1 rounded-full" style={{ backgroundColor: primaryColor, opacity: 0.1 }}></div>
                          <img
                            src={testimonial.image}
                            alt={testimonial.name}
                            className="testimonial-image relative w-16 h-16 sm:w-20 sm:h-20 rounded-full object-cover border-3 border-white shadow-md"
                          />
                        </div>
                      </div>

                      {/* Author Info */}
                      <div className="flex-1">
                        <h4 className="testimonial-name text-lg sm:text-xl font-bold text-slate-900 mb-1">
                          {testimonial.name}
                        </h4>
                        <p className="testimonial-role text-slate-600 text-sm sm:text-base font-medium">
                          {testimonial.role}
                        </p>
                        <p className="testimonial-role text-slate-500 text-xs sm:text-sm">{testimonial.company}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={goToPrev}
              className="absolute left-2 sm:left-0 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-14 sm:h-14 rounded-full bg-white shadow-xl border-2 border-slate-100 flex items-center justify-center hover:shadow-2xl transition-all duration-300 hover:scale-110 z-20 group"
              style={{ color: primaryColor }}
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5 sm:w-7 sm:h-7 group-hover:-translate-x-0.5 transition-transform" />
            </button>

            <button
              onClick={goToNext}
              className="absolute right-2 sm:right-0 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-14 sm:h-14 rounded-full bg-white shadow-xl border-2 border-slate-100 flex items-center justify-center hover:shadow-2xl transition-all duration-300 hover:scale-110 z-20 group"
              style={{ color: primaryColor }}
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5 sm:w-7 sm:h-7 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>

          {/* Bottom Controls */}
          <div className="flex flex-col items-center gap-4 sm:gap-6">
            {/* Dots Indicator */}
            <div className="flex gap-2 sm:gap-3">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === activeIndex ? "w-5 sm:w-6 dot-active" : "w-2 bg-slate-300 hover:bg-slate-400"
                  }`}
                  style={{
                    backgroundColor: index === activeIndex ? primaryColor : undefined,
                  }}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            {/* Auto-play Toggle */}
            <button
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              className="flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 rounded-full border-2 hover:shadow-lg transition-all duration-300 text-sm sm:text-base shimmer-effect"
              style={{
                borderColor: primaryColor,
                backgroundColor: isAutoPlaying ? primaryColor : "white",
                color: isAutoPlaying ? "white" : primaryColor,
              }}
            >
              {isAutoPlaying ? (
                <>
                  <Pause className="w-4 h-4" />
                  <span className="font-semibold">Pause Auto-play</span>
                </>
              ) : (
                <>
                  <Play className="w-4 h-4" />
                  <span className="font-semibold">Play Auto-play</span>
                </>
              )}
            </button>
          </div>
        </div>
      </section>
    </>
  );
}