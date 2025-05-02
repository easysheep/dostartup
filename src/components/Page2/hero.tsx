'use client'
import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface HeroProps {
  title: string;
  description: string;
}

const Hero: React.FC<HeroProps> = ({ title, description }) => {
  // Animation controls
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const statsVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "backOut",
      },
    },
  };

  return (
    <div
      ref={ref}
      className="relative overflow-hidden bg-white py-12 px-4 sm:px-6 lg:px-8"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-0 top-0 h-full w-1/2 bg-gradient-to-r from-[#1D293D]/5 to-transparent" />
        <div className="absolute right-0 top-0 h-full w-1/2 bg-gradient-to-l from-[#7DD756]/5 to-transparent" />
      </div>

      <motion.div
        className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12 relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate={controls}
      >
        {/* Left Content */}
        <div className="lg:col-span-2 space-y-8">
          <motion.div variants={itemVariants}>
            <h1 className="text-4xl md:text-5xl font-bold text-[#1D293D] leading-tight">
              {title}
            </h1>
          </motion.div>

          <motion.div variants={itemVariants}>
            <p className="text-lg text-gray-600 leading-relaxed max-w-3xl">
              {description}
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            variants={itemVariants}
          >
            {[
              "10+ Years of Experience",
              "400+ In-House CAs, CS & Lawyers",
              "99% SLA Delivery",
              "10,000+ Pin codes Network in India",
            ].map((text, idx) => (
              <div
                key={idx}
                className="flex items-start p-3 rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100"
              >
                <div className="flex-shrink-0 mt-1">
                  <div className="flex items-center justify-center h-6 w-6 rounded-full bg-[#7DD756] text-white">
                    <svg
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                </div>
                <p className="ml-3 text-base font-medium text-gray-700">
                  {text}
                </p>
              </div>
            ))}
          </motion.div>

          <motion.div
            className="flex flex-wrap gap-4"
            variants={itemVariants}
          >
            <button className="px-8 py-3 bg-[#1D293D] hover:bg-[#1D293D]/90 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              Schedule Free Consultation
            </button>
            <button className="px-6 py-3 text-[#1D293D] font-semibold rounded-lg border-2 border-[#1D293D] hover:bg-[#1D293D]/5 transition-all duration-300 flex items-center">
              <svg
                className="w-5 h-5 mr-2"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                  clipRule="evenodd"
                />
              </svg>
              See How It Works
            </button>
          </motion.div>

          <motion.div
            className="grid grid-cols-3 gap-6 mt-12"
            variants={containerVariants}
          >
            {[
              {
                label: "Happy Customers",
                count: "100000+",
                icon: (
                  <svg
                    className="w-10 h-10 text-[#7DD756]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                ),
              },
              {
                label: "Expert Advisors",
                count: "3500+",
                icon: (
                  <svg
                    className="w-10 h-10 text-[#7DD756]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                ),
              },
              {
                label: "Branch Offices",
                count: "50+",
                icon: (
                  <svg
                    className="w-10 h-10 text-[#7DD756]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                    />
                  </svg>
                ),
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col items-center text-center"
                variants={statsVariants}
                whileHover={{ y: -5 }}
              >
                {item.icon}
                <h3 className="mt-4 text-2xl font-bold text-[#1D293D]">
                  {item.count}
                </h3>
                <p className="mt-1 text-gray-600">{item.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Right Consultation Form */}
        <motion.div
          className="relative"
          variants={{
            hidden: { opacity: 0, x: 50 },
            visible: {
              opacity: 1,
              x: 0,
              transition: { duration: 0.6, ease: "easeOut" },
            },
          }}
        >
          {/* Ribbon */}
          <div className="absolute -top-4 -right-4 z-10">
            <div className="relative bg-[#7DD756] text-white px-6 py-2 rounded-lg shadow-xl">
              <div className="text-center font-bold">
                <p className="text-sm leading-tight">
                  Upto <span className="text-yellow-200">50% OFF</span>
                </p>
                <p className="text-xs">Money Back Guarantee</p>
              </div>
              <div className="absolute -bottom-2 right-0 w-0 h-0 border-l-8 border-l-transparent border-t-8 border-t-[#7DD756] border-r-8 border-r-transparent"></div>
            </div>
          </div>

          {/* Form Container */}
          <div className="bg-white rounded-xl shadow-xl p-6 border border-gray-100 relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#1D293D] to-[#7DD756]"></div>
            <div className="absolute top-4 right-4 w-16 h-16 rounded-full bg-[#7DD756]/10 -z-1"></div>
            <div className="absolute bottom-4 left-4 w-12 h-12 rounded-full bg-[#1D293D]/10 -z-1"></div>

            <h3 className="text-2xl font-bold text-center text-[#1D293D] mb-6">
              Free Consultation by Expert
            </h3>

            <form className="space-y-4">
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#7DD756] focus:border-transparent transition-all duration-200"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#7DD756] focus:border-transparent transition-all duration-200"
                />
                <div className="flex overflow-hidden rounded-lg border border-gray-200 focus-within:ring-2 focus-within:ring-[#7DD756] focus-within:border-transparent transition-all duration-200">
                  <span className="px-4 py-3 bg-gray-100 text-gray-600">+91</span>
                  <input
                    type="tel"
                    placeholder="Mobile Number"
                    className="w-full px-4 py-3 bg-transparent focus:outline-none"
                  />
                </div>
                <select className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#7DD756] focus:border-transparent appearance-none bg-white transition-all duration-200">
                  <option>Select State</option>
                  <option>Delhi</option>
                  <option>Maharashtra</option>
                  <option>Karnataka</option>
                  <option>Tamil Nadu</option>
                </select>
              </div>

              <div className="flex items-center">
                <input
                  id="whatsapp-updates"
                  type="checkbox"
                  className="h-4 w-4 text-[#7DD756] focus:ring-[#7DD756] border-gray-300 rounded"
                />
                <label
                  htmlFor="whatsapp-updates"
                  className="ml-2 block text-sm text-gray-700 flex items-center"
                >
                  <svg
                    className="w-4 h-4 ml-1 text-green-500"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  <span className="ml-1">Receive updates on WhatsApp</span>
                </label>
              </div>

              <button
                type="submit"
                className="w-full py-3 px-6 bg-gradient-to-r from-[#1D293D] to-[#1D293D]/90 text-white font-bold rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105"
              >
                GET STARTED NOW
              </button>
            </form>

            <div className="mt-6 flex items-center justify-center">
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="ml-2 text-sm text-gray-600">
                Rated 4.9 by 42,817+ Customers
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;