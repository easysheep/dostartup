import React from "react";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";

const TalkToExpert: React.FC = () => {
  return (
    <div className="bg-white py-10 px-4 md:px-16">
      <h2 className="text-xl font-semibold text-gray-800 mb-8 border-l-4 border-yellow-500 pl-3">
        Talk to an Expert
      </h2>

      <div className="flex flex-col md:flex-row items-center md:items-start gap-10">
        {/* Expert Card */}
        <div className="bg-blue-900 text-white p-6 rounded-2xl w-full md:w-1/3 shadow-lg flex flex-col items-center">
          <img
            src="https://via.placeholder.com/80"
            alt="Expert"
            className="rounded-full w-20 h-20 mb-4"
          />
          <div className="text-center">
            <p className="text-sm">Expertise in</p>
            <p className="font-bold text-base mt-1">
              FSSAI State Level Registration
            </p>
            <p className="text-yellow-400 text-lg mt-3">
              ★★★★★ <span className="text-white text-sm">(4.8)</span>
            </p>

            <div className="flex flex-wrap gap-4 justify-center mt-5">
              <button className="bg-white text-blue-900 px-5 py-2 rounded-lg flex items-center gap-2 hover:bg-gray-100 transition">
                <FaPhoneAlt /> Call Now
              </button>
              <button className="bg-green-500 text-white px-5 py-2 rounded-lg flex items-center gap-2 hover:bg-green-600 transition">
                <FaWhatsapp /> Chat With Us
              </button>
            </div>
          </div>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full md:w-2/3">
          {[
            {
              step: "01",
              title: "Enquiry Form",
              desc: "Among Asia Top 100 Consulting Firm",
            },
            {
              step: "02",
              title: "Get Consultation",
              desc: "Lowest Fees 100,000+ Clients",
            },
            {
              step: "03",
              title: "Service Delivery",
              desc: "4.9 Rating | 50+ Offices",
            },
          ].map(({ step, title, desc }) => (
            <div key={step} className="text-center">
              <div className="bg-white border-2 border-blue-900 w-14 h-14 flex items-center justify-center text-blue-900 font-bold text-lg rounded-full mx-auto mb-3">
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
