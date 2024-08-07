// 1- Um dono de petshop necessita calcular gastos
// de forma automática sem precisar fazer no papel
// infelizmente ele não quer pagar a licença do excel
// para toda equipe e nem quer fazer no papel.
// Ele até poderia alugar algum sistema mas nesses sistemas
// prontos de petshop não tem a opção de calcular gastos
// específicos que apenas o petshop dele possuí(necessário
// integrar no sistema que ele já usa).
// sendo assim ele solicitou uma solução 'SOB DEMANDA"
// Significa que é uma solução "Costumizada" .

// Essa pessoa possuí mais de 20 petshops, ele calculou que se pagar
// essa solução customizada pode economizar cerca de
// 300-6000 reais por ano após um prazo

// o nosso colaborador conversou com esse dono do petshop e passou os 
// requisitos traduzido de forma "técnica".

// 1 - Ele quer armazenar o valor em uma constante, chamado primeiroGastoFixo com o valor de 1300.00
// 2 - Ele quer armazenar o valor variável, chamado gastoVariável com o valor de 1200.00
// 3 - Ele quer armazenar o valor constante, chamado taxaServico com o valor de 20.00
 
const primeiroGastoFixo = 1300.00;
var gastoVariavel = 1200.00;
const taxaServico =  20.00;

// O Product Owner(Dono do protudo) que é o responsável por 
// traduzir os requisitos que o cliente passou
// Trouxe mais uma atualização com mais 3 requisitos, faça esse novo requisito.

// 4 - Ele quer armazenar o valor em uma constante, chamada segundoGastoFixo com o valor de 654.22
// 5 - Ele quer armazenar o valor em uma variável, chamada segundoGastoVariável com o valor de 922.11
// 6 - Ele quer exibir o valor de segundoGastoVariável para o cliente utilizando console.log(segundoGastoVariável);

const segundoGastoFixo = 654.22;
var segundoGastoVariável = 922.11;
console.log(segundoGastoVariável);

//Para rodar o código é nessa sequência F5 -> NodeJs -> Executar e Depurar