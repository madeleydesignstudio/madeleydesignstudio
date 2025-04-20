"use client";

import { useEffect, useRef, useState } from "react";

export default function OurPhilosophy() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== "undefined" ? window.innerWidth : 1200,
    height: typeof window !== "undefined" ? window.innerHeight : 800,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Get the device pixel ratio
    const dpr = window.devicePixelRatio || 1;

    // Set the actual size in memory (scaled for DPI)
    const displayWidth = windowSize.width;
    const displayHeight = windowSize.height;
    canvas.width = displayWidth * dpr;
    canvas.height = displayHeight * dpr;

    // Scale all drawing operations by the dpr
    ctx.scale(dpr, dpr);

    // Set CSS size
    canvas.style.width = `${displayWidth}px`;
    canvas.style.height = `${displayHeight}px`;

    // Clear canvas
    ctx.fillStyle = "#18181B";
    ctx.fillRect(0, 0, displayWidth, displayHeight);

    // Define nodes
    const nodes = [
      {
        id: "studio",
        text: "madeleydesignstudio",
        x: displayWidth * 0.25,
        y: displayHeight * 0.45,
        width: 180,
        height: 30,
      },
      {
        id: "engineering",
        text: "engineering",
        x: displayWidth * 0.6,
        y: displayHeight * 0.2,
        width: 120,
        height: 30,
      },
      {
        id: "design",
        text: "design",
        x: displayWidth * 0.6,
        y: displayHeight * 0.35,
        width: 120,
        height: 30,
      },
      {
        id: "psychology",
        text: "psychology",
        x: displayWidth * 0.6,
        y: displayHeight * 0.5,
        width: 120,
        height: 30,
      },
      {
        id: "philosophy",
        text: "philosophy",
        x: displayWidth * 0.6,
        y: displayHeight * 0.65,
        width: 120,
        height: 30,
      },
    ];

    // Create 2 sub-nodes for each category
    const subNodeCategories = [
      "engineering",
      "design",
      "psychology",
      "philosophy",
    ];

    // Define the node type
    type Node = {
      id: string;
      text: string;
      x: number;
      y: number;
      width: number;
      height: number;
    };

    // Create a record of category to node array
    const subNodesMap: Record<string, Node[]> = {};

    subNodeCategories.forEach((category, categoryIndex) => {
      const parentNode = nodes[categoryIndex + 1]; // +1 because first node is studio
      const subNodes: Node[] = [];

      for (let i = 0; i < 2; i++) {
        subNodes.push({
          id: `${category}-${i}`,
          text: category,
          x: displayWidth * 0.85,
          y: parentNode.y - displayHeight * 0.06 + i * displayHeight * 0.12,
          width: 120,
          height: 30,
        });
      }

      subNodesMap[category] = subNodes;
    });

    // Draw connections
    ctx.strokeStyle = "#3F3F47";
    ctx.lineWidth = 1;

    // Connect studio to main branches
    nodes.slice(1).forEach((node) => {
      drawConnection(ctx, nodes[0], node);
    });

    // Connect each category to its sub-nodes
    subNodeCategories.forEach((category, index) => {
      const parentNode = nodes[index + 1];
      subNodesMap[category].forEach((subNode) => {
        drawConnection(ctx, parentNode, subNode);
      });
    });

    // Draw nodes
    ctx.font = '12px "Boska", serif';
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";

    // Draw main nodes
    nodes.forEach((node) => {
      drawNode(ctx, node);
    });

    // Draw all sub-nodes
    subNodeCategories.forEach((category) => {
      subNodesMap[category].forEach((subNode) => {
        drawNode(ctx, subNode);
      });
    });

    // Removed title and description drawing code from the canvas
  }, [windowSize]);

  function drawNode(
    ctx: CanvasRenderingContext2D,
    node: { x: number; y: number; width: number; height: number; text: string }
  ) {
    ctx.strokeStyle = "#3f3f46";
    ctx.lineWidth = 1;
    ctx.strokeRect(
      node.x - node.width / 2,
      node.y - node.height / 2,
      node.width,
      node.height
    );

    const corners = [
      { x: node.x - node.width / 2, y: node.y - node.height / 2 },
      { x: node.x + node.width / 2, y: node.y - node.height / 2 },
      { x: node.x - node.width / 2, y: node.y + node.height / 2 },
      { x: node.x + node.width / 2, y: node.y + node.height / 2 },
    ];

    corners.forEach((corner) => {
      ctx.save();
      ctx.translate(corner.x, corner.y);

      ctx.beginPath();
      ctx.moveTo(-3, -3);
      ctx.lineTo(3, 3);
      ctx.strokeStyle = "#9F9FA9";
      ctx.lineWidth = 1.5;
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(3, -3);
      ctx.lineTo(-3, 3);
      ctx.stroke();

      ctx.restore();
    });

    ctx.fillStyle = "#ffffff";
    ctx.font = '12px "Boska", serif';
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(node.text, node.x, node.y);
  }

  function drawConnection(
    ctx: CanvasRenderingContext2D,
    from: { x: number; y: number; width: number; height: number },
    to: { x: number; y: number; width: number; height: number }
  ) {
    const startX = from.x + from.width / 2;
    const startY = from.y;
    const endX = to.x - to.width / 2;
    const endY = to.y;

    // Update connection line color to match web-border
    ctx.strokeStyle = "#3f3f46"; // zinc-700 equivalent
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(startX, startY);
    ctx.lineTo(endX, endY);
    ctx.stroke();

    // Remove crosses at connection points - no additional elements needed here
  }

  const descriptionLines = [
    "madeleydesignstudio embodies the future of design, synthesising",
    "modern aesthetics and technology to engineer what's next.",
    "",
    "At the same time, we draw deeply from the past, guided by a",
    "strong interest in philosophy. This unique combination allows us to",
    "understand the psychology of the user—whether interacting with a",
    "physical structure or a digital interface.",
  ];

  return (
    <div className="w-full h-full">
      <div className="relative">
        {/* Title as HTML */}
        <h1 className="absolute top-8 left-8 text-2xl font-bold text-white font-boska">
          our philosophy
        </h1>

        {/* Canvas with diagram */}
        <canvas ref={canvasRef} className="w-full h-full" />

        {/* Description text as HTML */}
        <div className="absolute bottom-8 left-8 text-white text-sm font-boska">
          {descriptionLines.map((line, index) => (
            <p key={index} className={line === "" ? "h-4" : ""}>
              {line}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
