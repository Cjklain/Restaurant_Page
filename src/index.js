import generateHomePage from "./homePage";
import menuContent from "./menu"
import contactContent from "./contact"
import homeContent from "./home"

generateHomePage()

const menuButton = document.querySelector('.menu')
const homeButton = document.querySelector('.home')
const contactButton = document.querySelector('.contact')
menuButton.addEventListener('click', menuContent)
homeButton.addEventListener('click', homeContent)
contactButton.addEventListener('click', contactContent)


// zwracam z naszych 3 funkcji tylko html i podmieniewmy go w tym miejscu