var a = require('./week.js');
// a = {aux: mati, name: function, number: function} 

console.log(a.aux);  // ? "mati"
console.log(a.name);  // ? function
console.log(a.toni);  // ? ERROR NO LO CONOCE!

console.log(a.name(0));
console.log(a.number("Lunes"));