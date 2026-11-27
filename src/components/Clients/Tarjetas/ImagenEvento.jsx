
import "./ImagenEvento.css";
import React from "react";

export default function ImagenEvento({ imagen, lugar, onClick }) {
    return (
        <article className="evento-card"
        onClick={onClick}
        role="button"
        tabIndex={0}
        >
            <div className="evento-card-imagen">
                <img
                    src={imagen}
                    alt={`Evento en ${lugar}`}
                />
            </div>
        </article>
    );
}
