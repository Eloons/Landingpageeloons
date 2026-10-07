import "./Obrigado.css";

type Props = { onVoltar: () => void };

export default function Obrigado({ onVoltar }: Props) {
  return (
    <div className="thank-you-card">
      <div className="ty-icone">
        <span>✓</span>
      </div>

      <div className="ty-logo">
        <span>ELO</span>
        <small> Efficiency · Logic · Optimization</small>
      </div>

      <h3 className="ty-titulo">Obrigado pelo seu contato!</h3>

      <p className="ty-destaque">Recebemos suas informações com sucesso.</p>

      <p className="ty-texto">
        Nossa equipe analisará sua solicitação e entrará em contato em breve
        para dar continuidade ao atendimento.
      </p>

      <div className="ty-divisor"></div>

      <p className="ty-lema">
        <span>Eficiência.</span>
        <span>Lógica.</span>
        <span>Otimização.</span>
      </p>

      <button
        type="button"
        className="wth-btn wth-btn-vazio"
        onClick={onVoltar}
      >
        Enviar outra mensagem <span aria-hidden="true">→</span>
      </button>
    </div>
  );
}