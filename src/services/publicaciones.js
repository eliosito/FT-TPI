import api from "../api.js";

export async function traerPublicaciones(params = {}) {
  const respuesta = await api.get("/publicaciones", { params });
  return respuesta.data;
}