import Configurator from "@/components/Configurator";
import Navbar from "@/components/Navbar";
import Scene from "@/components/Scene";

export default function Home() {
  return (
    <main className="flex flex-col h-screen bg-gray-300">
      <Navbar />
      <Configurator/>
      <Scene/>
    </main>
  );
}
