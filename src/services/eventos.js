import api from "../api.js";

export async function traerEventos(params = {}) {
  const respuesta = await api.get("/eventos", { params });
  return respuesta.data;
}

export async function traerEventosUsh() {
  const respuesta = await api.get("/eventos", {
    params: { lugar: "ushuaia", limite: 5 },
  });
  return respuesta.data;
}