import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface Document {
  heading: string;
  content: string;
}

interface DocumentationProps {
  documents?: Document[];
}

const Documentation: React.FC<DocumentationProps> = ({ documents = [] }) => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  if (documents.length === 0) {
    return null;
  }

  return (
    <motion.section
      ref={ref}
      id="documentation"
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
      {documents.map((document, index) => (
        <motion.div 
          key={index}
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { 
            opacity: 1, 
            y: 0,
            transition: { delay: 0.2 + index * 0.1 }
          } : { opacity: 0, y: 10 }}
          className="mb-8 last:mb-0"
        >
          <h2 className="text-2xl font-bold text-[#1D293D] mb-4 relative inline-block">
            <span className="relative z-10">{index + 1}. {document.heading}</span>
            <motion.span 
              initial={{ scaleX: 0 }}
              animate={inView ? { 
                scaleX: 1,
                transition: { delay: 0.3 + index * 0.1, duration: 0.4 }
              } : { scaleX: 0 }}
              className="absolute bottom-0 left-0 w-full h-1 bg-[#7DD756]/40 z-0 origin-left"
            />
          </h2>
          
          <div className="space-y-3">
            {document.content.split("\n").map((paragraph, i) => (
              paragraph.trim() && (
                <motion.p
                  key={i}
                  initial={{ opacity: 0 }}
                  animate={inView ? { 
                    opacity: 1,
                    transition: { delay: 0.4 + index * 0.1 + i * 0.05 }
                  } : { opacity: 0 }}
                  className="text-gray-700 leading-relaxed"
                >
                  {paragraph.trim()}
                </motion.p>
              )
            ))}
          </div>
        </motion.div>
      ))}
    </motion.section>
  );
};

export default Documentation;