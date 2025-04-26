import React from "react";

interface WhyProps {
  whyUs?: {
    heading?: string;
    description?: string[];
    points?: string[];
    footerText?: string;
  }[];
}

const Why: React.FC<WhyProps> = ({ whyUs = [] }) => {
  if (whyUs.length === 0) {
    return null;
  }

  const whyData = whyUs[0];

  return (
    <div className="p-4 lg:p-8 bg-gray-50">
      <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">
        {whyData.heading || "Why Choose Corpbiz for FSSAI State Food License Registration?"}
      </h2>

      {whyData.description?.map((paragraph, index) => (
        <p key={index} className="text-lg text-gray-700 mb-4">
          {paragraph}
        </p>
      ))}

      {whyData.points && whyData.points.length > 0 && (
        <div className="space-y-4">
          {whyData.points.map((point, index) => (
            <div key={index} className="flex items-center text-gray-700">
              <span className="text-blue-500 text-xl">✔</span>
              <p className="ml-2 text-lg">{point}</p>
            </div>
          ))}
        </div>
      )}

      {whyData.footerText && (
        <p className="mt-6 text-lg text-gray-700">
          {whyData.footerText}
        </p>
      )}
    </div>
  );
};

export default Why;