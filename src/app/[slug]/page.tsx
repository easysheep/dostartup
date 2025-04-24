// src/app/fssai-state-license/[slug]/page.tsx
"use client";
import React from "react";
import { useParams } from "next/navigation";
import dynamic from "next/dynamic";

const TalkToExpert = dynamic(() => import("../../components/Page2/TalkToExpert"));
const LogoSlider = dynamic(() => import("../../components/Page2/LogoSlider"));
const Overview = dynamic(() => import("../../components/Page2/Overview"));
const Hero = dynamic(() => import("../../components/Page2/hero"));

const FssaiStateLicense: React.FC = () => {
  const params = useParams();
  const slug = params.slug;

  const pageContent: {
    "fssai-state-license": { title: string; description: string;  overview: { heading: string; content: string }[];};
    "eating-house-license": { title: string; description: string;   overview: { heading: string; content: string }[]; };
  } = {
    "fssai-state-license": {
      title: "FSSAI State License",
      description: "Get your FSSAI state food license with our expert guidance.",
      overview: [
        {
          heading: "FSSAI State License - An Overview",
          content: "FSSAI (Food Safety and Standards Authority of India) is a prominent government-backed entity regulating India's food sector. It has outlined countless guidelines and provisions to foster food safety across the nation. Presently, every food business in India is mandated to secure an applicable FSSAI state license to conduct its business operation.",
        },
        {
          heading: "",
          content: "Functioning without a valid state food license registration is a punishable offence for FBOs as per the FSS Act, 2006. FSSAI conducts all its operations given the said Act and also follows the direction of the Ministry of Health & Family Welfare.",
        },        
        // Add more sections if needed
      ],
    },
    "eating-house-license": {
      title: "Eating House License",
      description: "Get your Eating House License with ease and expertise.",
      overview: [
        {
          heading: "Overview of Eating House License Registration",
          content: "An Eating House License refers to legal consent for undertaking business where any kind of food or beverages is supplied for consumption legally. The Eating house license serves as a mandatory prerequisite for conducting food business along with other fundamental licenses.",
        },
        {
          heading: "Meaning of the Eating House",
          content: "The Eating House refers to a place where various food-related items along with beverages are being served to the masses for consumption.This encompasses all retail outlets, dhabas, restaurants, cafes, food trucks, & any other establishments to facilitate food & drink.",
        },
        {
          heading: "Authority Issuing the License",
          content: "The license is a legal compulsion as per the Delhi Police Act and should be applied under State/city police headquarters & the Police commissioner. The said authority will grant the license after inspecting all the submitted Documents.",
        },
      ],
    },
  };

  const currentPage = pageContent[slug as keyof typeof pageContent];

  if (!currentPage) {
    return <p>Page not found</p>;
  }

  return (
    <div>
      <Hero title={currentPage.title} description={currentPage.description} />
      <LogoSlider />
      <TalkToExpert />
      <Overview  overview={currentPage.overview}   />
    </div>
  );
};

export default FssaiStateLicense;
