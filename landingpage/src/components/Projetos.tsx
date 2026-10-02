import "./Projetos.css";

// Quando os projetos reais existirem, é só trocar estes itens (imagem, título, legenda).
const projetos = [1, 2, 3].map((n) => ({
  id: n,
  imagem: "/image.png",
  titulo: "Em breve",
  legenda: "Projetos futuro",
  alt: `Projeto futuro ${n}`,
}));

export default function Projetos() {
  return (
    <section className="projetos" id="Projetos">
      <div className="contem">
        <h2 className="Titulo">
          Projetos que <span className="destaque">fazem</span>
        </h2>
        <p className="sub">Os primeiros projetos estarão aqui em breve.</p>

        <div className="portifolio">
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
