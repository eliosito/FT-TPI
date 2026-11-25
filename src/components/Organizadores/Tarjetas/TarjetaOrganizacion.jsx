import "./TarjetaOrganizacion.css";
//import { Link } from "wouter";

export default function TarjetaOrganizacion({ nombre, ubicacion, portada }){
    return (
        <article className="tarjeta-org2">

            <div className="tarjeta-portada2">
                <img src={portada} alt={`IMAGEN ${nombre}`} />
            </div>

            <div className="tarjeta-info2">

                <div className="tarjeta-nombre2">
                    <span>Nombre</span>
                    <h3>{nombre}</h3>
                </div>

                <div className="tarjeta-ubi2">
                    <span>ubicacion</span>
                    <h3>{ubicacion}</h3>
                </div>

            </div>

        </article>
    );
}