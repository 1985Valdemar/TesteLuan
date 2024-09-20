class Cliente {
    constructor(nome, sobrenome, conta = null) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.conta = conta;
    }

    exibirDados() {
        console.log(`\n Cliente: ${this.nome} ${this.sobrenome}`);
        if (this.conta) {
            console.log(`Agência: ${this.conta.agencia}, Número da Conta: ${this.conta.numero}, Saldo: ${this.conta.saldo}`,'\n');
        } else {
            console.log('Este cliente não possui conta associada.', '\n');
        }
    }
}

export { Cliente };
