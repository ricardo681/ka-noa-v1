/* eslint-disable */
// Ka Noa — Hero (brand key visual)
// Big "ROW YOUR FLOW." stacked left, athlete photo full-bleed, giant orange doodle right.
const Hero = () => (
  <section className="kn-hero kn-hero--keyvisual">
    <img className="kn-hero__bg" src={(window.__resources && window.__resources.imgRunBeach) || "../../assets/brand/run-beach.jpg"} alt="" />
    <div className="kn-hero__overlay" />
    <div className="kn-hero__content">
      <h1 className="kn-hero__claim">
        <span>row</span>
        <span>your</span>
        <span>flow.</span>
      </h1>
      <div className="kn-hero__doodle-big">
        <Doodle n={1} />
      </div>
    </div>
    <div className="kn-hero__lower">
      <span className="overline">Va'a · canoa havaiana · vestuário técnico</span>
      <div className="kn-hero__cta">
        <KNButton variant="primary">Ver coleção</KNButton>
        <KNGhost>Conheça as canoas</KNGhost>
      </div>
    </div>
  </section>
);

Object.assign(window, { Hero });
