let list = document.querySelector(".list");
let input = document.querySelector("input");
let btn = document.querySelector("button");

var arr = []

function render() {

    list.innerHTML = '';

    arr.forEach((elem, index) => {
        let todoElem = document.createElement('li');
        let linkDelete = document.createElement('a')
        linkDelete.setAttribute('href', '#')
        // linkDelete.setAttribute('onclick', deleteItem(`${index}`))
        let nameDelete = document.createTextNode('delete')
        let todoText = document.createTextNode(elem);
        
        linkDelete.appendChild(nameDelete)
        todoElem.appendChild(todoText);
        todoElem.appendChild(linkDelete)
        list.appendChild(todoElem);
    })

    input.value = ''
}

function deleteItem(pos) {
    console.log(pos)
    arr.splice(pos, 1);a
    render()
}

btn.addEventListener("click", addElem);

function addElem() {
    if (input.value.trim() != '') {
        arr.push(input.value)
        render()
    }
}

document.addEventListener("keypress", (event) => {
  if (event.key === "Enter" && input.value.trim() != '') {
    arr.push(input.value)
    render()
  }
});

// function render() {
//     let createElem = document.createElement('li');
//     let delBtn = document.createElement('a');
//     delBtn.setAttribute('href', '#')
//     delBtn.setAttribute('onclick', deleteItem)

//     let nodeBtnDel = document.createTextNode('delete')
//     delBtn.appendChild(nodeBtnDel)

//     // console.log(delBtn)

//     let nodeValue = document.createTextNode(input.value);
//     createElem.appendChild(nodeValue);
//     createElem.appendChild(delBtn)
  
//     list.appendChild(createElem);
//     console.log(list)
// }




