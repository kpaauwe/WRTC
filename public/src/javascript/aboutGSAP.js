const timeline = gsap.timeline({ defaults: {duration: 2}});
    timeline
        .from('.profilePic', {x: '-100vw', ease: 'bounce', stagger: 0.3})
        .from('.coachName', {y: '-100vh', opacity:0, ease:'power2'}, '<2')
        .from('.coachdesc', {opacity: 0, y:'+1000vh', ease:'power2', rotation:'1080'}, "<")
        .from('.certifications', {opacity: 0, stagger: 0.5})
