// Project data — replace placeholders with your real work.
// Each project: id, title, client, year, category, tags, blurb, and a list of
// image "slots" (the striped placeholders). Drag your own images in later.
window.PORTFOLIO_DATA = {
  designer: {
    name: "Estudio Nombre",
    role: "Diseño gráfico — identidad, editorial & packaging",
    location: "Disponible para proyectos · 2026",
    intro:
      "Diseñador gráfico enfocado en sistemas de identidad, dirección de arte y piezas editoriales. Trabajo entre la cuadrícula y el accidente: estructura suiza con un poco de ruido. Abajo, una selección de proyectos recientes.",
    about:
      "Llevo años ayudando a marcas y publicaciones a encontrar una voz visual clara. Mi proceso parte de la tipografía y el ritmo: primero el sistema, después la sorpresa. He colaborado con estudios, editoriales independientes y equipos de producto.",
    services: [
      "Identidad visual & branding",
      "Diseño editorial & tipografía",
      "Packaging & dirección de arte",
      "Sistemas de diseño & guías",
    ],
    clients: ["Editorial Norte", "Café Mила", "Bienal de Arte", "Studio Vera", "Revista Margen", "Ona Records"],
  },
  projects: [
    {
      id: "norte",
      title: "Editorial Norte",
      client: "Editorial independiente",
      year: "2025",
      category: "Branding",
      tags: ["Identidad", "Tipografía"],
      blurb:
        "Sistema de identidad para una editorial de no-ficción. Un logotipo tipográfico construido sobre una retícula modular y una familia de portadas que respira.",
      ratio: "4 / 5",
      slots: ["Portada principal", "Logotipo", "Aplicaciones"],
    },
    {
      id: "mila",
      title: "Café Mila",
      client: "Cafetería de especialidad",
      year: "2025",
      category: "Packaging",
      tags: ["Packaging", "Identidad"],
      blurb:
        "Identidad y packaging para una marca de café de origen. Etiquetas tipográficas y un sistema de color por región de cultivo.",
      ratio: "1 / 1",
      slots: ["Bolsa de café", "Etiquetas"],
    },
    {
      id: "bienal",
      title: "Bienal de Arte",
      client: "Festival cultural",
      year: "2024",
      category: "Poster",
      tags: ["Poster", "Dirección de arte"],
      blurb:
        "Campaña de carteles para la bienal. Una tipografía display deformada que reacciona al tema de cada sala.",
      ratio: "3 / 4",
      slots: ["Cartel A", "Cartel B"],
    },
    {
      id: "margen",
      title: "Revista Margen",
      client: "Revista cultural",
      year: "2024",
      category: "Editorial",
      tags: ["Editorial", "Maquetación"],
      blurb:
        "Rediseño editorial de una revista trimestral. Una retícula de 12 columnas, jerarquías claras y un uso generoso del blanco.",
      ratio: "4 / 5",
      slots: ["Doble página", "Sumario", "Apertura"],
    },
    {
      id: "vera",
      title: "Studio Vera",
      client: "Estudio de arquitectura",
      year: "2024",
      category: "Branding",
      tags: ["Identidad", "Web"],
      blurb:
        "Identidad sobria para un estudio de arquitectura. Monograma geométrico y un sistema de papelería minimal.",
      ratio: "1 / 1",
      slots: ["Monograma", "Papelería"],
    },
    {
      id: "ona",
      title: "Ona Records",
      client: "Sello discográfico",
      year: "2023",
      category: "Packaging",
      tags: ["Packaging", "Cover art"],
      blurb:
        "Arte de portada para un sello de música electrónica. Un sistema de plantillas que mantiene la coherencia entre lanzamientos.",
      ratio: "1 / 1",
      slots: ["Vinilo", "Serie"],
    },
    {
      id: "tipos",
      title: "Specimen 01",
      client: "Proyecto personal",
      year: "2023",
      category: "Editorial",
      tags: ["Tipografía", "Specimen"],
      blurb:
        "Specimen tipográfico autoeditado. Un fanzine que explora el contraste entre una serif de alto contraste y una grotesca neutra.",
      ratio: "3 / 4",
      slots: ["Portada", "Interior"],
    },
    {
      id: "feria",
      title: "Feria del Libro",
      client: "Evento cultural",
      year: "2023",
      category: "Poster",
      tags: ["Poster", "Señalética"],
      blurb:
        "Identidad y señalética para una feria del libro. Un sistema de flechas y pictogramas construido con un solo módulo.",
      ratio: "3 / 4",
      slots: ["Cartel", "Señalética"],
    },
  ],
};
