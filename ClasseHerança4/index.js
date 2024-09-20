//chamar importaçao
const { PessoaFisica } = require ('./pessoaFisica')
const { PessoaJuridica } = require('./pessoaJuridica')

//CRIAR VARIAVEL FISICA PARA ARMAZENAR
//constructor(nome, dt_nascimento)
let pf = new PessoaFisica('Frank', '14/04/2017');
pf.cpf = '053.555.798.85';

// CRIAR VARIAVEL JURIDICA
//constructor(nome, dt_nascimento)
// intanciou pra pj a classe 
let pj = new PessoaJuridica('K&L', '20/20/2024','20202202020');
pj.cnpj = '15.462.356/0001-39';

// CHAMANDO METODO PRA IMPRIMIR
pf.imprimir();
pj.imprimir();

