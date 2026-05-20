/* eslint-disable */
// Ka Noa — Depoimentos
const depoimentos = [
  {
    quote: "A OC1 da Ka Noa entregou exatamente o que eu precisava pra competir oceano. Casco firme, leveza certa, glide longo. Confio cego.",
    nome: "Pedro Mello",
    contexto: "Atleta de canoa havaiana · Florianópolis",
    doodle: 3,
  },
  {
    quote: "Comprei o long sleeve por causa do UV50+, mas o que me prende é o caimento. Veste pra treinar e veste pra sair depois.",
    nome: "Marina Costa",
    contexto: "Remadora · clube Tietê",
    doodle: 14,
  },
  {
    quote: "Trabalho com clínica de remada há oito anos. Indico a Ka Noa porque a galera volta dizendo a mesma coisa: dura, e é bonita.",
    nome: "Beto Saraiva",
    contexto: "Treinador · Va'a Garage Curitiba",
    doodle: 22,
  },
];

const Depoimentos = () => {
  const [idx, setIdx] = React.useState(0);
  const total = depoimentos.length;
  const d = depoimentos[idx];
  return (
    <section className="kn-depoimentos" id="depoimentos">
      <header className="kn-depoimentos__head">
        <span className="overline">quem rema com a gente</span>
        <h2>vozes da água.</h2>
      </header>
      <div className="kn-depoimentos__stage">
        <div className="kn-depoimentos__mark">
          <Doodle n={d.doodle} />
        </div>
        <blockquote className="kn-depoimentos__quote">
          <p>"{d.quote}"</p>
          <footer>
            <strong>{d.nome}</strong>
            <span>{d.contexto}</span>
          </footer>
        </blockquote>
      </div>
      <nav className="kn-depoimentos__nav" aria-label="Navegar depoimentos">
        {depoimentos.map((_, i) => (
          <button
            key={i}
            className={`kn-depoimentos__dot ${i === idx ? "kn-depoimentos__dot--active" : ""}`}
            onClick={() => setIdx(i)}
            aria-label={`Depoimento ${i + 1} de ${total}`}
          />
        ))}
      </nav>
    </section>
  );
};

Object.assign(window, { Depoimentos });
