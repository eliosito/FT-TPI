/**
 * Ejercicio 0 - Primeros tests unitarios
 *
 * Cuatro funciones puras (misma entrada => misma salida, sin efectos secundarios).
 * NO hay que modificar este archivo: hay que testearlo.
 */

/**
 * Indica si un numero es par.
 * @param {number} numero
 * @returns {boolean}
 * @throws {TypeError} si no recibe un numero
 */
export function esPar(numero) {
    if (typeof numero !== "number" || Number.isNaN(numero)) {
        throw new TypeError("esPar espera un numero");
    }
    return numero % 2 === 0;
}

/**
 * Formatea un monto en pesos con separador de miles y coma decimal.
 * Ejemplos: 1500 => "$ 1.500"   |   1500.5 => "$ 1.500,50"   |   -200 => "-$ 200"
 * Los decimales solo se muestran si existen.
 * @param {number} pesos
 * @returns {string}
 * @throws {TypeError} si no recibe un numero
 */
export function formatearPrecio(pesos) {
    if (typeof pesos !== "number" || Number.isNaN(pesos)) {
        throw new TypeError("formatearPrecio espera un numero");
    }

    const esNegativo = pesos < 0;
    const totalCentavos = Math.round(Math.abs(pesos) * 100);
    const parteEntera = Math.trunc(totalCentavos / 100);
    const centavos = totalCentavos % 100;

    const conSeparadores = String(parteEntera).replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    const decimales = centavos === 0 ? "" : "," + String(centavos).padStart(2, "0");

    return `${esNegativo ? "-" : ""}$ ${conSeparadores}${decimales}`;
}

/**
 * Devuelve las iniciales de un nombre completo, en mayusculas y separadas por punto.
 * Ejemplo: "ana maria lopez" => "A.M.L."
 * @param {string} nombreCompleto
 * @returns {string} cadena vacia si el nombre esta vacio
 * @throws {TypeError} si no recibe un string
 */
export function iniciales(nombreCompleto) {
    if (typeof nombreCompleto !== "string") {
        throw new TypeError("iniciales espera un string");
    }

    const palabras = nombreCompleto.trim().split(/\s+/).filter(Boolean);
    if (palabras.length === 0) return "";

    return palabras.map((palabra) => palabra[0].toUpperCase()).join(".") + ".";
}

/**
 * Cuenta las palabras de un texto. Los espacios de mas no cuentan.
 * @param {string} texto
 * @returns {number}
 * @throws {TypeError} si no recibe un string
 */
export function contarPalabras(texto) {
    if (typeof texto !== "string") {
        throw new TypeError("contarPalabras espera un string");
    }

    const limpio = texto.trim();
    if (limpio === "") return 0;

    return limpio.split(/\s+/).length;
}