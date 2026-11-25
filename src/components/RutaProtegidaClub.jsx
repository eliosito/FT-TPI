import { Redirect } from "wouter";
import { getUsuario } from "../auth";

function RutaProtegidaClub({ roles , children }) {
    const usuario = getUsuario();

    if (!usuario) return <Redirect to="/privado/login" />;
    if (roles && !roles.includes(usuario.rol)) return <Redirect to="/privado/login" />;

    return children;
}       

export default RutaProtegidaClub;