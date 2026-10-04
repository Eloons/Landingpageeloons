import "./Projetos.css";
import { gsap } from "gsap";
import { useLayoutEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

// Quando os projetos reais existirem, é só trocar estes itens (imagem, título, legenda).
const projetos = [1, 2, 3].map((n) => ({
  id: n,
  imagem: "/image.png",
  titulo: "Em breve",
  legenda: "Projetos futuro",
  alt: `Projeto futuro ${n}`,
}));

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
          Projetos que <span className="destaque">fazem</span>
        </h2>
        <p className="sub">Os primeiros projetos estarão aqui em breve.</p>

        <div className="portifolio" ref={listaRef}>
          {projetos.map((p) => (
            <div className="card" key={p.id}>
              <img src={p.imagem} alt={p.alt} />
              <div className="overlay"></div>
              <div className="info">
                <h3>{p.titulo}</h3>
                <span>{p.legenda}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
