// 4. Agora modifique o exercício anterior, considerando agora somente os resultados que forem ímpares.

function tabuadaImpar(numeros,  multiplicador){	// criei uma função que vai receber 2 paramêtros, um deles é a array numeros onde vamos inserir os numeros que queremos multiplicar pelo multiplicador
           
    var resultado = []; // criei uma variavél com um array vazio e dei o nome de resultado, iremos colocar os numeros impares nessa array
      
    for (var indice = 0; indice < numeros.length; indice ++){ // usei a estrutura de repetição que vai verificar todos os elementos da array numeros a partir do seu primeiro elemento
            if (numeros[indice] * multiplicador % 2 !== 0){ //	e se(if) o elemento da array numeros for multiplicado pelo multiplicador e tiver o resto diferente de 0
              resultado.push(numeros[indice]*multiplicador)//	iremos adicionar ele na array resultado com o método push  
        }
        
      } return resultado	//declarei o retorno da variável resultado quando usarmos a função
    }
    