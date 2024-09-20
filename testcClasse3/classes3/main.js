import { Cliente } from './cliente.js';
import { Conta } from './conta.js';

let conta1 = new Conta(1818, 15151515, 100.99);
let cliente1 = new Cliente('Jose', 'Souza', conta1);

cliente1.exibirDados();

let cliente2 = new Cliente('Maria', 'Silva');
cliente2.exibirDados();
