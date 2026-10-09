import { sumar } from "./funciones.js"
import {esMayorDeEdad} from "./funciones.js"
import {saludar} from "./funciones.js"

import { describe, it, test, expect } from "vitest";

test("el total es 8", () => {
  const a = 5;
  const b = 3;
  const res = sumar(a, b);

  expect(res).toBe(8);
});
test("el numero es 0", () => {
  const a = 0;
  const res = sumar(a, a);
  expect(res).toBe(0);
});


test("edades 20 y true", () => {
  const edad = 20;
  const res = esMayorDeEdad(edad);

  expect(res).toBe(true);
});
test("edades 17 y false", () => {
  const edad = 17;
  const res = esMayorDeEdad(edad);

  expect(res).toBe(false);
});
test("texto correcto= Hola, Ana!", () => {
  const nom = "Ana";
  const res = saludar(nom);

  expect(res).toBe("Hola, Ana!");
});