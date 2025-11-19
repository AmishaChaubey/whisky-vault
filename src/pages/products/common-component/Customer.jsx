import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const TestimonialCarousel = ({ 
  testimonials, 
  title = "Our Happy Customer",
  autoPlayInterval = 5000,
  primaryColor = '#040472',
  accentColor = '#c5dde8',
  textColor = '#6b8a9e'
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1024);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials.length, autoPlayInterval]);

  const goToPrevious = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const goToSlide = (index) => {
    setIsAutoPlaying(false);
    setCurrentIndex(index);
  };

  // Responsive values based on window width
  const quoteLineHeight = windowWidth < 640 ? 60 : windowWidth < 768 ? 90 : windowWidth < 1024 ? 100 : 120;
  const quoteCircleSize = windowWidth < 640 ? 35 : windowWidth < 768 ? 50 : windowWidth < 1024 ? 55 : 60;
  const quoteFontSize = windowWidth < 640 ? 28 : windowWidth < 768 ? 40 : windowWidth < 1024 ? 44 : 48;
  const quotePosition = windowWidth < 640 ? 15 : windowWidth < 768 ? 30 : windowWidth < 1024 ? 35 : 40;
  const quoteLineWidth = windowWidth < 640 ? 2 : 3;
  const imageMinHeight = windowWidth < 640 ? 300 : windowWidth < 768 ? 350 : windowWidth < 1024 ? 400 : 500;
  const navIconSize = windowWidth < 640 ? 20 : windowWidth < 768 ? 24 : 28;
  const dotWidth = windowWidth < 640 ? 30 : windowWidth < 768 ? 35 : 40;
  const dotHeight = windowWidth < 640 ? 10 : windowWidth < 768 ? 11 : 12;
  const inactiveDotWidth = windowWidth < 640 ? 10 : windowWidth < 768 ? 11 : 12;

  return (
    <div className="min-h-screen flex items-center justify-center p-4 sm:p-6 md:p-8 py-12 sm:py-16 md:py-25 bg-white">
      <div className="w-full max-w-7xl mx-auto">
        <h1 
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-center mb-6 sm:mb-8 md:mb-10 tracking-wider font-serif px-4" 
          style={{ color: primaryColor }}
        >
          {title}
        </h1>
        
        <div className="relative">
          {/* Main Card */}
          <div className="bg-white shadow-xl overflow-hidden" style={{ borderRadius: '0' }}>
            <div className="grid grid-cols-1 lg:grid-cols-5">
              {/* Left Side - Text Content (3 columns) */}
              <div className="lg:col-span-3 pt-8 pb-8 px-6 sm:pt-12 sm:pb-12 sm:px-12 md:pt-14 md:pb-14 md:pl-16 md:pr-12 lg:pl-32 lg:pr-16 flex flex-col justify-center relative bg-white">
                {/* Hanging Quote Decoration */}
                <div 
                  className="absolute flex flex-col items-center" 
                  style={{ 
                    top: `${quotePosition}px`, 
                    left: `${quotePosition}px` 
                  }}
                >
                  {/* Vertical line */}
                  <div style={{ 
                    width: `${quoteLineWidth}px`, 
                    height: `${quoteLineHeight}px`, 
                    backgroundColor: accentColor,
                    marginBottom: '0'
                  }}></div>
                  {/* Quote circle */}
                  <div style={{
                    width: `${quoteCircleSize}px`,
                    height: `${quoteCircleSize}px`,
                    borderRadius: '50%',
                    backgroundColor: accentColor,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: `${quoteFontSize}px`,
                    fontFamily: 'Georgia, serif',
                    color: primaryColor,
                    fontWeight: 'bold',
                    paddingBottom: '1px'
                  }}>
                    "
                  </div>
                </div>

                {/* Title */}
                <h2 
                  className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 sm:mb-6 md:mb-6 lg:mb-8 relative z-10" 
                  style={{ 
                    color: primaryColor,
                    lineHeight: '1.2',
                    fontFamily: 'system-ui, -apple-system, sans-serif',
                    fontWeight: '800'
                  }}
                >
                  {testimonials[currentIndex].title}
                </h2>

                {/* Testimonial Text */}
                <p 
                  className="text-sm sm:text-base md:text-base lg:text-base leading-relaxed relative z-10" 
                  style={{ 
                    color: textColor,
                    lineHeight: '1.8'
                  }}
                >
                  {testimonials[currentIndex].text}
                </p>
              </div>

              {/* Right Side - Image (2 columns) */}
              <div 
                className="lg:col-span-2 relative" 
                style={{ 
                  minHeight: `${imageMinHeight}px`, 
                  backgroundColor: accentColor 
                }}
              >
                <img
                  src={testimonials[currentIndex].image}
                  alt="Happy client"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                />
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={goToPrevious}
            className="absolute left-2 sm:left-4 md:-left-8 lg:-left-14 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 sm:p-3 md:p-3 lg:p-4 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 z-10"
            style={{ color: primaryColor }}
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={navIconSize} strokeWidth={2.5} />
          </button>

          <button
            onClick={goToNext}
            className="absolute right-2 sm:right-4 md:-right-8 lg:-right-14 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 sm:p-3 md:p-3 lg:p-4 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 z-10"
            style={{ color: primaryColor }}
            aria-label="Next testimonial"
          >
            <ChevronRight size={navIconSize} strokeWidth={2.5} />
          </button>
        </div>

        {/* Navigation Dots - Below the card */}
        <div className="flex justify-center gap-2 sm:gap-3 mt-6 sm:mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className="transition-all duration-300"
              style={{
                width: currentIndex === index ? `${dotWidth}px` : `${inactiveDotWidth}px`,
                height: `${dotHeight}px`,
                borderRadius: '6px',
                backgroundColor: currentIndex === index ? primaryColor : 'transparent',
                border: `2px solid ${primaryColor}`
              }}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialCarousel