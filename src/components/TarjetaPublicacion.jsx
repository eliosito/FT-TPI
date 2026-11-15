import "./TarjetaPublicacion.css";
import react from "react";

export default function TarjetaPublicacion({ titulo, descripcion, imagen, fecha }) {
    return (
        <article className="tarjeta.publicacion">

            <div className="tarjetaP-imagen">
                <img src={imagen} alt={'Imagen'} />
            </div>

            <div className="tarjetaP-info">

                <div className="tarjetap-titulo">
                    <span>Nombre</span>
                    <h3>{titulo}</h3>
                </div>

                <div className="tarjetap-desc">
                    <span>descripcion</span>
                    <h3>{descripcion}</h3>
                </div>

                <div className="tarjetap-fecha">
                    <span>Publicacion hecha el</span>
                    <h3>{fecha}</h3>
                </div>

            </div>

        </article>
    )
}