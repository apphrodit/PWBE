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
        return `UPDATE pacientes SET nome = '${this.nome}', data_nascimento = '${this.data_nasciment}', peso = ${this.peso}, altura = ${this.altura} WHERE id = ${this.id}`
    }

    del(){
        return `DELETE FROM pacientes WHERE id = ${this.id}`
    }

    calcIMC(){
        return this.peso / (this.altura * this.altura);
    }
}

module.exports = Avaliacao;