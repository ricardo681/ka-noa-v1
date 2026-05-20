/* eslint-disable */
// Ka Noa — Time Ka Noa (atletas embaixadores)
const atletas = [
  {
    nome: "Pedro Mello",
    modalidade: "OC1 · Oceano",
    clube: "Clube Atlético Catarinense · SC",
    quote: "Casco firme, leveza certa, glide longo.",
    img: "run-beach.jpg",
    res: "imgRunBeach",
  },
  {
    nome: "Marina Costa",
    modalidade: "V6 Equipe · Mista",
    clube: "Clube de Regatas Tietê · SP",
    quote: "Vestir Ka Noa é vestir a cultura inteira.",
    img: "rashguard-white.jpg",
    res: "imgRashguardWhite",
  },
  {
    nome: "Beto Saraiva",
    modalidade: "OC2 · Travessias",
    clube: "Va'a Garage · PR",
    quote: "Dura. E é bonita. A galera volta dizendo isso.",
    img: "sleeve-orange.jpg",
    res: "imgSleeveOrange",
  },
  {
    nome: "Ana Liko",
    modalidade: "V1 · Regata",
    clube: "Outrigger Búzios · RJ",
    quote: "É a primeira marca que fala a nossa língua.",
    img: "row-your-flow-back.jpg",
    res: "imgRowBack",
  },
];

const Lojistas = () => (
  <section className="kn-time" id="atletas">
    <header className="kn-time__head">
      <div>
        <span className="overline">time ka noa</span>
        <h2>atletas que vestem,<br/>que remam,<br/><em>que representam.</em></h2>
      </div>
      <p className="lede">
        Nossos embaixadores não são só rostos numa foto. São remadores brasileiros
        com contrato, planejamento de temporada e a missão de colocar o Brasil
        no mapa do va'a mundial.
      </p>
    </header>

    <div className="kn-time__grid">
      {atletas.map((a, i) => (
        <article key={i} className="kn-time__card">
          <div
            className="kn-time__img"
            style={{ backgroundImage: `url(${(window.__resources && window.__resources[a.res]) || `../../assets/brand/${a.img}`})` }}
          >
            <span className="kn-time__index">{String(i + 1).padStart(2, "0")}</span>
          </div>
          <div className="kn-time__meta">
            <h4>{a.nome}</h4>
            <span className="caption">{a.modalidade} · {a.clube}</span>
            <p className="kn-time__quote">"{a.quote}"</p>
          </div>
        </article>
      ))}
    </div>

    <div className="kn-time__cta">
      <a className="kn-btn kn-btn--secondary">Conhecer o time completo <span aria-hidden="true">→</span></a>
    </div>
  </section>
);

Object.assign(window, { Lojistas });
