
import Services from "@/components/sections/Services";
import Portfolio from "@/components/sections/Portfolio";
import AIAssistant from "@/components/sections/AIAssistant";
import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import HomePage from "@/components/sections/HomePage";

export default function Home() {
  return (
      <>
    <Navbar />
    <main>
      <HomePage />
      <Services />
      <Portfolio />
      <AIAssistant />
      <About />
      <Contact />
    </main>
  
      <Footer />
  </>
  );
  
}
