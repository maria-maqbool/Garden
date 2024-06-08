"use client";
import Configurator from "@/components/Configurator";
// import Navbar from "@/components/Navbar";
import Scene from "@/components/Scene";
import { useStateStore, useTabStore } from "@/stores/store";

export default function Home() {
  const garden = useStateStore();
  return (
    <>
    {/* <main className="flex flex-col h-screen bg-gray-300 bg-gradient-to-tl from-[#71a32f] via-green-200 to-transparent"> */}
      {/* <Navbar /> */}
      <Configurator/>
      <Scene/>
     
    {/* </main> */}
    </>
  );
}
