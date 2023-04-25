class Veiculo {
    placa
    modelo
    marca
    ano
    idade
    diaria
    constructor(placa, modelo, marca, ano, diaria) {
        this.placa = placa;
        this.modelo = modelo;
        this.marca = marca;
        this.ano = ano;
        this.idade = this.getIdade();
        this.diaria = diaria;
    }
    getIdade() {
        const anoAtual = new Date().getFullYear();
        return anoAtual - this.ano;
    }
}

const veiculos = [ new Veiculo('LUV-0000', 'Corolla', 'Toyota', 2007, 80.5) ]
console.log(veiculos)


class Aluguel {
    id
    veiculo
    dataRetirada
    dataDevolucao
    valorAluguel
    constructor(id, veiculo, dataRetirada, dataDevolucao) {
        this.id = id;
        this.veiculo = veiculo;
        this.dataRetirada  = new Date(dataRetirada)
        this.dataDevolucao  = new Date(dataDevolucao)
        this.valorAluguel = this.getAluguel()
    }
    getData() {
        return (this.dataDevolucao - this.dataRetirada) / (1000 * 60 * 60 * 24);
    }
    getAluguel() {
        return Number((this.getData() * this.veiculo.diaria).toFixed(2))
    }
}
const aluguel = new Aluguel(1, veiculos[0], '2020-10-20', '2020-10-21')
console.log(aluguel)