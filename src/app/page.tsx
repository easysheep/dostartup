"use client";
import { useRouter } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import CountUp from "react-countup";

const heroImages = ["/hero1.jpg", "/hero2.jpg", "/hero3.jpg"];

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

interface StatItem {
  stat: number;
  label: string;
  suffix: string;
}

const stats: StatItem[] = [
  { stat: 2000, label: "Startups Registered", suffix: "+" },
  { stat: 1500, label: "MSME/IEC Certifications", suffix: "+" },
  { stat: 500, label: "GST Filings", suffix: "+" },
  { stat: 100, label: "NBFC/PSARA Licenses", suffix: "+" },
];

export default function Home() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");
  const [currentHero, setCurrentHero] = useState(0);
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [hasBeenVisible, setHasBeenVisible] = useState<boolean>(false);

  // Function to check if the section is in viewport
  const handleScroll = () => {
    if (!sectionRef.current) return;

    const rect = sectionRef.current.getBoundingClientRect();
    const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;

    if (isVisible && !hasBeenVisible) {
      setHasBeenVisible(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // check on initial load too

    return () => window.removeEventListener("scroll", handleScroll);
  }, [hasBeenVisible]);

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
    <div className="min-h-screen bg-white text-gray-800 scroll-smooth">
      {/* WhatsApp Icon */}
      <a
        href="https://api.whatsapp.com/send?phone=9999644807&text=Hello,%20DoStartup"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="fixed bottom-10 right-10 z-50 h-[30px] w-[30px] md:h-[50px] md:w-[50px]">
          <img src="/whatsapp2.png" alt="whatsapp" />
        </div>
      </a>

      {/* Hero Section */}
      <section className="relative h-[91vh] flex items-center justify-center overflow-hidden">
        <motion.div
          key={currentHero}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{
            backgroundImage: `url(${heroImages[currentHero]})`,
            filter: "brightness(0.6)",
          }}
        />
        <div className="relative z-10 text-center px-6">
          <h1 className="text-white text-4xl sm:text-5xl md:text-6xl font-bold drop-shadow-lg">
            Simplify Your Business <br />
            <span className="text-emerald-400">Compliance & Management</span>
          </h1>
          <p className="mt-4 text-white text-lg md:text-xl">Partner With Us.</p>
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
                className="absolute right-3 top-1/2 transform -translate-y-1/2  text-white p-1 rounded-md text-2xl"
              >
                🔍
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">
            Our Top Services
          </h2>
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.05 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden transition cursor-pointer"
                onClick={() => router.push(service.link)}
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-5">
                  <h3 className="text-xl font-semibold">{service.title}</h3>
                  <p className="mt-2 text-gray-600">{service.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline / Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-10">How It Works</h2>
          <div className="space-y-8">
            {[
              "Choose Service",
              "Submit Documents",
              "We Process It",
              "You Get Certified",
            ].map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -100 : 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-emerald-50 rounded-lg shadow-md p-6 text-center"
              >
                <h3 className="text-xl font-semibold">{step}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-12">What Our Clients Say</h2>
          <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {[
              "“They made everything so easy!”",
              "“Quick, reliable and supportive!”",
              "“Perfect service for startups!”",
            ].map((quote, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="bg-white shadow-md rounded-xl p-6"
              >
                <p className="italic text-gray-600 mb-2">{quote}</p>
                <p className="font-semibold text-emerald-600">
                  — Happy Client {i + 1}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Us */}
      <section className="py-20 bg-white text-center px-6">
        <h2 className="text-3xl font-bold text-gray-800">Who We Are</h2>
        <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
          At DoStartup, we’re dedicated to simplifying legal compliance and
          registration processes for startups and small businesses. Our platform
          offers expert guidance and seamless services to help you grow your
          business with confidence.
        </p>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-10">Why Choose DoStartup?</h2>
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

      {/* Stats */}
      <section className="py-20 bg-white">
        <div ref={sectionRef} className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-10">Our Achievements</h2>
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((item, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.05 }}
                className="text-center"
              >
                <h3 className="text-4xl font-bold text-emerald-600">
                  {hasBeenVisible ? (
                    <CountUp
                      end={item.stat}
                      duration={2}
                      suffix={item.suffix}
                    />
                  ) : (
                    `0${item.suffix}`
                  )}
                </h3>
                <p className="text-gray-700 mt-2">{item.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-emerald-600 text-white text-center px-6">
        <h2 className="text-3xl font-bold mb-4">
          Ready to Start Your Business Journey?
        </h2>
        <p className="mb-8 text-lg">
          Get in touch with our experts today and take the first step towards
          growth!
        </p>
        <button
          onClick={() => router.push("/contact")}
          className="bg-white text-emerald-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition cursor-pointer"
        >
          Contact Us
        </button>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-gray-900 text-white text-center">
        <div className="max-w-xl mx-auto px-4">
          <h2 className="text-3xl font-bold">Stay Updated</h2>
          <p className="mt-4 text-lg">
            Subscribe to our newsletter for legal & startup insights.
          </p>
          <form className="mt-6 flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-md text-black focus:outline-none bg-white"
            />
            <button
              type="submit"
              className="bg-emerald-500 hover:bg-emerald-600 px-6 py-3 rounded-md text-white cursor-pointer"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
      {/* Our Expertise */}
<section className="py-20 bg-white text-gray-800">
  <div className="max-w-7xl mx-auto px-6">
    <h2 className="text-3xl font-bold text-center mb-10">Our Expertise</h2>
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {[
        "Startup Legal Advisory",
        "Trademark & IP Services",
        "Tax & Financial Compliance",
        "FSSAI & ISO Certifications",
        "Private/Public Ltd Incorporation",
        "Corporate Governance"
      ].map((expertise, i) => (
        <motion.div
          key={i}
          whileHover={{ scale: 1.05 }}
          className="bg-gray-100 p-6 rounded-xl shadow-md"
        >
          <h3 className="text-xl font-semibold">{expertise}</h3>
          <p className="mt-2 text-gray-600">
            We offer expert support in {expertise.toLowerCase()} tailored for modern businesses.
          </p>
        </motion.div>
      ))}
    </div>
  </div>
</section>

{/* Popular Registration Packages */}
<section className="py-20 bg-gray-50">
  <div className="max-w-7xl mx-auto px-6">
    <h2 className="text-3xl font-bold text-center mb-10">Popular Registration Packages</h2>
    <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
      {[
        { name: "Startup Combo Pack", price: "₹5,999", desc: "Company + GST + MSME + Consultancy" },
        { name: "MSME & IEC Duo", price: "₹2,499", desc: "Perfect for small businesses & exporters" },
        { name: "Complete Compliance Kit", price: "₹8,999", desc: "Company + GST + Annual Filings" }
      ].map((pack, i) => (
        <motion.div
          key={i}
          whileHover={{ scale: 1.05 }}
          className="bg-white p-6 rounded-2xl shadow-lg"
        >
          <h3 className="text-xl font-semibold mb-2">{pack.name}</h3>
          <p className="text-emerald-600 font-bold text-2xl mb-2">{pack.price}</p>
          <p className="text-gray-600">{pack.desc}</p>
        </motion.div>
      ))}
    </div>
  </div>
</section>

{/* FAQs */}
<section className="py-20 bg-white">
  <div className="max-w-5xl mx-auto px-6">
    <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
    <div className="space-y-6">
      {[
        {
          q: "How long does company registration take?",
          a: "Typically, it takes 5-7 working days depending on document submission and approval timelines."
        },
        {
          q: "What documents are required for GST registration?",
          a: "PAN, Aadhaar, business proof, and bank details are the essentials. We’ll assist you with everything."
        },
        {
          q: "Can I convert my business later?",
          a: "Yes, we offer services for business structure transitions, such as OPC to Pvt Ltd or LLP."
        }
      ].map((faq, i) => (
        <div key={i} className="border-b pb-4">
          <h3 className="font-semibold text-lg">{faq.q}</h3>
          <p className="text-gray-600 mt-2">{faq.a}</p>
        </div>
      ))}
    </div>
  </div>
</section>

{/* Media & Press Mentions */}
{/* <section className="py-20 bg-gray-50">
  <div className="max-w-6xl mx-auto px-6 text-center">
    <h2 className="text-3xl font-bold mb-10">Featured In</h2>
    <div className="flex flex-wrap items-center justify-center gap-10">
      {["/partner3.jpg", "/partner3.jpg", "/partner3.jpg", "/partner3.jpg"].map((logo, i) => (
        <img
          key={i}
          src={logo}
          alt="Media Logo"
          className="h-12 grayscale hover:grayscale-0 transition"
        />
      ))}
    </div>
  </div>
</section> */}

{/* Partners & Affiliates */}
{/* Partners Section */}
<section className="py-20 bg-white text-center overflow-hidden">
  <h2 className="text-3xl font-bold text-gray-800 mb-10">Our Trusted Partners</h2>
  <div className="relative w-full overflow-hidden">
    <div className="flex gap-16 animate-scroll whitespace-nowrap">
      {[
        "/partner1.jpg", "/partner2.jpg", "/partner3.jpg", "/partner4.png",
        "/partner5.jpg", "/partner6.jpg", "/partner7.jpg", "/partner8.jpg",
        "/partner9.jpg", "/partner10.jpg",
        // Repeating for seamless loop
        "/partner1.jpg", "/partner2.jpg", "/partner3.jpg", "/partner4.png",
      ].map((src, idx) => (
        <img
          key={idx}
          src={src}
          alt={`Partner ${idx + 1}`}
          className="h-24 w-auto object-contain"
        />
      ))}
    </div>
  </div>
</section>


{/* Footer Addition */}
<footer className="bg-gray-900 text-white py-12">
  <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-8 text-sm">
    <div>
      <h4 className="font-semibold mb-4">Company</h4>
      <ul className="space-y-2">
        <li><a href="/about">About Us</a></li>
        <li><a href="/contact">Contact</a></li>
        <li><a href="/privacy-policy">Privacy Policy</a></li>
        <li><a href="/terms">Terms & Conditions</a></li>
      </ul>
    </div>
    <div>
      <h4 className="font-semibold mb-4">Registrations</h4>
      <ul className="space-y-2">
        <li><a href="/register/private-limited-company">Private Ltd</a></li>
        <li><a href="/register/one-person-company">OPC</a></li>
        <li><a href="/register/msme">MSME</a></li>
        <li><a href="/register/gst">GST</a></li>
      </ul>
    </div>
    <div>
      <h4 className="font-semibold mb-4">Certifications</h4>
      <ul className="space-y-2">
        <li><a href="/register/iso">ISO</a></li>
        <li><a href="/register/fssai">FSSAI</a></li>
        <li><a href="/register/iec">IEC</a></li>
        <li><a href="/register/psara">PSARA</a></li>
      </ul>
    </div>
    <div>
      <h4 className="font-semibold mb-4">Contact</h4>
      <p>📍 Delhi, India</p>
      <p>📞 +91-99996 44807</p>
      <p>✉️ support@dostartup.in</p>
    </div>
  </div>
</footer>
    </div>
  );
}
