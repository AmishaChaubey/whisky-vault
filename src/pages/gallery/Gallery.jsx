import React, { useState, useEffect } from "react";
import { X } from "lucide-react";

const WhiskyGallery = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const categories = [
    {
      id: 1,
      title: "Premium Whisky Collection",
      coverImage: "https://images.unsplash.com/photo-1569529465841-dfecdab7503b?w=800&h=600&fit=crop",
      images: [
        "https://images.unsplash.com/photo-1569529465841-dfecdab7503b?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1527281400683-1aae777175f8?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1584916201218-f4242ceb4809?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1618885472179-5e474019f2a9?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1582818333098-07551a5c0ba4?w=800&h=600&fit=crop",
      ],
    },
    {
      id: 2,
      title: "Single Malt Excellence",
      coverImage: "https://images.unsplash.com/photo-1543007630-9710e4a00a20?w=800&h=600&fit=crop",
      images: [
        "https://images.unsplash.com/photo-1543007630-9710e4a00a20?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1481437642641-2f0ae875f836?w=800&h=600&fit=crop",
      ],
    },
    {
      id: 3,
      title: "Barrel Aged Classics",
      coverImage: "https://images.unsplash.com/photo-1563993297290-609c9406efcd?w=800&h=600&fit=crop",
      images: [
        "https://images.unsplash.com/photo-1563993297290-609c9406efcd?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1509420316987-d27b02f81864?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1528823872057-9c018a7a7553?w=800&h=600&fit=crop",
      ],
    },
    {
      id: 4,
      title: "Cocktail Creations",
      coverImage: "https://images.unsplash.com/photo-1536935338788-846bb9981813?w=800&h=600&fit=crop",
      images: [
        "https://images.unsplash.com/photo-1536935338788-846bb9981813?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1560508396-a9b82df92e86?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1551538827-9c037cb4f32a?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=800&h=600&fit=crop",
      ],
    },
    {
      id: 5,
      title: "Luxury Lounge Experience",
      coverImage: "https://images.unsplash.com/photo-1572116469696-31de0f17cc34?w=800&h=600&fit=crop",
      images: [
        "https://images.unsplash.com/photo-1572116469696-31de0f17cc34?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1574096079513-d8259312b785?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1575444758702-4a6b9222336e?w=800&h=600&fit=crop",
      ],
    },
  ];

  useEffect(() => window.scrollTo(0, 0), []);

  return (
    <div className="min-h-screen bg-white text-[#040472]">
      <style>{`
        @keyframes zoom {
          0% { transform: scale(1); }
          50% { transform: scale(1.06); }
          100% { transform: scale(1); }
        }

        .animate-zoom {
          animation: zoom 12s infinite ease-in-out;
        }

        @keyframes shimmer {
          0% {
            left: -100%;
          }
          100% {
            left: 100%;
          }
        }

        .shimmer-container {
          position: relative;
          overflow: hidden;
        }

        .shimmer-container:hover::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 50%;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.3),
            transparent
          );
          animation: shimmer 1.2s ease-out;
          pointer-events: none;
          z-index: 10;
          transform: skewX(-20deg);
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }

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

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }

        .stagger-1 { animation-delay: 0.1s; }
        .stagger-2 { animation-delay: 0.2s; }
        .stagger-3 { animation-delay: 0.3s; }
        .stagger-4 { animation-delay: 0.4s; }
        .stagger-5 { animation-delay: 0.5s; }
      `}</style>

      {/* Banner */}
      <section className="relative h-[90vh] sm:h-[90vh] overflow-hidden">
        <img
          src="https://i.pinimg.com/736x/68/88/c8/6888c84df6923e2d85281b11b36d3a74.jpg"
          alt="Whisky Banner"
          className="absolute inset-0 w-full h-full object-cover animate-zoom"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/70 to-black/90"></div>

        {/* Decorative Elements */}
        <div className="absolute top-20 right-20 w-64 h-64 bg-[#040472]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 left-20 w-96 h-96 bg-[#ef4444]/10 rounded-full blur-3xl"></div>

        {/* Content - Left Aligned */}
        <div className="relative h-full flex items-center px-8 sm:px-16 lg:px-32 max-w-7xl">
          <div className="text-left" style={{ marginTop: '-40px' }}>
            <h1 className="text-7xl sm:text-8xl font-bold mb-4 text-white tracking-tight font-serif fade-in-up" style={{ fontWeight: 700, textShadow: '0 4px 20px rgba(0,0,0,0.5)' }}>
             Gallery
            </h1>
            <div className="w-20 mb-6 fade-in-up stagger-1" style={{ height: '4px', background: 'linear-gradient(90deg, #ef4444, #dc2626)' }}></div>
            <p className="text-white text-xl leading-relaxed font-serif max-w-md fade-in-up stagger-2" style={{ fontSize: '15px', opacity: 0.95, lineHeight: '1.9', textShadow: '0 2px 10px rgba(0,0,0,0.5)' }}>
              A Visual Journey Through Craft and Legacy<br className="hidden sm:block" />
              Moments Captured in the Spirit of Perfection<br className="hidden sm:block" />
              Craft, Heritage, and Passion — Framed in Every Image.
            </p>
          </div>
        </div>
   
      </section>

      {/* Categories with 3D Folder Effect */}
      <main className="max-w-7xl mx-auto px-6 py-10">
        <div className="text-center mb-16">
          <h2 className="text-6xl font-bold text-[#040472] mb-4 font-serif">Explore Our Collections</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#ef4444] to-[#dc2626] mx-auto mb-4"></div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto font-mono">Discover curated selections from our finest collections</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14">
          {categories.map((category, idx) => (
            <div
              key={category.id}
              className={`cursor-pointer transform transition-all duration-700 hover:-translate-y-3 hover:scale-105 fade-in-up stagger-${idx + 1}`}
              onClick={() => setSelectedCategory(category.id)}
            >
              {/* Folder Stack Effect - Enhanced Glassmorphism */}
              <div className="relative">
                {/* Back Layer 3 - Most Back */}
                <div 
                  className="absolute -bottom-4 left-6 right-6 h-full rounded-xl shadow-lg border border-white/20 transition-all duration-500"
                  style={{ 
                    zIndex: 1,
                    background: 'rgba(4, 4, 114, 0.25)',
                    backdropFilter: 'blur(10px)',
                    WebkitBackdropFilter: 'blur(10px)'
                  }}
                ></div>
                
                {/* Back Layer 2 - Middle */}
                <div 
                  className="absolute -bottom-2 left-3 right-3 h-full rounded-xl shadow-xl border border-white/30 transition-all duration-500"
                  style={{ 
                    zIndex: 2,
                    background: 'rgba(5, 5, 160, 0.35)',
                    backdropFilter: 'blur(12px)',
                    WebkitBackdropFilter: 'blur(12px)'
                  }}
                ></div>
                
                {/* Main Card - Front */}
                <div className="relative rounded-xl overflow-hidden shadow-2xl bg-white border-2 border-white/50 shimmer-container transition-all duration-500 hover:shadow-[0_20px_60px_rgba(4,4,114,0.3)]" style={{ zIndex: 3 }}>
                  <div className="relative aspect-[6/7] overflow-hidden group">
                    <img
                      src={category.coverImage}
                      alt={category.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
                    
                    {/* Hover Overlay */}
                    {/* <div className="absolute inset-0 bg-[#040472]/0 group-hover:bg-[#040472]/20 transition-all duration-500"></div> */}
                    
                    <div className="absolute bottom-0 left-0 right-0 p-6 transform transition-transform duration-500 group-hover:translate-y-[-4px]">
                      <h3 className="text-2xl font-bold text-white drop-shadow-2xl mb-2 font-serif">
                        {category.title}
                      </h3>
                      <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <div className="w-8 h-0.5 bg-[#ef4444]"></div>
                        <p className="text-white text-sm font-medium">Click to explore →</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Badge */}
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-[#040472] px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                    {category.images.length} Photos
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Modal */}
      {selectedCategory && (
        <div className="fixed inset-0 bg-black/95 backdrop-blur-sm z-50 overflow-y-auto animate-fade-in">
          <div className="min-h-screen px-6 py-12">
            <div className="max-w-7xl mx-auto">
              <div className="flex justify-between items-center mb-12">
                <div>
                  <h2 className="text-5xl font-bold text-white mb-2 font-serif">
                    {categories.find((c) => c.id === selectedCategory)?.title}
                  </h2>
                  <div className="w-16 h-1 bg-gradient-to-r from-[#ef4444] to-[#dc2626]"></div>
                </div>
                <button
                  onClick={() => setSelectedCategory(null)}
                  className="bg-gradient-to-r from-[#040472] to-[#060aa0] hover:from-[#060aa0] hover:to-[#040472] text-white p-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-[0_0_30px_rgba(4,4,114,0.5)] hover:scale-110"
                >
                  <X size={28} />
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {categories
                  .find((c) => c.id === selectedCategory)
                  ?.images.map((img, i) => (
                    <div key={i} className="overflow-hidden rounded-xl shadow-2xl group relative border-2 border-white/10 hover:border-white/30 transition-all duration-500">
                      <img
                        src={img}
                        alt="Whisky Image"
                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#040472]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      <div className="absolute bottom-4 left-4 right-4 text-white transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                        <p className="text-sm font-semibold">Image {i + 1}</p>
                      </div>
                    </div>
                  ))}
              </div>

              <div className="text-center mt-12">
                <button
                  onClick={() => setSelectedCategory(null)}
                  className="bg-gradient-to-r from-[#040472] to-[#060aa0] hover:from-[#060aa0] hover:to-[#040472] text-white px-10 py-4 rounded-xl text-lg font-semibold transition-all duration-300 shadow-xl hover:shadow-[0_10px_40px_rgba(4,4,114,0.4)] hover:scale-105"
                >
                  ← Back to Gallery
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default WhiskyGallery;