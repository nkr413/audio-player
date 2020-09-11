let soundStartBtn = document.getElementById('start-pause-btn');
let int = 0, replay_int = 0;
let soundBase = ["Gonzo - Rider", "Макс Корж - Напалм", "Пицца - Романс", "Mishlawi - All Night", "Макс Корж - Малолетка", "Тима Белорусских - Окей", "Stromae - Alors on Dance"];

let audio = new Audio();
audio.preload = 'auto';
audio.loop = false; 
audio.src = `audio/${soundBase[int]}.mp3`;
document.getElementById("song-name").innerHTML = soundBase[int];

// Create Songs Name Block
(function () {
	soundBase.forEach((item) => {
		let div = document.createElement('div');
		div.innerHTML = item;
		// div.setAttribute("id", "song-select-btn");
		document.querySelector('.songs-block').append(div);
	});
})();

// Border-Bottom Style Algorithm 
function songSlctStyle() {
	let songDiv = document.querySelectorAll('.songs-block div');
	for (i = 0; i < songDiv.length; i++) {
		if (songDiv[i].innerHTML == soundBase[int]) songDiv[i].style = "border-bottom: 2px solid maroon";
		else songDiv[i].style = "border-bottom: 2px solid transparent";
	}
}
songSlctStyle();

// "pause" button and "pause" algorithm
soundStartBtn.addEventListener('click', (e) => sound());
function sound() {
	if (soundStartBtn.innerHTML == '<i class="fas fa-play-circle"></i>') {
		soundStartBtn.innerHTML = '<i class="fas fa-pause-circle"></i>';
		audio.play();
	} else {
		soundStartBtn.innerHTML = '<i class="fas fa-play-circle"></i>';
		audio.pause();
	}
}

// Back/Next Buttons Algorithm
function back_next_func() {
	audio.preload = 'auto';
	audio.src = `audio/${soundBase[int]}.mp3`;
	audio.play();
	document.getElementById("song-name").innerHTML = soundBase[int];
	soundStartBtn.innerHTML = '<i class="fas fa-pause-circle"></i>';
	songSlctStyle();
}
document.getElementById('back-btn').addEventListener("click", (e) => {
	int -= 1;
	if (int < 0) int = soundBase.length - 1;
	back_next_func();
});
document.getElementById('next-btn').addEventListener("click", (e) => {
	int += 1;
	if (int > soundBase.length - 1) int = 0;
	back_next_func();
});

// Replay Song Algorithm
document.getElementById('replay-btn').addEventListener("click", (e) => {
	if (replay_int % 2 == 0) {
		document.getElementById('replay-btn').style = "color: black";
		audio.loop = true;
	} else {
		document.getElementById('replay-btn').style = "color: #999999";
		audio.loop = false;
	}
	replay_int++;
});

// Random Button Function
document.getElementById('random-btn').addEventListener("click", (e) => {
	let rndmSong = Math.floor(Math.random() * soundBase.length);
	int = rndmSong;
	audio.preload = 'auto';
	audio.src = `audio/${soundBase[int]}.mp3`;
	document.getElementById("song-name").innerHTML = soundBase[int];
	audio.play();
	songSlctStyle();
});

