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

const h1 = document.querySelector('h1');
console.log(h1)

console.log(h1.innerText)
console.log(h1.classList.value.split(' '))
