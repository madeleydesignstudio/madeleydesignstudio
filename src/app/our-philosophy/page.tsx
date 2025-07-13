"use client";

export default function OurPhilosophy() {
  // Define node component with corner crosses
  const Node = ({
    text,
    style,
  }: {
    text: string;
    style: React.CSSProperties;
  }) => (
    <div className="absolute" style={style}>
      <div className="relative border border-zinc-800 flex items-center justify-center w-full h-full">
        <span className="text-[11px] text-white font-boska font-light">
          {text}
        </span>

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

  return (
    <div className="w-full h-full ">
      <div className="relative w-full h-full overflow-hidden">
        {/* Title */}
        <h1 className="absolute top-8 left-8 text-2xl font-bold text-white font-boska">
          our philosophy
        </h1>

        {/* Studio Node */}
        <Node
          text="madeleydesignstudio"
          style={{
            left: "35.8%",
            top: "46%",
            transform: "translate(-50%, -50%)",
            width: "240px",
            height: "42px",
          }}
        />

        {/* Main Category Nodes */}
        {[
          { text: "engineering", top: "14%" },
          { text: "design", top: "35%" },
          { text: "psychology", top: "56%" },
          { text: "philosophy", top: "77%" },
        ].map((category, index) => (
          <div key={`category-${index}`}>
            {/* Category Node */}
            <Node
              text={category.text}
              style={{
                left: "60.4%",
                top: category.top,
                transform: "translate(-50%, -50%)",
                width: "240px",
                height: "42px",
              }}
            />

            {/* Horizontal line from Studio */}
            <div
              className="absolute border-t border-zinc-800"
              style={{
                left: "calc(35.8% + 120px)",
                top: "46%",
                width: "calc((50% - 15% - 240px) / 4)",
                height: "1px",
                transform: "translateY(-50%)",
              }}
            ></div>

            {/* Vertical line connecting to category */}
            <div
              className="absolute border-l border-zinc-800"
              style={{
                left: "calc(35.8% + 120px + ((50% - 15% - 240px) / 4))",
                top: category.top < "46%" ? category.top : "46%",
                height:
                  category.top < "46%"
                    ? `calc(46% - ${category.top})`
                    : `calc(${category.top} - 46%)`,
                width: "1px",
              }}
            ></div>

            {/* Horizontal line to category node */}
            <div
              className="absolute border-t border-zinc-800"
              style={{
                left: "calc(35.8% + 120px + ((50% - 15% - 240px) / 4))",
                top: category.top,
                width: "calc((50% - 15% - 240px) / 4)",
                height: "1px",
                transform: "translateY(-50%)",
              }}
            ></div>

            {/* Sub-nodes for each category */}
            {[0, 1].map((subIndex) => {
              // Define subcategories for each main category
              const subcategories = {
                engineering: ["Application", "Constraints"],
                design: ["User", "Intent"],
                philosophy: ["Inquiry", "Fundamentals"],
                psychology: ["Mind/Behavior", "Evidence"],
              };

              // Get the current category text and its subcategories
              const categoryText = category.text;
              const subCategoryTexts =
                subcategories[categoryText as keyof typeof subcategories];

              return (
                <div key={`sub-${index}-${subIndex}`}>
                  {/* Sub-node */}
                  <Node
                    text={subCategoryTexts[subIndex]}
                    style={{
                      left: "85%",
                      top: `calc(${index * 21}% + ${
                        subIndex === 0 ? "7%" : "21%"
                      })`,
                      transform: "translate(-50%, -50%)",
                      width: "240px",
                      height: "42px",
                    }}
                  />

                  {/* Horizontal line from Category */}
                  <div
                    className="absolute border-t border-zinc-800"
                    style={{
                      left: "calc(60.4% + 120px)",
                      top: category.top,
                      width: "calc((85% - 50% - 240px) / 4)",
                      height: "1px",
                      transform: "translateY(-50%)",
                    }}
                  ></div>

                  {/* Vertical line from category to subnode */}
                  <div
                    className="absolute border-l border-zinc-800"
                    style={{
                      left: "calc(60.4% + 120px + ((85% - 50% - 240px) / 4))",
                      top:
                        subIndex === 0
                          ? `calc(${index * 21}% + 7%)`
                          : category.top,
                      height:
                        subIndex === 0
                          ? `calc(${category.top} - (${index * 21}% + 7%))`
                          : `calc((${index * 21}% + 21%) - ${category.top})`,
                      width: "1px",
                    }}
                  ></div>

                  {/* Horizontal line to sub-node */}
                  <div
                    className="absolute border-t border-zinc-800"
                    style={{
                      left: "calc(60.4% + 120px + ((85% - 50% - 240px) / 4))",
                      top: `calc(${index * 21}% + ${
                        subIndex === 0 ? "7%" : "21%"
                      })`,
                      width: "calc((85% - 50% - 240px) / 4)",
                      height: "1px",
                      transform: "translateY(-50%)",
                    }}
                  ></div>
                </div>
              );
            })}
          </div>
        ))}

        {/* Description text */}
        <div className="absolute bottom-8 left-8 ">
          <p className="text-sm text-zinc-50 max-w-3xl font-light font-mono">
            madeleydesignstudio embodies the future of design, synthesising
            modern aesthetics and technology to engineer what is next. At the
            same time, we draw deeply from the past, guided by a strong interest
            in philosophy. This unique combination allows us to understand the
            psychology of the user—whether interacting with a physical structure
            or a digital interface.
          </p>
        </div>
      </div>
    </div>
  );
}
