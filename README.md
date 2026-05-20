/* eslint-disable */
// Ka Noa — Header
const Header = ({ scrolled, onMenu }) => (
  <header className={`kn-header ${scrolled ? "kn-header--scrolled" : ""}`}>
    <div className="kn-header__inner">
      <a href="#" className="kn-header__logo" aria-label="Ka Noa">
        <img src={(window.__resources && window.__resources.knLogo) || "../../assets/ka-noa-logo.svg"} alt="Ka Noa" />
      </a>
      <nav className="kn-header__nav">
        <a href="#manifesto">A marca</a>
        <a href="#produtos">Produtos</a>
        <a href="#parceiros">Clubes parceiros</a>
        <a href="#comunidade">Comunidade</a>
        <a href="#atletas">Atletas</a>
        <a href="#contato">Contato</a>
      </nav>
      <div className="kn-header__actions">
        <button className="kn-header__menu" onClick={onMenu} aria-label="Menu">
          <span></span><span></span><span></span>
        </button>
        <a href="#parceiros" className="kn-header__cta">Seja parceiro ka noa</a>
      </div>
    </div>
  </header>
);

Object.assign(window, { Header });
