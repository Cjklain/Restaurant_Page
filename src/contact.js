export default contactContent

function contactContent(){
    const mainDiv = document.querySelector('main');
    mainDiv.classList.remove('home')
    mainDiv.classList.remove('menu')

    mainDiv.classList.add('contact')
    const html =`
    <div class="numbers">
    <h2>654 654 654</h2>
    <h2>875 25 25</h2>
    </div>
    <div class="mail">
    <h2>rezerw@asd.com</h2>
    <h2>asd@com.gl</h2>
    </div>
    `
    mainDiv.innerHTML = html
}