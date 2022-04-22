export default menuContent

function menuContent(){
    const mainDiv = document.querySelector('main')

    mainDiv.classList.remove('home')
    mainDiv.classList.remove('contact')

    mainDiv.classList.add('menu');
    mainDiv.innerHTML = `
    <div class="pizza">
        <img src="../src/pizza2.jpg" alt="pizza pepperoni">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus numquam sapiente, repellendus debitis labore ab perferendis asperiores dolores magni</p>
    </div>
    <div class="pizza">
        <img src="../src/pizza2.jpg" alt="pizza pepperoni">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus numquam sapiente, repellendus debitis labore ab perferendis asperiores dolores magni</p>
    </div>
    <div class="pizza">
        <img src="../src/pizza2.jpg" alt="pizza pepperoni">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus numquam sapiente, repellendus debitis labore ab perferendis asperiores dolores magni</p>
    </div>
    <div class="pizza">
        <img src="../src/pizza2.jpg" alt="pizza pepperoni">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus numquam sapiente, repellendus debitis labore ab perferendis asperiores dolores magni</p>
    </div>
    `
}