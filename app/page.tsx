import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustSection from "@/components/Trust";
import Features from "@/components/Features";
import ProblemSection from "@/components/ProblemSection";
import SampleReport from "@/components/SampleReport";
import Pricing from "@/components/Pricing";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import HowItWorks from "@/components/HowItWorks";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <TrustSection />
      <ProblemSection />
      <HowItWorks />
      <Features />
      <SampleReport />
      <Pricing />
      <CTA />
      <Footer />
    </>
  );
}