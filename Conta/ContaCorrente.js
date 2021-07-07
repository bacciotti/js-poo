import {Conta} from "./Conta.js";

export class ContaCorrente extends Conta {
    static numeroDeContas = 0;

    constructor(cliente, agencia) {
        super(0, cliente, agencia);
        // para acessar o atributo estático, da classe toda e não do objeto em si somente.
        ContaCorrente.numeroDeContas += 1;
    }

    //Sobrescrevendo o comportamento de sacar
    sacar(valor) {
        let taxa = 1.1;
        return this._sacar(valor, taxa);
    }
}