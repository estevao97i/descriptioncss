document.querySelectorAll('.accordion-content').forEach(elem => {
    elem.style.maxHeight = '0'
})

const buttons = document.querySelectorAll('.accordion-button').forEach( button => {

    button.addEventListener('click', () => {

        const content = button.nextElementSibling
        console.log(content)
        
        button.classList.toggle('active')

        if (button.classList.contains('active')) {
            content.style.maxHeight = content.scrollHeight + 'px';
        } else {
            content.style.maxHeight = '0'
        }
    })
})