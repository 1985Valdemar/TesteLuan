class SomaDois{
    soma(n1, n2){
        return n1 + n2;
    }
}

class SomaTres extends SomaDois{
    soma(n1, n2, n3){
        //retorna o resultado da MAE
        return super.soma(n1, n2) + n3
    }
}

class SomaQuatro extends SomaTres{
    soma(n1, n2, n3, n4){
        //retorna o RESULTADO DA FILHA
        return super.soma(n1, n2, n3) + n4
    }
}

let soma2 = new SomaDois();
let resultado2 = soma2.soma(10, 10);
console.log('Resultado2',resultado2)

let soma3 = new SomaTres();
let resultado3 = soma3.soma(10, 10, 10);
console.log('Resultado3',resultado3)

let soma4 = new SomaQuatro();
let resultado4 = soma4.soma(10, 10, 10, 10);
console.log('Resultado4',resultado4)
