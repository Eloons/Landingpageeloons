import "./Processo.css";
import { gsap } from "gsap";
import { useLayoutEffect, useRef } from "react";

const etapas = [
  {
    titulo: "Imersão",
    texto:
      "Entendemos o problema de verdade e saímos com escopo e proposta antes de começar.",
    destaque: "problema de verdade",
  },
  {
    titulo: "Planejamento",
    texto:
      "Definimos as escolhas que sustentam o projeto e registramos tudo em um documento claro.",
    destaque: "escolhas que sustentam o projeto",
  },
  {
    titulo: "Design",
    texto:
      "Desenhamos as telas e o caminho do usuário. Você aprova antes de virar código.",
    destaque: "antes de virar código",
  },
  {
    titulo: "Desenvolvimento",
    texto:
      "Entregas em ciclos curtos, com um endereço de teste sempre no ar para você acompanhar.",
    destaque: "ciclos curtos",
  },
  {
    titulo: "Testes",
    texto:
      "Testamos tudo antes de publicar para encontrar e corrigir problemas antes que cheguem ao seu cliente.",
    destaque: "antes de publicar",
  },
  {
    titulo: "Publicação e suporte",
    texto:
      "Seu projeto entra no ar com acompanhamento e atenção caso algo saia do lugar.",
    destaque: "acompanhamento e atenção",
  },
];

function fraseDestacada(texto: string, destaque: string) {
  const inicio = texto.indexOf(destaque);
  if (inicio < 0) return texto;

  return (
    <>
      {texto.slice(0, inicio)}
      <strong>{destaque}</strong>
      {texto.slice(inicio + destaque.length)}
    </>
  );
}

export default function Processo() {
  const secaoRef = useRef<HTMLElement>(null);
  const palcoRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const secao = secaoRef.current;
    const palco = palcoRef.current;
    if (!secao || !palco) return;

    const media = gsap.matchMedia();
    media.add("(prefers-reduced-motion: no-preference)", () => {
      const cards = gsap.utils.toArray<HTMLElement>(
        ".processo-card",
        palco,
      );
      const timeline = gsap.timeline({ repeat: -1 });

      gsap.set(cards, { autoAlpha: 0, scale: 0.92, z: -40 });
      cards.forEach((card) => {
        timeline
          .to(card, {
            autoAlpha: 1,
            scale: 1,
            z: 0,
            duration: 0.4,
            ease: "power3.out",
          })
          .to({}, { duration: 2 })
          .to(card, {
            autoAlpha: 0,
            scale: 1.06,
            z: 45,
            duration: 0.3,
            ease: "power2.in",
          });
      });

      const pausar = () => timeline.pause();
      const continuar = (event: FocusEvent) => {
        if (
          event.type !== "focusout" ||
          !palco.contains(event.relatedTarget as Node | null)
        ) {
          timeline.resume();
        }
      };

      palco.addEventListener("pointerenter", pausar);
      palco.addEventListener("pointerleave", continuar);
      palco.addEventListener("focusin", pausar);
      palco.addEventListener("focusout", continuar);

      return () => {
        timeline.kill();
        palco.removeEventListener("pointerenter", pausar);
        palco.removeEventListener("pointerleave", continuar);
        palco.removeEventListener("focusin", pausar);
        palco.removeEventListener("focusout", continuar);
      };
    });

    return () => media.revert();
  }, []);

  return (
    <section className="processo" id="processo" ref={secaoRef}>
      <div className="processo-ambiente" aria-hidden="true">
        <span className="processo-orbe processo-orbe-a" />
        <span className="processo-orbe processo-orbe-b" />
        <span className="processo-anel" />
        <span className="processo-grade" />
      </div>

      <div className="contem processo-conteudo">
        <header className="processo-cabecalho">
          <span className="processo-selo">
            <span className="processo-ponto" />
            Nosso processo
          </span>
          <h2>
            Do planejamento <span className="destaque">ao resultado</span>
          </h2>
          <p>
            Um caminho claro para transformar ideias em soluções digitais.
          </p>
        </header>

        <div
          className="processo-palco"
          ref={palcoRef}
          role="region"
          aria-label="Etapas do processo de criação"
          tabIndex={0}
        >
          {etapas.map((etapa, index) => (
            <article className="processo-card" key={etapa.titulo}>
              <span className="processo-card-indice" aria-hidden="true">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3>{etapa.titulo}</h3>
              <p>{fraseDestacada(etapa.texto, etapa.destaque)}</p>
            </article>
          ))}

        </div>
      </div>
    </section>
  );
}
