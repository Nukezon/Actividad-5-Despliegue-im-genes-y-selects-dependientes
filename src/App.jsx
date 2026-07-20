import SelectorPlantas from "./components/SelectorPlantas";
import "./App.css";

function App() {
  return (
    <div className="pagina">
      <header className="topbar">
        <span className="topbar__marca">Raíces</span>
        <span className="topbar__tag">vivero de barrio</span>
      </header>

      {/* Esta imagen viene de la carpeta public/ y se referencia con ruta absoluta */}
      <section
        className="hero"
        style={{ backgroundImage: "url(/hero-plantas.svg)" }}
        aria-label="Portada del vivero Raíces"
      />

      <main className="contenido">
        <section className="intro">
          <h1>Encuentra la planta ideal para tu espacio</h1>
          <p>
            Elige una categoría y luego una planta para ver su ficha de
            cuidado: cuánta luz necesita, cada cuánto regarla y un consejo
            rápido de nuestro equipo.
          </p>
        </section>

        <SelectorPlantas />
      </main>

      <footer className="footer">
        <p>Actividad 5 · Programación II · Proyecto React de práctica</p>
      </footer>
    </div>
  );
}

export default App;
