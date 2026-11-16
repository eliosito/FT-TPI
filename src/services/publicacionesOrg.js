import api from "../api.js";

let promesa = null;

export function traerPublicacionesOrg(id) {
  if (!promesa) {
    promesa = api
      .get(`/publicaciones/org/${id}`)
      .then((respuesta) => respuesta.data)
      .catch((error) => {
        promesa = null;          // si falló, permitir reintentar
        throw error;
      });
  }
  return promesa;
}