const menu = document.querySelector('.menu')
const menu__toogle = document.querySelector('.menu__toogle')
const menu__toogle_box = document.querySelector('.menu__toogle-box')
menu__toogle_box.addEventListener('click', () => {
    menu.classList.toggle('active')
    menu__toogle.classList.toggle('active')
})

window.onscroll = () =>{
    menu.classList.remove('active')
    menu__toogle.classList.remove('active')
}