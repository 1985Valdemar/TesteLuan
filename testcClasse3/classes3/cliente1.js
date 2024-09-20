class Cliente{
    //Construtor vai receber nome Sobrenome
    //Ajuda a Contruir objeto
    // Construtor vai ficar oculto
    constructor(nome, sobrenome){
        this.nome = nome; // this - este(É a Propria Classe)
        this.sobrenome = sobrenome;
    }
}

class Conta{
    constructor(agencia, numero, saldo, isencao){
        this.agencia = agencia;
        this.numero = numero;
        this.saldo = saldo;
        this.taxa = 10;

        if(isencao == true){
            this.taxa = 0;
        }
    }
}

//constructor(nome, sobrenome)
let cliente1 = new Cliente('Jose', 'Souza');

//constructor(agencia, numero, saldo)
let conta1 = new Conta(1818, 15151515, 100.99);


console.log(cliente1,'\n');
console.log(conta1, '\n');