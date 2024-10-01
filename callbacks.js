/*
Hoy es tu primer dia en una planta de ensamblaje en la cual se te asignaron tus primeras 5
tareas:
Ejercicio 1: Ensamblar el dispositivo paso a paso
Descripción: Estás ensamblando las primeras tres partes del dispositivo. Cada parte necesita
un tiempo diferente para completarse, y no puedes avanzar al siguiente paso hasta que la parte
anterior esté completamente ensamblada. Debes manejar el ensamblaje de estas partes
usando callbacks para asegurarte de que cada una se haga en el orden correcto.
Instrucciones:
1. Simula el ensamblaje de tres partes del dispositivo, cada una con un tiempo diferente de
ejecución.
2. Usa setTimeout para simular el tiempo necesario para ensamblar cada parte.
3. El ensamblaje de cada parte debe depender de que la anterior haya terminado, usando
callbacks para pasar de una parte a la siguiente.
*/

function ensamblarParte(parte, tiempo, callback) {
    console.log(`Ensamblando parte ${parte}`);
    setTimeout(function() {
        console.log(`Parte ${parte} ensamblada`);
        callback();
    }, tiempo);
}

ensamblarParte(1, 1000, function() {
    ensamblarParte(2, 2000, function() {
        ensamblarParte(3, 1500, function() {
            console.log(`Ensamblaje finalizado`);
        });
    });
});

/*
Ejercicio 2: Solicitar información para ensamblar las piezas)
Descripción: En el proceso de ensamblaje, necesitas pedir a otra sección de la fábrica
información clave sobre las especificaciones de cada parte. Esta información tarda en llegar, y
sólo puedes continuar ensamblando cuando recibas las especificaciones correctas.
Instrucciones:
1. Simula pedir información sobre cada parte del dispositivo y que esta tarda en llegar.
2. Una vez que recibas la información para una parte, debes usarla para continuar
ensamblando la siguiente.
3. Cada parte depende de la información recibida de la anterior, y debes usar callbacks
para manejar las respuestas.
*/

function pedirInformacion(parte, tiempo, callback) {
    console.log("Solicitando información para la parte " + parte + "...");
    setTimeout(function() {
        const informacion = `Especificaciones parte ${parte}`
        console.log(`Información recibida: ${informacion}`);
        callback(informacion);
    }, tiempo);
}

function ensamblarParteConInformacion(parte, informacion, callback) {
    console.log(`Usando ${informacion} para ensamblar parte ${parte}`)
    setTimeout(function() {
        console.log("Parte " + parte + " ensamblada.");
        callback();
    }, 1000);
}

pedirInformacion(1, 1500, function(informacion1) {
    ensamblarParteConInformacion(1, informacion1, function() {
        pedirInformacion(2, 2000, function(informacion2) {
            ensamblarParteConInformacion(2, informacion2, function() {
                pedirInformacion(3, 2500, function(informacion3) {
                    ensamblarParteConInformacion(3, informacion3, function() {
                        console.log("Dispositivo completamente ensamblado.");
                    });
                });
            });
        });
    });
});
  
/*
Ejercicio 3: Obtener manuales de ensamblaje
Descripción: Antes de ensamblar ciertas partes más complejas del dispositivo, necesitas leer
los manuales de ensamblaje. Estos manuales tardan en descargarse y leerse, y debes
obtenerlos en un orden específico para poder continuar.
Instrucciones:
1. Simula la descarga y lectura de tres manuales de ensamblaje, cada uno en un orden
específico.
2. Usa setTimeout para simular el tiempo que tarda en descargarse y leerse cada
manual.
3. Cada manual debe leerse antes de continuar con la lectura del siguiente, utilizando
callbacks para controlar el flujo.
*/

function obtenerManual(manual, tiempo, callback) {
    console.log(`Obteniendo manual ${manual}`);
    setTimeout(function() {
      console.log(`Manual ${manual} leido.`);
      callback();
    }, tiempo);
}
  
obtenerManual(1, 2000, function() {
    obtenerManual(2, 3000, function() {
        obtenerManual(3, 2500, function() {
            console.log(`Todos los manuales fueron leidos.`);
        });
    });
});

/*
Ejercicio 4: Problemas en el ensamblaje
Descripción: Durante el ensamblaje de algunas partes del dispositivo, existe una posibilidad
de que una de ellas no se ensamble correctamente. Si esto sucede, debes detener el proceso y
reportar el error.
Instrucciones:
1. Simula el ensamblaje de varias partes del dispositivo.
2. Para cada parte, incluye una probabilidad de fallo (por ejemplo, usando Math.random).
3. Si ocurre un fallo, el proceso de ensamblaje debe detenerse y el error debe ser
manejado apropiadamente usando callbacks.
4. Si no ocurre un fallo, el ensamblaje debe continuar normalmente hasta que todas las
partes estén ensambladas.
*/

function ensamblarParteConFallo(parte, tiempo, callback) {
    console.log(`Intentando ensamblar parte ${parte}`);
    setTimeout(function() {
        let fallo = Math.random() < 0.3;
        if (fallo) {
            console.log(`Error: la parte ${parte} no se ensambló correctamente.`);
            return
        }
        console.log(`Parte ${parte} ensamblada correctamente.`);
        callback();
    }, tiempo);
}
  
ensamblarParteConFallo(1, 1000, function() {
    ensamblarParteConFallo(2, 2000, function() {
        ensamblarParteConFallo(3, 1500, function() {
            console.log(`Dispositivo ensamblado con éxito.`);
        });
    })
});
  
/*
Ejercicio 5: Ensamblaje complejo
Descripción: Estás en la parte final del ensamblaje del dispositivo, donde cada paso es más
complicado y depende completamente del anterior. El proceso se vuelve cada vez más difícil de
manejar a medida que avanza, lo que genera una estructura compleja de callbacks anidados.
Instrucciones:
1. Simula el ensamblaje de varias partes del dispositivo, cada una con diferentes tiempos
de ejecución.
2. Usa callbacks para manejar cada paso del ensamblaje, de modo que los pasos se
vayan ejecutando uno tras otro, en secuencia.
3. A medida que avanzas en el ensamblaje, observa cómo los callbacks se anidan y se
vuelven difíciles de manejar, creando lo que llamamos un "callback hell".
*/

console.log(`Ejercicio 5`)
function ensamblarParteCompleja(parte, tiempo, callback) {
    console.log(`Ensamblando parte compleja ${parte}`);
    setTimeout(function() {
        console.log(`Parte compleja ${parte} ensamblada.`);
        callback();
    }, tiempo);
}

ensamblarParteCompleja(1, 1000, function() {
    ensamblarParteCompleja(2, 2000, function() {
        ensamblarParteCompleja(3, 1500, function() {
            ensamblarParteCompleja(4, 2500, function() {
                ensamblarParteCompleja(5, 3000, function() {
                    console.log(`Ensamblaje complejo finalizado.`);
                });
            });
        });
    });
});
