import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "./CarrouselPublicaciones.css";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { traerPublicaciones } from "../../services/publicaciones";
import TarjetaPublicacion from "../../components/Clients/Tarjetas/TarjetaPublicacion";

function CarruselPublicacion() {
    const [Publicaciones, setPublicaciones] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function cargar() {
            try {
                setError(null);
                setPublicaciones(await traerPublicaciones({ orden: "viejo", limite: 10 }));
            } catch (err) {
                console.error(err.response?.status, err.response?.data);
                setError("No se pudieron cargar las publicaciones");
            }
        }
        cargar();
    }, []);

    return (
        <section className="publicaciones">
            <div className="seccion-header">
                <h2>Publicaciones</h2>
                <a href="#">Ver todos</a>
            </div>

            {error && <p className="error-mensaje">{error}</p>}
            {!error && Publicaciones.length === 0 && (
                <p className="error-mensaje">No hay publicaciones disponibles</p>
            )}

            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={40}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 4000, disableOnInteraction: false }}
                breakpoints={{
                    1100: { slidesPerView: 2 },
                    1700: { slidesPerView: 3 },
                }}
            >
                {Publicaciones.map((publicacion) => (
                    <SwiperSlide key={publicacion.id_publicacion} className="slide-publicacion">
                        <TarjetaPublicacion
                            titulo={publicacion.titulo}
                            descripcion={publicacion.descripcion}
                            imagen={publicacion.img_url}
                            fecha={publicacion.fecha_creacion}
                            nombreOrganizacion={publicacion.nombre}
                            fotoOrganizacion={publicacion.portada}
                            organizador_id={publicacion.organizador_id}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
}

export default CarruselPublicacion;