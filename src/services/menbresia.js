import api from "../api.js";

export async function comprarMembresia() {
    const respuesta = await api.post("/membresia");
    return respuesta.data;
}

export async function traerEstadoMembresia() {
    const respuesta = await api.get("/membresia/estado");
    return respuesta.data;   // { socio: true } o { socio: false }
}