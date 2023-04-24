class Veiculo{
    placa
    modelo
    marca
    ano
    idade
    diaria
    constructor(placa, modelo, marca, ano, diaria){
        this.placa = placa;
        this.modelo = modelo;
        this.marca = marca;
        this.ano = ano;
        this.idade = this.getIdade();
        this.diaria = diaria;
    }
    getIdade(){
        const anoAtual = new Date().getFullYear();
        return anoAtual - this.ano;
    }
}

const veiculos = new Veiculo('LUV-0000', 'Corolla', 'Toyota', 2007, 7.50)
console.log(veiculos)