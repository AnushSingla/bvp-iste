import React from "react";

export const Card = ({ children, className = "", ...props }) => {
  return (
    <div
      className={`rounded-xl shadow-lg bg-white overflow-hidden ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export const CardContent = ({ children, className = "" }) => {
  return <div className={`p-6 ${className}`}>{children}</div>;
};
