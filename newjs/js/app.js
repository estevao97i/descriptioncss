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

produtos.filter(item => item.preco > 200).map(item => {
    item.preco = item.preco * 2
    return item
})

// criando link
let link = document.createElement('a');
link.setAttribute('href', '#');

let content = document.createTextNode('Clique Aqui para testar');

link.appendChild(content);
// fim da criação do link

let containerClass = document.querySelector('#container');
let container = document.querySelector('.container');

container.appendChild(link);

// alterar o css por meio dos selectors
link.style.color = '#ffff';
link.style.padding = '36px';
link.style.textDecoration = 'none';
console.log(link.style)

// ver o tamanho dos elementos
console.log(container.clientHeight)
console.log(container.clientWidth)
console.log(container.offsetLeft)
console.log(container.clientTop)


// ver a distancia do elemento para o top e left
let box = document.querySelector('.box');
console.log(box.offsetTop)
console.log(box.offsetLeft)

// ver o tamanho da tela de modo geral
console.log(window.innerWidth)
console.log(window.innerHeight)

// ver a rolagem da pagina
console.log(window.scrollY)
console.log(window.scrollX)

// const h1 = document.querySelector('h1');
// console.log(h1)

// ver o que tem dentro do elemento selecionado
// console.log(h1.innerText)
// console.log(h1.classList.value.split(' '))
