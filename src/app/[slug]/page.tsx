'use client';
import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import dynamic from 'next/dynamic';

// 1️⃣ Dynamic imports for all your page components
const components = {
  Hero:         dynamic(() => import('@/components/Page2/Hero')),
  TalkToExpert: dynamic(() => import('@/components/Page2/TalkToExpert')),
  Overview:     dynamic(() => import('@/components/Page2/Overview')),
  Documentation: dynamic(() => import('@/components/Page2/Documentation')),
  Registration:  dynamic(() => import('@/components/Page2/Registration')),
  FeeStructure:  dynamic(() => import('@/components/Page2/FeeStructure')),
  Timeline:      dynamic(() => import('@/components/Page2/Timeline')),
  Why:           dynamic(() => import('@/components/Page2/Why')),
  FAQ:           dynamic(() => import('@/components/Page2/FAQ')),
} as const;

type Section = {
  type: keyof typeof components;
  props: any;
};

const Page: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [sections, setSections] = useState<Section[] | null>(null);
  const [error, setError]     = useState(false);

  useEffect(() => {
    if (!slug) return;
    // 2️⃣ Dynamically load the JSON for this slug
    import(`@/data/pages/${slug}.json`)
      .then((mod) => {
        // JSON modules in Next.js often live on default
        const data = (mod as any).default ?? mod;
        setSections(data as Section[]);
      })
      .catch(() => setError(true));
  }, [slug]);

  if (error)     return <p>Page not found</p>;
  if (!sections) return <p>Loading…</p>;

  return (
    <div>
      {/* 3️⃣ Render each section in order */}
      {sections.map((section, idx) => {
        const Component = components[section.type];
        return <Component key={idx} {...section.props} />;
      })}
    </div>
  );
};

export default Page;
