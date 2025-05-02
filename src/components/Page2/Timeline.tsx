import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

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
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  if (timeline.length === 0) return null;

  const timelineData = timeline[0];

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={{
        hidden: { opacity: 0 },
        visible: { 
          opacity: 1,
          transition: { duration: 0.6, ease: "easeOut" }
        }
      }}
      className="bg-gray-50 p-8 rounded-xl shadow-sm border border-gray-100"
    >
      {/* Heading Section */}
      <motion.section
        initial={{ opacity: 0, y: 10 }}
        animate={inView ? { 
          opacity: 1, 
          y: 0,
          transition: { delay: 0.2 }
        } : { opacity: 0, y: 10 }}
        className="mb-8 text-center"
      >
        <h1 className="text-2xl font-bold text-[#1D293D] mb-4 relative inline-block">
          <span className="relative z-10">
            {timelineData.heading || "Timeline to Obtain FSSAI State License"}
          </span>
          <motion.span 
            initial={{ scaleX: 0 }}
            animate={inView ? { 
              scaleX: 1,
              transition: { delay: 0.3, duration: 0.4 }
            } : { scaleX: 0 }}
            className="absolute bottom-0 left-0 w-full h-1 bg-[#7DD756]/40 z-0 origin-left"
          />
        </h1>
      </motion.section>

      {/* Description Section */}
      {timelineData.description && (
        <motion.section
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { 
            opacity: 1, 
            y: 0,
            transition: { delay: 0.3 }
          } : { opacity: 0, y: 10 }}
          className="mb-8"
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { 
              opacity: 1,
              transition: { delay: 0.4 }
            } : { opacity: 0 }}
            className="text-gray-700 text-center leading-relaxed max-w-3xl mx-auto"
          >
            {timelineData.description}
          </motion.p>
        </motion.section>
      )}

      {/* Timeline Steps */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={inView ? { 
          opacity: 1,
          transition: { delay: 0.4 }
        } : { opacity: 0 }}
        className="mt-12 space-y-6"
      >
        {timelineData?.steps?.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { 
              opacity: 1, 
              y: 0,
              transition: { delay: 0.5 + index * 0.1 }
            } : { opacity: 0, y: 20 }}
            className="flex flex-col lg:flex-row bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden"
          >
            {/* Title box */}
            <div className="lg:w-1/3 bg-[#1D293D] text-white p-5 flex flex-col justify-center">
              <h3 className="text-xl font-bold">{step.title}</h3>
              <motion.p 
                initial={{ opacity: 0 }}
                animate={inView ? { 
                  opacity: 1,
                  transition: { delay: 0.6 + index * 0.1 }
                } : { opacity: 0 }}
                className="text-sm italic mt-1 text-[#7DD756]"
              >
                {step.duration}
              </motion.p>
            </div>

            {/* Description */}
            <div className="lg:w-2/3 p-5 bg-gray-50">
              <motion.p
                initial={{ opacity: 0 }}
                animate={inView ? { 
                  opacity: 1,
                  transition: { delay: 0.7 + index * 0.1 }
                } : { opacity: 0 }}
                className="text-gray-700 leading-relaxed"
              >
                {step.description}
              </motion.p>
            </div>
          </motion.div>
        ))}

        {/* Total Time */}
        {timelineData.totalTime && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { 
              opacity: 1, 
              y: 0,
              transition: { delay: 0.5 + (timelineData.steps?.length || 0) * 0.1 }
            } : { opacity: 0, y: 20 }}
            className="flex flex-col lg:flex-row bg-[#7DD756]/10 border-l-4 border-[#7DD756] rounded-xl shadow-sm overflow-hidden mt-6"
          >
            <div className="lg:w-1/3 bg-[#1D293D] text-white p-5 flex items-center justify-center">
              <h3 className="text-xl font-bold">Total Estimated Time</h3>
            </div>
            <div className="lg:w-2/3 p-5 flex items-center">
              <motion.p
                initial={{ opacity: 0 }}
                animate={inView ? { 
                  opacity: 1,
                  transition: { delay: 0.6 + (timelineData.steps?.length || 0) * 0.1 }
                } : { opacity: 0 }}
                className="text-gray-800 text-lg font-medium"
              >
                {timelineData.totalTime}
              </motion.p>
            </div>
          </motion.div>
        )}
      </motion.section>

      {/* Consultation Form */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { 
          opacity: 1, 
          y: 0,
          transition: { delay: 0.6 + (timelineData.steps?.length || 0) * 0.1 }
        } : { opacity: 0, y: 20 }}
        className="mt-10 max-w-2xl mx-auto"
      >
        <div className="bg-white border border-gray-200 p-8 rounded-xl shadow-sm">
          <h3 className="text-2xl font-bold text-center text-[#1D293D] mb-2 relative inline-block">
            <span className="relative z-10">Book a Free Consultation</span>
            <motion.span 
              initial={{ scaleX: 0 }}
              animate={inView ? { 
                scaleX: 1,
                transition: { delay: 0.7 + (timelineData.steps?.length || 0) * 0.1, duration: 0.4 }
              } : { scaleX: 0 }}
              className="absolute bottom-0 left-0 w-full h-1 bg-[#7DD756]/40 z-0 origin-left"
            />
          </h3>
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { 
              opacity: 1,
              transition: { delay: 0.8 + (timelineData.steps?.length || 0) * 0.1 }
            } : { opacity: 0 }}
            className="text-center text-gray-600 mb-6"
          >
            Get a response within 1 hour
          </motion.p>
          <form className="space-y-5">
            {['Your Name*', 'Email Address*'].map((placeholder, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={inView ? { 
                  opacity: 1, 
                  y: 0,
                  transition: { delay: 0.9 + index * 0.1 + (timelineData.steps?.length || 0) * 0.1 }
                } : { opacity: 0, y: 10 }}
              >
                <input
                  type={index === 1 ? 'email' : 'text'}
                  placeholder={placeholder}
                  className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1D293D]"
                  required
                />
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { 
                opacity: 1, 
                y: 0,
                transition: { delay: 1.1 + (timelineData.steps?.length || 0) * 0.1 }
              } : { opacity: 0, y: 10 }}
              className="flex gap-2 items-center"
            >
              <span className="px-3 py-3 bg-gray-100 border border-gray-300 rounded-lg text-gray-700">
                +91
              </span>
              <input
                type="tel"
                placeholder="Mobile Number*"
                className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1D293D]"
                required
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { 
                opacity: 1, 
                y: 0,
                transition: { delay: 1.2 + (timelineData.steps?.length || 0) * 0.1 }
              } : { opacity: 0, y: 10 }}
            >
              <select
                className="w-full border border-gray-300 px-4 py-3 rounded-lg bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#1D293D]"
                required
              >
                <option value="">Select State</option>
                <option value="Delhi">Delhi</option>
                <option value="Maharashtra">Maharashtra</option>
              </select>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { 
                opacity: 1, 
                y: 0,
                transition: { delay: 1.3 + (timelineData.steps?.length || 0) * 0.1 }
              } : { opacity: 0, y: 10 }}
            >
              <button
                type="submit"
                className="w-full bg-[#1D293D] hover:bg-[#2a3a52] transition duration-200 text-white py-3 rounded-lg font-semibold shadow-sm cursor-pointer"
              >
                SEND NOW
              </button>
            </motion.div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={inView ? { 
                opacity: 1,
                transition: { delay: 1.4 + (timelineData.steps?.length || 0) * 0.1 }
              } : { opacity: 0 }}
              className="text-xs text-center text-gray-400 mt-2"
            >
              Your information is safe with us. No spam, ever.
            </motion.p>
          </form>
        </div>
      </motion.section>
    </motion.div>
  );
};

export default Timeline;