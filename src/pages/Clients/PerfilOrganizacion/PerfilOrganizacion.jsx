import { useEffect, useState } from 'react';
import { useParams } from 'wouter';
import api from "../../../api.js";
import OrgUltimosEventos from '../../../secciones/Clients/Perfiles/OrgUltimosEventos.jsx';
import OrgPublicaciones from '../../../secciones/Clients/Perfiles/OrgPublicaciones.jsx';
import "./PerfilOrganizacion.css";

export default function PerfilOrganizacion() {
  const { id } = useParams();

  const [org, setOrg] = useState(null);
  const [error, setError] = useState(null);


  useEffect(() => {
    setError(null);

    async function getOrg() {
      try {
        const respuesta = await api.get(`org/${id}`);
        console.log("Pidio Organizacion", respuesta.data);
        setOrg(respuesta.data[0]);
        return true
      } catch (err) {
        console.error(error.response?.status, error.response?.data);
        return false;
      }
    }

    getOrg()
  }, [id]);

  if (!org) return <p className="org-loading">Cargando organización...</p>;
  if (error) return <p>No se encontró la organizacion</p>


  return (
    <main className="org-layout">
      <article className="org-info">
        <div className="org-cover">
          {org.portada ? (
            <img src={org.portada} alt={`Portada de ${org.nombre}`} />
          ) : (
            <span aria-hidden="true">{org.nombre?.charAt(0)}</span>
          )}
        </div>

        <h1 className="org-title">{org.nombre}</h1>

        <section className="org-location">
          <h2>Ubicación</h2>
          <p>{org.ubicacion}</p>
        </section>

        <section className="org-created">
          <h2>Creado el</h2>
          <p>{org.creacion}</p>
        </section>

      </article>

      <OrgUltimosEventos idOrg={id} />

      <OrgPublicaciones idOrg={id} />

    </main>
  );
}