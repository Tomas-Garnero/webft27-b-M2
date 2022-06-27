var names = ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"];

var toni = 'toni';
var mati = 'mati';

exports.aux = mati;
exports.name = function name (number) { return names[number]; };
exports.number = function number(name) { return names.indexOf(name); };

// export es un objeto = {aux: mati, name: function, number: function} 

/*
RESUMEN

COMMONJS --> BACK
exportar:
//      module.exports = {a, b, c, d}

importar:
// let importacion = require("./nombredelarchivo") sin destructuring // importacion = {a,b,c,d}
//                                                                      importacion.a
//                                                                      importacion.b
//                                                                      importacion.c
//                                                                      importacion.d
// let {a, b, c, d} = require("./nombredelarchivo") con destructuring

ES6 --> FRONT
expotar:
//     export variable/funcion 
//             Ej: export fucntion sum(a,b) return a+b;
//     export default variable/function (1 solo export default pot archivo)
//             Ej: export default function div(a,b) return a/b;

importar:
// export --> import {sum} from "./nombredelarchivo";
// export default --> import div from "./nombredelarchvio";
// o hacerlo todo junto --> import {sum}, div from "./nombredelarchvio";

*/