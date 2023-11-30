//----------------manipulação da tabela------------------//

var table = document.getElementById("table");

//event manipula os eventos ocorridos no HTML
function removerElemento(event) {
    var iconeRemover = event.target;  //retorna o elemento HTML que foi clicado
    var linha = iconeRemover.closest('tr');  //retorna tag "<tr>" mais próxima, assim encontra a linha do ícone
    var indice = linha.rowIndex;  //encontra o índice da linha selecionada
    table.deleteRow(indice);  //exclui a linha com o índice encontrado
}

function adicionarElemento(){
    //cria uma nova linha
    var novaLinha = table.insertRow(-1);
    //-1 indica que a linha será inserida no final da tabela

    //adicionar os campos da nova linha
    var cell1 = novaLinha.insertCell(0);
    var cell2 = novaLinha.insertCell(1);
    var cell3 = novaLinha.insertCell(2);
    var cell4 = novaLinha.insertCell(3);
    var cell5 = novaLinha.insertCell(4);

    //os campos inicializam com "Novo"
    cell1.innerHTML = "Novo";
    cell2.innerHTML = "Novo";
    cell3.innerHTML = "Novo";
    cell4.innerHTML = "Novo";
    
    //adiciona as ações (ícones de editar e remover) 
    cell5.innerHTML = '<img src="imagens/editar.png" alt="logoEditar" onclick="editarElemento(event)"> <img src="imagens/remover.png" alt="logoRemover" onclick="removerElemento(event)">';
}

function editarElemento(event){
    var iconeEditar = event.target;
    var linha = iconeEditar.closest('tr'); 

    //vai rodar para todos os campos da linha (menos o dos ícones)
    for (var i = 0; i < linha.cells.length - 1; i++) {
        var campoAtual = linha.cells[i];

        //cria um elemento input
        var input = document.createElement('input');
        input.type = 'text';
        input.value = campoAtual.textContent; //preenche o input com o texto "antigo"

        //substitui o conteúdo do campo pelo input
        campoAtual.innerHTML = '';
        campoAtual.appendChild(input);
    }

    //cria um novo botão para salvar quando a edição for finalizada
    var botaoSalvar = document.createElement('button');
    botaoSalvar.textContent = 'Salvar';
    botaoSalvar.onclick = function () {
        salvarEdicao(linha);  //chama a função para atualizar os novos valores
    }
    //substitui temporareamente os ícones(edição e remoção) pelo "Salvar"
    linha.cells[linha.cells.length - 1].innerHTML = '';
    linha.cells[linha.cells.length - 1].appendChild(botaoSalvar); 
    
}

function salvarEdicao(linha) {
    //pega os novos valores dos inputs e coloca em um vetor
    var novosValores = [];
    for (var i = 0; i < linha.cells.length - 1; i++) {
        novosValores.push(linha.cells[i].querySelector('input').value);
    }

    //atualiza os campos com os novos valores
    for (var i = 0; i < linha.cells.length - 1; i++) {
        linha.cells[i].textContent = novosValores[i];
    }

    //volta com os botões de editar e remover
    var imagemEditar = document.createElement('img');
    imagemEditar.src = 'imagens/editar.png';
    imagemEditar.alt = 'logoEditar';
    imagemEditar.onclick = function (event) {
        editarElemento(event);
    }
    var imagemRemover = document.createElement('img');
    imagemRemover.src = 'imagens/remover.png';
    imagemRemover.alt = 'logoRemover';
    imagemRemover.onclick = function (event) {
        removerElemento(event);
    }

    linha.cells[linha.cells.length - 1].innerHTML = '';
    linha.cells[linha.cells.length - 1].appendChild(imagemEditar);
    linha.cells[linha.cells.length - 1].appendChild(imagemRemover);
}