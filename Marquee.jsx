/* eslint-disable */
// Ka Noa — Doodle Grid
const DoodleGrid = () => {
  const doodles = Array.from({ length: 24 }, (_, i) => i + 1);
  return (
    <section className="kn-doodlegrid">
      <header className="kn-doodlegrid__head">
        <span className="overline">Sistema gráfico · 24 marcas</span>
        <h3>Nosso alfabeto<br/>é a trama do tear.</h3>
        <p className="lede">
          Cada modelo carrega uma marca. Tiradas das tramas polinésias —
          do tapa, do remo entalhado, dos riscos do casco.
        </p>
      </header>
      <div className="kn-doodlegrid__grid">
        {doodles.map(n => (
          <div key={n} className="kn-doodlegrid__cell" title={`Ativo ${n}`}>
            <Doodle n={n} className="kn-doodlegrid__cell-doodle" />
          </div>
        ))}
      </div>
    </section>
  );
};

Object.assign(window, { DoodleGrid });
