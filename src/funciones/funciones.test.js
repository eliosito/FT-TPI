import {sumar} from "./funciones.js"
import {describe, it , test, expect} from 'vitest'


describe("sumar", ()=> {
test("devuelve 8 cuando suma 5 y 3", () => {
    const a = 5;
    const b = 3;


    const resultado = sumar(a,b);

    expect(resultado).toBe(8)
});

test("devuelve 0 cuando suma dos 0", () => {
    const a = 0;
    const b = 0;


    const resultado = sumar(a,b);

    expect(resultado).toBe(0)
});

});
