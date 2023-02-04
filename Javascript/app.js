AOS.init();

let mail = document.querySelector('.mail')
let tel = document.querySelector('.tel')

mail.addEventListener('click', () => {
    mail.innerHTML = "lilianom59@outlook.fr";
    mail.style.fontSize = "2rem";
})

tel.addEventListener('click', () => {
    tel.innerHTML = "07 61 60 25 21";
    tel.style.fontSize = "2rem";
})