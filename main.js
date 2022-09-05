let frutas = [];
let laticinios = [];
let congelados = [];
let doces = [];
let comida = "";
let categoria = "";
let adicionarMais = "sim";
let removerItem = "sim";
let indexDoItem = "";
let itemRemovido = "";

while (adicionarMais != "não") {
  adicionarMais = prompt("Você deseja adicionar uma comida na sua lista de compras? Responda com 'sim' ou 'não'");
  while (adicionarMais != "sim" && adicionarMais != "não") {
    alert("Por favor, responda apenas com 'sim' ou 'não'.");
    adicionarMais = prompt("Você deseja adicionar uma comida na sua lista de compras? Responda com 'sim' ou 'não'");
  }

  if (adicionarMais === "não") {
    break;
  }

  comida = prompt("Qual comida você deseja inserir?");
  categoria = prompt("Em qual categoria essa comida se encaixa: 'frutas', 'laticínios', 'congelados' ou 'doces'?");
  if (categoria === 'frutas') {
    frutas.push(comida);
  }else if (categoria === 'laticínios') {
    laticinios.push(comida);
  }else if (categoria === 'congelados') {
    congelados.push(comida);
  }else if (categoria === 'doces') {
    doces.push(comida);
  }else {
    alert("Essa categoria não foi pré-definida.");
  }
}

while (removerItem != "não") {
  alert(`Lista de compras:\n Frutas: ${frutas}\n Laticínios: ${laticinios}\n Congelados: ${congelados}\n Doces: ${doces}`);
  removerItem = prompt("Você deseja remover algum item da lista? Responda com 'sim' ou 'não'");
  while (removerItem != "sim" && removerItem != "não") {
    alert("Por favor, responda apenas com 'sim' ou 'não'.");
    removerItem = prompt("Você deseja remover algum item da lista? Responda com 'sim' ou 'não'");
  }

  if (removerItem === "não") {
    break;
  }

  categoriaParaRemover = prompt("De qual categoria deseja remover: 'frutas', 'laticínios', 'congelados' ou 'doces'?");
  itemParaRemover = prompt("Qual item você quer remover?");
  if (categoriaParaRemover === 'frutas') {
    indexDoItem = frutas.indexOf(itemParaRemover);
    itemRemovido = frutas.splice(indexDoItem, 1);
  }else if (categoriaParaRemover === 'laticínios') {
    indexDoItem = laticinios.indexOf(itemParaRemover);
    itemRemovido = laticinios.splice(indexDoItem, 1);
  }else if (categoriaParaRemover === 'congelados') {
    indexDoItem = congelados.indexOf(itemParaRemover);
    itemRemovido = congelados.splice(indexDoItem, 1);
  }else if (categoriaParaRemover === 'doces') {
    indexDoItem = doces.indexOf(itemParaRemover);
    itemRemovido = doces.splice(indexDoItem, 1);
  }else {
    alert("Essa categoria não foi pré-definida.");
  }
  
  alert(`O item ${itemParaRemover}, foi removido.`);

}
alert(`Lista de compras:\n Frutas: ${frutas}\n Laticínios: ${laticinios}\n Congelados: ${congelados}\n Doces: ${doces}`);