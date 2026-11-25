import { Redirect } from "wouter";
import { getUsuario } from "../auth";

function RutaProtegida({ roles , soloSocios, children }) {
    const usuario = getUsuario();

    if (!usuario) return <Redirect to="/publico/login" />;
    if (roles && !roles.includes(usuario.rol)) return <Redirect to="/publico/login" />;
    if (soloSocios && !usuario.socio) return <Redirect to="/publico/membresia" />;

    return children;
}       

export default RutaProtegida;