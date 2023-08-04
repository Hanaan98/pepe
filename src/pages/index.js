import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import About from "@/components/About";
import Benefits from "@/components/Benefits";
import Footer from "@/components/Footer";
import RoadMap from "@/components/RoadMap";
import FAQs from "@/components/FAQs";
import Purpose from "@/components/Purpose";
export default function Home() {
  return (
    <div className="main_bg">
      <Navbar />
      <HeroSection />
      <About />
      <RoadMap />
      <Benefits />
      <Purpose />
      <FAQs />
      <Footer />
    </div>
  );
}
