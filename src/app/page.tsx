"use client";
import { useRouter } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

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

const processSteps = [
  {
    title: "Consultation",
    description:
      "Schedule a free consultation with our experts to understand your business needs.",
    icon: "💼",
  },
  {
    title: "Document Collection",
    description: "Submit required documents through our secure portal.",
    icon: "📋",
  },
  {
    title: "Application Filing",
    description:
      "Our team files your application with the relevant authorities.",
    icon: "📝",
  },
  {
    title: "Verification & Processing",
    description:
      "Track application status in real-time as we handle verifications.",
    icon: "✅",
  },
  {
    title: "Certificate Delivery",
    description:
      "Receive your digital certificates and physical copies if requested.",
    icon: "🏆",
  },
];

const faqs = [
  {
    question: "How long does company registration take?",
    answer:
      "Typically, Private Limited company registration takes 7-10 working days from document submission. One Person Company (OPC) registration usually takes 5-7 working days. Timelines may vary based on government processing speeds and document completeness.",
  },
  {
    question: "What documents are required for GST registration?",
    answer:
      "For GST registration, you'll need PAN card, Aadhaar card, proof of business address (electricity bill, rent agreement, etc.), bank account details with statements, photographs, and business incorporation documents. Our team will guide you through the entire documentation process.",
  },
  {
    question: "What are the benefits of MSME registration?",
    answer:
      "MSME registration provides several benefits including priority sector lending, lower interest rates, protection against delayed payments, tax exemptions, subsidies for patent registration, ISO certification reimbursement, and eligibility for government tenders and schemes.",
  },
  {
    question: "Can I convert my business structure later?",
    answer:
      "Yes, you can convert your business structure as your business grows. We offer conversion services for OPC to Private Limited, Proprietorship to LLP, and other business structure transitions. Our experts will guide you through the legal and compliance requirements for a smooth transition.",
  },
  {
    question:
      "What ongoing compliances do I need to maintain after registration?",
    answer:
      "After registration, businesses need to maintain various compliances including annual filings, GST returns, income tax returns, maintaining statutory registers, conducting board meetings, and fulfilling industry-specific requirements. Our compliance management services can help you stay on track.",
  },
  {
    question: "Do you provide post-registration support?",
    answer:
      "Absolutely! We offer comprehensive post-registration support including compliance management, annual filings, tax consultations, and business advisory services. Our goal is to be your long-term compliance partner throughout your business journey.",
  },
];

export default function Home() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");
  const [currentHero, setCurrentHero] = useState(0);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const processRef = useRef<HTMLDivElement | null>(null);

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

  const scrollToProcess = () => {
    processRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const toggleFaq = (index: number) => {
    setExpandedFaq((prevExpandedFaq) =>
      prevExpandedFaq === index ? null : index
    );
  };

  return (
    <div className="min-h-screen bg-white text-gray-800 scroll-smooth">
      {/* WhatsApp Icon */}
      <a
        href="https://api.whatsapp.com/send?phone=9999644807&text=Hello,%20DoStartup"
        target="_blank"
        rel="noopener noreferrer"
        className="transition-all hover:scale-110"
      >
        <div className="fixed bottom-10 right-10 z-50 h-[60px] w-[60px] md:h-[70px] md:w-[70px] drop-shadow-lg">
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
            filter: "brightness(0.5)",
          }}
        />
        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white text-4xl sm:text-5xl md:text-6xl font-bold drop-shadow-lg"
          >
            Simplify Your Business <br />
            <span className="text-emerald-400">Compliance & Management</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-4 text-white text-lg md:text-xl max-w-2xl mx-auto"
          >
            Trusted by 2000+ businesses across India for fast, reliable, and
            cost-effective business registration and compliance services.
          </motion.p>
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            onSubmit={handleSearch}
            className="mt-8 max-w-xl mx-auto"
          >
            <div className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search for compliance services..."
                className="w-full px-6 py-4 rounded-lg border-2 border-transparent bg-white bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-lg shadow-lg"
              />
              <button
                type="submit"
                className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-emerald-600 text-white p-2 rounded-md hover:bg-emerald-700 transition"
              >
                🔍
              </button>
            </div>
          </motion.form>
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            onClick={scrollToProcess}
            className="mt-8 text-white border-2 border-emerald-500 px-6 py-3 rounded-full hover:bg-emerald-500 transition-all duration-300"
          >
            Learn How It Works ↓
          </motion.button>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Our Top Services</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Comprehensive business registration and compliance solutions to
              keep your business legally sound and operationally efficient.
            </p>
          </div>
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.05 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden transition cursor-pointer group"
                onClick={() => router.push(service.link)}
              >
                <div className="relative overflow-hidden h-48">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-5">
                  <h3 className="text-xl font-semibold text-gray-800">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-gray-600">{service.description}</p>
                  <div className="mt-4 text-emerald-600 font-medium flex items-center opacity-0 group-hover:opacity-100 transition-opacity">
                    Learn more
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 ml-1"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-12">
            <button
              onClick={() => router.push("/services")}
              className="bg-emerald-600 text-white px-6 py-3 rounded-lg hover:bg-emerald-700 transition shadow-md"
            >
              View All Services
            </button>
          </div>
        </div>
      </section>

      {/* Timeline / Process Section - Enhanced Version */}
      <section
        ref={processRef}
        className="py-20 bg-gradient-to-b from-white to-emerald-50"
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">How It Works</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Our streamlined process ensures that your business registration
              and compliance needs are handled efficiently and professionally.
            </p>
          </div>

          <div className="relative">
            {/* Timeline Connector */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-emerald-200 hidden md:block"></div>

            {/* Process Steps */}
            <div className="space-y-16 relative">
              {processSteps.map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true, margin: "-100px" }}
                  className="flex flex-col md:flex-row items-center"
                >
                  {/* Timeline Point */}
                  <div className="hidden md:block w-1/2 md:pr-8 text-right">
                    {i % 2 === 0 && (
                      <div>
                        <h3 className="text-2xl font-semibold text-gray-800">
                          {step.title}
                        </h3>
                        <p className="mt-2 text-gray-600">{step.description}</p>
                      </div>
                    )}
                  </div>

                  {/* Circle Node */}
                  <div className="relative flex-shrink-0 z-10">
                    <div className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center text-white text-2xl shadow-lg">
                      {step.icon}
                    </div>
                    <div className="absolute top-0 left-0 w-12 h-12 bg-emerald-500 rounded-full animate-ping opacity-20"></div>
                  </div>

                  <div className="hidden md:block w-1/2 md:pl-8 text-left">
                    {i % 2 !== 0 && (
                      <div>
                        <h3 className="text-2xl font-semibold text-gray-800">
                          {step.title}
                        </h3>
                        <p className="mt-2 text-gray-600">{step.description}</p>
                      </div>
                    )}
                  </div>

                  {/* Mobile layout - always show content */}
                  <div className="mt-4 text-center md:hidden">
                    <h3 className="text-xl font-semibold text-gray-800">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-gray-600">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="text-center mt-16">
            <button
              onClick={() => router.push("/contact")}
              className="bg-emerald-600 text-white px-8 py-4 rounded-lg hover:bg-emerald-700 transition shadow-lg font-medium"
            >
              Get Started Now
            </button>
          </div>
        </div>
      </section>

      {/* Testimonials - Enhanced */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-gray-300 mb-12 max-w-3xl mx-auto">
            Don't just take our word for it. See what our clients have to say
            about our services.
          </p>
          <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-3">
            {[
              {
                quote:
                  "DoStartup made my company registration process incredibly smooth. Their team guided me through every step and handled all the paperwork efficiently.",
                name: "Rahul Sharma",
                company: "TechVision Solutions",
                image: "/testimonial1.jpg",
              },
              {
                quote:
                  "As a first-time entrepreneur, I was nervous about the legal requirements. DoStartup's experts simplified everything and got my MSME registration done in record time!",
                name: "Priya Patel",
                company: "Organic Foods Co.",
                image: "/testimonial2.jpg",
              },
              {
                quote:
                  "The team at DoStartup helped me navigate the complex GST registration process with ease. Their post-registration support has been exceptional.",
                name: "Amit Kumar",
                company: "Global Exports",
                image: "/testimonial3.jpg",
              },
            ].map((testimonial, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.03 }}
                className="bg-gray-800 shadow-lg rounded-xl p-6 text-left relative"
              >
                <div className="absolute -top-6 left-6 text-5xl text-emerald-500">
                  "
                </div>
                <p className="text-gray-300 mb-6 pt-4">{testimonial.quote}</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-gray-700 mr-4"></div>
                  <div>
                    <p className="font-semibold text-emerald-400">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-gray-400">
                      {testimonial.company}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Us - Enhanced */}
      <section className="py-20 bg-white text-center px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">Who We Are</h2>
          <p className="mt-4 text-lg text-gray-600">
            At DoStartup, we're dedicated to simplifying legal compliance and
            registration processes for startups and small businesses. Our
            platform offers expert guidance and seamless services to help you
            grow your business with confidence.
          </p>
          <p className="mt-4 text-lg text-gray-600">
            With a team of experienced legal and business consultants, we've
            helped over 2000 businesses navigate the complex world of
            regulations and compliance.
          </p>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="text-3xl text-emerald-500 mb-2">🏆</div>
              <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
              <p className="text-gray-600">
                To simplify business compliance for entrepreneurs, allowing them
                to focus on growth.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="text-3xl text-emerald-500 mb-2">👁️</div>
              <h3 className="text-xl font-semibold mb-2">Our Vision</h3>
              <p className="text-gray-600">
                To become India's most trusted business compliance partner for
                startups and SMEs.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="text-3xl text-emerald-500 mb-2">💎</div>
              <h3 className="text-xl font-semibold mb-2">Our Values</h3>
              <p className="text-gray-600">
                Transparency, expertise, customer-centricity, and continuous
                innovation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Why Choose DoStartup?</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              We combine expertise, technology, and personalized service to
              provide the best business registration experience.
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Expert Guidance",
                icon: "📘",
                description:
                  "Our team of experienced consultants provides expert guidance throughout your business journey.",
              },
              {
                title: "Fast Processing",
                icon: "⚡",
                description:
                  "We prioritize speed without compromising on quality, ensuring quick turnaround times.",
              },
              {
                title: "Affordable Pricing",
                icon: "💰",
                description:
                  "Transparent pricing with no hidden charges, making compliance accessible for businesses of all sizes.",
              },
              {
                title: "Reliable Support",
                icon: "📞",
                description:
                  "Dedicated customer support available to assist you with any questions or concerns.",
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.05 }}
                className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-emerald-800 text-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-12">Our Achievements</h2>
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { stat: "2000+", label: "Startups Registered" },
              { stat: "1500+", label: "MSME/IEC Certifications" },
              { stat: "500+", label: "GST Filings" },
              { stat: "100+", label: "NBFC/PSARA Licenses" },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="inline-block rounded-full bg-emerald-700 p-4 mb-4">
                  <h3 className="text-4xl font-bold text-white">{item.stat}</h3>
                </div>
                <p className="text-emerald-100 text-lg font-medium mt-2">
                  {item.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
              
      {/* Our Expertise */}
      <section className="py-20 bg-white text-gray-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Our Expertise</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              With years of experience in business compliance, we offer expert
              services across various domains.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Startup Legal Advisory",
                description:
                  "We offer expert legal support for startups, helping them navigate the complex legal landscape.",
                icon: "⚖️",
              },
              {
                title: "Trademark & IP Services",
                description:
                  "Protect your intellectual property with our comprehensive trademark and IP registration services.",
                icon: "™️",
              },
              {
                title: "Tax & Financial Compliance",
                description:
                  "Stay compliant with all tax regulations with our financial compliance services.",
                icon: "📊",
              },
              {
                title: "FSSAI & ISO Certifications",
                description:
                  "Get certified with industry-standard certifications to enhance your business credibility.",
                icon: "🏅",
              },
              {
                title: "Private/Public Ltd Incorporation",
                description:
                  "Incorporate your business with the right structure to support your growth ambitions.",
                icon: "🏢",
              },
              {
                title: "Corporate Governance",
                description:
                  "Establish robust corporate governance frameworks for sustainable business operations.",
                icon: "📑",
              },
            ].map((expertise, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="bg-gray-50 p-6 rounded-xl shadow-md border-l-4 border-emerald-500"
              >
                <div className="text-3xl mb-4">{expertise.icon}</div>
                <h3 className="text-xl font-semibold mb-3">
                  {expertise.title}
                </h3>
                <p className="text-gray-600">{expertise.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Registration Packages */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              Popular Registration Packages
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Comprehensive packages designed to meet your specific business
              needs at competitive prices.
            </p>
          </div>
          <div className="grid gap-10 md:grid-cols-3">
            {[
              {
                name: "Startup Combo Pack",
                price: "₹5,999",
                desc: "Company + GST + MSME + Consultancy",
                features: [
                  "Private Limited Registration",
                  "GST Registration",
                  "MSME Certificate",
                  "1-hour Business Consultation",
                  "Annual Compliance Calendar",
                ],
              },
              {
                name: "MSME & IEC Duo",
                price: "₹2,499",
                desc: "Perfect for small businesses & exporters",
                features: [
                  "MSME Registration",
                  "IEC Certificate",
                  "Export Documentation Guide",
                  "Import-Export Consultation",
                  "Compliance Support",
                ],
              },
              {
                name: "Complete Compliance Kit",
                price: "₹8,999",
                desc: "Company + GST + Annual Filings",
                features: [
                  "Private Limited Registration",
                  "GST Registration",
                  "Annual ROC Filings",
                  "GST Returns (1 Year)",
                  "Dedicated Relationship Manager",
                ],
              },
            ].map((pack, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 flex flex-col h-full"
              >
                <div className="mb-auto">
                  <h3 className="text-2xl font-semibold mb-2">{pack.name}</h3>
                  <p className="text-emerald-600 font-bold text-3xl mb-4">
                    {pack.price}
                  </p>
                  <p className="text-gray-600 mb-6">{pack.desc}</p>
                  <ul className="space-y-2 mb-8">
                    {pack.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <svg
                          className="h-6 w-6 text-emerald-500 mr-2 flex-shrink-0"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <button
                  onClick={() => router.push("/contact")}
                  className="mt-4 w-full bg-emerald-600 hover:bg-emerald-700 text-white py-3 rounded-lg transition font-medium"
                >
                  Get Started
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs - Enhanced */}
      <section className="py-20 bg-gradient-to-b from-white to-emerald-50">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Find answers to common questions about business registration and
              compliance.
            </p>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                className={`border border-gray-200 rounded-lg overflow-hidden ${
                  expandedFaq === i ? "shadow-md" : ""
                }`}
                initial={false}
                animate={{
                  backgroundColor:
                    expandedFaq === i
                      ? "rgb(240, 253, 244)"
                      : "rgb(255, 255, 255)",
                }}
                transition={{ duration: 0.3 }}
              >
                <button
                  onClick={() => toggleFaq(i)}
                  className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none"
                >
                  <h3 className="font-semibold text-lg text-gray-800">
                    {faq.question}
                  </h3>
                  <svg
                    className={`w-5 h-5 text-emerald-600 transition-transform duration-300 ${
                      expandedFaq === i ? "rotate-180" : ""
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                <AnimatePresence>
                  {expandedFaq === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-6 pb-4"
                    >
                      <p className="text-gray-600">{faq.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">Still have questions?</p>
            <button
              onClick={() => router.push("/contact")}
              className="bg-emerald-600 text-white px-6 py-3 rounded-lg hover:bg-emerald-700 transition-colors duration-300"
            >
              Contact Our Experts
            </button>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-emerald-700 text-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">
              Ready to Start Your Business Journey?
            </h2>
            <p className="mb-8 text-lg max-w-3xl mx-auto">
              Get in touch with our experts today and take the first step
              towards building a compliant and successful business!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => router.push("/contact")}
                className="bg-white text-emerald-700 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300 shadow-lg"
              >
                Contact Us
              </button>
              <button
                onClick={() => router.push("/services")}
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors duration-300"
              >
                Explore Services
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Partners Section - Enhanced */}
      <section className="py-20 bg-white text-center overflow-hidden">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Our Trusted Partners
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto mb-10">
            We collaborate with leading organizations to provide the best
            services to our clients.
          </p>
          <div className="relative w-full overflow-hidden">
            <div className="flex gap-16 animate-scroll whitespace-nowrap">
              {[
                "/partner1.jpg",
                "/partner2.jpg",
                "/partner3.jpg",
                "/partner4.png",
                "/partner5.jpg",
                "/partner6.jpg",
                "/partner7.jpg",
                "/partner8.jpg",
                "/partner9.jpg",
                "/partner10.jpg",
                // Repeating for seamless loop
                "/partner1.jpg",
                "/partner2.jpg",
                "/partner3.jpg",
                "/partner4.png",
              ].map((src, idx) => (
                <img
                  key={idx}
                  src={src}
                  alt={`Partner ${idx + 1}`}
                  className="h-16 sm:h-20 md:h-24 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup - Enhanced */}
      <section className="py-20 bg-gray-900 text-white text-center">
        <div className="max-w-xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
          <p className="mt-4 text-lg text-gray-300 mb-8">
            Subscribe to our newsletter for legal updates, compliance reminders,
            and startup insights.
          </p>
          <form className="mt-6 flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-emerald-500"
              required
            />
            <button
              type="submit"
              className="bg-emerald-500 hover:bg-emerald-600 px-6 py-3 rounded-md text-white font-medium transition-colors duration-300"
            >
              Subscribe
            </button>
          </form>
          <p className="text-xs text-gray-400 mt-4">
            By subscribing, you agree to receive emails from DoStartup. You can
            unsubscribe at any time.
          </p>
        </div>
      </section>

      {/* Footer - Enhanced */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12">
            <div className="space-y-4">
              <h4 className="font-semibold text-lg border-b border-gray-700 pb-2 mb-4">
                Company
              </h4>
              <ul className="space-y-3">
                <li>
                  <a
                    href="/about"
                    className="text-gray-300 hover:text-emerald-400 transition-colors"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="/team"
                    className="text-gray-300 hover:text-emerald-400 transition-colors"
                  >
                    Our Team
                  </a>
                </li>
                <li>
                  <a
                    href="/careers"
                    className="text-gray-300 hover:text-emerald-400 transition-colors"
                  >
                    Careers
                  </a>
                </li>
                <li>
                  <a
                    href="/contact"
                    className="text-gray-300 hover:text-emerald-400 transition-colors"
                  >
                    Contact
                  </a>
                </li>
                <li>
                  <a
                    href="/blog"
                    className="text-gray-300 hover:text-emerald-400 transition-colors"
                  >
                    Blog
                  </a>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="font-semibold text-lg border-b border-gray-700 pb-2 mb-4">
                Registrations
              </h4>
              <ul className="space-y-3">
                <li>
                  <a
                    href="/register/private-limited-company"
                    className="text-gray-300 hover:text-emerald-400 transition-colors"
                  >
                    Private Ltd
                  </a>
                </li>
                <li>
                  <a
                    href="/register/one-person-company"
                    className="text-gray-300 hover:text-emerald-400 transition-colors"
                  >
                    OPC
                  </a>
                </li>
                <li>
                  <a
                    href="/register/llp"
                    className="text-gray-300 hover:text-emerald-400 transition-colors"
                  >
                    LLP
                  </a>
                </li>
                <li>
                  <a
                    href="/register/msme"
                    className="text-gray-300 hover:text-emerald-400 transition-colors"
                  >
                    MSME
                  </a>
                </li>
                <li>
                  <a
                    href="/register/gst"
                    className="text-gray-300 hover:text-emerald-400 transition-colors"
                  >
                    GST
                  </a>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="font-semibold text-lg border-b border-gray-700 pb-2 mb-4">
                Certifications
              </h4>
              <ul className="space-y-3">
                <li>
                  <a
                    href="/register/iso"
                    className="text-gray-300 hover:text-emerald-400 transition-colors"
                  >
                    ISO
                  </a>
                </li>
                <li>
                  <a
                    href="/register/fssai"
                    className="text-gray-300 hover:text-emerald-400 transition-colors"
                  >
                    FSSAI
                  </a>
                </li>
                <li>
                  <a
                    href="/register/iec"
                    className="text-gray-300 hover:text-emerald-400 transition-colors"
                  >
                    IEC
                  </a>
                </li>
                <li>
                  <a
                    href="/register/trademark"
                    className="text-gray-300 hover:text-emerald-400 transition-colors"
                  >
                    Trademark
                  </a>
                </li>
                <li>
                  <a
                    href="/register/psara"
                    className="text-gray-300 hover:text-emerald-400 transition-colors"
                  >
                    PSARA
                  </a>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="font-semibold text-lg border-b border-gray-700 pb-2 mb-4">
                Contact Us
              </h4>
              <div className="space-y-3 text-gray-300">
                <p className="flex items-start">
                  <svg
                    className="h-5 w-5 mr-2 text-emerald-400 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <span>Delhi, India</span>
                </p>
                <p className="flex items-start">
                  <svg
                    className="h-5 w-5 mr-2 text-emerald-400 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  <span>+91-99996 44807</span>
                </p>
                <p className="flex items-start">
                  <svg
                    className="h-5 w-5 mr-2 text-emerald-400 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <span>support@dostartup.in</span>
                </p>
              </div>
              <div className="mt-6">
                <h5 className="font-medium mb-3">Follow Us</h5>
                <div className="flex space-x-4">
                  {["facebook", "twitter", "instagram", "linkedin"].map(
                    (social, i) => (
                      <a
                        key={i}
                        href={`https://${social}.com`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="h-10 w-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-emerald-600 transition-colors duration-300"
                      >
                        <span className="sr-only">{social}</span>
                        <svg
                          className="h-5 w-5"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
                        </svg>
                      </a>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400 text-sm">
            <p>© {new Date().getFullYear()} DoStartup. All rights reserved.</p>
            <div className="mt-2 flex justify-center space-x-6">
              <a
                href="/privacy-policy"
                className="hover:text-emerald-400 transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="/terms"
                className="hover:text-emerald-400 transition-colors"
              >
                Terms of Service
              </a>
              <a
                href="/refund-policy"
                className="hover:text-emerald-400 transition-colors"
              >
                Refund Policy
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Add global styles for animations */}
      <style jsx global>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
      `}</style>
    </div>
  );
}
