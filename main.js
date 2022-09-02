let frutas = [];
let laticinios = [];
let congelados = [];
let doces = [];
let comida = "";
let categoria = "";
let adicionarMais = "sim";

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

while (removerItem === true) {
  alert(`Lista de compras:\n Frutas: ${frutas}\n Laticínios: ${laticinios}\n Congelados: ${congelados}\n Doces: ${doces}`);
  itemRemovido = prompt("Qual desses items você quer remover?");
  let itemExiste = 
  alert(`O item ${itemRemovido}, foi removido.`);

}
alert(`Lista de compras:\n Frutas: ${frutas}\n Laticínios: ${laticinios}\n Congelados: ${congelados}\n Doces: ${doces}`);

//***primeira tentativa da aplicação***
  /*if (adicionarComida === "sim") {
    let comida = prompt("Qual comida você deseja inserir?");

    let categoria = prompt("Em qual categoria essa comida se encaixa?");
    categoria.push(comida);
  } else if (adicionarComida === "não") {
    adicionar = false;
    break;
  } else {
    alert("Por favor, responda apenas com 'sim' ou 'não'.");
  }
}

alert("Lista de compras:" `${frutas}` `${laticinios}` `${congelados}` `${doces}`);
*/