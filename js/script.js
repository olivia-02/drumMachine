
//Query Selectors
let kicks = document.querySelectorAll(`#kick`),
	snares = document.querySelectorAll(`#snare`),
	nicecow = document.querySelectorAll(`#cowbell`),
	openhats = document.querySelectorAll(`#openhat`),
	pedhats = document.querySelectorAll(`#pedhat`),
	closedhats = document.querySelectorAll(`#closedhat`),
	claves = document.querySelectorAll(`#claves`),
	highbongos = document.querySelectorAll(`#hibongo`),
	lowbongos = document.querySelectorAll(`#lobongo`),
	congas = document.querySelectorAll(`#conga`),
	notes = document.querySelectorAll(`.open-note`),
	btn = document.querySelector(`button`);

//Reset button activity
btn.addEventListener(`click`, function(){
	let i = 0;
	//Loop through all boxes, removing the activated class from them.
	while (i < notes.length){
		notes[i].classList.remove(`activated`)
		i++
	}
})

//Creates interactivity (if that's a word) in application. User selects a note box.
function clickable(event) {
	var clicked = event.target;
	//If already active, deactivate, otherwise activate.
	if (clicked.classList.contains(`activated`)) {
		clicked.classList.remove(`activated`)
	} else {
		clicked.classList.add(`activated`)
	}
	}

//Basic loop function for the entire app, passing instrument and index.
//----Used this to simplify code rather that rewriting the function 10 times for each sound. 
function loop(inst, index){
	//setInterval loops with time delay, creating bpm. 
	setInterval(function(){
		//Active beat count is red, inactive are set to body's colour- grey.
		inst[index].setAttribute("style", "background-color: red;")
		if (index >= 1){
			inst[index-1].style.backgroundColor = null;
		} else {
			inst[7].style.backgroundColor = null;
		}
		//If active note is activated, document will play the associated sound.
		if (inst[index].classList.contains(`activated`)){
			//Since there can be frequent repeatition, document must make duplicates of audio to play overlapping each other.
			var instound = document.createElement('audio')
			  instound.src = `/audio/` + inst[index].id + `.wav`;
			  document.body.appendChild(instound)
			  instound.play()
			  instound.onended = function () {
			this.parentNode.removeChild(this)
			  }
		}
		//Increase index value and wrap back to beginning of loop.
		index++
		if (index === inst.length){
			index = 0
		}
		//BPM 
	}, 200)
}

//Pass all instruments through loop function, 
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