import api from "../api.js";

let promesa = null;

export function traerEventos() {
  if (!promesa) {
    promesa = api
      .get("/eventos")
      .then((respuesta) => respuesta.data)
      .catch((error) => {
        promesa = null;          // si falló, permitir reintentar
        throw error;
      });
  }
  return promesa;
}