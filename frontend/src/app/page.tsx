import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/landing/HeroSection";
import { AgentCards } from "@/components/landing/AgentCards";
import { Features } from "@/components/landing/Features";
import { Benefits } from "@/components/landing/Benefits";
import { CtaSection } from "@/components/landing/CtaSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <AgentCards />
        <Features />
        <Benefits />
        <CtaSection />
      </main>
      <Footer />
    </>
  );
}
