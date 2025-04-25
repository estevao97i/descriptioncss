const img1 = document.querySelector('.img-1')
const img2 = document.querySelector('.img-2')
const img3 = document.querySelector('.img-3')

const body = document.querySelector('body')

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const images = [img1, img2, img3];

// Definindo o z-index inicial (img3 no topo)
img1.style.zIndex = 3;
img2.style.zIndex = 2;
img3.style.zIndex = 1;

images.forEach((img, index) => {
  gsap.to(img, {
    opacity: 0,
    scrollTrigger: {
      trigger: body,
      start: `${(index + 1) * 1000}`, // Ajuste conforme o scroll desejado
      end: `${(index + 1) * 100 + 500}`, // Dur. da transição
      scrub: true,
      onUpdate: (self) => {
        // Se quiser fazer algo com zIndex aqui, dá pra fazer no onUpdate
      },
    }
  });
});

// gsap.to(img1, {
//     zIndex: 0,
//     scrollTrigger: {
//         trigger: body,
//         markers: true,
//         start: 'top 30%',
//         end: 'bottom 90%',
//         scrub: 2,
//         pin: img1,
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