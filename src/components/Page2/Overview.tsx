import { useEffect, useState } from 'react';
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
  const [activeSection, setActiveSection] = useState('overview');

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        'overview',
        'benefits',
        'documents',
        'registration',
        'fees',
        'timeline',
        'whyus',
        'faq'
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

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="flex flex-col lg:flex-row gap-4 p-4 lg:p-8">
      {/* Sticky Sidebar */}
      <aside className="lg:w-1/5 sticky top-4 h-fit bg-white border p-4 rounded shadow-md">
        <ul className="space-y-2 font-medium text-gray-700">
          <li 
            className={`hover:text-blue-600 cursor-pointer ${activeSection === 'overview' ? 'text-blue-600 font-semibold' : ''}`}
            onClick={() => scrollToSection('overview')}
          >
            Overview
          </li>
          
            <li 
              className={`hover:text-blue-600 cursor-pointer ${activeSection === 'benefits' ? 'text-blue-600 font-semibold' : ''}`}
              onClick={() => scrollToSection('benefits')}
            >
              Benefits
            </li>
          
          
            <li 
              className={`hover:text-blue-600 cursor-pointer ${activeSection === 'documents' ? 'text-blue-600 font-semibold' : ''}`}
              onClick={() => scrollToSection('documents')}
            >
              Documents Required
            </li>
          
          
            <li 
              className={`hover:text-blue-600 cursor-pointer ${activeSection === 'registration' ? 'text-blue-600 font-semibold' : ''}`}
              onClick={() => scrollToSection('registration')}
            >
              Registration Procedure
            </li>
          
          
            <li 
              className={`hover:text-blue-600 cursor-pointer ${activeSection === 'fees' ? 'text-blue-600 font-semibold' : ''}`}
              onClick={() => scrollToSection('fees')}
            >
              Fees Structure
            </li>
          
          
            <li 
              className={`hover:text-blue-600 cursor-pointer ${activeSection === 'timeline' ? 'text-blue-600 font-semibold' : ''}`}
              onClick={() => scrollToSection('timeline')}
            >
              Registration Timeline
            </li>
        
            <li 
              className={`hover:text-blue-600 cursor-pointer ${activeSection === 'whyus' ? 'text-blue-600 font-semibold' : ''}`}
              onClick={() => scrollToSection('whyus')}
            >
              Why Us
            </li>
          
       
            <li 
              className={`hover:text-blue-600 cursor-pointer ${activeSection === 'faq' ? 'text-blue-600 font-semibold' : ''}`}
              onClick={() => scrollToSection('faq')}
            >
              FAQ
            </li>
          
        </ul>
      </aside>

      {/* Main Content */}
      <main className="lg:w-3/5 space-y-6">
        {/* Overview Section */}
        <section id="overview">
          {overview.map((section, index) => (
            <section key={index}>
              <h2 className="text-xl font-semibold mt-4">{section.heading}</h2>
              <p className="mt-2 text-gray-700">{section.content}</p>
            </section>
          ))}
        </section>

        {/* Dynamic Sections */}
        console.log("Benefits data", benefits);
        <section id="benefits">
          {benefits?.[0]?.heading && (
          <>
            <h2 className="text-xl font-semibold mt-6">
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
      <aside className="lg:w-1/5 sticky top-10 h-fit bg-white border p-4 rounded shadow-md">
        <div className="text-center mb-4">
          <span className="bg-blue-500 text-white text-xs px-2 py-1 rounded-full">
            Upto 50%
          </span>
          <h3 className="font-bold mt-2">Free Consultation by Expert</h3>
        </div>
        <form className="space-y-3">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full border px-3 py-2 rounded"
          />
          <input
            type="email"
            placeholder="Email Address"
            className="w-full border px-3 py-2 rounded"
          />
          <div className="flex gap-2">
            <span className="flex items-center px-2 border rounded bg-gray-100">
              +91
            </span>
            <input
              type="tel"
              placeholder="Mobile Number"
              className="w-full border px-3 py-2 rounded"
            />
          </div>
          <select className="w-full border px-3 py-2 rounded">
            <option>Select State</option>
            <option>Delhi</option>
            <option>Maharashtra</option>
          </select>
          <button
            type="submit"
            className="w-full bg-orange-500 text-white py-2 rounded font-semibold"
          >
            GET STARTED NOW
          </button>
        </form>
      </aside>
    </div>
  );
};

export default Overview;