//2 Diferentes cilos for y el while

// for(inicio ; final o limite; secuncia){
//     bloque de codigo 
// }

// let i = 0

// for(i ; i<= 100; i = i + 1 ){
//     // console.log(i)
// }

// for(let e = 10; e <= 50; e = e + 5){
//     console.log(e)
// } 

// empiece en 3 , llegue a 500 y sea de 9 en 9
// empiece en -100 , llegue a 0 y sea de 1 en  1
// empiece en 500 , llegue a 2000 y sea de 100 en 100

//Ciclo de 0 al 100 y que el usuario diga la secuencia

// let ingresa = prompt('Secuencia')
    
// let num = Number(ingresa) 

// for(let i = 0; i <= 100; i = i + num ){
//     console.log(i)
// } 

//------------------------------------------------
// let ingresa = Number(prompt('Secuencia'))

// for(let i = 0; i <= 100; i = i + ingresa ){
//     console.log(i)
// } 

//-----------------------------------------

// let ingresa = prompt('Secuencia')

// for(let i = 0; i <= 100; i = i + parseInt(ingresa) ){
//     console.log(i)
// }

// for(let i = 1; i <= 100; i++){
//     if(i % 3 === 0 && i % 5 === 0){
//         console.log(i + ' FizzBuzz')
//     }else if(i % 3 === 0){
//         console.log(i + ' Fizz')
//     }else if(i % 5 === 0){
//         console.log(i + ' Buzz')
//     }else{
//         console.log(i)
//     }
// }


// let array = [ "a","b", "c", "d","f","g","h","i","j"]

// //  console.log(array.length)
// for(let i = 0 ; i < array.length; i++){
//     console.log(array[i])
// }

//Hacer las tablas de multiplicar de 1-10

//Ejemplo 1x1=1
// 1x2=2
// 1x3=3
// 5x5=25


// 1x2=2
// 1x3=3

// for(let i = 1; i <=10; i++){
//     for(let e = 1; e <=1; e++){
//         console.log(i + " x "+ e + " = " + i*e)
//     }
// }

// Factorial

let num = 1


let numero = prompt('Ingresa tu numero')


for(let i = 1; i<=numero;i++){
    console.log(num = num * i)
}
console.log(num)

