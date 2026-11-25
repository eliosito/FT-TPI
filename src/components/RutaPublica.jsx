import { Redirect } from "wouter";
import { getUsuario } from "../auth";

function RutaPublica ({ children }) {
    if (getUsuario()) return <Redirect to="/" replace/>
    return children;

}

export default RutaPublica; 