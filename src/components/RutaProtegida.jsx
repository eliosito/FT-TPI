import { Redirect } from "wouter";
import { getUsuario } from "../auth";

function RutaProtegida({ roles , children }) {
    const usuario = getUsuario();

    if (!usuario) return <Redirect to="/publico/login" />;
    if (roles && !roles.includes(usuario.rol)) return <Redirect to="/publico/login" />;

    return children;
}       

export default RutaProtegida;