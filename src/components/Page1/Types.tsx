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
import React from 'react';
import { CheckCircle } from 'lucide-react';
import FlipCard from '@/components/FlipCard';

export interface TypesData {
  cards: { title: string; shortText: string; backText: string }[];
  roleBenefits: string[];
  differenceTable: { serialNumber: string; gst: string; incomeTax: string }[];
  timelineFees: string[];
}
export interface TypesProps {
  data: TypesData;
}

export default function Types({ data }: TypesProps) {
  const { cards, roleBenefits, differenceTable, timelineFees } = data;
  return (
    <div id="types">
      <section className="bg-white py-12 px-4 md:px-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div><img src="https://corpbiz.io/img/feature_img.webp" alt="GST certificate" className="w-[60%] h-auto" /></div>
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold mb-3">Role of GST Registration Certificate</h2>
            <ul className="space-y-4 text-gray-700 text-sm">
              {roleBenefits.map((b, i) => (<li key={i} className="flex items-start gap-3"><span className="text-yellow-500 text-lg mt-1">✔️</span><span>{b}</span></li>))}
            </ul>
          </div>
        </div>
      </section>
      <section className="bg-gray-50 py-14 px-6 md:px-20">
        <div className="text-center mb-10"><h2 className="text-2xl font-bold mb-1">Common Mistakes to Avoid During GST Registration</h2><p className="text-gray-600">Some common mistakes to avoid:</p></div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card, idx) => (<FlipCard key={idx} title={card.title} shortText={card.shortText} backText={card.backText} />))}
        </div>
      </section>
      <div className="max-w-6xl mx-auto px-4 py-10">
        <h2 className="text-2xl font-bold text-center mb-2">Difference Between GST and Income Tax</h2>
        <div className="overflow-x-auto">
          <table className="w-full table-auto border-collapse">
            <thead><tr className="bg-blue-900 text-white text-left"><th className="p-3">S. No.</th><th className="p-3">GST</th><th className="p-3">Income Tax</th></tr></thead>
            <tbody>
              {differenceTable.map((row, i) => (
                <tr key={i} className="even:bg-gray-100"><td className="p-3">{row.serialNumber}</td><td className="p-3">{row.gst}</td><td className="p-3">{row.incomeTax}</td></tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 py-12 flex flex-col-reverse md:flex-row items-center gap-10">
        <div className="flex-1">
          <h2 className="text-2xl font-bold mb-2">Timeline and Fees for GST Registration</h2>
          <ul className="space-y-4 mb-6">{timelineFees.map((t, i) => (<li key={i} className="flex items-start text-gray-800"><CheckCircle className="text-blue-600 w-5 h-5 mt-1 mr-2 shrink-0" />{t}</li>))}</ul>
          <button className="bg-[#00B377] hover:bg-orange-600 text-white font-medium px-5 py-2 rounded shadow">Get started with CorpBIZ</button>
        </div>
        <div className="flex-1 flex justify-center"><img src="https://corpbiz.io/img/img4.webp" alt="GST illustration" className="max-w-sm w-full" /></div>
      </div>
    </div>
  );
}
