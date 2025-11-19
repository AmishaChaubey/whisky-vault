import React, { useState , useEffect} from 'react';
import { Wine, Droplets, Award, Clock, MapPin } from 'lucide-react';

const LiquorStore = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const collection = [
    { 
      name: 'Black & Black Whisky', 
      category: 'Whisky', 
      region: 'India',
      year: '2025',
      rating: 4.8,
      price: '$299',
      image: 'bluKings/p1.png'
    },
    { 
      name: 'Blu Kings Scotch Whisky', 
      category: 'Scotch Whisky', 
      region: 'India',
      year: '2021',
      rating: 4.9,
      price: '$850',
      image: 'bluKings/p8.png'
    },
  ];

   useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans relative">
      <div className="absolute inset-0 opacity-5">
        <div className="h-full w-full" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23040472' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }}></div>
      </div>
      
      {/* Header Banner */}
      <div className="relative mb-0 overflow-hidden h-[300px] xs:h-[350px] sm:h-[400px] md:h-[500px] lg:h-[600px]">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: 'url(https://images.pexels.com/photos/301692/pexels-photo-301692.jpeg)',
          }}
        ></div>
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative h-full flex items-center px-3 xs:px-4 sm:px-8 md:px-16 lg:px-12 max-w-7xl mx-auto">
          <div className="text-left -mt-8 xs:-mt-10 sm:-mt-16">
            <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-2 xs:mb-3 text-white tracking-tight font-serif">
              About Us
            </h1>
            <div className="w-10 xs:w-12 sm:w-16 mb-3 xs:mb-4 h-[3px] bg-red-500"></div>
            <p className="text-white text-[10px] xs:text-xs sm:text-sm md:text-base leading-relaxed max-w-lg">
              Since 2021 we have been contsantly blending up to perfection<br className="hidden xs:block" />
              Our Blu Kings offerings come to you from the roots of nature<br className="hidden xs:block" />
              Pure , prestine and blended to perfection to give you memorizable Taste
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto py-8 xs:py-10 sm:py-15 px-3 xs:px-4 sm:px-6 lg:px-8 relative">
       
        {/* Tabs */}
        <div className="flex flex-wrap gap-2 xs:gap-3 sm:gap-4 mb-6 xs:mb-8 border-b border-gray-500 justify-center sm:justify-start">
          {['overview', 'collection', 'heritage'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-2 xs:px-3 sm:px-4 py-1.5 xs:py-2 font-serif text-xs xs:text-sm transition-all ${
                activeTab === tab ? 'border-b-2' : 'hover:text-gray-500'
              }`}
              style={{
                color: activeTab === tab ? '#040472' : '#6b7280',
                borderBottomColor: activeTab === tab ? '#040472' : 'transparent'
              }}
            >
              {tab.replace('-', ' ').toUpperCase()}
            </button>
          ))}
        </div>

        {/* Main Content */}
        <div className="bg-white shadow-xl rounded-xl xs:rounded-2xl p-3 xs:p-4 sm:p-6 md:p-10 border-2 border-gray-100 flex flex-col md:flex-row gap-4 xs:gap-6 md:gap-12">
          
          {/* Left Side - Text Content */}
          <div className="flex-1 order-1">
            {activeTab === 'overview' && (
              <div className="space-y-4 xs:space-y-6 sm:space-y-8">
                <div>
                  <h2 className="text-xl xs:text-2xl sm:text-3xl font-bold mb-3 xs:mb-4 sm:mb-6 font-serif flex items-center gap-2 xs:gap-2 sm:gap-3 text-[#040472]">
                    <Wine size={20} className="xs:!w-6 xs:!h-6 sm:!w-8 sm:!h-8" />
                    A Legacy of Excellence
                  </h2>
                  <div className="space-y-2 xs:space-y-3 sm:space-y-4 text-xs xs:text-sm sm:text-base md:text-lg">
                    <p className="text-gray-700 leading-relaxed border-l-4 pl-2 xs:pl-3 sm:pl-4" style={{ borderColor: '#040472' }}>
                      Blu Kings is mainly producing and selling Scotch, Whisky, Vodka, Rum, Brandy, Tequila, Wine & Gin. The Winey is Located in Green land of J&K Which is very Suitable for bottling Liquor Due to high Water Quality .
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      Blu Kings is our own brand, OEM & ODM are available At present, the company has formed a domestic marke and exportation as its core business mode. We have passed FSSAI & ISO & OS Certified. 
                    </p>
                  </div>
                </div>

                {/* Expertly Sourced & Award Winning Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 xs:gap-4 mt-4 xs:mt-6">
                  <div className="bg-white rounded-lg xs:rounded-xl p-3 xs:p-4 sm:p-6 border-2 border-gray-200 hover:shadow-xl transition-all hover:scale-105" style={{ borderTopColor: '#040472', borderTopWidth: '4px' }}>
                    <Droplets className="mb-2 xs:mb-2 sm:mb-3" size={20} style={{ color: '#040472' }} />
                    <h3 className="font-bold text-sm xs:text-base sm:text-lg mb-1 xs:mb-1 sm:mb-2" style={{ color: '#040472' }}>Expertly Sourced</h3>
                    <p className="text-[10px] xs:text-xs sm:text-sm text-gray-600 leading-relaxed">We Mainly Based on long-term business and Friendly with Clients</p>
                  </div>

                  <div className="bg-white rounded-lg xs:rounded-xl p-3 xs:p-4 sm:p-6 border-2 border-gray-200 hover:shadow-xl transition-all hover:scale-105" style={{ borderTopColor: '#040472', borderTopWidth: '4px' }}>
                    <Award className="mb-2 xs:mb-2 sm:mb-3" size={20} style={{ color: '#040472' }} />
                    <h3 className="font-bold text-sm xs:text-base sm:text-lg mb-1 xs:mb-1 sm:mb-2" style={{ color: '#040472' }}>Globally Benchmarks</h3>
                    <p className="text-[10px] xs:text-xs sm:text-sm text-gray-600 leading-relaxed">Exported Our Products to many Foreign Countries and Gained good Repu</p>
                  </div>
                </div>

                <div className="rounded-lg xs:rounded-xl p-3 xs:p-4 sm:p-6 mt-4 xs:mt-6 sm:mt-8" style={{ backgroundColor: '#040472' }}>
                  <p className="text-white text-center text-xs xs:text-sm sm:text-lg font-serif italic">
                    "Where tradition meets excellence in every bottle"
                  </p>
                </div>
              </div>
            )}

            {/* Collection Tab */}
            {activeTab === 'collection' && (
              <div className="space-y-4 xs:space-y-6 sm:space-y-8">
                {collection.map((item, i) => (
                  <div 
                    key={i} 
                    className="relative bg-white p-3 xs:p-4 sm:p-6 transition-all duration-300 hover:shadow-xl group rounded-lg xs:rounded-xl border-2 border-gray-200"
                  >
                    <div className="absolute top-0 left-3 xs:left-4 sm:left-6 transform -translate-y-1/2 bg-white px-2 xs:px-2 sm:px-3">
                      <span className="text-[10px] xs:text-xs sm:text-sm font-serif tracking-widest" style={{ color: '#040472' }}>
                        VINTAGE {item.year}
                      </span>
                    </div>
                    
                    <div className="flex flex-col md:flex-row gap-3 xs:gap-4 sm:gap-6">
                      <div className="md:w-1/3 flex items-center justify-center p-3 xs:p-4 sm:p-6 bg-gradient-to-br from-gray-50 to-white rounded-lg xs:rounded-xl">
                        <div className="relative w-full h-32 xs:h-40 sm:h-48 flex items-center justify-center">
                          <img 
                            src={item.image} 
                            alt={item.name}
                            className="w-full h-full object-contain rounded-lg"
                          />
                        </div>
                      </div>
                      
                      <div className="flex-1 flex flex-col justify-between">
                        <div>
                          <div className="mb-2 xs:mb-3">
                            <p className="text-[9px] xs:text-xs sm:text-sm uppercase tracking-widest text-gray-400 mb-1 font-semibold">{item.category}</p>
                            <h3 className="text-base xs:text-lg sm:text-2xl font-serif mb-1 xs:mb-1 sm:mb-2" style={{ color: '#040472' }}>{item.name}</h3>
                            <div className="w-10 xs:w-12 h-px" style={{ backgroundColor: '#040472' }}></div>
                          </div>
                          
                          <div className="grid grid-cols-3 gap-2 xs:gap-2 sm:gap-4 mb-3 xs:mb-4">
                            <div className="text-center p-2 xs:p-2 sm:p-3 border border-gray-200 rounded">
                              <MapPin size={16} style={{ color: '#040472' }} className="xs:!w-4 xs:!h-4 sm:!w-5 sm:!h-5 mx-auto mb-1" />
                              <p className="text-[9px] xs:text-[10px] sm:text-xs text-gray-400 uppercase tracking-wide mb-0.5 xs:mb-1">Origin</p>
                              <p className="font-serif text-[11px] xs:text-xs sm:text-sm font-semibold" style={{ color: '#040472' }}>{item.region}</p>
                            </div>
                            <div className="text-center p-2 xs:p-2 sm:p-3 border border-gray-200 rounded">
                              <Clock size={16} style={{ color: '#040472' }} className="xs:!w-4 xs:!h-4 sm:!w-5 sm:!h-5 mx-auto mb-1" />
                              <p className="text-[9px] xs:text-[10px] sm:text-xs text-gray-400 uppercase tracking-wide mb-0.5 xs:mb-1">Vintage</p>
                              <p className="font-serif text-[11px] xs:text-xs sm:text-sm font-semibold" style={{ color: '#040472' }}>{item.year}</p>
                            </div>
                            <div className="text-center p-2 xs:p-2 sm:p-3 border border-gray-200 rounded">
                              <Award size={16} style={{ color: '#040472' }} className="xs:!w-4 xs:!h-4 sm:!w-5 sm:!h-5 mx-auto mb-1" />
                              <p className="text-[9px] xs:text-[10px] sm:text-xs text-gray-400 uppercase tracking-wide mb-0.5 xs:mb-1">Rating</p>
                              <p className="font-serif text-[11px] xs:text-xs sm:text-sm font-semibold" style={{ color: '#040472' }}>{item.rating}/5.0</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Heritage Tab */}
            {activeTab === 'heritage' && (
              <div className="space-y-4 xs:space-y-6 sm:space-y-8">
                <h2 className="text-xl xs:text-2xl sm:text-3xl font-bold font-serif mb-3 xs:mb-4 sm:mb-6 text-[#040472]">Our Heritage</h2>
                <div className="rounded-xl xs:rounded-2xl p-3 xs:p-4 sm:p-8 shadow-lg" style={{ backgroundColor: '#040472' }}>
                  <p className="text-xs xs:text-sm sm:text-xl text-white italic leading-relaxed text-center font-serif">
                    "To celebrate the art of distillation and viticulture, bringing the world's finest spirits and wines to connoisseurs who appreciate true craftsmanship."
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Right Side Image - Shows After Text on Mobile */}
          <div className="w-full md:w-2/5 order-2 flex justify-center items-center mt-4 xs:mt-6 md:mt-0">
            {activeTab === 'overview' && (
              <img 
                src="bluKings/about-img.jpeg" 
                alt="Wine and Whisky Collection" 
                className="w-full max-h-[250px] xs:max-h-[300px] sm:max-h-[350px] md:max-h-[400px] lg:max-h-[450px] object-cover rounded-xl xs:rounded-2xl shadow-2xl"
              />
            )}
            {activeTab === 'collection' && (
              <img 
                src="https://i.pinimg.com/1200x/eb/7b/3e/eb7b3e2afac11129499531d12622569d.jpg" 
                alt="Premium Whisky Bottles" 
                className="w-full max-h-[250px] xs:max-h-[300px] sm:max-h-[350px] md:max-h-[400px] lg:max-h-[450px] object-cover rounded-xl xs:rounded-2xl shadow-2xl"
              />
            )}
            {activeTab === 'heritage' && (
              <img 
                src="https://i.pinimg.com/1200x/6a/09/5a/6a095ac2b2421a9f327ee8f6c490ecc9.jpg" 
                alt="Oak Barrels Aging" 
                className="w-full max-h-[250px] xs:max-h-[300px] sm:max-h-[350px] md:max-h-[400px] lg:max-h-[450px] object-cover rounded-xl xs:rounded-2xl shadow-2xl"
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiquorStore;