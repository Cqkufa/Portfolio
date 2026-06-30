// stickers.jsx — draggable + clickable design-world stickers around the hero name.
const { useState: useS, useEffect: useE, useRef: useR } = React;

/* simple geometric icons (minimal: lines / triangles / squares) */
const Ico = {
  cursor: (
    <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round">
      <path d="M5 3l6 16 2.2-6.2L19 10.5z" fill="currentColor" stroke="none" /></svg>
  ),
  pen: (
    <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round">
      <path d="M12 2.5l5.5 12H6.5z" /><line x1="12" y1="14.5" x2="12" y2="21.5" /><circle cx="12" cy="21.5" r="1.5" fill="currentColor" stroke="none" /></svg>
  ),
  pencil: (
    <svg viewBox="0 0 24 24" width="25" height="25" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round">
      <path d="M4 20l1-4L16 5l3 3L8 19z" /><line x1="14" y1="7" x2="17" y2="10" /></svg>
  ),
  bucket: (
    <svg viewBox="0 0 24 24" width="25" height="25" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round">
      <path d="M4 8.5l8-4 7.5 7.5-8 4z" /><path d="M4 8.5c0 1.5 11.5 7 15.5 3.5" /><path d="M20 15c1.3 1.5 1.3 3.2 0 4.2-1 .8-2.4 0-2-1.4.3-1 1.2-1.9 2-2.8z" fill="currentColor" stroke="none" /></svg>
  ),
  play: (
    <svg viewBox="0 0 24 24" width="22" height="22"><path d="M7 4l13 8-13 8z" fill="currentColor" /></svg>
  ),
  grid: (
    <svg viewBox="0 0 24 24" width="23" height="23" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" />
      <rect x="3" y="14" width="7" height="7" /><rect x="14" y="14" width="7" height="7" /></svg>
  ),
};

// stickers: 4 service chips (clickable -> filter) + decorative icon badges
const STICKERS = [
  { id: "c_branding", kind: "chip", text: "Branding e Identidad", service: "branding", color: "#2087E4", dark: true, x: 12, y: 30, rot: -8 },
  { id: "c_web",      kind: "chip", text: "Diseño web",         service: "web",      color: "#98E245", x: 8,  y: 47, rot: 6 },
  { id: "c_video",    kind: "chip", text: "Edición de video",    service: "video",    color: "#FE572A", dark: true, x: 70, y: 23, rot: 7 },
  { id: "c_social",   kind: "chip", text: "Redes y anuncios",   service: "social",   color: "#ADE6ED", x: 72, y: 66, rot: -9 },
  { id: "b_cursor",   kind: "badge", icon: "cursor", color: "#2087E4", x: 86, y: 42, rot: 0 },
  { id: "b_pen",      kind: "badge", icon: "pen",    color: "#ADE6ED", x: 22, y: 66, rot: -6 },
  { id: "b_pencil",   kind: "badge", icon: "pencil", color: "#C9A8FF", x: 30, y: 17, rot: 4 },
  { id: "b_bucket",   kind: "badge", icon: "bucket", color: "#98E245", x: 88, y: 78, rot: 8 },
  { id: "b_play",     kind: "badge", icon: "play",   color: "#FE572A", x: 15, y: 83, rot: -4 },
  { id: "b_grid",     kind: "badge", icon: "grid",   color: "#ADE6ED", x: 91, y: 14, rot: 0 },
];

const SKEY = "facu_stickers_v3";

function StickerLayer({ onFilter }) {
  const layerRef = useR(null);
  const [pos, setPos] = useS({});
  const [z, setZ] = useS(50);
  const drag = useR(null);

  useE(() => {
    const el = layerRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    let saved = {};
    try { saved = JSON.parse(localStorage.getItem(SKEY) || "{}"); } catch (e) {}
    const next = {};
    STICKERS.forEach((s) => {
      if (saved[s.id]) next[s.id] = { x: saved[s.id].x, y: saved[s.id].y, z: 50 };
      else next[s.id] = { x: (s.x / 100) * r.width, y: (s.y / 100) * r.height, z: 50 };
    });
    setPos(next);
  }, []);

  const persist = (next) => {
    try {
      const out = {};
      Object.keys(next).forEach((k) => (out[k] = { x: next[k].x, y: next[k].y }));
      localStorage.setItem(SKEY, JSON.stringify(out));
    } catch (e) {}
  };

  const onDown = (e, s) => {
    e.preventDefault();
    const p = pos[s.id];
    const nz = z + 1;
    setZ(nz);
    drag.current = { id: s.id, def: s, dx: e.clientX - p.x, dy: e.clientY - p.y, moved: 0 };
    setPos((prev) => ({ ...prev, [s.id]: { ...prev[s.id], z: nz, pressed: true } }));
    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerup", onUp);
  };
  const onMove = (e) => {
    const dd = drag.current;
    if (!dd) return;
    const r = layerRef.current.getBoundingClientRect();
    let x = Math.max(-12, Math.min(e.clientX - dd.dx, r.width - 44));
    let y = Math.max(-12, Math.min(e.clientY - dd.dy, r.height - 30));
    dd.moved += Math.abs(e.movementX) + Math.abs(e.movementY);
    setPos((prev) => ({ ...prev, [dd.id]: { ...prev[dd.id], x, y, pressed: true, dragging: dd.moved > 6 } }));
  };
  const onUp = () => {
    const dd = drag.current;
    window.removeEventListener("pointermove", onMove);
    window.removeEventListener("pointerup", onUp);
    if (dd) {
      setPos((prev) => {
        const next = { ...prev, [dd.id]: { ...prev[dd.id], pressed: false, dragging: false } };
        persist(next);
        return next;
      });
      // a real click (barely moved) on a service chip -> filter
      if (dd.moved <= 6 && dd.def.service && onFilter) onFilter(dd.def.service);
    }
    drag.current = null;
  };

  return (
    <div className="stickers" ref={layerRef}>
      {STICKERS.map((s) => {
        const p = pos[s.id] || { x: 0, y: 0, z: 50 };
        const cls = "stk stk--" + s.kind + (p.dragging ? " stk--drag" : "") + (p.pressed ? " stk--press" : "") + (s.service ? " stk--svc" : "");
        let transform;
        if (p.dragging) transform = "rotate(0deg) scale(1.06)";
        else if (p.pressed) transform = "rotate(" + s.rot + "deg) scale(.86)";
        const style = {
          left: p.x, top: p.y, zIndex: p.z, "--rot": s.rot + "deg",
          background: s.color, color: s.dark ? "#fff" : "#0E0E10",
        };
        if (transform) style.transform = transform;
        return (
          <div key={s.id} className={cls} style={style} onPointerDown={(e) => onDown(e, s)} title={s.service ? "Ver proyectos de " + s.text : "Arrastrame"}>
            {s.kind === "chip" ? (
              <span className="stk__txt">{s.text}{s.service ? <span className="stk__arrow"> →</span> : null}</span>
            ) : (
              <span className="stk__ico">{Ico[s.icon]}</span>
            )}
          </div>
        );
      })}
    </div>
  );
}

Object.assign(window, { StickerLayer });
