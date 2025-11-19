// BenefitsShowcase.jsx - Reusable benefits showcase component with animated cards

import React from 'react';

const AnimatedCard = ({ icon: Icon, title, description }) => {
  return (
    <div className="card-container">
      {/* Outer card wrapper with rotating gradient */}
      <div className="card">
        {/* Inner content card */}
        <div className="content">
          {/* Enhanced icon container */}
          <div className="icon-wrapper">
            <div className="icon-background"></div>
            <div className="icon-orb"></div>
            <Icon className="icon" strokeWidth={1.5} />
          </div>
          
          {/* Enhanced Title */}
          <h3 className="text-2xl font-bold text-[#040472] mb-4 text-center tracking-tight relative">
            {title}
            <span className="title-underline"></span>
          </h3>
          
          {/* Enhanced Description */}
          <p className="text-gray-600 text-sm leading-relaxed text-center px-2 description-text">
            {description}
          </p>
          
          {/* Enhanced decorative elements */}
          <div className="accent-line"></div>
          <div className="corner-decoration top-left"></div>
          <div className="corner-decoration top-right"></div>
          <div className="corner-decoration bottom-left"></div>
          <div className="corner-decoration bottom-right"></div>
        </div>
      </div>

      <style jsx>{`
        .card-container {
          display: inline-block;
          perspective: 1000px;
        }

        .card {
          width: 300px;
          height: 380px;
          background: white;
          display: flex;
          justify-content: center;
          align-items: center;
          overflow: hidden;
          position: relative;
          box-shadow: 
            0 10px 40px rgba(0, 0, 0, 0.08),
            inset 0 1px 0 rgba(255, 255, 255, 0.8);
          cursor: pointer;
          border-radius: 24px;
          transition: all 600ms cubic-bezier(0.23, 1, 0.32, 1);
        }

        .card:hover {
          transform: translateY(-15px) scale(1.03) rotateX(2deg);
          box-shadow: 
            0 25px 70px rgba(4, 4, 114, 0.2),
            inset 0 1px 0 rgba(255, 255, 255, 0.9);
        }

        .card .content {
          border-radius: 20px;
          background: linear-gradient(145deg, #ffffff 0%, #fefefe 50%, #ffffff 100%);
          width: 288px;
          height: 368px;
          z-index: 1;
          padding: 45px 28px;
          color: #040472;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          position: relative;
          transition: all 600ms cubic-bezier(0.23, 1, 0.32, 1);
          overflow: hidden;
        }

        .card:hover .content {
          background: linear-gradient(145deg, #ffffff 0%, #fafafa 50%, #ffffff 100%);
          transform: translateZ(10px);
        }

        .icon-wrapper {
          position: relative;
          width: 110px;
          height: 110px;
          margin-bottom: 28px;
          transition: all 700ms cubic-bezier(0.23, 1, 0.32, 1);
        }

        .card:hover .icon-wrapper {
          transform: translateY(-12px) scale(1.15);
        }

        .icon-background {
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, #040472 0%, #0506a8 50%, #040472 100%);
          border-radius: 50%;
          box-shadow: 
            0 8px 32px rgba(4, 4, 114, 0.3),
            inset 0 2px 4px rgba(255, 255, 255, 0.2);
          transition: all 700ms cubic-bezier(0.23, 1, 0.32, 1);
        }

        .icon-orb {
          position: absolute;
          inset: 4px;
          background: radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.3) 0%, transparent 50%);
          border-radius: 50%;
          opacity: 0;
          transition: opacity 600ms ease;
        }

        .card:hover .icon-orb {
          opacity: 1;
        }

        .card:hover .icon-background {
        
          background: linear-gradient(135deg, #0506a8 0%, #040472 50%, #0506a8 100%);
          animation: pulse-glow 2s ease-in-out infinite;
        }

        .icon {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 50px;
          height: 50px;
          color: white;
          z-index: 2;
          filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.3));
          transition: all 400ms ease;
        }

        .card:hover .icon {
          filter: drop-shadow(0 6px 12px rgba(0, 0, 0, 0.4));
        }

        .title-underline {
          position: absolute;
          bottom: -8px;
          left: 50%;
          transform: translateX(-50%) scaleX(0);
          width: 40px;
          height: 2px;
          background: linear-gradient(90deg, transparent 0%, #040472 50%, transparent 100%);
          transition: transform 500ms cubic-bezier(0.23, 1, 0.32, 1);
        }

        .card:hover .title-underline {
          transform: translateX(-50%) scaleX(1);
        }

        .description-text {
          position: relative;
          transition: all 500ms ease;
          transform: translateY(10px);
          opacity: 0.9;
        }

        .card:hover .description-text {
          transform: translateY(0);
          opacity: 1;
        }

        .accent-line {
          position: absolute;
          bottom: 28px;
          left: 50%;
          transform: translateX(-50%);
          width: 30px;
          height: 4px;
          background: linear-gradient(90deg, transparent 0%, #fbbf24 20%, #f59e0b 50%, #fbbf24 80%, transparent 100%);
          border-radius: 10px;
          transition: all 600ms cubic-bezier(0.23, 1, 0.32, 1);
          filter: brightness(1);
        }

        .card:hover .accent-line {
          width: 90px;
          background: linear-gradient(90deg, transparent 0%, #fbbf24 10%, #f59e0b 50%, #fbbf24 90%, transparent 100%);
          box-shadow: 
            0 0 25px rgba(251, 191, 36, 0.8),
            0 0 15px rgba(251, 191, 36, 0.4);
          filter: brightness(1.2);
          height: 5px;
        }

        .corner-decoration {
          position: absolute;
          width: 20px;
          height: 20px;
          opacity: 0;
          transition: all 500ms ease;
        }

        .top-left {
          top: 15px;
          left: 15px;
          border-top: 2px solid #040472;
          border-left: 2px solid #040472;
          border-radius: 8px 0 0 0;
        }

        .top-right {
          top: 15px;
          right: 15px;
          border-top: 2px solid #040472;
          border-right: 2px solid #040472;
          border-radius: 0 8px 0 0;
        }

        .bottom-left {
          bottom: 15px;
          left: 15px;
          border-bottom: 2px solid #040472;
          border-left: 2px solid #040472;
          border-radius: 0 0 0 8px;
        }

        .bottom-right {
          bottom: 15px;
          right: 15px;
          border-bottom: 2px solid #040472;
          border-right: 2px solid #040472;
          border-radius: 0 0 8px 0;
        }

        .card:hover .corner-decoration {
          opacity: 0.8;
        }

        .content::before {
          opacity: 0;
          transition: opacity 500ms;
          content: " ";
          display: block;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.8), transparent);
          width: 60px;
          height: 100%;
          position: absolute;
          top: 0;
          left: -100px;
          transform: skewX(-15deg);
          filter: blur(8px);
        }

        .card:hover .content::before {
          opacity: 1;
          left: calc(100% + 100px);
          transition: left 1000ms ease-in-out, opacity 500ms ease;
        }

        .card::before {
          opacity: 0;
          content: " ";
          position: absolute;
          display: block;
          width: 180px;
          height: 450px;
          background: conic-gradient(from 0deg, #fbbf24, #f59e0b, #fbbf24, #f59e0b, #fbbf24);
          transition: opacity 500ms cubic-bezier(0.23, 1, 0.32, 1);
          animation: rotation_9018 6000ms infinite linear;
          animation-play-state: paused;
          filter: blur(12px);
          border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
        }

        .card:hover::before {
          opacity: 1.0;
          animation-play-state: running;
        }

        .card::after {
          position: absolute;
          content: " ";
          display: block;
          width: 294px;
          height: 384px;
          background: rgba(255, 255, 255, 0.5);
          backdrop-filter: blur(25px);
          border-radius: 22px;
        }

        @keyframes rotation_9018 {
          0% {
            transform: rotate(0deg) scale(1.2);
          }
          50% {
            transform: rotate(180deg) scale(1.3);
          }
          100% {
            transform: rotate(360deg) scale(1.2);
          }
        }

        @keyframes pulse-glow {
          0%, 100% {
            box-shadow: 
              0 15px 50px rgba(4, 4, 114, 0.6),
              inset 0 2px 6px rgba(255, 255, 255, 0.3);
          }
          50% {
            box-shadow: 
              0 20px 70px rgba(4, 4, 114, 0.8),
              inset 0 2px 8px rgba(255, 255, 255, 0.4);
          }
        }
      `}</style>
    </div>
  );
};

const BenefitsShowcase = ({ 
  benefits,
  title = "What You'll Get",
  subtitle = "Experience excellence in every sip with our meticulously selected collection of premium whiskies",
  primaryColor = '#040472',
  backgroundColor = 'from-slate-50 to-slate-100',
  showPattern = true,
  gridCols = 'lg:grid-cols-4'
}) => {
  return (
    <div className={`min-h-screen py-20 px-4 relative overflow-hidden`}>
      {/* Background decorative elements */}
      {showPattern && (
        <div className="absolute inset-0 opacity-5">
          <div className="h-full w-full" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23040472' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }}></div>
        </div>
      )}

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Enhanced Header */}
        <div className="text-center mb-20">
          <div className="relative inline-block">
            <h1 className="text-7xl font-bold mb-6 relative font-serif" style={{ color: primaryColor }}>
              {title}
              <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-[#040472] rounded-full shadow-lg shadow-amber-400/30"></div>
              <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-24 h-0.5 bg-amber-800 rounded-full blur-sm"></div>
            </h1>
          </div>
          <p className="text-gray-600 text-xl max-w-2xl mx-auto leading-relaxed mt-8 ">
            {subtitle}
          </p>
        </div>
        
        {/* Enhanced Cards Grid */}
        <div className={`grid grid-cols-1 md:grid-cols-2 ${gridCols} gap-10 justify-items-center`}>
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="transform transition-all duration-700 hover:-translate-y-2"
              style={{
                transitionDelay: `${index * 100}ms`
              }}
            >
              <AnimatedCard
                icon={benefit.icon}
                title={benefit.title}
                description={benefit.description}
              />
            </div>
          ))}
        </div>

        {/* Bottom decorative element */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-4 text-gray-400">
            <div className="w-12 h-px bg-gradient-to-r from-transparent to-gray-400"></div>
            <span className="text-sm">Premium Selection</span>
            <div className="w-12 h-px bg-gradient-to-l from-transparent to-gray-400"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BenefitsShowcase;