document.querySelectorAll('.accordion-content').forEach(elem => {
    elem.style.maxHeight = '0'

    // const btnModal = elem.nextElementSibling
    // console.log(btnModal)
})

const buttons = document.querySelectorAll('.accordion-button').forEach( button => {

    button.addEventListener('click', () => {

        const content = button.nextElementSibling
        
        button.classList.toggle('active')
        console.log(button)
        
        if (button.classList.contains('active')) {
            content.style.maxHeight = content.scrollHeight + 'px';
        } else {
            content.style.maxHeight = '0'
        }
        
        if (content.querySelector('button')) {
            const btnModal = content.querySelector('button')
            
            btnModal.addEventListener('click', () => {
                
                const modal = content.querySelector('.modal');
                modal.classList.add('modal-active')

                const close = modal.querySelector('.close');
                close.addEventListener('click', () => {
                    modal.classList.remove('modal-active')
                })
            })
        }
    })
})

