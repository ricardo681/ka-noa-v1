/* eslint-disable */
// Ka Noa — Hero (brand key visual)
const Hero = () => (
  <section className="kn-hero kn-hero--keyvisual">
    <img className="kn-hero__bg" src={(window.__resources && window.__resources.imgRunBeach) || "../../assets/brand/run-beach.jpg"} alt="" />
    <div className="kn-hero__overlay" />

    <div className="kn-hero__content">
      <div className="kn-hero__copy">
        <span className="overline kn-hero__eyebrow">Va'a · canoa havaiana · vestuário técnico</span>
        <h1 className="kn-hero__headline">
          a canoa havaiana<br/>
          ganhou uma marca<br/>
          <em>à sua altura.</em>
        </h1>
        <p className="kn-hero__lede">
          Ka Noa é a primeira marca brasileira dedicada exclusivamente ao va'a.
          Produtos técnicos, identidade cultural e uma rede de clubes parceiros
          que constroem o futuro do esporte com a gente.
        </p>
        <div className="kn-hero__cta">
          <a href="#parceiros" className="kn-btn kn-btn--primary">Seja parceiro ka noa</a>
          <a href="#produtos" className="kn-btn kn-btn--ghost-light">Conheça a coleção <span aria-hidden="true">→</span></a>
        </div>
      </div>

      <div className="kn-hero__visual">
        <div className="kn-hero__doodle-big">
          <Doodle n={1} />
        </div>
      </div>
    </div>
  </section>
);

Object.assign(window, { Hero });
