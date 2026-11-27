import "./ClubUltimosEventos.css"
import TarjetaEventoClub from "../../../components/Organizadores/Tarjetas/TarjetaEventoClub";
import { useState, useEffect } from "react";
import { traerEventosOrg } from "../../../services/eventosOrg";

function ClubUltimosEventos({ idOrg }) {
    const [eventos, setEventos] = useState([]);
    const [error, setError] = useState(null);
    
    useEffect(() => {
        traerEventosOrg(idOrg)
        .then((data) => {
            setEventos(data);
        })
        .catch((error) => {
            console.error(error.response?.status, error.response?.data);
            setError("No se pudieron cargar los eventos");
        });
    }, [idOrg]);

    return (
        <section className="Clubultimos-eventos">

            <div className="Clubseccion-header">
                <h2>Proximamente.</h2>
            </div>

            {error && <p className="Cluberror-mensaje">{error}</p>}

            <div className="Clubeventos-grid">
                {eventos.map((evento) => (
                    <TarjetaEventoClub
                        key={evento.id_evento}
                        nombre={evento.nombre}
                        imagen={evento.imagen}
                        lugar={evento.lugar}
                        fecha={evento.fecha}
                    />
                ))}
            </div>

        </section>
    );
}

export default ClubUltimosEventos;