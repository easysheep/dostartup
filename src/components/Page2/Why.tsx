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
    <div className="px-4 py-8 lg:px-20 lg:py-12 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6 leading-snug">
          {whyData.heading ||
            "Why Choose Corpbiz for FSSAI State Food License Registration?"}
        </h2>

        {whyData.description?.map((paragraph, index) => (
          <p
            key={index}
            className="text-base lg:text-lg text-gray-700 leading-relaxed mb-4 text-center"
          >
            {paragraph}
          </p>
        ))}

        {whyData.points && whyData.points.length > 0 && (
          <div className="mt-8 grid sm:grid-cols-1 md:grid-cols-2 gap-4">
            {whyData.points.map((point, index) => (
              <div
                key={index}
                className="flex items-start gap-3 p-4 bg-white border border-gray-200 rounded-md shadow-sm transition-all duration-300 transform hover:scale-[1.02] hover:shadow-md"
              >
                <div className="w-16 h-8 flex items-center justify-center bg-blue-100 text-blue-600 rounded-[100%] text-lg font-semibold transition-colors duration-300 hover:bg-blue-200">
                  ✓
                </div>
                <p className="text-gray-800 text-base">{point}</p>
              </div>
            ))}
          </div>
        )}

        {whyData.footerText && (
          <p className="mt-8 text-center text-lg text-gray-700 font-medium">
            {whyData.footerText}
          </p>
        )}
      </div>
    </div>
  );
};

export default Why;
