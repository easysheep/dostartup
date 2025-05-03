// import React from 'react';

// const benefit = [
//   {
//     title: 'Regulatory Compliance',
//     img: 'https://corpbiz.io/img/adv_icon1.webp',
//     description:
//       'GST registration safeguards the interests of individuals and business entities operating in India. It ensures their legal and tax compliance, thus saving them from paying penalties for violations.',
//   },
//   {
//     title: 'Easy Compliance',
//     description:
//       'GST registration is not a complicated process. It helps business entities streamline their processes for filing tax returns and making online payments.',
//   },
//   {
//     title: 'Maintains Transparency',
//     description:
//       'GST registration allows business entities to maintain updated business records. This helps build a sense of reliability and facilitates operational transparency.',
//   },
//   {
//     title: 'Easy Compliance',
//     description:
//       'GST registration is not a complicated process. It helps business entities streamline their processes for filing tax returns and making online payments.',
//   },
//   {
//     title: 'Maintains Transparency',
//     description:
//       'GST registration allows business entities to maintain updated business records. This helps build a sense of reliability and facilitates operational transparency.',
//   },
//   {
//     title: 'Legal Protection',
//     description:
//       'GST registration safeguards the legal and regulatory standards of the business, thereby protecting their legal status.',
//   },
// ];

// export default function Benifits() {
//   return (
//     <div>
//       <section className="min-h-screen bg-[#fafafa] px-6 py-10 md:px-16 lg:px-24">
//         <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">
//           Who Needs to Register?
//         </h2>
//         <div className="flex flex-col lg:flex-row gap-8">
//           {/* LEFT IMAGE - STICKY */}
//           <div className="w-full lg:w-1/2 hidden lg:flex justify-center items-start">
//             <div className="sticky top-10">
//               <img
//                 src="https://corpbiz.io/admin/style/images/userfiles/image/adv_img.png"
//                 alt="GST Illustration"
//                 width={400}
//                 height={400}
//                 className="object-contain"
//               />
//             </div>
//           </div>

//           {/* RIGHT SCROLLABLE STACK */}
//           <div className="w-full lg:w-1/2 overflow-y-auto pr-2 space-y-5 scrollbar-hide max-h-[calc(100vh-10rem)]">
//             {benefit.map((item, idx) => (
//               <div
//                 key={idx}
//                 className="border border-gray-300 rounded-lg p-5 flex items-start gap-4 bg-white hover:shadow-md transition"
//               >
//                 <img
//                   src={item.img || 'https://corpbiz.io/img/adv_icon1.webp'}
//                   alt="Icon"
//                   width={30}
//                   height={30}
//                   className="mt-1"
//                 />
//                 <div>
//                   <h3 className="font-semibold text-lg">{item.title}</h3>
//                   <p className="text-gray-600 text-sm mt-1">{item.description}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }





'use client';
import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export interface BenefitItem {
  title: string;
  img?: string;
  description: string;
}

export interface BenefitsProps {
  items: BenefitItem[];
}

export default function Benefits({ items }: BenefitsProps) {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const imageVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "backOut"
      }
    }
  };

  return (
    <section 
      ref={ref}
      className="min-h-screen bg-gradient-to-b from-[#1D293D] to-[#0f172a] px-6 py-16 md:px-16 lg:px-24"
    >
      <motion.div
        initial="hidden"
        animate={controls}
        variants={containerVariants}
        className="max-w-7xl mx-auto"
      >
        <motion.h2 
          variants={itemVariants}
          className="text-3xl md:text-4xl font-bold mb-12 text-center text-white"
        >
          Who Needs to Register?
          <span className="block w-20 h-1 bg-[#7AD955] mx-auto mt-4 rounded-full"></span>
        </motion.h2>

        <div className="flex flex-col lg:flex-row gap-12">
          <motion.div 
            variants={imageVariants}
            className="w-full lg:w-1/2 hidden lg:flex justify-center items-start"
          >
            <div className="sticky top-28">
              <div className="relative">
                <div className="absolute -inset-4 bg-[#7AD955] rounded-2xl blur opacity-20"></div>
                <img 
                  src={items[0]?.img || ''} 
                  alt="Illustration" 
                  width={450} 
                  height={450} 
                  className="relative object-contain rounded-lg z-10" 
                />
              </div>
            </div>
          </motion.div>

          <div className="w-full lg:w-1/2 overflow-y-auto pr-2 space-y-6 max-h-[calc(100vh-10rem)] custom-scroll-hide">
            {items.map((item, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="border border-gray-700 rounded-xl p-6 flex items-start gap-5 bg-[#1D293D] hover:border-[#7AD955] transition-all group"
              >
                {item.img && (
                  <div className="p-2 bg-[#7AD955] rounded-lg group-hover:bg-white transition-colors">
                    <img 
                      src={item.img} 
                      alt="Icon" 
                      width={30} 
                      height={30} 
                      className="transition-colors group-hover:invert" 
                    />
                  </div>
                )}
                <div>
                  <h3 className="font-semibold text-xl text-white">{item.title}</h3>
                  <p className="text-gray-300 mt-2">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}