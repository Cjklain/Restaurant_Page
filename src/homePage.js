export default generateContent

function generateContent(){
    const htmlHome = `       
    <h1>Welcome to Luigi pizza</h1>
    <hr>
    <img src="../src/pizza2.jpg" alt="pizza pepperoni">
    <hr>
    <p>Our pizza is special Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta quos id, nesciunt deleniti veniam unde. Esse omnis, praesentium qui suscipit doloremque facilis nemo amet pariatur est temporibus velit a cumque!</p>
    `
    const contentDiv = document.querySelector('.content')
    contentDiv.innerHTML = htmlHome
}