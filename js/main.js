const form = document.getElementById('formulario');
let addLinhas = '';

form.addEventListener('submit', function(e){
    e.preventDefault();

    addContato();

});

function addContato() {
    const inputNomecontato = document.getElementById('nome-contato');
    const inputTelcontato = document.getElementById('tel-contato');

let linha = '<tr>' + `<td>${inputNomecontato.value}</td>` + `<td>${inputTelcontato.value}</td>` + '</tr>';

addLinhas += linha;

const corpoTabela = document.querySelector('tfoot');
corpoTabela.innerHTML = addLinhas;

inputNomecontato.value = '';
inputTelcontato.value = '';
}

