"use client";
import { useStateStore } from "@/stores/store";
import Navbar from "@/components/Navbar";
import React from "react";

const Page = () => {
  return (
    <main className="flex flex-col h-screen bg-gray-300 bg-gradient-to-tl from-[#71a32f] via-green-200 to-transparent ">
      {/* <Navbar /> */}
      <Details />
    </main>
  );
};
const Details = () => {
  const state = useStateStore();
  return (
    <div className="flex absolute top-1/2 left-1/2 flex-col gap-6 justify-center items-center lg:w-2/3 sm:w-full w-full  -translate-x-1/2 -translate-y-1/2 h-[50vh]">
      <div className="flex overflow-y-scroll flex-col grid-cols-3 justify-center items-center p-10 w-full text-black rounded-3xl">
        <div className="flex p-4 w-full lg:text-xl md:text-lg sm:text-base text-sm font-bold border-b border-black text-center">
          <div className="w-1/3">Name</div>
          <div className="w-1/3">Color</div>
          <div className="w-1/3">Trolley</div>
        </div>
        {/* {JSON.stringify(state.garden)} */}
        {state.garden.map((value, index) => (
          <>
            {index > 0 && (
              <div className="flex p-4 w-full lg:text-xl md:text-lg sm:text-base text-sm text-center border-b border-black">
                <div className="w-1/3">{value.name} </div>
                <div className="flex gap-6 items-center w-1/3">
                  {value.color}
                  <div className={`w-4 h-4 rounded-full `} style={{ backgroundColor: value.color }} />
                </div>
                <div className="w-1/3">{value.trolley ? "with trolley" : "without trolley"}</div>
                <div></div>
              </div>
            )}
          </>
        ))}
      </div>
      <button className="p-4 px-10 lg:text-xl md:text-lg sm:text-base text-sm font-bold text-black bg-green-100 rounded-full hover:scale-110">checkout</button>
    </div>
  );
};

export default Page;
