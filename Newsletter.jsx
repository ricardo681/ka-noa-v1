/* eslint-disable */
// Ka Noa — Footer
const Footer = () => (
  <footer className="kn-footer" id="contato">
    <div className="kn-footer__top">
      <div className="kn-footer__brand">
        <img src={(window.__resources && window.__resources.knLogo) || "../../assets/ka-noa-logo.svg"} alt="Ka Noa" />
        <span className="signature">row your flow.</span>
        <p>A marca do va'a brasileiro.</p>
      </div>
      <div className="kn-footer__cols">
        <div className="kn-footer__col">
          <span className="overline">Loja</span>
          <a>Remos</a>
          <a>Vestuário</a>
          <a>Acessórios</a>
          <a>Política de troca</a>
          <a>Frete e prazos</a>
        </div>
        <div className="kn-footer__col">
          <span className="overline">Comunidade</span>
          <a>Programa Clubes Parceiros</a>
          <a>Comunidade Ka Noa</a>
          <a>Time de atletas</a>
          <a>Calendário de competições</a>
        </div>
        <div className="kn-footer__col">
          <span className="overline">Contato</span>
          <a>WhatsApp comercial</a>
          <a>ola@kanoa.com.br</a>
          <a>Instagram · @kanoa</a>
          <a>Florianópolis — SC</a>
        </div>
      </div>
    </div>
    <div className="kn-footer__base">
      <span className="caption">© 2026 Ka Noa. Feito por quem rema, pra quem rema.</span>
      <div className="kn-footer__base-links">
        <a>Trocas e devoluções</a>
        <a>Privacidade</a>
        <a>Termos</a>
      </div>
    </div>
  </footer>
);

Object.assign(window, { Footer });
