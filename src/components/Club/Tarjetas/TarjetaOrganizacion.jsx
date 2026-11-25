import "./TarjetaOrganizacion.css";
//import { Link } from "wouter";

export default function TarjetaOrganizacion({ nombre, ubicacion, portada }){
    return (
        <article className="tarjeta-org">

            <div className="tarjeta-portada">
                <img src={portada} alt={`IMAGEN ${nombre}`} />
            </div>

            <div className="tarjeta-info">

                <div className="tarjeta-nombre">
                    <span>Nombre</span>
                    <h3>{nombre}</h3>
                </div>

                <div className="tarjeta-ubi">
                    <span>ubicacion</span>
                    <h3>{ubicacion}</h3>
                </div>

            </div>

        </article>
    );
}