console.log("rolê no js");

function soma(a, b) {
  return a + b;
}

const soma1 = (a, b) => a * b * b;

console.log(soma1(1, 2));

const allLi = document.querySelectorAll("li");

console.log(allLi);

allLi.forEach((li) => li.classList.add("item"));

const produtos = [
  {
    nome: "alfafa",
    preco: 400,
  },
  {
    nome: "cenoa",
    preco: 100,
  },
  {
    nome: "terraba",
    preco: 200,
  },
  {
    nome: "va",
    preco: 300,
  },
];

const initialValue = 0;
const produtosSum = produtos.reduce((sum, curr) => {
  return sum + curr.preco;
}, initialValue);

console.log(produtos);
console.log(produtosSum);

produtos
  .filter((item) => item.preco > 200)
  .map((item) => {
    item.preco = item.preco * 2;
    return item;
  });

// criando link
let link = document.createElement("a");
link.setAttribute("href", "#");

let content = document.createTextNode("Clique Aqui para testar");

link.appendChild(content);
// fim da criação do link

let containerClass = document.querySelector("#container");
let container = document.querySelector(".container");

container.appendChild(link);

// alterar o css por meio dos selectors
link.style.color = "#ffff";
link.style.padding = "36px";
link.style.textDecoration = "none";
console.log(link.style);

// ver o tamanho dos elementos
console.log(container.clientHeight);
console.log(container.clientWidth);
console.log(container.offsetLeft);
console.log(container.clientTop);

// ver a distancia do elemento para o top e left
let box = document.querySelector(".box");
console.log(box.offsetTop);
console.log(box.offsetLeft);

// ver o tamanho da tela de modo geral
console.log(window.innerWidth);
console.log(window.innerHeight);

// ver a rolagem da pagina
console.log(window.scrollY);
console.log(window.scrollX);

// mexer no @media do css pelo javascript
const media = window.matchMedia("(max-width: 540px)");
console.log(media);

if (media.matches) {
  console.log("tela mobile");
} else {
  console.log("tela desktop");
}

// selecionar a tag pelo H1
const h1 = document.querySelector("h1");
console.log(h1);

// ver o que tem dentro do elemento selecionado
console.log(h1.innerText);
console.log(h1.classList.value.split(" "));

// ver o evento de clique
function callBack(event) {
  // target vê os componentes individuais
  console.log(event.target);
  // currentTarget pega todos os itens
  console.log(event.currentTarget);
  // type pega o clique
  console.log(event.type);
  // path pega tudo, tudo mesmo!
  console.log(event.path);

  // adiciona a classe no elemento - toggle ativa e desativa sozinho
  container.classList.toggle("red");
  link.classList.toggle('black-letter')
}

function callback1(event) {
  // logica pra trocar a cor do elemento
  if (event.target.style.color === "blue") {
    return (event.target.style.color = "white");
  }
  event.target.style.color = "blue";
}

// adicionando evento, pode ser na pagina toda ou apenas em um elemento
// callback para referenciar a alguma função
addEventListener("keydown", callBack);
h1.addEventListener("click", callback1);
