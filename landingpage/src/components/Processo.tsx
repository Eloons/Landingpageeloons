import "./Processo.css";

const etapas = [
  {
    titulo: "Imersão",
    texto:
      "Entendemos o problema de verdade e saímos com escopo e proposta antes de começar.",
  },
  {
    titulo: "Planejamento",
    texto:
      "Definimos as escolhas que sustentam o projeto e registramos tudo em um documento claro.",
  },
  {
    titulo: "Design",
    texto:
      "Desenhamos as telas e o caminho do usuário. Você aprova antes de virar código.",
  },
  {
    titulo: "Desenvolvimento",
    texto:
      "Entregas em ciclos curtos, com um endereço de teste sempre no ar para você acompanhar.",
  },
  {
    titulo: "Testes",
    texto:
      "Testamos tudo antes de publicar, para quebrar antes que o seu cliente quebre.",
  },
  {
    titulo: "Publicação e suporte",
    texto:
      "Entra no ar com acompanhamento e atenção caso algo saia do lugar.",
  },
];

export default function Processo() {
  return (
    <section className="processo" id="processo">
      <div className="contem">
        <h2 className="sobre-titulo">
          Do planejamento <span className="destaque">até</span> o resultado
        </h2>
        <p className="sub">
          Como pensamos para chegar no melhor resultado{" "}
          <strong>para você</strong>
        </p>

        <ol className="etapas">
          {etapas.map((e, i) => (
            <li key={e.titulo}>
              <span className="num">{String(i + 1).padStart(2, "0")}</span>
              <h3>{e.titulo}</h3>
              <p>{e.texto}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
