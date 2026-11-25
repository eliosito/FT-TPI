import api from "../api.js";


export async function traerMisOrgs() {
  const respuesta = await api.get(`/org/user`);
  return respuesta.data;
  
}