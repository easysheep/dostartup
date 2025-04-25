"use client";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import PartnershipFirmRegistration from "@/components/Register/PartnershipFirmRegistration";

// Define icon component with proper types
type IconName = "company" | "opc" | "partnership" | "certificate" | "default";

const IconComponent = ({ name }: { name: IconName }) => {
  const icons: Record<IconName, JSX.Element> = {
    company: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
        <polyline points="9 22 9 12 15 12 15 22"></polyline>
      </svg>
    ),
    opc: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
        <circle cx="12" cy="7" r="4"></circle>
      </svg>
    ),
    partnership: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
        <circle cx="9" cy="7" r="4"></circle>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
      </svg>
    ),
    certificate: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
        <rect x="3" y="4" width="18" height="16" rx="2"></rect>
        <path d="M9 9h6"></path>
        <path d="M9 13h6"></path>
        <path d="M9 17h6"></path>
      </svg>
    ),
    default: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
        <polyline points="14 2 14 8 20 8"></polyline>
        <line x1="16" y1="13" x2="8" y2="13"></line>
        <line x1="16" y1="17" x2="8" y2="17"></line>
        <polyline points="10 9 9 9 8 9"></polyline>
      </svg>
    ),
  };

  return icons[name] || icons.default;
};

// Define registration slug types
type RegistrationSlug = 
  | "private-limited-company" 
  | "opc" 
  | "partnership-firm" 
  | "msme" 
  | "iec" 
  | "psara" 
  | "ce" 
  | "nbfc" 
  | "plastic-waste" 
  | "gst";

// Define content type
interface RegistrationContent {
  title: string;
  description: string;
  component: JSX.Element;
  benefits: string[];
}

const getIconName = (slug: string): IconName => {
  const iconMap: Record<RegistrationSlug, IconName> = {
    "private-limited-company": "company",
    "opc": "opc",
    "partnership-firm": "partnership",
    "ce": "certificate",
    "msme": "default",
    "iec": "default",
    "psara": "default",
    "nbfc": "default",
    "plastic-waste": "default",
    "gst": "default"
  };
  
  return (iconMap[slug as RegistrationSlug] || "default");
};

const registrationDetails: Record<RegistrationSlug, RegistrationContent> = {
  "private-limited-company": {
    title: "Private Limited Company Registration",
    description:
      "Ideal for startups and growing businesses. Offers limited liability and ease of ownership transfer.",
    component: <PartnershipFirmRegistration />,
    benefits: [
      "Limited liability protection for shareholders",
      "Easier access to funding and investment",
      "Enhanced credibility with clients and partners",
      "Transferable ownership structure"
    ]
  },
  opc: {
    title: "One Person Company (OPC) Registration",
    description:
      "Perfect for solo entrepreneurs looking for a corporate structure with limited liability.",
    component: <PartnershipFirmRegistration />,
    benefits: [
      "Limited liability protection with single ownership",
      "Simplified compliance requirements",
      "Professional corporate identity",
      "Easier conversion to private limited company"
    ]
  },
  "partnership-firm": {
    title: "Partnership Firm Registration",
    description:
      "Suitable for businesses run by two or more partners with shared responsibilities and profits.",
    component: <PartnershipFirmRegistration />,
    benefits: [
      "Simple and cost-effective formation process",
      "Shared management responsibilities",
      "Combined expertise and resources",
      "Flexible profit-sharing arrangements"
    ]
  },
  msme: {
    title: "MSME Registration",
    description:
      "Get recognized as a Micro, Small or Medium Enterprise and enjoy various government benefits.",
    component: <PartnershipFirmRegistration />,
    benefits: [
      "Priority sector lending from banks",
      "Lower interest rates on loans",
      "Protection against delayed payments",
      "Subsidies on patent registrations"
    ]
  },
  iec: {
    title: "IEC Code Registration",
    description:
      "Mandatory for businesses involved in import/export activities. Get your Import Export Code now.",
    component: <PartnershipFirmRegistration />,
    benefits: [
      "Legal authorization for global trade",
      "Access to export promotion schemes",
      "Simplified customs clearance procedures",
      "Enhanced business credibility"
    ]
  },
  psara: {
    title: "PSARA License",
    description:
      "Required for starting a private security agency in India. Ensure compliance with the PSARA Act.",
    component: <PartnershipFirmRegistration />,
    benefits: [
      "Legal authorization to provide security services",
      "Eligibility for government security contracts",
      "Enhanced credibility with clients",
      "Compliance with national security standards"
    ]
  },
  ce: {
    title: "CE Certification",
    description:
      "Required for products sold in the European Economic Area. Ensures safety and environmental standards.",
    component: <PartnershipFirmRegistration />,
    benefits: [
      "Legal access to European markets",
      "Demonstrated product safety compliance",
      "Reduced liability risks",
      "Enhanced consumer confidence"
    ]
  },
  nbfc: {
    title: "NBFC Registration",
    description:
      "Register your Non-Banking Financial Company with RBI and operate legally in India.",
    component: <PartnershipFirmRegistration />,
    benefits: [
      "Legal authority to provide financial services",
      "Enhanced credibility in the financial sector",
      "Access to varied funding sources",
      "Opportunity to expand financial portfolio"
    ]
  },
  "plastic-waste": {
    title: "Plastic Waste Authorization",
    description:
      "Get your authorization for managing plastic waste as per government norms.",
    component: <PartnershipFirmRegistration />,
    benefits: [
      "Legal compliance for waste management",
      "Contribution to environmental protection",
      "Eligibility for environmental subsidies",
      "Enhanced corporate social responsibility profile"
    ]
  },
  gst: {
    title: "GST Registration",
    description:
      "Register under the Goods and Services Tax to comply with India's indirect tax regulations.",
    component: <PartnershipFirmRegistration />,
    benefits: [
      "Legal compliance with tax regulations",
      "Input tax credit benefits",
      "Expanded customer base inclusion",
      "Seamless interstate business operations"
    ]
  },
};

export default function RegistrationSlugPage() {
  const { slug } = useParams<{ slug: string }>();
  const router = useRouter();
  const [content, setContent] = useState<RegistrationContent | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    if (slug && typeof slug === "string") {
      const registrationSlug = slug as RegistrationSlug;
      const found = registrationDetails[registrationSlug];
      if (found) {
        setContent(found);
      } else {
        router.push("/register");
      }
    }
    setIsLoading(false);
  }, [slug, router]);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto"></div>
          <p className="text-gray-600 mt-4">Loading your registration details...</p>
        </div>
      </div>
    );
  }

  if (!content) {
    return (
      <div className="bg-gray-50 rounded-lg p-8 shadow-sm text-center">
        <p className="text-gray-600">Registration option not found. Redirecting...</p>
      </div>
    );
  }

  return (
    <div className="py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Information */}
          <motion.div 
            className="lg:col-span-2 bg-white rounded-2xl shadow-md overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <div className="p-8">
              <div className="flex items-center mb-6">
                <div className="bg-blue-100 p-3 rounded-full mr-4 text-blue-600">
                  <IconComponent name={getIconName(slug as string)} />
                </div>
                <h2 className="text-2xl font-bold text-gray-800">{content.title}</h2>
              </div>

              <p className="text-gray-700 text-lg mb-8 leading-relaxed">{content.description}</p>

              <div className="bg-blue-50 rounded-xl p-6 mb-8">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Key Benefits</h3>
                <ul className="space-y-3">
                  {content.benefits.map((benefit: string, index: number) => (
                    <motion.li 
                      key={index} 
                      className="flex items-start"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 + (index * 0.1), duration: 0.5 }}
                    >
                      <svg className="h-5 w-5 text-green-500 mt-1 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">{benefit}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              <div className="bg-amber-50 border border-amber-100 rounded-lg p-4 mb-8">
                <div className="flex items-start">
                  <svg className="h-6 w-6 text-amber-500 mt-0.5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p className="text-sm text-gray-700">
                    Our experts will guide you through the entire registration process, ensuring compliance with all regulatory requirements.
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <motion.button
                  className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition transform hover:scale-105 shadow-md"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Start Registration
                </motion.button>
                <motion.button
                  className="px-6 py-3 bg-white border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition transform hover:scale-105 shadow-sm"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => {
                    if (window.history.length > 1) {
                      router.back();
                    } else {
                      router.push('/register');
                    }
                  }}
                >
                  View Other Options
                </motion.button>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Form */}
          <motion.div 
            className="bg-white rounded-2xl shadow-md overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5, ease: "easeOut" }}
          >
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-6">Registration Form</h3>
              {content.component}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}