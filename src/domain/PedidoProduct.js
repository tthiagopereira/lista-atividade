export default class PedidoProduct {
  constructor(pedido_id='', produto_id='', quantidade_produto) {
    this.pedido_id = pedido_id
    this.produto_id = produto_id
    this.quantidade_produto = quantidade_produto
  }
}
