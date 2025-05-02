'use client'
import React from "react";
import { motion } from "framer-motion";
import { FaPhoneAlt, FaWhatsapp, FaStar, FaRegStar } from "react-icons/fa";
import { useInView } from "react-intersection-observer";

const TalkToExpert: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const steps = [
    {
      step: "01",
      title: "Enquiry Form",
      desc: "Among Asia Top 100 Consulting Firm",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
        </svg>
      )
    },
    {
      step: "02",
      title: "Get Consultation",
      desc: "Lowest Fees 100,000+ Clients",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      step: "03",
      title: "Service Delivery",
      desc: "4.9 Rating | 50+ Offices",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
      )
    }
  ];

  return (
    <div ref={ref} className="bg-white py-16 px-4 md:px-8 lg:px-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto"
      >
        {/* Section Header */}
        <div className="mb-12 text-center">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-[#1D293D] mb-4 relative inline-block"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
          >
            <span className="relative z-10 px-4">
              Talk to an Expert
            </span>
            <motion.span 
              className="absolute bottom-0 left-0 w-full h-2 bg-[#7DD756]/30 z-0"
              initial={{ scaleX: 0 }}
              animate={inView ? { scaleX: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
            />
          </motion.h2>
          <motion.p 
            className="text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4 }}
          >
            Get personalized guidance from our industry specialists
          </motion.p>
        </div>

        <div className="flex flex-col lg:flex-row gap-10 items-center lg:items-start">
          {/* Expert Card */}
          <motion.div
            className="bg-[#1D293D] text-white p-8 rounded-2xl w-full lg:w-1/3 shadow-xl relative overflow-hidden"
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#7DD756]/10 rounded-full -mr-16 -mt-16"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-[#7DD756]/5 rounded-full -ml-12 -mb-12"></div>
            
            <div className="relative z-10 flex flex-col items-center">
              <motion.div 
                className="relative mb-6"
                whileHover={{ scale: 1.05 }}
              >
                <img
                  src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=200&q=80"
                  alt="Expert"
                  className="rounded-full w-24 h-24 object-cover border-4 border-[#7DD756] shadow-md"
                />
                <div className="absolute -bottom-2 -right-2 bg-[#7DD756] text-white p-2 rounded-full">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </motion.div>

              <div className="text-center">
                

                {/* Contact Buttons */}
                <div className="flex flex-wrap gap-4 justify-center mt-8">
                  <motion.button 
                    className="bg-white text-[#1D293D] px-6 py-3 rounded-lg flex items-center gap-2 font-semibold shadow-md hover:shadow-lg transition-all"
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <FaPhoneAlt className="text-[#7DD756]" /> 
                    <span>Call Now</span>
                  </motion.button>
                  <motion.button 
                    className="bg-[#7DD756] text-white px-6 py-3 rounded-lg flex items-center gap-2 font-semibold shadow-md hover:shadow-lg transition-all"
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <FaWhatsapp /> 
                    <span>Chat With Us</span>
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Steps */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full lg:w-2/3">
            {steps.map(({ step, title, desc, icon }, index) => (
              <motion.div
                key={step}
                className="relative"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              >
                <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all h-full flex flex-col items-center text-center border border-gray-100">
                  <div className="relative mb-4">
                    <div className="absolute inset-0 bg-[#7DD756]/10 rounded-full animate-ping opacity-75"></div>
                    <div className="relative w-16 h-16 flex items-center justify-center bg-[#1D293D] text-white font-bold text-xl rounded-full border-4 border-white shadow-md">
                      {icon}
                    </div>
                  </div>
                  <h3 className="font-bold text-[#1D293D] text-lg mb-2">{title}</h3>
                  <p className="text-gray-600 text-sm flex-grow">{desc}</p>
                  <div className="mt-4 w-12 h-1 bg-[#7DD756] rounded-full"></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default TalkToExpert;