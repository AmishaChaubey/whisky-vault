import React from 'react';
import { Link } from 'react-router-dom';
const CTASection = () => {
  const primaryColor = '#040472';
  
  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl" style={{ backgroundColor: primaryColor }}></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full blur-3xl" style={{ backgroundColor: primaryColor }}></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative">
        <div className="bg-gradient-to-br from-gray-50 via-white to-gray-50 rounded-3xl shadow-2xl border border-gray-200 overflow-hidden relative">
          {/* Decorative corner accent */}
          <div className="absolute top-0 right-0 w-40 h-40 opacity-10" style={{ backgroundColor: primaryColor, clipPath: 'polygon(100% 0, 100% 100%, 0 0)' }}></div>
          
          <div className="px-6 py-12 sm:px-12 sm:py-16 lg:py-20 lg:px-16 relative">
            <div className="lg:flex lg:items-center lg:justify-between gap-12">
              {/* Text Content */}
              <div className="lg:w-1/2">
                <div className="inline-block px-4 py-1 rounded-full text-xs font-semibold tracking-wide uppercase mb-6" style={{ backgroundColor: `${primaryColor}15`, color: primaryColor }}>
                  Premium Collection
                </div>
                
                <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl leading-tight">
                  <span className="block">Experience the</span>
                  <span className="block">Legacy of</span>
                  <span 
                    className="block mt-2 bg-clip-text text-transparent bg-gradient-to-r"
                    style={{ 
                      backgroundImage: `linear-gradient(135deg, ${primaryColor} 0%, #06069a 100%)`,
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent'
                    }}
                  >
                    Blu Kings Whisky
                  </span>
                </h2>
                
                <p className="mt-6 text-lg leading-relaxed text-gray-600 max-w-2xl">
                  Crafted with tradition, perfected with passion. Discover our premium 
                  collection of aged whiskies that embody the true spirit of Scottish 
                  distilling heritage.
                </p>
                
                {/* Features */}
                <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2">
                  {[
                    { text: 'Aged to Perfection', delay: '0ms' },
                    { text: 'Premium Ingredients', delay: '100ms' },
                    { text: 'Traditional Methods', delay: '200ms' },
                    { text: 'Award Winning', delay: '300ms' }
                  ].map((feature, idx) => (
                    <div key={idx} className="flex items-center group transition-transform duration-300 hover:translate-x-2">
                      <div 
                        className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center mr-3 shadow-md group-hover:shadow-lg transition-all duration-300"
                        style={{ backgroundColor: primaryColor }}
                      >
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-gray-700 font-medium">{feature.text}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* CTA Buttons */}
              <div className="mt-12 lg:mt-0 lg:w-2/5">
                <div className="space-y-5">
                   <div>
                   <Link to='/collections'>
                  <button
                    className="group w-full flex justify-center items-center px-8 py-5 border border-transparent text-base font-semibold rounded-xl text-white shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 relative overflow-hidden"
                    style={{ backgroundColor: primaryColor }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = '#03035a';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = primaryColor;
                    }}
                  >
                   
                    <span className="relative z-10 mr-2">Explore Our Collection</span>
                    <svg className="relative z-10 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 transform -translate-x-full group-hover:translate-x-full transition-all duration-700"></div>
                
                  </button>
                  </Link>
                  </div>
                 <Link to ='/contact'>
                  <button
                    className="group w-full flex justify-center items-center px-8 py-5 border-2 text-base font-semibold rounded-xl transition-all duration-300 hover:shadow-xl bg-white hover:scale-105"
                    style={{ 
                      borderColor: primaryColor,
                      color: primaryColor
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = `${primaryColor}08`;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = 'white';
                    }}
                  >
                    <span className="mr-2">Book Distillery Tour</span>
                    <svg className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </button>
                  </Link>
                </div>
                
                {/* Trust Indicators */}
                <div className="mt-10 p-6 rounded-2xl bg-gradient-to-br from-gray-50 to-white border border-gray-100">
                  <p className="text-xs uppercase tracking-wider text-gray-500 font-semibold mb-3 text-center lg:text-left">
                    Trusted Worldwide
                  </p>
                  <div className="flex justify-center lg:justify-start items-center space-x-4">
                    <div className="flex text-2xl" style={{ color: primaryColor }}>
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className="animate-pulse" style={{ animationDelay: `${i * 100}ms` }}>★</span>
                      ))}
                    </div>
                    <div className="border-l-2 border-gray-300 pl-4">
                      <div className="text-2xl font-bold" style={{ color: primaryColor }}>4.9</div>
                      <div className="text-xs text-gray-500">from 2,500+ reviews</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;