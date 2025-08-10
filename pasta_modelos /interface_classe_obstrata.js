class Veiculo {
    static contatadorVeiculos = 0;

    // ✅ Declarando os atributos privados corretamente
    #placa;
    #marca;
    #modelo;

    constructor(placa, marca, modelo) {
        if (this.constructor === Veiculo) {
            throw new Error("Classe obstrata veículo não pode ser instanciada diretamente.");
        }

        this.#placa = placa;
        this.#marca = marca;
        this.#modelo = modelo;
        this.motorista = null; // Agregação 
        Veiculo.contatadorVeiculos++;

    }
}

/*class Veiculo {
    static contatadorVeiculos = 0;

    constructor(placa, marca, modelo) {
        if (this.constructor === Veiculo) {
            throw new Error("Classe obstrata veículo não pode ser instanciada diretamente.");
        }

        this._placa = placa;
        this._marca = marca;
        this._modelo = modelo;
        this_motorista = null; // Agregação 
        Veiculo.contatadorVeiculos++;

    }
}*/