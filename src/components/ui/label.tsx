import React from "react";

export const Label = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => {
  return <label className={`block font-medium text-gray-700 mb-1 ${className}`}>{children}</label>;
};
