/* ============================================================
   Ka Noa — Homepage styles (base)
   ============================================================ */
@import url("../../colors_and_type.css");

* { box-sizing: border-box; }
body { margin: 0; overflow-x: hidden; background: var(--bg); color: var(--kn-ink); }

img { max-width: 100%; display: block; }

em { font-style: italic; color: var(--kn-orange); font-weight: inherit; }

/* ============ BUTTONS ============ */
.kn-btn {
  font-family: var(--font-body);
  font-size: 13px;
  padding: 16px 28px;
  cursor: pointer;
  border: 1px solid transparent;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  transition: all var(--dur-med) var(--ease-out);
  background: transparent;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 10px;
  color: var(--kn-ink);
  white-space: nowrap;
}
.kn-btn--primary { background: var(--kn-orange); color: var(--kn-bone); }
.kn-btn--primary:hover { background: var(--kn-orange-deep); }
.kn-btn--secondary { border-color: var(--kn-ink); color: var(--kn-ink); }
.kn-btn--secondary:hover { background: var(--kn-ink); color: var(--kn-bone); }
.kn-btn--secondary-light { border-color: var(--kn-bone); color: var(--kn-bone); }
.kn-btn--secondary-light:hover { background: var(--kn-bone); color: var(--kn-ink); }
.kn-btn--ghost { padding: 14px 4px; }
.kn-btn--ghost:hover { color: var(--kn-orange); }
.kn-btn--ghost span { transition: transform var(--dur-fast) var(--ease-out); }
.kn-btn--ghost:hover span { transform: translateX(4px); }
.kn-btn--ghost-light { padding: 14px 4px; color: var(--kn-bone); }
.kn-btn--ghost-light:hover { color: var(--kn-orange); }
.kn-btn--ghost-light span { transition: transform var(--dur-fast) var(--ease-out); }
.kn-btn--ghost-light:hover span { transform: translateX(4px); }

/* ============ HEADER ============ */
.kn-header {
  position: fixed; top: 0; left: 0; right: 0; z-index: 100;
  transition: background var(--dur-med) var(--ease-out), backdrop-filter var(--dur-med) var(--ease-out);
}
.kn-header--scrolled {
  background: rgba(14, 14, 14, 0.85);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  border-bottom: 1px solid rgba(255,255,255,0.08);
}
.kn-header__inner {
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  padding: 18px 48px;
  gap: 32px;
}
.kn-header__menu {
  display: none;
  background: none; border: 0; padding: 4px; cursor: pointer;
  flex-direction: column; gap: 4px;
}
.kn-header__menu span { display: block; width: 22px; height: 1.5px; background: var(--kn-bone); }
.kn-header__nav {
  display: flex;
  gap: 28px;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
}
.kn-header__nav a {
  font-family: var(--font-body);
  font-size: 11px;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  text-decoration: none;
  color: var(--kn-bone);
  transition: color var(--dur-fast) var(--ease-out);
}
.kn-header__nav a:hover { color: var(--kn-orange); }
.kn-header__logo {
  text-align: center;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
}
.kn-header__logo img {
  height: 48px;
  width: auto;
  display: block;
  filter: invert(1);
}
.kn-header__actions {
  display: flex; gap: 12px; justify-content: flex-end; align-items: center;
}
.kn-header__cta {
  font-family: var(--font-body);
  font-size: 11px;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  padding: 12px 22px;
  background: var(--kn-orange);
  color: var(--kn-bone);
  text-decoration: none;
  transition: background var(--dur-fast) var(--ease-out);
}
.kn-header__cta:hover { background: var(--kn-orange-deep); }

/* ============ HERO — KEY VISUAL ============ */
.kn-hero--keyvisual {
  position: relative;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
  background: var(--kn-black);
  color: var(--kn-bone);
}
.kn-hero__bg {
  position: absolute; inset: 0;
  width: 100%; height: 100%;
  object-fit: cover;
  filter: grayscale(1) contrast(1.05) brightness(0.78);
  z-index: 0;
}
.kn-hero__overlay {
  position: absolute; inset: 0;
  background:
    linear-gradient(95deg, rgba(14,14,14,0.82) 0%, rgba(14,14,14,0.45) 55%, rgba(14,14,14,0.25) 100%),
    linear-gradient(180deg, rgba(14,14,14,0.4) 0%, rgba(14,14,14,0.0) 30%, rgba(14,14,14,0.55) 100%);
  z-index: 1;
}
.kn-hero__content {
  position: relative; z-index: 2;
  flex: 1;
  display: grid;
  grid-template-columns: 1.05fr 1fr;
  align-items: center;
  padding: 160px 80px 96px;
  gap: 48px;
}
.kn-hero__copy { display: flex; flex-direction: column; gap: 28px; max-width: 640px; }
.kn-hero__eyebrow { color: var(--kn-bone); opacity: 0.9; }
.kn-hero__headline {
  font-family: var(--font-display);
  font-weight: 500;
  font-size: clamp(42px, 5.6vw, 92px);
  line-height: 0.96;
  letter-spacing: -0.02em;
  color: var(--kn-bone);
  margin: 0;
  text-wrap: balance;
}
.kn-hero__headline em { color: var(--kn-orange); font-style: italic; }
.kn-hero__lede {
  font-family: var(--font-body);
  font-size: 17px;
  line-height: 1.55;
  color: var(--kn-sand);
  margin: 0;
  max-width: 52ch;
}
.kn-hero__cta { display: flex; gap: 18px; align-items: center; flex-wrap: wrap; margin-top: 8px; }

.kn-hero__visual {
  position: relative;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 480px;
}
.kn-hero__doodle-big {
  color: var(--kn-orange);
  display: flex;
  align-items: center;
  justify-content: center;
}
.kn-hero__doodle-big .kn-doodle {
  width: clamp(280px, 38vw, 540px);
  height: clamp(280px, 38vw, 540px);
}
.kn-hero__claim {
  position: absolute;
  inset: auto 0 -4% 0;
  font-family: var(--font-display);
  font-weight: 500;
  font-size: clamp(28px, 3vw, 44px);
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: var(--kn-bone);
  text-align: center;
  opacity: 0.9;
  mix-blend-mode: difference;
}

/* ============ MARQUEE ============ */
.kn-marquee {
  border-top: 1px solid var(--border);
  border-bottom: 1px solid var(--border);
  padding: 24px 0;
  overflow: hidden;
  background: var(--bg);
}
.kn-marquee__track {
  display: inline-flex;
  align-items: center;
  gap: 28px;
  animation: marquee 40s linear infinite;
  white-space: nowrap;
  padding-left: 28px;
}
.kn-marquee__word {
  font-size: 40px;
  font-family: var(--font-display);
  font-weight: 500;
  letter-spacing: -0.01em;
  color: var(--kn-ink);
}
.kn-marquee__doodle { width: 28px; height: 28px; flex: none; color: var(--kn-orange); }
@keyframes marquee { to { transform: translateX(-50%); } }

/* ============ MANIFESTO ============ */
.kn-manifesto {
  padding: 128px 80px;
  background: var(--kn-ink);
  color: var(--kn-bone);
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 56px 80px;
  align-items: start;
  position: relative;
}
.kn-manifesto__top {
  grid-column: 1 / -1;
  display: flex; justify-content: space-between; align-items: center;
}
.kn-manifesto__top .overline { color: var(--kn-orange); }
.kn-manifesto__doodles { display: flex; gap: 14px; color: var(--kn-bone); }
.kn-manifesto__doodles .kn-doodle { width: 24px; height: 24px; opacity: 0.7; }
.kn-manifesto__title {
  font-family: var(--font-display);
  font-weight: 500;
  font-size: clamp(40px, 5.2vw, 80px);
  line-height: 0.98;
  letter-spacing: -0.015em;
  margin: 0;
  color: var(--kn-bone);
  text-wrap: balance;
}
.kn-manifesto__body { display: flex; flex-direction: column; gap: 18px; }
.kn-manifesto__body p { color: var(--kn-sand); font-size: 16px; line-height: 1.7; max-width: 52ch; margin: 0; }
.kn-manifesto__close { color: var(--kn-bone) !important; font-size: 18px !important; padding-top: 8px; }
.kn-manifesto__pull {
  grid-column: 1 / -1;
  margin-top: 32px;
  padding-top: 48px;
  border-top: 1px solid rgba(244, 239, 230, 0.18);
  display: grid;
  grid-template-columns: 120px 1fr;
  gap: 32px;
  align-items: center;
}
.kn-manifesto__pull-doodle { width: 96px; height: 96px; color: var(--kn-orange); }
.kn-manifesto__pull p {
  font-family: var(--font-display);
  font-weight: 500;
  font-size: clamp(28px, 3.4vw, 48px);
  line-height: 1.05;
  letter-spacing: -0.01em;
  color: var(--kn-bone);
  margin: 0;
  text-transform: lowercase;
}

/* ============ FOOTER ============ */
.kn-footer {
  background: var(--kn-ink); color: var(--kn-bone);
  padding: 96px 80px 32px;
}
.kn-footer__top {
  display: grid;
  grid-template-columns: 1.1fr 2fr;
  gap: 80px;
  padding-bottom: 64px;
  border-bottom: 1px solid rgba(244, 239, 230, 0.18);
}
.kn-footer__brand { display: flex; flex-direction: column; gap: 16px; align-items: flex-start; }
.kn-footer__brand img { height: 56px; width: auto; filter: invert(1); display: block; }
.kn-footer__brand .signature {
  font-family: var(--font-display);
  font-size: 24px;
  color: var(--kn-orange);
  text-transform: lowercase;
  letter-spacing: 0.04em;
}
.kn-footer__brand p {
  font-family: var(--font-body);
  font-size: 14px;
  color: var(--kn-sand);
  margin: 0;
  max-width: 28ch;
}
.kn-footer__cols {
  display: grid; grid-template-columns: repeat(3, 1fr);
  gap: 40px;
}
.kn-footer__col { display: flex; flex-direction: column; gap: 12px; }
.kn-footer__col .overline { color: var(--kn-orange); margin-bottom: 4px; }
.kn-footer__col a {
  font-family: var(--font-body); font-size: 14px;
  color: var(--kn-sand); text-decoration: none;
  cursor: pointer;
  transition: color var(--dur-fast) var(--ease-out);
}
.kn-footer__col a:hover { color: var(--kn-bone); }
.kn-footer__signature {
  padding: 56px 0 32px;
  text-align: center;
  overflow: hidden;
}
.kn-footer__signature img {
  height: clamp(80px, 12vw, 160px);
  width: auto;
  margin: 0 auto;
  filter: invert(1);
  opacity: 0.92;
  display: block;
}
.kn-footer__base {
  border-top: 1px solid rgba(244, 239, 230, 0.18);
  padding-top: 24px;
  display: flex; justify-content: space-between; align-items: center;
  gap: 24px;
}
.kn-footer__base .caption { color: var(--kn-pebble); }
.kn-footer__base-links { display: flex; gap: 24px; }
.kn-footer__base-links a {
  font-family: var(--font-body); font-size: 12px;
  color: var(--kn-pebble); text-decoration: none;
}
.kn-footer__base-links a:hover { color: var(--kn-bone); }

/* ============ RESPONSIVE ============ */
@media (max-width: 1024px) {
  .kn-header__inner { padding: 14px 20px; gap: 12px; grid-template-columns: 1fr auto; }
  .kn-header__nav { display: none; }
  .kn-header__menu { display: flex; }
  .kn-header__cta { font-size: 10px; padding: 10px 14px; }
  .kn-header__logo img { height: 36px; }

  .kn-hero__content { grid-template-columns: 1fr; padding: 120px 24px 80px; gap: 48px; }
  .kn-hero__visual { min-height: 320px; }

  .kn-manifesto { padding: 80px 24px; grid-template-columns: 1fr; gap: 32px; }
  .kn-manifesto__pull { grid-template-columns: 64px 1fr; gap: 20px; }
  .kn-manifesto__pull-doodle { width: 56px; height: 56px; }

  .kn-footer { padding: 64px 24px 24px; }
  .kn-footer__top { grid-template-columns: 1fr; gap: 40px; }
  .kn-footer__cols { grid-template-columns: repeat(2, 1fr); }
  .kn-footer__base { flex-direction: column; align-items: flex-start; gap: 12px; }
}
