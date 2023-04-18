class Bonificacao {
    
    constructor(i){
        this.matricula = i.matricula;
        this.nome_completo = i.nome_completo;
        this.admissao = i.admissao;
        this.salario = i.salario;
        this.data_pagamento = i.data_pagamento;
        this.desempenho = i.desempenho;
    }

    create(){
        return `INSERT INTO funcionarios (nome_completo, admissao, salario, data_pagamento, desempenho) 
        VALUES('${this.nome_completo}', '${this.admissao}', ${this.salario}, '${this.data_pagamento}', ${this.desempenho})`
    }

    read(){
        if(this.matricula == undefined)
            return `SELECT * FROM  funcionarios`
        else
            return `SELECT * FROM funcionarios WHERE matricula = ${this.matricula}`
    }

    update(){
        return `UPDATE funcionarios SET nome_completo = '${this.nome_completo}', admissao = '${this.admissao}', salario = ${this.salario}, data_pagamento = '${this.data_pagamento}', desempenho = ${this.desempenho} WHERE matricula = ${this.matricula}`;
    }

    delete(){
        return `DELETE FROM funcionarios WHERE matricula = ${this.matricula}`
    }

    calcBonificacao(){
        
    }
}

module.exports = Bonificacao;