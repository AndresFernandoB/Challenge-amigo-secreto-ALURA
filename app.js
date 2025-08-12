// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaAmigoSecreto = [];
let cantidadAmigos = 0;

function agregarAmigo() {
    let nombreAmigo = document.getElementById('amigo').value;
    document.getElementById('amigo').value = ''
    listaAmigoSecreto.push(nombreAmigo);
    console.log(listaAmigoSecreto,listaAmigoSecreto.length);
}

function sortearAmigo() {
    let indice = Math.floor(Math.random()*listaAmigoSecreto.length);
    console.log(listaAmigoSecreto[indice]);
}