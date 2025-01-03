const container = document.querySelector('.container');
const items = document.querySelectorAll('.item');
const text = document.querySelector('h1');

console.log(items)

const color = ['red', 'green', 'blue', 'orange', 'yellow', 'pink', 'black', 'white']
const choiceColor = color[Math.round(Math.random() * 10)];

gsap.fromTo(items, {
    opacity: 1,
    y: 50,
    skewY: 29,
    rotate: '-12deg',
    zIndex: 1,
}, {
    opacity: 1,
    y: 0,
    skewY: 0,
    zIndex: 1,
    rotate: '12deg',
    repeat: -1,
    delay: 2,
    yoyo: true,
    onRepeat: () => {
        const color = ['red', 'green', 'blue', 'orange', 'yellow', 'pink', 'black', 'white']
        const choiceColor = color[Math.round(Math.random() * 10)];
        gsap.to(text, {
            color: choiceColor,
            scale: (Math.random() + .8),
        })
        
        gsap.to(items, {
            backgroundColor: choiceColor,
        })
    }
})

gsap.fromTo(text, 1, {
    opacity: 0,
    y: 200,
}, {
    opacity: 1,
    y: 0,
})