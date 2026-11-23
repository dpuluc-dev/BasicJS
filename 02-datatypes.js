// Tipos de datos primitivos

// Cadena de texto (string)
let name = "Daniel Puluc"
let alias = "Daniel"
let correo = "danielpuluc056@gmail.com"

// Número (number)
let edad = 37       // Entero
let altura = 1.71   // Decimal

// Booleanos (boolean)
let isStudent = true
let isTeacher = false

// Undefined: la caja existe pero está vacía
let undefinedValue
console.log(undefinedValue)

// Null: la caja tiene "nada" a propósito
let nullValue = null

// Symbol
let mySymbol = Symbol("mysymbol")

// BigInt: números gigantes
let myBigInt = BigInt("1234567890987654321123456789")
let myBigInt2 = 1234567890098776543212345678890n

// Mostramos los tipos de datos
console.log(typeof name)        // string
console.log(typeof alias)       // string
console.log(typeof edad)        // number
console.log(typeof isStudent)   // boolean
console.log(typeof myBigInt)    // bigint
console.log(typeof myBigInt2)   // bigint
