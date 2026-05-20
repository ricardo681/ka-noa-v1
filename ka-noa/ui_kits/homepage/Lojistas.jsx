/* eslint-disable */
// Ka Noa — Lojistas
const regioes = [
  {
    nome: "Sul",
    lojas: [
      { nome: "Clube Atlético Catarinense", cidade: "Florianópolis · SC" },
      { nome: "Va'a Garage", cidade: "Curitiba · PR" },
      { nome: "Lagoa Sports", cidade: "Florianópolis · SC" },
      { nome: "Costa Oeste Náutica", cidade: "Foz do Iguaçu · PR" },
    ],
  },
  {
    nome: "Sudeste",
    lojas: [
      { nome: "Praia do Forte Náutica", cidade: "Cabo Frio · RJ" },
      { nome: "Outrigger Búzios", cidade: "Búzios · RJ" },
      { nome: "Clube de Regatas Tietê", cidade: "São Paulo · SP" },
      { nome: "Riviera Sports", cidade: "Bertioga · SP" },
    ],
  },
  {
    nome: "Nordeste",
    lojas: [
      { nome: "Atlântico Pipa", cidade: "Tibau do Sul · RN" },
      { nome: "Maré Loja", cidade: "Recife · PE" },
      { nome: "Sol & Mar Náutica", cidade: "Salvador · BA" },
    ],
  },
];

const Lojistas = () => (
  <section className="kn-lojistas" id="lojistas">
    <header className="kn-lojistas__head">
      <span className="overline">onde encontrar · Brasil</span>
      <h2>os clubes e lojas<br/>que remam com a gente.</h2>
      <p className="lede">
        Conferir a peça pessoalmente, fazer um test row, levar a canoa pra
        treinar. Veja os endereços mais próximos.
      </p>
    </header>
    <div className="kn-lojistas__grid">
      {regioes.map(r => (
        <div key={r.nome} className="kn-lojistas__col">
          <h4 className="kn-lojistas__regiao">{r.nome}</h4>
          <ul>
            {r.lojas.map((l, i) => (
              <li key={i}>
                <strong>{l.nome}</strong>
                <span>{l.cidade}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
    <div className="kn-lojistas__cta">
      <KNGhost>Ver mapa completo</KNGhost>
    </div>
  </section>
);

Object.assign(window, { Lojistas });
