// Vamos desenvolver um sistema de banco utilizando o famoso:
// Paradigma de Orientação a Objetos.
// Para facilitar iremos utilizar analogias/comparações.

// Definimos primeiramente uma classe Cliente
// Atributos do Cliente: Nome, Endereço, Conta, CPF
// Comportamentos do Cliente: Sacar, Depositar, Transferir

class Cliente {
    // O construtor cria os atributos do futuro objeto que usar essa classe Cliente
    // O construtor recebe os parâmetros do objeto criado(nome, endereco e etc).
    constructor(nome, endereco, conta, cpf){
        // "this" significa "isso" ou seja "a nome recebe o nome vindo de fora"
        this.nome = nome;
        // "this" significa "isso" ou seja "esse endereco recebe o endereco vindo de fora"
        this.endereco = endereco;
        //"this" significa "isso" ou seja "essa conta recebe a conta vindo de fora"
        this.conta = conta;
        // "this" significa "isso" ou seja "esse cpf recebe o cpf vindo de fora"
        this.cpf = cpf;
    }
    // Métodosacar, método é uma função de uma classe.
    sacar(){
        console.log("Sacando dinheiro!"); 
    }
    // Método depositar
    depositar(){
        console.log("Depositando dinheiro!");
    }
    // Método transferir
    tranferir(){
        console.log("Transferir dinheiro!");
    }
}

// Vou criar o objeto "Maria" utilizando a classe Cliente.

// const maria = new Cliente("Maria dos Santos", "tijuca, Rua das Aves 15", "0580116-8", "267.660.760-45");

// // Exibe o cpf da Maria.
// console.log(maria.cpf);

// // Exibe a conta da Maria.
// console.log(maria.conta);

// Atividade 1 - Crie três clientes usando a classe Cliente, e exibe seus CPF's com console.log
// Dica: Utilize o gerador de CPF's do site 4devs.

const julia = new Cliente("Julia", "tijuca, Rua das Aves 15", "0580116-8","123.456.-78");
console.log(julia.cpf);
const raquel = new Cliente("Raquel","tijuca, Rua das Aves 15", "0580116-8", "789.456.-12");
console.log(raquel.cpf);
const nathy = new Cliente("Nathy","tijuca, Rua das Aves 15", "0580116-8", "456.789-32");
console.log(nathy.);
