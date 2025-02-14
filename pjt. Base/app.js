let listaNumSorte = []; //Lista vazia
let numLimite = 10;
let numeroSecreto = gerarNumAleatorio();
let tentativas=1;
//Função COM parametro e COM retorno
function exibirTexto(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML=texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

function exibirMensagemInicial(){
    exibirTexto('h1', 'Jogo do número secreto');
    exibirTexto('p', 'Escolha um número entre 1 e 10');
}
exibirMensagemInicial();

//Função sem parametro e sem retorno
function verificarChute() {
    let chute = document.querySelector('input').value;
    //console.log(chute == numeroSecreto); //expressão boolean para ver se o chute é igual ao num secreto.

    if (chute==numeroSecreto) {
        exibirTexto('h1', 'Acertou!');
        let palavraTentativa= tentativas > 1 ? 'tentativas' : 'tentativas';
        let mensagemTentativas=`Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`;
    exibirTexto('p',mensagemTentativas);
    document.getElementById('reiniciar').removeAttribute('disabled');

    } else {
        if(chute > numeroSecreto) {
            exibirTexto('p','O número secreto é menor.');
        } else {
            exibirTexto('p', 'O número secreto é Maior');
        }
        tentativas++;
        limparCampo();
    }
    
    
}
//Função sem paremetro e COM retorno
function gerarNumAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numLimite + 1 );
    let qtElemento = listaNumSorte.length;
    if (qtElemento == numLimite) {
        listaNumSorte = [];
    }


    //lincludes = verifica se o item ja foi iserido na lista
    if (listaNumSorte.includes(numeroEscolhido)) {
        return gerarNumAleatorio();
    } else {
        listaNumSorte.push(numeroEscolhido);
        console.log(listaNumSorte);
        return numeroEscolhido;
    }
}

function limparCampo() {
    chute=document.querySelector('input');
    chute.value='';
}

function reinciarJogo() {
    numeroSecreto=gerarNumAleatorio();
    limparCampo();
    tentativas=1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled',true);

}