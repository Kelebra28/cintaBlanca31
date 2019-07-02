//saber si esta bien linkeado nuestro archivo js
//alert('Hola!')

//valor numerico
// let numerico = 10 
//string

// let texto = "Hola mundo"

//booleanos

// let booleano = true
// let booleano2 = false

//arreglos

// let arreglo = []

// objeto 
// let objeto = {}

//constante

// const perro = 'salchicha'

// + - / * %

//console.log('SI SE PUEDE VER')
let num1 = 10
let num2 = 50

num1 + num2 

// console.log(num1 + num2)

let nombre = 'Ricardo'
let saludo= 'Hola'

// console.log( saludo + ' ' + nombre)

let resultado = num1 + num2

// console.log(resultado)


//let ingresa = prompt('Ingresa tu nombre')

//console.log(ingresa)


//Challenge preguntar al usuario su nombre, cumpleaños y su correo, mostrarlo en 3 consolas diferntes :D


//Preuntar el usuario su año de nacimiento y mostrar su edad 


// let nacimiento = prompt('Ingresa tu año de nacimiento')

//     Number(nacimiento)

//     let edad = 2019 - nacimiento

//     console.log(edad)

// Variables de tipo Arreglo



let persona = ['Ricardo', 'ricardo@ad.com','554565713']

// console.log(persona)
// console.log(persona[1])

//Crear un arreglo de 10 elemento y ver en la consola el 5 y el 9 en la misma consola

// let numeros = [1,2,3,4,5,6,7,8,9,10]

// console.log(numeros[5]+' '+numeros[9])
// console.log(numeros[5],numeros[9])

let arreglo = ['perrito', 'tortuga', 'hipopotamo']

arreglo[3] = 'salchicha'

arreglo.push('Pajarito')

arreglo.pop()


//Borras el ultimo y sumas otros 3

arreglo.pop()

arreglo.push('cocodrilo', 'tiburon', 'castor')
// console.log(arreglo)



// let numeros = [1,2,3,4,5,6,7,8,9,10]

// console.log(numeros)

// numeros.splice(8,1)

// console.log(numeros)



// Variables de tipo objeto 

let objeto = {
    nombre: 'Ricardo',
    direccion: 'Rosario',
    musica: 'Kpop',
    telefono: '55168516874',
    libros: ['La biblia', 'El codigo D'],
    peliculas:{
        terro: 'Anabelle',
        accion: ['Rapidox1000', 'HPx100']
    }
}

console.log(objeto.libros[1])
console.log(objeto.peliculas.accion[0])
