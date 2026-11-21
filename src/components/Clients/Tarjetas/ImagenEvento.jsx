
import "./ImagenEvento.css";
import React from "react";

export default function ImagenEvento({ imagen, lugar }) {
    return (
        <article className="evento-card">
            <div className="evento-card-imagen">
                <img
                    src={imagen}
                    alt={`Evento en ${lugar}`}
                />
            </div>
        </article>
    );
}
