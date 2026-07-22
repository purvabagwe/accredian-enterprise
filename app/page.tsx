import { Navbar } from "@/sections/Navbar";
import { Hero } from "@/sections/Hero";
import { Statistics } from "@/sections/Statistics";
import { TrustedCompanies } from "@/sections/TrustedCompanies";
import { WhyChooseUs } from "@/sections/WhyChooseUs";
import { LearningDomains } from "@/sections/LearningDomains";
import { Programs } from "@/sections/Programs";
import { TargetAudience } from "@/sections/TargetAudience";
import { LearningFramework } from "@/sections/LearningFramework";
import { Workflow } from "@/sections/Workflow";
import { FAQ } from "@/sections/FAQ";
import { Testimonials } from "@/sections/Testimonials";
import { CallToAction } from "@/sections/CallToAction";
import { Footer } from "@/sections/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1 flex flex-col w-full bg-slate-50/50 dark:bg-slate-950">
        <Hero />
        <Statistics />
        <TrustedCompanies />
        <WhyChooseUs />
        <LearningDomains />
        <Programs />
        <TargetAudience />
        <LearningFramework />
        <Workflow />
        <FAQ />
        <Testimonials />
        <CallToAction />
      </main>
      <Footer />
    </>
  );
}
