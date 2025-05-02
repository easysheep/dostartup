// import { CheckCircle } from 'lucide-react';
// import FlipCard from "@/components/FlipCard";

// const cards = [
//     {
//       title: "Wrong Documentation",
//       shortText: "Avoid preparing wrong documentation, invoices, bills...",
//       backText: "The businesses must avoid preparation and record-keeping of wrong documentation, invoices, and bills of supply.",
//     },
//     {
//       title: "Inadequate Understanding of GST Composition Scheme",
//       shortText: "Improper understanding can cause issues...",
//       backText: "The businesses may suffer due to an improper understanding of the GST composition scheme.",
//     },
//     {
//       title: "Missing GST Return Deadlines",
//       shortText: "Avoid missing due dates for GST filing...",
//       backText: "Businesses must avoid ignoring/missing deadlines and due dates for filing GST returns in India.",
//     },
//     {
//       title: "Invoice Detail Inaccuracies",
//       shortText: "Ensure accurate invoice details...",
//       backText: "The businesses must avoid mistakes in the preparation of invoice details.",
//     },
//     {
//       title: "GSTR-2A and GSTR-3B Discrepancies",
//       shortText: "Ensure purchase records match returns...",
//       backText: "Businesses must avoid failure to reconcile purchase invoices with returns to prevent discrepancies.",
//     },
//     {
//       title: "Unverified GSTIN of Suppliers",
//       shortText: "Avoid using unverified GST numbers...",
//       backText: "The businesses must avoid providing unverified GSTIN of suppliers to avoid input tax credit issues.",
//     },
//   ];

// const point = [
//     "GST registration is mandatory for certain businesses to maintain legal, regulatory, and operational transparency in India.",
//     "The timeline for getting GST registration approval is 7 to 10 working days.",
//     "However, completing the entire registration process takes around 30 days.",
//     "The GST registration fees, starting with a range of Rs. 1999/-, vary from state to state.",
//     "However, the government charges no direct fees for obtaining a GST registration certificate online.",
//     "The factors influencing the GST registration charges are changes in government policies, state-specific fees, and the nature of business.",
// ];

// const benefit = [
//     "GST registration certificate legally allows businesses to levy and collect GST from their customers.",
//     "GST certificate authenticates businesses' ability to claim credits for the GST paid on their purchases and operational expenses.",
//     "Entities with GST certification find it easy to apply for and secure loans from financial institutions, as it serves as proof of their legitimacy.",
//     "Businesses with a GST certificate are authorized to participate in government tenders, as they represent adherence to tax compliance.",
//     "The GST Certificate not only boosts its goodwill but also earns the trust of consumers owing to its adherence to national tax laws.",
//   ];

// export default function Types(){
//     return(
//         <div id="types">
//             <section className="bg-white py-12 px-4 md:px-10">
//               <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
//                 {/* Image Side */}
//                 <div>
//                   <img
//                     src="https://corpbiz.io/img/feature_img.webp"
//                     alt="Woman holding GST certificate and graph"
//                     className="w-[60%] h-auto"
//                   />
//                 </div>

//                 {/* Text Content Side */}
//                 <div>
//                   <h2 className="text-2xl md:text-3xl font-semibold mb-3">
//                     Role of GST Registration Certificate
//                   </h2>
//                   <p className="text-gray-600 mb-6">
//                     The following are the crucial role of the GST registration certificate, as specified below:
//                   </p>

//                   <ul className="space-y-4 text-gray-700 text-sm">
//                     {benefit.map((benefit, index) => (
//                       <li key={index} className="flex items-start gap-3">
//                         <span className="text-yellow-500 text-lg mt-1">✔️</span>
//                         <span>{benefit}</span>
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//               </div>
//             </section>
//             <section className="bg-gray-50 py-14 px-6 md:px-20">
//               <div className="text-center mb-10">
//                 <h2 className="text-2xl font-bold mb-1">
//                   Common Mistakes to Avoid During GST Registration
//                 </h2>
//                 <p className="text-gray-600">
//                   Some of the common mistakes to be avoided by businesses during GST registration are as discussed below:
//                 </p>
//               </div>

//               <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//                 {cards.map((card, index) => (
//                   <FlipCard
//                     key={index}
//                     title={card.title}
//                     shortText={card.shortText}
//                     backText={card.backText}
//                   />
//                 ))}
//               </div>
//             </section>
           
//             <div className="max-w-6xl mx-auto px-4 py-10">
//               <h2 className="text-2xl font-bold text-center mb-2">Difference Between GST and Income Tax</h2>
//               <p className="text-center text-gray-600 mb-6">
//                 The table below provided specifies the difference between GST and <a href="#" className="text-blue-600 underline">income tax</a>:
//               </p>

//               <div className="overflow-x-auto">
//                 <table className="w-full table-auto border-collapse">
//                   <thead>
//                     <tr className="bg-blue-900 text-white text-left">
//                       <th className="p-3">S. No.</th>
//                       <th className="p-3">GST (Goods and Services Tax)</th>
//                       <th className="p-3">Income Tax</th>
//                     </tr>
//                   </thead>
//                   <tbody className="text-gray-800 text-sm">
//                     <tr className="even:bg-gray-100">
//                       <td className="p-3">1.</td>
//                       <td className="p-3">It is an indirect tax.</td>
//                       <td className="p-3">It is a direct tax.</td>
//                     </tr>
//                     <tr className="even:bg-gray-100">
//                       <td className="p-3">2.</td>
//                       <td className="p-3">It is imposed on the consumption of goods and services.</td>
//                       <td className="p-3">It is imposed on income from annual salary, capital gains, and house property, etc.</td>
//                     </tr>
//                     <tr className="even:bg-gray-100">
//                       <td className="p-3">3.</td>
//                       <td className="p-3">It must be filed monthly, quarterly, and even annually.</td>
//                       <td className="p-3">It must be filed annually, once a year.</td>
//                     </tr>
//                     <tr className="even:bg-gray-100">
//                       <td className="p-3">4.</td>
//                       <td className="p-3">Levied and collected by both the Central and State governments.</td>
//                       <td className="p-3">Levied and collected only by the Central government.</td>
//                     </tr>
//                     <tr className="even:bg-gray-100">
//                       <td className="p-3">5.</td>
//                       <td className="p-3">Mandatory registration required for businesses exceeding an annual turnover above Rs. 40 lakhs.</td>
//                       <td className="p-3">Anyone with annual income above Rs. 3 lakhs must make payment of income tax returns.</td>
//                     </tr>
//                   </tbody>
//                 </table>
//               </div>
//             </div>

//             <div className="max-w-7xl mx-auto px-4 py-12 flex flex-col-reverse md:flex-row items-center gap-10">
      
//               {/* Text Section */}
//               <div className="flex-1">
//                 <h2 className="text-2xl font-bold mb-2">Timeline and Fees for GST Registration</h2>
//                 <p className="text-sm text-gray-700 mb-6">
//                   <span className="text-blue-600 font-medium">Have a look over the timeline and fees required for GST registration in India, as described below:</span>
//                 </p>

//                 <ul className="space-y-4 mb-6">
//                   {point.map((point, idx) => (
//                     <li key={idx} className="flex items-start text-gray-800">
//                       <CheckCircle className="text-blue-600 w-5 h-5 mt-1 mr-2 shrink-0" />
//                       <span>{point}</span>
//                     </li>
//                   ))}
//                 </ul>

//                 <button className="bg-[#00B377] hover:bg-orange-600 text-white font-medium px-5 py-2 rounded shadow">
//                   Get started with CorpBIZ
//                 </button>
//               </div>

//               {/* Image Section */}
//               <div className="flex-1 flex justify-center">
//                 <img
//                   src="https://corpbiz.io/img/img4.webp"
//                   alt="GST Registration Illustration"
//                   className="max-w-sm w-full"
//                 />
//               </div>
//             </div>
//         </div>
//     )
// }









'use client';
// import '../styles/globals.css'
import React from 'react';
import { CheckCircle2, AlertTriangle, ArrowRight } from 'lucide-react';
import FlipCard from '@/components/FlipCard';
import { motion } from 'framer-motion';

export interface TypesData {
  cards: { title: string; shortText: string; backText: string }[];
  roleBenefits: string[];
  differenceTable: { serialNumber: string; gst: string; incomeTax: string }[];
  timelineFees: string[];
}
export interface TypesProps {
  data: TypesData;
}

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

const staggerContainer = {
  visible: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function Types({ data }: TypesProps) {
  const { cards, roleBenefits, differenceTable, timelineFees } = data;
  
  return (
    <div id="types" className="bg-gradient-to-b from-gray-50 to-white">
      {/* Role of GST Section */}
      <section className="py-24 px-4 md:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#7AD95510_1px,transparent_1px)] [background-size:16px_16px]" />
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeIn}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-[#7AD955] to-[#1D293D] rounded-3xl opacity-30 blur-xl group-hover:opacity-40 transition-all duration-500"></div>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white transform group-hover:-translate-y-1 transition-transform duration-300">
                <img 
                  src="https://corpbiz.io/img/feature_img.webp" 
                  alt="GST certificate" 
                  className="w-full max-w-md object-cover transition-transform duration-500 group-hover:scale-105" 
                />
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeIn}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="inline-block bg-[#1D293D]/10 text-[#1D293D] px-4 py-1.5 rounded-full mb-6 font-medium text-sm">
              Why It Matters
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-[#1D293D] leading-tight">
              The Essential Role of Your <span className="text-[#7AD955]">GST Registration</span>
            </h2>
            <motion.ul 
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-6"
            >
              {roleBenefits.map((b, i) => (
                <motion.li 
                  key={i} 
                  variants={fadeIn}
                  className="flex items-start gap-5 group"
                >
                  <div className="w-10 h-10 bg-gradient-to-br from-[#7AD955] to-emerald-500 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5 shadow-md group-hover:shadow-lg transition-shadow">
                    <CheckCircle2 className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-gray-700 group-hover:text-[#1D293D] transition-colors text-lg leading-relaxed">
                    {b}
                  </span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </div>
      </section>

      {/* Common Mistakes Section */}
      <section className="py-24 px-4 md:px-8 bg-white relative overflow-hidden">
  {/* Decorative background elements */}
  <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-center opacity-5" />
  <div className="absolute -right-20 -top-20 w-64 h-64 rounded-full bg-[#7AD955]/10 blur-3xl" />
  <div className="absolute -left-20 -bottom-20 w-64 h-64 rounded-full bg-[#1D293D]/10 blur-3xl" />

  {/* Section header */}
  <motion.div
    initial="hidden"
    whileInView="visible"
    variants={fadeIn}
    viewport={{ once: true }}
    className="max-w-4xl mx-auto text-center mb-16 relative"
  >
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="inline-flex items-center gap-3 mb-6 bg-gradient-to-r from-[#1D293D] to-[#7AD955] text-white px-6 py-2.5 rounded-full shadow-lg transition-all duration-300"
    >
      <AlertTriangle className="w-5 h-5" />
      <span className="font-medium tracking-wide">Avoid These Mistakes</span>
    </motion.div>
    <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#1D293D]">
      Common <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7AD955] to-emerald-600">Pitfalls</span> in GST
    </h2>
    <p className="text-gray-500/90 text-lg max-w-2xl mx-auto">
      Steering clear of these errors can save you time, money, and legal complications
    </p>
  </motion.div>

  {/* Cards grid */}
  <motion.div
    variants={staggerContainer}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-100px" }}
    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto relative"
  >
    {cards.map((card, idx) => (
      <motion.div 
        key={idx} 
        variants={fadeIn}
        whileHover={{ y: -8 }}
        className="group perspective-1000"
      >
        <div className="relative h-full transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-[#7AD955]/20 rounded-2xl">
          <FlipCard 
            title={card.title}
            shortText={card.shortText}
            backText={card.backText}
            accentColor="#7AD955"
            textColor="#1D293D"
            className="border border-gray-200/50 hover:border-[#7AD955]/30 transition-all duration-300"
            frontClassName="bg-gradient-to-br from-white to-gray-50"
            backClassName="bg-gradient-to-br from-[#1D293D] to-gray-900 text-white"
            icon={<AlertTriangle className="w-6 h-6 text-[#7AD955]" />}
          />
          
          {/* Decorative glow effect */}
          <div className="absolute inset-0 rounded-2xl pointer-events-none overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#7AD955_0%,transparent_70%)] opacity-0 group-hover:opacity-10 transition-opacity duration-500" />
          </div>
        </div>
      </motion.div>
    ))}
  </motion.div>

  {/* Floating decorative elements */}
  <div className="absolute left-1/4 top-1/3 w-6 h-6 rounded-full bg-[#7AD955] blur-xl opacity-20 animate-float" />
  <div className="absolute right-1/3 bottom-1/4 w-8 h-8 rounded-full bg-[#1D293D] blur-xl opacity-20 animate-float-delay" />
</section>

      {/* Comparison Table Section */}
      <section className="py-24 px-4 md:px-8 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#7AD955] to-[#1D293D]" />
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeIn}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto relative"
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#1D293D]">
              GST vs. <span className="text-[#7AD955]">Income Tax</span>
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              Key differences that every business owner should understand
            </p>
          </div>

          <div className="overflow-hidden rounded-3xl shadow-2xl border border-gray-200/50 backdrop-blur-sm bg-white/50">
            <table className="w-full table-auto border-collapse">
              <thead>
                <tr className="bg-gradient-to-r from-[#1D293D] to-[#7AD955] text-white text-left">
                  <th className="p-6 font-semibold text-lg rounded-tl-3xl">S. No.</th>
                  <th className="p-6 font-semibold text-lg">GST</th>
                  <th className="p-6 font-semibold text-lg rounded-tr-3xl">Income Tax</th>
                </tr>
              </thead>
              <tbody>
                {differenceTable.map((row, i) => (
                  <tr 
                    key={i} 
                    className={`border-b border-gray-200/50 ${i % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'}`}
                  >
                    <td className="p-6 font-medium text-[#1D293D]">{row.serialNumber}</td>
                    <td className="p-6 text-gray-700">{row.gst}</td>
                    <td className="p-6 text-gray-700">{row.incomeTax}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </section>

      {/* Timeline Section */}
      <section className="py-24 px-4 md:px-8 bg-white relative">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 relative">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex-1"
          >
            <div className="inline-block bg-[#7AD955]/10 text-[#7AD955] px-4 py-1.5 rounded-full mb-6 font-medium text-sm">
              Process Overview
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-[#1D293D] leading-tight">
              Streamlined <span className="text-[#7AD955]">GST Registration</span> Process
            </h2>
            
            <motion.ul 
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-6 mb-12"
            >
              {timelineFees.map((t, i) => (
                <motion.li 
                  key={i} 
                  variants={fadeIn}
                  className="flex items-start gap-5 group"
                >
                  <div className="w-10 h-10 bg-gradient-to-br from-[#1D293D] to-[#7AD955] rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5 shadow-md">
                    <div className="text-white font-bold">{i + 1}</div>
                  </div>
                  <span className="text-gray-700 group-hover:text-[#1D293D] transition-colors text-lg leading-relaxed">
                    {t}
                  </span>
                </motion.li>
              ))}
            </motion.ul>

            <motion.button
              whileHover={{ scale: 1.03, boxShadow: "0 10px 25px -5px rgba(122, 217, 85, 0.3)" }}
              whileTap={{ scale: 0.98 }}
              className="relative overflow-hidden group bg-gradient-to-r from-[#7AD955] to-emerald-500 hover:from-[#1D293D] hover:to-[#7AD955] text-white font-semibold px-10 py-5 rounded-xl shadow-lg transition-all duration-500"
            >
              <span className="relative z-10 flex items-center gap-2">
                Get Started with CorpBiz 
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-[#1D293D] to-[#7AD955] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex-1 flex justify-center"
          >
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-[#7AD955] to-[#1D293D] rounded-3xl opacity-20 blur-xl group-hover:opacity-30 transition-all duration-500"></div>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white transform group-hover:-translate-y-1 transition-transform duration-300">
                <img 
                  src="https://corpbiz.io/img/img4.webp" 
                  alt="GST illustration" 
                  className="w-full max-w-md object-cover transition-transform duration-500 group-hover:scale-105" 
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}