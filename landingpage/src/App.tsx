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
import Menuhambuguer from "./components/Menuhambuguer";
import {useState, useEffect} from "react"

export default function App() {

  const [mobilemenu, setMobilemenu] = useState(false);

  useEffect(() => {
    function handleResize() {
      const tela = window.innerWidth;
      if (tela < 768) {
        setMobilemenu(true);
      } else {
        setMobilemenu(false);
      }
    }

    window.addEventListener("resize", handleResize);

    // Chama a função uma vez para definir o estado inicial
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  function menumobile() {
    if (mobilemenu==true) {
      return <Menuhambuguer />;
    }
    else{
      return <Navbar />;
    }
  }

  

  
  return (
    <>
      <Intro />
      <header>{menumobile()}</header>
      <main>
        <Hero />
        <Sobre />
        <Services />
        <Projetos />
        <Processo />
        <Stack />
        <Equipe />
      <Animation />
        <Contact />
      </main>
      <Footer />
    </>
  );
}