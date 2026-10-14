import "./Navbar.css";
import Botao from "./Acessibilidade";

const links = [
  { href: "#wwa", label: "Sobre" },
  { href: "#servicos", label: "Serviços" },
  { href: "#projetos", label: "Projetos" },
  { href: "#processo", label: "Processo" },
  { href: "#stack", label: "Stack" },
<<<<<<< HEAD
  { href: "#contato", label: "Contato" },
=======
>>>>>>> 2e56b1b (Acessibilidade)
];

export default function Navbar() {
  return (
    <nav className="navbar" id="home" aria-label="Navegação principal">
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
      <Botao />
    </nav>
  );
}