import "./Navbar.css";

const links = [
  { href: "#wwa", label: "Sobre" },
  { href: "#servicos", label: "Serviços" },
  { href: "#Projetos", label: "Projetos" },
  { href: "#processo", label: "Processo" },
  { href: "#stack", label: "Stack" },
  { href: "#equipe", label: "Equipe" },
];

export default function Navbar() {
  return (
    <section className="navbar" id="home">
      <a href="#home">
        <img src="/eloo_e_l_branco.png" alt="Logo da ELO" />
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
