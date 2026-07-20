# Raíces — Catálogo de plantas (Actividad 5)

Proyecto React (Vite) para **TI3214-01-2026-3 · Programación II — Actividad 5**.

## Qué incluye

- **Select dependiente**: al elegir una *Categoría* (Suculentas / Interior / Exterior)
  se habilita y llena el segundo select (*Planta*) solo con las opciones de esa
  categoría. Cambiar la categoría reinicia la planta seleccionada.
  Ver `src/components/SelectorPlantas.jsx` y `src/data/plantas.js`.
- **Imágenes desde `public/`**: `public/hero-plantas.svg` se usa como fondo del
  banner en `App.jsx` con una ruta absoluta (`/hero-plantas.svg`), tal como
  Vite sirve todo lo que está en `public/` sin procesarlo.
- **Imágenes desde `src/`**: las ilustraciones de cada planta están en
  `src/assets/plants/*.svg` y se importan como módulos de JS
  (`import echeveria from "../assets/plants/echeveria.svg"`), que es como Vite
  procesa y optimiza los assets que viven dentro de `src/`.

## Correr en local

```bash
npm install
npm run dev
```

## Desplegar (Vercel — recomendado, gratis)

1. Sube este proyecto a un repositorio de GitHub.
2. Entra a https://vercel.com → **Add New Project** → importa el repositorio.
3. Framework preset: **Vite** (Vercel lo detecta solo).
   - Build Command: `npm run build`
   - Output Directory: `dist`
4. Clic en **Deploy**. Vercel entrega una URL pública tipo
   `https://tu-proyecto.vercel.app`.

## Desplegar (Netlify — alternativa)

1. Sube el proyecto a GitHub.
2. Entra a https://app.netlify.com → **Add new site → Import an existing project**.
3. Build command: `npm run build` · Publish directory: `dist`.
4. Deploy. Netlify entrega una URL pública tipo `https://tu-proyecto.netlify.app`.

## Desplegar (rápido, sin cuenta/git — Vercel CLI)

```bash
npm install -g vercel
vercel --prod
```

Sigue las instrucciones en consola; al final imprime la URL pública.
