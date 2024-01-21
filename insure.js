const menu = document.getElementById("menu")
const navlist = document.querySelector("ul.nav-right")
console.log(navlist)

menu.onclick = () => {
    
    menu.classList.toggle('fa-xmark')
    navlist.classList.toggle('open')
    
}
