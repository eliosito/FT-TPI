import api from "../api.js";


export async function traerMisOrgs() {
  const respuesta = await api.get(`/org/user`);
  return respuesta.data;
  
}

export async function traerMisOrgs2() {
  const respuesta = await api.get(`/org/mias`);
  return respuesta.data;
  
}

export async function traerOrgMia(id) {
  const respuesta = await api.get(`/org/mias/${id}`);
  return respuesta.data;
}