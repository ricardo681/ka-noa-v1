/* eslint-disable */
// Ka Noa — Manifesto
const Manifesto = () => (
  <section className="kn-manifesto" id="agua">
    <div className="kn-manifesto__top">
      <span className="overline">manifesto · 02</span>
      <div className="kn-manifesto__doodles">
        <Doodle n={6} />
        <Doodle n={14} />
        <Doodle n={22} />
      </div>
    </div>
    <h2 className="kn-manifesto__title">
      remar é<br />
      <em>um movimento.</em>
    </h2>
    <div className="kn-manifesto__body">
      <p>
        Ka Noa nasceu da água. Começamos construindo canoas havaianas — va'a — para
        remar oceano, lagoa, represa. Madeira, fibra e mão.
      </p>
      <p>
        O vestuário veio depois. Tecidos pensados para o ritmo da remada —
        UV50+, secagem rápida, compressão. Mesma origem, mesmo gesto: row your flow.
      </p>
    </div>
    <div className="kn-manifesto__stats">
      <div><strong>UV50+</strong><span>proteção solar</span></div>
      <div><strong>240</strong><span>canoas entregues</span></div>
      <div><strong>06</strong><span>linhas técnicas</span></div>
      <div><strong>01</strong><span>flow</span></div>
    </div>
  </section>
);

Object.assign(window, { Manifesto });
