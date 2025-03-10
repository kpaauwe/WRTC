document.addEventListener('DOMContentLoaded', function() {
    const testimonials = document.querySelectorAll('.testimonial');
    const prevButton = document.getElementById('prev-button');
    const nextButton = document.getElementById('next-button');
    let currentIndex = 0;
    
    testimonials.forEach((testimonial, index) => {
        if (index !== 0) {
            testimonial.classList.add('hidden'); //Hide testimonials that arent the current one
        } else {
            gsap.fromTo(testimonial, 
                {opacity: 0, y:'-50vh'},
                {opacity: 1, y:0,duration: 0.5, ease:'power2.out'}); //bring the current testimonial into view
        }
    });
    
    function showTestimonial(index, mode) {
        testimonials.forEach(testimonial => {
            testimonial.classList.add('hidden'); // Hide all testimonials
        });
        
        testimonials[index].classList.remove('hidden'); //remove selected testimonials from hidden testimonials
        if (mode === 'back') {
            gsap.fromTo(testimonials[index], //animate testimonials entrance
            {opacity:0, x: '-100vw'},
            {opacity:1, x: 0, duration:0.5, ease:"power2.out"});
        } else {
            gsap.fromTo(testimonials[index], //animate testimonials entrance
            {opacity:0, x: '100vw'},
            {opacity:1, x: 0, duration:0.5, ease:"power2.out"});
        }

    }
    
    prevButton.addEventListener('click', function() {
        currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length; //cycle backwards through testimonials
        showTestimonial(currentIndex, 'back');
    });
    
    nextButton.addEventListener('click', function() {
        currentIndex = (currentIndex + 1) % testimonials.length; //cycle forward through testimonials
        showTestimonial(currentIndex , 'forward');
    });
});