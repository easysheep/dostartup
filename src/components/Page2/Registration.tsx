import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface PenaltyItem {
  serialNumber: string;
  particulars: string;
  fine: string;
}

interface RegistrationItem {
  heading: string;
  content: string;
  penalties?: {
    description?: string;
    penaltyTable?: PenaltyItem[];
  };
}

interface RegistrationProps {
  procedure?: RegistrationItem[];
}

const Registration: React.FC<RegistrationProps> = ({ procedure = [] }) => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  if (procedure.length === 0) {
    return null;
  }

  const registrationItem = procedure[0];

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
      className="bg-white p-8 rounded-xl shadow-sm border border-gray-100"
    >
      {/* Registration Process Section */}
      <motion.section
        initial={{ opacity: 0, y: 10 }}
        animate={inView ? { 
          opacity: 1, 
          y: 0,
          transition: { delay: 0.2 }
        } : { opacity: 0, y: 10 }}
        className="mb-8"
      >
        <h1 className="text-2xl font-bold text-[#1D293D] mb-4 relative inline-block">
          <span className="relative z-10">{registrationItem.heading}</span>
          <motion.span 
            initial={{ scaleX: 0 }}
            animate={inView ? { 
              scaleX: 1,
              transition: { delay: 0.3, duration: 0.4 }
            } : { scaleX: 0 }}
            className="absolute bottom-0 left-0 w-full h-1 bg-[#7DD756]/40 z-0 origin-left"
          />
        </h1>
        <div className="space-y-3">
          {registrationItem.content.split('\n').map((step, index) => (
            <motion.p
              key={index}
              initial={{ opacity: 0 }}
              animate={inView ? { 
                opacity: 1,
                transition: { delay: 0.4 + index * 0.05 }
              } : { opacity: 0 }}
              className="text-gray-700 leading-relaxed"
            >
              {step.trim()}
            </motion.p>
          ))}
        </div>
      </motion.section>

      {/* Penalties Section */}
      {registrationItem.penalties?.description && (
        <motion.section
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { 
            opacity: 1, 
            y: 0,
            transition: { delay: 0.3 }
          } : { opacity: 0, y: 10 }}
          className="mb-8"
        >
          <h2 className="text-xl font-bold text-[#1D293D] mb-4 relative inline-block">
            <span className="relative z-10">Penalty for Not Complying with FSSAI's Norms</span>
            <motion.span 
              initial={{ scaleX: 0 }}
              animate={inView ? { 
                scaleX: 1,
                transition: { delay: 0.4, duration: 0.4 }
              } : { scaleX: 0 }}
              className="absolute bottom-0 left-0 w-full h-1 bg-[#7DD756]/40 z-0 origin-left"
            />
          </h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { 
              opacity: 1,
              transition: { delay: 0.5 }
            } : { opacity: 0 }}
            className="text-gray-700 mb-4 leading-relaxed"
          >
            {registrationItem.penalties.description}
          </motion.p>
        </motion.section>
      )}

      {/* Penalty Table */}
      {registrationItem.penalties?.penaltyTable && registrationItem.penalties.penaltyTable.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { 
            opacity: 1, 
            y: 0,
            transition: { delay: 0.4 }
          } : { opacity: 0, y: 10 }}
          className="overflow-x-auto"
        >
          <table className="w-full table-auto mt-6 border-collapse rounded-lg overflow-hidden">
            <thead>
              <tr className="bg-[#1D293D] text-white">
                <th className="py-3 px-4 border border-gray-200/50">S.No</th>
                <th className="py-3 px-4 border border-gray-200/50">Particulars</th>
                <th className="py-3 px-4 border border-gray-200/50">Fine (Rs)</th>
              </tr>
            </thead>
            <tbody>
              {registrationItem.penalties.penaltyTable.map((penalty, index) => (
                <motion.tr
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={inView ? { 
                    opacity: 1,
                    transition: { delay: 0.5 + index * 0.05 }
                  } : { opacity: 0 }}
                  className={index % 2 === 0 ? "bg-white" : "bg-gray-50/50"}
                >
                  <td className="py-2 px-4 border border-gray-200/50">{penalty.serialNumber}</td>
                  <td className="py-2 px-4 border border-gray-200/50">{penalty.particulars}</td>
                  <td className="py-2 px-4 border border-gray-200/50">{penalty.fine}</td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      )}
    </motion.div>
  );
};

export default Registration;