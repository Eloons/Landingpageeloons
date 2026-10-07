import { useState, type FormEvent } from "react";
import "./Contact.css";
import Obrigado from "./Obrigadopage";

export default function Contact() {
  const [enviado, setEnviado] = useState(false);
  const [enviando, setEnviando] = useState(false);
  const [erro, setErro] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault(); // impede o navegador de sair do site

    const form = e.currentTarget;
    const dados = Object.fromEntries(new FormData(form));
    setEnviando(true);
    setErro(false);

    try {
      const res = await fetch(
        "https://formsubmit.co/ajax/eloenterprise.company@gmail.com",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(dados),
        }
      );

      const json = await res.json();
      // o FormSubmit devolve success como texto "true" ou booleano, dependendo do caso
      const ok = res.ok && (json.success === true || json.success === "true");

      if (!ok) throw new Error("Falha no envio");

      form.reset();
      setEnviado(true);
    } catch {
      setErro(true);
    } finally {
      setEnviando(false);
    }
  }

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

        {enviado ? (
          <Obrigado onVoltar={() => setEnviado(false)} />
        ) : (
          <form onSubmit={handleSubmit} className="form-card">
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
                style={{ resize: "none" }}
              ></textarea>

              <input type="hidden" name="_captcha" value="false" />

              {erro && (
                <p style={{ color: "#ff6b6b", fontSize: 14 }}>
                  Não foi possível enviar. Tente de novo ou fale pelo WhatsApp.
                </p>
              )}

              <button type="submit" disabled={enviando}>
                {enviando ? "Enviando..." : "Enviar Mensagem"}
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}