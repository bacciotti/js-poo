import { Cliente } from "./Cliente.js";

export class ContaCorrente {
    static numeroDeContas = 0;
    agencia;
    _cliente;
    _saldo = 0;

    // Setters
    set cliente(novoValor) {
        if (novoValor instanceof Cliente) {
            this._cliente = novoValor;
        }
    }

    //Getters
    get cliente() {
        return this._cliente;
    }

    get saldo() {
        return this._saldo
    }

    constructor(agencia, cliente) {
        this.agencia = agencia;
        this.cliente = cliente;
        ContaCorrente.numeroDeContas += 1; // para acessar o atributo estático, da classe toda e não do objeto em si somente.
    }

    sacar(valor) {
        if (this._saldo >= valor) {
            this._saldo -= valor;
            return valor; // Se não especificar, um método SEMPRE retornará undefined.
        }
    }

    depositar(valor) {
        // if (valor <= 0) return; //Early return - outra notação
        if (valor <= 0) { //Early return
            return;
        }
        this._saldo += valor;
    }

    transferir(valor, conta) {
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }
}