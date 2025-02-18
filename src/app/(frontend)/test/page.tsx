"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    UnicornStudio: {
      isInitialized: boolean;
      init: () => void;
    };
  }
}

export default function TestPage() {
  useEffect(() => {
    // Initialize UnicornStudio if not already initialized
    if (!window.UnicornStudio) {
      window.UnicornStudio = { isInitialized: false, init: () => {} };
      const script = document.createElement("script");
      script.src = "https://cdn.unicorn.studio/v1.4.1/unicornStudio.umd.js";
      script.onload = () => {
        if (!window.UnicornStudio.isInitialized) {
          window.UnicornStudio.init();
          window.UnicornStudio.isInitialized = true;
        }
      };
      (document.head || document.body).appendChild(script);
    }
  }, []);

  return (
    <div
      data-us-project="DQJW1IYC4h6PUppFCDx6"
      style={{ width: "100vw", height: "100vh" }}
    />
  );
}
