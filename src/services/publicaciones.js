import api from "../api.js";

export async function traerPublicaciones() {
  const respuesta = await api.get("/publicaciones");
  return respuesta.data;
  
}