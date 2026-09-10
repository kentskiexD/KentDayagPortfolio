import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./sections/Hero";
import VideoShowcase from "./sections/VideoShowcase";
import About from "./sections/About";
import Services from "./sections/Services";
import WhyMe from "./sections/WhyMe";
import CTA from "./sections/CTA";

export default function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0f] text-[#f5f5f7] antialiased">
      <Navbar />
      <main>
        <Hero />
        <VideoShowcase />
        <About />
        <Services />
        <WhyMe />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}