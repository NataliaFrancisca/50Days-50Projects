let txtArea = document.querySelector(".txt-area-tags");
let tagArea = document.querySelector(".tags");


txtArea.addEventListener("keydown", () => {

	if(event.which === 188){
		addTag(txtArea.value);
	}else{
		return false;
	}
	
});
	
	
function addTag(tag){

	const tags = tag.split(',').filter(tag => tag.trim() !== "").map(tag => tag.trim());
	console.log(tags);

	tagArea.innerHTML = "";


	tags.forEach(tag => {
		const theTag = document.createElement('span');
		theTag.classList.add('tag');
		theTag.innerHTML = tag;
		tagArea.appendChild(theTag);
	})

}


// tag.split(",") -> separando as palavras pela virgula.

// filter -> retorna um array com os elementos que passam no teste
// tag.trim() -> remove os espaços em branco; ex: se eu deixar com espaço em branco,
//  não vai ser adicioando

// map -> vai retornar o array sem os espaços e que passou pelo teste do filter.

