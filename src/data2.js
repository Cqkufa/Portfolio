// data2.js — services (folders) + projects, keyed by service.
window.FACU = {
  name: "FACU PERES",
  handle: "/FACU.ZIP",
  role: "Diseñador gráfico & multimedia",
  tagline: "Branding, motion y dirección de arte para marcas que quieren destacar.",
  about:
    "Soy Facu, diseñador gráfico enfocado en identidad, motion y contenido digital. Construyo sistemas visuales claros y con onda.",
  email: "facuperes26@gmail.com",
  socials: [
    { label: "Instagram", url: "https://www.instagram.com/zarpado.estudio/" },
    { label: "Behance", url: "https://www.behance.net/facuperes" },
    { label: "LinkedIn", url: "https://www.linkedin.com/in/facundo-peres-0b6795152/" },
  ],
  // each service = a folder card
  services: [
    { id: "branding", label: "Branding e Identidad", short: "Branding", color: "#2087E4", count: 0, desc: "Logotipos, sistemas visuales y guías de marca." },
    { id: "video",    label: "Edición de Videos",    short: "Edición",  color: "#FE572A", count: 0, desc: "Edición, motion graphics y reels." },
    { id: "web",      label: "Diseño Web",           short: "Web",      color: "#98E245", count: 0, desc: "Landing pages, portfolios y UI." },
    { id: "social",   label: "Redes y Anuncios",     short: "Social",   color: "#ADE6ED", count: 0, desc: "Contenido para redes, campañas y ads." },
  ],
  projects: [
    {
      id: "p1", title: "Club Niche", service: "branding", year: "2026", feat: true,
      slot: "Identidad / Club Niche",
      cover: "assets/niche/niche-1.png",
      tags: ["Identidad visual", "Indumentaria", "Dirección de arte"],
      intro: "Identidad visual para una marca de ropa urbana.",
      about: [
        "Club Niche nació con una idea clara: ropa para los que se mueven distinto. Una marca urbana con alma retro, de esas que no gritan pero se hacen notar. Mi laburo fue darle cara a ese mundo: un sistema visual canchero, simple y con actitud.",
        "El corazón de la marca son dos siluetas bailando, sueltas, libres. Un símbolo que resume el vibe: pasarla bien, sin poses. Lo combiné con un logotipo que mezcla una sans limpia con una serif italic, lo moderno y lo clásico chocándose, igual que la marca.",
        "La paleta va de los verdes profundos a los cremas tierra, con un azul eléctrico que mete energía cuando hace falta. Todo pensado para vivir en remeras, bolsas, gorras y redes sin perder coherencia. Menos es más, pero con onda.",
      ],
      media: [
        { type: "image", src: "assets/niche/niche-6.png", ratio: "4 / 5", cap: "Campaña / total look" },
        { type: "image", src: "assets/niche/niche-4.png", ratio: "4 / 5", cap: "Logotipo" },
        { type: "video", src: "assets/niche/niche-video.mp4", ratio: "9 / 16", cap: "Reel de campaña" },
        { type: "image", src: "assets/niche/niche-2.png", ratio: "4 / 5", cap: "Isotipo / dúo bailando" },
        { type: "image", src: "assets/niche/niche-1.png", ratio: "4 / 5", cap: "Estampa espalda" },
        { type: "image", src: "assets/niche/niche-5.png", ratio: "4 / 5", cap: "Exploración de isotipo" },
        { type: "image", src: "assets/niche/niche-3.png", ratio: "4 / 5", cap: "Packaging / bolsa" },
      ],
    },
    {
      id: "p2", title: "Semi Amargo", service: "branding", year: "2026", feat: true,
      slot: "Identidad / Semi Amargo",
      cover: "assets/semiamargo/sa-1.png",
      tags: ["Identidad visual", "Cafetería", "Packaging"],
      intro: "Identidad para una cafetería urbana de café y helado.",
      about: [
        "Semi Amargo es una cafetería de barrio con onda. Café y helado, lo dulce y lo amargo en su punto justo. La marca tenía que sentirse moderna pero cálida, urbana pero amigable.",
        "Todo gira alrededor del símbolo \"%\": un porcentaje convertido en isotipo, que juega con esa idea de \"semi\", ni todo dulce ni todo amargo. Lo armé con una serif de display redondeada, llena de curvas, que le da un aire retro y simpático sin volverse infantil.",
        "La paleta mezcla verde, crema y naranja, que pega fuerte en los toldos y la calle. Sumé un set de ilustraciones a mano (la cafetera, el croissant, el cono, los granos) para darle ese toque de barrio que vive en remeras, vasos y fachada.",
      ],
      media: [
        { type: "image", src: "assets/semiamargo/sa-1.png", ratio: "4 / 5", cap: "Vaso take-away" },
        { type: "image", src: "assets/semiamargo/sa-2.png", ratio: "4 / 5", cap: "Logotipo principal" },
        { type: "image", src: "assets/semiamargo/sa-5.png", ratio: "4 / 5", cap: "Toldo / fachada" },
        { type: "image", src: "assets/semiamargo/sa-3.png", ratio: "4 / 5", cap: "Merch / remera estampada" },
        { type: "image", src: "assets/semiamargo/sa-4.png", ratio: "4 / 5", cap: "Construcción del isotipo" },
      ],
    },
    {
      id: "p3", title: "Lenay Coffee", service: "branding", year: "2026", feat: false,
      slot: "Identidad / Lenay Coffee",
      cover: "assets/lenay/lenay-1.png",
      tags: ["Identidad visual", "Cafetería", "Ilustración"],
      intro: "Identidad para una cafetería con concepto kawaii japonés.",
      about: [
        "Lenay Coffee es una cafetería con un concepto bien marcado: la clienta quería algo inspirado en la cultura japonesa, con ese espíritu tierno y kawaii que tanto se vive allá. De ahí nació el conejito, la mascota de la marca, simple, redondito y carismático, que aparece en todos lados.",
        "El logotipo usa una tipografía bold redondeada, gordita y amigable, que combina perfecto con la ilustración del conejo asomándose. Todo transmite calidez y cercanía, con una identidad clara y propia.",
        "La paleta juega con marrón, verde y crema. La llevé al merch, al packaging take-away, la tarjeta de fidelidad con sus croissants para sellar, y el menú: un sistema completo, coherente y con personalidad.",
      ],
      media: [
        { type: "image", src: "assets/lenay/lenay-5.png", ratio: "4 / 5", cap: "Merch / remera con conejo" },
        { type: "image", src: "assets/lenay/lenay-3.png", ratio: "4 / 5", cap: "Logotipo + mascota" },
        { type: "image", src: "assets/lenay/lenay-1.png", ratio: "4 / 5", cap: "Packaging take-away" },
        { type: "image", src: "assets/lenay/lenay-4.png", ratio: "4 / 5", cap: "Tarjeta de fidelidad" },
        { type: "image", src: "assets/lenay/lenay-2.png", ratio: "4 / 5", cap: "Menú" },
      ],
    },
    {
      id: "p9b", title: "Symbic", service: "branding", year: "2026", feat: true,
      slot: "Identidad / Symbic",
      cover: "assets/symbic/sb-cover.png",
      tags: ["Identidad visual", "Ropa urbana", "Streetwear"],
      intro: "Identidad para una marca de ropa urbana.",
      about: [
        "Symbic es una marca de ropa urbana que buscaba una identidad con actitud, simple pero con presencia. El nombre juega con la idea de símbolo y simbiosis: una marca que se lleva puesta y se vuelve parte de quien la usa.",
        "El logotipo es la pieza central, un wordmark líquido de formas redondeadas y empalmadas que se siente orgánico y moderno a la vez. Lo construí para que funcione en cualquier color sin perder fuerza, por eso lo declino en una paleta versátil de lima, rojo, crema y azul noche.",
        "Llevé el sistema directo a las prendas: bordados chiquitos al frente, estampas grandes en la espalda y detalles tonales en los jeans. Un branding pensado para la calle, que se reconoce de lejos y se banca todos los soportes.",
      ],
      media: [
        { type: "image", src: "assets/symbic/sb-logo-1.png", ratio: "1 / 1", cap: "" },
        { type: "image", src: "assets/symbic/sb-02.png", ratio: "4 / 5", cap: "" },
        { type: "image", src: "assets/symbic/sb-logo-2.png", ratio: "1 / 1", cap: "" },
        { type: "image", src: "assets/symbic/sb-04.png", ratio: "4 / 5", cap: "" },
        { type: "image", src: "assets/symbic/sb-logo-3.png", ratio: "1 / 1", cap: "" },
        { type: "image", src: "assets/symbic/sb-07.png", ratio: "4 / 5", cap: "" },
        { type: "image", src: "assets/symbic/sb-logo-4.png", ratio: "1 / 1", cap: "" },
        { type: "image", src: "assets/symbic/sb-08.png", ratio: "4 / 5", cap: "" },
      ],
    },
    {
      id: "p5", title: "Aura", service: "branding", year: "2026", feat: false,
      slot: "Identidad / Aura",
      cover: "assets/aura/aura-1.png",
      tags: ["Identidad visual", "Pilates", "Iconografía"],
      intro: "Identidad para un estudio de pilates.",
      about: [
        "Aura es un estudio de pilates que buscaba transmitir paz, bienestar y una conexión natural con el cuerpo. El brief pedía algo orgánico y sereno, una marca que se sintiera como respirar hondo.",
        "El logotipo usa una tipografía fina y aireada, dibujada casi a mano, que le da ese toque artesanal y calmo. Funciona sola o dentro de un sello ovalado, ideal para señalética y aplicaciones sobre texturas naturales.",
        "Lo más especial es la serie de iconografías: líneas simples que imitan poses de pilates y yoga, cada una con su nombre. Un sistema gráfico que aporta movimiento y identidad. La paleta de terracota, oliva y crema termina de anclar esa sensación cálida y natural.",
      ],
      media: [
        { type: "image", src: "assets/aura/aura-4.png", ratio: "4 / 5", cap: "Logotipo principal" },
        { type: "image", src: "assets/aura/aura-1.png", ratio: "4 / 5", cap: "Logotipo en relieve" },
        { type: "image", src: "assets/aura/aura-2.png", ratio: "4 / 5", cap: "Iconografía de poses" },
        { type: "image", src: "assets/aura/aura-3.png", ratio: "4 / 5", cap: "Pieza de redes" },
        { type: "image", src: "assets/aura/aura-5.png", ratio: "4 / 5", cap: "Pieza de redes" },
      ],
    },
    {
      id: "p4", title: "The Comms", service: "branding", year: "2026", feat: false,
      slot: "Identidad / The Comms",
      cover: "assets/thecomms/tc-1.png",
      tags: ["Identidad visual", "Agencia digital", "Branding"],
      intro: "Identidad para una agencia de marketing digital.",
      about: [
        "The Comms es la agencia de marketing digital de una clienta que quería lanzarse por su cuenta. El pedido fue claro: algo moderno, cercano y con colores vivos, una marca que se sintiera fresca y con energía desde el primer vistazo.",
        "El isotipo es un globo de chat con un corazón adentro, que habla justo de eso: comunicación con onda y cercanía. Lo combiné con un logotipo que mezcla una serif de display con una sans redondeada, para balancear lo profesional con lo amigable.",
        "La paleta es la estrella: lima, azul y violeta, combinaciones que rotan entre fondos y aplicaciones para darle ese aire jugado y digital. La llevé a tarjetas, contenido de redes y mockups, un sistema flexible que funciona en cualquier formato.",
      ],
      media: [
        { type: "image", src: "assets/thecomms/tc-1.png", ratio: "4 / 5", cap: "Logotipo principal" },
        { type: "image", src: "assets/thecomms/tc-4.png", ratio: "4 / 5", cap: "Versión sobre azul" },
        { type: "image", src: "assets/thecomms/tc-2.png", ratio: "4 / 5", cap: "Isotipo" },
        { type: "image", src: "assets/thecomms/tc-5.png", ratio: "4 / 5", cap: "Tarjetas personales" },
        { type: "image", src: "assets/thecomms/tc-3.png", ratio: "4 / 5", cap: "Contenido de redes" },
      ],
    },
    {
      id: "p6", title: "The Brothers", service: "branding", year: "2026", feat: false,
      slot: "Identidad / The Brothers",
      cover: "assets/brothers/brother-1.png",
      tags: ["Identidad visual", "Chocolate", "Packaging"],
      intro: "Identidad para una chocolatería argentina.",
      about: [
        "The Brothers es una chocolatería argentina que arranca de cero y quería un logo con carácter. El cliente tenía una idea muy clara: un carpincho como protagonista, con gorra, lentes y comiendo un chocolate. Animal nacional, actitud relajada y mucha argentinidad.",
        "Tomé ese pedido y lo convertí en un isotipo con vibe retro: el carpincho dentro de un círculo, trazo grueso y un logotipo script bien gordito que le da ese aire clásico de marca de toda la vida. El claim acompaña: el mejor chocolate argentino.",
        "La paleta es vivísima: el marrón chocolate como base y una rotación de naranja, rosa, verde y azul que salta entre sabores, stickers y packaging. Lo llevé a las barras por sabor, los stickers circulares y la fachada del local, un sistema divertido que se reconoce a la distancia.",
      ],
      media: [
        { type: "image", src: "assets/brothers/brother-2.png", ratio: "4 / 5", cap: "" },
        { type: "image", src: "assets/brothers/brother-1.png", ratio: "4 / 5", cap: "" },
        { type: "image", src: "assets/brothers/brother-4.png", ratio: "4 / 5", cap: "" },
        { type: "image", src: "assets/brothers/brother-5.png", ratio: "4 / 5", cap: "" },
        { type: "image", src: "assets/brothers/brother-3.png", ratio: "4 / 5", cap: "" },
      ],
    },
    {
      id: "p7", title: "Café y Seguridad a Bordo", service: "web", year: "2026", feat: true,
      slot: "Web / Café y Seguridad a Bordo",
      cover: "assets/cafe/cafe-cover.png",
      tags: ["Diseño web", "Aviación", "Landing"],
      intro: "Sitio web para una escuela de aviación.",
      about: [
        "Café y Seguridad a Bordo es una escuela de aviación de Mercedes, Argentina, que forma a los próximos profesionales del rubro con cursos de TCP (Tripulante de Cabina de Pasajeros) y Despachante de Aeronaves.",
        "El sitio tenía que transmitir confianza y aire profesional sin perder cercanía. Trabajé sobre una paleta de celestes y blancos que remite directo al cielo, con fotos de cabina y mucho aire para que respire. La info clave de cada curso queda al alcance en pocos clics.",
        "Diseñé la home, las páginas de cada curso, el formulario de preadmisión y la colección de manuales. Un sistema claro y ordenado, pensado para que un futuro alumno entienda la propuesta y se inscriba sin vueltas.",
      ],
      media: [
        { type: "image", src: "assets/cafe/cafe-portada.png", ratio: "16 / 11", cap: "" },
        { type: "image", src: "assets/cafe/cafe-1.png", ratio: "4 / 5", cap: "" },
        { type: "image", src: "assets/cafe/cafe-3.png", ratio: "4 / 5", cap: "" },
        { type: "image", src: "assets/cafe/cafe-2.png", ratio: "4 / 5", cap: "" },
      ],
    },
    {
      id: "p8b", title: "Groven Ads", service: "web", year: "2026", feat: false,
      slot: "Landing / Groven Ads",
      cover: "assets/groven/groven-portada.png",
      tags: ["Diseño web", "Landing page", "Marketing digital"],
      intro: "Landing page para una agencia de growth y performance.",
      about: [
        "Groven Ads es una agencia de marketing digital enfocada en growth y performance: transforman datos en decisiones para escalar negocios. Querían una landing que transmitiera ese enfoque analítico y profesional, con peso visual y mucha contundencia.",
        "Armé un sistema de alto contraste: azul eléctrico para la cabecera y los datos duros, negro para la sección de filtrado de clientes y un naranja intenso para el bloque de metodología. Cada cambio de color marca un nuevo capítulo del recorrido.",
        "La estructura lleva al visitante de lo macro a lo concreto: hero con métricas, el clásico para vos sí o no, el sistema de crecimiento como timeline, los servicios y los testimonios. Todo pensado para una conversión clara hacia el contacto.",
      ],
      media: [
        { type: "image", src: "assets/groven/groven-portada.png", ratio: "16 / 11", cap: "" },
        { type: "image", src: "assets/groven/groven-1.png", ratio: "4 / 5", cap: "" },
        { type: "image", src: "assets/groven/groven-phone.png", ratio: "4 / 5", cap: "" },
        { type: "image", src: "assets/groven/groven-2.png", ratio: "4 / 5", cap: "" },
      ],
    },
    {
      id: "bbang", title: "Briefbang", service: "web", year: "2026", feat: false,
      slot: "Landing / Briefbang",
      cover: "assets/briefbang/bb-portada.png",
      tags: ["Diseño web", "Landing page", "Marketing digital"],
      intro: "Landing page para una agencia de marketing 360.",
      about: [
        "Briefbang es una agencia boutique de marketing digital 360 que combina investigación, creatividad y agilidad para marcas que buscan expandirse. Querían una landing con identidad fuerte y un concepto que los diferenciara del resto.",
        "El sistema visual juega con la idea de explosión y cosmos: fondo negro estrellado, el logotipo en verde con el estallido naranja en el centro, y planetas que aparecen a lo largo del recorrido. Todo refuerza el claim de intensidad con intención.",
        "Diseñé la home con el hero y las métricas, la sección de filtrado soy marca o agencia, el método Briefbang como recorrido por planetas, los casos de éxito y el formulario de contacto. Una landing inmersiva pensada para captar y convertir.",
      ],
      media: [
        { type: "image", src: "assets/briefbang/bb-portada.png", ratio: "16 / 11", cap: "" },
        { type: "image", src: "assets/briefbang/bb-1.png", ratio: "4 / 5", cap: "" },
        { type: "image", src: "assets/briefbang/bb-phone.png", ratio: "4 / 5", cap: "" },
        { type: "image", src: "assets/briefbang/bb-2.png", ratio: "4 / 5", cap: "" },
      ],
    },
    { id: "p10", title: "Campaña Ritmo", service: "social",   year: "2025", feat: false, slot: "Social / Campaña Ritmo" },
    { id: "p11", title: "Ads Bloom",     service: "social",   year: "2024", feat: false, slot: "Anuncios / Bloom" },
    { id: "p12", title: "Pack Stories",  service: "social",   year: "2024", feat: false, slot: "Stories / Pack Stories" },
  ],
  // Diseño de video — dedicated page with two slider sections
  videos: {
    redes: [
      { src: "assets/video/reel1.mp4", year: "2025" },
      { src: "assets/video/reel2.mp4", year: "2025" },
      { src: "assets/video/reel3.mp4", year: "2025" },
      { src: "assets/video/reel4.mp4", year: "2025" },
    ],
    anuncios: [
      { src: "assets/video/anuncio1.mp4", year: "2025" },
      { src: "assets/video/anuncio2.mp4", year: "2025" },
      { src: "assets/video/anuncio3.mp4", year: "2025" },
      { src: "assets/video/anuncio4.mp4", year: "2025" },
    ],
  },
  // Redes y Anuncios — dedicated page. Social = Instagram story + feed posts.
  social: {
    posts: [
      {
        id: "uip", title: "UIP Real Estate", year: "2026",
        stories: ["assets/uip/uip-story.png", "assets/uip/uip-story-2.png"],
        feed: ["assets/uip/uip-feed-1.png", "assets/uip/uip-feed-2.png"],
      },
      {
        id: "lader", title: "Lader", year: "2026", feedLabel: "Carrusel",
        stories: ["assets/lader/lader-story-1.png", "assets/lader/lader-story-2.png"],
        feed: ["assets/lader/lader-feed-1.png", "assets/lader/lader-feed-2.png"],
      },
      {
        id: "puebla", title: "Puebla Canning", year: "2026", feedLabel: "Carrusel",
        stories: ["assets/puebla/puebla-story-1.png", "assets/puebla/puebla-feed-2.png"],
        feed: ["assets/puebla/puebla-feed-1.png", "assets/puebla/puebla-story-2.png"],
      },
    ],
    ads: [
      {
        id: "racket", title: "Racket Social Club", year: "2026",
        shots: [
          "assets/racket/racket-1.png",
          "assets/racket/racket-2.png",
          "assets/racket/racket-3.png",
          "assets/racket/racket-4.png",
        ],
      },
      {
        id: "yanibelli", title: "Andrés Yanibelli", year: "2026",
        shots: [
          "assets/yanibelli/y-1.png",
          "assets/yanibelli/y-2.png",
          "assets/yanibelli/y-3.png",
          "assets/yanibelli/y-4.png",
        ],
      },
      {
        id: "herrajes", title: "Herrajes San Martín", year: "2026",
        shots: [
          "assets/herrajes/h-1.png",
          "assets/herrajes/h-2.png",
          "assets/herrajes/h-3.png",
          "assets/herrajes/h-4.png",
        ],
      },
    ],
  },
};
// fill service counts
window.FACU.services.forEach((s) => {
  s.count = window.FACU.projects.filter((p) => p.service === s.id).length;
});
// video count comes from the dedicated reel lists
window.FACU.services.find((s) => s.id === "video").count =
  window.FACU.videos.redes.length + window.FACU.videos.anuncios.length;
