/* eslint-disable */
// Ka Noa — Header
const Header = ({ scrolled, onMenu }) => (
  <header className={`kn-header ${scrolled ? "kn-header--scrolled" : ""}`}>
    <div className="kn-header__inner">
      <button className="kn-header__menu" onClick={onMenu} aria-label="Menu">
        <span></span><span></span><span></span>
      </button>
      <nav className="kn-header__nav">
        <a href="#canoas">Canoas</a>
        <a href="#vestuario">Vestuário</a>
        <a href="#agenda">Agenda</a>
        <a href="#lojistas">Lojistas</a>
      </nav>
      <a href="#" className="kn-header__logo" aria-label="Ka Noa">
        <img src={(window.__resources && window.__resources.knLogo) || "../../assets/ka-noa-logo.svg"} alt="Ka Noa" />
      </a>
      <div className="kn-header__actions">
        <button aria-label="Buscar"><i data-lucide="search"></i></button>
        <button aria-label="Conta"><i data-lucide="user"></i></button>
        <button aria-label="Sacola" className="kn-header__bag">
          <i data-lucide="shopping-bag"></i>
          <span className="kn-header__count">2</span>
        </button>
      </div>
    </div>
  </header>
);

Object.assign(window, { Header });
