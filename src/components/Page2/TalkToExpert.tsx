import React from "react";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";

const TalkToExpert: React.FC = () => {
  return (
    <div className="bg-white py-8 px-4 md:px-16">
      <h2 className="text-xl font-semibold text-gray-800 mb-6 border-l-4 border-yellow-500 pl-2">Talk to an Expert</h2>
      <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
        {/* Expert Card */}
        <div className="bg-blue-900 text-white p-6 rounded-xl w-full md:w-1/3 flex flex-col items-center">
          <img
            src="https://via.placeholder.com/80"
            alt="Expert"
            className="rounded-full w-20 h-20 mb-3"
          />
          <div className="text-center">
            <p className="font-medium">Expertise in <span className="font-bold">FSSAI State Level Registration</span></p>
            <p className="text-yellow-400 text-lg mt-2">★★★★★ <span className="text-white text-sm">(4.8)</span></p>
            <div className="flex gap-4 mt-4">
              <button className="bg-white text-blue-900 px-4 py-2 rounded flex items-center gap-2">
                <FaPhoneAlt /> Call Now
              </button>
              <button className="bg-green-500 text-white px-4 py-2 rounded flex items-center gap-2">
                <FaWhatsapp /> Chat With Us
              </button>
            </div>
          </div>
        </div>

        {/* Steps */}
        <div className="flex flex-col md:flex-row justify-between w-full md:w-2/3 gap-8">
          {[
            {
              step: "01",
              title: "Enquiry Form",
              desc: "Among Asia Top 100 Consulting Firm"
            },
            {
              step: "02",
              title: "Get Consultation",
              desc: "Lowest Fees 100,000 + Clients."
            },
            {
              step: "03",
              title: "Service Delivery",
              desc: "4.9 Customer Rating 50+ Offices"
            }
          ].map(({ step, title, desc }) => (
            <div key={step} className="text-center">
              <div className="bg-white border border-blue-900 w-14 h-14 flex items-center justify-center text-blue-900 font-bold rounded-full mx-auto mb-2">
                {step}
              </div>
              <h3 className="font-semibold text-blue-900 text-lg">{title}</h3>
              <p className="text-sm text-gray-600 mt-1">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TalkToExpert;