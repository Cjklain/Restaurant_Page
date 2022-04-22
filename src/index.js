import generateHomePage from "./homePage";
import menuContent from "./menu"
import contactContent from "./contact"
import homeContent from "./home"

generateHomePage()

const buttons = document.querySelectorAll('button');
buttons.forEach(button => button.addEventListener('click',manageContent))

function manageContent(e){
    const mainDiv = document.querySelector('main');

    let currentClass = e.currentTarget.classList.value;
    let currentHtml

    mainDiv.classList.remove(...mainDiv.classList);   
    mainDiv.classList.add(currentClass)

    if(mainDiv.classList.contains('contact')){
        currentHtml = contactContent()
    } else if (mainDiv.classList.contains('menu')){
        currentHtml = menuContent()
    } else if (mainDiv.classList.contains('home')){
        currentHtml = homeContent()
    }

    mainDiv.innerHTML = currentHtml
}