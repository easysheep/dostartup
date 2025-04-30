'use client';
import React from 'react';
import Link from 'next/link';

export interface OverviewProps {
  data: {
    heading: string;
    paragraphs: string[];
    imageUrl: string;
    buttonText: string;
  };
}

export default function Overview({ data }: OverviewProps) {
  const { heading, paragraphs, imageUrl, buttonText } = data;
  return (
    <section id="overview" className="px-6 py-12 md:px-16 lg:px-32 bg-white">
      <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-10">
        <div className="lg:w-1/2">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">{heading}</h2>
          {paragraphs.map((p, idx) => (
            <p key={idx} className="text-gray-700 mb-4">{p}</p>
          ))}
          <Link href="#" className="inline-block px-6 py-3 bg-[#009966] hover:bg-[#00b377] text-white font-semibold rounded shadow-md transition">
            {buttonText}
          </Link>
        </div>
        <div className="lg:w-1/2 flex justify-center">
          <img src={imageUrl} alt="Overview Illustration" width={450} height={300} className="object-contain" />
        </div>
      </div>
    </section>
  );
}