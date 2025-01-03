const square = document.querySelectorAll('.square');
const square2 = document.querySelector('.square2');

const capivara1 = document.querySelector('.cp1')
const capivara2 = document.querySelector('.cp2')
const capivara3 = document.querySelector('.cp3')
console.log(square)
console.log(square2)

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

// Função personalizada para desacelerar o scroll
window.addEventListener("wheel", (e) => {
    e.preventDefault();
    gsap.to(window, {
        scrollTo: {
            y: window.scrollY + e.deltaY * 6.5, // Ajuste o multiplicador para controlar a velocidade
        },
        duration: 0.5, // Duração do movimento
        ease: "power1.out", // Suavização
    });
}, { passive: false });

gsap.to(capivara1, {
    rotate: '360deg',
    zIndex: 10,
    scrollTrigger: {
        trigger: capivara1,
        markers: true,
        start: 'bottom 80%',
        end: 'bottom 10%',
        scrub: 2,
        pin: capivara1,
        // toggleClass: 'bakground',
        // toggleActions: 'play play play reverse'
        // start pause continue reverse restart complete
        // onStart onLeave onStartBack onLeaveBack
    }
})

gsap.to(capivara2, {
    rotate: '360deg',
    translateX: 1500,
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
    rotate: '360deg',
    translateX: -1500,
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

gsap.to(square2, {
    x: 500,
    // duration: 2,
    scale: 2,
    // ease: 'back(1.7)',
    scrollTrigger: {
        trigger: square2,
        // markers: true,
        start: 'bottom 80%',
        end: 'bottom 20%',
        scrub: 2,
        pin: square2,
        // toggleClass: 'bakground',
        toggleActions: 'play none none reverse'
        // start pause continue reverse restart complete
        // onStart onLeave onStartBack onLeaveBack
    }
})