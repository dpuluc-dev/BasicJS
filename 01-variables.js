// var: caja vieja. Guardas algo y SÍ lo puedes cambiar, igual que con let.
// En helloWord guardamos "¡Hello, JavaScript!"
var helloWord = "¡Hello, JavaScript!"
console.log(helloWord)   // ¡Hello, JavaScript!

// Aquí guardamos otro valor y se puede, igual que con let.
// El valor anterior se reemplaza por el nuevo.
helloWord = "¡Hello de nuevo, JavaScript!"
console.log(helloWord)   // ¡Hello de nuevo, JavaScript!


// let: caja normal. Guardas algo y SÍ lo puedes cambiar cuando quieras.
// En helloWord2 guardamos "¡Hello, JavaScript 2!"
let helloWord2 = "¡Hello, JavaScript 2!"
console.log(helloWord2)   // ¡Hello, JavaScript 2!

// Aquí guardamos otro valor y esta vez SÍ se puede, porque let lo permite.
// El valor anterior se reemplaza por el nuevo.
helloWord2 = "¡Hello de nuevo, JavaScript 2!"
console.log(helloWord2)   // ¡Hello de nuevo, JavaScript 2! 


// const: caja con candado. Guardas algo y nunca más lo puedes cambiar.
// En helloWord3 guardamos "¡Hello, JavaScript 3!"
const helloWord3 = "¡Hello, JavaScript 3!"
console.log(helloWord3)   // ¡Hello, JavaScript 3!

// Aquí intentamos guardar otro valor, pero el candado no nos deja.
// Esto da ERROR: Assignment to constant variable.
helloWord3 = "¡Hello de nuevo, JavaScript 3!"
console.log(helloWord3)   // esta línea nunca se ejecuta
