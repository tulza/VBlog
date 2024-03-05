import React from "react";

const DefaultPageContainer = ({ children }: { children: React.ReactNode }) => {
  return <div className="w-[1400px]">{children}</div>;
};

export default DefaultPageContainer;
