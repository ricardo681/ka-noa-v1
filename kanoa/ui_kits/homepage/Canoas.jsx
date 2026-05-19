/* eslint-disable */
// Ka Noa — Canoas (canoa havaiana models)
const canoas = [
  { id: 1, name: "OC1 Honu", category: "Solo · OC1", spec: "6,40m · 12,5kg", price: "A partir de R$ 28.500", doodle: 3, bg: "var(--kn-cream)", tag: "Carro-chefe" },
  { id: 2, name: "OC2 Mahalo", category: "Dupla · OC2", spec: "7,80m · 22kg", price: "A partir de R$ 36.900", doodle: 18, bg: "var(--kn-sand)" },
  { id: 3, name: "V6 Kai", category: "Equipe · V6", spec: "13,80m · 84kg", price: "Sob consulta", doodle: 14, bg: "var(--kn-indigo)", dark: true, tag: "Time" },
  { id: 4, name: "OC1 Liko", category: "Solo · iniciante", spec: "6,20m · 14kg", price: "A partir de R$ 19.800", doodle: 7, bg: "var(--kn-clay-light)" },
  { id: 5, name: "V1 Pono", category: "Solo · regata", spec: "6,80m · 11kg", price: "A partir de R$ 32.400", doodle: 11, bg: "#C8845B", dark: true },
  { id: 6, name: "OC2 Nalu", category: "Dupla · oceano", spec: "7,60m · 20kg", price: "A partir de R$ 34.200", doodle: 22, bg: "var(--kn-moss)", dark: true },
];

const Canoas = () => (
  <section className="kn-collection" id="canoas">
    <header className="kn-collection__head">
      <div>
        <span className="overline">Linha água · 2026</span>
        <h2>Seis cascos.<br/>Uma só remada.</h2>
      </div>
      <KNGhost>Ver todas as canoas</KNGhost>
    </header>
    <div className="kn-collection__grid">
      {canoas.map(item => (
        <article key={item.id} className="kn-collection__item">
          <div className="kn-collection__img" style={{ background: item.bg, aspectRatio: "5/3" }}>
            <Doodle n={item.doodle} className={`kn-collection__doodle ${item.dark ? "kn-collection__doodle--inv" : ""}`} />
            {item.tag && <span className={`kn-collection__tag ${item.tag === "Time" ? "kn-collection__tag--accent" : ""}`}>{item.tag}</span>}
            <div className="kn-collection__placeholder">
              <span>[Foto · casco lateral]</span>
            </div>
          </div>
          <div className="kn-collection__meta">
            <div>
              <h4>{item.name}</h4>
              <span className="caption">{item.category} · {item.spec}</span>
            </div>
            <span className="kn-collection__price">{item.price}</span>
          </div>
        </article>
      ))}
    </div>
  </section>
);

Object.assign(window, { Canoas });
