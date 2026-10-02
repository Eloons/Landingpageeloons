import "./Footer.css";

const navegar = [
  { href: "#wwa", label: "Sobre" },
  { href: "#servicos", label: "Serviços" },
  { href: "#Projetos", label: "Trabalho" },
  { href: "#processo", label: "Processo" },
  { href: "#stack", label: "Stack" },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="contem footer-grade">
        <div className="footer-marca">
          <img src="/eloo_e_l_branco.png" alt="Logo da ELO" />
          <p className="footer-frase">
            Eficiência, lógica e <span className="destaque">otimização</span> em
            cada entrega.
          </p>
        </div>

        <div>
          <h4>Navegar</h4>
          <ul>
            {navegar.map((n) => (
              <li key={n.href}>
                <a href={n.href}>{n.label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4>Contato</h4>
          <div className="icons">
            <a href="#" aria-label="GitHub">
              <i id="git" className="fa-brands fa-github"></i>
            </a>
            <a href="mailto:eloenterprise.company@gmail.com" aria-label="E-mail">
              <i id="icon-email" className="fa-solid fa-envelope"></i>
            </a>
            <a
              href="https://wa.me/5562998197704"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
            >
              <i id="zap" className="fa-brands fa-whatsapp"></i>
            </a>
          </div>
        </div>
      </div>
      <p className="copy">&copy; 2026 ELO · Todos os direitos reservados.</p>
    </footer>
  );
}
