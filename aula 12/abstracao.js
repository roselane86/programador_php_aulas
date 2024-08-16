


// Para herdar stributos no construtor é necessário utilizar o método super()
//class ClienteVip extends Cliente {
   // constructor(nome, cpf, saldo){
       // this.nome = nome;
      // this.cpf = cpf;
        //this.saldo = saldo;
   // }
   // deposiatr(){
     //   console.log("Depositando...");
   // }
   // sacar(){
     //   console.log("Sacar...");
    //}
//}
//const thaina = new ClienteVip("Thaina", "199.221.223-10", 1534.33);

// 1 - Em uma entrevista da empresa chamada JWC foi solicitado que você saiba criar uma boa ABSTRAÇÃO
// para que prove que você é capaz de criar sistemas profissionais.
// Será criado um sistema de RH interno da empresa JWC.
// Crie uma superclase chamada Funcionario com os atributos(nome, nascimento, cpf) e o método(lerNome())
// Crie uma subclasse de Funcionario chamada Gerente, seja criativo e crie 1 atributo e 1 método para o gerente.
// Crie uma subclasse de Funcionario chamada Supervisor, Seja criativo e crie 1 atributo e 1 método para o Supervisor.
// Crie uma subclasse de Funcionario chamada Atendente, Seja cristivo e crie 1 atributo e 1 método para o Atendente.
// Agora crie um objeto utilizando cada uma das classes.

class Funcionario{
    constructor(nome, nascimento, cpf){
        this.nome = nome;
        this.nascimento = nascimento;
        this.cpf = cpf;
        lerNome(){
            console.log(this.nome);
        }
    }
class Gerente extends Funcionario {
        constructor(subordinados){
            super(nome, nascimento, cpf)
        }
        gerenciar(){
            console.log("Gerenciando os seguintes subordinados: " + this.subordinados);
        }
    }
    const luci = new Gerente(["111.222.222-22", "333.333.333-22", "221.1231.222-44"]);

    

