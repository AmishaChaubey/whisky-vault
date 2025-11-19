import React, { useState, useEffect, useRef } from 'react';
import { User } from 'lucide-react';

const TeamSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const teamMembers = [
    {
      name: "Miss Divya Tanwar",
      position: "Chairman",
      qualifications: "",
      experience: "5 years",
      hasImage: false,
      imageUrl: null
    },
    {
      name: "Mrs Sunita Tanwar",
      position: "Vice Chairman / Vice President",
      qualifications: "",
      experience: "10 years",
      hasImage: true,
      imageUrl: "/gaurav.jpg" // Replace with actual ima    ge URL
    },
    {
      name: "Ashish Tanwar",
      position: "Managing Director",
      qualifications: "Bachelor of Commerce and Master of Business Administration",
      experience: "5 years",
      hasImage: true,
      imageUrl: "/aakash.jpg" // Replace with actual image URL
    },
    {
      name: "Shiv Kumar",
      position: "Cheif Operating Officer (COO)",
      qualifications: "",
      experience: "25 years",
      hasImage: true,
      imageUrl: "/robin.jpg" // Replace with actual image URL
    },
    {
      name: "Chander Bose",
      position: "Chief Financial Officer (CFO) & Principal Promoter",
      qualifications: "Master Of Arts & MBA (Finance) ",
      experience: "25 years",
      hasImage: true,
      imageUrl: "/vinod.jpg" // Replace with actual image URL
    },
    
     {
      name: "Avtar Singh",
      position: "Product Manager",
      qualifications: "",
      experience: "4 years",
      hasImage: true,
      imageUrl: "/vinod.jpg" // Replace with actual image URL
    },
     {
      name: "Mubin Khan",
      position: "Business Development Manager",
      qualifications: "Sales , Retail and institutional channels. ",
      experience: "1+ years",
      hasImage: true,
      imageUrl: "/vinod.jpg" // Replace with actual image URL
    },
    
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section className="py-20 px-4 bg-white relative" ref={sectionRef}>
        <div className="absolute inset-0 opacity-7">
        <div className="h-full w-full" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23040472' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }}></div>
      </div>
       
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className={`text-center mb-12 transition-all duration-1000 ease-out ${
          isVisible 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="text-5xl font-bold mb-4 " style={{color: '#040472'}}>
            Our Team
          </h2>
          <div className={`w-24 h-1 mx-auto mb-6 transition-all duration-1000 delay-300 ease-out ${
            isVisible 
              ? 'scale-x-100 opacity-100' 
              : 'scale-x-0 opacity-0'
          }`} style={{backgroundColor: '#040472'}}></div>
          <p className={`text-gray-900 text-lg max-w-2xl mx-auto transition-all duration-1000 delay-500 ease-out ${
            isVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-4'
          }`}>
            Meet our dedicated professionals who bring expertise and passion to drive success
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div 
              key={index} 
              className={`bg-white border border-gray-100 rounded-xl p-6 text-center shadow-lg hover:shadow-xl duration-300 hover:-translate-y-1 transform transition-all ease-out ${
                isVisible 
                  ? 'opacity-100 translate-y-0 scale-100' 
                  : 'opacity-0 translate-y-8 scale-95'
              }`}
              style={{
                transitionDelay: isVisible ? `${600 + (index * 100)}ms` : '0ms',
                transitionDuration: '800ms'
              }}
            >
              {/* Profile Image or Icon */}
              <div className="mb-6">
                {member.hasImage && member.imageUrl ? (
                  <img 
                    src={member.imageUrl} 
                    alt={member.name}
                    className={`w-24 h-24 rounded-full mx-auto mb-4 object-cover border-2 transition-all duration-500 ease-out ${
                      isVisible 
                        ? 'scale-100 opacity-100' 
                        : 'scale-0 opacity-0'
                    }`}
                    style={{
                      borderColor: '#040472',
                      transitionDelay: isVisible ? `${800 + (index * 100)}ms` : '0ms'
                    }}
                  />
                ) : member.hasImage ? (
                  <div 
                    className={`w-24 h-24 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-semibold transition-all duration-500 ease-out ${
                      isVisible 
                        ? 'scale-100 opacity-100' 
                        : 'scale-0 opacity-0'
                    }`}
                    style={{
                      backgroundColor: '#040472',
                      transitionDelay: isVisible ? `${800 + (index * 100)}ms` : '0ms'
                    }}
                  >
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </div>
                ) : (
                  <div 
                    className={`w-24 h-24 rounded-full mx-auto mb-4 flex items-center justify-center border-2 transition-all duration-500 ease-out ${
                      isVisible 
                        ? 'scale-100 opacity-100' 
                        : 'scale-0 opacity-0'
                    }`}
                    style={{
                      borderColor: '#040472',
                      transitionDelay: isVisible ? `${800 + (index * 100)}ms` : '0ms'
                    }}
                  >
                    <User size={32} style={{color: '#040472'}} />
                  </div>
                )}
              </div>

              {/* Member Info */}
              <div className={`transition-all duration-600 ease-out ${
                isVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-4'
              }`}
              style={{
                transitionDelay: isVisible ? `${1000 + (index * 100)}ms` : '0ms'
              }}>
                <h3 className="text-xl font-bold mb-2" style={{color: '#040472'}}>
                  {member.name}
                </h3>
                <p className="text-gray-600 font-medium mb-2">
                  {member.position}
                </p>
                {member.qualifications && (
                  <p className="text-sm text-gray-500 mb-2">
                    {member.qualifications}
                  </p>
                )}
                <div className="inline-block px-3 py-1 rounded-full text-sm font-medium text-white" style={{backgroundColor: '#040472'}}>
                  {member.experience}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;