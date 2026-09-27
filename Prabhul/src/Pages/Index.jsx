import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import About from "../Components/About";
import Experience from "../Components/Experience";
import Education from "../Components/Education";
import Skills from "../Components/Skills";
import Projects from "../Components/Project";
import Contact from "../Components/Contact";
import Footer from "../Components/Footer";
import Chatbot from "../Components/Chatbot";

const Index = () => {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Education />
        <Projects />
        <Contact />
      </main>

      <Footer />
      <Chatbot />
    </>
  );
};

export default Index;