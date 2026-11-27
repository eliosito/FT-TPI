import "./DetalleEvento.css";

const meses = ["ene", "feb", "mar", "abr", "may", "jun", "jul", "ago", "sep", "oct", "nov", "dic"];

function DetalleEvento({ evento, onCerrar, onAgregar }) {
    // fecha llega como "2026-11-18"
    const [, mesNumero, diaNumero] = evento.fecha.slice(0, 10).split("-");
    const dia = Number(diaNumero);
    const mes = meses[Number(mesNumero) - 1];

    return (
        <article className="detalle">

            <img className="detalle-imagen" src={evento.imagen} alt={evento.nombre} />

            <div className="detalle-cuerpo">

                {/* Fecha + título + descripción */}
                <div className="detalle-cabecera">

                    <div className="detalle-fecha">
                        <span className="detalle-fecha-dia">{dia}</span>
                        <span className="detalle-fecha-mes">{mes}</span>
                    </div>

                    <div className="detalle-info">
                        <h2 className="detalle-titulo">
                            <span className="detalle-nombre">{evento.nombre}</span>
                            {" - "}
                            <span className="detalle-lugar">{evento.lugar}</span>
                        </h2>

                        <p className="detalle-descripcion-titulo">Descripcion:</p>
                        <div className="detalle-descripcion">
                            {/* acá va la descripción del evento */}
                        </div>
                    </div>

                </div>

                {/* Entradas */}
                <h3 className="detalle-entradas-titulo">Entradas:</h3>

                <div className="detalle-entradas">

                    <div className="detalle-entradas-encabezado">
                        <span className="detalle-col-tipo">Tipo de Entrada</span>
                        <span className="detalle-col-precio">Precio</span>
                        <span className="detalle-col-cantidad">Cantidad</span>
                    </div>

                    <div className="detalle-entradas-lista">
                        {/*
                          Cada tipo de entrada irá acá con esta estructura:

                          <div className="detalle-entrada-fila">
                              <div className="detalle-col-tipo">
                                  <img ... />
                                  <span>Estandar</span>
                              </div>
                              <div className="detalle-col-precio">10.000$</div>
                              <div className="detalle-col-cantidad">...</div>
                          </div>
                        */}
                    </div>

                </div>

                {/* Botones */}
                <div className="detalle-acciones">
                    <button type="button" className="detalle-boton" onClick={onAgregar}>
                        Agregar al carro
                    </button>
                    <button
                        type="button"
                        className="detalle-boton detalle-boton-cancelar"
                        onClick={onCerrar}
                    >
                        Cancelar
                    </button>
                </div>

            </div>
        </article>
    );
}

export default DetalleEvento;