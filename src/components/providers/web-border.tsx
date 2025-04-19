import React from "react";

const WebBorder = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-screen h-screen">
      <div className="h-full relative">
        {/* Horizontal borders */}
        <div className="absolute bottom-[30px] left-[10px] right-[10px] h-[1px] bg-zinc-700 z-20" />
        <div className="absolute top-[30px] left-[10px] right-[10px] h-[1px] bg-zinc-700 z-20" />

        {/* Vertical borders */}
        <div className="absolute left-[20px] top-[10px] bottom-[10px] w-[1px] bg-zinc-700 z-20" />
        <div className="absolute right-[20px] top-[10px] bottom-[10px] w-[1px] bg-zinc-700 z-20" />

        {/* Corner crosses */}
        {/* Top-left */}
        <div className="absolute top-[29px] left-[19px] w-[3px] h-[3px] flex items-center justify-center z-30">
          <div className="absolute w-[1.5px] h-[12px] rotate-45 bg-zinc-400" />
          <div className="absolute w-[1.5px] h-[12px] -rotate-45 bg-zinc-400" />
        </div>

        {/* Top-right */}
        <div className="absolute top-[29px] right-[19px] w-[3px] h-[3px] flex items-center justify-center z-30">
          <div className="absolute w-[1.5px] h-[12px] rotate-45 bg-zinc-400" />
          <div className="absolute w-[1.5px] h-[12px] -rotate-45 bg-zinc-400" />
        </div>

        {/* Bottom-left */}
        <div className="absolute bottom-[29px] left-[19px] w-[3px] h-[3px] flex items-center justify-center z-30">
          <div className="absolute w-[1.5px] h-[12px] rotate-45 bg-zinc-400" />
          <div className="absolute w-[1.5px] h-[12px] -rotate-45 bg-zinc-400" />
        </div>

        {/* Bottom-right */}
        <div className="absolute bottom-[29px] right-[19px] w-[3px] h-[3px] flex items-center justify-center z-30">
          <div className="absolute w-[1.5px] h-[12px] rotate-45 bg-zinc-400" />
          <div className="absolute w-[1.5px] h-[12px] -rotate-45 bg-zinc-400" />
        </div>

        <div className="absolute top-[31px] left-[21px] right-[21px] bottom-[31px] overflow-auto h-[calc(100%-62px)] w-[calc(100%-42px)]">
          {children}
        </div>
      </div>
    </div>
  );
};

export default WebBorder;
