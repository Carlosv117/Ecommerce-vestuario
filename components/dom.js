/* ADICIONAR NO CARRINHO
1. Criar uma div dentro do carrinho
2. armazenar quantas divs tem em um array
3. somar os preços de cada div
4. poder excluir o item do carrinho
*/

/*PESQUISAR
1. pesquisar algo no input e retonar o resultado
*/

// // // PRODUTOS

const totalProdutos = [];
const itens = document.getElementsByClassName("itens");
const adicionar = document.getElementsByTagName("a");

console.log(itens);
console.log(adicionar);

// // CARRINHO DE COMPRAS

function adicionarItem(product) {
  // CONST / CLASS

  const itensFilho = document.createElement("div");
  itensFilho.classList.add("itensFilhoDOM");

  const divImagem = document.createElement("div");
  divImagem.classList.add("divImagemDOM");

  const figure = document.createElement("figure");
  figure.classList.add("figureDOM");

  const imagem = document.createElement("img");
  imagem.classList.add("imagemDOM");

  const divProduto = document.createElement("div");
  divProduto.classList.add("divProdutoDOM");

  const nome = document.createElement("h3");

  const preço = document.createElement("p");
  preço.classList.add("preçoDOM");

  const remover = document.createElement("a");
  remover.innerText = "Remover do carrinho";
  // CONST / CLASS

  //HIERARQUIA
  divImagem.appendChild(figure);
  figure.appendChild(imagem);

  divProduto.appendChild(nome);
  divProduto.appendChild(preço);
  divProduto.appendChild(remover);

  itensFilho.appendChild(divImagem);
  itensFilho.appendChild(divProduto);

  itens.appendChild(itensFilho);
  //HIERARQUIA
  console.log(product);
}

//

//TOTAL DOS PRODUTOS
// totalProdutos.push(preço);

function quantidade(valorQ) {
  let qnt = valorQ.length;
  return qnt;
}
quantidade(totalProdutos);

function preçoProdutos(valorP) {
  let result = 0;
  for (let i = 0; i < valorP; i++) {
    result += valoP[i];
  }
  return result;
}
preçoProdutos(totalProdutos);

//TOTAL DOS PRODUTOS

//REMOVER
function indentificarRemover(event) {
  const a = event.target;
  if (a.tagName === "A") {
    removerItem(a);
  }
}
function removerItem() {
  a.parentElement.remove();
}
//REMOVER

// // CARRINHO DE COMPRAS

// // PESQUISAR

// function pesquisarProdutos() {
//   // CONST
//   const pesquisar = document.getElementsByClassName("Text");
//   const buttonAdd = document.getElementsByClassName("Button");

//   const ValorPesquisar = pesquisar.value;
// }

// function indentificarAdicionar(event) {
//   const a = event.target;
//   if (a.tagName === "A") {
//     adicionarItem(a);
//   }
// }
// // PESQUISAR

// EVENTOS:
//ADICIONAR AO CARRINHO
// adicionar.addEventListener("click", adicionarItem);

//REMOVER ITEM
// itens.addEventListener("click", indentificarRemover);
