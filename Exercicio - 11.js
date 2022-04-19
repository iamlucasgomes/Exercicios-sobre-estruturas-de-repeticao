// 11. Modifique o algoritmo do exercício 2 do nível Simples, de maneira que o fim da
// tabuada possa ser menor que o início. Neste caso, a tabuada deve ser decrescente,
// nos demais deve imprimir a tabuada de maneira crescente. Por exemplo, usuário
// informando a tabuada do número 4, com início em 6 e fim em 3.
// 4 x 6 = 24
// 4 x 5 = 20
// 4 x 4 = 16
// 4 x 3 = 12

function tabuadaMultiplicacao(numeros, multiplicador) {
    //	criei a função que vai receber 2 parâmetros, que deve ser o numero que vai ser multiplicado e a quantidade de vezes que ele vai ser multiplicado
  
    var resultado = []; // criei um array vazio na variável resultado, onde vamos atribuir o resultado da multiplicação
    for (var indice = 0; indice < numeros.length; indice++) {
      // usei uma estrutura de repetição onde vamos repetir a operação abaixo ate o limite determinado por numeros.length
      resultado.push(numeros.sort((a, b) => b - a)[indice] * multiplicador); // usei o método .push para adicionar o resultado da multiplicação de numeros com o multiplicador na array resultado, dessa vez usei o método.sort para inverter a ordem dos resultados, assim ficando em ordem decrescente
      console.log(
        multiplicador + ' x ' + numeros[indice] + ' = ' + resultado[indice]
      ); // usei o console.log concatenando o simbolo de multiplicação e de igual em forma de String para ter uma melhor apresentação do resultado
    }
  }
  
  tabuadaMultiplicacao([3, 4, 5, 6], 4);
  // '4 x 6 = 24'
  // '4 x 5 = 20'
  // '4 x 4 = 16'
  // '4 x 3 = 12'