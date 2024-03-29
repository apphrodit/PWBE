class Veiculo {
    constructor(placa,modelo,marca,ano,diaria) {
        this.placa = placa;
        this.modelo = modelo;
        this.marca = marca;
        this.ano =ano;
        this.idade = new Date().getFullYear() - ano
        this.diaria = diaria;
    }
}

class Aluguel {
    constructor(id, veiculo, dataRetirada, dataDevolucao) {
        this.id = id;
        this.veiculo = veiculo;
        this.dataRetirada = new Date(dataRetirada)
        this.dataDevolucao = new Date(dataDevolucao)
        this.valorAluguel = Number(((new Date (dataDevolucao) - new Date(dataRetirada)) / (1000 * 60 * 60 * 24) * veiculo.diaria).toFixed(2))
    }
}

const veiculos = [
    new Veiculo('JHK-2518', 'Uno', 'Fiat', 2015, 75.9),
    new Veiculo('PBC-5A58', 'Gol', 'VW', 2018, 99.9),
    new Veiculo('CCB-2F19', 'Celta', 'Chevrolet', 2007, 49.9)
]

const alugueis = [
    new Aluguel(1, veiculos[0], '2023-04-01', '2023-04-06'),
    new Aluguel(2, veiculos[1], '2023-04-01', '2023-04-08'),
    new Aluguel(3, veiculos[3], '2023-04-02', '2023-04-07'),
    new Aluguel(4, veiculos[0], '2023-04-07', '2023-04-16'),
    new Aluguel(5, veiculos[0], '2023-04-08', '2023-04-16')
]

console.log