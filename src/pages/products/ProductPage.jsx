import React, { useState, useEffect } from "react";
import { Star, ChevronRight, Shield, Truck, RotateCcw } from "lucide-react";
import { Link } from "react-router-dom";

const LiquorStore = () => {
  const [selectedProduct, setSelectedProduct] = useState(0);
  const [hoveredCard, setHoveredCard] = useState(null);

  const products = [
    {
      id: 1,
      name: "RED SIGNAL BEER",
      brand: "Red Signal Beer",
      type: "Beer",
      volume: "750 ml",
      price: 1820,
      originalPrice: 3599,
      rating: 4.7,
      reviews: 87,
      image: "/bluKings/p7.png",
      alcohol: "14.5%",
      vintage: "2021",
      origin: "India",
      tasteNotes: "Crisp, slightly bitter with malty sweetness",
      description:
        "Red Signal Beer is a bold premium brew crafted for those who dare to stand out. With a deep golden hue and smooth finish, it offers a perfect blend of rich malt tones and refreshing hops. The balanced carbonation makes each sip crisp and satisfying. Ideal for relaxed evenings, parties, and weekend celebrations. Best served chilled with grilled snacks or spicy bites.",
      tastingNotes: "Bold malt, roasted notes, citrus hops, crisp finish",
      foodPairing: "Wings, kebabs, burgers, nachos, cheese fries",
      detailRoute: "/collections/red-signal-beers",
    },
    {
      id: 2,
      name: "BLACK & BLACK WHISKY",
      brand: "Black & Black Whisky",
      type: "Whisky",
      volume: "750 ml",
      price: 15.99,
      rating: 4.5,
      reviews: 64,
      image: "/bluKings/p1.png",
      alcohol: "42.8%",
      vintage: "2021",
      origin: "India",
      tasteNotes: "Smoky, woody with smooth caramel warmth",
      description:
        "Black & Black Whisky is crafted for those who appreciate true depth in every sip. Distilled with precision and aged in seasoned oak barrels, it delivers bold smoky notes layered with subtle sweetness. A smooth, refined finish leaves a lingering warmth, making it perfect for slow sipping. Whether neat, on the rocks, or with a splash of water, it elevates every occasion with its rich aroma and signature smoothness.",
      tastingNotes: "Oak smoke, caramel, cocoa, warm spice",
      foodPairing: "Smoked chicken, kebabs, dark chocolate, peanuts",
      detailRoute: "/collections/black-and-black-whisky",
    },
    {
      id: 3,
      name: "BLU KINGS WHISKY",
      brand: "Blu Kings Whisky",
      type: "Whisky",
      volume: "750 ml",
      price: 15.99,
      rating: 4.5,
      reviews: 64,
      image: "/bluKings/p8.png",
      alcohol: "42.8%",
      vintage: "2021",
      origin: "India",
      tasteNotes: "Juicy caramel, vanilla, light spice finish",
      description:
        "Blu Kings Whisky is a luxurious blend designed for those with a royal taste. Smooth, creamy, and aromatic, it offers delightful caramel and vanilla tones balanced with a gentle spice finish. Aged in premium oak barrels, its flavor blooms beautifully on the palate. Perfect for celebrations, classy evenings, or relaxing nights. Enjoy neat, chilled, or with ginger ale.",
      tastingNotes: "Honey, vanilla, smooth oak, light spice",
      foodPairing: "Cheese platter, peanuts, butter chicken, dry fruits",
      detailRoute: "/collections/blu-kings-whisky",
    },
    {
      id: 4,
      name: "OLD & GOLD Whisky",
      brand: "Old & Gold Whisky",
      type: "Whisky",
      volume: "750 ml",
      price: 16.99,
      rating: 4.6,
      reviews: 72,
      image: "/bluKings/p4.png",
      alcohol: "42.8%",
      vintage: "2021",
      origin: "India",
      tasteNotes: "Warm oak, honey, toasted vanilla",
      description:
        "Old & Gold Whisky is a timeless classic with a rich heritage. Crafted with tradition and aged patiently, it embodies elegance in every drop. The warm oak character blends harmoniously with gentle honey sweetness and toasted vanilla notes. Perfect for mature palates and grand gatherings. Experience refined sophistication, sip after sip.",
      tastingNotes: "Caramel, dried fruits, soft smoke, warm oak",
      foodPairing: "Paneer tikka, roasted cashews, grilled fish",
      detailRoute: "/collections/old-and-gold-whisky",
    },
    {
      id: 5,
      name: "BLU KINGS VODKA",
      brand: "Blu Kings Vodka",
      type: "Vodka",
      volume: "750 ml",
      price: 14.99,
      rating: 4.4,
      reviews: 55,
      image: "/bluKings/p6.png",
      alcohol: "40%",
      vintage: "2021",
      origin: "India",
      tasteNotes: "Clean, crisp, ultra-smooth finish",
      description:
        "Blu Kings Vodka brings purity and elegance together. Triple-distilled and charcoal-filtered, it delivers an exceptionally smooth and crisp experience. Perfect for cocktails, shots, and fine sipping. Its clean taste blends effortlessly with mixers, making it an ideal party favorite. Chill before serving for the smoothest taste.",
      tastingNotes: "Clean grain, smooth texture, light citrus",
      foodPairing: "Peri-peri fries, cheese sticks, olives, seafood",
      detailRoute: "/collections/blukings-vodka",
    },
  ];
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const currentProduct = products[selectedProduct];

  return (
    <div>
      {/* Hero Banner */}
      <div className="relative min-h-[70vh] sm:min-h-[80vh] lg:min-h-[90vh] overflow-hidden bg-black">
        <div className="absolute inset-0">
          <img 
            src="/bluKings/LiquorStore-banner1.jpg" 
            alt="Hops and beer" 
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-black/10 to-black/20"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 h-full min-h-[70vh] sm:min-h-[80vh] lg:min-h-[90vh] flex items-center py-12 sm:py-16 lg:py-20">
          <div className="max-w-3xl w-full">
            <div className="inline-flex items-center gap-2 bg-amber-400/10 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full mb-4 sm:mb-6 border border-amber-400/20">
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-amber-400 rounded-full animate-pulse"></div>
              <p className="text-amber-400 text-[10px] sm:text-xs tracking-widest font-bold uppercase">
                Brewed with Simple Ingredients
              </p>
            </div>
            
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight tracking-tight">
              Discover <span className="font-serif italic font-light">Fine Spirits</span><br />
              Crafted for Those Who<br />
              <span className="font-serif italic font-light">Appreciate Perfection</span>
            </h1>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Link to='/about'>
                <button className="group bg-[#040472] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold text-xs sm:text-sm transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-105 active:scale-95 flex items-center justify-center gap-2">
                  About Our Brand
                  <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
              
              <Link to='/contact'>
                <button className="group border-2 border-white/30 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold text-xs sm:text-sm transition-all duration-300 hover:bg-white/10 hover:border-white/50 flex items-center justify-center gap-2">
                  Get In Touch
                  <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Product Section */}
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-6 sm:py-8 lg:py-12">
        <style>{`
          @keyframes marquee {
            0% { transform: translateY(0); }
            100% { transform: translateY(-50%); }
          }
          .animate-marquee {
            animation: marquee 25s linear infinite;
          }
          .paused {
            animation-play-state: paused;
          }
        `}</style>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-4 sm:gap-6 lg:gap-8">
            {/* Product Details */}
            <div className="lg:col-span-9 bg-white p-4 sm:p-6 lg:p-8 rounded-xl sm:rounded-2xl shadow-lg border border-gray-200">
              <div className="grid md:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
                {/* Product Image */}
                <div className="flex flex-col items-center">
                  <div className="relative  p-4 sm:p-6 lg:p-8  w-full min-h-[350px] sm:min-h-[500px] lg:min-h-[800px] flex items-center justify-center">
                    <img 
                      src={currentProduct.image} 
                      alt={currentProduct.name} 
                      className="h-[800px] w-full object-contain transform  transition-transform duration-500" 
                    />
                  </div>
                  
                  {/* Product Specs */}
                  <div className="grid grid-cols-3 gap-1 sm:gap-2 lg:gap-3 mt-2 sm:mt-4 lg:mt-6 w-full">
                    <div className="text-center p-1.5 sm:p-2 lg:p-3 bg-gray-50 rounded-lg sm:rounded-xl border border-gray-200">
                      <div className="text-base sm:text-lg lg:text-xl font-bold text-[#404075]">{currentProduct.alcohol}</div>
                      <div className="text-[9px] sm:text-[10px] text-gray-500 mt-0.5 sm:mt-1">Alcohol</div>
                    </div>
                    <div className="text-center p-1.5 sm:p-2 lg:p-3 bg-gray-50 rounded-lg sm:rounded-xl border border-gray-200">
                      <div className="text-base sm:text-lg lg:text-xl font-bold text-[#404075]">{currentProduct.volume}</div>
                      <div className="text-[9px] sm:text-[10px] text-gray-500 mt-0.5 sm:mt-1">Volume</div>
                    </div>
                    <div className="text-center p-1.5 sm:p-2 lg:p-3 bg-gray-50 rounded-lg sm:rounded-xl border border-gray-200">
                      <div className="text-base sm:text-lg lg:text-xl font-bold text-[#404075]">{currentProduct.vintage}</div>
                      <div className="text-[9px] sm:text-[10px] text-gray-500 mt-0.5 sm:mt-1">Vintage</div>
                    </div>
                  </div>
                </div>

                {/* Product Info */}
                <div className="space-y-4 sm:space-y-6 lg:space-y-8">
                  {/* Header */}
                  <div>
                    <div className="flex items-center gap-1 sm:gap-2 mb-3 sm:mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={14}
                          className="sm:w-[18px] sm:h-[18px]"
                          fill={i < Math.floor(currentProduct.rating) ? "#FFB800" : "none"}
                          stroke="#FFB800"
                        />
                      ))}
                      <span className="text-xs sm:text-sm text-gray-600 ml-1 sm:ml-2">
                        {currentProduct.rating} ({currentProduct.reviews} reviews)
                      </span>
                    </div>

                    <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#404075] font-serif leading-tight">
                      {currentProduct.name}
                    </h1>
                    
                    <div className="flex items-center gap-3 sm:gap-4 mt-3 sm:mt-4">
                      <span className="text-2xl sm:text-3xl font-bold text-gray-900">₹{currentProduct.price}</span>
                      {currentProduct.originalPrice && (
                        <span className="text-base sm:text-lg text-gray-500 line-through">₹{currentProduct.originalPrice}</span>
                      )}
                    </div>
                  </div>

                  {/* Description */}
                  <div className="prose prose-gray">
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed border-l-4 border-amber-400 pl-3 sm:pl-4 py-1">
                      {currentProduct.description}
                    </p>
                  </div>

                  {/* Features */}
                  <div className="space-y-3 sm:space-y-4 lg:space-y-6">
                    <div className="bg-amber-50 p-3 sm:p-4 rounded-lg sm:rounded-xl border border-amber-200">
                      <h3 className="font-semibold text-sm sm:text-base text-gray-900 mb-1.5 sm:mb-2 flex items-center gap-2">
                        <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-amber-400 rounded-full"></div>
                        Tasting Notes
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-700">{currentProduct.tasteNotes}</p>
                    </div>

                    <div className="bg-blue-50 p-3 sm:p-4 rounded-lg sm:rounded-xl border border-blue-200">
                      <h3 className="font-semibold text-sm sm:text-base text-gray-900 mb-1.5 sm:mb-2 flex items-center gap-2">
                        <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-400 rounded-full"></div>
                        Food Pairing
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-700">{currentProduct.foodPairing}</p>
                    </div>

                    <div className="bg-green-50 p-3 sm:p-4 rounded-lg sm:rounded-xl border border-green-200">
                      <h3 className="font-semibold text-sm sm:text-base text-gray-900 mb-1.5 sm:mb-2 flex items-center gap-2">
                        <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-400 rounded-full"></div>
                        Origin & Vintage
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-700">{currentProduct.origin} • {currentProduct.vintage}</p>
                    </div>
                  </div>

                  {/* View More Button */}
                  <div className="pt-2 sm:pt-4">
                    <Link to={currentProduct.detailRoute}>
                      <button className="w-full bg-gray-900 text-white py-3 sm:py-4 px-4 sm:px-6 rounded-lg sm:rounded-xl font-semibold text-sm sm:text-base shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2">
                        View More Details
                        <ChevronRight size={18} />
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Marquee Sidebar */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg p-4 sm:p-6 lg:sticky lg:top-6">
                <h2 className="font-bold text-lg sm:text-xl mb-4 sm:mb-6 text-gray-900 border-b border-gray-200 pb-2 sm:pb-3">
                  You Might Also Like
                </h2>

                <div className="overflow-hidden relative h-[400px] sm:h-[500px] lg:h-[700px] rounded-lg sm:rounded-xl">
                  <div className={`absolute space-y-3 sm:space-y-4 animate-marquee ${hoveredCard !== null ? 'paused' : ''}`}>
                    {products.concat(products).map((p, i) => (
                      <div
                        key={i}
                        onClick={() => setSelectedProduct(i % products.length)}
                        onMouseEnter={() => setHoveredCard(i)}
                        onMouseLeave={() => setHoveredCard(null)}
                        className={`group flex gap-3 sm:gap-4 p-3 sm:p-4 rounded-lg sm:rounded-xl cursor-pointer transition-all duration-300 backdrop-blur-sm ${
                          selectedProduct === i % products.length
                            ? "bg-gradient-to-r from-blue-50 to-indigo-50 shadow-lg transform scale-105"
                            : "bg-white/80 shadow-md hover:shadow-lg hover:scale-105"
                        }`}
                      >
                        <div className="relative flex-shrink-0">
                          <img 
                            src={p.image} 
                            className="w-12 h-16 sm:w-16 sm:h-20 object-contain bg-white transition-shadow" 
                          />
                          {selectedProduct === i % products.length && (
                            <div className="absolute -top-1 -right-1 w-2.5 h-2.5 sm:w-3 sm:h-3 bg-blue-500 rounded-full"></div>
                          )}
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="font-semibold text-gray-900 text-xs sm:text-sm truncate">{p.name}</p>
                          <p className="text-[10px] sm:text-xs text-gray-500 mb-1.5 sm:mb-2">{p.volume}</p>
                          <div className="flex items-center justify-between">
                            <p className="text-base sm:text-lg font-bold text-gray-900">₹{p.price}</p>
                            <div className="flex items-center gap-1">
                              <Star size={10} className="sm:w-3 sm:h-3" fill="#FFB800" stroke="#FFB800" />
                              <span className="text-[10px] sm:text-xs text-gray-600">{p.rating}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  {/* Gradient overlay */}
                  <div className="absolute bottom-0 left-0 right-0 h-16 sm:h-20 bg-gradient-to-t from-white to-transparent pointer-events-none"></div>
                  <div className="absolute top-0 left-0 right-0 h-16 sm:h-20 bg-gradient-to-b from-white to-transparent pointer-events-none"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiquorStore;