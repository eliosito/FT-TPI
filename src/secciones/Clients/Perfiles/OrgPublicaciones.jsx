import "../Publicaciones.css";
import TarjetaPublicacion from "../../../components/Clients/Tarjetas/TarjetaPublicacion";
import { useState, useEffect } from "react";
import { traerPublicacionesOrg } from "../../../services/publicacionesOrg";
function OrgPublicaciones({idOrg}) {
    const [publicacions, setPublicacion] = useState([])
    const [error, setError] = useState(null)

    useEffect(() => {
        traerPublicacionesOrg(idOrg)
        .then(setPublicacion)
        .catch((err) => {
            console.error(err.response?.status, err.response?.data)
            setError("No se pudieron cargar las publicaciones")
        })
    },[])

    return (
        <section className="Publicaciones">

        <div className="seccion-header">
            <h2>Las publicaciones + nuevas</h2>
            <a href="#">Ver todos</a>
        </div>

        <div className="publicaciones-grid">
            {publicacions.map((publicacion) => (
                <TarjetaPublicacion
                key={publicacion.id_publicacion}
                titulo={publicacion.titulo}
                descripcion={publicacion.descripcion}
                imagen={publicacion.img_url}
                fecha={publicacion.fecha_creacion}
                
                />

            ))}

        </div>

        </section>
    );
}

export default OrgPublicaciones;