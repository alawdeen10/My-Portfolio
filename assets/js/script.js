let menuBtn = document.getElementById('menuBtn')
menuBtn.addEventListener('click', function(click) {
    document.querySelector('body').classList.toggle('mobile-nav-active');
    this.classList.toggle('bx-x-circle')
})

let typed = new Typed ('.auto-input', {
    strings: ['Front End Developer','Web Developer','Freelancer'],
    typeSpeed:100,
    backSpeed:100,
    backDelay: 2000,
    loop: true,
})

