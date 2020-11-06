import '../scss/main.scss';
import moment from 'moment';

let hamburgerButton = document.querySelector('.hamburger-button--js')
hamburgerButton.addEventListener('click', () => {
    document.querySelectorAll('.navigation__link').forEach(link => {
        link.classList.toggle('navigation__link--on')
    })
    document.querySelector('.navigation').classList.toggle('navigation--on')
})

console.log(moment().format("dddd, MMMM Do YYYY, h:mm:ss a"));