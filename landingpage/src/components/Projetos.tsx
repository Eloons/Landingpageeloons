import "./Projetos.css";
import { gsap } from "gsap";
import { useLayoutEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const projetos = [
  {
    id: 1,
    imagem: "/pizzaria-totem.png",
    repositorio: "https://github.com/Elo-Eprise/totem",
    titulo: "Pizzaria & Burger Express",
    legenda: "Sistema de pedidos • Totem 01",
    alt: "Terminal do sistema de pedidos da Pizzaria & Burger Express",
  },
  {
    id: 2,
    imagem: "/csirt-senai.png",
    repositorio: "https://github.com/Elo-Eprise/apicomprometida",
    titulo: "CSIRT SENAI",
    legenda: "Laboratório de resposta a incidentes",
    alt: "Terminal com testes de requisições do laboratório CSIRT SENAI",
  },
];

export default function Projetos() {
  const  listaRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".portifolio .card",
        { 
          opacity: 0,y:-80,markers:true,
         },
        
        {
          opacity: 1,
          y: 0,
          scrub: true,
          stagger: 0.3,
          ease: "power2.out",
          scrollTrigger: {
            trigger: listaRef.current,
            start: "top 520px",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, listaRef);

    return () => ctx.revert();
  }, []);
  
  
  return (
    <section className="projetos" id="Projetos">
      <div className="contem">
        <h2 className="Titulo">
          Projetos que <span className="destaque">desenvolvemos.</span>
        </h2>
        <p className="sub">Confira alguns dos projetos desenvolvidos.</p>

        <div className="portifolio" ref={listaRef}>
          {projetos.map((p) => (
            <a
              className="card"
              href={p.repositorio}
              key={p.id}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={p.imagem} alt={p.alt} />
              <div className="overlay"></div>
              <div className="info">
                <h3>{p.titulo}</h3>
                <span>{p.legenda}</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
