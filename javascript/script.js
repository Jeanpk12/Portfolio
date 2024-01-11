let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a')

window.onscroll = () =>{
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ' ]').classList.add('active');
            })
        }
    })
}

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

document.addEventListener('DOMContentLoaded', () => {
    new TypeIt(".animated", {
        speed: 200,
        loop: true,

    })
    .type('Estudante de ADS.', {delay:300}).delete(19)
    .type('Desenvolvedor Front-End.', {delay:300}).delete(26)
    .type('Apaixonado por Tecnologia ❤️', {delay:400}).delete(28)
    .go()
})