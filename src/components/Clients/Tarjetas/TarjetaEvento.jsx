import "./TarjetaEvento.css";
import React from 'react'

export default function TarjetaEvento({ lugar, fecha, imagen, onClick }) {
    return (
        <article className="tarjeta-evento"
        onClick={onClick}
        role="button"
        tabIndex={0}
        >

            <div className="tarjeta-imagen">
                <img src={imagen} alt={`Evento en ${lugar}`} />
            </div>

            <div className="tarjeta-info">

                <div className="tarjeta-lugar">
                    <span>Lugar</span>
                    <h3>📍{lugar}</h3>
                </div>

                <div className="tarjeta-fecha">
                    <span>fecha</span>
                    <h3>{fecha}</h3>
                </div>

            </div>

        </article>
    );
}
