import { Navbar } from "../components/Navbar";
import { Hero } from "../components/Hero";
import { About } from "../components/About";
import { Skills } from "../components/Skills";
import { Experience } from "../components/Experience";
import { Projects } from "../components/Projects";
import { Publications } from "../components/Publications";
import { BeyondWork } from "../components/BeyondWork";
import { Contact, Footer } from "../components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Publications />
      <BeyondWork />
      <Contact />
      <Footer />
    </main>
  );
}
