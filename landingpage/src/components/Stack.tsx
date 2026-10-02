import "./Stack.css";

export default function Stack() {
  return (
    <>
      <section className="section" id="stack">
        <div className="contem">
        <h2 className="ferra">
          Ferramentas que <span className="destaque">escolhemos,</span> para vocês.
        </h2>
        <div className="stack" >
          <span className="chip">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <circle cx="12" cy="12" r="2.05" fill="#61DAFB"></circle>
              <g fill="none" stroke="#61DAFB" strokeWidth="1">
                <ellipse cx="12" cy="12" rx="11" ry="4.2"></ellipse>
                <ellipse
                  cx="12"
                  cy="12"
                  rx="11"
                  ry="4.2"
                  transform="rotate(60 12 12)"
                ></ellipse>
                <ellipse
                  cx="12"
                  cy="12"
                  rx="11"
                  ry="4.2"
                  transform="rotate(120 12 12)"
                ></ellipse>
              </g>
            </svg>
            <span>React</span>
          </span>
          <span className="chip">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <defs>
                <linearGradient id="vite-v1" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#41D1FF"></stop>
                  <stop offset="100%" stopColor="#BD34FE"></stop>
                </linearGradient>
                <linearGradient id="vite-v2" x1="0" y1="0" x2=".4" y2="1">
                  <stop offset="0%" stopColor="#FFEA83"></stop>
                  <stop offset="8%" stopColor="#FFDD35"></stop>
                  <stop offset="100%" stopColor="#FFA800"></stop>
                </linearGradient>
              </defs>
              <path
                d="M23 3.6 12.4 22.5c-.2.4-.8.4-1 0L.8 3.6c-.2-.4.1-.9.6-.8l10.5 1.9c.1 0 .2 0 .3 0l10.3-1.9c.5-.1.8.4.5.8z"
                fill="url(#vite-v1)"
              ></path>
              <path
                d="M16.7 1.3 9 2.8c-.1 0-.2.1-.2.3l-.5 8c0 .2.2.3.3.3l2.2-.5c.2 0 .4.1.3.4l-.6 3.2c0 .2.1.4.4.3l1.3-.4c.2-.1.4.1.4.3l-1 5c-.1.3.3.5.5.2l.1-.2 6.2-12.4c.1-.3-.1-.5-.4-.5l-2.2.4c-.2.1-.4-.1-.3-.4l1.5-5c.1-.3-.2-.5-.4-.5z"
                fill="url(#vite-v2)"
              ></path>
            </svg>
            <span>Vite</span>
          </span>
          <span className="chip">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path
                d="M11.9 1.2c-1 0-2 .1-2.8.3-2.5.4-3 1.4-3 3.1v2.2h6v.8H3.6c-1.7 0-3.2 1-3.7 3-.5 2.2-.5 3.6 0 5.9.4 1.7 1.4 3 3.1 3h2.1v-2.6c0-2 1.7-3.7 3.7-3.7h6c1.6 0 2.9-1.3 2.9-3V4.6c0-1.6-1.3-2.8-2.9-3.1-1-.2-2-.3-2.9-.3zM8.7 3c.6 0 1.1.5 1.1 1.1s-.5 1.1-1.1 1.1-1.1-.5-1.1-1.1S8.1 3 8.7 3z"
                fill="#3776AB"
              ></path>
              <path
                d="M19.5 7.6v2.5c0 2.1-1.8 3.8-3.7 3.8h-6c-1.6 0-2.9 1.4-2.9 3v5.6c0 1.6 1.4 2.5 2.9 3 1.8.5 3.6.6 5.8 0 1.5-.4 2.9-1.3 2.9-3v-2.2h-6v-.8h9c1.7 0 2.4-1.2 3-3 .6-1.9.6-3.7 0-6-.4-1.7-1.3-3-3-3h-2zm-3.4 14.4c.6 0 1.1.5 1.1 1.1s-.5 1.1-1.1 1.1-1.1-.5-1.1-1.1.5-1.1 1.1-1.1z"
                fill="#FFD43B"
              ></path>
            </svg>
            <span>Python</span>
          </span>
          <span className="chip">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <g fill="#00758F">
                <path d="M21.8 15.2c-1.3-.1-2.3.1-3.1.4-.2.1-.6.1-.7.4.1.1.1.3.2.5.2.3.5.7.8 1 .3.2.7.5 1 .7.6.4 1.3.6 1.9 1 .4.2.7.5 1.1.7.2.1.3.3.5.4v-.1c-.1-.1-.1-.3-.2-.4l-.4-.4c-.4-.5-.9-1-1.4-1.4-.4-.3-1.4-.7-1.6-1.2h-.1c.3 0 .7-.1 1-.2.5-.1 1-.1 1.5-.3l.7-.2v-.1c-.3-.3-.5-.6-.8-.8z"></path>
                <path d="M8.8 4.5c-.6 0-1 .1-1.4.2v.1h.1c.3.5.7.9 1.1 1.4l.9 1.8.1-.1c.5-.4.7-1 .7-1.8-.2-.2-.2-.4-.3-.6-.2-.4-.7-.6-1.2-1z"></path>
                <path d="M22 20.8c-1.9-.1-3.4-.3-4.6-.8-.4-.2-1-.5-1-1 0-.3.3-.7.6-.8.5-.2 1.3-.2 1.9-.4.3-.1.7-.2 1-.4-1-.1-2-.2-3.1-.2-.7 0-1.5.1-2.2.2-.3.1-.7.2-.9.5-.3.4-.2 1 .1 1.4.5.7 1.4 1.1 2.3 1.4 1.1.4 2.4.6 3.7.7.5 0 1 .1 1.5.1.3 0 .7-.1 1-.2-.1-.2-.2-.4-.3-.5z"></path>
              </g>
              <path
                d="M13.6 3.5c-.4-.6-.9-1.1-1.5-1.5C10.4.8 8 .5 5.6.9 3.9 1.2 2.4 2 1.4 3.3c-.9 1.1-1.2 2.5-1 4 .2 1.6.9 3 1.9 4.2 1.2 1.5 2.8 2.6 4.5 3.4 1.6.7 3.4 1.1 5.2 1.2h.4c-.1-.3-.3-.6-.5-.8-1-1.2-2-2.4-2.6-3.9-.5-1.2-.6-2.5-.2-3.7.4-1.3 1.4-2.3 2.6-2.9.6-.3 1.2-.5 1.9-.6-.1-.2-.2-.4-.4-.6l.4-.1z"
                fill="#00758F"
              ></path>
              <path
                d="M6.6 6.4c.6 0 1.1.5 1.1 1.1s-.5 1.1-1.1 1.1-1.1-.5-1.1-1.1.5-1.1 1.1-1.1z"
                fill="#fff"
              ></path>
              <path
                d="M18.7 12.6c-.5-1.7-1.6-3.2-3-4.2-.7-.5-1.5-.9-2.4-1-.4 0-.8 0-1.2.2.4.5.8 1 1.1 1.6.7 1.4 1 3 1.5 4.5.3.9.7 1.8 1.4 2.4.6.5 1.4.7 2.2.6.5-.1 1-.3 1.3-.7-.4-1.2-.6-2.3-.9-3.4z"
                fill="#F29111"
              ></path>
            </svg>
            <span>SQL</span>
          </span>
        </div>
        </div>
      </section>
    </>
  );
}
