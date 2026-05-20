/* eslint-disable */
// Ka Noa — Vestuário (technical apparel — primary public-facing product)
const vestuario = [
  { id: 1, name: "Long Sleeve Va'a", category: "Manga longa técnica · UV50+", price: "R$ 320", img: "row-your-flow-back.jpg", res: "imgRowBack", tag: "Best-seller" },
  { id: 2, name: "Rash Guard Flow", category: "Compressão · proteção UV", price: "R$ 280", img: "rashguard-white.jpg", res: "imgRashguardWhite" },
  { id: 3, name: "Manga Performance", category: "Tecido respirável · linhas laranja", price: "R$ 260", img: "sleeve-orange.jpg", res: "imgSleeveOrange", tag: "Novo" },
  { id: 4, name: "Boné Trainer", category: "Tecido perfurado · ajuste seco", price: "R$ 180", img: "cap-ocean.jpg", res: "imgCapOcean" },
  { id: 5, name: "Compression Pro", category: "Calça compressão · joelho técnico", price: "R$ 420", img: "tights.jpg", res: "imgTights" },
  { id: 6, name: "Tee Run", category: "Camiseta de remada e corrida", price: "R$ 220", img: "run-beach.jpg", res: "imgRunBeach" },
];

const Vestuario = () => (
  <section className="kn-apparel" id="vestuario">
    <header className="kn-apparel__head">
      <div className="kn-apparel__title">
        <span className="overline">coleção · vestuário técnico</span>
        <h2>peças para<br/>antes, durante,<br/>depois da remada.</h2>
        <p className="lede">
          Tecidos com UV50+, secagem rápida e compressão de performance.
          Pensados para quem rema, corre, treina — e fica.
        </p>
      </div>
      <KNGhost>Ver coleção completa</KNGhost>
    </header>
    <div className="kn-apparel__grid">
      {vestuario.map(item => (
        <article key={item.id} className="kn-apparel__item">
          <div className="kn-apparel__img" style={{ backgroundImage: `url(${(window.__resources && window.__resources[item.res]) || `../../assets/brand/${item.img}`})` }}>
            {item.tag && (
              <span className={`kn-apparel__tag ${item.tag === "Novo" ? "kn-apparel__tag--accent" : ""}`}>
                {item.tag}
              </span>
            )}
          </div>
          <div className="kn-apparel__meta">
            <div>
              <h4>{item.name}</h4>
              <span className="caption">{item.category}</span>
            </div>
            <span>{item.price}</span>
          </div>
        </article>
      ))}
    </div>
  </section>
);

Object.assign(window, { Vestuario });
