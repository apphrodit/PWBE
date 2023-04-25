class Compra{
    id
    data
    produto
    cliente
    totalParcelas
    preco
    quantidade
    total
    constructor(id,data,produto,cliente,totalParcelas,preco,quantidade){
        this.id = id;
        this.data = data;
        this.produto = produto;
        this.cliente = cliente;
        this.totalParcelas = totalParcelas;
        this.preco = preco;
        this.quantidade = quantidade;
        this.total = this.getTotal();
    }
    getTotal(){
        return ;
    }
}
const compra = new Compra(1, '2023-04-25', 'Conjunto de Tupperware', 'Paulo Dias', 2, 55.20, 1);
console.log(compra);