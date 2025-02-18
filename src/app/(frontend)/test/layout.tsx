import React from "react";
import Script from "next/script";

export default function TestLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="test-layout">
      <Script src="https://cdn.unicorn.studio/v1.4.1/unicornStudio.umd.js" />
      {children}
    </div>
  );
}
