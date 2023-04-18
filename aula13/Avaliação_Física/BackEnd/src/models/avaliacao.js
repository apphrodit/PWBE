class Avaliacao{

    constructor(i){
        this.id = i.id
        this.nome = i.nome
        this.data_nascimento = i.data_nascimento
        this.peso = i.peso
        this.altura = i.altura
        this.imc= this.calcIMC()
    }

    create(){
        return `INSERT INTO pacientes (nome, data_nascimento, peso, altura) 
        VALUES('${this.nome}', '${this.data_nascimento}', ${this.peso},${this.altura})`
    }

    read(){
        return `SELECT * FROM pacientes`
    }

    update(){
        return `UPDATE pacientes SET nome = '${this.nome}', data_nascimento = '${this.data_nascimento}', peso = ${this.peso}, altura = ${this.altura} WHERE id = ${this.id}`
    }

    del(){
        return `DELETE FROM pacientes WHERE id = ${this.id}`
    }

    calcIMC(){
        return Number((this.peso / (this.altura * this.altura)).toFixed(2));
    }

    calcIdade(){
        let hoje = new Date()
        let diffTime = Math.abs(this.nascimento - hoje)
        return Math.floor(diffTime / (1000 * 60 * 60 * 24 * 365))
    }

    calcDiagnostico() {
         if(this.imc < 18.5)
            return 'Abaixo do Peso'
        else if (this.imc < 25)
            return 'Peso Ideal'
        else if (this.imc < 30)
            return 'Sobrepeso'
        else if (this.imc < 35)
            return 'Obesidade de Grau I'
        else if (this.imc < 40)
            return 'Obesidade de Grau II'
        else 
            return 'Obesidade de Grau III'
    }
    
}

module.exports = Avaliacao;