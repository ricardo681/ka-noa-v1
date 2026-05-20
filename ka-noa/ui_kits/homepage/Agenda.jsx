/* eslint-disable */
// Ka Noa — Agenda de eventos de remada
const eventos = [
  { id: 1, date: { d: "24", m: "MAI" }, name: "Travessia Ilha do Mel", local: "Pontal do Paraná · PR", type: "Regata · OC1/OC2", spots: "48 vagas", featured: true },
  { id: 2, date: { d: "07", m: "JUN" }, name: "Copa Ka Noa", local: "Lagoa da Conceição · SC", type: "V6 equipe · open", spots: "12 equipes" },
  { id: 3, date: { d: "22", m: "JUN" }, name: "Encontro Linha d'Água", local: "Florianópolis · SC", type: "Clínica de remada", spots: "Aulão grátis" },
  { id: 4, date: { d: "13", m: "JUL" }, name: "Va'a Atlântico", local: "Búzios · RJ", type: "Travessia 12km", spots: "Inscrições abertas" },
];

const Agenda = () => (
  <section className="kn-agenda" id="agenda">
    <header className="kn-agenda__head">
      <div>
        <span className="overline">agenda · 2026</span>
        <h2>eventos<br/>na água.</h2>
      </div>
      <p className="lede">
        Regatas, travessias, clínicas. Onde a Ka Noa rema com você —
        no Atlântico, nas lagoas, nos clubes que receberam nossos cascos.
      </p>
    </header>
    <ul className="kn-agenda__list">
      {eventos.map(e => (
        <li key={e.id} className={`kn-agenda__item ${e.featured ? "kn-agenda__item--featured" : ""}`}>
          <div className="kn-agenda__date">
            <strong>{e.date.d}</strong>
            <span>{e.date.m}</span>
          </div>
          <div className="kn-agenda__info">
            <h4>{e.name}</h4>
            <span className="caption">{e.local} · {e.type}</span>
          </div>
          <div className="kn-agenda__spots">{e.spots}</div>
          <div className="kn-agenda__cta">
            <a>Inscrever <span aria-hidden="true">→</span></a>
          </div>
        </li>
      ))}
    </ul>
  </section>
);

Object.assign(window, { Agenda });
