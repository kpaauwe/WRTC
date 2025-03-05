const correctSequence = ['about', 'blog', 'home', 'pricing', 'profile', 'testimonials'];
let userSequence = [];

function sleep(milliseconds) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
      if ((new Date().getTime() - start) > milliseconds){
        break;
      }
    }
  }

function handleNavClick(item) {
    let index = Number(localStorage.getItem("currIndex")) || 0;
    localStorage.setItem("index"+index, item);
    localStorage.setItem("currIndex", index+1);
    userSequence = [];
    for (let i = 0; i <= index; i++){
        let val = localStorage.getItem("index"+i)
        if (val) userSequence.push(val);
    }
    if (userSequence.length > correctSequence.length) {
        localStorage.clear();
        localStorage.setItem("currIndex", 0);
    }
    for (let i = 0; i < userSequence.length; i++) {
        if (userSequence[i] !== correctSequence[i]) {
            localStorage.clear();
            localStorage.setItem("currIndex", 0);
            break;
        }
    }
    if (userSequence.length === correctSequence.length) {
        alert("You found the hidden page!");
        window.open('../notWRTWC/secretPage.html');
        localStorage.clear();
    }

}

document.getElementById('home').addEventListener('click', () => handleNavClick('home'));
document.getElementById('about').addEventListener('click', () => handleNavClick('about'));
document.getElementById('blog').addEventListener('click', () => handleNavClick('blog'));
document.getElementById('pricing').addEventListener('click', () => handleNavClick('pricing'));
document.getElementById('testimonials').addEventListener('click', () => handleNavClick('testimonials'));
document.getElementById('profile').addEventListener('click', () => handleNavClick('profile'));
