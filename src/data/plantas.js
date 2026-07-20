// Las imágenes de cada planta viven en src/assets/plants y se importan
// como módulos: Vite las procesa y les da una URL final con hash.
import echeveria from "../assets/plants/echeveria.svg";
import jade from "../assets/plants/jade.svg";
import monstera from "../assets/plants/monstera.svg";
import poto from "../assets/plants/poto.svg";
import lavanda from "../assets/plants/lavanda.svg";
import rosal from "../assets/plants/rosal.svg";

// Estructura: categoría -> lista de plantas.
// El segundo <select> (planta) depende de la opción elegida en el primero (categoría).
export const catalogo = {
  suculentas: {
    etiqueta: "Suculentas",
    plantas: [
      {
        id: "echeveria",
        nombre: "Echeveria",
        cientifico: "Echeveria elegans",
        imagen: echeveria,
        luz: "Sol directo 4-6 h",
        riego: "Cada 12-15 días",
        nota: "Deja secar el sustrato por completo entre riegos.",
      },
      {
        id: "jade",
        nombre: "Planta de Jade",
        cientifico: "Crassula ovata",
        imagen: jade,
        luz: "Luz brillante indirecta",
        riego: "Cada 10-14 días",
        nota: "Tolera bien el olvido; sensible al exceso de agua.",
      },
    ],
  },
  interior: {
    etiqueta: "Interior",
    plantas: [
      {
        id: "monstera",
        nombre: "Monstera",
        cientifico: "Monstera deliciosa",
        imagen: monstera,
        luz: "Luz indirecta media",
        riego: "1-2 veces por semana",
        nota: "Gira la maceta cada semana para un crecimiento parejo.",
      },
      {
        id: "poto",
        nombre: "Poto",
        cientifico: "Epipremnum aureum",
        imagen: poto,
        luz: "Poca luz a luz media",
        riego: "Cuando la tierra esté seca al tacto",
        nota: "Ideal para principiantes; crece bien en agua o tierra.",
      },
    ],
  },
  exterior: {
    etiqueta: "Exterior",
    plantas: [
      {
        id: "lavanda",
        nombre: "Lavanda",
        cientifico: "Lavandula angustifolia",
        imagen: lavanda,
        luz: "Sol pleno",
        riego: "Bajo, resistente a sequía",
        nota: "Requiere buen drenaje; evita encharcamientos.",
      },
      {
        id: "rosal",
        nombre: "Rosal",
        cientifico: "Rosa spp.",
        imagen: rosal,
        luz: "Sol pleno 6+ h",
        riego: "3 veces por semana en verano",
        nota: "Poda las flores marchitas para prolongar la floración.",
      },
    ],
  },
};
