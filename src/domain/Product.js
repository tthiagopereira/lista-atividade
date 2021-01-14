export default class Product{

  constructor(imagem=Math.floor(Math.random() * (5 + 1)), nome='', tipo='', peso='', preco='') {
    if(imagem == 1) {
      this.imagem = 'img/img-1.jpg'
    }
    if(imagem == 2) {
      this.imagem = 'img/img-2.jpg'
    }
    if(imagem === 3) {
      this.imagem = 'img/img-3.jpg'
    }
    if(imagem === 4) {
      this.imagem = 'img/img-4.jpg'
    }
    if(imagem === 5) {
      this.imagem = 'img/img-5.jpg'
    }
    this.nome = nome
    this.tipo = tipo
    this.peso = peso
    this.preco = preco
  }
}
