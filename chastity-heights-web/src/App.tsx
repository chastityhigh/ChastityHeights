import { useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ArchiveSection from "./components/ArchiveSection";
import CastSection from "./components/CastSection";
import EpisodesSection from "./components/EpisodesSection";
import CampusSection from "./components/CampusSection";
import SignalSection from "./components/SignalSection";
import Footer from "./components/Footer";
import { useScrollProgress } from "./hooks/useScrollProgress";

export default function App() {
  const progress = useScrollProgress();
  useEffect(() => {
    const move = () => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      document.documentElement.style.setProperty("--scroll-y", `${window.scrollY}`);
    };
    move();
    window.addEventListener("scroll", move, { passive: true });
    return () => window.removeEventListener("scroll", move);
  }, []);
  return (
    <>
      <div className="reading-progress" style={{ transform: `scaleX(${progress})` }} />
      <Header />
      <main>
        <Hero />
        <ArchiveSection />
        <CastSection />
        <EpisodesSection />
        <CampusSection />
        <SignalSection />
      </main>
      <Footer />
    </>
  );
}
