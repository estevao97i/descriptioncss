const items = document.querySelectorAll('.item');
const title = document.querySelector('h1');
const desc = document.querySelector('h3');

const startBtn = document.getElementById('start');
const pauseBtn = document.getElementById('pause');
const continueBtn = document.getElementById('continue');
const reverseBtn = document.getElementById('reverse');
const restartBtn = document.getElementById('restart');

console.log(startBtn)

var tl = gsap.timeline({ paused: true });

tl.from(title, {
    x: -700,
    duration: .5,
    opacity: 0,
    ease: 'back.out(1.7)'
})

.from(desc, {
    x: -700,
    opacity: 0,
    duration: .5,
    ease: 'back.out(1.7)'
}, '-=.3')

.fromTo(items, {
    x: -1000,
    opacity: 0,
}, {
    x: 0,
    opacity: 1,
    duration: .5,
    ease: 'back.out(1.7)',
})

startBtn.addEventListener('click', () => {
    console.log('botao clicado')
    tl.play();
})

pauseBtn.addEventListener('click', () => {
    tl.pause();
})

continueBtn.addEventListener('click', () => {
    tl.resume();
})

reverseBtn.addEventListener('click', () => {
    tl.reverse();
})

restartBtn.addEventListener('click', () => {
    tl.restart();
})