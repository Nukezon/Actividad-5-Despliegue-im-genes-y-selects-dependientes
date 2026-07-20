import { useMemo, useState } from "react";
import { catalogo } from "../data/plantas";

export default function SelectorPlantas() {
  const categorias = Object.keys(catalogo);

  const [categoriaId, setCategoriaId] = useState("");
  const [plantaId, setPlantaId] = useState("");

  // El listado de plantas disponibles depende de la categoría elegida.
  // Si no hay categoría seleccionada, el select de plantas queda vacío/deshabilitado.
  const plantasDisponibles = useMemo(() => {
    if (!categoriaId) return [];
    return catalogo[categoriaId].plantas;
  }, [categoriaId]);

  const plantaSeleccionada = plantasDisponibles.find((p) => p.id === plantaId);

  function handleCategoriaChange(e) {
    const nuevaCategoria = e.target.value;
    setCategoriaId(nuevaCategoria);
    setPlantaId(""); // al cambiar la categoría, se reinicia el select dependiente
  }

  return (
    <div className="selector">
      <div className="selector__controls">
        <div className="campo">
          <label htmlFor="categoria">1. Elige una categoría</label>
          <select id="categoria" value={categoriaId} onChange={handleCategoriaChange}>
            <option value="">Selecciona…</option>
            {categorias.map((id) => (
              <option key={id} value={id}>
                {catalogo[id].etiqueta}
              </option>
            ))}
          </select>
        </div>

        <div className="campo">
          <label htmlFor="planta">2. Elige una planta</label>
          <select
            id="planta"
            value={plantaId}
            onChange={(e) => setPlantaId(e.target.value)}
            disabled={!categoriaId}
          >
            <option value="">
              {categoriaId ? "Selecciona…" : "Primero elige una categoría"}
            </option>
            {plantasDisponibles.map((planta) => (
              <option key={planta.id} value={planta.id}>
                {planta.nombre}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="tarjeta-planta">
        {plantaSeleccionada ? (
          <>
            <img
              className="tarjeta-planta__img"
              src={plantaSeleccionada.imagen}
              alt={plantaSeleccionada.nombre}
            />
            <div className="tarjeta-planta__info">
              <p className="tarjeta-planta__eyebrow">Ficha de cuidado</p>
              <h3>{plantaSeleccionada.nombre}</h3>
              <p className="tarjeta-planta__cientifico">{plantaSeleccionada.cientifico}</p>
              <dl>
                <div>
                  <dt>Luz</dt>
                  <dd>{plantaSeleccionada.luz}</dd>
                </div>
                <div>
                  <dt>Riego</dt>
                  <dd>{plantaSeleccionada.riego}</dd>
                </div>
              </dl>
              <p className="tarjeta-planta__nota">{plantaSeleccionada.nota}</p>
            </div>
          </>
        ) : (
          <p className="tarjeta-planta__vacio">
            Elige una categoría y luego una planta para ver su ficha de cuidado.
          </p>
        )}
      </div>
    </div>
  );
}
