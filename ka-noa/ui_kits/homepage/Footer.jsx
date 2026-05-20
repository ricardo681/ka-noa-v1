/* eslint-disable */
// Ka Noa — Footer
const Footer = () => (
  <footer className="kn-footer" id="contato">
    <div className="kn-footer__cols">
      <div className="kn-footer__col">
        <span className="overline">Canoas</span>
        <a>OC1 · solo</a>
        <a>OC2 · dupla</a>
        <a>V1 · regata</a>
        <a>V6 · equipe</a>
        <a>Remos</a>
        <a>Acessórios</a>
      </div>
      <div className="kn-footer__col">
        <span className="overline">Vestuário</span>
        <a>Camisetas</a>
        <a>Bermudas e shorts</a>
        <a>Moletons</a>
        <a>Bonés e proteção</a>
      </div>
      <div className="kn-footer__col">
        <span className="overline">A marca</span>
        <a>Manifesto</a>
        <a>Ateliê</a>
        <a>Eventos de remada</a>
        <a>Imprensa</a>
      </div>
      <div className="kn-footer__col">
        <span className="overline">Contato</span>
        <a>ola@kanoa.com.br</a>
        <a>Florianópolis — SC</a>
        <a>+55 48 9 0000-0000</a>
        <a>Instagram · @kanoa</a>
      </div>
    </div>
    <div className="kn-footer__signature">
      <img src={(window.__resources && window.__resources.knLogo) || "../../assets/ka-noa-logo.svg"} alt="Ka Noa" />
    </div>
    <div className="kn-footer__base">
      <span className="caption">© 2026 Ka Noa Va'a · CNPJ 00.000.000/0001-00</span>
      <div className="kn-footer__base-links">
        <a>Trocas e devoluções</a>
        <a>Privacidade</a>
        <a>Termos</a>
      </div>
    </div>
  </footer>
);

Object.assign(window, { Footer });
