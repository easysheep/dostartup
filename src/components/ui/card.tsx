import React from "react";
import classNames from "classnames";

export const Card = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  return <div className={classNames("bg-white rounded-2xl shadow p-4", className)}>{children}</div>;
};

export const CardContent = ({ children }: { children: React.ReactNode }) => {
  return <div className="mt-2">{children}</div>;
};
