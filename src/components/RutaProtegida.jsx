import { Redirect } from "wouter";
import { getUsuario } from "../auth";

function RutaProtegida({ roles , children }) {
    const usuario = getUsuario();

    if (!usuario) return <Redirect to="/login" />;
    if (roles && !roles.includes(usuario.rol)) return <Redirect to="/login" />;

    return children;
}       

export default RutaProtegida;