import Configurator from "@/components/Configurator";
import Navbar from "@/components/Navbar";
import Scene from "@/components/Scene";

export default function Home() {
  return (
    <main className="flex flex-col h-screen bg-gray-300 bg-gradient-to-tl from-gray-500 via-gray-300 to-transparent">
      <Navbar />
      <Configurator/>
      <Scene/>
    </main>
  );
}
