"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Documentation from "./Documentation";
import FAQ from "./FAQ";
import FeeStructure from "./FeeStructure";
import Registration from "./Registration";
import Timeline from "./Timeline";
import Why from "./Why";

interface OverviewProps {
  overview: { heading: string; content: string }[];
  benefits?: {
    heading: string;
    content: string;
  }[];
  documentsRequired?: { heading: string; content: string }[];
  registrationProcedure?: { heading: string; content: string }[];
  feesStructure: {
    heading?: string;
    paymentMethods?: string[];
    description?: string;
    feeTable?: {
      category: string;
      amount: string;
    }[];
  }[];
  registrationTimeline: {
    heading: string;
    description?: string;
    steps?: {
      title: string;
      duration: string;
      description: string;
    }[];
    totalTime?: string;
  }[];
  whyUs?: {
    heading?: string;
    description?: string[];
    points?: string[];
    footerText?: string;
  }[];
  faq?: { question: string; answer: string }[];
}

const Overview: React.FC<OverviewProps> = ({
  overview,
  benefits = [],
  documentsRequired = [],
  registrationProcedure = [],
  feesStructure = [],
  registrationTimeline = [],
  whyUs = [],
  faq = [],
}) => {
  const [activeSection, setActiveSection] = useState("overview");
  const [sidebarRef, sidebarInView] = useInView({ threshold: 0.1 });
  const [formRef, formInView] = useInView({ threshold: 0.1 });

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setActiveSection(sectionId);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "overview",
        "benefits",
        "documents",
        "registration",
        "fees",
        "timeline",
        "whyus",
        "faq",
      ];

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
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
    <div className="flex flex-col lg:flex-row gap-8 p-4 lg:px-12 lg:py-8 max-w-7xl mx-auto">
      {/* Sticky Sidebar */}
      <motion.aside
        ref={sidebarRef}
        initial={{ opacity: 0, x: -20 }}
        animate={sidebarInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.5 }}
        className="lg:w-1/5 sticky top-[120px] h-fit bg-white p-6 rounded-xl shadow-sm border border-gray-100"
      >
        <h3 className="text-lg font-bold text-[#1D293D] mb-6 flex items-center gap-2">
          <svg
            className="w-5 h-5 text-[#7DD756]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
          Navigation
        </h3>
        <ul className="space-y-2">
          {[
            { id: "overview", label: "Overview", icon: "" },
            { id: "benefits", label: "Key Benefits", icon: "" },
            { id: "documents", label: "Required Documents", icon: "" },
            { id: "registration", label: "Registration Steps", icon: "" },
            { id: "fees", label: "Pricing Plans", icon: "" },
            { id: "timeline", label: "Process Timeline", icon: "" },
            { id: "whyus", label: "Why Choose Us", icon: "" },
            { id: "faq", label: "FAQs", icon: "" },
          ].map(({ id, label, icon }) => (
            <motion.li
              key={id}
              whileHover={{ x: 5 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => scrollToSection(id)}
              className={`cursor-pointer px-4 py-3 rounded-lg transition-all duration-200 flex items-center gap-3 ${
                activeSection === id
                  ? "bg-[#1D293D]/10 text-[#1D293D] font-semibold border-l-4 border-[#7DD756]"
                  : "text-gray-600 hover:bg-[#1D293D]/5 hover:text-[#1D293D]"
              }`}
            >
              <span className="text-lg">{icon}</span>
              <span className="text-sm">{label}</span>
            </motion.li>
          ))}
        </ul>
      </motion.aside>

      {/* Main Content */}
      <main className="lg:w-3/5 space-y-12">
        {/* Overview Section */}
        <motion.section
          id="overview"
          initial="hidden"
          animate="visible"
          variants={sectionVariants}
          className="bg-white p-8 rounded-xl shadow-sm border border-gray-100"
        >
          {overview.map((section, index) => (
            <div key={index} className="mb-8 last:mb-0">
              <motion.h2
                className="text-2xl font-bold text-[#1D293D] mb-4 relative inline-block"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <span className="relative z-10">{section.heading}</span>
                <span className="absolute bottom-0 left-0 w-full h-1 bg-[#7DD756]/40 z-0"></span>
              </motion.h2>
              <motion.p
                className="text-gray-700 leading-relaxed"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                {section.content}
              </motion.p>
            </div>
          ))}
        </motion.section>

        {/* Benefits Section */}
        {benefits?.[0]?.heading && (
  <motion.section
    id="benefits"
    initial="hidden"
    animate="visible"
    variants={sectionVariants}
    className="bg-white/90 backdrop-blur-sm p-8 rounded-xl shadow-sm border border-gray-100/70"
  >
    <div className="mb-8 last:mb-0">
      <motion.h2
        className="text-2xl font-bold text-[#1D293D]/90 mb-4 relative inline-block"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <span className="relative z-10">{benefits[0].heading}</span>
        <span className="absolute bottom-0 left-0 w-full h-1 bg-[#7DD756]/30 z-0"></span>
      </motion.h2>
      
      <div className="space-y-4">
        {benefits[0].content.split(". ").map(
          (benefit, i) =>
            benefit && (
              <motion.div
                key={i}
                className="flex items-start group"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 + i * 0.1 }}
              >
                <div className="flex-shrink-0 mt-1 mr-3">
                  <div className="flex items-center justify-center h-5 w-5 rounded-full bg-[#7DD756]/90 text-white/90 group-hover:bg-[#7DD756] group-hover:text-white transition-all">
                    <svg
                      className="h-3 w-3"
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
                <p className="text-gray-700/90 leading-relaxed group-hover:text-gray-700 transition-colors">
                  {benefit.trim()}.
                </p>
              </motion.div>
            )
        )}
      </div>
    </div>
  </motion.section>
)}

        {/* Documents Section */}
        <motion.section
          id="documents"
          initial="hidden"
          animate="visible"
          variants={sectionVariants}
        >
          <Documentation documents={documentsRequired} />
        </motion.section>

        {/* Registration Section */}
        <motion.section
          id="registration"
          initial="hidden"
          animate="visible"
          variants={sectionVariants}
        >
          <Registration procedure={registrationProcedure} />
        </motion.section>

        {/* Fees Section */}
        <motion.section
          id="fees"
          initial="hidden"
          animate="visible"
          variants={sectionVariants}
        >
          <FeeStructure fees={feesStructure} />
        </motion.section>

        {/* Timeline Section */}
        <motion.section
          id="timeline"
          initial="hidden"
          animate="visible"
          variants={sectionVariants}
        >
          <Timeline timeline={registrationTimeline} />
        </motion.section>

        {/* Why Us Section */}
        <motion.section
          id="whyus"
          initial="hidden"
          animate="visible"
          variants={sectionVariants}
        >
          <Why whyUs={whyUs} />
        </motion.section>

        {/* FAQ Section */}
        <motion.section
          id="faq"
          initial="hidden"
          animate="visible"
          variants={sectionVariants}
        >
          <FAQ faqs={faq} />
        </motion.section>
      </main>

      {/* Sticky Form */}
      <motion.aside
        ref={formRef}
        initial={{ opacity: 0, x: 20 }}
        animate={formInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.5 }}
        className="lg:w-1/5 sticky top-[120px] h-fit bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden"
      >
        {/* Ribbon */}
        <div className="absolute top-0 right-0 w-32 h-32 overflow-hidden">
          <div className="absolute top-0 right-0 w-48 h-8 bg-[#7DD756] transform rotate-45 translate-y-4 translate-x-12 flex items-center justify-center">
            <span className="text-xs font-bold text-white">50% OFF</span>
          </div>
        </div>

        <div className="p-2">
          <div className="text-center mb-6">
            <h3 className="text-xl font-bold text-[#1D293D] mt-2">
              Free Expert Consultation
            </h3>
            <p className="text-sm text-gray-500 mt-2">
              Get instant callback within 30 minutes
            </p>
          </div>

          <form className="space-y-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full border border-gray-200 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7DD756] focus:border-transparent transition-all"
              />
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  className="w-5 h-5 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </div>
            </div>

            <div className="relative">
              <input
                type="email"
                placeholder="Email Address"
                className="w-full border border-gray-200 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7DD756] focus:border-transparent transition-all"
              />
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  className="w-5 h-5 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
            </div>

            <div className="flex gap-2">
              <span className="flex items-center px-3 border border-gray-200 bg-gray-100 rounded-lg text-sm">
                +91
              </span>
              <input
                type="tel"
                placeholder="Mobile Number"
                className="w-full border border-gray-200 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7DD756] focus:border-transparent transition-all"
              />
            </div>

            <div className="relative">
              <select className="w-full border border-gray-200 px-4 py-3 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#7DD756] focus:border-transparent appearance-none bg-white">
                <option>Select State</option>
                <option>Delhi</option>
                <option>Maharashtra</option>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <svg
                  className="w-5 h-5 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </div>

            <div className="flex items-center">
              <input
                id="whatsapp-updates"
                type="checkbox"
                className="h-4 w-4 text-[#7DD756] focus:ring-[#7DD756] border-gray-300 rounded"
              />
              <label
                htmlFor="whatsapp-updates"
                className="ml-2 block text-sm text-gray-700"
              >
                Receive updates on WhatsApp
              </label>
            </div>

            <motion.button
              type="submit"
              className="w-full bg-gradient-to-r from-[#1D293D] to-[#1D293D]/90 text-white py-3 rounded-lg font-bold shadow-md hover:shadow-lg transition-all"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              GET STARTED NOW
            </motion.button>
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
      </motion.aside>
    </div>
  );
};

export default Overview;