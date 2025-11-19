import React ,{ useEffect} from 'react';
import { Beer ,  Droplets, Thermometer, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
const CocktailsInfo = () => {
 const instructions = [
    { icon: Beer, title: 'Beer Ingredients', desc: 'High-quality malt, hops and yeast create the perfect foundation for exceptional beer.' },
    { icon: Thermometer, title: 'Best process', desc: 'Precision temperature control and timing ensure optimal flavor development.' },
    { icon: Droplets, title: 'Filtering procedure', desc: 'Advanced filtration systems remove impurities while preserving rich flavors.' },
    { icon: Clock, title: 'Widely Method', desc: 'Time-tested brewing techniques combined with modern innovation.' }
  ];
   useEffect(() => {
      window.scrollTo(0, 0);
    }, []);


  return (
    <div className="min-h-screen bg-white">
      <div className="relative min-h-screen overflow-hidden bg-black">
        <div className="absolute inset-0">
          <img 
            src="/cocktailss/banner1.png" 
            alt="Hops and beer" 
            className="w-full h-full object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-black/30 to-black/40"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 h-full min-h-screen flex items-center py-20">
          <div className="max-w-3xl w-full">
            <p className="text-amber-400 text-xs sm:text-sm mb-3 sm:mb-4 tracking-widest font-bold uppercase">
              Brewed with Simple Ingredients
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 sm:mb-6 leading-tight tracking-tight">
              The <span className="font-serif italic font-normal">Best Ideas</span> Emerge<br className="hidden sm:block" />
              From The <span className="font-serif italic font-normal">Simplest</span><br className="hidden sm:block" />
              <span className="font-serif italic font-normal">Tools</span>
            </h1>
            <p className="text-gray-300 mb-6 sm:mb-8 text-sm sm:text-base lg:text-lg leading-relaxed max-w-xl font-light">
              Every great beer begins with simple ingredients and traditional brewing methods,
              transformed through craftsmanship into something extraordinary.
            </p>
            <button className="bg-[#040472]  text-white px-6 sm:px-8 md:px-10 py-2.5 sm:py-3 md:py-3.5 rounded-full font-bold text-sm sm:text-base transition-all duration-300 shadow-lg hover:shadow-xl active:scale-95 sm:hover:scale-105">
              <Link to="/contact">
              Learn More
              </Link>
            </button>
          </div>
        </div>
      
      </div>
<div className='relative'>
 <div className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-amber-50/30 to-orange-50/20">
        <div className="absolute inset-0 opacity-30 sm:opacity-50 md:opacity-80">
          <img src="/cocktailss/instruction1.svg" className="object-cover w-full h-full" alt="Background pattern"></img>
        </div>
        
        {/* Decorative elements - hidden on mobile for performance */}
        <div className="hidden sm:block absolute top-10 lg:top-20 right-10 lg:right-20 w-40 sm:w-48 lg:w-72 h-40 sm:h-48 lg:h-72 bg-amber-200/20 rounded-full blur-3xl"></div>
        <div className="hidden sm:block absolute bottom-10 lg:bottom-20 left-10 lg:left-20 w-48 sm:w-64 lg:w-96 h-48 sm:h-64 lg:h-96 bg-blue-200/20 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 py-12 sm:py-16 md:py-20 lg:py-28">
          <div className="flex flex-col lg:flex-row items-start gap-8 sm:gap-10 lg:gap-16 xl:gap-24">
            {/* Left - Title Section */}
            <div className="w-full lg:flex-shrink-0 lg:w-80 xl:w-96">
              <div>
                <div className="inline-block mb-3 sm:mb-4 px-3 sm:px-4 py-1 sm:py-1.5 bg-blue-100/80 rounded-full">
                  <span className="text-xs font-semibold text-[#040472] tracking-wider uppercase">Brewing Excellence</span>
                </div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-serif text-[#040472] leading-tight mb-2 sm:mb-3">
                  Detailed Beer
                </h2>
                <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl italic font-serif text-amber-600 mb-2">Drinking Instructions</p>
              </div>
            </div>

            {/* Right - Instructions Grid (2x2) */}
            <div className="flex-1 w-full">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 xl:gap-10">
                {instructions.map((item, idx) => (
                  <div key={idx} className="group relative bg-white/80 shadow-xl backdrop-blur-sm rounded-xl sm:rounded-2xl lg:rounded-3xl p-5 sm:p-6 lg:p-8 hover:bg-white hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 border border-amber-100/50">
                    {/* Subtle gradient overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-amber-50/0 via-orange-50/0 to-amber-100/0 group-hover:from-amber-50/30 group-hover:via-orange-50/20 group-hover:to-transparent rounded-xl sm:rounded-2xl lg:rounded-3xl transition-all duration-500"></div>
                    
                    <div className="relative flex items-start gap-3 sm:gap-4 lg:gap-5">
                      <div className="flex-shrink-0">
                        <div className="relative w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-lg sm:rounded-xl lg:rounded-2xl bg-gradient-to-br from-orange-400 via-amber-500 to-orange-600 flex items-center justify-center shadow-lg group-hover:shadow-2xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                          <item.icon className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-white relative z-10" />
                          {/* Glow effect */}
                          <div className="absolute inset-0 bg-gradient-to-br from-yellow-300 to-orange-500 rounded-lg sm:rounded-xl lg:rounded-2xl blur-md opacity-0 group-hover:opacity-40 transition-opacity duration-500"></div>
                        </div>
                      </div>
                      <div className="flex-1 pt-0.5 sm:pt-1">
                        <h3 className="font-bold text-[#040472] mb-1.5 sm:mb-2 lg:mb-3 text-sm sm:text-base md:text-sm lg:text-base xl:text-lg group-hover:text-blue-700 transition-colors duration-300">{item.title}</h3>
                        <p className="text-xs sm:text-sm md:text-xs lg:text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                    
                    {/* Corner accent */}
                    <div className="absolute top-0 right-0 w-12 sm:w-16 lg:w-20 h-12 sm:h-16 lg:h-20 bg-gradient-to-br from-amber-400/10 to-transparent rounded-tr-xl sm:rounded-tr-2xl lg:rounded-tr-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

    

 
    </div>
    </div>
  );
};

export default CocktailsInfo;