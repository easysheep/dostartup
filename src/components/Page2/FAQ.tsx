"use client";
import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  faqs?: FAQItem[];
}

const FAQ: React.FC<FAQProps> = ({ faqs = [] }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const handleToggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  if (faqs.length === 0) return null;

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={{
        hidden: { opacity: 0 },
        visible: { 
          opacity: 1,
          transition: { duration: 0.6, ease: "easeOut" }
        }
      }}
      className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 max-w-4xl mx-auto"
    >
      {/* Heading Section */}
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        animate={inView ? { 
          opacity: 1, 
          y: 0,
          transition: { delay: 0.2 }
        } : { opacity: 0, y: 10 }}
        className="text-2xl font-bold text-[#1D293D] mb-8 text-center relative inline-block"
      >
        <span className="relative z-10">Frequently Asked Questions</span>
        <motion.span 
          initial={{ scaleX: 0 }}
          animate={inView ? { 
            scaleX: 1,
            transition: { delay: 0.3, duration: 0.4 }
          } : { scaleX: 0 }}
          className="absolute bottom-0 left-0 w-full h-1 bg-[#7DD756]/40 z-0 origin-left"
        />
      </motion.h2>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={inView ? { 
          opacity: 1,
          transition: { delay: 0.4 }
        } : { opacity: 0 }}
        className="space-y-4"
      >
        {faqs.map((faq, idx) => {
          const isOpen = openIndex === idx;
          return (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { 
                opacity: 1, 
                y: 0,
                transition: { delay: 0.5 + idx * 0.1 }
              } : { opacity: 0, y: 10 }}
              className="border border-gray-200 rounded-lg overflow-hidden shadow-sm"
            >
              <motion.button
                onClick={() => handleToggle(idx)}
                className="w-full flex justify-between items-center px-6 py-4 bg-white hover:bg-gray-50 focus:outline-none transition-all cursor-pointer"
                whileHover={{ backgroundColor: "rgba(249, 250, 251, 1)" }}
              >
                <div className="text-base font-medium text-[#1D293D] text-left">
                  {faq.question}
                </div>
                <motion.span
                  animate={{ rotate: isOpen ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {isOpen ? (
                    <ChevronUp size={22} className="text-[#7DD756]" />
                  ) : (
                    <ChevronDown size={22} className="text-[#1D293D]" />
                  )}
                </motion.span>
              </motion.button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ 
                      height: "auto", 
                      opacity: 1,
                      transition: { 
                        height: { duration: 0.3 },
                        opacity: { duration: 0.2, delay: 0.1 }
                      }
                    }}
                    exit={{ 
                      height: 0, 
                      opacity: 0,
                      transition: { 
                        height: { duration: 0.2 },
                        opacity: { duration: 0.1 }
                      }
                    }}
                    className="bg-gray-50 border-t border-gray-200"
                  >
                    <div className="px-6 py-4">
                      <p className="text-gray-700 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </motion.div>
    </motion.div>
  );
};

export default FAQ;