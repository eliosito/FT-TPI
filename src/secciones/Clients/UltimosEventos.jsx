import "./UltimosEventos.css";
import TarjetaEvento from "../../components/Clients/Tarjetas/TarjetaEvento";
import { useState, useEffect } from "react";
import { traerEventos } from "../../services/eventos";
import Modal from "../../components/Modal";
import DetalleEvento from "../../components/Clients/Tarjetas/DetalleEvento";


function UltimosEventos() {
    const [eventos, setEventos] = useState([]);
    const [error, setError] = useState(null);

    const [eventoSeleccionado, setEventoSeleccionado] = useState(null);
    
    useEffect(() => {
        async function cargar() {
            try {
                const datos = await traerEventos({orden: "nuevo" , limite: "8"});
                setEventos(datos);
            } catch (err) {
                console.error(err.response?.status, err.response?.data);
                setError("No se pudieron cargar los eventos");
            }
        }
        cargar();
    }, []);

    return (
        <section className="eventos">

            <div className="seccion-header">
                <h2>¡Ultimos eventos!</h2>
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
                        onClick={() => setEventoSeleccionado(evento)}
                    />
                ))}
            </div>

            <Modal
                abierto={eventoSeleccionado !== null}
                onCerrar={() => setEventoSeleccionado(null)}>


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

export default UltimosEventos;