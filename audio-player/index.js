const play = document.querySelector('.play');
const artist = document.querySelector('.artist');
const songName = document.querySelector('.song');
var count = 0;
const audio = document.querySelector('audio');
const progress = document.querySelector('input[type="range"]');
const currentTime = document.querySelector('.currentTime');
const durationTime = document.querySelector('.durationTime');
const track = document.querySelector('.artistSong');
const next = document.getElementById('next');
const back = document.getElementById('back');
const player = document.querySelector('.player-functional');
const main = document.querySelector('.player-main');
const current = document.querySelector('.currentTime');
const duration = document.querySelector('.durationTime');

next.addEventListener('click', () => {
    document.getElementById("gir-bg").src="assets/img/lotl.jpg";
    document.getElementById("audio").src="assets/audio/Haythor.mp3";
    artist.textContent = 'LOTL';
    songName.textContent = 'Haythor';
    track.classList.add('lotl');
    player.classList.add('lotl');
    main.classList.add('lotl');
    current.classList.add('lotl');
    duration.classList.add('lotl');
})


back.addEventListener('click', () => {
    document.getElementById("gir-bg").src="assets/img/girugamesh.jpg";
    document.getElementById("audio").src="assets/audio/Evolution.mp3";
    artist.textContent = 'Girugamesh';
    songName.textContent = 'Evolution';
    track.classList.remove('lotl');
    player.classList.remove('lotl');
    main.classList.remove('lotl');
    current.classList.remove('lotl');
    duration.classList.remove('lotl');
})

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
play.addEventListener('click', () => {
    track.classList.toggle('anime') 
})
play.addEventListener('click', () => {
    main.classList.toggle('active')
})


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
    track.classList.remove('anime');
    document.getElementById("playStop").src="assets/png/play.png";
})

