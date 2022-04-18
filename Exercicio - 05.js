// 5. Construa um algoritmo que, dado o primeiro elemento e a razão de uma progressão aritmética (PA), imprima todos os n primeiros elementos da PA, onde n também é informado pelo usuário. Lembre-se que uma PA pode ser crescente ou decrescente.

function pA(primeiroElemento, razao, n) {
  //	dado o enunciado, eu criei uma função com 3 parâmetros, sendo eles, o primeiro elemento,	razão, e a array n, onde colocamos uma array com uma sequencia numérica para usarmos na nossa estrutura de repetição

  var soma = []; //	criamos uma variável com o nome soma, e coloquei um array vazio para receber o resultado da nossa estrutura de repetição
  for (i = 0; i < n.length; i++) {
    // criei essa estrutura de repetição com o limite definido pela variável N usando o método .length
    soma.push(primeiroElemento + razao * n[i]); // vamos adicionar elementos na variável soma, como ela contém um array, vou usar o método .push para adicionar esses elementos
  }
  console.log(soma); // como ele pede para imprimir, usei o método console.log
}
