//Inputs
let inputNombre = document.getElementById('inputNombre')
let inputTelefono = document.getElementById('inputTelefono')
let inputPizza = document.getElementById('inputPizza')
//etiqueta p
let mostrarNombre = document.getElementById('nombre')
let mostrarTelefono = document.getElementById('telefono')
let mostrarPizza = document.getElementById('pizza')
//boton
let boton = document.getElementById('boton')


const accion = () => {

    let textoNombre = inputNombre.value
    let textoTelefono = inputTelefono.value
    let textoPizza =  inputPizza.value

    mostrarNombre.innerHTML = textoNombre
    mostrarTelefono.innerHTML = textoTelefono
    mostrarPizza.innerHTML = textoPizza

}

boton.addEventListener('click', accion)