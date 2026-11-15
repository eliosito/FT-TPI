import api from "../api.js";

let promesa = null;

export function traerPublicaciones() {
  if (!promesa) {
    promesa = api
      .get("/publicaciones")
      .then((respuesta) => respuesta.data)
      .catch((error) => {
        promesa = null;          // si falló, permitir reintentar
        throw error;
      });
  }
  return promesa;
}