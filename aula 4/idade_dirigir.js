// 1 - Você está em uma grande empresa de segurança
// 2 - Essa empresa tem um cuidado enorme na contratação
// 3 - Dentro dessa empresa o Rh necessita de um software interno.
// 4 - Esse Software/Programa interno vai conseguir pegar vários documentos/dados de candidatos
// 5 - E filtrar pelas preferências das vagas.
// 6 - A ideia do software interno e inicialmente fazer coisas simples.
// 7 - Como por exemplo filtrar um candidato por região ou ficha.
// 8 - No futuro tem como objetivo utilizar I.A para auxiliar na seleção de candidatos.
// 9 - Temos uma vaga de motorista particular e queremos que o software
// pelo menos consiga filtrar os 500 candidatos e trazer os que podem dirigir.

// 10 - Os dois requisitos seriam :
// Idade maior ou igual 18 anos.
// Ter carteira de motorista para carro.

// 11 - Agora você fará o seguinte:
// Adicionar estado(RJ)do primeiro candidato;
// Adicionar anos de Experiência(colocar 5 anos);
// Adicionar IF e ELSE verificando se a pessoa tem anos de experiência igual ou
// maior que 5, assim exibir mensagem.

var idadeDoPrimeiroCandidato = 17;
var estadodoprimeirocandidato = "Rio de Janeiro";
var anosdeexperiêenciadocandidato = 5;
var carteiraDeMotoristaDoPrimeiroCandidato = true;

if (idadeDoPrimeiroCandidato >= 5) {
  console.log("Você tem experiência!");
} else {
  console.log("Você não tem experiência");
}

// true significa verdadeiro

if (idadeDoPrimeiroCandidato >= 18) {
  console.log("Você se encaixa na vaga!");
} else {
  console.log("você não se encaixa na vaga!");
}
if (idadeDoPrimeiroCandidato >= 5) {
  console.log("Você tem experiência!");
} else {
  console.log("Você não tem experiência");
}
if (estadodoprimeirocandidato === "Rio de Janeiro") {
    console.log("Você mora no local adequado para assumir a função!");
  } else {
    console.log("Você não mora no local adequado para assumir a função!");
  }