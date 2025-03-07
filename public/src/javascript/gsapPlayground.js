const timeline = gsap.timeline({ defaults: {duration: 1}});
    timeline
        .from('.header', {y: '-100%', ease: 'bounce'})
        .from('.link', {opacity: 0, stagger: 0.5})
        .from('.sidebar.right', {x: "-100vw", ease:'elastic.inOut(1.5,0.3)', duration: '4'})
        .from('.sidebar.left', {x: "+100vw", ease:'elastic.inOut(1.5,0.3)', duration: '4', delay:'-4'})
        .to('.footer', {duration:2, y: 0, ease:'bounce.inOut'}, 2)
        .fromTo('.button', {opacity: 0, scale: 0, rotation: 720}, {delay: 1, opacity: 1, scale: 2, rotation:0})

const button = document.querySelector('.button')
button.addEventListener('click', () => {
    timeline.timeScale(1)
    timeline.reverse()
})
