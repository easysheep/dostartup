// Solution 1: Add a TypeScript declaration for JSX
// Create a file called 'jsx.d.ts' in your project and add:
import React from 'react';

declare global {
  namespace JSX {
    interface Element extends React.ReactElement<any, any> {}
  }
}

// Solution 2: Alternatively, change your IconComponent to use React.ReactElement
// instead of JSX.Element:

const IconComponent = ({ name }: { name: IconName }) => {
  const icons: Record<IconName, React.ReactElement> = {
    // ... your existing icons
  };

  return icons[name] || icons.default;
};

// Change all other occurrences of JSX.Element to React.ReactElement:

interface RegistrationContent {
  title: string;
  description: string;
  component: React.ReactElement;
  benefits: string[];
}