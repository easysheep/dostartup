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
  const sectionRefs = useRef<Array<HTMLDivElement | null>>([]);

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
    <div className="max-w-7xl mx-auto py-12 px-6">
      <h1 className="text-4xl font-extrabold mb-6 text-center text-gray-800">
        Choose a Registration Type
      </h1>

      {/* Search */}
      <div className="max-w-md mx-auto mb-10">
        <input
          type="text"
          placeholder="Search registration types..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full px-5 py-3 text-lg rounded-xl border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:outline-none transition"
        />
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {filtered.map((type, index) => (
          <motion.div
            key={type.slug}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
          >
            <Link
              href={`/register/${type.slug}`}
              className="group block p-6 bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg transition-transform transform hover:-translate-y-1 hover:border-emerald-500 hover:bg-gradient-to-tr from-emerald-50 to-white"
            >
              <div className="flex items-center justify-between">
                <span className="text-3xl">{type.emoji}</span>
                <span className="text-sm text-gray-400 group-hover:text-emerald-600 transition">
                  Click to view →
                </span>
              </div>
              <h2 className="mt-4 text-xl font-semibold text-emerald-600 group-hover:text-emerald-700 transition">
                {type.name}
              </h2>
            </Link>
          </motion.div>
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="text-center text-gray-500 mt-10">
          No registration types found.
        </p>
      )}
    </div>
  );
}
