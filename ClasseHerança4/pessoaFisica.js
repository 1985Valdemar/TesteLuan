//chamar importaçao
const { Pessoa} = require ('./pessoa')

//EXTENDS = ERDA DA CLASSE PESSOA OS DADOS
class PessoaFisica extends Pessoa{// Herança
   //
   cpf;
   // override reescrevendo
   imprimir(){//REESCREVENDO O METODO DA MAE, MUDA O COMPORTAMENTEO ORIGINAL DA MAE
    //SUPER PUXA DADOS DA MAE
    // {}puxa dados especifico
    console.log(`${super.imprimir()} CPF: ${this.cpf}`);
   }
}

// VAI LIBERAR O ACESSO EXTERNO
module.exports = { PessoaFisica };

