"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Home() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/generate?query=${encodeURIComponent(searchQuery)}`);
    }
  };

  // Data for components
  const topServices = [
    "Compliance Tracker",
    "Launch My Business",
    "Compliance Solutions",
    "Business Incorporation",
    "Trademark Transfer",
    "PSARA Certification",
    "EPR Compliance for E-Waste",
    "Explore More",
  ];

  const servicesDetails = [
    {
      title: "Startup Registration",
      description:
        "Registering a new business can be challenging, but we strive to ensure maximum ease of registration...",
    },
    {
      title: "Tax Auditing",
      description:
        "Managing taxes is not easy but crucial for business. Our specialists guarantee precise tax audits...",
    },
    {
      title: "Environmental Consultancy",
      description:
        "We help businesses adopt sustainable practices and comply with eco-friendly policies...",
    },
    {
      title: "Advisory and Consultancy",
      description:
        "Our specialists provide customized advice tailored to your unique situation...",
    },
    {
      title: "Regulatory (BIS, CDSCO, ISO)",
      description:
        "We help with compliance and obtaining necessary certifications like BIS, CDSCO, and ISO...",
    },
    {
      title: "Licensing",
      description:
        "We handle everything from license application to approval, ensuring your business is fully compliant...",
    },
    {
      title: "On-Demand CA/CS Services",
      description:
        "Whether you need a Chartered Accountant or Company Secretary...",
    },
    {
      title: "Free Business Templates and DPR",
      description:
        "We provide various templates to streamline your paperwork...",
    },
  ];

  const processSteps = [
    {
      title: "Deep-Dive Research",
      description: "We analyze your unique needs and market trends.",
    },
    {
      title: "Collaborative Strategy Sessions",
      description: "Your vision + our expertise = actionable plans.",
    },
    {
      title: "Innovation Lab",
      description: "Custom solutions designed for scalability.",
    },
    {
      title: "Agile Revisions",
      description: "Your feedback shapes our work—no rigid templates.",
    },
    {
      title: "Seamless Execution",
      description: "From paperwork to launch, we've got you covered.",
    },
  ];

  const whyUsPoints = [
    {
      icon: "💰",
      title: "Transparent Pricing",
      description: "No hidden fees.",
    },
    {
      icon: "💻",
      title: "Tech-Driven Tools",
      description: "Streamline processes with our platform.",
    },
    {
      icon: "👤",
      title: "Dedicated Advisor",
      description: "One point of contact for all needs.",
    },
    {
      icon: "🌱",
      title: "Eco-Conscious",
      description: "Green business practices integrated.",
    },
  ];

  const stats = [
    {
      value: "INDIA'S LARGEST LEGAL TECH COMPANY",
      description:
        "Complete business compliance solutions powered by technology and experts.",
    },
    {
      value: "99.9% CLIENT SATISFACTION",
      description: "Expert services refined to meet your exact requirements.",
    },
    {
      value: "EXCELLENT ADVISORY SERVICES",
      description:
        "India's most extensive professional network for your success.",
    },
  ];

  return (
    <div className="min-h-screen">
      <a
        href="https://api.whatsapp.com/send?phone=9999644807&text=Hello,%20DoStartup"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="h-[40px] w-[40px] flex fixed z-10 bottom-10 right-10 cursor-pointer md:bottom-20 md:h-[50px] md:w-[50px]">
          <img src="whatsapp2.png" alt="" />
        </div>
      </a>

      {/* Hero Section */}
      <section className="px-4 py-20 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
            <span className="block">Simplify Your Business </span>
            <span className="block text-emerald-600">
              Compliance & Management
            </span>
          </h1>
          <p className="mt-6 max-w-lg mx-auto text-xl text-gray-600">
            Partner With Us.
          </p>

          <form onSubmit={handleSearch} className="mt-10 max-w-md mx-auto">
            <div className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search for compliance services..."
                spellCheck={false}
                className="w-full px-6 py-4 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 text-lg"
              />
              <button
                type="submit"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-emerald-600 text-white p-2 rounded-md hover:bg-emerald-700"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
            </div>
          </form>

          <div className="mt-16">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">
              Top services for you
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
              {topServices.map((service, index) => (
                <div
                  key={index}
                  onClick={() =>
                    router.push(
                      `/services/${service.toLowerCase().replace(/\s+/g, "-")}`
                    )
                  }
                  className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer border border-gray-100 hover:border-emerald-200 text-center"
                >
                  <div className="text-emerald-600 mb-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8 mx-auto"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <h3 className="font-medium text-gray-800">{service}</h3>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-16 pt-6 border-t border-gray-200">
            <p className="text-gray-600">
              Trusted by 42,800+ Clients Worldwide | ★★★★★ 4.9 Rating
            </p>
          </div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="bg-emerald-50 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">WHO ARE WE?</h2>
          <h3 className="text-4xl font-bold text-emerald-600 mb-6">
            DoStartup - Empowering Startups, Every Step of the Way
          </h3>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            At Dostartup, we combine expertise with passion to help your
            business thrive. From ideation to execution, our tailored solutions
            ensure compliance, innovation, and growth.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-gray-50 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Best Business Management Platform
            </h2>
            <div className="mt-6 max-w-3xl mx-auto">
              <p className="text-lg text-gray-600">
                DoStartup is more than a service, we are your dedicated partner
                in navigating the Indian business landscape. We understand the
                challenges startups and enterprises face.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {servicesDetails.map((service, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="text-emerald-600 mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-10 w-10"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-16">
            WHY DoStartup
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyUsPoints.map((point, index) => (
              <div
                key={index}
                className="text-center p-6 border border-gray-100 rounded-lg hover:shadow-md transition-shadow"
              >
                <div className="text-4xl mb-4">{point.icon}</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {point.title}
                </h3>
                <p className="text-gray-600">{point.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-emerald-600 text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <h3 className="text-2xl font-bold mb-4">{stat.value}</h3>
                <p className="text-emerald-100">{stat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process Section */}
      <section className="bg-gray-50 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Process
            </h2>
            <h3 className="text-2xl text-emerald-600">
              How We Deliver Excellence
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {processSteps.map((step, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center"
              >
                <div className="bg-emerald-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                  <span className="text-emerald-600 text-2xl font-bold">
                    {index + 1}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
