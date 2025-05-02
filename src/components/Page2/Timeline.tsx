import React from "react";

interface TimelineStep {
  title: string;
  duration: string;
  description: string;
}

interface TimelineProps {
  timeline?: {
    heading?: string;
    description?: string;
    steps?: TimelineStep[];
    totalTime?: string;
  }[];
}

const Timeline: React.FC<TimelineProps> = ({ timeline = [] }) => {
  if (timeline.length === 0) return null;

  const timelineData = timeline[0];

  return (
    <div className="flex flex-col gap-10 px-4 py-8 lg:px-16 bg-gray-50">
      {/* Heading */}
      <h1 className="text-3xl font-extrabold text-center text-gray-800">
        {timelineData.heading || "Timeline to Obtain FSSAI State License"}
      </h1>

      {/* Description */}
      {timelineData.description && (
        <section className="text-gray-700">
          <p className="text-lg text-center leading-relaxed max-w-3xl mx-auto">
            {timelineData.description}
          </p>
        </section>
      )}

      <section className="mt-12 space-y-6">
        {timelineData?.steps.map((step, index) => (
          <div
            key={index}
            className="flex flex-col lg:flex-row bg-white border border-gray-200 rounded-xl shadow-md overflow-hidden"
          >
            {/* Title box - left on desktop, top on mobile */}
            <div className="lg:w-1/3 bg-blue-600 text-white p-5 flex flex-col justify-center">
              <h3 className="text-xl font-bold">{step.title}</h3>
              <p className="text-sm italic mt-1">{step.duration}</p>
            </div>

            {/* Description - right on desktop, bottom on mobile */}
            <div className="lg:w-2/3 p-5 bg-gray-50">
              <p className="text-gray-700 leading-relaxed">
                {step.description}
              </p>
            </div>
          </div>
        ))}

        {timelineData?.totalTime && (
          <div className="flex flex-col lg:flex-row bg-orange-50 border-l-4 border-orange-500 rounded-xl shadow-md overflow-hidden mt-6">
            <div className="lg:w-1/3 bg-orange-500 text-white p-5 flex items-center justify-center">
              <h3 className="text-xl font-bold">Total Estimated Time</h3>
            </div>
            <div className="lg:w-2/3 p-5">
              <p className="text-gray-800 text-lg font-medium">
                {timelineData.totalTime}
              </p>
            </div>
          </div>
        )}
      </section>

      {/* Consultation Form */}
      <section className="mt-10 max-w-2xl mx-auto">
        <div className="bg-white border border-gray-200 p-8 rounded-xl shadow-lg">
          <h3 className="text-2xl font-bold text-center text-gray-800 mb-2">
            Book a Free Consultation
          </h3>
          <p className="text-center text-gray-600 mb-6">
            Get a response within 1 hour
          </p>
          <form className="space-y-5">
            <input
              type="text"
              placeholder="Your Name*"
              className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <input
              type="email"
              placeholder="Email Address*"
              className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <div className="flex gap-2 items-center">
              <span className="px-3 py-3 bg-gray-100 border border-gray-300 rounded-lg text-gray-700">
                +91
              </span>
              <input
                type="tel"
                placeholder="Mobile Number*"
                className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <select
              className="w-full border border-gray-300 px-4 py-3 rounded-lg bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            >
              <option value="">Select State</option>
              <option value="Delhi">Delhi</option>
              <option value="Maharashtra">Maharashtra</option>
            </select>
            <button
              type="submit"
              className="w-full bg-orange-500 hover:bg-orange-600 transition duration-200 text-white py-3 rounded-lg font-semibold shadow-sm cursor-pointer"
            >
              SEND NOW
            </button>
            <p className="text-xs text-center text-gray-400 mt-2">
              Your information is safe with us. No spam, ever.
            </p>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Timeline;
