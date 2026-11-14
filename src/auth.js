import { jwtDecode } from "jwt-decode";


export function getUsuario() {
    const token = localStorage.getItem("token");
    if (!token) return null;

    try {
        const datos = jwtDecode(token);
        if (datos.exp * 1000 < Date.now()) { // si vencio
            localStorage.removeItem("token");
            return null;
        }
        return datos;
    } catch {
        return null;
    }
}