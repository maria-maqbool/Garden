"use client";
import { useStateStore, useTabStore } from "@/stores/store";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import Link from 'next/link'

const Configurator = () => {

  const [toggle, setToggle] = useState(false);

  return (
    <div className={`${toggle ? "top-[80px]" : "top-[98vh]"} no-scrollbar flex overflow-y-scroll absolute right-0 sm:right-0 md:right-0 lg:right-[30px]  bottom-10 sm:bottom-10 md:bottom-10 lg:top-[80px] z-10 flex-col bg-white justify-between w-full sm:w-full md:w-full lg:w-1/4  rounded-3xl h-[67vh] sm:h-[67vh] md:h-[67vh] lg:h-[76vh]`}>
      <div className="relative">
        <div className="w-full h-15 bg-brGreen rounded-t-3xl text-white flex items-center flex-col p-4 text-lg ">
          {/* <Image onClick={() =>setToggle(!toggle) }  className="block sm:hidden absolute top-[-25px]"  src={"/icons/horizontal_line.svg"} width={60} height={40} alt="toggle" />   */}
          <div onClick={() => setToggle(!toggle)} className="block sm:block md:block lg:hidden absolute top-[3px] w-[70px] h-[5px] bg-[#b8b5b5] rounded "></div>
          <PlantName className="pb-6" />
        </div>
        <Title />
        <Size />
        <Quantity />
        <Color />
        <PlanterSize />
        <Trolley />
      </div>

      <div className="flex flex-col gap-4 w-full mt-12">
        {/* <div className="flex gap-4 justify-center items-center w-full">
          <AutoLayout />
          <Add />
        </div> */}
        <div className=" w-full h-15 bg-brGreen rounded-b-3xl text-white flex items-center justify-center p-2 text-base">
          <Overview />
        </div>
      </div>
    </div>
  );
};
const Overview = () => {
  return <Link href="/overview" className="py-2 px-4 text-sm rounded-full border-2 border-white">See Overview</Link>;
};

const PlantName = () => {
  // const garden = useStateStore();
  return (
    <>
      {/* <div>{garden.garden[garden.activeIndex].name}</div> */}
      <div>Garden</div>
      {/* <div className="flex gap-2"> */}
      {/*   <button title="delete planter" onClick={() => garden.deletePlanter(garden.garden[garden.activeIndex].name)}> */}
      {/*     <Image src={"/icons/bin.svg"} width={30} height={30} alt="del" /> */}
      {/*   </button> */}
      {/*   <Image src={"/icons/expand-white.svg"} width={30} height={30} alt="expand" /> */}
      {/* </div> */}
    </>
  );
};

// const AutoLayout = () => {
//   const { maxQuantity, addPlanter, garden } = useStateStore();
//   return (
//     <button
//       title="auto layout"
//       className="text-white bg-[#2F322B] rounded-full flex py-2 px-8 gap-4 items-center justify-center text-lg"
//       onClick={() => {
//         for (let index = garden.length; index <= maxQuantity; index++) {
//           addPlanter(`planter${index}`, "#D35832", 1, index, true);
//         }
//       }}
//     >
//       <Image src={"/icons/layout.svg"} width={30} height={30} alt="add" />
//     </button>
//   );
// };
// const Add = () => {
//   const state = useStateStore();
//   return (
//     <button
//       title="add planter"
//       className="text-white bg-[#2F322B] rounded-full flex py-2 px-8 gap-4 items-center justify-center text-lg"
//       onClick={() => {
//         state.addPlanter(`plant ${state.activeIndex + 1}`, "#D35832", 1, state.activeIndex + 1, true);
//       }}
//     >
//       Add Planter
//       <Image src={"/icons/add-white.svg"} width={30} height={30} alt="add" />
//     </button>
//   );
// };

const Quantity = () => {
  const { setQuantity, setMaxQuantity, width, height, maxQuantity, addPlanter, garden } = useStateStore();
  // const { maxQuantity, addPlanter, garden } = useStateStore();
  const [selectedOption, setSelectedOption] = useState(0);
  const quantities = [];
  for (let index = 2; index <= (width * height) / 20; index += 2) {
    quantities.push(index);
  }

  return (
    <Section title={"number of Quantity of planter"}>
      <div className="flex flex-col gap-2 mt-4 text-gray-500">
        Choose an option
        <div className="grid grid-cols-6 justify-items-center cursor-pointer">
          {quantities.map((value, index) => {
            return (
              <div
                key={index}
                className={`${selectedOption === value ? "bg-brGreen text-white" : "text-gray-700"} rounded-full px-3 py-1 text-sm font-semibold  mr-2`}
                onClick={() => {
                  setSelectedOption(value);
                  setQuantity(value);
                  setMaxQuantity(value + 1);
                }}
              >
                <div onClick={() => {
                  for (let index = garden.length; index <= maxQuantity; index++) {
                    addPlanter(`planter${index}`, "#D35832", 1, index, true);
                  }
                }}>{value}</div>
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
};

const Trolley = () => {
  const { setTrolley } = useStateStore();
  const [selectedOption, setSelectedOption] = useState("with trolley");

  const quantities = [
    { title: "With trolley", value: true },
    { title: "Without trolley", value: false },
  ];
  return (
    <Section title={"Inclusion"}>
      <div className="flex flex-col gap-2 mt-4 text-gray-500">
        <div className="cursor-pointer">
          {quantities.map((value, index) => {
            return (
              <div
                key={index}
                className={`${selectedOption === value.title ? "text-brGreen" : "text-gray-700"} rounded-full  py-1  `}
                onClick={() => {
                  setSelectedOption(value.title);
                  setTrolley(value.value);
                }}
              >
                {value.title}
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
};
const PlanterSize = () => {
  const { setPlantSize } = useStateStore();
  const [selectedOption, setSelectedOption] = useState(2);

  const quantities = [
    // { title: "Small (22cm width)", scale: 0.5 },
    { title: "Medium (33cm width)", scale: 0.8 },
    { title: "Large (45cm width)", scale: 1.0 },
  ];
  return (
    <Section title={"planter size"}>
      <div className="flex flex-col gap-2 mt-4 text-gray-500">
        <div className="cursor-pointer">
          {quantities.map((value, index) => {
            return (
              <div
                key={index}
                className={`${selectedOption === value.title ? "text-brGreen" : "text-gray-700"} rounded-full  py-1  `}
                onClick={() => {
                  setSelectedOption(value.title);
                  setPlantSize(value.scale);
                }}
              >
                {value.title}
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
};

const Color = () => {
  const { setPlantColor } = useStateStore();
  const [selected, setSelected] = useState("black");
  const colors = [
    { name: "black", hex: "#000" },
    { name: "Terracotta", hex: "#D35832" },
    { name: "Stone", hex: "#A8A5A1" },
  ];
  const colorEl = useRef(null);
  return (
    <Section title={"planter color"}>
      <div className="flex gap-8 mt-4">
        {colors.map((color, index) => {
          return (
            <div
              className="flex flex-col gap-2 justify-center items-center"
              onClick={() => {
                setPlantColor(color.hex);
                setSelected(color.name);
              }}
            >
              <div
                className={`w-12 h-12 rounded-full ${selected === color.name ? "border-4 border-white" : ""}`}
                key={index}
                style={{ backgroundColor: color.hex }}
              />
              <p className="text-gray-500 capitalize">{color.name}</p>
            </div>
          );
        })}

        <div
          className="flex flex-col gap-2 justify-center items-center"
          onClick={() => {
            colorEl.current.click();
          }}
        >
          <input
            type="color"
            hidden
            ref={colorEl}
            onChange={(value) => {
              setPlantColor(value.target.value);
              setSelected(null);
            }}
          />
          <Image src={"/icons/add.svg"} width={30} height={30} alt="add" className="w-12 h-12 rounded-full cursor-pointer" />

          <p className="text-gray-500 capitalize">other</p>
        </div>
      </div>
    </Section>
  );
};

const Title = () => {
  const { garden, activeIndex } = useStateStore();
  const [title, setTitle] = useState(garden[activeIndex].name);
  useEffect(() => {
    setTitle(garden[activeIndex].name);
  }, [garden[activeIndex].name]);
  // const [shouldChange, setShouldChange] = useState(false);
  const inputEl = useRef(null);
  return (
    <div className={`w-full min-h-[10%] flex justify-between items-center border-b-2 border-y-gray-300 py-3 px-4`}>
      <div className="flex gap-8">
        <div className="text-base text-gray-600 capitalize">Title</div>
        <input
          type="text"
          className="text-base capitalize text-brGreen w-[150px]"
          value={title}
          disabled={false}
          ref={inputEl}
          onChange={(value) => setTitle(value.target.value)}
        />
      </div>
      <Image src={"/icons/edit.svg"} width={20} height={20} alt="edit" className="cursor-pointer" onClick={() => inputEl.current.focus()} />
    </div>
  );
};
const Size = () => {
  const setGardenWidth = useStateStore((state) => state.changeWidth);
  const setGardenHeight = useStateStore((state) => state.changeHeight);
  const setMaxQuantity = useStateStore((state) => state.setMaxQuantity);
  const [width, setWidth] = useState(20);
  const [height, setHeight] = useState(20);

  useEffect(() => {
    setMaxQuantity((width * height) / 20)
  }, [])
  const handleWidthChange = (value) => {
    setWidth(value.target.value);
    setGardenWidth(width);
    setMaxQuantity((width * height) / 20)
  };
  const handleHeightChange = (value) => {
    setHeight(value.target.value);
    setGardenHeight(height);
    setMaxQuantity((width * height) / 20)
  };
  return (
    <Section className="text-sm" title={"garden size"} >
      <div className="flex gap-2 my-2 text-gray-500">
        <div className="flex flex-col gap-4">
          <p className="">Height</p>
          <input type="range" min="5" max="30" value={height} step="1" onChange={handleHeightChange} id="height" className="slider" />
          <div className="flex">
            <div className="w-1/4 border-b-2 border-gray-300">
              <input type="number" value={height} min="5" max="30" onChange={handleHeightChange} className="bg-gray-100" />
            </div>
            <p className="text-gray-400">Feet</p>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <p className="">Width</p>
          <input type="range" min="5" max="30" value={width} step="1" onChange={handleWidthChange} id="width" className="slider" />
          <div className="flex">
            <div className="w-1/4 border-b-2 border-gray-300">
              <input type="number" value={width} min="5" max="30" onChange={handleWidthChange} className="bg-gray-100" />
            </div>
            <p className="text-gray-400">Feet</p>
          </div>
        </div>
      </div>
    </Section>
  );
};

const Section = ({ children, title }) => {
  const { activeTab, setActiveTab } = useTabStore();
  const [closed, setClosed] = useState(activeTab !== title);
  useEffect(() => {
    setClosed(activeTab !== title)
  }, [activeTab])
  return (
    <div className={`w-full min-h-[10%] flex flex-col border-b-2 border-y-gray-300 py-2 ${closed ? "bg-white" : "bg-gray-100"} transition-colors p-4`}>
      <button className="flex justify-between items-center" onClick={() => { setClosed((state) => !state); setActiveTab(title) }}>
        <div className="text-sm text-gray-600 capitalize">{title}</div>
        <Image src={"/icons/expand.svg"} width={30} height={30} alt="expand" className={` transition-transform ${closed ? "-rotate-90" : ""}`} />
      </button>
      <div className={`${closed ? "max-h-0" : "max-h-50"} transition-all overflow-hidden`}>{children}</div>
    </div>
  );
};

export default Configurator;
