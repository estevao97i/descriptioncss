const clickImage = document.querySelector('.back');

const descContainer = document.querySelector('div[data-descricao]');

console.log(clickImage);

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

// Função personalizada para desacelerar o scroll
window.addEventListener("wheel", (e) => {
    e.preventDefault();
    gsap.to(window, {
        scrollTo: {
            y: window.scrollY + e.deltaY * 4, // Ajuste o multiplicador para controlar a velocidade
        },
        duration: 0.5, // Duração do movimento
        ease: "power1.out", // Suavização
    });
}, { passive: false });

const tl = gsap.timeline();


// clickImage.forEach(image => {
    clickImage.addEventListener('click', () => {
        // tl(clickImage, {})

        gsap.to(descContainer, {
            // scale: 0,
            duration: 1.5,
            ease: "power4.out",
            // display: 'none'
            width: '100%',
            height: '30vh',
            textAlign: 'start'
        })
        
        gsap.to(clickImage, {
            // backgroundImage: "url('https://static.nationalgeographicbrasil.com/files/styles/image_3200/public/nationalgeographic2683012_0.jpg?w=1600')",
            scale: 1,
            ease: "power4.out",
            width: '100%',
            height: '70%',
            duration: 1.5,

        })
    })
// })

// gsap.to(capivara1, {
//     // rotate: '360deg',
//     scale: .7,
//     zIndex: 10,
//     scrollTrigger: {
//         trigger: capivara1,
//         markers: true,
//         start: 'bottom 70%',
//         end: 'bottom -20%',
//         scrub: 2,
//         pin: capivara1,
//         // toggleClass: 'bakground',
//         // toggleActions: 'play play play reverse'
//         // start pause continue reverse restart complete
//         // onStart onLeave onStartBack onLeaveBack
//     }
// })

// gsap.to(capivara2, {
//     rotate: '120deg',
//     opacity: .3,
//     translateX: 1600,
//     zIndex: 10,
//     scrollTrigger: {
//         trigger: capivara2,
//         // markers: true,
//         start: 'bottom 80%',
//         end: 'bottom 10%',
//         scrub: 1,
//         pin: capivara2,
//         // toggleClass: 'bakground',
//         // toggleActions: 'play play play reverse'
//         // start pause continue reverse restart complete
//         // onStart onLeave onStartBack onLeaveBack
//     }
// })

// gsap.to(capivara3, {
//     rotate: '120deg',
//     opacity: .3,
//     translateX: -1600,
//     zIndex: 10,
//     scrollTrigger: {
//         trigger: capivara3,
//         // markers: true,
//         start: 'bottom 80%',
//         end: 'bottom 10%',
//         scrub: 1,
//         pin: capivara3,
//         // toggleClass: 'bakground',
//         // toggleActions: 'play play play reverse'
//         // start pause continue reverse restart complete
//         // onStart onLeave onStartBack onLeaveBack
//     }
// })

// gsap.to(square2, {
//     x: 2000,
//     // duration: 2,
//     // scale: 2,
//     // ease: 'back(1.7)',
//     scrollTrigger: {
//         trigger: square2,
//         // markers: true,
//         start: 'bottom 80%',
//         end: 'bottom 20%',
//         scrub: 2,
//         pin: square2,
//         // toggleClass: 'bakground',
//         toggleActions: 'play none none reverse'
//         // start pause continue reverse restart complete
//         // onStart onLeave onStartBack onLeaveBack
//     }
// })

// Seleciona o wrapper que contém as seções horizontais
// const horizontalWrapper = document.querySelector('.horizontal-scroll');

// // Configura o ScrollTrigger para scroll horizontal
// gsap.to(horizontalWrapper, {
//     x: () => -(horizontalWrapper.scrollWidth - window.innerWidth), // Move no eixo X
//     ease: 'none', // Sem easing para que o movimento seja suave
//     scrollTrigger: {
//         trigger: '.horizontal-scroll-container', // O contêiner principal
//         start: 'top top', // Início do scroll
//         end: () => `+=${horizontalWrapper.scrollWidth}`, // Comprimento total do wrapper
//         scrub: true, // Sincroniza com o scroll
//         pin: true, // Fixa o contêiner no lugar
//         anticipatePin: 1, // Suaviza a transição ao fixar
//         markers: true, // Exibe os marcadores para depuração
//     }
// });