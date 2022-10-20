const comprar = (product, cardId) => {
    console.log(`Produto comprado no id ${cardId}`);
    console.log(`Parabéns, ${superMarket.cliente} seu(sua) ${product.name} no valor de ${product.value}$ foi comprado com sucesso!!!`);
};
// ------ Execution ---------
const name3 = "SomeName";
const cardId = "21371236812";
const superMarket = {
    cliente: name3,
    comprar: comprar
};
const product = {
    "name": "door",
    "value": 200
};
superMarket.comprar(product, cardId);
