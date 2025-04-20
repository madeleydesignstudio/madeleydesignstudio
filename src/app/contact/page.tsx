"use client";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

export default function Contact() {
  // Track form state and loading state
  const [structureFormData, setStructureFormData] = useState({
    name: "",
    email: "",
    projectType: "",
    projectDetails: "",
    marketingConsent: false,
  });

  const [digitalFormData, setDigitalFormData] = useState({
    name: "",
    email: "",
    platformType: "",
    projectDetails: "",
    marketingConsent: false,
  });

  const [isStructureSubmitting, setIsStructureSubmitting] = useState(false);
  const [isDigitalSubmitting, setIsDigitalSubmitting] = useState(false);

  // Handle input changes
  const handleStructureInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setStructureFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleDigitalInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setDigitalFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Form submission handlers
  const handleStructureSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsStructureSubmitting(true);

    // Create loading toast
    const loadingToast = toast.loading("Sending your inquiry...");

    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          formType: "structure",
          ...structureFormData,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        // Update toast to success
        toast.success(
          "Thank you! We've received your structure project inquiry and will get back to you soon.",
          {
            id: loadingToast,
            duration: 5000,
          }
        );

        // Reset form
        setStructureFormData({
          name: "",
          email: "",
          projectType: "",
          projectDetails: "",
          marketingConsent: false,
        });
      } else {
        throw new Error(data.error || "Something went wrong");
      }
    } catch (error) {
      // Update toast to error
      toast.error(
        error instanceof Error ? error.message : "Something went wrong",
        {
          id: loadingToast,
          duration: 5000,
        }
      );
    } finally {
      setIsStructureSubmitting(false);
    }
  };

  const handleDigitalSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsDigitalSubmitting(true);

    // Create loading toast
    const loadingToast = toast.loading("Sending your inquiry...");

    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          formType: "digital",
          ...digitalFormData,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        // Update toast to success
        toast.success(
          "Thank you! We've received your digital platform inquiry and will get back to you soon.",
          {
            id: loadingToast,
            duration: 5000,
          }
        );

        // Reset form
        setDigitalFormData({
          name: "",
          email: "",
          platformType: "",
          projectDetails: "",
          marketingConsent: false,
        });
      } else {
        throw new Error(data.error || "Something went wrong");
      }
    } catch (error) {
      // Update toast to error
      toast.error(
        error instanceof Error ? error.message : "Something went wrong",
        {
          id: loadingToast,
          duration: 5000,
        }
      );
    } finally {
      setIsDigitalSubmitting(false);
    }
  };

  // Define node component with corner crosses
  const Node = ({
    text,
    style,
    children,
  }: {
    text: string;
    style: React.CSSProperties;
    children?: React.ReactNode;
  }) => (
    <div className="absolute" style={style}>
      <div className="relative border border-zinc-800 flex flex-col items-center w-full h-full">
        <span className="text-[11px] text-white font-boska font-light pt-3">
          {text}
        </span>

        {children && <div className="flex-1 w-full p-4 mt-2">{children}</div>}

        {/* Corner crosses */}
        <div className="absolute -top-[2px] -left-[2px] w-[3px] h-[3px] flex items-center justify-center">
          <div className="absolute w-[1px] h-[5px] rotate-45 bg-zinc-500"></div>
          <div className="absolute w-[1px] h-[5px] -rotate-45 bg-zinc-500"></div>
        </div>
        <div className="absolute -top-[2px] -right-[2px] w-[3px] h-[3px] flex items-center justify-center">
          <div className="absolute w-[1px] h-[5px] rotate-45 bg-zinc-500"></div>
          <div className="absolute w-[1px] h-[5px] -rotate-45 bg-zinc-500"></div>
        </div>
        <div className="absolute -bottom-[2px] -left-[2px] w-[3px] h-[3px] flex items-center justify-center">
          <div className="absolute w-[1px] h-[5px] rotate-45 bg-zinc-500"></div>
          <div className="absolute w-[1px] h-[5px] -rotate-45 bg-zinc-500"></div>
        </div>
        <div className="absolute -bottom-[2px] -right-[2px] w-[3px] h-[3px] flex items-center justify-center">
          <div className="absolute w-[1px] h-[5px] rotate-45 bg-zinc-500"></div>
          <div className="absolute w-[1px] h-[5px] -rotate-45 bg-zinc-500"></div>
        </div>
      </div>
    </div>
  );

  // Cross marker component for connection points
  const CrossMark = ({ style }: { style: React.CSSProperties }) => (
    <div
      className="absolute w-[3px] h-[3px] flex items-center justify-center"
      style={style}
    >
      <div className="absolute w-[1px] h-[5px] rotate-45 bg-zinc-500"></div>
      <div className="absolute w-[1px] h-[5px] -rotate-45 bg-zinc-500"></div>
    </div>
  );

  return (
    <div className="w-full h-full">
      {/* Toast container */}
      <Toaster
        position="top-right"
        toastOptions={{
          style: {
            background: "#111",
            color: "#fff",
            borderRadius: "4px",
            fontSize: "14px",
            fontFamily: "var(--font-bricolage)",
          },
          success: {
            iconTheme: {
              primary: "#10b981",
              secondary: "#111",
            },
          },
          error: {
            iconTheme: {
              primary: "#ef4444",
              secondary: "#111",
            },
          },
        }}
      />

      <div className="relative w-full h-full overflow-hidden">
        {/* Title */}
        <h1 className="absolute top-8 left-[2.5%] text-2xl font-bold text-white font-boska">
          contact
        </h1>

        {/* Main Node - Work with us */}
        <Node
          text="work with us"
          style={{
            left: "55%",
            top: "10%",
            transform: "translate(-50%, -50%)",
            width: "200px",
            height: "40px",
          }}
        />

        {/* Left Container - Structures */}
        <div
          className="absolute"
          style={{
            left: "30%",
            top: "55%",
            transform: "translate(-50%, -50%)",
            width: "35%",
            height: "60%",
            border: "1px solid #27272a",
          }}
        >
          <div className="absolute top-[20px] left-[20px]">
            <span className="text-xs text-zinc-400 font-boska">
              Form + Function
            </span>
          </div>

          <div className="p-8 pt-12 w-full">
            <form onSubmit={handleStructureSubmit}>
              <div className="mb-4 w-full">
                <label className="block text-xs text-zinc-400 mb-1 font-bricolage">
                  NAME
                </label>
                <input
                  type="text"
                  name="name"
                  value={structureFormData.name}
                  onChange={handleStructureInputChange}
                  className="w-full bg-transparent border border-zinc-800 p-2 text-white text-sm font-bricolage focus:outline-none focus:border-zinc-500"
                  placeholder="Your name"
                  required
                />
              </div>

              <div className="mb-4 w-full">
                <label className="block text-xs text-zinc-400 mb-1 font-bricolage">
                  EMAIL
                </label>
                <input
                  type="email"
                  name="email"
                  value={structureFormData.email}
                  onChange={handleStructureInputChange}
                  className="w-full bg-transparent border border-zinc-800 p-2 text-white text-sm font-bricolage focus:outline-none focus:border-zinc-500"
                  placeholder="Your email"
                  required
                />
              </div>

              <div className="mb-4 w-full">
                <label className="block text-xs text-zinc-400 mb-1 font-bricolage">
                  PROJECT TYPE
                </label>
                <input
                  type="text"
                  name="projectType"
                  value={structureFormData.projectType}
                  onChange={handleStructureInputChange}
                  className="w-full bg-transparent border border-zinc-800 p-2 text-white text-sm font-bricolage focus:outline-none focus:border-zinc-500"
                  placeholder="Structure type"
                  required
                />
              </div>

              <div className="mb-4 w-full">
                <label className="block text-xs text-zinc-400 mb-1 font-bricolage">
                  PROJECT DETAILS
                </label>
                <textarea
                  name="projectDetails"
                  value={structureFormData.projectDetails}
                  onChange={handleStructureInputChange}
                  className="w-full bg-transparent border border-zinc-800 p-2 text-white text-sm font-bricolage h-24 focus:outline-none focus:border-zinc-500"
                  placeholder="Tell us about your project"
                  required
                />
              </div>

              {/* Marketing consent checkbox */}
              <div className="mb-4 w-full flex items-center">
                <input
                  type="checkbox"
                  id="structureMarketingConsent"
                  name="marketingConsent"
                  checked={structureFormData.marketingConsent}
                  onChange={(e) =>
                    setStructureFormData((prev) => ({
                      ...prev,
                      marketingConsent: e.target.checked,
                    }))
                  }
                  className="mr-2 h-4 w-4 accent-zinc-600"
                />
                <label
                  htmlFor="structureMarketingConsent"
                  className="text-xs text-zinc-400 font-bricolage cursor-pointer"
                >
                  Keep me updated with Form + Function news and projects
                </label>
              </div>

              <button
                type="submit"
                disabled={isStructureSubmitting}
                className="mt-2 border border-zinc-800 hover:border-zinc-500 px-4 py-1 text-xs text-white font-bricolage transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isStructureSubmitting ? "SENDING..." : "SUBMIT"}
              </button>
            </form>
          </div>

          {/* Corner crosses */}
          <CrossMark style={{ top: "-2px", left: "-2px" }} />
          <CrossMark style={{ top: "-2px", right: "-2px" }} />
          <CrossMark style={{ bottom: "-2px", left: "-2px" }} />
          <CrossMark style={{ bottom: "-2px", right: "-2px" }} />
        </div>

        {/* Right Container - Digital Platforms */}
        <div
          className="absolute"
          style={{
            left: "80%",
            top: "55%",
            transform: "translate(-50%, -50%)",
            width: "35%",
            height: "60%",
            border: "1px solid #27272a",
          }}
        >
          <div className="absolute top-[20px] right-[20px]">
            <span className="text-xs text-zinc-400 font-boska">
              Digital Dino
            </span>
          </div>

          <div className="p-8 pt-12 w-full">
            <form onSubmit={handleDigitalSubmit}>
              <div className="mb-4 w-full">
                <label className="block text-xs text-zinc-400 mb-1 font-bricolage">
                  NAME
                </label>
                <input
                  type="text"
                  name="name"
                  value={digitalFormData.name}
                  onChange={handleDigitalInputChange}
                  className="w-full bg-transparent border border-zinc-800 p-2 text-white text-sm font-bricolage focus:outline-none focus:border-zinc-500"
                  placeholder="Your name"
                  required
                />
              </div>

              <div className="mb-4 w-full">
                <label className="block text-xs text-zinc-400 mb-1 font-bricolage">
                  EMAIL
                </label>
                <input
                  type="email"
                  name="email"
                  value={digitalFormData.email}
                  onChange={handleDigitalInputChange}
                  className="w-full bg-transparent border border-zinc-800 p-2 text-white text-sm font-bricolage focus:outline-none focus:border-zinc-500"
                  placeholder="Your email"
                  required
                />
              </div>

              <div className="mb-4 w-full">
                <label className="block text-xs text-zinc-400 mb-1 font-bricolage">
                  PLATFORM TYPE
                </label>
                <input
                  type="text"
                  name="platformType"
                  value={digitalFormData.platformType}
                  onChange={handleDigitalInputChange}
                  className="w-full bg-transparent border border-zinc-800 p-2 text-white text-sm font-bricolage focus:outline-none focus:border-zinc-500"
                  placeholder="Website, app, etc."
                  required
                />
              </div>

              <div className="mb-4 w-full">
                <label className="block text-xs text-zinc-400 mb-1 font-bricolage">
                  PROJECT DETAILS
                </label>
                <textarea
                  name="projectDetails"
                  value={digitalFormData.projectDetails}
                  onChange={handleDigitalInputChange}
                  className="w-full bg-transparent border border-zinc-800 p-2 text-white text-sm font-bricolage h-24 focus:outline-none focus:border-zinc-500"
                  placeholder="Tell us about your project"
                  required
                />
              </div>

              {/* Marketing consent checkbox */}
              <div className="mb-4 w-full flex items-center">
                <input
                  type="checkbox"
                  id="digitalMarketingConsent"
                  name="marketingConsent"
                  checked={digitalFormData.marketingConsent}
                  onChange={(e) =>
                    setDigitalFormData((prev) => ({
                      ...prev,
                      marketingConsent: e.target.checked,
                    }))
                  }
                  className="mr-2 h-4 w-4 accent-zinc-600"
                />
                <label
                  htmlFor="digitalMarketingConsent"
                  className="text-xs text-zinc-400 font-bricolage cursor-pointer"
                >
                  Keep me updated with Digital Dino news and projects
                </label>
              </div>

              <button
                type="submit"
                disabled={isDigitalSubmitting}
                className="mt-2 border border-zinc-800 hover:border-zinc-500 px-4 py-1 text-xs text-white font-bricolage transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isDigitalSubmitting ? "SENDING..." : "SUBMIT"}
              </button>
            </form>
          </div>

          {/* Corner crosses */}
          <CrossMark style={{ top: "-2px", left: "-2px" }} />
          <CrossMark style={{ top: "-2px", right: "-2px" }} />
          <CrossMark style={{ bottom: "-2px", left: "-2px" }} />
          <CrossMark style={{ bottom: "-2px", right: "-2px" }} />
        </div>

        {/* Connecting lines */}
        {/* Vertical line from work with us */}
        <div
          className="absolute border-l border-zinc-800"
          style={{
            left: "55%",
            top: "calc(5% + 60px)",
            height: "calc(10% - 20px)",
            width: "1px",
          }}
        />

        {/* Horizontal line connecting the sections */}
        <div
          className="absolute border-t border-zinc-800"
          style={{
            left: "30%",
            top: "20%",
            width: "50%",
            height: "1px",
          }}
        />

        {/* Structures label at left end of horizontal line */}
        <div
          className="absolute  px-2"
          style={{
            left: "calc(30% + 30px)",
            top: "calc(20% - 25px)",
            transform: "translateX(-50%)",
          }}
        >
          <span className="text-sm text-white font-boska">Structures</span>
        </div>

        {/* Digital Platforms label at right end of horizontal line */}
        <div
          className="absolute  px-2"
          style={{
            left: "calc(80% - 50px)",
            top: "calc(20% - 25px)",
            transform: "translateX(-50%)",
          }}
        >
          <span className="text-sm text-white font-boska">
            Digital Platforms
          </span>
        </div>

        {/* Vertical lines to each container */}
        <div
          className="absolute border-l border-zinc-800"
          style={{
            left: "30%",
            top: "20%",
            height: "calc(5%)",
            width: "1px",
          }}
        />
        <div
          className="absolute border-l border-zinc-800"
          style={{
            left: "80%",
            top: "20%",
            height: "calc(5%)",
            width: "1px",
          }}
        />

        {/* Cross marks at the connection to container tops */}
        <CrossMark
          style={{ left: "calc(30% - 1.5px)", top: "calc(55% - 30% - 1.5px)" }}
        />
        <CrossMark
          style={{ left: "calc(80% - 1.5px)", top: "calc(55% - 30% - 1.5px)" }}
        />

        {/* Description text */}
        <div className="absolute bottom-8 left-[2.5%]">
          <p className="text-sm font-bricolage text-zinc-50 max-w-3xl">
            madeleydesignstudio is the parent company of Form + Function
            (structures) and Digital Dino (digital platforms). Contact the
            relevant company for your needs or click their name to learn more.
          </p>
        </div>
      </div>
    </div>
  );
}
