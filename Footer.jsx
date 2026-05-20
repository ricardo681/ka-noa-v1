/* eslint-disable */
// Ka Noa — Buttons
const KNButton = ({ variant = "primary", children, className = "", ...rest }) => {
  const base = "kn-btn";
  const cls = `${base} kn-btn--${variant} ${className}`;
  return <button className={cls} {...rest}>{children}</button>;
};

const KNGhost = ({ children, ...rest }) => (
  <a className="kn-btn kn-btn--ghost" {...rest}>{children} <span aria-hidden="true">→</span></a>
);

Object.assign(window, { KNButton, KNGhost });
