# Consumir la API con Axios

Ya tenés casi todo armado. Te lo junto en un solo lugar, con los pasos de siempre: **instancia → servicio → componente**.

## 1. La instancia (ya la tenés)

```js
// src/api.js
import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000/api",
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export default api;
```

## 2. Los cuatro métodos

Cada método HTTP de tu backend tiene su equivalente en Axios:

```js
// GET: leer (los parámetros van en { params })
const r = await api.get("/eventos", { params: { lugar: "Ushuaia" } });

// POST: crear (el 2.º argumento es el body)
await api.post("/usuarios", { nombre, apellido, dni, contrasena, email });

// PUT: actualizar (el id va en la URL y los datos en el body)
await api.put(`/usuarios/${id}`, { nombre, email });

// DELETE: borrar (solo la URL)
await api.delete(`/usuarios/${id}`);
```

Lo que mandó tu backend con `res.json(...)` siempre queda en **`respuesta.data`**.

## 3. El servicio

Una función por pedido, así los componentes no repiten URLs:

```js
// src/services/eventos.js
import api from "../api.js";

export async function traerEventos(params = {}) {
  const respuesta = await api.get("/eventos", { params });
  return respuesta.data;
}

export async function traerEventosDestacados() {
  const respuesta = await api.get("/eventos/destacados");
  return respuesta.data;
}

export async function traerEventoPorId(id) {
  const respuesta = await api.get(`/eventos/${id}`);
  return respuesta.data;
}
```

## 4. Consumirlo en un componente

### Al abrir la pantalla (`useEffect`)

```jsx
import { useState, useEffect } from "react";
import { traerEventosDestacados } from "../services/eventos";

function Destacados() {
  const [eventos, setEventos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function cargar() {
      try {
        const datos = await traerEventosDestacados();
        setEventos(datos);
      } catch (err) {
        console.error(err.response?.status, err.response?.data);
        setError("No se pudieron cargar los eventos");
      } finally {
        setCargando(false);
      }
    }
    cargar();
  }, []);

  if (cargando) return <p>Cargando...</p>;
  if (error) return <p className="error">{error}</p>;

  return (
    <div>
      {eventos.map((e) => (
        <p key={e.id_evento}>{e.nombre}</p>
      ))}
    </div>
  );
}
```

El `[]` hace que el pedido se haga **una sola vez**, cuando el componente aparece.

### Al tocar un botón (sin `useEffect`)

Para acciones del usuario (crear, borrar, actualizar), llamás a la función dentro del evento:

```jsx
async function borrar(id) {
  try {
    await api.delete(`/usuarios/${id}`);
    // acá actualizás la lista o mostrás un mensaje
  } catch (err) {
    console.error(err.response?.status, err.response?.data);
  }
}

<button onClick={() => borrar(5)}>Eliminar</button>
```

### Cuando el pedido depende de algo que cambia

Si un filtro lo elige el usuario y está en un estado, ponelo en el arreglo de dependencias. El efecto se vuelve a ejecutar cada vez que cambia:

```jsx
const [lugar, setLugar] = useState("Ushuaia");

useEffect(() => {
  traerEventos({ lugar }).then(setEventos);
}, [lugar]);   // ← se repite cuando cambia `lugar`
```

## 5. Manejar errores

Axios lanza un error si el servidor responde 4xx o 5xx. Dentro del `catch`, `error` tiene tres casos posibles:

| Situación | Qué tiene `error` |
|---|---|
| El servidor respondió con error (401, 403, 500...) | `error.response.status` y `error.response.data` |
| El pedido salió pero no hubo respuesta (backend apagado) | `error.response` es `undefined` |
| Error de tu propio código antes de enviar | `error.message` te dice qué fue |

Por eso usás `error.response?.status`: el `?.` evita que se rompa cuando no hay respuesta.

## Resumen del recorrido

```
Componente → llama a traerEventos(...) del servicio
          → el servicio usa api.get(...) (con baseURL y token automáticos)
          → backend responde → respuesta.data
          → setEventos(datos) → React vuelve a dibujar
```

Si te referís a algo más puntual (por ejemplo cómo mandar un formulario con `POST`, cómo mostrar los errores del servidor en pantalla o subir una imagen), decime cuál y te lo armo con tu código.