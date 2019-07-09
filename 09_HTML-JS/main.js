//document hace referencia a mi archivo html y lo jalo con getElementById
let etiqueta = document.getElementById('etiqueta')
let texto = document.getElementById('texto')
let input = document.getElementById('input')
let boton = document.getElementById('boton')
//console.log(texto)
//console.log(input)

//innetHTMl pinta el nuevo valor en mi archivo html

// etiqueta.innerHTML = 'Es un nuevo saludo'
// texto.innerHTML= 'Es un nuevo texto '

const cambiar = () =>{

etiqueta.innerHTML = 'Es un nuevo saludo'
texto.innerHTML= 'Es un nuevo texto '

}

boton.addEventListener('click',cambiar)