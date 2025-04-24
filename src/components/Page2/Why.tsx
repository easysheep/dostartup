import React from "react";

const Why = () => {
    const points = [
        "Conduct Thorough Assessments to Ensure Compliance with State-specific Regulations",
        "Expand your Business Potential with our 10+ Years of Expertise in FSSAI Services",
        "99% Success Rate in Approval of FSSAI Applications in One Go",
        "Enhance your Brand’s Credibility and Market Presence with a Valid FSSAI State License",
        "Benefit from Seamless Application Processing and a Hassle-free Licensing Experience",
      ];

    return (
    <div className="p-4 lg:p-8 bg-gray-50">
      <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">
        Why Choose Corpbiz for FSSAI State Food License Registration?
      </h2>

      <p className="text-lg text-gray-700 mb-4">
        Illuminate your FSSAI state food license registration journey with Corpbiz! Our modern methodology streamlines the licensing process, converting it from a regulatory necessity into a valuable strategic asset for your business.
      </p>
      <p className="text-lg text-gray-700 mb-6">
        Our team of specialists provides a seamless and efficient experience, offering precise guidance to boost your compliance and growth. See how we can simplify your FSSAI State License application with unparalleled expertise and support and why entrepreneurs trust us.
      </p>

      <div className="space-y-4">
        {points.map((point, index) => (
          <div key={index} className="flex items-center text-gray-700">
            <span className="text-blue-500 text-xl">✔</span>
            <p className="ml-2 text-lg">{point}</p>
          </div>
        ))}
      </div>

      <p className="mt-6 text-lg text-gray-700">
        Delivering State Food License Registration Services in 25+ States
      </p>
    </div>
  );
}
export default Why;