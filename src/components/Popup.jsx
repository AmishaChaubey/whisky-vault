import React, { useState, useEffect } from 'react';
import { Lock, AlertCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function AgeVerificationPopup({ onVerified }) {
  const [showError, setShowError] = useState(false);
  const navigate = useNavigate();

  console.log('AgeVerificationPopup rendered');

  // Prevent ESC key and F5 from closing popup
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' || e.key === 'F5' || (e.ctrlKey && e.key === 'r')) {
        e.preventDefault();
        e.stopPropagation();
      }
    };

    document.addEventListener('keydown', handleKeyDown, true);
    
    return () => {
      document.removeEventListener('keydown', handleKeyDown, true);
    };
  }, []);

  const handleYes = () => {
    console.log('Yes button clicked');
    setShowError(false);
    
    try {
      // Store age verification in localStorage
      localStorage.setItem('ageVerified', 'true');
      console.log('Age verified, localStorage set to:', localStorage.getItem('ageVerified'));
      
      // Notify parent component that verification is complete
      if (onVerified) {
        console.log('Calling onVerified callback');
        onVerified();
      } else {
        console.error('onVerified callback is not defined');
      }
    } catch (error) {
      console.error('Error in handleYes:', error);
    }
  };

  const handleNo = () => {
    console.log('No button clicked');
    setShowError(true);
    
    // Remove any existing age verification
    localStorage.removeItem('ageVerified');
    
    // Navigate to privacy policy page after showing error for 2 seconds
    setTimeout(() => {
      console.log('Navigating to privacy policy');
      navigate('/privacy-policy');
      
      // Also call onVerified to close the popup before navigation
      if (onVerified) {
        onVerified();
      }
    }, 2000);
  };

  return (
    <div 
      className="fixed inset-0 bg-black flex items-center justify-center p-4 z-50"
      onClick={(e) => e.stopPropagation()}
      style={{ pointerEvents: 'auto' }}
    >
      <div 
        className="relative max-w-2xl w-full"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Decorative glow effect */}
        <div className="absolute inset-0 rounded-3xl blur-2xl opacity-20" style={{ backgroundColor: '#040472' }}></div>
        
        {/* Main card */}
        <div className="relative bg-gradient-to-br from-gray-900 to-black border-2 rounded-3xl p-8 md:p-12 shadow-2xl" style={{ borderColor: '#040472' }}>
          {/* Lock icon with glow */}
          <div className="flex justify-center mb-8">
            <div className="relative">
              <div className="absolute inset-0 rounded-full blur-xl opacity-50" style={{ backgroundColor: '#040472' }}></div>
              <div className="relative w-20 h-20 rounded-full flex items-center justify-center" style={{ backgroundColor: '#040472' }}>
                <Lock className="w-10 h-10 text-white" />
              </div>
            </div>
          </div>

          {/* Heading */}
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 text-white">
            Age Verification Required
          </h1>
          
          {/* Subheading */}
          <p className="text-gray-400 text-center mb-8 text-lg">
            This website contains age-restricted content
          </p>

          {/* Main question */}
          <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-2xl p-6 mb-8 border border-gray-700">
            <p className="text-white text-xl md:text-2xl text-center font-semibold">
              Are you 21 years or older?
            </p>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <button
              onClick={handleYes}
              className="flex-1 text-white font-bold py-4 px-8 rounded-xl text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
              style={{ backgroundColor: '#040472' }}
            >
              Yes, I'm 21+
            </button>
            <button
              onClick={handleNo}
              className="flex-1 bg-gray-800 text-white font-bold py-4 px-8 rounded-xl text-lg transition-all duration-300 transform hover:scale-105 hover:bg-gray-700 border border-gray-600"
            >
              No, I'm not
            </button>
          </div>

          {/* Error message */}
          {showError && (
            <div className="rounded-xl p-4 flex items-start gap-3" style={{ backgroundColor: 'rgba(4, 4, 114, 0.2)' }}>
              <AlertCircle className="w-6 h-6 flex-shrink-0 mt-0.5" style={{ color: '#040472' }} />
              <div>
                <p className="text-white font-semibold mb-1">Access Denied</p>
                <p className="text-gray-400 text-sm">
                  You must be 21 years or older to access this website. Redirecting to privacy policy...
                </p>
              </div>
            </div>
          )}

          {/* Footer text */}
          <p className="text-gray-500 text-center text-sm mt-8">
            By entering this site, you agree to our terms of service and confirm that you are of legal age in your jurisdiction.
          </p>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-32 h-32 rounded-full blur-3xl opacity-10 -translate-x-1/2 -translate-y-1/2" style={{ backgroundColor: '#040472' }}></div>
        <div className="absolute bottom-0 right-0 w-32 h-32 rounded-full blur-3xl opacity-10 translate-x-1/2 translate-y-1/2" style={{ backgroundColor: '#040472' }}></div>
      </div>
    </div>
  );
}