"use client";
import { useEffect, useState } from "react";
import Documentation from "./Documentation";
import FAQ from "./FAQ";
import FeeStructure from "./FeeStructure";
import Registration from "./Registration";
import Timeline from "./Timeline";
import Why from "./Why";

interface OverviewProps {
  overview: { heading: string; content: string }[];
  benefits?: {
    heading: string;
    content: string;
  }[];
  documentsRequired?: { heading: string; content: string }[];
  registrationProcedure?: { heading: string; content: string }[];
  feesStructure: {
    heading?: string;
    paymentMethods?: string[];
    description?: string;
    feeTable?: {
      category: string;
      amount: string;
    }[];
  }[];
  registrationTimeline: {
    heading: string;
    description?: string;
    steps?: {
      title: string;
      duration: string;
      description: string;
    }[];
    totalTime?: string;
  }[];
  whyUs?: {
    heading?: string;
    description?: string[];
    points?: string[];
    footerText?: string;
  }[];
  faq?: { question: string; answer: string }[];
}

const Overview: React.FC<OverviewProps> = ({
  overview,
  benefits = [],
  documentsRequired = [],
  registrationProcedure = [],
  feesStructure = [],
  registrationTimeline = [],
  whyUs = [],
  faq = [],
}) => {
  const [activeSection, setActiveSection] = useState("overview");

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(sectionId);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "overview",
        "benefits",
        "documents",
        "registration",
        "fees",
        "timeline",
        "whyus",
        "faq",
      ];

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="flex flex-col lg:flex-row gap-4 p-4 lg:p-8">
      {/* Sticky Sidebar */}
      <aside className="lg:w-1/5 sticky top-[150px] h-fit bg-white p-4 rounded shadow-md">
        <ul className="space-y-3">
          {[
            { id: "overview", label: "Overview" },
            { id: "benefits", label: "Benefits" },
            { id: "documents", label: "Documents Required" },
            { id: "registration", label: "Registration Procedure" },
            { id: "fees", label: "Fees Structure" },
            { id: "timeline", label: "Registration Timeline" },
            { id: "whyus", label: "Why Us" },
            { id: "faq", label: "FAQ" },
          ].map(({ id, label }) => (
            <li
              key={id}
              onClick={() => scrollToSection(id)}
              className={`outline-none cursor-pointer px-3 py-2 rounded-md transition-all duration-200 flex items-center gap-2 ${
                activeSection === id
                  ? "bg-blue-50 text-blue-600 border-l-4 border-blue-500 font-semibold"
                  : "hover:bg-gray-50 hover:text-blue-600"
              }`}
            >
              <span className="text-sm">{label}</span>
            </li>
          ))}
        </ul>
      </aside>

      {/* Main Content */}
      <main className="lg:w-3/5 space-y-6">
        {/* Overview Section */}
        <section id="overview">
          {overview.map((section, index) => (
            <section key={index}>
              <h2 className="text-xl font-extrabold text-gray-800">
                {section.heading}
              </h2>
              <p className="mt-2 text-gray-700">{section.content}</p>
            </section>
          ))}
        </section>

        {/* Dynamic Sections */}
        <section id="benefits">
          {benefits?.[0]?.heading && (
            <>
              <h2 className="text-xl font-extrabold text-gray-800">
                {benefits[0].heading}
              </h2>
              <p className="mt-2 text-gray-700">{benefits[0].content}</p>
            </>
          )}
        </section>

        <section id="documents">
          <Documentation documents={documentsRequired} />
        </section>

        <section id="registration">
          <Registration procedure={registrationProcedure} />
        </section>

        <section id="fees">
          <FeeStructure fees={feesStructure} />
        </section>

        <section id="timeline">
          <Timeline timeline={registrationTimeline} />
        </section>

        <section id="whyus">
          <Why whyUs={whyUs} />
        </section>

        <section id="faq">
          <FAQ faqs={faq} />
        </section>
      </main>

      {/* Sticky Form */}
      <aside className="lg:w-1/5 sticky top-[150px] h-fit bg-white rounded-xl p-6">
        {/* <div className="text-center mb-6">
          <span className="bg-blue-600 text-white text-xs font-medium px-3 py-1 rounded-full shadow-sm">
            Upto 50% OFF
          </span>
          <h3 className="font-semibold text-lg text-gray-800 mt-3">
            Free Consultation by Expert
          </h3>
        </div>

        <form className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="email"
            placeholder="Email Address"
            className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <div className="flex gap-2">
            <span className="flex items-center px-3 border border-gray-300 bg-gray-100 rounded-lg text-sm">
              +91
            </span>
            <input
              type="tel"
              placeholder="Mobile Number"
              className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <select className="w-full border border-gray-300 px-4 py-2 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400">
            <option>Select State</option>
            <option>Delhi</option>
            <option>Maharashtra</option>
          </select>
          <button
            type="submit"
            className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-lg font-semibold shadow transition duration-200 cursor-pointer"
          >
            GET STARTED NOW
          </button>
        </form> */}
      </aside>
    </div>
  );
};

export default Overview;
