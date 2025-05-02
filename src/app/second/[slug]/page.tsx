import React from 'react';
import dynamic from 'next/dynamic';
import { pageContent, PageContentType } from '@/utils/pageContentDataSecondary';

// Dynamic imports of your GST components
const Overview       = dynamic(() => import('@/components/Page1/Overview'));
const Features       = dynamic(() => import('@/components/Page1/Features'));
const Benefits       = dynamic(() => import('@/components/Page1/Benifits'));
const Documents      = dynamic(() => import('@/components/Page1/Documents'));
const Eligibility    = dynamic(() => import('@/components/Page1/Eligibility'));
const ServicesFaq    = dynamic(() => import('@/components/Page1/Faq'));
const Types          = dynamic(() => import('@/components/Page1/Types'));

interface PageProps {
  params: { slug: string };
}

export default function GstPage({ params }: PageProps) {
  const { slug } = params;
  const currentPage = pageContent[slug] as PageContentType | undefined;

  if (!currentPage) {
    return <p>Page not found</p>;
  }

  return (
    <div>
      <Overview data={currentPage.overview} />
      <Features items={currentPage.features} />
      <Benefits items={currentPage.benefits} />
      <Documents data={currentPage.documents} />
      <Eligibility sections={currentPage.eligibility} />
      <ServicesFaq services={currentPage.services} faqs={currentPage.faqs} />
      <Types data={currentPage.types} />
    </div>
  );
}

export async function generateStaticParams() {
  return Object.keys(pageContent).map((slug) => ({ slug }));
}