import { Redirect } from "wouter";
import { getUsuario } from "../auth";

function RutaProtegidaClub({ roles , soloSocios, children }) {
    const usuario = getUsuario();

    if (!usuario) return <Redirect to="/privado/login" />;
    if (roles && !roles.includes(usuario.rol)) return <Redirect to="/privado/login" />;
    if (soloSocios && !usuario.socio) return <Redirect to="/publico/membresia" />;
    if (roles && !roles.includes(usuario.rol)) return <Redirect to="/privado/" />;
    return children;
}       

export default RutaProtegidaClub;