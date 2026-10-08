import "./Navbar.css";

const links = [
  { href: "#wwa", label: "Sobre" },
  { href: "#servicos", label: "Serviços" },
  { href: "#Projetos", label: "Projetos" },
  { href: "#processo", label: "Processo" },
  { href: "#stack", label: "Stack" },
  { href: "#contato", label: "Contato" },
];

export default function Navbar() {
  return (
    <section className="navbar" id="home">
      <a href="#home">
        <img src="/eloons-simbolo.png" alt="Logo da ELO" />
      </a>
      <ul>
        {links.map((l) => (
          <li key={l.href}>
            <a href={l.href}>{l.label}</a>
          </li>
        ))}
      </ul>
    </section>
  );
}
