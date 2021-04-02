let txtArea = document.querySelector(".txt-area-tags");
let tagArea = document.querySelector(".tags");


txtArea.addEventListener('keyup', (e) => {
    addTag(txtArea.value);

    if(e.key === 'Enter') {
        setTimeout(() => {
            e.target.value = ''
        }, 100)
        randomSelect()
    }
})
	
function addTag(tag){

	const tags = tag.split(',').filter(tag => tag.trim() !== "").map(tag => tag.trim());
	tagArea.innerHTML = "";

	tags.forEach(tag => {
		const theTag = document.createElement('span');
		theTag.classList.add('tag');
		theTag.innerHTML = tag;
		tagArea.appendChild(theTag);
	})
}

function randomSelect() {

    const times = 30;

    const interval = setInterval(() => {
        const randomTag = pickRandomTag();

        highlightTag(randomTag)

        setTimeout(() => {
            unHighlightTag(randomTag)
        }, 100)
    }, 100);

    setTimeout(() => {
        clearInterval(interval)

        setTimeout(() => {
            const randomTag = pickRandomTag()

            highlightTag(randomTag)
        }, 100)

    }, times * 100)
}


function pickRandomTag() {
    const tags = document.querySelectorAll('.tag');
    return tags[Math.floor(Math.random() * tags.length)];
}

function highlightTag(tag) {
    tag.classList.add('highlight')
}

function unHighlightTag(tag) {
    tag.classList.remove('highlight')
}
