// if(*condicion*){
//     bloque de codigo en caso de que se cumpla la condicion
// }else{
//     bloque de codigo en caso de que *NodeList* cumpla la condicion
// }

// if(condicion){
//     console.log(':D')
// }else{
//     console.log(':c')
// }

// < > === 

// if('computadora' === 'Computadora'){
//     console.log('Son identicos')
// }else{
//     console.log('Algo anda mal :c')
// }

// if('10' === 10){
//     console.log('Son identicos')
// }else{
//     console.log('Algo anda mal :c')
// }

// //Challenge preguntar su edad
// // Si lo es, entra a bar       7u7
// // Si no lo es, llama a sus papas


// let edad = prompt('Ingresa tu edad')

// Number(edad)

// if(edad >= 18 ){
//     console.log('Puedes entrar')
// }else{
//     console.log('No puedes')
// }

//&& - ||

// let edad = prompt('Imgresa tu edad')

// if(edad < 16   ){
//     console.log('No puedes sacar tu licencia')
// }else if(edad >= 16 || edad === 17){
//     console.log('Puedes sacar tu permiso')
// }else{
//     console.log('Puedes Conducir')
// }

// si mi numero es par : Escribir en la consola *Numero* es par 
// Si mi numero es impar : Escribir en la consola *Numero* es impar   
// Modulo -> % 

// let num = prompt('Ingresa tu numero')

// if (num % 2  === 0 ){
//     console.log('el '+num + ' es Es par')
// }else{
//     console.log('el '+ num + ' es impar')
// }


//Piedra Papel o Tijera

let player1 = prompt('Elige: Piedra, Papel o Tijera')
let player2 = prompt('Elige: Piedra, Papel o Tijera')


if(player1 === player2){
    console.log('Es un empate :|')
}else if(player1 === 'piedra' && player2 === 'tijera' ){
    console.log('Gana player 1')
}else if(player1 === 'papel' && player2 === 'piedra'){
    console.log('Gana player 1')
}else if (player1 === 'tijera' && player2 === 'papel'){
    console.log('Gana player 1')
}else if(player2 === 'piedra' && player1 === 'tijera'){
    console.log('Gana player 2')
}else if(player2 === 'papel' && player1 === 'piedra'){
    console.log('Gana player 2')
}else if(player2 === 'tijera' && player1 === 'papel'){
    console.log('Gana player 2')
}else{
    console.log('No entendi, vulve a intentarlo :C')
}


