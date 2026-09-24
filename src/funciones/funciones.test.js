import { describe, test, expect } from "vitest";
import { esPar, formatearPrecio, iniciales, contarPalabras } from "./funciones.js";

/* ═══════════════════════════════════════════════════════════════════
EJERCICIO 0 - Primeros tests unitarios

El primer bloque esta RESUELTO como ejemplo.
Completa los tres que faltan siguiendo el mismo patron AAA.

Corre `npm run test:watch` y trabaja con el resultado a la vista.
═══════════════════════════════════════════════════════════════════ */

// ─────────────────────────────────────────────────────────────────────
// RESUELTO - usalo de modelo
// ─────────────────────────────────────────────────────────────────────
describe("esPar", () => {
    test("devuelve true cuando el numero es par", () => {
        // Arrange
        const numero = 4;

        // Act
        const resultado = esPar(numero);

        // Assert
        expect(resultado).toBe(true);
    });

    test("devuelve false cuando el numero es impar", () => {
        
        expect(esPar(7)).toBe(false);
    });

    test("considera al cero como par", () => {
        expect(esPar(0)).toBe(true);
    });

    test("funciona con numeros negativos", () => {
        expect(esPar(-4)).toBe(true);
        expect(esPar(-3)).toBe(false);
    });

});

// ─────────────────────────────────────────────────────────────────────
// EJERCICIO 1
// Escribi al menos 5 tests. Acordate de:
//   - un caso simple (1500)
//   - un caso con decimales (1500.5)
//   - el cero
//   - un negativo
//   - un numero grande, con dos separadores de miles (1234567)
// ─────────────────────────────────────────────────────────────────────
describe("formatearPrecio", () => {
    test("formatea un monto entero con separador de miles", () => {
        expect(formatearPrecio(1500)).toBe("$ 1.500");
    });

    test("formatea un monto con decimales", () => {
        expect(formatearPrecio(1500.5)).toBe("$ 1.500,50")
    });

    test("formatea el cero", () => {
        expect(formatearPrecio(0)).toBe("$ 0")
    });

    test("formatea un monto negativo", () => {
        expect(formatearPrecio (-500)).toBe("-$ 500")
    });


    test("usa dos separadores de miles en montos de siete cifras", () => {
        expect(formatearPrecio (1000000)).toBe("$ 1.000.000")
    });}
)

// ─────────────────────────────────────────────────────────────────────
// EJERCICIO 2
// Pensa: que pasa con un nombre de una sola palabra? Y con espacios de mas?
// Y con un string vacio?
// ─────────────────────────────────────────────────────────────────────
describe("iniciales", () => {
    test("devuelve las iniciales de un nombre y dos apellidos", () => {
        expect(iniciales("Esteban Villarroel Sandoval")).toBe("E.V.S.")
    });

    test("funciona con un nombre de una sola palabra",() => {
        expect(iniciales("Elio")).toBe("E.")
    });

    test("ignora los espacios de mas",() => {
        expect(iniciales("    Nicolas   Salguero    ")).toBe("N.S.")
    });

    test("devuelve una cadena vacia si el nombre esta vacio",() => {
        expect(iniciales("")).toBe("")
    });
});

// ─────────────────────────────────────────────────────────────────────
// EJERCICIO 3
// Pensa en los casos extremos de un texto: vacio, solo espacios, una palabra,
// varias palabras separadas por muchos espacios, saltos de linea.
// ─────────────────────────────────────────────────────────────────────
describe("contarPalabras", () => {
    test("cuenta las palabras de una frase",() => {
        expect(contarPalabras("Profe Estoy Haciendo Bien la tarea")).toBe(6)
    });

    test("devuelve 0 con un texto vacio",() => {
        expect(contarPalabras("")).toBe(0)
    });

    test("devuelve 0 con un texto de solo espacios",() => {
        expect(contarPalabras("  ")).toBe(0)
    });

    test("no cuenta de mas si hay varios espacios seguidos",() => {
        expect(contarPalabras("Pongame     10 profe ")).toBe(3)
    });

    test("cuenta bien si hay saltos de linea",() => {
        expect(contarPalabras("Elio\nVillarroel")).toBe(2)
    });
});