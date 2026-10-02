import "./Contact.css";

export default function Contact() {
  return (
    <section className="contact" id="contato">
      <div className="contem contato-grade">
        <div className="contato-texto">
          <h2 className="sobre-titulo">
            Nos fale o problema, que nós{" "}
            <span className="destaque">resolvemos.</span>
          </h2>
          <p className="sub">
            Fale direto com quem desenvolve, pelo WhatsApp ou pelo formulário.
          </p>
          <a
            href="https://wa.me/5562998197704"
            target="_blank"
            rel="noopener noreferrer"
            className="wth-btn"
          >
            <i className="fa-brands fa-whatsapp"></i> Fale conosco
          </a>
        </div>

        <form
          action="https://formsubmit.co/eloenterprise.company@gmail.com"
          method="POST"
          className="form-card"
        >
          <h3 className="form-titulo">Envie sua mensagem</h3>

          <div className="form-corpo">
            <div className="form-linha">
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Seu nome"
                required
              />
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Seu E-mail"
                required
              />
            </div>

            <input
              type="text"
              name="_subject"
              id="assunto"
              placeholder="Assunto"
              required
            />

            <textarea
              name="message"
              id="message"
              placeholder="Digite sua mensagem"
              required
            ></textarea>

            <input type="hidden" name="_captcha" value="false" />
            <input
              type="hidden"
              name="_next"
              value="https://wondrous-pavlova-5e1e3f.netlify.app/obrigado.html"
            />

            <button type="submit">Enviar Mensagem</button>
          </div>
        </form>
      </div>
    </section>
  );
}
