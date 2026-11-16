import "./ProximosEventos.css";
import TarjetaEvento from "../components/TarjetaEvento";
import { useState, useEffect } from "react";
import { traerEventos } from "../services/eventos";
function ProximosEventos() {
    const [eventos, setEventos] = useState([]);
    const [error, setError] = useState(null)

    useEffect(() => {
        async function cargar() {
            try {
                const datos = await traerEventos();
                setEventos(datos);
            } catch (err) {
                console.error(err.response?.status, err.response?.data);
                setError("No se pudieron cargar los eventos");
            }
        }
        cargar();
    }, [])

    return (
        <section className="proximos-eventos">

            <div className="seccion-header">
                <h2>Explora los próximos eventos</h2>
                <a href="#">Ver todos</a>
            </div>

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

export default ProximosEventos;
