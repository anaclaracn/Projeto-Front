//----------------validação de email------------------//

function validarEmail() {
    var emailInput = window.document.getElementById('email');  //obtem a entrada do email
    var alerta = window.document.getElementById('senha')
    var email = emailInput.value;  //obtem esse valor
    var regex = /(@)/;  //expressão para verificar se o e-mail contém '@'
    var regex2 = /\.(com|br)$/; //verifica se o e-mail contém '.com' ou ".br"

    //se houver, remove a mensagem de aviso existente
    var avisoExistente = document.getElementById('avisoEmailInvalido');
    if (avisoExistente) {
        avisoExistente.parentNode.removeChild(avisoExistente);  //faz com que não fique replicando o mesmo texto
    }

    //se regex ou regex2 retornar false (não encontrar os elementos procurados no email)
    if (!regex.test(email) || !regex2.test(email)) {
        var aviso = document.createElement('p');
        aviso.textContent = "Email inválido";
        aviso.style.color = 'red';
        aviso.id = 'avisoEmailInvalido';
        alerta.parentNode.appendChild(aviso);
    }
}