'use client';
import React, { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  faqs?: FAQItem[];
}

const FAQ: React.FC<FAQProps> = ({ faqs = [] }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  if (faqs.length === 0) {
    return null;
  }

  return (
    <div className="p-4 lg:p-8">
      <h2 className="text-2xl font-semibold mb-6">
        Frequently Asked Questions
      </h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index}>
            <button
              onClick={() => handleToggle(index)}
              className="w-full text-left p-4 bg-gray-100 rounded-md shadow-md hover:bg-gray-200 focus:outline-none"
            >
              <h3 className="text-xl font-semibold text-gray-800">
                {faq.question}
              </h3>
            </button>
            {openIndex === index && (
              <div className="p-4 bg-gray-50 border-l-4 border-blue-500 rounded-md mt-2">
                <p className="text-gray-700">{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;