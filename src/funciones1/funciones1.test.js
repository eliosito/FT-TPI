import { sumar, esMayorDeEdad, saludar } from "./funciones1.js";
import { describe, it, test, expect } from "vitest";


describe("sumar", () => {

    test("devuelve 8 cuando suma 5 y 3", () => {
        const a = 5;
        const b = 3;

        const resultado = sumar(a, b);

        expect(resultado).toBe(8);
    });

    test("devuelve 0 cuando suma dos 0", () => {
        const a = 0;
        const b = 0;

        const resultado = sumar(a, b);

        expect(resultado).toBe(0);
    });

});


describe("esMayorDeEdad", () => {

    test("devuelve true cuando la persona tiene 18 años", () => {
        const edad = 18;

        const resultado = esMayorDeEdad(edad);

        expect(resultado).toBe(true);
    });

    test("devuelve false cuando la persona tiene 17 años", () => {
        const edad = 17;

        const resultado = esMayorDeEdad(edad);

        expect(resultado).toBe(false);
    });

});


describe("saludar", () => {

    test("devuelve Hola, Elio cuando recibe Elio", () => {
        const nombre = "Elio";

        const resultado = saludar(nombre);

        expect(resultado).toBe("Hola, Elio");
    });

    test("devuelve Hola, Juan cuando recibe Juan", () => {
        const nombre = "Juan";

        const resultado = saludar(nombre);

        expect(resultado).toBe("Hola, Juan");
    });
});