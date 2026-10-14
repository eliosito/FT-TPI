/**
 * Práctica - El ranking de un videojuego
 *
 * Seis funciones del sistema de puntajes de un juego.
 * Cada una tiene arriba un comentario que dice qué DEBERÍA hacer.
 * Ese comentario es el requisito: los tests se escriben contra lo que dice ahí.
 *
 * NO hay que modificar este archivo... salvo para arreglar un error, y recién
 * cuando un test tuyo haya demostrado que existe.
 */

/**
 * Calcula el puntaje de una partida.
 * Cada acierto suma 10 puntos y cada error resta 5.
 * El puntaje nunca es negativo: si la cuenta da menos que cero, devuelve 0.
 * Ejemplos: calcularPuntaje(8, 2) => 70   |   calcularPuntaje(1, 5) => 0
 * @param {number} aciertos
 * @param {number} errores
 * @returns {number}
 */
export function calcularPuntaje(aciertos, errores) {
  const puntaje = aciertos * 10 - errores * 5;
  return Math.max(0, puntaje);
}

/**
 * Indica qué medalla le corresponde a un puntaje.
 *   - menos de 100 puntos  => "sin medalla"
 *   - de 100 a 499 puntos  => "bronce"
 *   - de 500 a 999 puntos  => "plata"
 *   - 1000 puntos o más    => "oro"
 * @param {number} puntaje
 * @returns {string}
 */
export function medalla(puntaje) {
  if (puntaje >= 1000) return "oro";
  if (puntaje >= 500) return "plata";
  if (puntaje >= 100) return "bronce";
  return "sin medalla";
}

/**
 * Calcula el bonus por terminar un nivel rápido.
 *   - 60 segundos o menos   => 500 puntos de bonus
 *   - de 61 a 120 segundos  => 200 puntos de bonus
 *   - más de 120 segundos   => sin bonus (0)
 * @param {number} segundos
 * @returns {number}
 */
export function bonusPorTiempo(segundos) {
  if (segundos < 60) return 500;
  if (segundos <= 120) return 200;
  return 0;
}

/**
 * Devuelve los nombres de los 3 jugadores con más puntos,
 * ordenados del que más puntos tiene al que menos tiene.
 * Si hay menos de 3 jugadores, devuelve los que haya.
 * Ejemplo:
 *   podio([
 *     { nombre: "Ana", puntos: 300 },
 *     { nombre: "Beto", puntos: 900 },
 *     { nombre: "Caro", puntos: 500 },
 *     { nombre: "Dani", puntos: 100 },
 *   ])
 *   => ["Beto", "Caro", "Ana"]
 * @param {{ nombre: string, puntos: number }[]} jugadores
 * @returns {string[]}
 */
export function podio(jugadores) {
  const ordenados = [...jugadores].sort((a, b) => b.puntos - a.puntos);
  return ordenados.slice(0, 3).map((jugador) => jugador.nombre);
}

/**
 * Convierte una cantidad de segundos al formato "minutos:segundos" del cronómetro.
 * Los segundos van siempre con dos cifras; los minutos, con las que hagan falta.
 * No se usan horas: una hora entera es "60:00".
 * Ejemplos: formatearTiempo(75) => "1:15"   |   formatearTiempo(600) => "10:00"
 * @param {number} segundos entero, de 0 en adelante
 * @returns {string}
 */
export function formatearTiempo(segundos) {
  const minutos = Math.floor(segundos / 60);
  const resto = segundos % 60;
  return `${minutos}:${String(resto).padStart(2, "0")}`;
}

export const ERRORES = {
  LONGITUD: "El nombre debe tener entre 3 y 12 caracteres",
  ESPACIOS: "El nombre no puede tener espacios",
  INICIAL: "El nombre debe empezar con una letra",
};

/**
 * Valida el nombre que elige un jugador. Es válido si cumple TODO esto:
 *   1. Tiene entre 3 y 12 caracteres (ambos inclusive)
 *   2. No tiene espacios
 *   3. Empieza con una letra
 *
 * Devuelve { valido, errores }. En `errores` van TODOS los errores que
 * encuentre, no solo el primero.
 * Ejemplos:
 *   validarNombre("Rayo99") => { valido: true, errores: [] }
 *   validarNombre("9x")     => { valido: false, errores: [ERRORES.LONGITUD, ERRORES.INICIAL] }
 * @param {string} nombre
 * @returns {{ valido: boolean, errores: string[] }}
 */
export function validarNombre(nombre) {
  const errores = [];

  if (nombre.length < 3 || nombre.length >= 12) {
    errores.push(ERRORES.LONGITUD);
  }
  if (nombre.includes(" ")) {
    errores.push(ERRORES.ESPACIOS);
  }
  if (!/^\p{L}/u.test(nombre)) {
    errores.push(ERRORES.INICIAL);
  }

  return { valido: errores.length === 0, errores };
}
