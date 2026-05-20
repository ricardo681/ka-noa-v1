/* eslint-disable */
// Ka Noa — Programa Clubes Parceiros (B2B principal)
const etapas = [
  {
    n: "01",
    title: "Sua equipe principal vestida",
    desc: "A gente fornece o uniforme oficial para a equipe principal do clube. Atletas que treinam pesado, vestindo a marca que treina junto.",
  },
  {
    n: "02",
    title: "Sua base recreativa equipada",
    desc: "Os frequentadores do clube compram o uniforme oficial Ka Noa direto com você. Modelo igual ao que já funciona em grandes clubes do Brasil.",
  },
  {
    n: "03",
    title: "Descontos progressivos",
    desc: "Quanto mais o clube compra, mais a margem cresce. De 20% a 40% de desconto sobre o preço público, dependendo do volume.",
  },
  {
    n: "04",
    title: "Margem para o clube",
    desc: "O preço público do site é mais alto que o seu preço de revenda. Você oferece para o seu remador uma condição que ele não acha em outro lugar.",
  },
];

const beneficios = [
  "Uniforme oficial para a equipe principal",
  "Condições especiais para compras em volume",
  "Customização do uniforme com bandeira do clube",
  "Presença no diretório oficial de clubes parceiros",
  "Apoio na divulgação de competições e eventos",
  "Acesso antecipado a lançamentos",
];

const Depoimentos = () => {
  const [form, setForm] = React.useState({ clube: "", cidade: "", contato: "", atletas: "" });
  const [sent, setSent] = React.useState(false);
  const update = (k) => (e) => setForm({ ...form, [k]: e.target.value });
  const submit = (e) => { e.preventDefault(); setSent(true); };

  return (
    <section className="kn-parceiros" id="parceiros">
      <header className="kn-parceiros__head">
        <span className="overline kn-parceiros__tag">Para clubes e revendedores</span>
        <h2>seu clube vestindo Ka Noa.<br/><em>e ganhando com isso.</em></h2>
        <p className="lede">
          O Programa Clubes Parceiros foi desenhado para sustentar o crescimento
          do seu clube enquanto fortalece a comunidade do va'a no Brasil. Você
          vira fornecedor oficial Ka Noa dentro da sua base, com condições
          especiais e um modelo que se paga sozinho.
        </p>
      </header>

      <div className="kn-parceiros__split">
        <div className="kn-parceiros__steps">
          <span className="overline">como funciona</span>
          <ol className="kn-parceiros__steps-list">
            {etapas.map(e => (
              <li key={e.n}>
                <span className="kn-parceiros__step-num">{e.n}</span>
                <div>
                  <h4>{e.title}</h4>
                  <p>{e.desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <aside className="kn-parceiros__form">
          <div className="kn-parceiros__form-doodle"><Doodle n={11} /></div>
          <span className="overline">cadastro · clube parceiro</span>
          <h3>conta pra gente<br/>sobre o seu clube.</h3>
          {!sent ? (
            <form onSubmit={submit}>
              <label>
                <span>Nome do clube</span>
                <input value={form.clube} onChange={update("clube")} placeholder="Clube de remada..." required />
              </label>
              <label>
                <span>Cidade · UF</span>
                <input value={form.cidade} onChange={update("cidade")} placeholder="Florianópolis · SC" required />
              </label>
              <label>
                <span>Contato (e-mail ou whatsapp)</span>
                <input value={form.contato} onChange={update("contato")} placeholder="responsavel@clube.com.br" required />
              </label>
              <label>
                <span>Número de atletas</span>
                <input value={form.atletas} onChange={update("atletas")} placeholder="Ex.: 40 entre equipe e recreativos" required />
              </label>
              <div className="kn-parceiros__form-actions">
                <button type="submit" className="kn-btn kn-btn--primary">Quero ser clube parceiro</button>
                <a className="kn-btn kn-btn--ghost">Falar com o time comercial <span aria-hidden="true">→</span></a>
              </div>
            </form>
          ) : (
            <div className="kn-parceiros__thanks">
              <strong>Recebemos seu cadastro.</strong>
              <span>Nosso time comercial responde em até 2 dias úteis.</span>
            </div>
          )}
        </aside>
      </div>

      <div className="kn-parceiros__beneficios">
        <span className="overline">o que você leva</span>
        <ul>
          {beneficios.map((b, i) => (
            <li key={i}>
              <Doodle n={[3, 7, 14, 18, 22, 24][i % 6]} />
              <span>{b}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

Object.assign(window, { Depoimentos });
