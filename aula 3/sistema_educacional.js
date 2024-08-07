// 1 - Uma rede educacional grande é muito conhecida tem uma unidade/projeto com foco
// em pessoas jovens com transtornos e dificuldade de aprendizado.
// Eles possuem uma grade na parte de exatas (Matemática),
// E eles precisam de um software sobre demanda que facilite o aprendizado de conceitos 
// matemática e fórmulas básicas.
// Nisso no início do projeto é necessário pelo menos implementar uma fórmula para ver se
// funciona e criar o MVP(Mínimo Produto Viável).

// O nosso Dono do Produto(Product Owner) ele conversou com o cliente dessa rede
// e vai passar os requisitos "traduzidos" para nós.

// O requisito inicial seria um teste para ver se o projeto é viável:-
// Calcular a área de um círculo.
// 1 - Definir a constante pi com o valor de 3.14
// 2 - Definir o valor constante do raio como 5
// 3 - Criar a constante area dessa forma -> area = pi * (raio * raio);
// 4 - Colocar o resultado assim: console.log(area);

const pi = 3.14;
const raio = 5;
const area = pi * (raio * raio);
// area = 3.14 * (5 * 5);

console.log("A área em metros é de:");
console.log(area + "m²");