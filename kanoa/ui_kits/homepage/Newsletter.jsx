/* eslint-disable */
// Ka Noa — Newsletter
const Newsletter = () => {
  const [email, setEmail] = React.useState("");
  const [done, setDone] = React.useState(false);
  const submit = (e) => { e.preventDefault(); if (email) setDone(true); };
  return (
    <section className="kn-newsletter">
      <div className="kn-newsletter__doodle">
        <Doodle n={24} style={{ width: "100%", height: "100%" }} />
      </div>
      <span className="overline">Carta da remada</span>
      <h3>Notícias da água,<br/>uma vez por mês.</h3>
      <p className="lede">
        Lançamentos de canoas, eventos de remada, novidades do ateliê.
        Sem pressa, sem ruído.
      </p>
      {!done ? (
        <form className="kn-newsletter__form" onSubmit={submit}>
          <input type="email" placeholder="seu@email.com" value={email} onChange={e => setEmail(e.target.value)} required />
          <button type="submit">Entrar →</button>
        </form>
      ) : (
        <div className="kn-newsletter__thanks">Obrigado. Até a próxima remada.</div>
      )}
    </section>
  );
};

Object.assign(window, { Newsletter });
