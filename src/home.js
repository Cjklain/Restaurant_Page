export default homeContent

function homeContent(){
    const mainDiv = document.querySelector('main');
    
    mainDiv.classList.remove('menu')
    mainDiv.classList.remove('contact')
    mainDiv.classList.add('home')
    const html =`
    <img src="../src/pizza2.jpg" alt="pizza pepperoni">
    <p>Our pizza is special Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta quos id, nesciunt deleniti veniam unde. Esse omnis, praesentium qui suscipit doloremque facilis nemo amet pariatur est temporibus velit a cumque!</p>
    `
    mainDiv.innerHTML = html
}