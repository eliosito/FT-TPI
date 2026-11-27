import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "./CarrouselEventos.css";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";


import { traerEventos } from "../../services/eventos";
import TarjetaEvento from "../../components/Clients/Tarjetas/TarjetaEvento";
import Modal from "../../components/Modal";
import DetalleEvento from "../../components/Clients/Tarjetas/DetalleEvento";

function CarruselEventos() {
    const [eventos, setEventos] = useState([]);

    const [eventoSeleccionado, setEventoSeleccionado] = useState(null);


    useEffect(() => {
        async function cargar() {
            try {
                setEventos(await traerEventos({ orden: "viejo", limite: 10 }));
            } catch (err) {
                console.error(err.response?.status, err.response?.data);
            }
        }
        cargar();
    }, []);

    return (
        <section className="eventos">
            <div className="seccion-header">
                <h2>Eventos</h2>
                <a href="#">Ver todos</a>
            </div>



            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={10}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 4000, disableOnInteraction: false }}
                breakpoints={{

                    1280: { slidesPerView: 4 },
                }}
            >
                {eventos.map((evento) => (
                    <SwiperSlide key={evento.id_evento}>
                        <TarjetaEvento
                            imagen={evento.imagen}
                            lugar={evento.lugar}
                            fecha={evento.fecha}
                            onClick={() => setEventoSeleccionado(evento)}
                        />
                    </SwiperSlide>

                )

                )

                }

            </Swiper>

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

export default CarruselEventos;