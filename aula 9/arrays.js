// 1 - Como podmos armazenar uma lista de valores? 
// A resposta é ARRAYS

// Dentro de [] definimos os valores do nosso ARRAY
// Os valores são separados por vírgula
nomes = ["Leo", "Maria", "Luana"];
console.log(nomes);

//Você pode armazenar valores numéricos também.
idades = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(idades);

// Os Arrays podem ser heterogêneos, ou seja diferentes tipos de dados.
valoresDiversos = [1, true, "188.999.944-77", 9.2, "Ana"];

//Para acessar um elemento do array, você deve começar pelo índice 0.
diasDaSemana = ["Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira","Sexta-feira"];
//Exibe a String "Segunda-feira"
console.log(diasDaSemana[0])
//Exibe a String "Terça-feira"
console.log(diasDaSemana[1])
//Exibe a String "Quarta-feira"
console.log(diasDaSemana[2]);

// 2 - Atividade: Crie os seguintes arrays com no mínimo 5 itens cada:
// números pares, números ímpares, numeros de telefone, itens de um cardápio, CPF's fictícios, nomes de bancos,
// códigos de produtos(pesquise exemplos na internet) e por último estados brasileiros.
// No final faça console.log() exibindo os arrays criados
// obs: Lembre de comentar os códigos anteriores para não ter conflito.

numerosPares = [0, 2, 4, 6, 8];
console.log(numerosPares);

numerosImpares = [1, 3, 5, 7, 9];
console.log(numerosImpares);

listaDeTelefone = ["(98) 2728-8891", "(98) 2728-8849"];
console.table(listaDeTelefone)