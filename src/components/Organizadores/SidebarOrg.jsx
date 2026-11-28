import "./SidebarOrg.css";
import api from "../../api";

import { useState, useEffect } from "react";
import { Link, useLocation, useParams } from "wouter";
import {
    LuLayoutGrid,
    LuUsers,
    LuChartNoAxesCombined,
    LuWallet,
    LuCopy,
    LuBookOpen,
} from "react-icons/lu";

function SidebarOrg() {
    const { id } = useParams();
    const [location] = useLocation();

    const [org, setOrg] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        setError(null);
        setOrg(null);

        async function getOrgClub() {
            try {
                const respuesta = await api.get(`org/mias/${id}`);
                setOrg(respuesta.data);
            } catch (err) {
                console.error(err.response?.status, err.response?.data);
                setError("No se encontró la organizacion");
            }
        }

        getOrgClub();
    }, [id]);

    const base = `/privado/organizacion/${id}`;

    function Item({ to, icono, texto }) {
        const activo = location === to;
        return (
            <Link href={to} className={activo ? "sidebar-link activo" : "sidebar-link"}>
                {icono}
                <span>{texto}</span>
                {activo && <i className="sidebar-punto" />}
            </Link>
        );
    }

    return (
        <aside className="wick-sidebar">

            <div className="sidebar-orgHeader">
                {org?.portada && <img className="sidebar-logo" src={org.portada} alt="" />}
                <div className="sidebar-orgName">
                    {error ? error : org ? org.nombre : "Cargando..."}
                </div>
            </div>

            <p className="sidebar-titulo">EVENTOS</p>
            <nav className="sidebar-nav">
                <Item to={base} icono={<LuLayoutGrid />} texto="Panel" />
                <Item to={`${base}/eventos`} icono={<LuUsers />} texto="Eventos" />
                <Item to={`${base}/publicaciones`} icono={<LuChartNoAxesCombined />} texto="Publicaciones" />
                <Item to={`${base}/entradas`} icono={<LuWallet />} texto="Entradas" />
            </nav>

            <p className="sidebar-titulo">SECCION</p>
            <nav className="sidebar-nav">
                <Item to={`${base}/cuentas`} icono={<LuCopy />} texto="Crear cuentas" />
                <Item to={`${base}/seccion`} icono={<LuBookOpen />} texto="SECCION" />
            </nav>

        </aside>
    );
}

export default SidebarOrg;