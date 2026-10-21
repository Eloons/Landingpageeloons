import "./Stack.css";

const ferramentas = [
  {
    nome: "React",
    icone: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="12" cy="12" r="2.05" fill="#61DAFB" />
        <g fill="none" stroke="#61DAFB" strokeWidth="1">
          <ellipse cx="12" cy="12" rx="11" ry="4.2" />
          <ellipse cx="12" cy="12" rx="11" ry="4.2" transform="rotate(60 12 12)" />
          <ellipse cx="12" cy="12" rx="11" ry="4.2" transform="rotate(120 12 12)" />
        </g>
      </svg>
    ),
  },
  {
    nome: "Vite",
    icone: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <defs>
          <linearGradient id="vite-v1" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#41D1FF" />
            <stop offset="100%" stopColor="#BD34FE" />
          </linearGradient>
          <linearGradient id="vite-v2" x1="0" y1="0" x2=".4" y2="1">
            <stop offset="0%" stopColor="#FFEA83" />
            <stop offset="8%" stopColor="#FFDD35" />
            <stop offset="100%" stopColor="#FFA800" />
          </linearGradient>
        </defs>
        <path d="M23 3.6 12.4 22.5c-.2.4-.8.4-1 0L.8 3.6c-.2-.4.1-.9.6-.8l10.5 1.9c.1 0 .2 0 .3 0l10.3-1.9c.5-.1.8.4.5.8z" fill="url(#vite-v1)" />
        <path d="M16.7 1.3 9 2.8c-.1 0-.2.1-.2.3l-.5 8c0 .2.2.3.3.3l2.2-.5c.2 0 .4.1.3.4l-.6 3.2c0 .2.1.4.4.3l1.3-.4c.2-.1.4.1.4.3l-1 5c-.1.3.3.5.5.2l.1-.2 6.2-12.4c.1-.3-.1-.5-.4-.5l-2.2.4c-.2 0-.4-.1-.3-.4l1.5-5c.1-.3-.2-.5-.4-.5z" fill="url(#vite-v2)" />
      </svg>
    ),
  },
  {
    nome: "Python",
    icone: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M11.9 1.2c-1 0-2 .1-2.8.3-2.5.4-3 1.4-3 3.1v2.2h6v.8H3.6c-1.7 0-3.2 1-3.7 3-.5 2.2-.5 3.6 0 5.9.4 1.7 1.4 3 3.1 3h2.1v-2.6c0-2 1.7-3.7 3.7-3.7h6c1.6 0 2.9-1.3 2.9-3V4.6c0-1.6-1.3-2.8-2.9-3.1-1-.2-2-.3-2.9-.3zM8.7 3c.6 0 1.1.5 1.1 1.1s-.5 1.1-1.1 1.1-1.1-.5-1.1-1.1S8.1 3 8.7 3z" fill="#3776AB" />
        <path d="M19.5 7.6v2.5c0 2.1-1.8 3.8-3.7 3.8h-6c-1.6 0-2.9 1.4-2.9 3v5.6c0 1.6 1.4 2.5 2.9 3 1.8.5 3.6.6 5.8 0 1.5-.4 2.9-1.3 2.9-3v-2.2h-6v-.8h9c1.7 0 2.4-1.2 3-3 .6-1.9.6-3.7 0-6-.4-1.7-1.3-3-3-3h-2zm-3.4 14.4c.6 0 1.1.5 1.1 1.1s-.5 1.1-1.1 1.1-1.1-.5-1.1-1.1.5-1.1 1.1-1.1z" fill="#FFD43B" />
      </svg>
    ),
  },
  {
    nome: "SQL",
    iconeUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqldeveloper/sqldeveloper-original.svg",
  },
  {
    nome: "TypeScript",
    iconeUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  },
  {
    nome: "JavaScript",
    iconeUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    nome: "HTML",
    iconeUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  {
    nome: "CSS",
    iconeUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
  {
    nome: "Node.js",
    iconeUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  {
    nome: "Express",
    iconeUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
  },
  {
    nome: "Next.js",
    iconeUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  },
  {
    nome: "Tailwind CSS",
    iconeUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
  },
  {
    nome: "Java",
    iconeUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
  },
  {
    nome: "PHP",
    iconeUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
  },
  {
    nome: "C#",
    iconeUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg",
  },
  {
    nome: "PostgreSQL",
    iconeUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  },
  {
    nome: "MongoDB",
    iconeUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  },
  {
    nome: "Git",
    iconeUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
  {
    nome: "Docker",
    iconeUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  },
];

export default function Stack() {
  return (
    <section className="section" id="stack">
      <div className="contem">
        <h2 className="ferra">
          Ferramentas que <span className="destaque">adotamos</span> .
        </h2>
        <div
          className="stack"
          role="region"
          aria-label="Carrossel de tecnologias"
          tabIndex={0}
        >
          <div className="stack-track">
            {[false, true].map((duplicado) => (
              <div
                className="stack-group"
                key={duplicado ? "duplicado" : "original"}
                aria-hidden={duplicado || undefined}
              >
                {ferramentas.map((ferramenta) => (
                  <span className="chip" key={ferramenta.nome}>
                    {"iconeUrl" in ferramenta ? (
                      <>
                        <img
                          className={ferramenta.nome === "Express" ? "express-icon" : undefined}
                          src={ferramenta.iconeUrl}
                          alt=""
                          aria-hidden="true"
                        />
                        <span>{ferramenta.nome}</span>
                      </>
                    ) : (
                      <>
                        {ferramenta.icone}
                        <span>{ferramenta.nome}</span>
                      </>
                    )}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
