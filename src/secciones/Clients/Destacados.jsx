import "./Destacados.css";
import { useState, useEffect } from "react";
import { traerEventos } from "../../services/eventos";
import ImagenEvento from "../../components/Clients/Tarjetas/ImagenEvento";
import Modal from "../../components/Modal";
import DetalleEvento from "../../components/Clients/Tarjetas/DetalleEvento";

function Destacados() {
    const [eventos, setEventos] = useState([]);
    const [error, setError] = useState(null)

    const [eventoSeleccionado, setEventoSeleccionado] = useState(null);
    
    useEffect(() => {
        async function cargar() {
            try {
                const datos = await traerEventos({ limite: "5" });
                setEventos(datos);
            } catch (err) {
                console.error(err.response?.status, err.response?.data);
                setError("No se pudieron cargar los eventos");
            }
        }
        cargar();
    }, [])

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
                        nombre={evento.nombre}
                        hora={evento.hora}
                        imagen={evento.imagen}
                        lugar={evento.lugar}
                        fecha={evento.fecha}
                        onClick={() => setEventoSeleccionado(evento)}

                    />
                ))}
            </div>

            <Modal
                abierto={eventoSeleccionado !== null}
                onCerrar={() => setEventoSeleccionado(null)}
            >

                {eventoSeleccionado && (
                    <DetalleEvento
                        evento={eventoSeleccionado}
                        onCerrar={() => setEventoSeleccionado(null)}
                    />
                )}
            </Modal>


        </section>
    );
}

export default Destacados;
