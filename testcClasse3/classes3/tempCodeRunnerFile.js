// Importando as classes Cliente e Conta dos arquivos correspondentes
import { Cliente } from './cliente.js';
import { Conta } from './conta.js';

// Criando uma nova conta com agência, número e saldo
let conta1 = new Conta(1818, 15151515, 100.99); 

// Criando um cliente e vinculando a conta criada
let cliente1 = new Cliente('Jose', 'Souza', conta1);

// Exibindo os dados do cliente e da conta associada
cliente1.exibirDados();  // Deve exibir os dados do cliente e da sua conta

// Criando um cliente sem conta associada
let cliente2 = new Cliente('Maria', 'Silva');

// Exibindo os dados do cliente sem conta
cliente2.exibirDados();  // Deve informar que este cliente não possui conta associada
