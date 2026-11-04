import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Technologies from "@/components/sections/Technologies";
import Experience from "@/components/sections/Experience";
import Services from "@/components/sections/Services";
import Projects from "@/components/sections/Projects";
import GitHubStats from "@/components/sections/GitHubStats";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Technologies />
      <Experience />
      <Services />
      <Projects />
      <GitHubStats />
      <Contact />
      <Footer />
    </>
  );
}
