import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface FeeItem {
  category: string;
  amount: string;
}

interface FeeStructureProps {
  fees?: {
    heading?: string;
    paymentMethods?: string[];
    description?: string;
    feeTable?: FeeItem[];
  }[];
}

const FeeStructure: React.FC<FeeStructureProps> = ({ fees = [] }) => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  if (fees.length === 0) {
    return null;
  }

  const feeData = fees[0];

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
      {/* Heading Section */}
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
          <span className="relative z-10">
            {feeData.heading || "Fee Structure for Obtaining FSSAI State License"}
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
          className="text-gray-700 mb-4 leading-relaxed"
        >
          {feeData.description || "The requisite fees must be paid by an applicant seeking State Food license via:"}
        </motion.p>

        {feeData.paymentMethods && feeData.paymentMethods.length > 0 && (
          <ul className="list-disc list-inside mt-2 space-y-1 text-gray-700">
            {feeData.paymentMethods.map((method, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0 }}
                animate={inView ? { 
                  opacity: 1,
                  transition: { delay: 0.5 + index * 0.05 }
                } : { opacity: 0 }}
              >
                {method}
              </motion.li>
            ))}
          </ul>
        )}
      </motion.section>

      {/* Fee Table */}
      {feeData.feeTable && feeData.feeTable.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { 
            opacity: 1, 
            y: 0,
            transition: { delay: 0.4 }
          } : { opacity: 0, y: 10 }}
          className="overflow-x-auto"
        >
          <table className="w-full table-auto border-collapse rounded-lg overflow-hidden">
            <thead>
              <tr className="bg-[#1D293D] text-white">
                <th className="py-3 px-4 border border-gray-200/50">Manufacturer (Production Capacity)</th>
                <th className="py-3 px-4 border border-gray-200/50">License Fees/year (INR)</th>
              </tr>
            </thead>
            <tbody>
              {feeData.feeTable.map((fee, index) => (
                <motion.tr
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={inView ? { 
                    opacity: 1,
                    transition: { delay: 0.5 + index * 0.05 }
                  } : { opacity: 0 }}
                  className={index % 2 === 0 ? "bg-white" : "bg-gray-50/50"}
                >
                  <td className="py-2 px-4 border border-gray-200/50 text-gray-700">
                    {fee.category.split('\n').map((line, i) => (
                      <React.Fragment key={i}>
                        {line}
                        <br />
                      </React.Fragment>
                    ))}
                  </td>
                  <td className="py-2 px-4 border border-gray-200/50 text-center text-gray-700">
                    {fee.amount}
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      )}
    </motion.div>
  );
};

export default FeeStructure;