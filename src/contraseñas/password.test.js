import { describe, test, expect } from "vitest";
import { validarPassword, MENSAJES } from "./password.js";

// ─────────────────────────────────────────────────────────────────────
// RESUELTO - dos ejemplos, uno de cada tipo
// ─────────────────────────────────────────────────────────────────────
describe("validarPassword - casos válidos", () => {
  test("acepta una contraseña en el límite inferior de longitud (8)", () => {
    // Arrange
    const password = "Abc1234x"; // exactamente 8 caracteres

    // Act
    const resultado = validarPassword(password);

    // Assert
    expect(resultado).toEqual({ valida: true, errores: [] });
  });
});

describe("validarPassword - casos inválidos", () => {
  test("rechaza una contraseña sin mayúsculas", () => {
    const resultado = validarPassword("abc1234x");

    expect(resultado.valida).toBe(false);
    expect(resultado.errores).toContain(MENSAJES.MAYUSCULA);
  });
});

// ─────────────────────────────────────────────────────────────────────
// TU TURNO
//
// Como mínimo tienen que estar:
//
//   VALORES LÍMITE de longitud
//     - 7 caracteres  (uno menos que el mínimo)
//     - 8 caracteres  (mínimo, ya resuelto arriba)
//     - 20 caracteres (máximo)
//     - 21 caracteres (uno más que el máximo)
//
//   PARTICIÓN por cada regla de contenido
//     - sin mayúscula (ya resuelto)
//     - sin número
//     - con espacio (al principio, en el medio y al final: ¿son el mismo caso?)
//
//   ACUMULACIÓN de errores
//     - una contraseña que viole 2 reglas devuelve 2 errores
//     - una contraseña que viole las 4 reglas devuelve 4 errores
//
//   CASOS DE LA VIDA REAL
//     - cadena vacía
//     - null / undefined
//     - un número en lugar de un string
//     - una contraseña con ñ o acentos
// ─────────────────────────────────────────────────────────────────────

describe("validarPassword - valores límite de longitud", () => {
  test("acepta una contraseña de 20 caracteres", () =>{

    const contraseña = "Abc12345678910151719"

    const resultado = validarPassword(contraseña);

     expect(resultado).toEqual({ valida: true, errores: [] });
  });

  test("rechaza una contraseña de 7 caracteres",() => {

    const contraseña = "Abc1234";

    const resultado = validarPassword(contraseña);

    expect(resultado).toEqual({ valida: false, errores: [MENSAJES.LONGITUD]})

  });

  test("rechaza una contraseña de 21 caracteres",() => {

    const contraseña = "Abc123Abc123Abc123123";

    const resultado = validarPassword(contraseña);

    expect(resultado).toEqual({ valida: false, errores: [MENSAJES.LONGITUD]})
  });
});

describe("validarPassword - reglas de contenido", () => {
  test("rechaza una contraseña sin números", () => {
    const contraseña = "Abcabcde"

    const resultado = validarPassword(contraseña);

    expect(resultado.valida).toBe(false);
    expect(resultado.errores).toContain(MENSAJES.NUMERO);
  });

  test("rechaza una contraseña con un espacio al principio", () => {
    const contraseña = " Abc123valida"

    const resultado = validarPassword(contraseña);

    expect(resultado.valida).toBe(false);
    expect(resultado.errores).toContain(MENSAJES.ESPACIOS);
  });
  test("rechaza una contraseña con un espacio en el medio", () => {
    const contraseña = "Abc123 valida"

    const resultado = validarPassword(contraseña);

    expect(resultado.valida).toBe(false);
    expect(resultado.errores).toContain(MENSAJES.ESPACIOS);
  });

  test("rechaza una contraseña con un espacio al final", () => {
    const contraseña = "Abc123valida "

    const resultado = validarPassword(contraseña);

    expect(resultado.valida).toBe(false);
    expect(resultado.errores).toContain(MENSAJES.ESPACIOS);
  });
});

describe("validarPassword - acumulación de errores", () => {

  test("devuelve 2 errores si faltan mayúscula y número", () => {
    const contraseña = "abcacvvalida"

    const resultado = validarPassword(contraseña);

    expect(resultado.valida).toBe(false);
    expect(resultado.errores).toContain(MENSAJES.MAYUSCULA);
    expect(resultado.errores).toContain(MENSAJES.NUMERO);

  });

  test("devuelve 4 errores si viola todas las reglas", () => {
    const contraseña = " l"

    const resultado = validarPassword(contraseña);

    expect(resultado.valida).toBe(false);
    expect(resultado.errores).toContain(MENSAJES.LONGITUD);
    expect(resultado.errores).toContain(MENSAJES.ESPACIOS);
    expect(resultado.errores).toContain(MENSAJES.MAYUSCULA);
    expect(resultado.errores).toContain(MENSAJES.NUMERO);

  }
    
  );
});

describe("validarPassword - entradas inesperadas", () => {
  test("rechaza una cadena vacía sin lanzar excepción", () => {
    const contraseña = ""

    const resultado = validarPassword(contraseña);

    expect(resultado.valida).toBe(false);

  })

  test("rechaza null sin lanzar excepción", () => {
    const contraseña = null

    const resultado = validarPassword(contraseña);

    expect(resultado.valida).toBe(false);
  });

  test("rechaza undefined sin lanzar excepción", () => {
    const contraseña = undefined

    const resultado = validarPassword(contraseña);

    expect(resultado.valida).toBe(false);
  });

  test("rechaza un número sin lanzar excepción",() => {
    const contraseña = 1

    const resultado = validarPassword(contraseña);

    expect(resultado.valida).toBe(false);
  });
});

describe("validarPassword - caracteres del español", () => {
  test("acepta una contraseña con ñ", () => {
    const contraseña = "C0ntraseñavalida"

    const resultado = validarPassword(contraseña);

    expect(resultado.valida).toBe(true);
  });
  test("acepta una contraseña con acentos", () => {
    const contraseña = "C0ntrasénavalida"

    const resultado = validarPassword(contraseña);

    expect(resultado.valida).toBe(true);
  });
});

/*
|
| CASOS EXTRA PARA PRACTICAR (OPCIONALES)
| 
*/

describe("validarPassword - casos extra (opcional)", () => {
  test.todo("acepta una contraseña cuya única mayúscula es acentuada (Á, Ñ)");
  test.todo("rechaza una contraseña con un tab o salto de línea");
});

/* ─────────────────────────────────────────────────────────────────────
   DESAFÍO OPCIONAL
   Reescribí los casos de longitud usando `test.each` con una tabla.
   Fijate cómo la tabla del código queda casi igual a la del documento.
   ───────────────────────────────────────────────────────────────────── */
