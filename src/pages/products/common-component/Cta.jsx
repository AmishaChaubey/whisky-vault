import React from 'react';
import { Link } from 'react-router-dom';

export default function CTASection({ data }) {
  const { heading, description, buttons, statistics, styles } = data;

  return (
    <section className="bg-white py-8 sm:py-12 md:py-16 lg:py-20 xl:py-25 px-4 sm:px-6 lg:px-8 relative">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="h-full w-full" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23040472' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }}></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className={`bg-gradient-to-br ${styles.gradientFrom} ${styles.gradientTo} rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 lg:p-12 xl:p-16 shadow-2xl relative overflow-hidden`}>
          {/* Enhanced decorative elements */}
          <div className="absolute top-0 right-0 w-40 h-40 sm:w-60 sm:h-60 lg:w-80 lg:h-80 rounded-full opacity-10 -mr-20 -mt-20 sm:-mr-30 sm:-mt-30 lg:-mr-40 lg:-mt-40" style={{ backgroundColor: styles.primaryColor }}></div>
          <div className="absolute bottom-0 left-0 w-32 h-32 sm:w-48 sm:h-48 lg:w-64 lg:h-64 rounded-full opacity-10 -ml-16 -mb-16 sm:-ml-24 sm:-mb-24 lg:-ml-32 lg:-mb-32" style={{ backgroundColor: styles.primaryColor }}></div>
          
          <div className="relative z-10 text-center">
            {/* Enhanced heading with decorative element */}
            <div className="inline-block mb-3 sm:mb-4">
              {heading.showDecorator && (
                <div className="flex items-center justify-center mb-2 sm:mb-3">
                  <div className="h-px w-8 sm:w-12" style={{ backgroundColor: styles.primaryColor }}></div>
                  <div className="mx-2 sm:mx-4">
                    <svg className="w-6 h-6 sm:w-8 sm:h-8" style={{ color: styles.primaryColor }} fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 2a1 1 0 011 1v1.323l3.954 1.582 1.599-.8a1 1 0 01.894 1.79l-1.233.616 1.738 5.42a1 1 0 01-.285 1.05A3.989 3.989 0 0115 15a3.989 3.989 0 01-2.667-1.019 1 1 0 01-.285-1.05l1.715-5.349L11 6.477V16h2a1 1 0 110 2H7a1 1 0 110-2h2V6.477L6.237 7.582l1.715 5.349a1 1 0 01-.285 1.05A3.989 3.989 0 015 15a3.989 3.989 0 01-2.667-1.019 1 1 0 01-.285-1.05l1.738-5.42-1.233-.617a1 1 0 01.894-1.788l1.599.799L9 4.323V3a1 1 0 011-1z"/>
                    </svg>
                  </div>
                  <div className="h-px w-8 sm:w-12" style={{ backgroundColor: styles.primaryColor }}></div>
                </div>
              )}
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-2 font-serif px-2" style={{ color: styles.primaryColor }}>
                {heading.title}
              </h2>
            </div>
            
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed  px-2">
              {description}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-8 sm:mb-10 lg:mb-12 px-2">
              {buttons.map((button, index) => (
                button.type === 'primary' ? (
                  <Link to ='/collections'>
                  <button 
                    key={index}
                    className="w-full sm:w-auto px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-semibold text-white text-sm sm:text-base transition-all duration-300 hover:shadow-2xl hover:scale-105 relative overflow-hidden group"
                    style={{ backgroundColor: styles.primaryColor }}
                  >
                    <span className="relative z-10 flex items-center justify-center">
                      {button.text}
                      {button.showIcon && (
                        <svg className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
                        </svg>
                      )}
                    </span>
                    <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity"></div>
                   
                  </button>
                   </Link>

                ) : (
                  <Link to='/gallery'>
                  <button 
                    key={index}
                    className="w-full sm:w-auto px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-semibold text-sm sm:text-base border-2 transition-all duration-300 hover:shadow-lg hover:scale-105 relative overflow-hidden group"
                    style={{ 
                      color: styles.primaryColor, 
                      borderColor: styles.primaryColor,
                      backgroundColor: 'white'
                    }}
                  >
                    <span className="relative z-10 flex items-center justify-center">
                      {button.text}
                      {button.showIcon && (
                        <svg className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
                        </svg>
                      )}
                    </span>
                  </button>
                  </Link>
                )
              ))}
            </div>
            
            {/* Enhanced statistics section with icons */}
            <div className="mt-6 sm:mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-4 lg:gap-6 text-center px-2">
              {statistics.map((stat, index) => (
                <div key={index} className="group">
                  <div className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full mb-2 mx-auto transition-all duration-300 group-hover:scale-110" style={{ backgroundColor: 'rgba(4, 4, 114, 0.1)' }}>
                    <svg className="w-5 h-5 sm:w-6 sm:h-6" style={{ color: styles.primaryColor }} fill="currentColor" viewBox="0 0 20 20">
                      <path 
                        d={stat.iconPath} 
                        fillRule={stat.fillRule}
                        clipRule={stat.clipRule}
                      />
                    </svg>
                  </div>
                  <p className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-1" style={{ color: styles.primaryColor }}>{stat.number}</p>
                  <p className="text-gray-600 text-sm sm:text-base">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}