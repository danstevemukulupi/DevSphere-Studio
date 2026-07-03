

import Services from "@/components/sections/Services";
import Portfolio from "@/components/sections/Portfolio";
import AIAssistant from "@/components/sections/AIAssistant";
import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import Homep from "@/components/sections/Homep";

export default function Home() {
  return (
      <>
    <Navbar />
    <main>
      <Homep />
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
