
// Dark/Light mode toggle
const toggleBtn = document.getElementById("toggleMode");
toggleBtn.onclick = function () {
  document.body.classList.toggle("dark-mode");
};

let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open');
}

const sr = ScrollReveal ({
    distance: '65px',
    duration: 2600,
    delay: 450,
    reset: true
});

sr.reveal('.hero-text', {delay:200, origin:'top'});
sr.reveal('.hero-img', {delay:450, origin:'top'});
