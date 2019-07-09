let titulo = document.getElementById('titulo')
let subtitulo = document.getElementById('subtitulo')
let boton = document.getElementById('boton')
let input = document.getElementById('input')
let mostrar = document.getElementById('mostrar')

const cambiar = () =>{

    titulo.innerHTML = "Estoy cambiando por una funcion :D"

    subtitulo.innerHTML = "Soy el jefe xd"
}

const mostrarInput = () =>{

     let texto = input.value
        mostrar.innerHTML = texto

}

boton.addEventListener('click', mostrarInput)
boton.addEventListener('click',cambiar)

//titulo.innerHTML = 'Soy el titulo cambiado'

