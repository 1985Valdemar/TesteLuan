//CRIAR CLASSE PESSOA
class Pessoa{
    constructor(nome, dt_nascimento){
        this.nome = nome;
        this.dt_nascimento = dt_nascimento
    }
    imprimir(){
        // interpolação TERNARIO
        return `${this.nome} ${this.dt_nascimento} `
    }
}

//PERMITIR USAR DE FORA
module.exports = { Pessoa };
