//	2. Modifique o algoritmo anterior, de maneira que o usuário também informe o início e o fim da tabuada. Por exemplo: usuário solicitando a tabuada do número 6, com início em 5 e fim em 8.

function tabuadaMultiplicacao(numeros, multiplicador) {
    // criei um função e determinei 2 parâmetros para ela, a lista de numeros e o multiplicador
  
    var resultado = []; // criei uma variável com um array vazio para receber o resultado da nossa estrutura de repetição
    for (var indice = 0; indice < numeros.length; indice++) {
      // usei uma estrutura de repetição onde vamos repetir a operação abaixo ate o limite determinado por numeros.length
      resultado.push(numeros[indice] * multiplicador); //	multiplicamos cada elemento do array numeros pela variável multiplicador e  usamos o .push para adicionar elementos ao array resultado
    }
    return resultado; // declaramos que deve retornar a variável resultado quando usarmos a função
  }
  