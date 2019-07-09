//Funciones

// function suma (a,b){

//     console.log( a + b)
// }
// suma(5,6)
// suma(6,6)
// suma(10,10)
// suma(5,suma(10,10))

// function resta (a,b){
//     return a - b
// }

// console.log(resta(10,4))
// console.log(resta(resta(50,20),4))

// console.log()
// alert()
// prompt()
// let a = prompt('Ingresa tu numero')
 
// const areaC = () =>{
 
//     return a*a
// }

// console.log(areaC())

// const areaT = () =>{
//     let a = Number(prompt('Ingresa el lado base'))
//     let b = Number(prompt('Ingresa el lado altura'))

//     return  a * b / 2
// }

// alert(areaT())


// No haga esto 
// alert('No te dejare avanzar perro!')

// for( let i = 1; i <= 100; i++){
//     console.log(i)
// }

// let usuario = prompt("contraseña")
// const password = "gatitos13"

// const login = (a, b) => {
//     if ( a === b) {
//         console.log("Bienvenido")
//     } else {
//         console.log("Contraseña incorrecta")
//     }
// }
// login(usuario, password)


const login = () => {
    let user = prompt("contraseña")
    const password = "gatitos13"
    if (user === password) {
        console.log("Bienvenido")
    } else {
        console.log("Contraseña incorrecta")
    }
}

login()











