let list = document.querySelector(".list");
let input = document.querySelector("input");
let btn = document.querySelector("button");

// var arr = [
//     'elem 1',
//     'elem 2',
//     'elem 3',
// ]

// arr.forEach((elem) => {
//     let todoElem = document.createElement('li');
//     let linkDelete = document.createElement('a')
//     let nameDelete = document.createTextNode('delete')
//     let todoText = document.createTextNode(elem);

//     linkDelete.appendChild(nameDelete)
//     todoElem.appendChild(todoText);
//     todoElem.appendChild(linkDelete)
//     list.appendChild(todoElem);
// })

btn.addEventListener("click", addElem);

function addElem() {
    if (input.value.trim() != '') {
        render()
    }
}

document.addEventListener("keypress", (event) => {
  if (event.key === "Enter" && input.value.trim() != '') {
    render()
  }
});

function render() {
    let createElem = document.createElement('li');
    let delBtn = document.createElement('a');
    delBtn.setAttribute('href', '#')
    // delBtn.setAttribute('onclick', deleteItem())

    let nodeBtnDel = document.createTextNode('delete')
    delBtn.appendChild(nodeBtnDel)

    let nodeValue = document.createTextNode(input.value);
    createElem.appendChild(nodeValue);
    createElem.appendChild(delBtn)
  
    list.appendChild(createElem);
}

// function deleteItem(pos) {
//     list.splice(pos, 1);
// }

