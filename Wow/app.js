console.log ('script cargado');
'use strict'


let nodoBotonTodos = document.querySelector ('#botonTodos') 
let nodoBotonHorda = document.querySelector ('#botonHorda');
let nodoBotonAlianza = document.querySelector('#botonAlianza')
let nodoBotonNeutral = document.querySelector ('#botonNeutral')
let listaHorda = document.querySelectorAll('.contenedora__caja.horda');
let listaAlianza = document.querySelectorAll('.contenedora__caja.alianza')
let listaNeutral = document.querySelectorAll('.contenedora__caja.neutral')
console.log (listaNeutral)

nodoBotonTodos.onclick = function(){

    for (let i = 0; i < listaHorda.length; i++){
        listaHorda[i].classList.remove('activo');
    }

    for (let i = 0; i < listaAlianza.length; i++){
        listaAlianza[i].classList.remove ('activo');
    }

    for (let i = 0; i <listaNeutral.length; i++){
        listaNeutral[i].classList.remove ('activo')
    }
}

nodoBotonHorda.addEventListener('click' , function(){

    for (let i = 0; i < listaHorda.length; i++){
        listaHorda[i].classList.remove('activo');
    }

    for (let i = 0; i < listaAlianza.length; i++){
        listaAlianza[i].classList.add ('activo');
    }

    for (let i = 0; i <listaNeutral.length; i++){
        listaNeutral[i].classList.add ('activo')
    }
});

nodoBotonAlianza.addEventListener('click' , function(){

    for (let i = 0; i < listaAlianza.length; i++){
        listaAlianza[i].classList.remove('activo');
    }

    for (let i = 0; i < listaHorda.length; i++){
        listaHorda[i].classList.add ('activo');
    }

    for (let i = 0; i <listaNeutral.length; i++){
        listaNeutral[i].classList.add ('activo');
    }
});


nodoBotonNeutral.addEventListener('click' , function(){

    for (let i = 0; i <listaNeutral.length; i++){
        listaNeutral[i].classList.remove ('activo');
    }  

    for (let i = 0; i < listaHorda.length; i++){
        listaHorda[i].classList.add ('activo');
    }

    for (let i = 0; i < listaAlianza.length; i++){
        listaAlianza[i].classList.add ('activo');
    }
});

let listaImagenes = document.querySelectorAll('.contenedora__caja');
console.log (listaImagenes)

let nodoPopup = document.querySelector ('#popup');


for ( let i = 0; i < listaImagenes.length; i++){
    listaImagenes[i].addEventListener ('click' , function(){

        nodoPopup.classList.toggle('activo')
        console.log( listaImagenes[i] ); 
        
        let nodoImg_seleccionada = listaImagenes[i].querySelector( 'img' );
        console.log( nodoImg_seleccionada )

        let attr_description_data = nodoImg_seleccionada.dataset.description;
        console.log( attr_description_data );

        let nodoImg = document.querySelector( '#popup img' ); 
        
        nodoImg.src = nodoImg_seleccionada.src;

        let nodoP = document.createElement ('p');
        nodoP.classList.add('popup__texto')
        nodoP.innerHTML = attr_description_data;
        nodoPopup.querySelector('div').innerHTML = ""; // esto es para borrar el hijo anterior y repetirlo en cada click, es como cuando vaciamos el imput...
        nodoPopup.querySelector('div').appendChild(nodoP);
        nodoDiv

    })
}

nodoPopup.onclick = function(){
    this.classList.remove ('activo')
}
