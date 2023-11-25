let box = document.querySelector('.box')
let parent = document.querySelector('.parent')

parent.addEventListener('click', () => {
    box.classList.toggle('centralizar');
    parent.classList.toggle('roll-parent');
    return
});