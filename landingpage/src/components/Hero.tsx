import "./Hero.css";

import { useRef } from "react";
import { useBolinhas } from '../hooks/useBolinha';

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useBolinhas(canvasRef);

  return (
    <section className="wwa hero">
      <div className="hero-conteudo">
        <h1 className="signi" id="signi">
          Efficiency,
          <br />
          Logic, <span className="destaque">Optimization</span>
          <span className="ponto">.</span>
        </h1>
        <p className="p2">
          Sites, sistemas e suporte técnico <strong>sob medida</strong>. Tudo
          feito do zero para o seu negócio. Nada de modelo pronto.
        </p>
        <div className="hero-acoes">
          <a
            href="https://wa.me/5562947681368"
            target="_blank"
            rel="noopener noreferrer"
            className="wth-btn"
          >
            <i className="fa-brands fa-whatsapp"></i> Fale conosco
          </a>
        </div>
      </div>
      <canvas id="bolas" ref={canvasRef}></canvas>
    </section>
  );
}
