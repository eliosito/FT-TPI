import "./ProximosEventos.css";
import TarjetaEvento2 from "../../components/Clients/Tarjetas/TarjetaEvento2";
import { useState, useEffect } from "react";
import { traerEventos } from "../../services/eventos";
import Modal from "../../components/Modal";
import DetalleEvento from "../../components/Clients/Tarjetas/DetalleEvento";

function ProximosEventos() {
    const [eventos, setEventos] = useState([]);
    const [error, setError] = useState(null)

    const [eventoSeleccionado, setEventoSeleccionado] = useState(null);

    useEffect(() => {
        async function cargar() {
            try {
                const datos = await traerEventos({orden:"viejo", limite: "12"});
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
                <h2>Explora los próximos eventos</h2>
                <a href="#">Ver todos</a>
            </div>

            <div className="proximos-grid">

                {eventos.map((evento) => (
                    <TarjetaEvento2
                        key={evento.id_evento}
                        nombre={evento.nombre}
                        imagen={evento.imagen}
                        lugar={evento.lugar}
                        fecha={evento.fecha}
                        hora={evento.hora}
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

export default ProximosEventos;
