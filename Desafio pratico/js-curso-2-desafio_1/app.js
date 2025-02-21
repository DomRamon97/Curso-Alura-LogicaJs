let titulo = document.querySelector('h1');
titulo = 'Hora do Desafio';



function verClick() {
    console.log('Olá mundo');
}

function alertarLove () {
    alert('Eu amo JS');
}

function verPrompt() {
   let nmPessoa = prompt('Me diga o seu nome.');
   let menssagem = `Olá  ${nmPessoa} !`;
    alert(menssagem);
}

//o número esta sendo fixo por meio do campo número.
function calcularDobro(cdNum) {
    return cdNum * 2;
  }

  //A variavel atribui o valor ao numero e dai o resultado aparece
  let resultadoDobro = calcularDobro(5);
  console.log(resultadoDobro);
  