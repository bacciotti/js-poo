// Classe abstrata
export class Conta {

    constructor(saldoInicial, cliente, agencia) {
        if(this.constructor == Conta){
            throw  new Error("Você não pode instanciar esse tipo de classe: Conta");
        }

        this._saldo = saldoInicial;
        this._cliente = cliente;
        this._agencia = agencia;
    }

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

    // Método abstrato, feito para ser sobrescrito
    sacar(valor) {
        throw new Error("O método sacar da Conta é abstrado.");
    }

    _sacar(valor, taxa) {
        const valorSacado = taxa * valor;
        if (this._saldo >= valorSacado) {
            this._saldo -= valorSacado;
            // Se não especificar, um método SEMPRE retornará undefined.
            return valorSacado;
        }
        return 0;
    }

    depositar(valor) {
        // if (valor <= 0) return; //Early return - outra notação
        if (valor <= 0) { //Early return
            return;
        }
        this._saldo += valor;
    }

    transferir(valor, conta) {
        if (this._tipo == "salario") {
            return;
        }
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }
}