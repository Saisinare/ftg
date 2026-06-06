import Hero from "@/components/Hero";
import About from "@/components/About";
import WhyItExists from "@/components/WhyItExists";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import AppPreview from "@/components/AppPreview";
import Differentiator from "@/components/Differentiator";
import TargetAudience from "@/components/TargetAudience";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import FloatingNav from "@/components/FloatingNav";

export default function Home() {
  return (
    <main className="min-h-screen bg-black font-sans selection:bg-emerald-500/30 selection:text-emerald-200">
      <FloatingNav />
      <Hero />
      <About />
      <WhyItExists />
      <Features />
      <HowItWorks />
      <AppPreview />
      <Differentiator />
      <TargetAudience />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}
