import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface WhyProps {
  whyUs?: {
    heading?: string;
    description?: string[];
    points?: string[];
    footerText?: string;
  }[];
}

const Why: React.FC<WhyProps> = ({ whyUs = [] }) => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  if (whyUs.length === 0) {
    return null;
  }

  const whyData = whyUs[0];

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
        <h2 className="text-2xl font-bold text-[#1D293D] mb-4 relative inline-block">
          <span className="relative z-10">
            {whyData.heading || "Why Choose Corpbiz for FSSAI State Food License Registration?"}
          </span>
          <motion.span 
            initial={{ scaleX: 0 }}
            animate={inView ? { 
              scaleX: 1,
              transition: { delay: 0.3, duration: 0.4 }
            } : { scaleX: 0 }}
            className="absolute bottom-0 left-0 w-full h-1 bg-[#7DD756]/40 z-0 origin-left"
          />
        </h2>
      </motion.section>

      {/* Description Section */}
      {whyData.description?.map((paragraph, index) => (
        <motion.p
          key={index}
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { 
            opacity: 1, 
            y: 0,
            transition: { delay: 0.3 + index * 0.1 }
          } : { opacity: 0, y: 10 }}
          className="text-base lg:text-lg text-gray-700 leading-relaxed mb-4 text-center"
        >
          {paragraph}
        </motion.p>
      ))}

      {/* Points Section */}
      {whyData.points && whyData.points.length > 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { 
            opacity: 1,
            transition: { delay: 0.4 }
          } : { opacity: 0 }}
          className="mt-8 grid sm:grid-cols-1 md:grid-cols-2 gap-4"
        >
          {whyData.points.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { 
                opacity: 1, 
                y: 0,
                transition: { delay: 0.5 + index * 0.1 }
              } : { opacity: 0, y: 20 }}
              whileHover={{ scale: 1.02 }}
              className="flex items-start gap-3 p-4 bg-white border border-gray-200 rounded-md shadow-sm"
            >
              <motion.div 
                initial={{ scale: 0 }}
                animate={inView ? { 
                  scale: 1,
                  transition: { delay: 0.6 + index * 0.1 }
                } : { scale: 0 }}
                className="w-16 h-8 flex items-center justify-center bg-[#7DD756]/20 text-[#1D293D] rounded-[100%] text-lg font-semibold"
              >
                ✓
              </motion.div>
              <p className="text-gray-800 text-base">{point}</p>
            </motion.div>
          ))}
        </motion.div>
      )}

      {/* Footer Text */}
      {whyData.footerText && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { 
            opacity: 1,
            transition: { delay: 0.6 + (whyData.points?.length || 0) * 0.1 }
          } : { opacity: 0 }}
          className="mt-8 text-center text-lg text-gray-700 font-medium"
        >
          {whyData.footerText}
        </motion.p>
      )}
    </motion.div>
  );
};

export default Why;