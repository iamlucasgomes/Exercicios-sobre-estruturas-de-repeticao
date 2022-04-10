// 	6. Agora faça outro algoritmo semelhante ao anterior, só que agora considerando
//	progressões geométricas.

// a formula para fazer uma progressão Geométrica é PE*RAZÃO**INDICE(Primeiro Elemento * Razão Elevado ao Indice(**n[i]))

function pG(primeiroElemento, razao,	n){ //	dado o enunciado, eu criei uma função com 3 parâmetros, sendo eles, o primeiro elemento,	razão, e a array n, onde colocamos uma array com uma sequencia numérica para usarmos na nossa estrutura de repetição

    var progGeometrica  = [];	//	criamos uma variável com o nome progGeometrica, e coloquei um array vazio para receber o resultado da nossa estrutura de repetição
    for(i = 0;  i < n.length; i++){  // criei essa estrutura de repetição com o limite definido pela variável n usando o método .length
      progGeometrica.push((primeiroElemento)*razao**n[i]) // vamos adicionar elementos na variável progGeometrica, como ela contém um array, vou usar o método .push para adicionar esses elementos
    } console.log(progGeometrica); // como na questão anterior, eu vou imprimir o resultado, para isso usamos o método console.log
  }
  