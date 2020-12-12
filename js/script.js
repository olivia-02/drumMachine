//debugger

let kicks = document.querySelectorAll(`#kick`)
let snares = document.querySelectorAll(`#snare`)
let nicecow = document.querySelectorAll(`#cowbell`)
let openhats = document.querySelectorAll(`#openhat`)
let pedhats = document.querySelectorAll(`#pedhat`)
let closedhats = document.querySelectorAll(`#closedhat`)
let claves = document.querySelectorAll(`#claves`)
let highbongos = document.querySelectorAll(`#hibongo`)
let lowbongos = document.querySelectorAll(`#lobongo`)
let congas = document.querySelectorAll(`#conga`)
let notes = document.querySelectorAll(`.open-note`)
let btn = document.querySelector(`button`)

btn.addEventListener(`click`, function(){
	let i = 0;
	while (i < notes.length){
		notes[i].classList.remove(`activated`);
		console.log(notes[i]);
		i++
	}
})

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
loop(openhats, 0)
loop(closedhats, 0)
loop(pedhats, 0)
loop(claves, 0)
loop(highbongos, 0)
loop(lowbongos, 0)
loop(congas, 0)