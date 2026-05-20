/* eslint-disable */
// Ka Noa — Doodle helper. Renders inline SVG from window.KN_DOODLES so currentColor works.
const Doodle = ({ n, className = "", style = {}, title, ...rest }) => {
  const data = window.KN_DOODLES && window.KN_DOODLES[n];
  if (!data) return <span className={`kn-doodle ${className}`} style={style} />;
  return (
    <svg
      className={`kn-doodle ${className}`}
      style={{ display: "inline-block", fill: "currentColor", ...style }}
      viewBox={data.vb}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden={title ? undefined : "true"}
      {...rest}
      dangerouslySetInnerHTML={{ __html: (title ? `<title>${title}</title>` : "") + data.shapes.join("") }}
    />
  );
};

Object.assign(window, { Doodle });
