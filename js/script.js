debugger

let kicks = document.querySelectorAll(`#kick`)
var index = 0;


function clickable(event) {
	var clicked = event.target;
	if (clicked.classList.contains(`activated`)) {
		this.classList.remove(`activated`)
	} else {
		clicked.classList.add(`activated`);
	}
	};

setInterval(function(){
	console.log(kicks[index]);
	kicks[index].setAttribute("style", "background-color: red;")
	if (index >= 1){
		kicks[index-1].style.backgroundColor = null;
	} else {
		kicks[7].style.backgroundColor = null;
	}
	if (kicks[index].classList.contains(`activated`)){
		var kicksound = document.createElement('audio');
  		kicksound.src = `/sounds/CYCdh_KesKick-08.wav`;
  		document.body.appendChild(kicksound);
  		kicksound.play();
  		kicksound.onended = function () {
    	this.parentNode.removeChild(this);
  		}
	}
	index++;
	console.log(index);
	if (index === kicks.length){
		index = 0;
	};
}, 500)

function boysen(){
	
}