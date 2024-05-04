"use client";
import { useStateStore } from "@/stores/store";
import React from "react";

const Page = () => {
  return (
    <div className="text-xl text-black">
      Overview tab
      <Details />
    </div>
  );
};
const Details = () => {
  const state = useStateStore();
  return (
    <ul className="flex flex-col">
      {state.garden.map((planter, index) => {
        return <li>{planter.name}</li>;
      })}
    </ul>
  );
};

export default Page;
