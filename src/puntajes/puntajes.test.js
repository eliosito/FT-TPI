import { describe, test, expect } from "vitest";
import {
  calcularPuntaje,
  Medalla,
  bonusPorTiempo,
  podio,
  formatearTiempo,
  validarNombre,
  ERRORES,
} from "./puntajes.js";

/* ═══════════════════════════════════════════════════════════════════
    PRÁCTICA - El ranking de un videojuego

    Son seis ejercicios y un desafío, de más a menos ayuda:
      EJERCICIO 1         te damos los casos          → escribís los tests
      EJERCICIO 2         te damos casi todos         → los dos últimos los pensás vos
      EJERCICIO 3         la función tiene un error   → lo encontrás con un test
      EJERCICIOS 4, 5, 6  no te damos ningún caso     → los elegís vos
      DESAFÍO FINAL       queda un error más          → y no te decimos dónde

    Lo que tiene que hacer cada función está en el comentario que tiene
    arriba, en `puntajes.js`. Leé el comentario, no el código.

    Al final del archivo hay una verificación y seis preguntas.
   ═══════════════════════════════════════════════════════════════════ */

// ─────────────────────────────────────────────────────────────────────
// EJERCICIO 1
// El primer test está resuelto: usalo de modelo.
// Reemplazá cada `test.todo` por un test de verdad.
// ─────────────────────────────────────────────────────────────────────
describe("calcularPuntaje", () => {
  test("suma 10 puntos por cada acierto cuando no hay errores", () => {
    // Arrange
    const aciertos = 3;
    const errores = 0;

    // Act
    const resultado = calcularPuntaje(aciertos, errores);

    // Assert
    expect(resultado).toBe(30);
  });

  test("resta 5 puntos por cada error", () => {
    const aciertos = 1;
    const errores = 5;

    const resultado = calcularPuntaje(aciertos, errores)

    expect(resultado).toBe(0)
  });
  test("devuelve 0 cuando no hay aciertos ni errores", () => {
    const aciertos = 0;
    const errores = 0;

    const resultado = calcularPuntaje(aciertos, errores)

    expect(resultado).toBe(0)

  });
  test("devuelve 0 cuando los errores restan justo lo mismo que suman los aciertos", () => {
    const aciertos = 1;
    const errores = 2;

    const resultado = calcularPuntaje(aciertos, errores)

    expect(resultado).toBe(0)
  });

  test("develve 0, y no un número negativo, cuando los errores restan más de lo que suman los aciertos", () => {
    const aciertos = 1;
    const errores = 5;

    const resultado = calcularPuntaje(aciertos, errores)

    expect(resultado).toBe(0)
  }
  );
});

// ─────────────────────────────────────────────────────────────────────
// EJERCICIO 2
// Mirá bien QUÉ puntajes se eligieron: no son cualquiera.
// Hay un caso "del medio" de cada medalla, y después los puntajes
// donde la medalla CAMBIA: el último de una y el primero de la siguiente.
// ─────────────────────────────────────────────────────────────────────
describe("medalla", () => {
  test("devuelve 'bronce' con un puntaje de 250", () => {
    expect(Medalla(250)).toBe("bronce");
  });

  test("devuelve 'sin medalla' con un puntaje de 50", () => {
    const puntaje = 50

    const medalla = Medalla(puntaje);

    expect(medalla).toBe("sin medalla")

  });

  test("devuelve 'plata' con un puntaje de 700", () => {
    const puntaje = 700;

    const medalla = Medalla(puntaje)

    expect(medalla).toBe("plata");
  });

  test("devuelve 'oro' con un puntaje de 3000", () => {
    const puntaje = 3000;

    const medalla = Medalla(puntaje)

    expect(medalla).toBe("oro");
  });

  test("devuelve 'sin medalla' con 99 puntos (le falta uno para bronce)", () => {
    const puntaje = 99;
    const medalla = Medalla(puntaje)

    expect(medalla).toBe("sin medalla");
  });
});

test("devuelve 'bronce' con exactamente 100 puntos", () => {
  const puntaje = 100;
  const medalla = Medalla(puntaje)

  expect(medalla).toBe("bronce");
});

test("devuelve 'bronce' con 499 puntos (le falta uno para plata)", () => {
  const puntaje = 499;
  const medalla = Medalla(puntaje)

  expect(medalla).toBe("bronce");

});
test("devuelve 'plata' con exactamente 500 puntos", () => {
  const puntaje = 500;
  const medalla = Medalla(puntaje)

  expect(medalla).toBe("plata");

});


// Falta el cambio de plata a oro.
// Escribí vos los dos tests, con su nombre, siguiendo el modelo de arriba.

test("devuelve 'plata' con 999 puntos (le falta uno para plata)", () => {
  const puntaje = 999
  const medalla = Medalla(puntaje)

  expect(medalla).toBe("plata")
})

test("devuelve 'oro' con exactamente 1000 puntos", () => {
  const puntaje = 1000
  const medalla = Medalla(puntaje)

  expect(medalla).toBe("oro")
})

// ─────────────────────────────────────────────────────────────────────
// EJERCICIO 3 - Cazar el error
// La función `bonusPorTiempo` tiene UN error: en algún caso no hace lo
// que dice su comentario. No te decimos en cuál.
//
//   1. Escribí los tests que te parezcan necesarios (al menos 4 más).
//      Elegí los valores como en el ejercicio 2.
//   2. Si están todos en verde, todavía no lo encontraste: te falta un caso.
//   3. Cuando uno se ponga en ROJO, antes de tocar nada preguntate:
//      ¿está mal mi test o está mal el código?
//      El que manda es el comentario de la función.
//   4. Recién ahí arreglá `puntajes.js` y mirá cómo el test pasa a verde.
// ─────────────────────────────────────────────────────────────────────
describe("bonusPorTiempo", () => {
  test("da 500 puntos de bonus si el nivel se termina en 30 segundos", () => {
    expect(bonusPorTiempo(30)).toBe(500);
  });

  // Seguí vos.

  test("da 500 puntos de bonus si el nivel se termina en 60 segundos", () => {
    const tiempo = 60;

    const bonus = bonusPorTiempo(tiempo)

    expect(bonus).toBe(500)
  })

  test("da 200 puntos de bonus si el nivel se termina en 61 segundos", () => {
    const tiempo = 61;

    const bonus = bonusPorTiempo(tiempo)

    expect(bonus).toBe(200)
  })

  test("da 200 puntos de bonus si el nivel se termina en 120 segundos", () => {
    const tiempo = 120;

    const bonus = bonusPorTiempo(tiempo)

    expect(bonus).toBe(200)
  })

  test("da 0 puntos de bonus si el nivel se termina pasando los 120 segundos", () => {
    const tiempo = 121;

    const bonus = bonusPorTiempo(tiempo)

    expect(bonus).toBe(0)
  })



});

// ─────────────────────────────────────────────────────────────────────
// EJERCICIO 4
// Acá el Arrange ya no es un número suelto: hay que armar la lista.
// Y como la función devuelve un array, se compara con `toEqual`.
//
// Escribí al menos 4 tests más. Preguntas para elegir los casos:
//   - ¿Y si hay exactamente 3 jugadores?
//   - ¿Y si hay menos de 3?
//   - ¿Y si la lista está vacía?
//   - ¿Y si el que más puntos tiene está último en la lista?
//   - ¿Y si...? (uno que se te ocurra a vos)
// ─────────────────────────────────────────────────────────────────────
describe("podio", () => {
  test("devuelve los nombres de los 3 jugadores con más puntos, de mayor a menor", () => {
    // Arrange
    const jugadores = [
      { nombre: "Ana", puntos: 300 },
      { nombre: "Beto", puntos: 900 },
      { nombre: "Caro", puntos: 500 },
      { nombre: "Dani", puntos: 100 },
    ];

    // Act
    const resultado = podio(jugadores);

    // Assert
    expect(resultado).toEqual(["Beto", "Caro", "Ana"]);
  });

  test("si solo son 3 jugadores devuelve los nombres ordenados por cantidad de puntos de mayor a menor" , () => {
    const jugadores = [
      { nombre: "Ana", puntos: 300 },
      { nombre: "Beto", puntos: 900 },
      { nombre: "Caro", puntos: 500 },
    ];

    const resultado = podio(jugadores);

    expect(resultado).toEqual(["Beto", "Caro", "Ana"]);
  })

    test("si hay menos de 3 jugadores, devuelve los nombres ordenados por cantidad de puntos de mayor a menor" , () => {
    const jugadores = [
      { nombre: "Beto", puntos: 900 },
      { nombre: "Caro", puntos: 500 },
    ];

    const resultado = podio(jugadores);

    expect(resultado).toEqual(["Beto", "Caro"]);
  })

    test("si no hay ningun jugador, devuelve un array vacio" , () => {
    const jugadores = [];

    const resultado = podio(jugadores);

    expect(resultado).toEqual([]);
  })

    test("si hay una lista de jugadores, aunque sea el ultimo jugador, lo posiciona en primer lugar si tiene mayor cantidad de puntos" , () => {
    const jugadores = [
      { nombre: "Beto", puntos: 900 },
      { nombre: "Caro", puntos: 1500 },
      { nombre: "Hugo", puntos: 2900 },
      { nombre: "Carolina", puntos: 3500 },
      { nombre: "elio", puntos: 4900 },
      { nombre: "ye", puntos: 5500 },
      { nombre: "wick", puntos: 6900 },
      { nombre: "mc", puntos: 100000 },
    ];

    const resultado = podio(jugadores);

    expect(resultado).toEqual(["mc", "wick", "ye"]);
  })

      test("si hay 2 o mas jugadores con el misma cantidad de puntos los ordena de mayor a menor por su posicion en la lista" , () => {
    const jugadores = [
      { nombre: "Ana", puntos: 300 },
      { nombre: "Beto", puntos: 900 },
      { nombre: "Caro", puntos: 900 },
    ];

    const resultado = podio(jugadores);

    expect(resultado).toEqual(["Beto", "Caro","Ana"]);
  })

});



// ─────────────────────────────────────────────────────────────────────
// EJERCICIO 5
// Escribí al menos 5 tests más. Preguntas para elegir los casos:
//   - ¿Y con 0 segundos?
//   - ¿Y con menos de un minuto?
//   - ¿Y con un minuto justo?
//   - ¿Y cuando sobran menos de 10 segundos?
//   - ¿Y con más de 10 minutos?
// ─────────────────────────────────────────────────────────────────────
describe("formatearTiempo", () => {
  test("devuelve '1:15' cuando pasaron 75 segundos", () => {
    expect(formatearTiempo(75)).toBe("1:15");
  });

  test("devuelve '0:00' cuando pasaron 0 segundos", () => {
    expect(formatearTiempo(0)).toBe("0:00");
  });

  test("devuelve '0:59' cuando pasaron 59 segundos", () => {
    expect(formatearTiempo(59)).toBe("0:59");
  });

  test("devuelve '1:00' cuando pasaron 1 minuto exacto", () => {
    expect(formatearTiempo(60)).toBe("1:00");
  });

  test("devuelve '0:09' cuando pasaron 9 segundos", () => {
    expect(formatearTiempo(9)).toBe("0:09");
  });

  test("devuelve '10:00' cuando pasaron 600 segundos", () => {
    expect(formatearTiempo(600)).toBe("10:00");
  });


  // Seguí vos.
});

// ─────────────────────────────────────────────────────────────────────
// EJERCICIO 6
// Esta función devuelve un objeto, igual que `validarPassword`.
//
// Escribí al menos 6 tests más. Para elegir los casos:
//   - La longitud tiene DOS extremos. ¿Qué nombres probás en cada uno?
//   - Cada regla por separado: un nombre que rompa ESA regla y cumpla
//     las otras dos. Si rompe dos a la vez, no sabés cuál lo rechazó.
//   - ¿Y uno que rompa dos reglas? ¿Cuántos errores tiene que devolver?
//   - ¿Y el nombre vacío?
// ─────────────────────────────────────────────────────────────────────
describe("validarNombre", () => {
  test("acepta un nombre de 6 caracteres que empieza con letra y no tiene espacios", () => {
    // Arrange
    const nombre = "Rayo99";

    // Act
    const resultado = validarNombre(nombre);

    // Assert
    expect(resultado).toEqual({ valido: true, errores: [] });
  });

  test("rechaza un nombre con un espacio en el medio", () => {
    const resultado = validarNombre("Rayo 99");

    expect(resultado.valido).toBe(false);
    expect(resultado.errores).toContain(ERRORES.ESPACIOS);
  });

    test("rechaza un nombre que tenga menos de 3 letras", () => {
    const resultado = validarNombre("Ra");

    expect(resultado.valido).toBe(false);
    expect(resultado.errores).toContain(ERRORES.LONGITUD);
  });

  

    test("rechaza un nombre que tenga mas de 12 letras", () => {
    const resultado = validarNombre("eliositowick1");

    expect(resultado.valido).toBe(false);
    expect(resultado.errores).toContain(ERRORES.LONGITUD);
  });

    test("rechaza un nombre que cumpla una condicion de 3", () => {
    const resultado = validarNombre(" 1sray");

    expect(resultado.valido).toBe(false);
    expect(resultado.errores).toContain(ERRORES.INICIAL);
    expect(resultado.errores).toContain(ERRORES.ESPACIOS);

  });
  
    test("rechaza un nombre que cumpla dos condiciones de 3", () => {
    const resultado = validarNombre(" Ray");

    expect(resultado.valido).toBe(false);
    expect(resultado.errores).toContain(ERRORES.ESPACIOS);

  });

    test("rechaza un nombre vacio", () => {
    const resultado = validarNombre("");

    expect(resultado.valido).toBe(false);


  });
    // error 2
    test("acepta un nombre que tenga 12 letras", () => {
    const resultado = validarNombre("eliositowick");

    expect(resultado.valido).toBe(true);

  });




  // Seguí vos.v
});

/* ═══════════════════════════════════════════════════════════════════
    DESAFÍO FINAL - el segundo error

    En alguna de las funciones de los ejercicios 4, 5 y 6 hay escondido
    UN error más. Esta vez no te decimos en cuál.

    Si tenés todo en verde, todavía no lo encontraste: a alguno de esos
    tres ejercicios le falta un caso. Volvé y agregalo.

    Ojo: un error es cuando la función hace algo DISTINTO de lo que dice
    su comentario. Si el comentario no dice qué pasa en un caso, eso no
    es un error: es una pregunta para anotar (ver la pregunta 6).

    Cuando lo encuentres, lo mismo que en el ejercicio 3: primero el
    test en rojo, después el arreglo en `puntajes.js`.

    ───────────────────────────────────────────────────────────────────
    PREGUNTAS - respondé acá mismo, dentro de este comentario

    1. Ejercicio 3: ¿con qué valor de `segundos` encontraste el error?  60
      ¿Qué devolvía la función?  200   ¿Qué tenía que devolver?  500

    2. ¿Qué cambiaste en `puntajes.js` para arreglarlo?
      Le agregue un = a la condicion ya que tomaba le 60 como 200 puntos

    3. Antes de encontrarlo, ¿cuántos tests de `bonusPorTiempo` tenías en
      verde?  tenia solo 1 ya que estuve controlando uno por uno
      Estaban en verde y el error estaba igual. ¿Por qué no lo detectaban?
      _______________________________________________________

    4. Desafío final: ¿en qué función estaba el segundo error?  validarNombre
      ¿Con qué entrada lo encontraste?  eliositowick
      ¿Qué tiene en común esa entrada con la de lja pregunta 1?
      cumple con un requesito que fue escrito, pero al tener mal el codigo da invalido

    5. Verificación: ¿cuántos tests se pusieron en rojo?  1
      ¿Cuál o cuáles?
      Validar nombre de 12 letras, no lo habia escrito y no me di cuenta del error

    6. Ejercicio 4: si dos jugadores tienen los mismos puntos, ¿cuál de los
      dos va primero en el podio? ¿Lo dice el comentario de la función?
      El comentario de la funcion no lo dice ,asi que lo escribi en el test: si dos o mas
      o mas jugadores tienen el mismo puntaje se los ordena por su posicion en la lista.


   ═══════════════════════════════════════════════════════════════════ */

