import "./OrgHome.css";
import TarjetaOrganizacion from "../components/Club/Tarjetas/TarjetaOrganizacion";
import { useState, useEffect } from "react";
import { traerMisOrgs } from "../services/organizaciones";
function OrganizacionesHome() {
    const [organizaciones, setOrganizaciones] = useState([])
    const [error, setError] = useState(null)

    useEffect(() => {
        async function cargar() {
            try {
                const datos = await traerMisOrgs();
                setOrganizaciones(datos);
            } catch (err) {
                console.error(err.response?.status, err.response?.data);
                setError("No se pudieron cargar las publicaciones");
            }
        }
        cargar();
    }, [])

    return (
        <section className="Organizaciones">

            <div className="seccion-header">
                <h2>Tus Organizciones mi paisa</h2>
                <a href="#">Ver todos</a>
            </div>

            <div className="organizaciones-grid">

                {organizaciones.map((organizacion) => (
                    <TarjetaOrganizacion
                        key={organizacion.id_org}
                        nombre={organizacion.nombre}
                        ubicacion={organizacion.ubicacion}
                        portada={organizacion.portada}
                    />

                ))}

            </div>

        </section>
    );
}

export default OrganizacionesHome;