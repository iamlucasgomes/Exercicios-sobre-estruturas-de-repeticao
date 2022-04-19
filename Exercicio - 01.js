// 1. Crie um algoritmo que, dado um número informado pelo usuário, imprima a tabuada
// dele de 1 a 10. Use o formato de apresentação (considerando que o usuário informou
// o número 5):
// 5 x 1 = 5
// 5 x 2 = 10
// ...

function tabuadaMultiplicacao(multiplicador) {
  //	criei a função que vai receber 1 parâmetro, que deve ser o numero que vai ser multiplicado

  var numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; // aqui a variável numeros recebeu a sequencia númerica de 1 a 10
  var resultado = []; // criei um array vazio na variável resultado, onde vamos atribuir o resultado da multiplicação
  for (var indice = 0; indice < numeros.length; indice++) {
    // usei uma estrutura de repetição onde vamos repetir a operação abaixo ate o limite determinado por numeros.length
    resultado.push(numeros[indice] * multiplicador); // usei o método .push para adicionar o resultado da multiplicação de numeros com o multiplicador na array resultado
    console.log(
      multiplicador + ' x ' + numeros[indice] + ' = ' + resultado[indice]
    ); // usei o console.log concatenando o simbolo de multiplicação e de igual em forma de String para ter uma melhor apresentação do resultado
  }
}

tabuadaMultiplicacao(5); //  usando o formato de apresentação coloquei a chamada da função com o multiplicador no valor de 5
// '5 x 1 = 5'
// '5 x 2 = 10'
// '5 x 3 = 15'
// '5 x 4 = 20'
// '5 x 5 = 25'
// '5 x 6 = 30'
// '5 x 7 = 35'
// '5 x 8 = 40'
// '5 x 9 = 45'
// '5 x 10 = 50'