// Cria um array com pelo menos 5 itens
const listaDeCompras = ["Leite", "Pão", "Ovos", "Café", "Frutas"];

// Exibe o título da lista no console
console.log("Lista de Compras:");

// Percorre o array usando forEach e exibe os itens com numeração
listaDeCompras.forEach((item, index) => {
  console.log(`${index + 1}. ${item}`);
});