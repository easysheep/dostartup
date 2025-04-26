// src/app/fssai-state-license/[slug]/page.tsx
"use client";
import React from "react";
import { useParams } from "next/navigation";
import dynamic from "next/dynamic";
import { pageContent, PageContentType } from "@/utils/pageContentData";

const TalkToExpert = dynamic(() => import("../../components/Page2/TalkToExpert"));
const LogoSlider = dynamic(() => import("../../components/Page2/LogoSlider"));
const Overview = dynamic(() => import("../../components/Page2/Overview"));
const Hero = dynamic(() => import("../../components/Page2/hero"));

const FssaiStateLicense: React.FC = () => {
  const params = useParams();
  const slug = params.slug as string;

  

  

  const currentPage = pageContent[slug];

  if (!currentPage) {
    return <p>Page not found</p>;
  }

  return (
    <div>
      <Hero title={currentPage.title} description={currentPage.description} />
      <LogoSlider />
      <TalkToExpert />
      <Overview
  overview={currentPage.overview}
  benefits={currentPage.benefits}
  documentsRequired={currentPage.documentsRequired}
  registrationProcedure={currentPage.registrationProcedure}
  feesStructure={currentPage.feesStructure}
  registrationTimeline={currentPage.registrationTimeline}
  whyUs={currentPage.whyUs}
  faq={currentPage.faq}
/>
    </div>
  );
};

export default FssaiStateLicense;
