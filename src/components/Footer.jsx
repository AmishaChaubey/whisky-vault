import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-blue-900 to-blue-950 text-white pt-8 pb-6 sm:pt-10 sm:pb-8">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-5">
          {/* Brand Section */}
          <div className="sm:col-span-2 lg:col-span-1 ">
            <img 
              src="/logo/logo.png" 
              alt="Premium Whisky Co. Logo" 
              className="h-38 w-24 sm:h-38 sm:w-28 lg:h-40 lg:w-30 -mt-4 sm:-mt-6 lg:-mt-8 -ml-5 xl:-ml-5 " 
            />
            <p className="text-blue-100 text-sm leading-relaxed mb-4 -mt-6 sm:-mt-10 lg:-mt-8">
              Crafting exceptional spirits since 2021. Experience the finest selection of aged whiskies from around the world.
            </p>
            <div className="mt-4 sm:mt-6 flex gap-3 sm:gap-4">
              <Link to="#" className="bg-white/10 hover:bg-white/20 p-2.5 sm:p-3 rounded-full transition-all duration-300">
                <Facebook size={18} className="text-white sm:w-5 sm:h-5" />
              </Link>
              <Link to="#" className="bg-white/10 hover:bg-white/20 p-2.5 sm:p-3 rounded-full transition-all duration-300">
                <Twitter size={18} className="text-white sm:w-5 sm:h-5" />
              </Link>
              <Link to="#" className="bg-white/10 hover:bg-white/20 p-2.5 sm:p-3 rounded-full transition-all duration-300">
                <Instagram size={18} className="text-white sm:w-5 sm:h-5" />
              </Link>
              <Link to="#" className="bg-white/10 hover:bg-white/20 p-2.5 sm:p-3 rounded-full transition-all duration-300">
                <Linkedin size={18} className="text-white sm:w-5 sm:h-5" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6 text-white font-serif">
              Navigations
            </h3>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <Link to="/about" className="text-blue-100 hover:text-white transition-colors duration-200 text-sm sm:text-base">
                  About
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-blue-100 hover:text-white transition-colors duration-200 text-sm sm:text-base">
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="/cocktails" className="text-blue-100 hover:text-white transition-colors duration-200 text-sm sm:text-base">
                  Cocktails
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-blue-100 hover:text-white transition-colors duration-200 text-sm sm:text-base">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-blue-100 hover:text-white transition-colors duration-200 text-sm sm:text-base">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6 text-white font-serif">
              Products
            </h3>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <Link to="/collections/red-signal-beers" className="text-blue-100 hover:text-white transition-colors duration-200 text-sm sm:text-base">
                  Red Signal Beers
                </Link>
              </li>
              <li>
                <Link to="/collections/old-and-gold-whisky" className="text-blue-100 hover:text-white transition-colors duration-200 text-sm sm:text-base">
                  Old & Bold Whisky
                </Link>
              </li>
              <li>
                <Link to="/collections/blu-kings-whisky" className="text-blue-100 hover:text-white transition-colors duration-200 text-sm sm:text-base">
                  Blu Kings Whisky
                </Link>
              </li>
              <li>
                <Link to="/collections/black-and-black-whisky" className="text-blue-100 hover:text-white transition-colors duration-200 text-sm sm:text-base">
                  Black & Black Whisky
                </Link>
              </li>
              <li>
                <Link to="/collections/blukings-vodka" className="text-blue-100 hover:text-white transition-colors duration-200 text-sm sm:text-base">
                  Blu Kings Vodka
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="sm:col-span-2 lg:col-span-1">
            <h3 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6 text-white font-serif">
              Contact Us
            </h3>
            <div className="space-y-3 sm:space-y-4">
              <div className="flex gap-3 items-start">
                <Phone size={18} className="text-blue-200 mt-1 flex-shrink-0 sm:w-5 sm:h-5" />
                <div>
                  <p className="text-blue-100 text-sm">+91 817166357</p>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <Mail size={18} className="text-blue-200 mt-1 flex-shrink-0 sm:w-5 sm:h-5" />
                <div>
                  <p className="text-blue-100 text-sm">info@blukingsdistillers.com</p>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <MapPin size={18} className="text-blue-200 mt-1 flex-shrink-0 sm:w-5 sm:h-5" />
                <div>
                  <p className="text-blue-100 text-sm">
                    B-14, Block C-127 Sector-63 Noida<br />
                    Uttarpardesh , 201301
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-blue-700 my-6 sm:my-8"></div>

        {/* Bottom Footer */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0">
          <p className="text-gray-100 text-xs sm:text-sm text-center sm:text-left">
            &copy; 2021 Blu kings  All rights reserved<Link to ="https://deboxtechnology.com/"><span className='text-gray-100'> | Developed by Debox Technology</span></Link> 
          </p>

          <div className="flex gap-4 sm:gap-6 flex-wrap justify-center text-center">
            <Link to="/privacy-policy" className="text-blue-200 hover:text-white text-xs sm:text-sm transition-colors duration-200">
              Privacy Policy
            </Link>
            <Link to="/terms-and-coditions" className="text-blue-200 hover:text-white text-xs sm:text-sm transition-colors duration-200">
              Terms and Conditions
            </Link>
            <Link to="#" className="text-blue-200 hover:text-white text-xs sm:text-sm transition-colors duration-200">
              Cookie Policy
            </Link>
            <Link to="#" className="text-blue-200 hover:text-white text-xs sm:text-sm transition-colors duration-200">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}