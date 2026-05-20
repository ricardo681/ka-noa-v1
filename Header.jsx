/* eslint-disable */
// Ka Noa — Ecossistema (3 frentes: Produtos · Clubes · Atletas)
const pilares = [
  {
    id: 1,
    num: "01",
    title: "Produtos com identidade",
    desc: "Vestuário técnico, remos e acessórios desenhados para quem rema, com grafismos polinésios autênticos. Cada peça tem significado, cada item resolve uma dor real.",
    doodle: 3,
  },
  {
    id: 2,
    num: "02",
    title: "Clubes parceiros",
    desc: "Uma rede nacional de clubes que vestem Ka Noa e revendem para a sua comunidade. Modelo que sustenta o crescimento do clube e do esporte.",
    doodle: 14,
    accent: true,
  },
  {
    id: 3,
    num: "03",
    title: "Atletas patrocinados",
    desc: "Patrocínio profissional com contrato, planejamento e estrutura. Atletas brasileiros representando o va'a no mais alto nível.",
    doodle: 22,
  },
];

const Canoas = () => (
  <section className="kn-ecossistema" id="ecossistema">
    <header className="kn-ecossistema__head">
      <span className="overline">o que é a ka noa</span>
      <h2>uma marca,<br/>três frentes,<br/><em>um ecossistema.</em></h2>
      <p className="lede">
        Ka Noa não é uma loja de produto esportivo. É a plataforma que
        organiza o va'a no Brasil em três frentes que se conectam.
      </p>
    </header>
    <div className="kn-ecossistema__grid">
      {pilares.map(p => (
        <article key={p.id} className={`kn-ecossistema__card ${p.accent ? "kn-ecossistema__card--accent" : ""}`}>
          <div className="kn-ecossistema__card-top">
            <span className="kn-ecossistema__num">{p.num}</span>
            <Doodle n={p.doodle} className="kn-ecossistema__card-doodle" />
          </div>
          <h3>{p.title}</h3>
          <p>{p.desc}</p>
        </article>
      ))}
    </div>
    <div className="kn-ecossistema__cta">
      <a className="kn-btn kn-btn--secondary">Conheça a marca por dentro <span aria-hidden="true">→</span></a>
    </div>
  </section>
);

Object.assign(window, { Canoas });
