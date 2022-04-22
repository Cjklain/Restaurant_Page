export default generateHomePage

function generateHomePage(){
    const htmlHome = `       
    <header>
    <h1>Welcome to Luigi pizza</h1>
    </header>
    <nav>
        <button class="home">Home</button>
        <button class="menu">Menu</button>
        <button class="contact">Contact</button>
    </nav>
    <main class="home">
        <img src="../src/pizza2.jpg" alt="pizza pepperoni">
        <p>Our pizza is special Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta quos id, nesciunt deleniti veniam unde. Esse omnis, praesentium qui suscipit doloremque facilis nemo amet pariatur est temporibus velit a cumque!</p>

    </main>
    `
    const contentDiv = document.querySelector('.content')
    contentDiv.innerHTML = htmlHome
}