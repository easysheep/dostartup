// import React from 'react';

// const components = [
//   {
//     icon: "🏢",
//     title: "Central Goods and Services Tax (CGST)",
//     description:
//       "Central Goods and Services Tax (CGST) is a tax imposed by the Central Government on the supply of goods and services within a specified period.",
//   },
//   {
//     icon: "🏛️",
//     title: "State Goods and Services Tax (SGST)",
//     description:
//       "State Goods and Services Tax (SGST) is a tax imposed by the State Government on the supply of goods and services within the state's jurisdiction.",
//   },
//   {
//     icon: "🌐",
//     title: "Integrated Goods and Services Tax (IGST)",
//     description:
//       "Integrated Goods and Services Tax (IGST) is a tax imposed by the Central Government on the supply of goods and services across different states or between a state and a union territory.",
//   },
// ];

// export default function Features() {
//   return (
//     <section className="bg-white py-12 px-4 md:px-8" id="features">
//       <div className="max-w-6xl mx-auto text-center mb-10">
//         <h2 className="text-2xl md:text-3xl font-bold mb-2">
//           Key Components of GST Registration
//         </h2>
//         <p className="text-gray-600 max-w-2xl mx-auto">
//           The structure of GST registration in India evolves around the three major components as specified below:
//         </p>
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
//         {components.map((item, index) => (
//           <div
//             key={index}
//             className="border rounded-lg p-6 text-left hover:shadow-lg transition-all duration-300"
//           >
//             <div className="text-4xl mb-4">{item.icon}</div>
//             <h3 className="text-md font-semibold mb-2">{item.title}</h3>
//             <p className="text-gray-700 text-sm">{item.description}</p>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }










'use client';
import React from 'react';
import { motion, useMotionTemplate, useMotionValue, animate } from 'framer-motion';

export interface FeatureItem {
  icon: string;
  title: string;
  description: string;
}

export interface FeaturesProps {
  items: FeatureItem[];
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { y: 40, opacity: 0, rotateX: -15 },
  visible: {
    y: 0,
    opacity: 1,
    rotateX: 0,
    transition: {
      type: 'spring',
      damping: 15,
      stiffness: 100,
    },
  },
  hover: {
    y: -10,
    scale: 1.02,
  },
};

export default function Features({ items }: FeaturesProps) {
  return (
    <section id="features" className="relative py-28 px-6 md:px-12 lg:px-24 bg-[#f9fafb] overflow-hidden">
      {/* Animated Background Gradients */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#77DA5A]/10 rounded-full filter blur-3xl opacity-20 animate-float"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#1D293D]/10 rounded-full filter blur-3xl opacity-20 animate-float-delay"></div>
      </div>

      <div className="max-w-8xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#1D293D]">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#77DA5A] to-[#1D293D]">
              Key Components of GST Registration
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            The structure of GST registration in India evolves around the major components below:
          </p>
        </motion.div>

        {/* Feature Cards Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {items.map((item, idx) => (
            <FeatureCard key={idx} item={item} index={idx} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

const FeatureCard = ({ item, index }: { item: FeatureItem; index: number }) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const background = useMotionTemplate`radial-gradient(180px circle at ${mouseX}px ${mouseY}px, rgba(119, 218, 90, 0.15), transparent 80%)`;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - left);
    mouseY.set(e.clientY - top);
    rotateX.set((e.clientY - top - height / 2) / 10);
    rotateY.set(-(e.clientX - left - width / 2) / 10);
  };

  const handleMouseLeave = () => {
    animate(rotateX, 0, { duration: 0.5 });
    animate(rotateY, 0, { duration: 0.5 });
  };

  return (
    <motion.div
      variants={cardVariants}
      whileHover="hover"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
      }}
      className="relative group perspective-1000"
    >
      <div className="absolute inset-0 rounded-2xl overflow-hidden">
        <motion.div
          style={{ background }}
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        />
      </div>
      <div className="relative h-full bg-white/80 backdrop-blur-lg border border-white/20 rounded-2xl p-8 shadow-lg shadow-[#77DA5A]/5 group-hover:shadow-[#77DA5A]/10 transition-all duration-500 overflow-hidden">
        {/* Card Glow Effect */}
        <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className="absolute inset-0 bg-gradient-to-br from-[#77DA5A]/10 to-[#1D293D]/10 rounded-2xl"></div>
          <div className="absolute inset-0.5 bg-gradient-to-br from-white/90 to-white/70 rounded-[15px]"></div>
        </div>

        {/* Card Content */}
        <div className="relative z-10">
          <div className="text-5xl mb-6 text-[#77DA5A] drop-shadow-sm">{item.icon}</div>
          <h3 className="text-xl font-bold mb-3 text-[#1D293D]">{item.title}</h3>
          <p className="text-gray-600 leading-relaxed">{item.description}</p>
        </div>

        {/* Hover Border Animation */}
        <div className="absolute inset-0 rounded-2xl p-px bg-gradient-to-br from-transparent via-[#77DA5A] to-[#1D293D] opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10">
          <div className="absolute inset-0 rounded-2xl bg-white/80 backdrop-blur-lg"></div>
        </div>
      </div>
    </motion.div>
  );
};