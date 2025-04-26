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
  if (timeline.length === 0) {
    return null;
  }

  const timelineData = timeline[0];

  return (
    <div className="flex flex-col gap-6 p-4 lg:p-8">
      {/* Heading */}
      <h1 className="text-2xl font-bold text-center text-gray-800">
        {timelineData.heading || "Timeline to Obtain FSSAI State License"}
      </h1>

      {/* Description */}
      {timelineData.description && (
        <section className="text-gray-700 mt-4">
          <p className="text-lg">{timelineData.description}</p>
        </section>
      )}

      {/* Timeline Steps */}
      {timelineData.steps && timelineData.steps.length > 0 && (
        <section className="mt-6">
          <div className="space-y-6">
            {timelineData.steps.map((step, index) => (
              <div key={index} className="flex flex-col lg:flex-row gap-4">
                <div className="lg:w-1/4 bg-blue-500 text-white p-4 rounded shadow-md">
                  <h3 className="text-xl font-semibold">
                    {step.title} ({step.duration})
                  </h3>
                </div>
                <div className="lg:w-3/4 p-4 bg-gray-50 rounded shadow-md">
                  <p>{step.description}</p>
                </div>
              </div>
            ))}

            {/* Total Estimated Time */}
            {timelineData.totalTime && (
              <div className="flex flex-col lg:flex-row gap-4 mt-6">
                <div className="lg:w-1/4 bg-blue-500 text-white p-4 rounded shadow-md">
                  <h3 className="text-xl font-semibold">Total Estimated Time</h3>
                </div>
                <div className="lg:w-3/4 p-4 bg-gray-50 rounded shadow-md">
                  <p className="font-semibold">{timelineData.totalTime}</p>
                </div>
              </div>
            )}
          </div>
        </section>
      )}

      {/* Consultation Form */}
      <section className="mt-8">
        <div className="bg-white border p-6 rounded shadow-md">
          <h3 className="text-xl font-semibold text-center">Book a Free Consultation</h3>
          <p className="text-center text-gray-600 mb-4">Get response within 1 hour</p>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name*"
              className="w-full border px-3 py-2 rounded"
              required
            />
            <input
              type="email"
              placeholder="Email Address*"
              className="w-full border px-3 py-2 rounded"
              required
            />
            <div className="flex gap-2">
              <span className="flex items-center px-2 border rounded bg-gray-100">+91</span>
              <input
                type="tel"
                placeholder="Mobile Number*"
                className="w-full border px-3 py-2 rounded"
                required
              />
            </div>
            <select className="w-full border px-3 py-2 rounded" required>
              <option>Select State</option>
              <option>Delhi</option>
              <option>Maharashtra</option>
            </select>
            <button
              type="submit"
              className="w-full bg-orange-500 text-white py-2 rounded font-semibold"
            >
              SEND NOW
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Timeline;