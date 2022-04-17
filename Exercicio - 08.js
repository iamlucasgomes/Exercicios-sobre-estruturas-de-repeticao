// 8. Faça um algoritmo que permita ao usuário informar a idade de quantas pessoas ele
// desejar. Após isso o algoritmo deve informar a soma das pessoas maiores de idade e a
// média de idade das pessoas maiores de idade informadas.

function somaEMediaDeIdades(idade) { // criei uma função onde coloquei o parâmetro que vai receber a lista de idades;
    var soma = 0; // criei uma variável com o nome soma, onde vou atribuir a soma das idades maior ou igual a 18 anos;
    var media = 0; // criei uma variável com o nome media, onde vou atribuir a soma das idades dividido pela quantidade de pessoas maior ou igual a 18 anos;
    var maiorIdade = []; // criei uma variável com o nome maiorIdade, e atribuí um array vazio, esse array vai receber todas as idades que são maior ou igual a 18 do array idade;

    for (i = 0; i < idade.length; i++) { // usei a estrutura de repetição e defini um limite de repetição baseado no comprimento de idade
        if (idade[i] >= 18) { // usei a estrutura condicional, e defini a condição se o elemento de idade for maior ou igual a 18
            soma += idade[i] // somaremos a soma com o elemento da array idade
            maiorIdade.push(idade[i]) // e adicionaremos a idade da array maiorIdade
            media = soma / maiorIdade.length // para calcular a média, pegaremos a soma das idades e dividiremos pela quantidade de pessoas maior ou igual a 18 anos, para sabermos esse valor, usamos o .length no array maiorIdade
        }
    } return "A soma das pessoas maiores de idade é: " + soma + " e a média de idades informadas é:  " + media; // declarei o retorno da soma e média concatenando com uma String para ter um resultado mais explicativo
}
