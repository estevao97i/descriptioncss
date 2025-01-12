const square = document.querySelectorAll('.square');
const section = document.querySelectorAll('.section-roll');
// const square2 = document.querySelector('.square2');

const capivara1 = document.querySelector('.cp1')
const capivara2 = document.querySelector('.cp2')
const capivara3 = document.querySelector('.cp3')
const back = document.querySelector('.back')
const titleData = document.querySelector('h1[data-title]')

const heightPag = window.pageYOffset;

console.log(titleData)
console.log(section)
console.log(back)
// console.log(square2)

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const tl = gsap.timeline({ ease: 'power1.inOut' });

// Função personalizada para desacelerar o scroll
window.addEventListener("wheel", (e) => {
    e.preventDefault();
    gsap.to(window, {
        scrollTo: {
            y: window.scrollY + e.deltaY * 4, // Ajuste o multiplicador para controlar a velocidade
        },
        duration: 0.5, // Duração do movimento
        ease: "power4.out", // Suavização
    });
}, { passive: false });

gsap.to(capivara1, {
    // rotate: '360deg',
    scale: .7,
    zIndex: 10,
    scrollTrigger: {
        trigger: capivara1,
        // markers: true,
        start: 'bottom 70%',
        end: 'bottom -20%',
        scrub: 2,
        pin: capivara1,
        // toggleClass: 'bakground',
        // toggleActions: 'play play play reverse'
        // start pause continue reverse restart complete
        // onStart onLeave onStartBack onLeaveBack
    }
})

gsap.to(capivara2, {
    rotate: '120deg',
    opacity: .3,
    translateX: 1600,
    zIndex: 10,
    scrollTrigger: {
        trigger: capivara2,
        // markers: true,
        start: 'bottom 80%',
        end: 'bottom 10%',
        scrub: 1,
        pin: capivara2,
        // toggleClass: 'bakground',
        // toggleActions: 'play play play reverse'
        // start pause continue reverse restart complete
        // onStart onLeave onStartBack onLeaveBack
    }
})

gsap.to(capivara3, {
    rotate: '120deg',
    opacity: .3,
    translateX: -1600,
    zIndex: 10,
    scrollTrigger: {
        trigger: capivara3,
        // markers: true,
        start: 'bottom 80%',
        end: 'bottom 10%',
        scrub: 1,
        pin: capivara3,
        // toggleClass: 'bakground',
        // toggleActions: 'play play play reverse'
        // start pause continue reverse restart complete
        // onStart onLeave onStartBack onLeaveBack
    }
})

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
const horizontalWrapper = document.querySelector('.horizontal-scroll');

// Configura o ScrollTrigger para scroll horizontal
gsap.to(horizontalWrapper, {
    x: () => -(horizontalWrapper.scrollWidth - window.innerWidth), // Move no eixo X
    ease: 'none', // Sem easing para que o movimento seja suave
    scrollTrigger: {
        trigger: '.horizontal-scroll-container', // O contêiner principal
        start: 'top top', // Início do scroll
        end: () => `+=${horizontalWrapper.scrollWidth}`, // Comprimento total do wrapper
        scrub: true, // Sincroniza com o scroll
        pin: true, // Fixa o contêiner no lugar
        anticipatePin: 1, // Suaviza a transição ao fixar
        // markers: true, // Exibe os marcadores para depuração
    }
});

section.forEach(s => {
    s.addEventListener('mouseover', () => {
        gsap.to(s, {
            // scale: 1.02,
            ease: 'power1.inOut',
        })
    })

    s.addEventListener('mouseleave', () => {
        gsap.to(s, {
            // scale: 1,
            ease: 'power1.inOut',
        })
    })
})

gsap.fromTo(back, {
    scale: 1,
    ease: 'power1.inOut',
    // clipPath: 'circle(120)',
    // clipPath: "ellipse(130px 140px at 10% 20%)",
    // clipPath: 'circle(120%)',
}, {
    y: 25,
    scale: 1.01,
    ease: 'power1.inOut',
    // clipPath: 'circle(65%)',
    // clipPath: 'ellipse(130px 140px at 10% 20%)',
    // duration: 1,
    scrollTrigger: {
        trigger: back,
        start: 'center 20%',
        end: 'center 0%',
        scrub: 2,
        // pin: true,
        // markers: true,
    }
})

tl.to(titleData, {
    y: 700,
    x: 12,
    scale: 1.1,
    ease: 'power1.inOut',
    // filter: 'drop-shadow(3px 16px 10px black)',
    scrollTrigger: {
        trigger: back,
        // scrub: 2,
        start: '30% 40%',
        end: 'center 0%',
        scrub: true,
        markers: true,
    }
})

// .to(titleData, {
//     y: 500,
//     scale: 1.3,
//     ease: 'power1.inOut',
//     filter: 'drop-shadow(20px 20px 6px blue)',
//     scrollTrigger: {
//         trigger: back,
//         // scrub: 2,
//         start: '30% 40%',
//         end: 'center 0%',
//         scrub: true,
//         markers: true,
//     } 
// })

// gsap.to(titleData, {
//     y: 500,
//     scale: 1.03,
//     ease: 'power1.inOut',
//     filter: 'drop-shadow(3px 16px 10px black)',
//     scrollTrigger: {
//         trigger: back,
//         // scrub: 2,
//         start: '30% 40%',
//         end: 'center 0%',
//         scrub: true,
//         markers: true,
//     }
// })

gsap.fromTo(horizontalWrapper, {
    y: 0,
    ease: 'power1.inOut',
},
{
    y: 30,
    ease: 'power1.inOut',
    scrollTrigger: {
        trigger: back,
        scrub: 1,
        start: 'bottom 90%',
        end: 'top 0%',
        pin: true
    }
})

// gsap.fromTo(back, {
//     clipPath: 'circle(120%)',
// }, {
//     ease: 'power1.inOut',
//     clipPath: 'circle(12%)',
//     scrollTrigger: {
//         trigger: back,
//         start: 'bottom 20%',
//         end: 'top 0%',
//         scrub: 3,
//         // pin: true,
//         markers: true,
//     }
// })

// gsap.to(back, {
//     // skewX: -6,
//     // skewY: 1,
//     y: 25,
//     scale: 1,
//     ase: 'power1.out',
//     // duration: 1,
//     scrollTrigger: {
//         trigger: back,
//         start: 'bottom 80%',
//         end: 'top 10%',
//         scrub: 1,
//         // pin: true,
//         markers: true,
//     }
// })

scrollzinho = function() {
    newPos = window.pageYOffset;
    const diff = newPos - heightPag;
    const speed = diff * .35;

    titleData.style.transform = 'skewY(' + speed + ')deg';
    heightPag = newPos;
    requestAnimationFrame(scrollzinho)
}

scrollzinho();