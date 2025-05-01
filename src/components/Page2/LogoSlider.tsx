'use client';
import React, { useState, useEffect, useRef } from 'react';
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface CompanyLogo {
  id: number;
  name: string;
  logoUrl: string;
}

const logos = [
  "https://corpbiz.io/admin/style/images/builder/20180628020904_stripe.jpg",
  "https://corpbiz.io/admin/style/images/builder/20211225023617_spinny.png",
  "https://corpbiz.io/admin/style/images/builder/20211225023604_milton.jpg",
  "https://corpbiz.io/admin/style/images/builder/20211225023552_marg-logo.png",
  "https://corpbiz.io/admin/style/images/builder/20180628020851_ku.jpg",
  "https://corpbiz.io/admin/style/images/builder/20211225023538_justdial.jpg",
  "https://corpbiz.io/admin/style/images/builder/20180628020838_30fbric.jpg",
  "https://corpbiz.io/admin/style/images/builder/20180628020825_foodpanda.jpg",
];
const LogoSlider = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Duplicate the logos for infinite loop effect
  const duplicatedLogos = [...logos, ...logos];

  return (
    <section ref={ref} className="relative overflow-hidden py-16 bg-white">
      {/* Gradient fade effects on sides */}
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-10" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-10" />
      
      {/* Title with decorative elements */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="text-center mb-12 px-4"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-[#1D293D] mb-4">
          Trusted by Industry Leaders
        </h2>
        <div className="w-20 h-1 bg-[#7DD756] mx-auto mb-6" />
        <p className="text-gray-600 max-w-2xl mx-auto">
          We partner with the most innovative companies to deliver exceptional results
        </p>
      </motion.div>

      {/* Slider container */}
      <motion.div
        className="flex"
        animate={{
          x: ["0%", "-100%"],
          transition: {
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 30,
              ease: "linear",
            },
          },
        }}
      >
        {duplicatedLogos.map((logo, index) => (
          <div
            key={`${logo}-${index}`}
            className="flex-shrink-0 px-8 flex items-center justify-center"
            style={{ width: `${100 / 4}%` }} // Show 4 logos at a time
          >
            <motion.div
              className="relative h-20 w-full"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{
                duration: 0.5,
                delay: index * 0.05,
                ease: "backOut",
              }}
              whileHover={{ scale: 1.1 }}
            >
              {/* Logo with subtle shadow and hover effect */}
              <div className="relative h-full w-full flex items-center justify-center p-4">
                <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-50 rounded-xl shadow-sm hover:shadow-md transition-all duration-300" />
                <img
                  src={logo}
                  alt="Partner logo"
                  className="relative z-10 max-h-12 w-auto object-contain filter grayscale hover:grayscale-0 transition-all duration-500"
                  loading="lazy"
                />
              </div>
            </motion.div>
          </div>
        ))}
      </motion.div>

      {/* Dots indicator */}
      <div className="flex justify-center mt-12">
        {logos.slice(0, 4).map((_, index) => (
          <motion.div
            key={index}
            className="w-2 h-2 mx-1 rounded-full bg-gray-300"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.6, 1, 0.6],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "loop",
              delay: index * 0.2,
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default LogoSlider;