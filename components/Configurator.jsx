"use client";
import React, { useState } from "react";
import Image from "next/image";

const Configurator = () => {
  return (
    <div className="absolute right-20 bottom-20 top-40 w-1/4 rounded-3xl bg-white">
      <div className="w-full h-[10%] bg-brGreen rounded-t-3xl text-white flex items-center justify-between p-4 text-2xl">
        Garden Size
        <div className="flex gap-2"> 
        <Image
          src={"/icons/bin.svg"}
          width={30}
          height={30}
          alt="del"
        />
        <Image
          src={"/icons/expand-white.svg"}
          width={30}
          height={30}
          alt="expand"
        />
        </div>
      </div>
      <div className="p-4">
        <Size />
        <Size />
        <Size />
      </div>
    </div>
  );
};
const Size = () => {
  return (
    <Section title={"garden size"}>
      <div className="flex">helllo world</div>
    </Section>
  );
};

const Section = ({ children, title }) => {
  const [open, setOpen] = useState(true);
  return (
    <div className="w-full min-h-[10%] bg-white flex flex-col cursor-pointer border-b-2 border-y-gray-300 py-4">
      <button
        className="flex justify-between items-center"
        onClick={() => setOpen((state) => !state)}
      >
        <div className="text-xl capitalize">{title}</div>
        <Image
          src={"/icons/expand.svg"}
          width={30}
          height={30}
          alt="expand"
          className={` transition-transform ${open ? "-rotate-90" : ""}`}
        />
      </button>
      <div className={`${open ? "max-h-0" : "max-h-10"} transition-all bg-purple-400 overflow-hidden`}>
        {children}
      </div>
    </div>
  );
};

export default Configurator;
