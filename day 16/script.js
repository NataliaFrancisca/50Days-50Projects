let cups = [...document.getElementsByClassName('glass')];
let glass = document.querySelector(".container-water");

let glassEmpty = document.querySelector(".container-empty");
let percentage = document.querySelector(".container-full");

let listers = document.querySelector(".liters");

for(let x = 0; x < cups.length; x++){
	cups[x].addEventListener("click", () => {
		highlightCups(x)
		
	})
}

function highlightCups(idx) {
    if(cups[idx].classList.contains('full') && !cups[idx].nextElementSibling.classList.contains('full')) {
        idx--
    }

    cups.forEach((cup, idx2) => {
        if(idx2 <= idx) {
            cup.classList.add('full')
        } else {
            cup.classList.remove('full')
        }
    })

    updateBigCup()
}


updateBigCup();

function updateBigCup() {

    const fullCups = document.querySelectorAll('.glass.full').length
    const totalCups = cups.length;

    if(fullCups === 0){
    	percentage.style.visibility = 'hidden';
    	percentage.style.height = 0
    }else{
    	percentage.style.visibility = 'visible';
    	percentage.style.height = `${fullCups / totalCups * 330}px`
    	percentage.innerText = `${fullCups / totalCups * 100}%`
    }

    if(fullCups === totalCups){
    	glassEmpty.style.visibility = 'hidden'
        glassEmpty.style.height = 0
    }else{
    	glassEmpty.style.visibility = 'visible'
        listers.innerText = `${2 - (250 * fullCups / 1000)}L`
    }


}