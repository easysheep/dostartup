"use client";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import PartnershipFirmRegistration from "@/components/Register/PartnershipFirmRegistration";
// import HowItWorks from "@/components/HowItWorks";


const registrationDetails: Record<
  string,
  { title: string; description: string; component: React.ReactNode }
> = {
  "private-limited-company": {
    title: "Private Limited Company Registration",
    description:
      "Ideal for startups and growing businesses. Offers limited liability and ease of ownership transfer.",
    component: <PartnershipFirmRegistration />,
  },
  opc: {
    title: "One Person Company (OPC) Registration",
    description:
      "Perfect for solo entrepreneurs looking for a corporate structure with limited liability.",
    component: <PartnershipFirmRegistration />,
  },
  "partnership-firm": {
    title: "Partnership Firm Registration",
    description:
      "Suitable for businesses run by two or more partners with shared responsibilities and profits.",
    component: <PartnershipFirmRegistration />,
  },
  msme: {
    title: "MSME Registration",
    description:
      "Get recognized as a Micro, Small or Medium Enterprise and enjoy various government benefits.",
    component: <PartnershipFirmRegistration />,
  },
  iec: {
    title: "IEC Code Registration",
    description:
      "Mandatory for businesses involved in import/export activities. Get your Import Export Code now.",
    component: <PartnershipFirmRegistration />,
  },
  psara: {
    title: "PSARA License",
    description:
      "Required for starting a private security agency in India. Ensure compliance with the PSARA Act.",
    component: <PartnershipFirmRegistration />,
  },
  ce: {
    title: "CE Certification",
    description:
      "Required for products sold in the European Economic Area. Ensures safety and environmental standards.",
    component: <PartnershipFirmRegistration />,
  },
  nbfc: {
    title: "NBFC Registration",
    description:
      "Register your Non-Banking Financial Company with RBI and operate legally in India.",
    component: <PartnershipFirmRegistration />,
  },
  "plastic-waste": {
    title: "Plastic Waste Authorization",
    description:
      "Get your authorization for managing plastic waste as per government norms.",
    component: <PartnershipFirmRegistration />,
  },
  gst: {
    title: "GST Registration",
    description:
      "Register under the Goods and Services Tax to comply with India’s indirect tax regulations.",
    component: <PartnershipFirmRegistration />,
  },
};

export default function RegistrationSlugPage() {
  const { slug } = useParams<{ slug: string }>();
  const router = useRouter();
  const [content, setContent] = useState<{
    title: string;
    description: string;
    component: React.ReactNode;
  } | null>(null);

  useEffect(() => {
    if (slug && typeof slug === "string") {
      const found = registrationDetails[slug];
      if (found) {
        setContent(found);
      } else {
        router.push("/register");
      }
    }
  }, [slug]);

  if (!content) {
    return (
      <div className="max-w-3xl mx-auto py-10 px-4">
        <p className="text-gray-600">Loading...</p>
      </div>
    );
  }

  return (
    <>
      <div className="max-w-3xl mx-auto py-10 px-4">
        <motion.h1
          className="text-3xl font-bold mb-4 text-blue-700"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {content.title}
        </motion.h1>

        <motion.p
          className="text-gray-700 text-lg mb-6"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
        >
          {content.description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6, ease: "easeOut" }}
        >
          {content.component}
        </motion.div>
        
      </div>

      
    </>
  );
}
