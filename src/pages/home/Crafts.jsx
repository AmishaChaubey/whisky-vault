import { Droplets, Flame, Clock, Award, ChevronRight, Play, Pause, Sparkles } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

export default function WhiskyCraftWebsite() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

const craftSteps = [
  {
    icon: Droplets,
    title: 'Pure Water Source',
    description:
      'We begin with crystal-clear water sourced from natural underground springs, ensuring purity in every drop.',
    details:
      "Blu Kings Distillers uses mineral-balanced water that enhances fermentation and refines the spirit’s smooth texture. Each source is rigorously tested for quality and consistency.",
    years: 'Naturally Filtered',
    heritage: 'Origin Purity',
    image: 'https://i.pinimg.com/1200x/21/c6/91/21c69189fcec6a9139f6a7978afc17b7.jpg', // Clear natural spring water
  },
  {
    icon: Flame,
    title: 'Copper Distillation',
    description:
      'Our spirits are slowly distilled in hand-crafted copper stills, preserving aroma and depth.',
    details:
      'Every batch undergoes precision temperature control during distillation to capture only the purest heart cut. This ensures an unmatched clarity and rich flavor profile in every spirit.',
    years: 'Double Distilled',
    heritage: 'Copper Pot Still',
    image: 'https://i.pinimg.com/736x/6c/23/e8/6c23e8206e9176cab56e94afb0db10db.jpg', // Copper distillation stills
  },
  {
    icon: Clock,
    title: 'Barrel Aging',
    description:
      'Our premium spirits rest in seasoned oak barrels to develop complex layers of flavor and aroma.',
    details:
      'The tropical climate enhances the aging process, allowing natural interactions between wood and spirit to create a smooth, well-rounded character unique to Blu Kings.',
    years: 'Aged to Perfection',
    heritage: 'Oak Barrel Craft',
    image: 'https://i.pinimg.com/736x/a7/d0/5a/a7d05a2b8841b771a0d12f561f9a3540.jpg', // Oak barrels aging warehouse
  },
  {
    icon: Award,
    title: 'Crafted Excellence',
    description:
      'Each bottle of Blu Kings reflects our commitment to precision, innovation, and timeless craftsmanship.',
    details:
      'From blending to bottling, our expert team maintains the highest standards, ensuring every sip represents the true spirit of Blu Kings Distillers — bold, refined, and authentic.',
    years: 'Excellence Since Inception',
    heritage: 'Handcrafted Perfection',
    image: 'https://i.pinimg.com/736x/26/29/cd/2629cdeb0895a41d4d78ad1aa0ccaeff.jpg', // Award-winning presentation
  },
];


  const nextStep = () => setActiveIndex((prev) => (prev + 1) % craftSteps.length);
  const prevStep = () => setActiveIndex((prev) => (prev - 1 + craftSteps.length) % craftSteps.length);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setIsVisible(true),
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(nextStep, 5000);
    return () => clearInterval(interval);
  }, [isPlaying]);

  return (
    <div className="min-h-screen overflow-hidden" style={{ backgroundColor: '#ffffff', color: '#001a3d' }}>
      <section ref={sectionRef} className="relative px-4 sm:px-6 py-10 md:py-16 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 md:mb-16">
            <div
              className="inline-flex items-center gap-3 px-4 sm:px-6 py-2 sm:py-3 rounded-full border mb-6 sm:mb-8 transition-all duration-1000 delay-300"
              style={{
                borderColor: '#e0e8f0',
                backgroundColor: '#f8faff',
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
              }}
            >
              <Sparkles size={16} style={{ color: '#040472' }} />
              <span className="text-xs sm:text-sm font-light tracking-widest uppercase" style={{ color: '#040472' }}>
                Since 2021 • Family Owned
              </span>
            </div>

            <h1
              className="text-4xl sm:text-5xl md:text-6xl font-light mb-3 leading-tight transition-all duration-1000 delay-500"
              style={{
                fontFamily: "'Playfair Display', serif",
                color: '#040472',
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
              }}
            >
              The Art of Perfection
            </h1>

            <p
              className="text-base sm:text-lg md:text-xl lg:text-2xl max-w-2xl mx-auto leading-relaxed font-light transition-all duration-1000 delay-700"
              style={{
                color: '#334455',
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
              }}
            >
              Eight generations of master craftsmanship, distilled into every bottle.
            </p>
          </div>

          {/* Main Content */}
          <div className="grid grid-cols-1 xl:grid-cols-12 gap-10 md:gap-16 lg:gap-20 items-start">
            {/* Left Column */}
            <div className="xl:col-span-7">
              <div
                className="transition-all duration-1000"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateX(0)' : 'translateX(-50px)',
                }}
              >
                {/* Step Info */}
                <div className="flex items-center gap-4 sm:gap-6 mb-8 sm:mb-12">
                  <div className="flex items-center gap-3 sm:gap-4">
                    <div
                      className="text-4xl sm:text-5xl md:text-6xl font-light"
                      style={{ fontFamily: "'Playfair Display', serif", color: '#667788' }}
                    >
                      {String(activeIndex + 1).padStart(2, '0')}
                    </div>
                    <div className="h-10 sm:h-12 w-px bg-gradient-to-b from-transparent via-gray-300 to-transparent"></div>
                  </div>
                  <div>
                    <div className="text-xs sm:text-sm uppercase tracking-widest font-light mb-1" style={{ color: '#667788' }}>
                      Step {activeIndex + 1} of {craftSteps.length}
                    </div>
                    <div className="text-lg sm:text-xl md:text-2xl font-medium" style={{ color: '#040472' }}>
                      {craftSteps[activeIndex].title}
                    </div>
                  </div>
                </div>

                {/* Image Card */}
                <div
                  className="rounded-xl overflow-hidden border relative group transition-all duration-700"
                  style={{
                    borderColor: '#e0e8f0',
                    boxShadow: '0 25px 70px rgba(4, 4, 114, 0.12)',
                    minHeight: '400px',
                  }}
                >
                  {craftSteps.map((step, idx) => (
                    <div
                      key={idx}
                      className="absolute inset-0 transition-all duration-1000"
                      style={{
                        backgroundImage: `url(${step.image})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        opacity: activeIndex === idx ? 1 : 0,
                        transform: activeIndex === idx ? 'scale(1.05)' : 'scale(1)',
                      }}
                    ></div>
                  ))}

                  <div className="absolute inset-0 bg-gradient-to-tr from-black/85 via-black/60 to-black/40"></div>
                  <div
                    className="absolute inset-0"
                    style={{
                      background: 'radial-gradient(circle at center, transparent 0%, rgba(0,0,0,0.4) 100%)',
                    }}
                  ></div>

                  {/* Content */}
                  <div className="relative z-10 p-4 sm:p-6 md:p-8 lg:p-10 h-full flex flex-col justify-between">
                    <div className="mb-4 sm:mb-8">
                      <div
                        className="p-3 sm:p-4 rounded-2xl inline-block border backdrop-blur-md relative overflow-hidden group"
                        style={{
                          borderColor: 'rgba(255, 255, 255, 0.3)',
                          backgroundColor: 'rgba(255, 255, 255, 0.15)',
                          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
                        }}
                      >
                        {(() => {
                          const IconComponent = craftSteps[activeIndex].icon;
                          return <IconComponent size={28} className="text-white relative z-10" />;
                        })()}
                      </div>
                    </div>

                    <div className="flex-1 flex flex-col justify-center">
                      <p
                        className="text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed mb-4 sm:mb-6 font-light text-white"
                        style={{ textShadow: '0 2px 8px rgba(0, 0, 0, 0.3)' }}
                      >
                        {craftSteps[activeIndex].description}
                      </p>

                      <p
                        className="text-sm sm:text-base leading-relaxed mb-4 sm:mb-8 text-white/90"
                        style={{ textShadow: '0 1px 4px rgba(0, 0, 0, 0.2)' }}
                      >
                        {craftSteps[activeIndex].details}
                      </p>
                    </div>

                    <div className="grid grid-cols-2 gap-4 sm:gap-6 pt-4 sm:pt-8 border-t border-white/30">
                      <div>
                        <div className="text-xs sm:text-sm uppercase tracking-widest mb-1 sm:mb-2 text-white/70">
                          Tradition
                        </div>
                        <div className="text-base sm:text-xl font-medium text-white">{craftSteps[activeIndex].years}</div>
                      </div>
                      <div>
                        <div className="text-xs sm:text-sm uppercase tracking-widest mb-1 sm:mb-2 text-white/70">
                          Heritage
                        </div>
                        <div className="text-base sm:text-xl font-medium text-white">{craftSteps[activeIndex].heritage}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="xl:col-span-5">
              <div
                className="transition-all duration-1000 delay-300"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateX(0)' : 'translateX(50px)',
                }}
              >
                {/* Controls */}
                <div className="flex flex-wrap items-center justify-between gap-4 mb-8 sm:mb-12">
                  <div className="flex items-center gap-3 sm:gap-4">
                    <button
                      onClick={prevStep}
                      className="p-3 sm:p-4 rounded-xl sm:rounded-2xl border hover:scale-110 transition-all duration-300 bg-white"
                      style={{ borderColor: '#e0e8f0' }}
                    >
                      <ChevronRight size={18} className="rotate-180 text-[#040472]" />
                    </button>

                    <button
                      onClick={() => setIsPlaying(!isPlaying)}
                      className="p-3 sm:p-4 rounded-xl sm:rounded-2xl border hover:scale-110 transition-all duration-300 bg-white"
                      style={{ borderColor: '#e0e8f0' }}
                    >
                      {isPlaying ? (
                        <Pause size={18} className="text-[#040472]" />
                      ) : (
                        <Play size={18} className="text-[#040472]" />
                      )}
                    </button>

                    <button
                      onClick={nextStep}
                      className="p-3 sm:p-4 rounded-xl sm:rounded-2xl border hover:scale-110 transition-all duration-300 bg-white"
                      style={{ borderColor: '#e0e8f0' }}
                    >
                      <ChevronRight size={18} className="text-[#040472]" />
                    </button>
                  </div>

                  <div className="text-right">
                    <div className="text-xs sm:text-sm uppercase tracking-widest mb-1 sm:mb-2 text-[#667788]">Progress</div>
                    <div className="text-base sm:text-xl font-medium text-[#001a3d]">
                      {activeIndex + 1}/{craftSteps.length}
                    </div>
                  </div>
                </div>

                {/* Step Cards */}
                <div className="space-y-3">
                  {craftSteps.map((step, index) => {
                    const IconComponent = step.icon;
                    const isActive = activeIndex === index;
                    return (
                      <div
                        key={index}
                        onClick={() => setActiveIndex(index)}
                        className="group cursor-pointer transition-all duration-500"
                        style={{
                          transform: isActive ? 'translateX(8px) scale(1.02)' : 'translateX(0) scale(1)',
                        }}
                      >
                        <div
                          className="rounded-xl sm:rounded-2xl p-4 sm:p-5 border relative overflow-hidden transition-all duration-500"
                          style={{
                            borderColor: isActive ? '#040472' : '#e0e8f0',
                            backgroundColor: '#f8faff',
                            boxShadow: isActive
                              ? '0 12px 40px rgba(4, 4, 114, 0.15)'
                              : '0 4px 20px rgba(0, 26, 61, 0.05)',
                          }}
                        >
                          {isActive && <div className="absolute left-0 top-0 bottom-0 w-1 rounded-l-xl bg-[#040472]"></div>}

                          <div className="flex items-start sm:items-center gap-3 sm:gap-4">
                            <div
                              className="p-2 sm:p-3 rounded-lg sm:rounded-xl border transition-all duration-500 bg-white"
                              style={{ borderColor: isActive ? '#040472' : '#e0e8f0' }}
                            >
                              <IconComponent size={18} className={isActive ? 'text-[#040472]' : 'text-[#667788]'} />
                            </div>

                            <div className="flex-1">
                              <div className="flex items-center justify-between mb-1 sm:mb-2">
                                <h3 className="text-base sm:text-lg font-medium text-[#001a3d]">{step.title}</h3>
                                <div
                                  className="text-xs sm:text-sm font-light"
                                  style={{ color: isActive ? '#040472' : '#667788' }}
                                >
                                  {String(index + 1).padStart(2, '0')}
                                </div>
                              </div>
                              <p
                                className="text-xs sm:text-sm line-clamp-2"
                                style={{ color: isActive ? '#334455' : '#667788' }}
                              >
                                {step.description}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Progress Bar */}
                <div className="mt-4 sm:mt-6">
                  <div className="flex justify-between text-xs sm:text-sm mb-2 sm:mb-3 text-[#667788]">
                    <span>Process</span>
                    <span>{Math.round(((activeIndex + 1) / craftSteps.length) * 100)}%</span>
                  </div>
                  <div className="w-full h-1.5 sm:h-2 rounded-full bg-gray-100 overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all duration-1000 ease-out"
                      style={{
                        backgroundColor: '#040472',
                        width: `${((activeIndex + 1) / craftSteps.length) * 100}%`,
                      }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@300;400;500;600&display=swap');

        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
}
