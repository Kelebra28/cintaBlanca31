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
//card
let card = document.getElementById('card')

let con = document.getElementById('imagenSin')
let sin = document.getElementById('imagenCon')

// let img = document.getElementById('mostrarIm')

// console.log(con)
// console.log(sin)

const accion = () => {

    let textoNombre = inputNombre.value
    let textoTelefono = inputTelefono.value
    let textoPizza =  inputPizza.value
    // let pizzacon = con.value
    let textMayus = textoPizza.toUpperCase()
    console.log(textMayus);

    // if(textMayus === "SI"){
    //     // console.log(":)");
    //     mostrarPizza.innerHTML = pizzacon
    // }else if(textMayus === "NO"){
    //     // console.log(":(");
    //     mostrarPizza.innerHTML = textoPizza
    // }else{
    //     // console.log("Eso no es lo que te pedi");
    //     mostrarPizza.innerHTML = "Eso no es XD"
    // }

    if(textMayus === "SI"){
        con.classList.remove("desaparecer")
    }else if(textMayus === "NO"){
        sin.classList.remove("desaparecer")
    }else{

    }

    // aparecer la card
    card.classList.remove("desaparecer")
    // card.classList.add("color")
    mostrarNombre.innerHTML = textoNombre
    mostrarTelefono.innerHTML = textoTelefono
    // mostrarPizza.innerHTML = textoPizza

}

boton.addEventListener('click', accion)