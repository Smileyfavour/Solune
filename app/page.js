import AnnouncementBar from "@/components/Announcer";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import ValueBar from "@/components/ValueBar";
import ProductSection from "@/components/ProductSection";
import StorySection from "@/components/StorySection";
import CTASection from "@/components/CTASection";

export default function Home() {
  return (
    <>
      <AnnouncementBar />
      <Navbar />
      <main>
        <Hero />
        <ValueBar />
        <ProductSection />
        <StorySection />
        <CTASection />
        <Footer />
      </main>
    </>
  );
}