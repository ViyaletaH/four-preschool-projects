const play = document.querySelector('.play');
const artist = document.querySelector('.artist');
const songName = document.querySelector('.song');
var count = 0;
const audio = document.querySelector('audio');
const progress = document.querySelector('input[type="range"]');
const currentTime = document.querySelector('.currentTime');
const durationTime = document.querySelector('.durationTime');

function playOrStop() {
    if (count == 0) {
        count = 1;
        audio.play();
        document.getElementById("playStop").src="assets/png/pause.png";
    
    }
    
    else {
        count = 0;
        audio.pause();
        document.getElementById("playStop").src="assets/png/play.png";
  
    }
}

play.addEventListener('click', playOrStop);


progress.addEventListener('change', () => {
    const perc = progress.value / 100;
    audio.currentTime = (audio.duration || 0) * perc;
})

const time = t => {
    const date = new Date(0);

    if (t > 0) {
        date.setSeconds( t % 60);
        date.setMinutes( t / 60);
    }

    return date.toISOString().slice(14, 19);
}

audio.addEventListener('loadeddata', ()  => {
    progress.value  = 0;
    currentTime.textContent = time(audio.currentTime);
    durationTime.textContent = time(audio.duration);
})

audio.addEventListener('timeupdate', () => {
    
        progress.value = audio.currentTime / audio.duration * 100;
        currentTime.textContent = time(audio.currentTime);
        durationTime.textContent = time(audio.duration - audio.currentTime);
    
})

audio.addEventListener('ended', () =>  {
    progress.value  = 0;
    count = 0;
    document.getElementById("playStop").src="assets/png/play.png";
})

