import "./Destacados.css";
import { useState, useEffect } from "react";
import { traerEventos } from "../../services/eventos";
import ImagenEvento from "../../components/Clients/Tarjetas/ImagenEvento";
function Destacados() {
    const [eventos, setEventos] = useState([]);
    const [error, setError] = useState(null)
    
    useEffect(() => {
        async function cargar() {
            try {
                const datos = await traerEventos({limite : "5"});
                setEventos(datos);
            } catch (err) {
                console.error(err.response?.status, err.response?.data);
                setError("No se pudieron cargar los eventos");
            }
        }
        cargar();
    },[])

    return (
        <section className="eventos">

            <div className="seccion-header">
                <h2>Eventos Destacados</h2>
                <a href="#">Ver todos</a>
            </div>

            <div className="destacados-grid">

                {eventos.map((evento) => (
                    <ImagenEvento
                        key={evento.id_evento}
                        imagen={evento.imagen}
                        lugar={evento.lugar}
                        fecha={evento.fecha}
                    />
                ))}
            </div>

        </section>
    );
}

export default Destacados;
