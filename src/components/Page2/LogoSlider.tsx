'use client';
import React, { useState, useEffect, useRef } from 'react';

interface CompanyLogo {
  id: number;
  name: string;
  logoUrl: string;
}

const LogoSlider: React.FC = () => {
  // Sample company logos
  const companyLogos: CompanyLogo[] = [
    { id: 1, name: 'Company 1', logoUrl: 'https://corpbiz.io/admin/style/images/builder/20211225023524_fia-global.jpg' },
    { id: 2, name: 'Company 2', logoUrl: 'https://corpbiz.io/admin/style/images/builder/20180628020803_DHFL.jpg' },
    { id: 3, name: 'Company 3', logoUrl: 'https://corpbiz.io/admin/style/images/builder/20180628020724_bank-of-maharastra.jpg' },
    { id: 4, name: 'Company 4', logoUrl: 'https://corpbiz.io/admin/style/images/builder/20180628020904_stripe.jpg' },
    { id: 5, name: 'Company 5', logoUrl: 'https://corpbiz.io/admin/style/images/builder/20211225023617_spinny.png' },
    { id: 6, name: 'Company 6', logoUrl: 'https://corpbiz.io/admin/style/images/builder/20211225023604_milton.jpg' },
    { id: 6, name: 'Company 7', logoUrl: 'https://corpbiz.io/admin/style/images/builder/20211225023552_marg-logo.png' },
    { id: 6, name: 'Company 8', logoUrl: 'https://corpbiz.io/admin/style/images/builder/20180628020851_ku.jpg' },
    { id: 6, name: 'Company 9', logoUrl: 'https://corpbiz.io/admin/style/images/builder/20211225023538_justdial.jpg' },
    { id: 6, name: 'Company 10', logoUrl: 'https://corpbiz.io/admin/style/images/builder/20180628020838_30fbric.jpg' },
    { id: 6, name: 'Company 11', logoUrl: 'https://corpbiz.io/admin/style/images/builder/20180628020825_foodpanda.jpg' },
  ];

  const sliderRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number | null>(null);
  const [logos] = useState([...companyLogos, ...companyLogos]); // Duplicate for infinite effect
  const speed = 50; // Pixels per second - adjust for desired speed

  useEffect(() => {
    let position = 0;
    const slider = sliderRef.current;
    if (!slider) return;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      position = (elapsed / 1000) * speed; // Calculate position based on time and speed
      
      // Reset position when halfway through duplicated content
      if (position > slider.scrollWidth / 2) {
        position = 0;
        startTime = timestamp; // Reset animation timer
      }

      slider.style.transform = `translateX(-${position}px)`;
      animationRef.current = requestAnimationFrame(animate);
    };

    let startTime: number | null = null;
    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <div className="relative w-full max-w-[1200px] mx-auto overflow-hidden py-5">
      {/* Slider track */}
      <div 
        ref={sliderRef}
        className="flex whitespace-nowrap"
      >
        {logos.map((logo, index) => (
          <div 
            key={`${logo.id}-${index}`} 
            className="inline-flex items-center justify-center px-8"
          >
            <img 
              src={logo.logoUrl} 
              alt={logo.name} 
              className="max-w-[150px] max-h-[80px] object-contain filter transition-all duration-300" 
            />
          </div>
        ))}
      </div>
      
      {/* Fade effects */}
      <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent pointer-events-none"></div>
      <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent pointer-events-none"></div>
    </div>
  );
};

export default LogoSlider;