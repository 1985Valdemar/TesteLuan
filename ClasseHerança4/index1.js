// propriedade, campos(fields) : nome, plano
// Dois Usuarios:
//              Basico = Ve Com Anuncio
//              Premium = Sem Anuncio

class Usuario{
    constructor(nome, plano){
        this.nome = nome;
        this.plano = plano;
    }
    assistirConteudo(titulo){
        //POR PADRÃO NÃO TEM ANUNCIO 
        //MAS SE FOR BASICO TEM ANUNCIO
        let anuncio = false;

        // FAZER CHECAGEM
        if(this.plano == 'Básico'){
            anuncio = true;
        }
        // IMPRIMIR COM INTERPOLAÇÃO COM TERNARIO 
        // TERNARIO SE FOR VERDADE FAÇA ISSO E SE FOR FALSO FAÇA AQUILO
        console.log(` Está Assistindo ${titulo} ${anuncio == true? 'Com Anuncio': 'Sem Anuncio'}`);
    }
    exibirPerfil(){
        console.log(`Usuário: ${this.nome}, Plano: ${this.plano}\n`);
    }
}

// EXTENDS = VAI PUXAR OS ITENS DA CLASSE MAE NO CASO Usuario
class UsuarioBasico extends Usuario{//POO HERANÇA
    constructor(nome){
        //super vai puxar mae e acrescentar item
        super(nome, 'Básico');
    }
}

// EXTENDS = VAI PUXAR OS ITENS DA CLASSE MAE NO CASO Usuario
class UsuarioPremium extends Usuario{
    constructor(nome){
        //SUPER VAI PUXAR DADOS DA MÁE E VAI ACRESCENTAR ITENS
        super(nome, 'Premium');
    }
}

// let = criar varivel para armazenar conteudo
let Usuario_basico = new UsuarioBasico('Frank João');
Usuario_basico.assistirConteudo('Divertidamente 2');
Usuario_basico.exibirPerfil();

let Usuario_Premium = new UsuarioPremium('Daniela Velter');
Usuario_Premium.assistirConteudo('Rei Da TV');
Usuario_Premium.exibirPerfil();
