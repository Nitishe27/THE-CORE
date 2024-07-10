const header = document.querySelector("header");

window.addEventListener("scroll",function(){
header.classList.toggle("sticky",this.window.scrollY>0);//*if the condition is true , the class sticky will be added orlese it will be removed**/
})


let menu=document.querySelector('#menu-icon'); /** The querySelector method is used to select an HTML element using a CSS selector and ID of"bx bx-menu"**/
let navmenu=document.querySelector('.navmenu');

menu.onclick = () =>{
	menu.classList.toggle('bx-x');/** The () => indicates the start of the arrow function and elements will opn inside{}**/
	navmenu.classList.toggle('open');
}
/**toggle: This is the method called on the classList property to toggle the presence of a specific class, toggle method is called on the classList property of the element**/