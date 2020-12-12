debugger

let kicks = document.querySelectorAll(`#kick`)
let snares = document.querySelectorAll(`#snare`)
let nicecow = document.querySelectorAll(`#cowbell`)


function clickable(event) {
	var clicked = event.target;
	if (clicked.classList.contains(`activated`)) {
		clicked.classList.remove(`activated`)
	} else {
		clicked.classList.add(`activated`);
	}
	};

function loop(inst, index){

	setInterval(function(){
		inst[index].setAttribute("style", "background-color: red;")
		if (index >= 1){
			inst[index-1].style.backgroundColor = null;
		} else {
			inst[7].style.backgroundColor = null;
		}
		if (inst[index].classList.contains(`activated`)){
			var instound = document.createElement('audio');
			  instound.src = `/sounds/` + inst[index].id + `.wav`;
			  document.body.appendChild(instound);
			  instound.play();
			  instound.onended = function () {
			this.parentNode.removeChild(this);
			  }
		}
		index++;
		if (index === inst.length){
			index = 0;
		};
	}, 200)

}

loop(nicecow, 0)
loop(snares, 0)
loop(kicks, 0)