// 1. Escribe un comentario en una linea. 

// Esto es un comentario de una linea

// 2. Escribe un comentario en varias lineas. 

/* 
Esto es 
un comentario
en varias lineas
*/ 

// 3. Declare variables con valores asociados a todos los datos de tipo primitivos
let direccion = "Pastores, Sac. Aldea Barrio La Cruz"
let edad = 20
let estatura = 1.71
let isEngineer = true
let BigInt = 12345678900987544321n
let nullValue = null
let undefinedValue
console.log(undefinedValue)
let mySymbol = Symbol("mysymbol")

// 4. Imprime por consola el valor de todas las variables
console.log(direccion)
console.log(edad)
console.log(estatura)
console.log(isEngineer)
console.log(BigInt)
console.log(nullValue)
console.log(undefinedValue)
console.log(mySymbol) 

// 5. Imprime por consola el tipo de dato de todas la variables
console.log(typeof direccion)       
console.log(typeof edad)            
console.log(typeof estatura)        
console.log(typeof isEngineer)      
console.log(typeof BigInt)        
console.log(typeof nullValue)       
console.log(typeof undefinedValue)  
console.log(typeof mySymbol)       

// 6. Modifica los valores de las variables por otros del mismo tipo
direccion = "Ciudad de Guatemala"          
edad = 21                                 
estatura = 1.75                            
isEngineer = false                         
myBigInt = 98765432109876543210n           
nullValue = null                          
undefinedValue = undefined                 
mySymbol = Symbol("otroSymbol")    

// 7. Modifica los valores de las variables por otros de distinto tipo
direccion = 12345                  
edad = "veintiuno"                 
estatura = true                 
isEngineer = "sí"                 
myBigInt = 100                     
nullValue = "ya no soy null"       
undefinedValue = 3.14             
mySymbol = "ahora soy texto"     

// 8. Declara constantes con valores asociados a todos los tipos de datos primitivos
const direccionConst = "Ciudad de Guatemala"  
const edadConst = 20                            
const estaturaConst = 1.71                   
const isEngineerConst = true                     
const myBigIntConst = 12345678900987544321n      
const nullValueConst = null                  
const undefinedValueConst = undefined          
const mySymbolConst = Symbol("mysymbolConst")   

// 9. Modifica los valores de las constantes
direccionConst = "Antigua Guatemala"      
edadConst = 21                            
estaturaConst = 1.75                      
isEngineerConst = false                   
myBigIntConst = 98765432109876543210n     
nullValueConst = "algo"                  
undefinedValueConst = 5                   
mySymbolConst = Symbol("otro")           

//10. Comenta las líneas que produzcan algún tipo de error al ejecutarse
/*
direccionConst = "Antigua Guatemala"      
edadConst = 21                            
estaturaConst = 1.75                      
isEngineerConst = false                   
myBigIntConst = 98765432109876543210n     
nullValueConst = "algo"                  
undefinedValueConst = 5                   
mySymbolConst = Symbol("otro")  
*/

// En todas da error por que es const

