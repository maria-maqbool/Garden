"use client";
import React, { useState } from "react";
import Image from "next/image";
import useGardenStore from "@/stores/store";

const Configurator = () => {
  return (
    <div className="absolute right-20 bottom-20 top-40 w-1/4 bg-white rounded-3xl">
      <div className="w-full h-[10%] bg-brGreen rounded-t-3xl text-white flex items-center justify-between p-4 text-2xl">
        Garden Size
        <div className="flex gap-2">
          <Image src={"/icons/bin.svg"} width={30} height={30} alt="del" />
          <Image
            src={"/icons/expand-white.svg"}
            width={30}
            height={30}
            alt="expand"
          />
        </div>
      </div>
      <div className="">
        <Size />
        <Size />
        <Size />
      </div>
    </div>
  );
};
const Size = () => {
  const setGardenWidth = useGardenStore((state) => state.changeWidth);
  const setGardenHeight = useGardenStore((state) => state.changeHeight);
  const [width, setWidth] = useState(20);
  const handleWidthChange = (value) => {
    setWidth(value.target.value);
    setGardenWidth(width);
  };
  const [height, setHeight] = useState(20);
  const handleHeightChange = (value) => {
    setHeight(value.target.value);
    setGardenHeight(height);
  };
  return (
    <Section title={"garden size"}>
      <div className="flex gap-2 my-2 text-gray-500">
        <div className="flex flex-col gap-4">
          <p className="">Height</p>
          <input
            type="range"
            min="1"
            max="30"
            value={height}
            step="0.1"
            onChange={handleHeightChange}
            id="height"
            className="slider"
          />
          <div className="flex">
            <div className="w-1/4 border-b-2 border-gray-300">
              <input
                type="number"
                value={height}
                min="1"
                max="30"
                onChange={handleHeightChange}
                className="bg-gray-100"
              />
            </div>
            <p className="text-gray-400">Feet</p>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <p className="">Width</p>
          <input
            type="range"
            min="1"
            max="30"
            value={width}
            step="0.1"
            onChange={handleWidthChange}
            id="width"
            className="slider"
          />
          <div className="flex">
            <div className="w-1/4 border-b-2 border-gray-300">
              <input
                type="number"
                value={width}
                min="1"
                max="30"
                onChange={handleWidthChange}
                className="bg-gray-100"
              />
            </div>
            <p className="text-gray-400">Feet</p>
          </div>
        </div>
      </div>
    </Section>
  );
};

const Section = ({ children, title }) => {
  const [open, setOpen] = useState(true);
  return (
    <div
      className={`w-full min-h-[10%] flex flex-col border-b-2 border-y-gray-300 py-4 ${open ? "bg-white" : "bg-gray-100"} transition-colors p-4`}
    >
      <button
        className="flex justify-between items-center"
        onClick={() => setOpen((state) => !state)}
      >
        <div className="text-xl text-gray-600 capitalize">{title}</div>
        <Image
          src={"/icons/expand.svg"}
          width={30}
          height={30}
          alt="expand"
          className={` transition-transform ${open ? "-rotate-90" : ""}`}
        />
      </button>
      <div
        className={`${open ? "max-h-0" : "max-h-50"} transition-all overflow-hidden`}
      >
        {children}
      </div>
    </div>
  );
};

export default Configurator;
