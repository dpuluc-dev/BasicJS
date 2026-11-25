// 1. Crea una variable para cada operacion aritmetica 
   
 let a = 10
 let b = 15

 let suma = (a + b)
 console.log(suma)
 let resta = (a - b)
 console.log(resta)
 let multiplicacion = (a * b)
 console.log(multiplicacion)
 let division = (a / b)
 console.log(division)
 let modulo = (a % b)
 console.log(modulo)
 let exponente = (a ** b)
 console.log(exponente)

// 2. Crea una variable para cada tipo de operacion de asignacion, que haga uso
// de las variables utilizadas para las operaciones aritmeticas

let sum1 = (a += b)
console.log(sum1)
let res1 = (a -= b)
console.log(res1)
let mult1 = (a *= b)
console.log(mult1)
let dev1 = (a /= b)
console.log(dev1)
let mod = (a %= b)
console.log(mod)
let expon = (a **= b)
console.log(expon)

// 3. Imprime 5 comparaciones verdades con diferente operador de asignacion

// Reiniciomos a y b para que no tenga un valor raro

a = 10
b = 15 
console.log(a < b)
console.log(a <= b)
console.log(a != b)
console.log(a !== b)
console.log(a == 10)


// 4. Imprime 5 comparaciones falsas con direferente operador de asignacion


// Reiniciomos a y b para que no tenga un valor raro
a = 10
b = 15 

console.log(a > b)
console.log(a >= b)
console.log(a == b) 
console.log(a ==! b)
console.log(a == 15)

// 5. Utiliza el operador logico and

a = 10
b = 15 
console.log( a < b && b > a)

// 6. Utiliza el operador logico or

a = 10
b = 15 
console.log( a < b || b < a)

// 7. combina ambos operadores logicos

a = 10
b = 15 
console.log( a < b && b > a || a === b)

// 8. Aniade alguna negacion

a = 10
b = 15 
console.log( a != b && a > b) 
console.log(!( a == b ))

// 9. Utiliza el operador termario 

const isStudent = true
isStudent ? console.log("El es un estudiante") : console.log("El no es un estudiante")

// 10. combina operdadores aritmeticos, de comparacion y logicos
a = 10
b = 15

// (aritmético) a + b = 25 → (comparación) 25 > 20 → (lógico) && y 
console.log((a + b > 20) && (a != b))   // true && true → true

// (aritmético) a * 2 = 20 → (comparación) 20 === 20 → (lógico) ||
console.log((a * 2 === 20) || (b < 5))  // true || false → true

// (aritmético) b - a = 5 → (comparación) 5 > 10 → (lógico) !
console.log(!(b - a > 10))              // !(false) → true
