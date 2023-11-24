let box = document.querySelector('.box')

box.addEventListener('click', () => {
    return box.classList.toggle('centralizar');
});

function center(event) {
    box.classList.toggle('centralizar');
}