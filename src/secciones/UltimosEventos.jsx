import "./ProximosEventos.css";
import TarjetaEvento from "../components/TarjetaEvento";
import { useState, useEffect } from "react";
import { traerEventos } from "../services/eventos";

function UltimosEventos() {
    const [eventos, setEventos] = useState([]);
    const [error, setError] = useState(null);
    
    useEffect(() => {
        traerEventos()
        .then((data) => {
            // Ordenar por fecha
            const eventosOrdenados = data.sort((a, b) => new Date(a.fecha) - new Date(b.fecha));
            setEventos(eventosOrdenados);
        })
        .catch((error) => {
            console.error(error.response?.status, error.response?.data);
            setError("No se pudieron cargar los eventos");
        });
    }, []);

    return (
        <section className="ultimos-eventos">

            <div className="seccion-header">
                <h2>¡No te los pierdas!+</h2>
                <a href="#">Ver todos</a>
            </div>

            {error && <p className="error-mensaje">{error}</p>}

            <div className="eventos-grid">
                {eventos.map((evento) => (
                    <TarjetaEvento
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

export default UltimosEventos;