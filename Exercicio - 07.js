//	7. Faça um algoritmo que leia tantos números quanto o usuário desejar e imprima a
//soma deles.

function soma(numeros){ // criei uma função que recebeu o nome soma e o parametro numeros, onde vamos colocar nossa sequencia numérica que deve ser somada
    var resultado	=	numeros[0]; // criei uma variável na qual atribuí o primeiro elemento da array numeros
    for(var contador = 1; contador < numeros.length; contador++){ // usei a estrutura de repetição para repetir até o limite definido por numeros.length
      resultado += numeros[contador] // a cada repetição vamos atribuir o resultado + cada elemento do array numeros na variável resultado substituindo o elemento inicial pelo elemento somado até nossa estrutura de repetição chegar no limite
        
    } console.log("A soma dos números " + numeros + " é " + resultado) // feito isso, vou imprimir o resultado concatenado com uma String para termos um resultado mais explicativo
  }
  