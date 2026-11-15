import api from "../api.js";

let promesa = null;

export function traerEventosOrg(id) {
  if (!promesa) {
    promesa = api
      .get(`/eventos/org/${id}`)
      .then((respuesta) => respuesta.data)
      .catch((error) => {
        promesa = null;          // si falló, permitir reintentar
        throw error;
      });
  }
  return promesa;
}