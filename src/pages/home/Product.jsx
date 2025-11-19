import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ video, title, subtitle, description, category }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className="group relative md:w-96 w-full h-[550px] overflow-hidden cursor-pointer transform transition-all duration-700 ease-out hover:scale-[1.02] hover:-translate-y-2 bg-white shadow-xl"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Background Video with Parallax Effect */}
      <div className="absolute inset-0 overflow-hidden">
        <video
          src={video}
          alt={title}
          className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-110"
          autoPlay
          muted
          loop
        />
      </div>
      
      {/* Dynamic Overlay */}
      <div className="absolute inset-0 bg-blue-950/60 group-hover:bg-blue-950/75 transition-all duration-700" />
      
      {/* Content Container */}
      <div className="relative h-full p-8 flex flex-col justify-between text-white">
        
        {/* Top Section - Category */}
        <div className="transform transition-all duration-500 group-hover:-translate-y-1">
          <div className="inline-flex items-center">
            <span className="px-5 py-2 bg-white/20 backdrop-blur-md text-xs font-semibold uppercase tracking-[0.2em] border border-white/30">
              {category}
            </span>
          </div>
        </div>
        
        {/* Bottom Section - Main Content */}
        <div className="space-y-4">
          
          {/* Title with Animated Underline */}
          <div className="relative">
            <h3 className="text-4xl font-light leading-tight transform transition-all duration-500 group-hover:text-white tracking-wide">
              {title}
            </h3>
            <div className="absolute -bottom-2 left-0 h-0.5 bg-white/80 transition-all duration-500 w-0 group-hover:w-24"></div>
          </div>
          
          {/* Subtitle */}
          <p className="text-base font-light text-white/90 transform transition-all duration-500 tracking-wide">
            {subtitle}
          </p>
          
          {/* Expandable Description */}
          <div className={`transition-all duration-700 ease-out overflow-hidden ${
            isHovered ? 'max-h-40 opacity-100 translate-y-0' : 'max-h-0 opacity-0 translate-y-4'
          }`}>
            <p className="text-sm text-white/80 leading-relaxed font-light">
              {description}
            </p>
          </div>
          
          {/* Call to Action */}
          
          {/* <div className={`flex items-center justify-between pt-4 transition-all duration-500 ${
            isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
          
            <span className="text-sm font-medium tracking-wider uppercase">Explore Collections</span>
            
            <div className="w-10 h-10 border border-white/40 flex items-center justify-center transform transition-all duration-300 group-hover:translate-x-1 group-hover:border-white">
            <Link to='/contact'>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
              </svg>
              </Link>
       </div>
    

          </div> */}
    
          
        </div>
      </div>
      
      {/* Border */}
      <div className="absolute inset-0 ring-1 ring-white/20 group-hover:ring-white/40 transition-all duration-500"></div>
    </div>
  );
};

const BluKinsProducts = () => {
  const products = [
    {
      id: 1,
      video: "/product/products.mp4",
      title: "Whisky Bottles Collection",
      subtitle: "Aged to Perfection",
      description: "Experience the depth and complexity of our carefully curated whisky collection. Each bottle represents years of craftsmanship and tradition, offering distinct flavors from renowned Scottish distilleries.",
      category: "Premium Whisky"
    },
    {
      id: 2,
      video: "/product/cocktails.mp4",
      title: "Signature Beers",
      subtitle: "Crafted by Master Mixologists",
      description: "Experience the craft of premium beer extraction, where every pour captures the pure essence of malt, hops, and fermentation artistry to deliver unmatched freshness and flavor",
      category: "Beers Bottles"
    },
    {
      id: 3,
      video: "/herosection/Banner1.mp4",
      title: "Limited Editions",
      subtitle: "Rare & Exceptional",
      description: "Discover our exclusive limited edition releases. These rare spirits are meticulously selected for their exceptional quality, unique character, and collectible value, perfect for the discerning connoisseur.",
      category: "Rare Collection of Vodka"
    }
  ];

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-96 h-96 bg-blue-900/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-blue-900/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto  px-8 py-15">
        
        {/* Header Section */}
        <div className="text-center mb-20">
          <div className="inline-block mb-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-px bg-blue-900"></div>
              <span className="text-blue-900 text-xs tracking-[0.3em] uppercase font-medium">Explore Our Collection</span>
              <div className="w-12 h-px bg-blue-900"></div>
            </div>
          </div>
          <h1 className="text-6xl lg:text-7xl font-light text-blue-950 mb-6 leading-tight tracking-tight">
            Our Premium Collection.
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto font-light leading-relaxed">
           Exported Our Products to Many Foreign Countries and Gained Good Reputation in International Market.
          </p>
        </div>
        
        {/* Cards Grid */}
        <div className="flex flex-wrap justify-center gap-8  lg:flex-nowrap lg:justify-center lg:gap-8 mb-20">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
        
        {/* Call to Action Section */}
        <Link to="/collections">
        <div className="text-center">
          <div className="inline-flex items-center group cursor-pointer">
            <div className="bg-blue-900 px-10 py-5 hover:bg-blue-950 transition-all duration-300 group-hover:shadow-2xl shadow-lg">
              <div className="flex items-center space-x-4">
                <span className="text-white font-light tracking-[0.2em] uppercase text-sm">
                  View Full Collection
                </span>
                <svg className="w-5 h-5 text-white group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        </Link>
        
      </div>

      {/* Bottom Accent Bar */}
      {/* <div className="absolute bottom-0 left-0 right-0 h-2 bg-blue-900"></div> */}
    </div>
  );
};

export default BluKinsProducts;