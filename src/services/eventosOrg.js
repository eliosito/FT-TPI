import api from "../api.js";

export async function traerEventosOrg(id) {
  const respuesta = await api.get(`/eventos/org/${id}`)
  return respuesta.data;
  
}
