// 10. A sequência de Fibonacci tem papel importante na explicação de fenômenos naturais.
// Ela é também bastante utilizada para fins estéticos, pela sua reconhecida harmonia.
// Exemplo disso foi sua utilização na construção do Partenon, em Atenas. A sequência
// dá-se inicialmente por dois números 1. A partir do terceiro elemento usa-se a
// expressão: elementon = elementon-1 + elementon-2. Exemplo de sequência: 1, 1, 2, 3, 5,
// 8. Construa um algoritmo que imprima na tela os n primeiros elementos da sequência
// de Fibonacci, onde n é informado pelo usuário.

////////////////////////////////////////MODO PEDIDO PELO ENUNCIADO/////////////////////////////////////

function sequenciaFibonacci(limite) {
    // criei uma função onde vou atribuir um parâmetro, que é o limite da sequencia de fibo
    var fibonacci = [0, 1]; // criei a variável fibonnaci e atribuí um array com 2 elementos, que é nossos números iniciais
    for (var i = 2; i < limite; i++) {
      // criei uma estrutura de repetição startando do 2º elemento do array fibonacci porque os valores 0 e 1 ja foram atribuídos na array
      fibonacci[i] = fibonacci[i - 2] + fibonacci[i - 1]; // usando a seguinte formula, consegui fazer a estrutura de repetiçõa adicionar o restante dos números da sequência
      // porque usei i-2 e i-1, porque dessa forma ele vai somar sempre o penultimo e ultimo elemento do array
    }
    console.log(fibonacci); // usei o console.log para imprimir o resultado
  }
  sequenciaFibonacci(6);
    //[ 0, 1, 1, 2, 3, 5 ]

////////////////////////////////////////MODO DINAMICO////////////////////////////////////////////////

function sequenciaFibonacci(num1, num2, limite) {
    // criei uma função onde vou atribuir 3 parâmetros, os 2 numeros iniciais e o limite da sequencia de fibo
    var fibonacci = [num1, num2]; // criei a variável fibonnaci e atribuí um array com nossas variáveis usada no parâmetro da função
    for (var i = 2; i < limite; i++) {
      // criei uma estrutura de repetição startando do 2º elemento do array fibonacci porque os indices 0 e 1 ja foram atribuídos na array
      fibonacci[i] = fibonacci[i - 2] + fibonacci[i - 1]; // usando a seguinte formula, consegui fazer a estrutura de repetiçõa adicionar o restante dos números da sequência
      // porque usei i-2 e i-1, porque dessa forma ele vai somar sempre o penultimo e ultimo elemento do array
    }
    return fibonacci; // declarei o retorno da variável fibonacci, para quando usarmos a função
  }

  