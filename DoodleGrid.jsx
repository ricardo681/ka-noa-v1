/* eslint-disable */
// Ka Noa — Por que Ka Noa (4 razões)
const razoes = [
  {
    n: "01",
    title: "Cultura autêntica",
    desc: "Grafismos polinésios com significado real. Curadoria que respeita a origem do esporte.",
    doodle: 3,
  },
  {
    n: "02",
    title: "Produto técnico",
    desc: "Material desenvolvido com atletas e testado em raia. Resistente ao sal, ao sol e à intensidade do treino.",
    doodle: 14,
  },
  {
    n: "03",
    title: "Atleta de verdade",
    desc: "Patrocínio com contrato e estrutura. Não é doação de uniforme.",
    doodle: 22,
  },
  {
    n: "04",
    title: "Rede que cresce junto",
    desc: "Clubes parceiros, eventos, calendário nacional e conteúdo. O va'a brasileiro fica mais forte quando rema unido.",
    doodle: 7,
  },
];

const Agenda = () => (
  <section className="kn-porque" id="porque">
    <header className="kn-porque__head">
      <span className="overline">por que ka noa</span>
      <h2>quatro razões<br/>pra remar <em>com a gente.</em></h2>
    </header>
    <div className="kn-porque__grid">
      {razoes.map(r => (
        <article key={r.n} className="kn-porque__item">
          <div className="kn-porque__top">
            <span className="kn-porque__num">{r.n}</span>
            <Doodle n={r.doodle} className="kn-porque__doodle" />
          </div>
          <h3>{r.title}</h3>
          <p>{r.desc}</p>
        </article>
      ))}
    </div>
  </section>
);

Object.assign(window, { Agenda });
