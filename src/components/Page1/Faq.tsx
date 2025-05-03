// 'use client';
// import { useState, useEffect, useRef } from "react";
// import { ChevronDown, ChevronUp } from "lucide-react";
// import { motion, useAnimation } from 'framer-motion';

// const services = [
//     {
//       title: "Simplified Registration",
//       desc: "We at Corpbiz have successfully processed and simplified around 5000+ GST registration applications in India.",
//     },
//     {
//       title: "High Success Rate",
//       desc: "We at Corpbiz guarantee a 99% business success rate while obtaining a GST registration certificate in India.",
//     },
//     {
//       title: "Simplify Documentation",
//       desc: "We at Corpbiz assist in simplifying the documentation required to obtain a GST registration certificate in India.",
//     },
//     {
//       title: "Legal Advice",
//       desc: "Corpbiz provides legal advice and regular updates to simplify the legal necessities for securing GST registration in India.",
//     },
//     {
//       title: "End-to-End Solutions",
//       desc: "We at Corpbiz provide end-to-end solutions to address queries related to GST registration in India.",
//     },
//     {
//       title: "Affordable Pricing",
//       desc: "Corpbiz offers 100% affordable and transparent pricing for GST registration services in India.",
//     },
//     {
//       title: "Reduces Compliance Buden",
//       desc: "We at Corpbiz ensure that the compliance burden is reduced by up to 30%.",
//     },
//     {
//       title: "10+ Years of Extensive Experience",
//       desc: "We at Corpbiz possess an experienced team with extensive knowledge and an in-depth understanding.",
//     },
//     {
//       title: "24/7 Customer Support",
//       desc: "Corpbiz offers 24/7 customer support assistance to address compliance-related concerns or queries.",
//     },
// ];

// const faqs = [
//       {
//         question: "What is GST?",
//         answer: "GST stands for Goods and Services Tax. It is a comprehensive, multi-stage, destination-based tax that is levied on every value addition.",
//       },
//       {
//         question: "In which cases GST registration is crucial?",
//         answer: "GST registration is crucial for businesses exceeding the threshold limit, e-commerce sellers, and inter-state suppliers.",
//       },
//       {
//         question: "Will I need to upload my photograph for GST registration?",
//         answer: "Yes, uploading a recent photograph is mandatory for individuals and proprietors applying for GST registration.",
//       },
//       {
//         question: "I am an e-commerce operator registered as a TCS under the GST regime. I’m involved in supplying goods to multiple states. Do I have to register in each state?",
//         answer: "Yes, e-commerce operators must register in each state where they supply goods.",
//       },
//       {
//         question: "Is GST registration mandatory in India?",
//         answer: "Yes, it is mandatory if your business turnover exceeds the specified threshold or if you fall under specific categories.",
//       },
//       {
//         question: "Is a GST certificate mandatory?",
//         answer: "Yes, it acts as proof of GST registration and is required for tax compliance.",
//       },
// ];

// const testimonials = [
//     {
//       name: "Anjali Bhardwaj",
//       title: "Getting GST registration done",
//       feedback:
//         "Getting my GST registration done with Corpbiz was a great experience. Their team is knowledgeable and took care of everything efficiently.",
//     },
//     {
//       name: "Ajay Pratap",
//       title: "GST registration process smooth and simple",
//       feedback:
//         "Corpbiz made the GST registration process smooth and simple. They handled everything, and I didn’t have to stress about any of the paperwork.",
//     },
//     {
//       name: "Rajesh Singh",
//       title: "Impressed for my GST registration",
//       feedback:
//         "I was really impressed with Corpbiz for my GST registration. Their team is professional and made the whole process easy to understand.",
//     },
//     {
//       name: "Ajay Pratap",
//       title: "GST registration process smooth and simple",
//       feedback:
//         "Corpbiz made the GST registration process smooth and simple. They handled everything, and I didn’t have to stress about any of the paperwork.",
//     },
//     {
//       name: "Rajesh Singh",
//       title: "Impressed for my GST registration",
//       feedback:
//         "I was really impressed with Corpbiz for my GST registration. Their team is professional and made the whole process easy to understand.",
//     }
//   ];

// export default function Faq() {

//     const [activeIndex, setActiveIndex] = useState(null);

//     const toggleAccordion = (index:any) => {
//       setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
//     };
  
//     return (
//     <div>
//       <section className="bg-white py-16 px-4 max-w-7xl mx-auto">
//         <h2 className="text-2xl md:text-3xl font-semibold text-center mb-12">
//           Why Trust Corpbiz for GST Registration Certificate?
//         </h2>
  
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//           {services.map((service, index) => (
//             <div
//               key={index}
//               className="border rounded-lg p-5 shadow-sm hover:shadow-md transition"
//             >
//               <div className="mb-4">
//                 <img
//                   src="https://corpbiz.io/img/adv_icon1.webp"
//                   alt="Icon"
//                   className="w-10 h-10"
//                 />
//               </div>
//               <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
//               <p className="text-sm text-gray-600">{service.desc}</p>
//             </div>
//           ))}
//         </div>
//       </section>
//       <section className="max-w-6xl mx-auto px-4 py-16">
//             <h2 className="text-2xl md:text-3xl font-semibold text-center">
//               Frequently Asked Questions on GST Registration
//             </h2>
//             <p className="text-center text-gray-500 mt-2 mb-10">
//               Have a look at the answers to the most asked questions.
//             </p>

//             <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
//               <div className="md:col-span-4 flex justify-center">
//                 <img
//                   src="https://corpbiz.io/img/adv_icon1.webp"
//                   alt="FAQ Illustration"
//                   className="w-64"
//                 />
//               </div>
//               <div className="md:col-span-8">
//                 {faqs.map((faq, index) => (
//                   <div
//                     key={index}
//                     className="border-b py-4 cursor-pointer transition-all"
//                     onClick={() => toggleAccordion(index)}
//                   >
//                     <div className="flex justify-between items-center">
//                       <h3 className="text-base font-medium">{faq.question}</h3>
//                       {activeIndex === index ? (
//                         <ChevronUp className="w-5 h-5" />
//                       ) : (
//                         <ChevronDown className="w-5 h-5" />
//                       )}
//                     </div>
//                     {activeIndex === index && (
//                       <p className="mt-2 text-sm text-gray-600">{faq.answer}</p>
//                     )}
//                   </div>
//                 ))}
//               </div>
//             </div>
//       </section>

//     </div>
//     );
//   }


















'use client';
import React, { useState } from 'react';
import { ChevronDown, ChevronUp, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export interface ServiceItem {
  title: string;
  desc: string;
}
export interface FaqItem {
  question: string;
  answer: string;
}
export interface ServicesFaqProps {
  services: ServiceItem[];
  faqs: FaqItem[];
}

export default function ServicesFaq({ services, faqs }: ServicesFaqProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  
  return (
    <div className="bg-[#0F172A]">
      {/* Services Section */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#7AD955] to-[#1D293D] mb-4">
            Why Trust Corpbiz for GST Registration Certificate?
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Professional services with guaranteed satisfaction
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((srv, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-[#1D293D] rounded-xl p-8 border border-[#1D293D] hover:border-[#7AD955] transition-all duration-300 hover:-translate-y-2 shadow-lg"
            >
              <div className="w-14 h-14 bg-[#7AD955] rounded-full flex items-center justify-center mb-6">
                <CheckCircle2 className="w-6 h-6 text-[#1D293D]" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">{srv.title}</h3>
              <p className="text-gray-400">{srv.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="max-w-6xl mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-400">
            Have a look at the answers to the most asked questions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 flex items-center">
          <div className="md:col-span-7 space-y-4">
            {faqs.map((faq, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: idx * 0.1 }}
                viewport={{ once: true }}
                onClick={() => setActiveIndex(activeIndex === idx ? null : idx)}
                className={`bg-[#1D293D] rounded-lg p-6 cursor-pointer transition-all ${activeIndex === idx ? 'border-l-4 border-[#7AD955]' : ''}`}
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-medium text-white">{faq.question}</h3>
                  {activeIndex === idx ? (
                    <ChevronUp className="w-5 h-5 text-[#7AD955]" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-400" />
                  )}
                </div>
                <AnimatePresence>
                  {activeIndex === idx && (
                    <motion.p
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="mt-4 text-gray-400 overflow-hidden"
                    >
                      {faq.answer}
                    </motion.p>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}