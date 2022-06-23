// LET VS CONST VS VAR
// Let - block scope, no tiene hoisting
// Const - es inmutable, no tiene hoisting
// Var - hoisting

/*
const nombre = "Tomas";
nombre = "Felipe";
// NO SE PUEDE!, porque estoy intentando redefinir un valor constante
*/

/*
const arreglo = [];
arreglo = [1,2,3];
// NO SE PUEDE!, porque estoy intentando redefinir un valor constante
arreglo.push(1);
arreglo.push(2);
arreglo.push(3);
console.log(arreglo);
// SI SE PUEDE!, porque estoy modificando un valor constante o el valor actual
*/

/*
const obj = {};
obj = {nombre: "Tomas"};
// NO SE PUEDE!, porque estoy intentando redefinir un valor constante
obj.nombre = "Tomas";
console.log(obj);
// SI SE PUEDE!, porque estoy modificando un valor constante o el valor actual

const obj1 = {nombre: "Tomas"};
if (obj === obj1) console.log("true");
else console.log("false");
// FALSE!, porque son dos posiciones de memoria distintas

if (obj.nombre === obj1.nombre) console.log("true name");
else console.log("false name");
// TRUE, porque ahora si estoy comparando el valor que tienen en la propiedad nombre

if (obj == obj1) console.log("true");
else console.log("false");
// FALSE!, porque sigue comparando dos posiciones de memoria distintas
*/

/*
for (let i = 0; i < 5; i++) {
    console.log(i);
}
console.log(i);
// NO FUNCIONA, porque el scope de let nace y muere dentro del bloque donde se declara

let sum = 0;
for (let i = 0; i < 5; i++) {
    var unavariable = "variable con var";
    let otravariable = "variable con let";
    sum += i;
    function hola() {
        var a = 5;
    }
}
console.log(sum);   // SI! Me muestra la suma porque pertenece a un scope fuera del for
console.log(unavariable);   // SI! Ya que var tiene un alcance sobre la funcion que se esta ejecutando y en 
este caso se esta ejecutando en el contexto global
console.log(otravariable);   // NO! porque esta definida dentro del bloque for
console.log(a);   // NO! porque hasta que no invoque a la funcion hola a no existe (tendria que invocar hola dentro
de la funcion sino tampoco funcionaria)
*/

//-----------------------------------------------------------------------------------------------------------------

// ARROWS FUNCTION

/*
function f1() {
    console.log("f1");
}
f1();

// Los parentesis pasan a ser la primer parte de la funcion. Las llaves y lo que esta dentro (el cuerpo) 
// pasan a ser =>. Luego se ponen las llaves y dentro de ellas el cuerpo de la funcion. Por ultimo se invoca

let f1b = () => {console.log("f1")}         // se puede sacar las {} y sigue funcionando 
let f1b = () => console.log("f1")
let f1b = () => "f1"                        // implicitamente hay un return
{() => console.log("f1")};                  // para autoinvocar funciones
f1b();

function f3(a) {
    return a + 3;
}
b = f3(3);   // 6

let f4 = (a) => a + 3;
let c = f4(3);   // 6

function f5(a, b) {
    return a + b;
}
b = f5 (3, 3);   // 6

let f6 = (a,b) => {console.log(a, b); return a + b;}
console.log(f6(3, 3));

// EN RESUMEN 
let nombredelafuncion = (parametros) => {cuerpo de la funcion como cualquier funcion normal}

// si no quiero ponerle nombre y la quiero invocar en el momento
{() => console.log("hola")};

// si quiero pasarle un unico parametro, puedo usar los ()
let a = a => a;
let a = (a) => a;
let a = (a) => {return a};
let a = a => {return a};

// si no recibo parametros, si o si debo colocar los ()
let b = () => 2;
let b = () => {return 2};

// si tengo mas de un parametro
let c = (a, b) => a + b;
let c = (a, b) => {return a + b};

let array = [4, 5, 6, 7];
let newarray = array.map(e => e + 1);   // [5, 6, 7, 8]
// es lo mismo que hacer
let newarray = array.map(function(e) {
    return e + 1;
});

// THIS
function myName(){
    return this.name;
}
myName();   // this --> global!!

var bob = {
    _name: "Bob",
    _friends: [],
    printFriends() {
        this._friends.forEach(f =>
            console.log(this._name + " knows " + f));
    }
}
*/
//---------------------------------------------------------------------------------------------------------------

// CLASS

/*
function ToDo(description) {
    this.description = description;
    this.complete = false;
}
let todo = new ToDo("comprar tomate");   // todo = {description: "comprar tomate", complete: false}
ToDo.prototype.completeToDo = () => {
    this.complete = true;
}
todo.completeToDo();   // todo = {description: "comprar tomate", complete: true}

class ToDo {
    constructor(description) {
        this.description = description;
        this.complete = false;
    }

    completeToDo() {
        this.complete = true;
    }
}

class Auto {
    constructor(color, motor) {
        this.color = color;
        this.motor = motor;
    }
    arrancar() {
        // el auto comienza a funcionar
    }
    apagar() {
        // el auto se apaga
    }
}

class Ferrari extends Auto {
    constructor(color, motor, year) {
        super(color, motor);   // estoy invocando al constructor de auto!
        this.year = year;
        this.speed = 300;
    }
}
let ferrari = new Ferrari("rojo", "v8", 2021);
ferrari.arrancar();
ferrari.apagar();
*/
//----------------------------------------------------------------------------------------------------------------

// OBJECT LITERALS

/*
let obj = {
    propiedas: 1,
    nombre: "Tomas"
}

// Si quiero retornar un objeto....      .... se puede hacer esto

function hola(nombre, propiedad){        function hola(nombre, propiedad){
    return {                                 return {
        nombre: nombre,                          nombre,
        propiedad: propiedad                     propiedad
    }                                        }
}                                        }
let m = hola("Tomas", 1);
console.log(m);   // 
//-----------------------------------------------------------------------------------------------------------------

// TEMPLATE STRINGS

/*
// Se utilizan comillas invertidas

let nombre = "Tomas";
console.log("Hola " + nombre);

console.log(`Hola ${nombre} mucho gusto
se puede hacer enter
Joyaaa`);
*/
//-----------------------------------------------------------------------------------------------------------------

// DESTRUCTURING

/*
// Quiero hacer esto pero en una sola linea....          
let arr = [1,2,3,4,5];
let a = 1;
let b = 2;
let c = 3;
let d = 4;
let e = 5;

// Se hace asi...
let [g,j,g,k,l] = arr;
let g = 1;
let j = 2;
let h = 3;
let k = 4;
let l = 5;
console.log(g,j,h,k,l)

function f9() {
    return [6,7,8,9];
}
let respuesta = f9();     // [6,7,8,9]
let [z,x,v,c] = f9();
console.log(respuesta);   // [6,7,8,9]
console.log(z,x,v,c);     // 6 7 8 9


let obj2 = {
    nombre: "Tomas",
    edad: 27,
    ciudad: CBA
}
let {nombre, edad , ciudad} = obj2;
// nombre- "Tomas"
// edad - 27
// ciudad - CBA
console.log(nombre, edad, ciudad);
*/
//----------------------------------------------------------------------------------------------------------------

// DEFAULT + REST + SPREAD

/*
// Default
function f(x, y=12) {           // si no se le pasa pone y=12 por default
    // y is 12 if not passed (or passed as undefined)
    return x + y;
}
f(3) == 15

// Rest
function f(x, ...y) {           // pueden venir muchos elementos pero noc cuantos
    // y is an Array
    return x * y.length;
}
console.log(f(3, "hello", true, 5, 6, "holaaaaa"));  // 15

// Spread
function f(x, y, z) {
    return x + y + z;
}
// Pass each elem of array as argument
console.log(f(...[1,2,3]));   // 6
// x = 1, y = 2, z = 3

// Ignora los demas elementos
console.log(f(...[1,2,3,4,5,6,7]));  // 6
// x = 1, y = 2, z = 3
*/
//----------------------------------------------------------------------------------------------------------------