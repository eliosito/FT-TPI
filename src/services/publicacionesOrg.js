import api from "../api.js";


export async function traerPublicacionesOrg(id) {
  const respuesta = await api.get(`/publicaciones/org/${id}`);
  return respuesta.data;
  
}