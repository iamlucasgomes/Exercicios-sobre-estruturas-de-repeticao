// 9. Agora altere o algoritmo anterior, de maneira que ele imprima o percentual de
// pessoas considerando as faixas de idade: 0-17 anos, 18 a 35 anos, 35 a 50 anos, 50 a 65
// anos e maiores de 65 anos. Lembrete: a soma dos percentuais das faixas deve totalizar
// 100%.

function faixaIdade(idade) {
    // criei uma função onde coloquei o parâmetro que vai receber a lista de idades;
  
    var zeroADezessete = []; // criei 5 variáveis com arrays vazios para receber o resultado da nossa estrutura condicional
    var dezoitoATrintaecinco = [];
    var trintaecincoACinquenta = [];
    var cinquentaASessentaecinco = [];
    var maiorDeSessentaecinco = [];
  
    for (var contador = 0; contador < idade.length; contador++) {
      // usei a estrutura de repetição junto com a estrutura condicional para verificar cada numero do array idade
      if (idade[contador] <= 17) {
        // se o elemento do array idade for menor ou igual que 17
        zeroADezessete.push(idade[contador]); // atribuímos na variável zeroADezessete com o método .push
      } else if (idade[contador] <= 35) {
        // senão se o elemento for menor ou igual a 35
        dezoitoATrintaecinco.push(idade[contador]); // atribuímos na variável dezoitoATrintaecinco com o método .push
      } else if (trintaecincoACinquenta <= 50) {
        // senão se o elemento for menor ou igual a 50
        trintaecincoACinquenta.push(idade[contador]); // atribuímos na variável trintaecincoACinquenta com o método .push
      } else if (cinquentaASessentaecinco <= 65) {
        // senão se for menor ou igual a 65
        cinquentaASessentaecinco.push(idade[contador]); // atribuímos na variável cinquentaASessentaecinco com o método .push
      } else {
        // senão for nenhuma das alternativas acima
        maiorDeSessentaecinco.push(idade[contador]); // atribuímos na variável maiorDeSessentaecinco com o método .push
      }
      var total =
        zeroADezessete.length +
        dezoitoATrintaecinco.length +
        trintaecincoACinquenta.length +
        cinquentaASessentaecinco.length +
        maiorDeSessentaecinco.length; // criei a variável total e atribuí a soma da quantidade de elementos de cada array
    }
    console.log(
      'A porcentagem de idades entre 0 e 17 é: ' +
        (zeroADezessete.length / total) * 100 +
        '%' +
        ' - entre 18 e 35 é: ' +
        (dezoitoATrintaecinco.length / total) * 100 +
        '%' +
        ' - entre 35 e 50 é: ' +
        (trintaecincoACinquenta.length / total) * 100 +
        '%' +
        ' - entre 50 e 65 é: ' +
        (cinquentaASessentaecinco.length / total) * 100 +
        '%' +
        ' - maior de 65 é: ' +
        (maiorDeSessentaecinco.length / total) * 100 +
        '%' +
        ' - O percentual total é: ' +
        (total / total) * 100 +
        '%'
    ); // declarei o console.log e concatenei a String com a formula de porcentagem em cada variável para imprimir de uma forma mais visual
  }

  