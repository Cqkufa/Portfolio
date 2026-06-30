// app2.jsx — composition + filter logic + tweaks
const { useState: useApp2, useEffect: useEff2 } = React;

const T2_DEFAULTS = /*EDITMODE-BEGIN*/{
  "bg": "#0E0E10",
  "accent": "#98E245",
  "stickers": true,
  "marquee": true
}/*EDITMODE-END*/;

function scrollToId(id) {
  if (id === "top") return window.scrollTo({ top: 0, behavior: "smooth" });
  const el = document.getElementById(id);
  if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 16, behavior: "smooth" });
}

function App2() {
  const [t, setTweak] = useTweaks(T2_DEFAULTS);
  const d = window.FACU;

  useEff2(() => {
    const r = document.documentElement;
    r.style.setProperty("--bg", t.bg);
    r.style.setProperty("--accent", t.accent);
    r.setAttribute("data-stickers", t.stickers ? "on" : "off");
    r.setAttribute("data-marquee", t.marquee ? "on" : "off");
  }, [t]);

  const openService = (id) => {
    let href = "servicio.html?s=" + encodeURIComponent(id);
    if (id === "video") href = "servicio-video.html";
    if (id === "social") href = "servicio-social.html";
    window.location.href = href;
  };

  return (
    <React.Fragment>
      <Nav2 d={d} onNav={scrollToId} />
      <main>
        <Hero2 d={d} onNav={scrollToId} onFilter={openService} />
        <FolderSlider services={d.services} onOpen={openService} />
        <Projects d={d} auto={t.marquee} />
        <About2 d={d} />
        <Contact2 d={d} />
      </main>

      <TweaksPanel>
        <TweakSection label="Tema" />
        <TweakColor label="Fondo" value={t.bg}
          options={["#0E0E10", "#101418", "#14110E", "#0A0A0A", "#161221"]}
          onChange={(v) => setTweak("bg", v)} />
        <TweakColor label="Acento" value={t.accent}
          options={["#98E245", "#2087E4", "#FE572A", "#ADE6ED", "#C9A8FF"]}
          onChange={(v) => setTweak("accent", v)} />
        <TweakSection label="Interacción" />
        <TweakToggle label="Stickers en el hero" value={t.stickers}
          onChange={(v) => setTweak("stickers", v)} />
        <TweakToggle label="Carpetas en movimiento" value={t.marquee}
          onChange={(v) => setTweak("marquee", v)} />
      </TweaksPanel>
    </React.Fragment>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App2 />);
