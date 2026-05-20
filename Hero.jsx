/* eslint-disable */
// Ka Noa — CTA Final (faixa horizontal)
const CtaFinal = () => (
  <section className="kn-ctafinal">
    <img className="kn-ctafinal__bg" src={(window.__resources && window.__resources.imgRowBack) || "../../assets/brand/row-your-flow-back.jpg"} alt="" />
    <div className="kn-ctafinal__overlay" />
    <div className="kn-ctafinal__content">
      <span className="overline">rema com a gente</span>
      <h2>
        rema <em>com a gente.</em>
      </h2>
      <p className="lede">
        Seja você um clube que quer crescer ou um remador que quer pertencer,
        a Ka Noa começa onde você está.
      </p>
      <div className="kn-ctafinal__buttons">
        <a href="#parceiros" className="kn-btn kn-btn--primary">Sou clube e quero ser parceiro</a>
        <a href="#comunidade" className="kn-btn kn-btn--secondary kn-btn--secondary-light">Sou remador e quero entrar na comunidade</a>
      </div>
    </div>
  </section>
);

Object.assign(window, { CtaFinal });
