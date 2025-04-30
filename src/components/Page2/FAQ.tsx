"use client";
import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  faqs?: FAQItem[];
}

const FAQ: React.FC<FAQProps> = ({ faqs = [] }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const handleToggle = (idx: number) =>
    setOpenIndex(openIndex === idx ? null : idx);

  if (faqs.length === 0) return null;

  return (
    <div className="p-4 lg:p-8 max-w-4xl mx-auto">
      <h2 className="text-3xl font-extrabold text-center text-gray-800 mb-10">
        Frequently Asked Questions
      </h2>

      <div className="space-y-5">
        {faqs.map((faq, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div key={idx} className="border  overflow-hidden shadow-sm ">
              <button
                onClick={() => handleToggle(idx)}
                className="w-full flex justify-between items-center px-6 py-4 bg-white hover:bg-gray-50 focus:outline-none transition-all cursor-pointer"
              >
                <div className="text-sm font-medium text-gray-900 text-left">
                  {faq.question}
                </div>
                <span
                  className={`transition-transform duration-300 ${
                    isOpen ? "rotate-180" : ""
                  }`}
                >
                  {isOpen ? <ChevronUp size={22} /> : <ChevronDown size={22} />}
                </span>
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="bg-gray-50 border-t border-blue-100"
                  >
                    <div className="px-6 py-4">
                      <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FAQ;
