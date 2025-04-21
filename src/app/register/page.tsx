"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const registrationTypes = [
  { name: "Private Limited Company", slug: "private-limited-company", emoji: "🏢" },
  { name: "One Person Company (OPC)", slug: "opc", emoji: "👤" },
  { name: "Partnership Firm", slug: "partnership-firm", emoji: "🤝" },
  { name: "MSME Registration", slug: "msme", emoji: "🏭" },
  { name: "IEC Code", slug: "iec", emoji: "📦" },
  { name: "PSARA License", slug: "psara", emoji: "🛡️" },
  { name: "CE Certification", slug: "ce", emoji: "✅" },
  { name: "NBFC Registration", slug: "nbfc", emoji: "🏦" },
  { name: "Plastic Waste Authorization", slug: "plastic-waste", emoji: "♻️" },
  { name: "GST Registration", slug: "gst", emoji: "💸" },
];

export default function RegisterPage() {
  const [search, setSearch] = useState("");
  const [progress, setProgress] = useState(0);

  const filtered = registrationTypes.filter((type) =>
    type.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    const scrollHeight = document.body.scrollHeight - window.innerHeight;
    const progressValue = (scrollTop / scrollHeight) * 100;
    setProgress(progressValue);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-gray-100 py-16 px-6 relative">
      {/* Scroll progress bar */}
      <div className="fixed top-0 left-0 h-1 bg-emerald-500 z-50" style={{ width: `${progress}%` }} />

      <motion.h1
        className="text-5xl font-extrabold mb-10 text-center text-gray-800"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
      Choose a Registration Type
      </motion.h1>

      {/* Search Input */}
      <motion.div
        className="max-w-xl mx-auto mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <input
          type="text"
          placeholder="🔍 Search registration types..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full px-5 py-4 text-lg rounded-2xl backdrop-blur-md bg-white/70 border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:outline-none transition shadow-md"
        />
      </motion.div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {filtered.map((type, index) => (
          <motion.div
            key={type.slug}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <Link
              href={`/register/${type.slug}`}
              className="group block rounded-3xl p-6 bg-white border border-gray-200 shadow-xl hover:shadow-emerald-300 hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300"
            >
              <div className="flex items-center justify-between">
                <span className="text-4xl">{type.emoji}</span>
                <span className="text-sm text-gray-400 group-hover:text-emerald-600 transition">
                  View →
                </span>
              </div>
              <h2 className="mt-5 text-2xl font-bold text-emerald-600 group-hover:text-emerald-800 transition">
                {type.name}
              </h2>
              <div className="mt-3 h-[4px] w-full bg-gradient-to-r from-emerald-400 via-emerald-500 to-green-400 rounded-full opacity-0 group-hover:opacity-100 transition" />
            </Link>
          </motion.div>
        ))}
      </div>

      {/* No Results */}
      {filtered.length === 0 && (
        <motion.p
          className="text-center text-gray-500 mt-20 text-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          No registration types found.
        </motion.p>
      )}
    </div>
  );
}
