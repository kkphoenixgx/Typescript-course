interface IProduct {
    name: string
    value :number
}
interface IMercado{
    cliente :string
    comprar(product :IProduct, idCard :string) :void
}
const comprar = (product: IProduct, cardId) :void => {
    console.log(`Produto comprado no id ${cardId}`)
    console.log(`Parabéns, ${superMarket.cliente} seu(sua) ${product.name} no valor de ${product.value}$ foi comprado com sucesso!!!`)
}

// ------ Execution ---------

const name3 :string = "SomeName"
const cardId = "21371236812"

const superMarket :IMercado = {
    cliente: name3,
    comprar: comprar
}
const product :IProduct = {
    "name": "door",
    "value": 200
}

superMarket.comprar(product, cardId);
