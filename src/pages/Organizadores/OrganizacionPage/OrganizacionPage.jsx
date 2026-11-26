import { useEffect, useState } from 'react';
import { useParams } from 'wouter';
import api from "../../../api.js";
import "./OrganizacionPage.css";

export default function PerfilOrganizacionClub() {
  const { id } = useParams();
  const [org, setOrg] = useState(null);
  const [error, setError] = useState(null);


  useEffect(() => {
    setError(null);
    setOrg(null);

    async function getOrg() {
      try {
        const respuesta = await api.get(`org/mias/${id}`);
        console.log("Pidio Organizacion CLUB", respuesta.data);
        setOrg(respuesta.data[0]);
        return true
      } catch (err) {
        console.error(error.response?.status, error.response?.data);
        setError("No se encontró la organizacion")
        return false;
      }
    }

    getOrg()
  }, [id]);

  if (error) return <p>{error}</p>
  if (!org) return <p className="orgClub-loading">Cargando organización...</p>;


  return (
    <main className="orgC-layout">

      <UltimoEvento idOrg={id} />


    </main>
  );
}