"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface Benefit {
  id: number;
  title: string;
  content: string;
}

const benefits: Benefit[] = [
  {
    id: 1,
    title: "Legal Identity & Protection",
    content:
      "A partnership firm is registered and thereby given legal status. This affords proof of its existence in a court of law. First, it separates the business entity from the partners, ensuring safety of their possessions in case debts or litigations arise as a consequence of business activities.",
  },
  {
    id: 2,
    title: "Formalization of Business Relationship",
    content:
      "The registration of a partnership brings to bear all the legal implications. This helps define what is the function of each partner reducing all misunderstanding and preventing future disputes. The written agreement ensures all partners are aware of their specific roles and duties unambiguously.",
  },
  {
    id: 3,
    title: "Wide Business Opportunities",
    content:
      "Mostly clients, investors, and banks prefer to transact with registered firms. While registered partnerships make it easier for businesses to acquire trust, they also improve the contracts, financing options, and collaboration against which the businesses should grow opportunities.",
  },
  {
    id: 4,
    title: "Flexible Decision Making",
    content:
      "In terms of decision-making, partnership is more flexible since every partners thought and idea can contribute to something valuable; they don't have to follow so many legal rules as other companies do, and this makes running the business smoother and much faster.",
  },
  {
    id: 5,
    title: "Tax Benefits",
    content:
      "The profits of a partnership firm get taxed only once — in the hands of the partners. This means no double taxation exists, unlike the company, which makes it more compassionate while paying taxes.",
  },
  {
    id: 6,
    title: "Cost-Effective",
    content:
      "Setting up a partnership firm online does not cost an arm and a leg. Its procedure is simple, quick, and requires less paperwork. With fewer legal provisions, you also incur less in the name of ongoing compliance and legal formalities.",
  },
  {
    id: 7,
    title: "Specialized Aptitudes",
    content:
      "Every partner brings unique experience and skills into the business. As a result, due to this diversity, the firm would generate a more creative and efficient solution through which problems would be solved, tasks would be managed, and decisions would be made for the growth of the business in the long run.",
  },
  {
    id: 8,
    title: "Improved Borrowing Capacity",
    content:
      "Banks and other financial institutions would most likely give loans to a registered firm partly because of the official registration that the firm would have made it look so reliable and hence raised up its chances for getting funds in times of need.",
  },
];

export default function PartnershipFirmRegistration() {
  const [progress, setProgress] = useState(0);

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    const scrollHeight = document.body.scrollHeight - window.innerHeight;
    const progressValue = (scrollTop / scrollHeight) * 100;
    setProgress(progressValue);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="flex flex-col md:flex-row bg-gray-50">
      {/* Left Panel */}
      <div className="md:w-1/3 sticky top-0 h-screen flex flex-col gap-6 justify-center items-center p-6 bg-white shadow-md z-10">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-[#1D293D] text-center"
        >
          Benefits of Partnership Firm Online Registration
        </motion.h2>

        <div className="w-3 h-72 bg-gray-200 rounded-full relative overflow-hidden">
          <motion.div
            animate={{ height: `${progress}%` }}
            transition={{ ease: "easeOut", duration: 0.4 }}
            className="absolute top-0 w-3 bg-[#7CD955] rounded-full"
          />
        </div>
      </div>

      {/* Right Panel */}
      <div className="md:w-2/3 p-6 space-y-24 mt-[100px]">
        {benefits.map((b) => {
          const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });
          const controls = useAnimation();

          useEffect(() => {
            if (inView) controls.start("visible");
          }, [inView, controls]);

          return (
            <motion.div
              key={b.id}
              ref={ref}
              initial="hidden"
              animate={controls}
              variants={fadeInUp}
              className="min-h-[60vh] bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300"
            >
              <h3 className="text-2xl font-semibold text-[#1D293D] mb-4">{b.title}</h3>
              <p className="text-gray-700 leading-relaxed text-lg">{b.content}</p>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
