// app.jsx — main composition + Tweaks
const { useState: useStateApp, useEffect: useEffectApp } = React;

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "accent": "#d8492b",
  "paper": "#f4f1ea",
  "fontPair": "serif-grotesk",
  "density": "regular",
  "showNumbers": true
}/*EDITMODE-END*/;

const FONT_PAIRS = {
  "serif-grotesk": { display: "'Instrument Serif', Georgia, serif", body: "'Archivo', system-ui, sans-serif" },
  "grotesk-only":  { display: "'Archivo', system-ui, sans-serif", body: "'Archivo', system-ui, sans-serif" },
  "serif-mono":    { display: "'Instrument Serif', Georgia, serif", body: "'Archivo', system-ui, sans-serif" },
};

function smoothTo(id) {
  if (id === "top") return window.scrollTo({ top: 0, behavior: "smooth" });
  const el = document.getElementById(id);
  if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 20, behavior: "smooth" });
}

function App() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
  const [open, setOpen] = useStateApp(null);
  const data = window.PORTFOLIO_DATA;

  // apply tweak tokens to :root
  useEffectApp(() => {
    const r = document.documentElement;
    r.style.setProperty("--accent", t.accent);
    r.style.setProperty("--paper", t.paper);
    const fp = FONT_PAIRS[t.fontPair] || FONT_PAIRS["serif-grotesk"];
    r.style.setProperty("--font-display", fp.display);
    r.style.setProperty("--font-body", fp.body);
    const gap = t.density === "compact" ? "40px" : t.density === "comfy" ? "120px" : "80px";
    r.style.setProperty("--section-gap", gap);
    r.setAttribute("data-numbers", t.showNumbers ? "on" : "off");
  }, [t]);

  return (
    <React.Fragment>
      <Nav name={data.designer.name} onNav={smoothTo} />
      <main>
        <Hero d={data.designer} onNav={smoothTo} />
        <Gallery projects={data.projects} onOpen={setOpen} />
        <About d={data.designer} />
        <Contact d={data.designer} />
      </main>
      <Lightbox p={open} onClose={() => setOpen(null)} />

      <TweaksPanel>
        <TweakSection label="Color" />
        <TweakColor
          label="Acento"
          value={t.accent}
          options={["#d8492b", "#1f5fd6", "#1f8a5b", "#7a3ff0", "#111111"]}
          onChange={(v) => setTweak("accent", v)}
        />
        <TweakColor
          label="Papel"
          value={t.paper}
          options={["#f4f1ea", "#f6f4ef", "#eceae6", "#fbfbf9", "#15140f"]}
          onChange={(v) => setTweak("paper", v)}
        />
        <TweakSection label="Tipografía" />
        <TweakRadio
          label="Pareja"
          value={t.fontPair}
          options={["serif-grotesk", "grotesk-only"]}
          onChange={(v) => setTweak("fontPair", v)}
        />
        <TweakSection label="Layout" />
        <TweakRadio
          label="Densidad"
          value={t.density}
          options={["compact", "regular", "comfy"]}
          onChange={(v) => setTweak("density", v)}
        />
        <TweakToggle
          label="Numeración de proyectos"
          value={t.showNumbers}
          onChange={(v) => setTweak("showNumbers", v)}
        />
      </TweaksPanel>
    </React.Fragment>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
