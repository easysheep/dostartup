'use client';
import React, { useEffect } from 'react';
import Link from 'next/link';
import { motion, useMotionTemplate, useMotionValue, animate, useTransform } from 'framer-motion';
import { useRef } from 'react';

export interface OverviewProps {
  data: {
    heading: string;
    paragraphs: string[];
    imageUrl: string;
    buttonText: string;
  };
}

export default function Overview({ data }: OverviewProps) {
  const { heading, paragraphs, imageUrl, buttonText } = data;
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Enhanced mouse tracking with smoother inertia
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothX = useMotionValue(0);
  const smoothY = useMotionValue(0);

  useEffect(() => {
    const unsubscribeX = mouseX.on("change", (latest) => {
      animate(smoothX, latest, { duration: 0.5, ease: "easeOut" });
    });
    const unsubscribeY = mouseY.on("change", (latest) => {
      animate(smoothY, latest, { duration: 0.5, ease: "easeOut" });
    });
    return () => {
      unsubscribeX();
      unsubscribeY();
    };
  }, [mouseX, mouseY, smoothX, smoothY]);

  // Floating animation with more natural movement
  const floatingVariants = {
    float: {
      y: [0, -20, 0],
      x: [0, Math.random() * 20 - 10, 0],
      transition: {
        duration: 8 + Math.random() * 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  // Enhanced particle system with varied properties
  const particles = Array(30).fill(0).map((_, i) => ({
    id: i,
    size: Math.random() * 6 + 2,
    x: Math.random() * 100,
    y: Math.random() * 100,
    delay: Math.random() * 3,
    opacity: Math.random() * 0.4 + 0.2,
    color: `hsl(${Math.random() * 60 + 100}, 80%, 70%)`
  }));

  // More refined 3D tilt effect
  const handleMouseMove = (e: React.MouseEvent) => {
    const container = containerRef.current;
    if (container) {
      const rect = container.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;
      mouseX.set(x);
      mouseY.set(y);
    }
  };

  return (
    <section 
      id="overview" 
      className="relative py-32 px-6 md:px-12 lg:px-24 bg-[#0a0f1a] overflow-hidden"
      ref={containerRef}
      onMouseMove={handleMouseMove}
    >
      {/* Cosmic Background with layered effects */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Multi-layered gradient mesh */}
        <motion.div 
          className="absolute inset-0 opacity-40 mix-blend-soft-light"
          style={{
            background: useMotionTemplate`radial-gradient(
              circle at ${useTransform(smoothX, [0, 1], [20, 80])}% ${useTransform(smoothY, [0, 1], [20, 80])}%,
              rgba(119, 218, 90, 0.5),
              rgba(29, 41, 61, 0.3),
              transparent 70%
            )`,
            transform: 'scale(1.2)'
          }}
        />
        
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: 'linear-gradient(to right, #77DA5A 1px, transparent 1px), linear-gradient(to bottom, #77DA5A 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }} />
        
        {/* Floating particles with varied properties */}
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute rounded-full"
            style={{
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              opacity: particle.opacity,
              backgroundColor: particle.color,
              filter: 'blur(1px)',
              mixBlendMode: 'screen'
            }}
            variants={floatingVariants}
            initial="float"
            animate="float"
            transition={{ delay: particle.delay }}
          />
        ))}
      </div>

      <div className="max-w-8xl mx-auto relative z-10">
        <motion.div 
          className="flex flex-col-reverse lg:flex-row items-center justify-between gap-16 lg:gap-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3,
              },
            },
          }}
        >
          {/* Text Content with refined typography */}
          <div className="lg:w-1/2">
            <motion.h2 
              className="text-5xl md:text-6xl lg:text-7xl font-bold mb-10 tracking-tight"
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ 
                type: 'spring', 
                damping: 15, 
                stiffness: 100,
                mass: 0.5
              }}
              viewport={{ once: true }}
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#77DA5A] via-[#4ECDC4] to-[#77DA5A] animate-gradient-shift">
                {heading}
              </span>
            </motion.h2>
            
            <div className="space-y-6 mb-12">
              {paragraphs.map((p, idx) => (
                <motion.p 
                  key={idx} 
                  className="text-xl text-gray-300 leading-relaxed font-light"
                  initial={{ y: 30, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ 
                    delay: 0.15 * idx, 
                    type: 'spring', 
                    damping: 15,
                    stiffness: 80 
                  }}
                  viewport={{ once: true }}
                >
                  {p}
                </motion.p>
              ))}
            </div>
            
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              whileInView={{ scale: 1, opacity: 1, y: 0 }}
              transition={{ 
                type: 'spring', 
                delay: 0.6,
                stiffness: 100,
                damping: 10
              }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Link 
                href="#" 
                className="relative inline-flex items-center px-10 py-5 overflow-hidden group rounded-2xl"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-[#77DA5A] to-[#4ECDC4] rounded-2xl opacity-90 group-hover:opacity-100 transition-opacity duration-500"></span>
                <span className="absolute inset-0 bg-white/10 backdrop-blur-sm rounded-2xl transition-all duration-500 group-hover:bg-white/20"></span>
                <span className="absolute inset-0.5 bg-[#0a0f1a] rounded-xl transition-all duration-500 group-hover:opacity-0"></span>
                <span className="relative z-10 flex items-center">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300 font-medium text-lg group-hover:bg-gradient-to-r group-hover:from-[#77DA5A] group-hover:to-[#4ECDC4] transition-all duration-500">
                    {buttonText}
                  </span>
                  <motion.span 
                    className="ml-4 inline-block"
                    initial={{ x: 0 }}
                    whileHover={{ x: 5 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="transition-all duration-500 group-hover:rotate-45">
                      <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </motion.span>
                </span>
                <span className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-[#77DA5A] to-[#4ECDC4] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
              </Link>
            </motion.div>
          </div>

          {/* Enhanced Holographic Image Display */}
          <motion.div 
            className="lg:w-1/2 flex justify-center relative perspective-1000"
            initial={{ scale: 0.95, opacity: 0, rotateY: -10 }}
            whileInView={{ scale: 1, opacity: 1, rotateY: 0 }}
            whileHover={{ scale: 1.03 }}
            transition={{ 
              type: 'spring', 
              damping: 15, 
              stiffness: 100, 
              delay: 0.4,
              mass: 0.5
            }}
            viewport={{ once: true }}
            style={{
              rotateX: useTransform(smoothY, [0, 1], [-8, 8]),
              rotateY: useTransform(smoothX, [0, 1], [-8, 8]),
              transformStyle: 'preserve-3d'
            }}
          >
            <div className="relative w-full max-w-xl h-[500px]">
              {/* Holographic glow with dynamic positioning */}
              <motion.div
                className="absolute inset-0 rounded-[40px] opacity-0 group-hover:opacity-80 transition-opacity duration-700 pointer-events-none"
                style={{
                  background: useMotionTemplate`radial-gradient(
                    500px circle at ${useTransform(smoothX, [0, 1], [20, 80])}% ${useTransform(smoothY, [0, 1], [20, 80])}%,
                    rgba(119, 218, 90, 0.4),
                    transparent 70%
                  )`,
                  mixBlendMode: 'soft-light',
                  transform: 'translateZ(20px)'
                }}
              />

              {/* Floating image container with glass morphism */}
              <div className="relative h-full bg-gradient-to-br from-[#77DA5A]/10 to-[#1D293D]/10 backdrop-blur-xl border border-white/10 rounded-[40px] p-2 shadow-2xl shadow-[#77DA5A]/30 overflow-hidden transform-style-preserve-3d">
                {/* Animated scan lines with varying speed */}
                <div className="absolute inset-0 overflow-hidden opacity-30">
                  <div className="absolute inset-0 bg-[length:100%_3px] bg-repeat-y bg-[linear-gradient(to_bottom,rgba(255,255,255,0.2)_1px,transparent_1px)] animate-scanlines"></div>
                </div>

                {/* Enhanced chromatic aberration effect */}
                <div className="relative overflow-hidden rounded-[32px] h-full">
                  <div className="absolute inset-0 rounded-[32px] overflow-hidden">
                    <img 
                      src={imageUrl} 
                      alt="" 
                      className="w-full h-full object-cover absolute blur-md opacity-30 scale-105"
                      style={{ transform: 'translateZ(10px)' }}
                    />
                  </div>
                  
                  <img 
                    src={imageUrl} 
                    alt="Overview Illustration" 
                    width={600} 
                    height={500} 
                    className="w-full h-full object-contain rounded-[32px] relative z-10"
                    style={{ transform: 'translateZ(30px)' }}
                  />
                  
                  {/* Enhanced glitch effect layers */}
                  <div className="absolute inset-0 overflow-hidden rounded-[32px] opacity-0 group-hover:opacity-30 transition-opacity duration-500 pointer-events-none">
                    <img 
                      src={imageUrl} 
                      alt="" 
                      className="absolute inset-0 w-full h-full object-cover blur-sm"
                      style={{ transform: 'translateX(4px) translateZ(20px)', filter: 'hue-rotate(20deg)' }}
                    />
                    <img 
                      src={imageUrl} 
                      alt="" 
                      className="absolute inset-0 w-full h-full object-cover blur-sm"
                      style={{ transform: 'translateX(-4px) translateZ(20px)', filter: 'hue-rotate(-20deg)' }}
                    />
                  </div>
                </div>

                {/* Refined holographic border */}
                <div className="absolute inset-0 rounded-[40px] p-[2px] bg-gradient-to-br from-transparent via-[#77DA5A] to-[#4ECDC4] opacity-40 group-hover:opacity-80 transition-opacity duration-500 -z-10 pointer-events-none">
                  <div className="absolute inset-0 rounded-[38px] bg-[#0a0f1a]/80 backdrop-blur-sm"></div>
                </div>
              </div>

              {/* Floating tech elements with more depth */}
              <motion.div 
                className="absolute -bottom-10 -left-10 w-20 h-20 rounded-full bg-[#77DA5A]/10 border border-[#77DA5A]/30 backdrop-blur-sm"
                initial={{ y: 0, x: 0 }}
                animate={{ 
                  y: [0, -20, 0],
                  x: [0, 10, 0]
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5
                }}
                style={{ transform: 'translateZ(10px)' }}
              />
              <motion.div 
                className="absolute -top-8 -right-8 w-16 h-16 rounded-full bg-[#4ECDC4]/10 border border-[#4ECDC4]/30 backdrop-blur-sm"
                initial={{ y: 0, x: 0 }}
                animate={{ 
                  y: [0, -15, 0],
                  x: [0, -8, 0]
                }}
                transition={{
                  duration: 7,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
                style={{ transform: 'translateZ(10px)' }}
              />
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Enhanced global styles */}
      <style jsx global>{`
        @keyframes gradient-shift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient-shift {
          background-size: 300% 300%;
          animation: gradient-shift 8s ease infinite;
        }
        @keyframes scanlines {
          from { background-position: 0 0; }
          to { background-position: 0 100%; }
        }
        .animate-scanlines {
          animation: scanlines 3s linear infinite;
        }
        .transform-style-preserve-3d {
          transform-style: preserve-3d;
        }
      `}</style>
    </section>
  );
}