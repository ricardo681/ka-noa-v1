/* eslint-disable */
// Ka Noa — Marquee (palavras-âncora performance)
const Marquee = () => {
  const words = ["row your flow", "va'a", "remada", "fluxo", "oceano", "performance", "UV50+", "ritmo", "linha d'água", "remo"];
  const doodles = [3, 6, 11, 14, 18, 22, 7, 9, 15, 4];
  const cells = words.map((w, i) => ({ w, d: doodles[i] }));
  const sequence = [...cells, ...cells];
  return (
    <section className="kn-marquee" aria-hidden="true">
      <div className="kn-marquee__track">
        {sequence.map((c, i) => (
          <React.Fragment key={i}>
            <span className="kn-marquee__word signature">{c.w}</span>
            <Doodle n={c.d} className="kn-marquee__doodle" />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

Object.assign(window, { Marquee });
