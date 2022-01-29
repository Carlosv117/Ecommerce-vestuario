// // // PRODUTOS
const cards = [
  {
    id: 1,
    value: "Camisetas",
    name: "Lightweight Jacket",
    img_url: "./src/img/Men-Jacket-Front-Black__15466 1.png",
    descrição: "Foto Lightweight Jacket",
    parag:
      "Adicione um pouco de energia ao seu guarda-roupa de inverno com esta jaqueta vibrante...",
    valor: 100.0,
    Adicionar: "Adicionar ao carrinho",
  },
  {
    id: 2,
    value: "Acessórios",
    name: "Black Hat",
    img_url: "./src/img/image 1.png",
    descrição: "Foto Black Hat",
    parag:
      "O gorro Next.js chegou! Esta beldade bordada tem um ajuste confortável que garante que...",
    valor: 100.0,
    Adicionar: "Adicionar ao carrinho",
  },
  {
    id: 3,
    value: "Acessórios",
    name: "Mask",
    img_url: "./src/img/Surgical-Mask-Black__89554 1.png",
    descrição: "Foto Mask",
    parag:
      "Esta máscara facial durável é feita de duas camadas de tecido tratado e possui presilhas...",
    valor: 40.0,
    Adicionar: "Adicionar ao carrinho",
  },
  {
    id: 4,
    value: "Camisetas",
    name: "T-Shirt",
    img_url: "./src/img/Men-TShirt-Black-Front__70046 1.png",
    descrição: "Foto T-Shirt",
    parag:
      "Esta t-shirt é imprescindível no seu guarda-roupa, combinando o caimento intemporal de...",
    valor: 100.0,
    Adicionar: "Adicionar ao carrinho",
  },
  {
    id: 5,
    value: "Camisetas",
    name: "Short-Sleeve T-Shirt",
    img_url: "./src/img/mockup-a0dc2330__62146 1.png",
    descrição: "Foto Short-Sleeve T-Shirt",
    parag:
      "Agora você encontrou a camiseta básica do seu guarda-roupa. É feito de um mais grosso...",
    valor: 100.0,
    Adicionar: "Adicionar ao carrinho",
  },
  {
    id: 6,
    value: "Acessórios",
    name: "Champion Packable Jacket",
    img_url: "./src/img/mockup-9b9894f1__67347 1.png",
    descrição: "Foto Champion Packable Jacket",
    parag:
      "Agora você encontrou a camiseta básica do seu guarda-roupa. É feito de um mais grosso...",
    valor: 100.0,
    Adicionar: "Adicionar ao carrinho",
  },
  {
    id: 7,
    value: "Calçados",
    name: "Tênis Nike Air VaporMax 2021 Flyknit Masculino",
    img_url: "./src/img/1637884825382.png",
    descrição: "Foto Calçados",
    parag:
      "o Nike Air VaporMax 2021 FK é ventilado e fácil de usar e conta com tecido Flyknit reciclado superelástico...",
    valor: 710.0,
    Adicionar: "Adicionar ao carrinho",
  },
];

let carrinhoArray = [];

const carrinhoItens = document.createElement("div");

const carrinho = document.querySelector(".carrinho");

const carrinhoTexto = document.createElement("h2");
const carrinhoParagrafo = document.createElement("p");

const todos = document.getElementById("todos");
const Acessórios = document.getElementById("Acessórios");
const Calçados = document.getElementById("Calçados");
const Camisetas = document.getElementById("Camisetas");

const footer = document.getElementById("footer");

const vitrine = document.querySelector(".vitrine");

// VITRINE
function adicionarItens(produto) {
  const produtoSection = document.createElement("section");
  const produtoFigure = document.createElement("figure");
  const produtoImg = document.createElement("img");
  const produtodiv = document.createElement("div");
  const produtoinput = document.createElement("input");
  const produtoNome = document.createElement("h3");
  const produtoParagrafo = document.createElement("p");
  const produtoPreço = document.createElement("p");
  const produtoAdicionar = document.createElement("a");

  produtoSection.classList.add("container");
  produtoFigure.classList.add(produto.value);
  produtoinput.classList.add(produto.value);
  produtoPreço.classList.add("preço");
  produtoAdicionar.classList.add("produtoAdicionar");

  produtoImg.src = produto.img_url;
  produtoImg.alt = produto.descrição;

  produtoinput.type = "button";
  produtoinput.value = produto.value;

  produtoNome.innerText = produto.name;

  produtoParagrafo.innerText = produto.parag;

  produtoPreço.innerText = "R$ " + produto.valor.toFixed(2);

  produtoAdicionar.innerText = produto.Adicionar;
  produtoAdicionar.href = "";
  produtoAdicionar.addEventListener("click", function (e) {
    e.preventDefault();
    addToCart(produto);
    carrinhoFuncionando();
  });
  produtoFigure.appendChild(produtoImg);
  produtodiv.appendChild(produtoinput);
  produtodiv.appendChild(produtoNome);
  produtodiv.appendChild(produtoParagrafo);
  produtodiv.appendChild(produtoPreço);
  produtodiv.appendChild(produtoAdicionar);
  produtoSection.appendChild(produtoFigure);
  produtoSection.appendChild(produtodiv);
  vitrine.appendChild(produtoSection);
}

function renderizarVitrine(produtos) {
  vitrine.innerHTML = "";
  for (let i = 0; i < produtos.length; i++) {
    adicionarItens(produtos[i]);
  }
}
renderizarVitrine(cards);

// VITRINE

// CARRINHO DE COMPRAS
function carrinhoDeCompras() {
  carrinhoItens.classList.add("itens");
  carrinho.appendChild(carrinhoItens);

  carrinhoTexto.classList.add("carrinhoTexto");
  carrinhoTexto.innerText = "Carrinho vazio";
  carrinhoItens.appendChild(carrinhoTexto);

  carrinhoParagrafo.innerText = "Adicione ítens";
  carrinhoItens.appendChild(carrinhoParagrafo);
}
// CARRINHO DE COMPRAS

// ADICIONANDO AO CARRINHO DE COMPRAS
function adicionarCarrinhoDeCompras(produto) {
  const carrinho = document.querySelector(".carrinho");

  const divFlex = document.createElement("div");
  const figure = document.createElement("figure");
  const imagem = document.createElement("img");
  const divSecundaria = document.createElement("div");
  const texto = document.createElement("h3");
  const preço = document.createElement("p");
  const remover = document.createElement("a");

  divFlex.classList.add("carrinhoFlex");
  figure.classList.add("figureCarrinho");
  divSecundaria.classList.add("carrinhoDeCompras2");

  imagem.src = produto.img_url;
  imagem.alt = produto.descrição;

  texto.innerText = produto.name;

  preço.innerText = "R$ " + produto.valor.toFixed(2);

  remover.innerText = "Remover produto";
  remover.href = "";
  remover.addEventListener("click", function (e) {
    e.preventDefault();
    remover.parentElement.remove();
    figure.parentElement.remove();
    removeToCart(produto);
  });

  divSecundaria.appendChild(texto);
  divSecundaria.appendChild(preço);
  divSecundaria.appendChild(remover);
  figure.appendChild(imagem);
  divFlex.appendChild(figure);
  divFlex.appendChild(divSecundaria);
  carrinho.appendChild(divFlex);
}
// ADICIONANDO AO CARRINHO DE COMPRAS

//CARRINHO FUNCIONANDO
function carrinhoFuncionando() {
  if (carrinhoArray.length === 0) {
    carrinhoDeCompras();
    footer.classList.add("itensHidden");
  } else if (carrinhoArray.length > 0) {
    carrinhoTexto.parentElement.remove();
    carrinhoParagrafo.parentElement.remove();
    footer.classList.remove("itensHidden");
  }
}
carrinhoFuncionando();
//CARRINHO FUNCIONANDO

//NAVEGAÇÃO
function navegacao() {
  todos.addEventListener("click", function () {
    vitrine.innerHTML = "";
    renderizarVitrine(cards);
  });
  Acessórios.addEventListener("click", function () {
    vitrine.innerHTML = "";
    renderizarVitrine(cards);
    const inputcamiseta = document.querySelectorAll(".Camisetas");
    const inputcalcados = document.querySelectorAll(".Calçados");
    for (let i = 0; i < inputcamiseta.length; i++) {
      inputcamiseta[i].parentElement.remove();
    }
    for (let i = 0; i < inputcalcados.length; i++) {
      inputcalcados[i].parentElement.remove();
    }
  });
  Calçados.addEventListener("click", function () {
    vitrine.innerHTML = "";
    renderizarVitrine(cards);
    const inputacessorios = document.querySelectorAll(".Acessórios");
    const inputcamiseta = document.querySelectorAll(".Camisetas");
    for (let i = 0; i < inputacessorios.length; i++) {
      inputacessorios[i].parentElement.remove();
    }
    for (let i = 0; i < inputcamiseta.length; i++) {
      inputcamiseta[i].parentElement.remove();
    }
  });
  Camisetas.addEventListener("click", function () {
    vitrine.innerHTML = "";
    renderizarVitrine(cards);
    const inputacessorios = document.querySelectorAll(".Acessórios");
    const inputcalcados = document.querySelectorAll(".Calçados");
    for (let i = 0; i < inputacessorios.length; i++) {
      inputacessorios[i].parentElement.remove();
    }
    for (let i = 0; i < inputcalcados.length; i++) {
      inputcalcados[i].parentElement.remove();
    }
  });
}
navegacao();
//NAVEGAÇÃO

//

// FOOTER DO CARRINHO
function footerCarrinho() {
  const divFlexFooter = document.createElement("div");

  divFlexFooter.classList.add("divFlexFooter");
  footer.appendChild(divFlexFooter);

  const divDiretira = document.createElement("div");
  divDiretira.classList.add("divDiretira");
  divFlexFooter.appendChild(divDiretira);

  const quantidade = document.createElement("p");
  quantidade.innerText = "Quantidade:";
  divDiretira.appendChild(quantidade);

  const preço = document.createElement("p");
  preço.innerText = "Total:";
  divDiretira.appendChild(preço);

  const divEsquerda = document.createElement("div");
  divEsquerda.classList.add("divEsquerda");
  divFlexFooter.appendChild(divEsquerda);

  const numero = document.createElement("p");
  numero.id = "totalQntd";
  divEsquerda.appendChild(numero);

  const totalPreço = document.createElement("p");
  totalPreço.id = "totalPreço";
  divEsquerda.appendChild(totalPreço);
}
footerCarrinho();
// FOOTER DO CARRINHO

// VALOR E QUANTIDADE DO FOOTER
const totalPreço = document.getElementById("totalPreço");
const totalQntd = document.getElementById("totalQntd");

////add
function updateTotal(valor) {
  let result = 0;
  for (let i = 0; i < carrinhoArray.length; i++) {
    result += carrinhoArray[i].valor;
  }

  totalPreço.innerText = result.toFixed(2);
}

function updateQntd(valor) {
  let result = 0;
  result += carrinhoArray.length;

  totalQntd.innerText = result;
}

function addToCart(produto) {
  adicionarCarrinhoDeCompras(produto);
  carrinhoArray.push(produto);
  updateTotal();
  updateQntd();
}
//////add

/////remove
function upgradeTotal(valor) {
  let result = 0;
  for (let i = 0; i < carrinhoArray.length; i++) {
    result -= carrinhoArray[i].valor;
  }
  result = result * -1;
  totalPreço.innerText = result.toFixed(2);
}
function upgradeQntd(valor) {
  let result = 0;
  result -= carrinhoArray.length;
  result = result * -1;
  totalQntd.innerText = result;
}
function removeToCart(produto) {
  carrinhoArray.pop();
  upgradeTotal();
  upgradeQntd();
  carrinhoFuncionando();
}

function logo(){
  document.querySelector("#logo").addEventListener("click", () => {

    vitrine.innerHTML = "";
    renderizarVitrine(cards);

  })
}
logo()

function pesquisar(){

  document.querySelector(".Text").addEventListener("keyup", e => {

    const valor = e.target.value.toLowerCase()

    const filtrarPesquisa = cards.filter(produto => {
      
      if(produto.value.toLocaleLowerCase().includes(valor) || produto.name.toLocaleLowerCase().includes(valor)){
        return produto
      }
    })

    renderizarVitrine(filtrarPesquisa)

  })
}
pesquisar()