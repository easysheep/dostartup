"use client";
import PartnershipFirmRegistration from "@/components/Register/PartnershipFirmRegistration";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const registrationDetails: Record<
  string,
  { title: string; description: string, component: React.ReactNode }
> = {
  "private-limited-company": {
    title: "Private Limited Company Registration",
    description:
      "Ideal for startups and growing businesses. Offers limited liability and ease of ownership transfer.",
      component: <PartnershipFirmRegistration></PartnershipFirmRegistration>
  },
  opc: {
    title: "One Person Company (OPC) Registration",
    description:
      "Perfect for solo entrepreneurs looking for a corporate structure with limited liability.",
      component: <PartnershipFirmRegistration></PartnershipFirmRegistration>
  },
  "partnership-firm": {
    title: "Partnership Firm Registration",
    description:
      "Suitable for businesses run by two or more partners with shared responsibilities and profits.",
    component: <PartnershipFirmRegistration></PartnershipFirmRegistration>
    
  },
  msme: {
    title: "MSME Registration",
    description:
      "Get recognized as a Micro, Small or Medium Enterprise and enjoy various government benefits.",
      component: <PartnershipFirmRegistration></PartnershipFirmRegistration>
  },
  iec: {
    title: "IEC Code Registration",
    description:
      "Mandatory for businesses involved in import/export activities. Get your Import Export Code now.",
      component: <PartnershipFirmRegistration></PartnershipFirmRegistration>
  },
  psara: {
    title: "PSARA License",
    description:
      "Required for starting a private security agency in India. Ensure compliance with the PSARA Act.",
      component: <PartnershipFirmRegistration></PartnershipFirmRegistration>
  },
  ce: {
    title: "CE Certification",
    description:
      "Required for products sold in the European Economic Area. Ensures safety and environmental standards.",
      component: <PartnershipFirmRegistration></PartnershipFirmRegistration>
  },
  nbfc: {
    title: "NBFC Registration",
    description:
      "Register your Non-Banking Financial Company with RBI and operate legally in India.",
      component: <PartnershipFirmRegistration></PartnershipFirmRegistration>
  },
  "plastic-waste": {
    title: "Plastic Waste Authorization",
    description:
      "Get your authorization for managing plastic waste as per government norms.",
      component: <PartnershipFirmRegistration></PartnershipFirmRegistration>
  },
  gst: {
    title: "GST Registration",
    description:
      "Register under the Goods and Services Tax to comply with India’s indirect tax regulations.",
      component: <PartnershipFirmRegistration></PartnershipFirmRegistration>
  },
};

export default function RegistrationSlugPage() {
  const { slug } = useParams<{ slug: string }>();
  const router = useRouter();
  const [content, setContent] = useState<{ title: string; description: string } | null>(null);

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
    <div className="max-w-3xl mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-4 text-blue-700">{content.title}</h1>
      <p className="text-gray-700 text-lg">{content.description}</p>
      {content.component}
    </div>
  );
}
