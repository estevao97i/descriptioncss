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
            content.style.opacity = '1';
        } else {
            content.style.opacity = '0.6';
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


// let myPromise = () => {
//     return new Promise((resolve, reject) => {
//         let xhr = new XMLHttpRequest();
        
//         xhr.open('GET', 'https://api.github.com/users/nyousefali')
//         xhr.send(null)
        
//         xhr.onreadystatechange = () => {
//             if (xhr.readyState === 4) {
//                 if (xhr.status === 200) {
//                     resolve(JSON.parse(xhr.responseText))
//                 } else {
//                     reject('Error')
//                 }
//             }
//         }
        
//     })
// }

// let result = myPromise()
// result.then((data) => {
//     console.log(data)
// }).catch(err => alert(err))

axios.get('https://api.github.com/users/nyousefali')
.then((response) => {
    console.log(response.data)
}).catch(err => alert(err))

