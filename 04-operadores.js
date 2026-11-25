
// Operadores Arimeticos

let a = 20
let b = 10

console.log(a + b) // Suma
console.log(a - b) // Resta
console.log(a * b) // Multiplicacion
console.log(a / b) // Division
console.log(a % b) // Modulo
console.log(a ** b) // Exponente

a++ // Incremento
console.log(a) 
a-- // Decremento
console.log(a) 


// Operdares de asignacion
// "Asignar" es guardar algo en una cajita, estos atajos sirven para cambiar lo que hay dentro de la cajita.

let myVariable = 2 
console.log(myVariable) 

myVariable += 2 
console.log(myVariable) 

myVariable -= 2 
myVariable == 2 
myVariable /= 2 
myVariable %= 2 
myVariable **= 2 


// Operadores de comparacion
// Sirven para HACER PREGUNTAS. La respuesta siempre es "true" (sí, verdadero) o "false" (no, falso).

console.log(a > b) 
console.log(a < b)  
console.log(a >= b)
console.log(a <= b) 
console.log(a == b)  
console.log(a == 5)  
console.log(a == a)  
console.log(a === a)   
console.log(a === b)  
console.log(a === "6")
console.log(a != 6)    
console.log(a !== "6") 

// Comparaciones raras
console.log(1 == false) 
console.log(2 == false)  
console.log(0 == "")    
console.log(0 == '')    
console.log(0 == "Hola") 
console.log(0 === "")    

// null = "aquí no hay nada, a proposito"
console.log(undefined == null)  
console.log(undefined === null) 


// TRUTHY = cosas que JavaScript cuenta como "SI" (true):
//  Todos los numeros, positivos y negativos, MENOS el cero
//  Todos los textos, MENOS el texto vacío
//  El valor true

// FALSY = cosas que JavaScript cuenta como "NO" (false):
//  0 (cero)
//  0n (el cero de los numeros gigantes)
//  null (nada)
//  undefined (sin valor)
//  NaN (significa "No es un numero", como 'hola' * 2)
//  false
//  "" (texto vacío) 

// Operadores logicos 

// and (&&) se deben de complir ambas condiciones
console.log(5 > 10 && 15 > 20)
console.log(5 < 10 && 15 < 20)
console.log(5 < 10 && 15 > 20)
console.log(5 > 10 && 15 > 20 && 40 >= 40)

// or (||) se debe de cumplir al menos una condicion
console.log(5 > 10 || 15 > 20)
console.log(5 < 10 || 15 < 20)
console.log(5 < 10 || 15 > 20)
console.log(5 > 10 || 15 > 20 || 30 > 20)

console.log(5 > 10 && 15 > 20 || 30 < 40)

// not (!)
console.log(!true)
console.log(!false)
console.log(!(5 > 10 && 15 > 20))
console.log(!(5 > 10 || 15 > 20))

// Operadores termarios 
// Se compone de 1.'?' y de 2.':', como un if else "Es como impeccionar la variable, si se cumple o no"
const isReaning = true
isReaning ? console.log("Esta lloviendo!") : console.log("No esta lloviendo!")


