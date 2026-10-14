import "./Acessibilidade.css";
import { useState } from "react";
import type { ChangeEvent } from "react";

export default function Botao() {
  const [ligado, setLigado] = useState(false);

  const SetDark = () => {
    document.body.setAttribute("data-time", "dark");
  };

  const Ligthmode = () => {
    document.body.setAttribute("data-time", "light");
  };

  function definirModo(event: ChangeEvent<HTMLInputElement>) {
    const novoEstado = event.currentTarget.checked;

    setLigado(novoEstado);

    if (novoEstado) {
      Ligthmode();
    } else {
      SetDark();
    }
  }

  return (
    <div>
      <input
        className="setMode"
        type="checkbox"
        id="d_l"
        checked={ligado}
        onChange={definirModo}
      />
    </div>
  );
}