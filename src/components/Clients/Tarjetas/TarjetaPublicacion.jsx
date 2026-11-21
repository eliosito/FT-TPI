import "./TarjetaPublicacion.css";
import react from "react";
import { Link } from "wouter"; 

export default function TarjetaPublicacion({ titulo, descripcion, imagen, fecha, nombreOrganizacion, fotoOrganizacion, organizador_id }) {
    return (
        <article className="tarjeta-publicacion">

            <div className="tarjetaP-imagen">
                <img src={imagen} alt={'Imagen'} />
            </div>

            <div className="tarjetaP-info">

                {nombreOrganizacion && (
                    <Link
                        href={`/organizacion/${organizador_id}`}
                        className="tarjetaP-Organizacion"
                    >
                        <img className="tarjetaP-logo" src={fotoOrganizacion} alt="" />
                        <span className="tarjetaP-orgNombre">{nombreOrganizacion}</span>
                    </Link>
                )}

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