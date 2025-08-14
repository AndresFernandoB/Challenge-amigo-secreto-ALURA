// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaAmigoSecreto = [];

function limpiar() {
    document.getElementById('amigo').value = ''
}

function agregarAmigo() {
    let nombreAmigo = document.getElementById('amigo').value.trim();
    // Verificación si está vacío o contiene números con operador lógico (or ||) y expresión regular para incluir solo letras a-zA-Z y letras acentuadas À-ÿ
    if (nombreAmigo === '' || !/^[a-zA-ZÀ-ÿñÑ]+$/.test(nombreAmigo)) { 
        alert('El nombre no puede estar vacío ni contener números o caracteres especiales.');
        return;
    }
    if (listaAmigoSecreto.includes(nombreAmigo)){
        alert('Nombre ya incluido en la lista, modifica en nombre.');
        return;
    }
    listaAmigoSecreto.push(nombreAmigo);
    console.log(listaAmigoSecreto);
    mostrarlista();
    limpiar();
}

function mostrarlista() {
    let listaHTML = document.getElementById('listaAmigos');
    listaHTML.innerHTML = '';
    //Creamos los elementos de la lista <li><li>
    listaAmigoSecreto.forEach(nombreAmigo => {
        let nuevaLista = document.createElement('li');
        nuevaLista.textContent = nombreAmigo;
        //Se agrega los elemntos de la lista <li> a la lista<ul><ul>
        listaHTML.appendChild(nuevaLista);
    })
}

function sortearAmigo() {
    limpiar();
    if (listaAmigoSecreto.length == 0){
        alert(`No hay amigos para sortear`);
        return;
    }

    let indice = Math.floor(Math.random()*listaAmigoSecreto.length);
    
    let listaHTML = document.getElementById('listaAmigos');
    listaHTML.innerHTML = '';

    let asignacionAmigo = document.createElement('li');
    asignacionAmigo.textContent = `\u{1F389} \u{1F388}  Tu amigo secreto es: ${listaAmigoSecreto[indice]} \u{1F388} \u{1F389} `;
    listaHTML.appendChild(asignacionAmigo);
    // Limpiamos la lista creada
    listaAmigoSecreto = []; 
}