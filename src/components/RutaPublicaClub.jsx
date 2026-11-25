import { Redirect } from "wouter";
import { getUsuario } from "../auth";

function RutaPublicaClub ({ children }) {
    if (getUsuario()) return <Redirect to="/privado" replace/>
    return children;

}

export default RutaPublicaClub; 