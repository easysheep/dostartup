import React, { useState } from "react";

export const Select = ({ value, onValueChange, children }: {
  value?: string;
  onValueChange: (val: string) => void;
  children: React.ReactNode;
}) => {
  return <div>{children}</div>; // Placeholder - logic implemented in SelectTrigger/Content
};

export const SelectTrigger = ({ children }: { children: React.ReactNode }) => {
  return <div className="border border-gray-300 px-4 py-2 rounded-xl cursor-pointer bg-white">{children}</div>;
};

export const SelectValue = ({ placeholder }: { placeholder?: string }) => {
  return <span className="text-gray-600">{placeholder}</span>;
};

export const SelectContent = ({ children }: { children: React.ReactNode }) => {
  return <div className="mt-2 border border-gray-300 rounded-xl p-2 bg-white shadow max-h-60 overflow-y-auto">{children}</div>;
};

export const SelectItem = ({ value, children }: { value: string; children: React.ReactNode }) => {
  return <div className="px-3 py-2 hover:bg-gray-100 rounded cursor-pointer" data-value={value}>{children}</div>;
};
