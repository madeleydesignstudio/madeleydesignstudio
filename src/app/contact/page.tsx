"use client";

export default function Contact() {
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

  // Form input component
  const FormInput = ({
    label,
    type = "text",
    placeholder,
  }: {
    label: string;
    type?: string;
    placeholder: string;
  }) => (
    <div className="mb-4 w-full">
      <label className="block text-xs text-zinc-400 mb-1 font-bricolage">
        {label}
      </label>
      {type === "textarea" ? (
        <textarea
          className="w-full bg-transparent border border-zinc-800 p-2 text-white text-sm font-bricolage h-24 focus:outline-none focus:border-zinc-500"
          placeholder={placeholder}
        />
      ) : (
        <input
          type={type}
          className="w-full bg-transparent border border-zinc-800 p-2 text-white text-sm font-bricolage focus:outline-none focus:border-zinc-500"
          placeholder={placeholder}
        />
      )}
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
      <div className="relative w-full h-full overflow-hidden">
        {/* Title */}
        <h1 className="absolute top-8 left-8 text-2xl font-bold text-white font-boska">
          contact
        </h1>

        {/* Main Node - Work with us */}
        <Node
          text="work with us"
          style={{
            left: "50%",
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
            left: "25%",
            top: "55%",
            transform: "translate(-50%, -50%)",
            width: "35%",
            height: "60%",
            border: "1px solid #27272a",
          }}
        >
          <div className="absolute -top-[12px] left-[20px] bg-black px-2">
            <span className="text-sm text-white font-boska">Structures</span>
          </div>

          <div className="absolute top-[20px] left-[20px]">
            <span className="text-xs text-zinc-400 font-boska">
              Form + Function
            </span>
          </div>

          <div className="p-8 pt-12 w-full">
            <FormInput label="NAME" placeholder="Your name" />
            <FormInput label="EMAIL" placeholder="Your email" type="email" />
            <FormInput label="PROJECT TYPE" placeholder="Structure type" />
            <FormInput
              label="PROJECT DETAILS"
              placeholder="Tell us about your project"
              type="textarea"
            />
            <button className="mt-2 border border-zinc-800 hover:border-zinc-500 px-4 py-1 text-xs text-white font-bricolage transition-colors">
              SUBMIT
            </button>
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
            left: "75%",
            top: "55%",
            transform: "translate(-50%, -50%)",
            width: "35%",
            height: "60%",
            border: "1px solid #27272a",
          }}
        >
          <div className="absolute -top-[12px] left-[20px] bg-black px-2">
            <span className="text-sm text-white font-boska">
              Digital Platforms
            </span>
          </div>

          <div className="absolute top-[20px] right-[20px]">
            <span className="text-xs text-zinc-400 font-boska">
              Digital Dino
            </span>
          </div>

          <div className="p-8 pt-12 w-full">
            <FormInput label="NAME" placeholder="Your name" />
            <FormInput label="EMAIL" placeholder="Your email" type="email" />
            <FormInput label="PLATFORM TYPE" placeholder="Website, app, etc." />
            <FormInput
              label="PROJECT DETAILS"
              placeholder="Tell us about your project"
              type="textarea"
            />
            <button className="mt-2 border border-zinc-800 hover:border-zinc-500 px-4 py-1 text-xs text-white font-bricolage transition-colors">
              SUBMIT
            </button>
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
            left: "50%",
            top: "calc(5% + 60px)",
            height: "calc(10% - 20px)",
            width: "1px",
          }}
        />

        {/* Horizontal line connecting the sections */}
        <div
          className="absolute border-t border-zinc-800"
          style={{
            left: "25%",
            top: "calc(20% - 1px)",
            width: "50%",
            height: "1px",
          }}
        />

        {/* Vertical lines to each container */}
        <div
          className="absolute border-l border-zinc-800"
          style={{
            left: "25%",
            top: "20%",
            height: "calc(5%)",
            width: "1px",
          }}
        />
        <div
          className="absolute border-l border-zinc-800"
          style={{
            left: "75%",
            top: "20%",
            height: "calc(5%)",
            width: "1px",
          }}
        />

        {/* Cross marks at the connection to container tops */}
        <CrossMark
          style={{ left: "calc(25% - 1.5px)", top: "calc(55% - 30% - 1.5px)" }}
        />
        <CrossMark
          style={{ left: "calc(75% - 1.5px)", top: "calc(55% - 30% - 1.5px)" }}
        />

        {/* Description text */}
        <div className="absolute bottom-8 left-8">
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
