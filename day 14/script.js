let btnClose = document.querySelector(".close-and-open");
let menu = document.querySelector(".menu");
let elementsUl = [...document.getElementsByTagName("li")];

let iconClose = document.querySelector(".close");
let iconOpen = document.querySelector(".open");

btnClose.addEventListener("click", () => {

	for(let p in elementsUl){
		console.log(elementsUl[p]);
		elementsUl[p].classList.toggle("active");
	}
	
	menu.classList.toggle('active')


	iconClose.classList.toggle("actived");
	iconOpen.classList.toggle("actived");


})