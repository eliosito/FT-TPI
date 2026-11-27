import { useEffect, useState } from 'react';
import { useParams } from 'wouter';
import api from "../../../api.js";
import ClubUltimosEventos from '../../../secciones/Organizadores/OrganizacionPage/ClubUltimosEventos.jsx';
import "./OrganizacionPage.css";

export default function PerfilOrganizacionClub() {
  const { id } = useParams();

  const [org, setOrg] = useState(null);
  const [error, setError] = useState(null);


  useEffect(() => {
    setError(null);
    setOrg(null);

    async function getOrgClub() {
      try {
        const respuesta = await api.get(`org/mias/${id}`);
        console.log("Pidio Organizacion CLUB", respuesta.data);
        setOrg(respuesta.data);
      } catch (err) {
        console.error(err.response?.status, err.response?.data);
        setError("No se encontró la organizacion")
      }
    }

    getOrgClub()
  }, [id]);

  if (error) return <p>{error}</p>
  if (!org) return <p className="orgClub-loading">Cargando organización...</p>;


  return (
    <main className="orgC-layout">

      <ClubUltimosEventos idOrg={id} />


    </main>
  );
}