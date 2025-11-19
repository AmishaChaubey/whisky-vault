import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function WhiskyNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when clicking outside or resizing
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsOpen(false);
        setActiveDropdown(null);
      }
    };

    const handleClickOutside = (event) => {
      if (!event.target.closest('nav') && isOpen) {
        setIsOpen(false);
        setActiveDropdown(null);
      }
    };

    window.addEventListener('resize', handleResize);
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const closeMobileMenu = () => {
    setIsOpen(false);
    setActiveDropdown(null);
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-[#040472] backdrop-blur-lg shadow-lg' : 'bg-transparent'
      }`}
      style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20 lg:justify-center lg:gap-8 xl:gap-12">
          {/* Mobile Logo - Left aligned on mobile */}
          <div className="flex-shrink-0 group cursor-pointer lg:hidden">
            <Link to="/" onClick={closeMobileMenu}>
              <img 
                src="/logo/logo.png" 
                alt="Blu Kins Logo" 
                className="h-24 w-auto sm:h-28 md:h-32 mt-1 transform group-hover:scale-105 transition-transform duration-300" 
              />
            </Link>
          </div>

          {/* Desktop Navigation - Left Side */}
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            <Link 
              to="/" 
              className="relative text-white/90 hover:text-white transition-colors duration-300 text-sm xl:text-base tracking-[0.15em] uppercase font-light group"
            >
              Home
              <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
            </Link>
            
            <Link 
              to="/about" 
              className="relative text-white/90 hover:text-white transition-colors duration-300 text-sm xl:text-base tracking-[0.15em] uppercase font-light group"
            >
              About
              <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
            </Link>
            
            {/* Collections Dropdown */}
            <div className="relative group">
              <button className="flex items-center text-white/90 hover:text-white transition-colors duration-300 text-sm xl:text-base tracking-[0.15em] uppercase font-light">
                Collections
                <ChevronDown className="ml-1.5 w-4 h-4 group-hover:translate-y-0.5 transition-transform duration-300" />
              </button>
              <div className="absolute left-1/2 -translate-x-1/2 mt-8 w-56 xl:w-64 bg-blue-800/95 backdrop-blur-xl border border-blue-700/50 rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:mt-6 transition-all duration-300 overflow-hidden shadow-2xl">
                <div className="py-2">
                  <Link 
                    to="/collections/red-signal-beers" 
                    className="block px-4 xl:px-6 py-3 xl:py-3.5 text-white/90 hover:text-white hover:bg-blue-700/50 transition-all duration-200 text-sm font-light"
                  >
                    Red Signal Beers
                  </Link>
                  <Link 
                    to="/collections/black-and-black-whisky" 
                    className="block px-4 xl:px-6 py-3 xl:py-3.5 text-white/90 hover:text-white hover:bg-blue-700/50 transition-all duration-200 text-sm font-light"
                  >
                    Black & Black Whisky
                  </Link>
                  <Link 
                    to="/collections/blu-kings-whisky" 
                    className="block px-4 xl:px-6 py-3 xl:py-3.5 text-white/90 hover:text-white hover:bg-blue-700/50 transition-all duration-200 text-sm font-light"
                  >
                    Blu Kings Whisky
                  </Link>
                  <Link 
                    to="/collections/old-and-gold-whisky" 
                    className="block px-4 xl:px-6 py-3 xl:py-3.5 text-white/90 hover:text-white hover:bg-blue-700/50 transition-all duration-200 text-sm font-light"
                  >
                    Old & Gold Whisky
                  </Link>
                  <Link 
                    to="/collections/blukings-vodka" 
                    className="block px-4 xl:px-6 py-3 xl:py-3.5 text-white/90 hover:text-white hover:bg-blue-700/50 transition-all duration-200 text-sm font-light"
                  >
                    Blu Kings Vodka
                  </Link>
                </div>
              </div>
            </div>
               
            <Link 
              to="/gallery" 
              className="relative text-white/90 hover:text-white transition-colors duration-300 text-sm xl:text-base tracking-[0.15em] uppercase font-light group"
            >
              Gallery
              <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
            </Link>
          </div>

          {/* Desktop Logo - Centered */}
          <div className="hidden lg:block flex-shrink-0 group cursor-pointer">
            <Link to="/" onClick={closeMobileMenu}>
              <img 
                src="/logo/logo.png" 
                alt="Blu Kins Logo" 
                className="h-32 xl:h-48 w-auto  mt-5 transform group-hover:scale-105 transition-transform duration-300" 
              />
            </Link>
          </div>

          {/* Desktop Navigation - Right Side */}
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            <Link 
              to="/craft" 
              className="relative text-white/90 hover:text-white transition-colors duration-300 text-sm xl:text-base tracking-[0.15em] uppercase font-light group"
            >
              Crafts
              <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
            </Link>
            
            <Link 
              to="/cocktails" 
              className="relative text-white/90 hover:text-white transition-colors duration-300 text-sm xl:text-base tracking-[0.15em] uppercase font-light group"
            >
              Cocktails
              <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
            </Link>
            
            <Link 
              to="/blog" 
              className="relative text-white/90 hover:text-white transition-colors duration-300 text-sm xl:text-base tracking-[0.15em] uppercase font-light group"
            >
             Blog
              <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
            </Link>
          </div>

          {/* CTA Button - Desktop */}
          <div className="hidden lg:block">
            <Link to="/contact">
              <button className="relative overflow-hidden border border-white/80 text-white hover:text-blue-900 px-6 xl:px-8 py-2.5 xl:py-3 text-sm xl:text-base tracking-[0.2em] uppercase transition-all duration-500 font-light group">
                <span className="relative z-10">Explore</span>
                <span className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
              </button>
            </Link>
          </div>

          {/* Mobile menu button - Visible only on mobile/tablet */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-blue-200 transition-colors p-2"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={28} className="sm:w-8 sm:h-8" /> : <Menu size={28} className="sm:w-8 sm:h-8" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={`lg:hidden bg-blue-900/98 backdrop-blur-lg border-t border-blue-800/50 transition-all duration-500 overflow-hidden ${
        isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div className="px-4 sm:px-6 py-4 sm:py-6 space-y-1">
          <Link 
            to="/" 
            onClick={closeMobileMenu}
            className="block py-3 sm:py-3.5 text-white/90 hover:text-white hover:pl-3 transition-all duration-300 text-base sm:text-lg tracking-[0.15em] uppercase font-light border-b border-blue-800/50"
          >
            Home
          </Link>
          
          {/* Mobile Collections Dropdown */}
          <div className="border-b border-blue-800/50">
            <button
              onClick={() => setActiveDropdown(activeDropdown === 'collection' ? null : 'collection')}
              className="flex items-center justify-between w-full py-3 sm:py-3.5 text-white/90 hover:text-white transition-colors text-base sm:text-lg tracking-[0.15em] uppercase font-light"
            >
              Collections
              <ChevronDown className={`w-5 h-5 sm:w-6 sm:h-6 transition-transform duration-300 ${activeDropdown === 'collection' ? 'rotate-180' : ''}`} />
            </button>
            <div className={`overflow-hidden transition-all duration-300 ${
              activeDropdown === 'collection' ? 'max-h-96 opacity-100 mb-2' : 'max-h-0 opacity-0'
            }`}>
              <div className="pl-4 sm:pl-6 space-y-1 border-l-2 border-blue-700/50 pt-2">
                <Link 
                  to="/collections/red-signal-beers" 
                  onClick={closeMobileMenu}
                  className="block py-2.5 sm:py-3 text-blue-200 hover:text-white hover:pl-3 transition-all duration-200 text-sm sm:text-base font-light"
                >
                  Red Signal Beers
                </Link>
                <Link 
                  to="/collections/black-and-black-whisky" 
                  onClick={closeMobileMenu}
                  className="block py-2.5 sm:py-3 text-blue-200 hover:text-white hover:pl-3 transition-all duration-200 text-sm sm:text-base font-light"
                >
                  Black & Black Whisky
                </Link>
                <Link 
                  to="/collections/blu-kings-whisky" 
                  onClick={closeMobileMenu}
                  className="block py-2.5 sm:py-3 text-blue-200 hover:text-white hover:pl-3 transition-all duration-200 text-sm sm:text-base font-light"
                >
                  Blu Kings Whisky
                </Link>
                <Link 
                  to="/collections/old-and-gold-whisky" 
                  onClick={closeMobileMenu}
                  className="block py-2.5 sm:py-3 text-blue-200 hover:text-white hover:pl-3 transition-all duration-200 text-sm sm:text-base font-light"
                >
                  Old & Gold Whisky
                </Link>
                <Link 
                  to="/collections/blukings-vodka" 
                  onClick={closeMobileMenu}
                  className="block py-2.5 sm:py-3 text-blue-200 hover:text-white hover:pl-3 transition-all duration-200 text-sm sm:text-base font-light"
                >
                  Blu Kings Vodka
                </Link>
              </div>
            </div>
          </div>

          <Link 
            to="/craft" 
            onClick={closeMobileMenu}
            className="block py-3 sm:py-3.5 text-white/90 hover:text-white hover:pl-3 transition-all duration-300 text-base sm:text-lg tracking-[0.15em] uppercase font-light border-b border-blue-800/50"
          >
            Crafts
          </Link>
          
          <Link 
            to="/gallery" 
            onClick={closeMobileMenu}
            className="block py-3 sm:py-3.5 text-white/90 hover:text-white hover:pl-3 transition-all duration-300 text-base sm:text-lg tracking-[0.15em] uppercase font-light border-b border-blue-800/50"
          >
            Gallery
          </Link>
          
          <Link 
            to="/cocktails" 
            onClick={closeMobileMenu}
            className="block py-3 sm:py-3.5 text-white/90 hover:text-white hover:pl-3 transition-all duration-300 text-base sm:text-lg tracking-[0.15em] uppercase font-light border-b border-blue-800/50"
          >
            Cocktails
          </Link>
          
          {/* Mobile CTA Button */}
          <div className="pt-4 sm:pt-6 border-t border-blue-800/50">
            <Link to="/contact" onClick={closeMobileMenu}>
              <button className="w-full border border-white/80 text-white hover:bg-white hover:text-blue-900 px-6 sm:px-8 py-3.5 sm:py-4 text-base sm:text-lg tracking-[0.2em] uppercase transition-all duration-300 font-light">
                Explore
              </button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}