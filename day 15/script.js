let socialCounter = [...document.getElementsByTagName("h2")];

let counterTwitter = 0;
let counterFacebook = 0;
let counterYoutube = 0;

let myfunctionTwitter = setTimeout(function() {
  	setInterval(twitter,1);
}, 200)

let myfunctionFacebook = setTimeout(function() {
  	setInterval(facebook,1);
}, 400)

let myfunctionYoutube = setTimeout(function() {
  	setInterval(youtube,1);
}, 800)


function twitter(){
	if(counterTwitter == 12000){
		clearInterval(myfunctionTwitter);
	}else{
		counterTwitter += 40;
		socialCounter[0].innerHTML = counterTwitter;
	}
}

function facebook(){
	if(counterFacebook == 5000){
		clearInterval(myfunctionFacebook);
	}else{
		counterFacebook += 20;
		socialCounter[1].innerHTML = counterFacebook;
	}
}

function youtube(){
	if(counterYoutube == 7500){
		clearInterval(myfunctionYoutube);
	}else{
		counterYoutube += 50;
		socialCounter[2].innerHTML = counterYoutube;
	}
}

