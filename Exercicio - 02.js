// 2. Modifique o algoritmo anterior, de maneira que o usuário também informe o início e o
// fim da tabuada. Por exemplo: usuário solicitando a tabuada do número 6, com início
// em 5 e fim em 8.
// 6 x 5 = 30
// 6 x 6 = 36
// 6 x 7 = 42
// 6 x 8 = 48

function tabuadaMultiplicacao(numeros, multiplicador) {
  //	criei a função que vai receber 2 parâmetros, que deve ser o numero que vai ser multiplicado e a quantidade de vezes que ele vai ser multiplicado

  var resultado = []; // criei um array vazio na variável resultado, onde vamos atribuir o resultado da multiplicação
  for (var indice = 0; indice < numeros.length; indice++) {
    // usei uma estrutura de repetição onde vamos repetir a operação abaixo ate o limite determinado por numeros.length
    resultado.push(numeros[indice] * multiplicador); // usei o método .push para adicionar o resultado da multiplicação de numeros com o multiplicador na array resultado
    console.log(
      numeros[indice] + ' x ' + multiplicador + ' = ' + resultado[indice]
    ); // usei o console.log concatenando o simbolo de multiplicação e de igual em forma de String para ter uma melhor apresentação do resultado
  }
}

tabuadaMultiplicacao([5,6,7,8],6);
// '5 x 6 = 30'
// '6 x 6 = 36'
// '7 x 6 = 42'
// '8 x 6 = 48'