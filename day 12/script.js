const iconOpen = document.getElementsByClassName("open");
const iconClose = document.getElementsByClassName("close");
const answer = document.getElementsByClassName("answer");
const items = document.getElementsByClassName("faq");

for(let x = 0; x < iconOpen.length; x++){

		iconOpen[x].addEventListener("click", () => {
			items[x].classList.add("faqExpand");
			iconOpen[x].style.display = "none";
			iconClose[x].style.display = "flex";
			answer[x].style.display = "block";
		});

	for(let y = 0; y < iconClose.length; y++){
	
		iconClose[y].addEventListener("click", () => {
			items[y].classList.remove("faqExpand");
			iconClose[y].style.display = "none";
			iconOpen[y].style.display = "flex";
			answer[y].style.display = "none";
		});
	}
}