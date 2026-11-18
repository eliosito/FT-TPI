import "./Publicaciones.css";
import TarjetaPublicacion from "../components/TarjetaPublicacion";
import { useState, useEffect } from "react";
import { traerPublicaciones } from "../services/publicaciones";
function Publicaciones() {
    const [publicacions, setPublicacion] = useState([])
    const [error, setError] = useState(null)

    useEffect(() => {
        async function cargar() {
            try {
                const datos = await traerPublicaciones();
                setPublicacion(datos);
            } catch (err) {
                console.error(err.response?.status, err.response?.data);
                setError("No se pudieron cargar las publicaciones");
            }
        }
        cargar();
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

export default Publicaciones;