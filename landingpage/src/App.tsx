import Intro from "./components/Intro";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Sobre from "./components/Sobre";
import Services from "./components/Services";
import Projetos from "./components/Projetos";
import Processo from "./components/Processo";
import Stack from "./components/Stack";
import Equipe from "./components/Equipe";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Animation from "./components/Animation";


export default function App() {
  return (
    <>
      <Intro />
      <Navbar />
      <main>
        <Hero />
        <Sobre />
        <Services />
        <Animation />
        <Projetos />
        <Processo />
        <Stack />
        <Equipe />
        <Contact />
      </main>
      <Footer />
    </>
  );
}