import "./TarjetaEventoClub.css";
import React from "react";

export default function TarjetaEventoClub({ nombre, lugar, fecha, imagen }) {
    return (
        <article className="tarjetaClub-evento">

            <div className="tarjetaClub-imagen">
                <img src={imagen} alt={`Flyer de ${nombre}`} />
            </div>

            <div className="tarjetaClub-info">
                <h3 className="tarjetaClub-titulo">{nombre}</h3>
                <p className="tarjetaClub-fecha">{fecha}</p>
                <p className="tarjetaClub-lugar">{lugar}</p>
            </div>

        </article>
    );
}