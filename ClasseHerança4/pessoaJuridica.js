//chamar importaçao
const { Pessoa} = require ('./pessoa')

//EXTENDS = ERDA DA CLASSE PESSOA OS DADOS
class PessoaJuridica extends Pessoa{
    cnpj;
    imprimir(){//REESCREVENDO O METODO DA MAE, MUDA O COMPORTAMENTEO ORIGINAL DA MAE
     //SUPER PUXA DADOS DA MAE
     // {}puxa dados especifico
     console.log(`${super.imprimir()} CNPJ: ${this.cnpj}`);
    }
}

//VAI LIBERAR O ACESSO EXTERNO
module.exports = { PessoaJuridica};

