'use client';
import React, { useState } from "react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const questions = [
    "What is an FSSAI state license?",
    "How can I get an FSSAI state license?",
    "Who require an FSSAI license?",
    "Can FSSAI impose a penalty?",
    "What happens if the state food license registration expires?",
    "What is the Importance of an FSSAI State License?",
    "Which Act makes food safety guidelines for FBOs?",
    "What happens after applying for an FSSAI state license?",
    "How much does it take to obtain an FSSAI State License?",
    "How do central & FSSAI state licenses differ?",
  ];

  const answers = [
    "An FSSAI state license is a mandatory requirement for food businesses to ensure food safety and compliance with standards set by FSSAI.",
    "To obtain an FSSAI state license, you need to submit an application, undergo a review, and have your premises inspected by FSSAI officials.",
    "Any food business operator (FBO) involved in manufacturing, storing, distributing, or selling food products needs an FSSAI license.",
    "Yes, FSSAI can impose penalties if an FBO fails to comply with food safety regulations.",
    "If the state food license registration expires, the business must apply for renewal to continue operations legally.",
    "An FSSAI State License ensures that the food products you manufacture or sell meet the required food safety standards and are safe for consumers.",
    "The Food Safety and Standards Act, 2006 governs the food safety guidelines for FBOs in India.",
    "After applying, your application will be reviewed by the FSSAI, and if approved, your license will be issued after inspection.",
    "The process of obtaining an FSSAI state license typically takes around 6-12 weeks, depending on the application and inspection timelines.",
    "Central licenses are issued for larger operations, while state licenses are for businesses operating within a particular state or region.",
  ];

  const handleToggle = (index: number) => {
    if (openIndex === index) {
      setOpenIndex(null); // Close the current question if it's already open
    } else {
      setOpenIndex(index); // Open the clicked question
    }
  };

  return (
    <div className="p-4 lg:p-8">
      <h2 className="text-2xl font-semibold mb-6">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {questions.map((question, index) => (
          <div key={index}>
            <button
              onClick={() => handleToggle(index)}
              className="w-full text-left p-4 bg-gray-100 rounded-md shadow-md hover:bg-gray-200 focus:outline-none"
            >
              <h3 className="text-xl font-semibold text-gray-800">{question}</h3>
            </button>
            {openIndex === index && (
              <div className="p-4 bg-gray-50 border-l-4 border-blue-500 rounded-md mt-2">
                <p className="text-gray-700">{answers[index]}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;