"use client";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const heroImages = [
  "/hero1.jpg",
  "/hero2.jpg",
  "/hero3.jpg",
];

const services = [
  {
    title: "Private Limited Company Registration",
    description:
      "Get your company registered hassle-free with our expert guidance.",
    image: "/private.jpg",
    link: "/register/private-limited-company",
  },
  {
    title: "One Person Company Registration",
    description: "Register your OPC and enjoy limited liability benefits.",
    image: "/opc.jpg",
    link: "/register/one-person-company",
  },
  {
    title: "MSME Registration",
    description:
      "Boost your business with MSME registration and avail government benefits.",
    image: "/msme.jpg",
    link: "/register/msme",
  },
  {
    title: "GST Registration",
    description:
      "Get your GST number quickly and efficiently with our experts.",
    image: "/gst.jpg",
    link: "/register/gst",
  },
];

export default function Home() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");
  const [currentHero, setCurrentHero] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHero((prev) => (prev + 1) % heroImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/generate?query=${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* WhatsApp Icon */}
      <a
        href="https://api.whatsapp.com/send?phone=9999644807&text=Hello,%20DoStartup"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="fixed bottom-10 right-10 z-50 h-[60px] w-[60px] md:h-[70px] md:w-[70px]">
          <img src="/whatsapp2.png" alt="whatsapp" />
        </div>
      </a>

      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <motion.div
          key={currentHero}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{
            backgroundImage: `url(${heroImages[currentHero]})`,
            filter: "brightness(0.7)",
          }}
        />
        <div className="relative z-10 text-center px-6">
          <h1 className="text-white text-4xl sm:text-5xl md:text-6xl font-bold drop-shadow-lg">
            Simplify Your Business <br />
            <span className="text-emerald-400">Compliance & Management</span>
          </h1>
          <p className="mt-4 text-white text-lg md:text-xl">
            Partner With Us.
          </p>

          <form onSubmit={handleSearch} className="mt-8 max-w-xl mx-auto">
            <div className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search for compliance services..."
                className="w-full px-6 py-4 rounded-lg border-2 border-white bg-white bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-lg"
              />
              <button
                type="submit"
                className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-emerald-600 text-white p-2 rounded-md hover:bg-emerald-700"
              >
                🔍
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-800">
            Our Top Services
          </h2>
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.05 }}
                className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition"
                onClick={() => router.push(service.link)}
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-5">
                  <h3 className="text-lg font-semibold text-gray-800">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm mt-2">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-800">Who We Are</h2>
          <p className="mt-6 text-gray-600 text-lg">
            At DoStartup, we’re dedicated to simplifying legal compliance and
            registration processes for startups and small businesses. Our
            platform offers expert guidance and seamless services to help you
            grow your business with confidence.
          </p>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-10">
            Why Choose DoStartup?
          </h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { title: "Expert Guidance", icon: "📘" },
              { title: "Fast Processing", icon: "⚡" },
              { title: "Affordable Pricing", icon: "💰" },
              { title: "Reliable Support", icon: "📞" },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.05 }}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg"
              >
                <div className="text-4xl mb-3">{item.icon}</div>
                <h3 className="text-lg font-semibold text-gray-700">
                  {item.title}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-10">
            Our Achievements
          </h2>
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { stat: "2000+", label: "Startups Registered" },
              { stat: "1500+", label: "MSME/IEC Certifications" },
              { stat: "500+", label: "GST Filings" },
              { stat: "100+", label: "NBFC/PSARA Licenses" },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.05 }}
                className="text-center"
              >
                <h3 className="text-4xl font-bold text-emerald-600">
                  {item.stat}
                </h3>
                <p className="text-gray-700 mt-2">{item.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
