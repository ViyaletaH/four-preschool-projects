const text1 = "Goddess of the void\n Goddess of the void\n  Goddess of the void\n Goddess of the void \n Down here in the pit\nWhere only blind eyes see\nMy compass is the heart\n  And sheer brutality\n  It's the primitive in man\n  That is taking control\n  In the season of the haythor\n  Reversal of the pole\n  Darling, your eyes were full of darkness\n  Now someone else holds what was mine\n  Darling, your womb gave birth to stars and light\n  Now there is hollowness inside and emptiness behind\n  Goddess of the void\n  Goddess of the void\n  Out here in the fields\n  Where only instincts dwell\n  On the quest to find my fellow\n   I'm sensating your smell\n  Through the forest of the coming\n  And the planes of the before\n  In the night of the apocalypse\n  We reunite the core\n  Darling, your eyes were full of darkness\n  Now someone else holds what was mine\n  Darling, your womb gave birth to stars and light\n  Now there is hollowness inside and emptiness behind\n  Goddess of the void\n  Goddess of the void\n  Through the forest of the coming\n  And the planes of the before\n  In the night of the apocalypse\n  We reunite the core\n  Through the forest of the coming\n  And the planes of the before\n  In the night of the apocalypse\n  We reunite, reunite the core\n  Darling, your eyes were full of darkness\n  Now someone else holds what was mine\n  Darling, your womb gave birth to stars and light\n  Now there is hollowness inside and emptiness behind\n  Darling, your eyes were full of darkness\n  Now someone else holds what was mine\n  Darling, your womb gave birth to stars and light\n  Now there is hollowness inside and emptiness behind\n  Goddess of the void\n  Goddess of the void."
const text2 ="Listen to my evolution!!\n  Listen to my evolution!!\n  Listen to my evolution!!\n  Listen to my evolution!!\n  (Ready Go)(Let me go)\n  Continuously searching\n  (Ready Go)(Let me go)\n  the outcome is this style\n  (Ready Go)(Let me go)\n  bring it on, here we go\n  (Ready Go)(Let me go)\n  The tower dispatches noiz\n  (Ready Go)(Let me go)\n  catch our words\n  Listen to my evolution!!\n  Listen to my evolution!!\n  No way, win the day\n  No way, I win the day\n  I dont care what anyone tells me\n  No way, win the day\n  No way, I win the day\n  it doesnt matter what I sacrifice to make this happen\n  Let go of this moment\n  (Ready Go)(Let me go)\n  Time is limited\n  (Ready Go)(Let me go)\n write off the changing days\n (Ready Go)(Let me go)\n Only 1 day?\n (Ready Go)(Let me go)\n Dont make me laugh!\n (Ready Go)(Let me go)\n I'm after no.1\n Listen to my evolution!!\n Listen to my evolution!!\n No way, win the day\n No way, I win the day\n Living through without control without worry\n No way, win the day\n No way, I win the day\n Risking everything, grant me my wish\n Listen to my evolution!!\n Listen to my evolution!!\n Listen to my evolution!!\n Listen to my evolution!!\n No concern about the rest, bring up the voltage\n All for one, right now!\n Revolution!\n (Ready Go)(Let me go)\n Continuously searching\n (Ready Go)(Let me go)\n the outcome is this style\n (Ready Go)(Let me go)\n bring it on, here we go!\n Listen to my evolution!!\n Listen to my evolution!!\n No way, win the day\n No way, I win the day\n I dont care what anyone tells me\n No way, win the day\n No way, I win the day\n It doesnt matter what I sacrifice to make this happen\n Let go of this moment."
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
const poster = document.querySelector('.poster_video');
const video = document.querySelector('.bg_video');
const button = document.querySelector('.button');
const text = document.querySelector('.text');
const view = document.querySelector('.view');
const triangle = document.getElementById('triangle');


view.addEventListener('click', () => {
    text.classList.toggle('out');
    
})  

next.addEventListener('click', function lotl() {
    document.getElementById("gir-bg").src="assets/img/lotl.jpg";
    document.getElementById("audio").src="assets/audio/Haythor.mp3";
    document.querySelector('.bg_video').src="assets/video/haythor.webm";
    document.querySelector('.poster_video').src="assets/video/trimmed.mp4";
    artist.textContent = 'LOTL';
    songName.textContent = 'Haythor';
    track.classList.add('lotl');
    player.classList.add('lotl');
    main.classList.add('lotl');
    current.classList.add('lotl');
    duration.classList.add('lotl');
    button.classList.add('off');
    text.classList.add('lotl');
    view.classList.add('lotl');
    triangle.classList.add('lotl');
    text.textContent = text1;
    if (text.classList.contains('out')){
        text.classList.remove('out')
    }
    
    
})


back.addEventListener('click', function girugamesh() {
    document.getElementById("gir-bg").src="assets/img/girugamesh.jpg";
    document.getElementById("audio").src="assets/audio/Evolution.mp3";
    document.querySelector('.bg_video').src="assets/video/evolution.mp4";
    document.querySelector('.poster_video').src="assets/video/short.mp4";
    artist.textContent = 'Girugamesh';
    songName.textContent = 'Evolution';
    track.classList.remove('lotl');
    player.classList.remove('lotl');
    main.classList.remove('lotl');
    current.classList.remove('lotl');
    duration.classList.remove('lotl');
    button.classList.remove('off');
    text.classList.remove('lotl');
    view.classList.remove('lotl');
    triangle.classList.remove('lotl');
    text.textContent = text2;
    if (text.classList.contains('out')){
        text.classList.remove('out')
    }
    
})

function playOrStop() {
    if (count == 0) {
        count = 1;
        audio.play();
        video.play();
        poster.classList.toggle('hide');
        document.getElementById("playStop").src="assets/png/pause.png";
    
    }
    
    else {
        count = 0;
        audio.pause();
        video.pause();
        poster.classList.toggle('hide');
        document.getElementById("playStop").src="assets/png/play.png";
  
    }
}

next.addEventListener('click', () => {
    if (track.classList.contains('anime')){
        track.classList.remove('anime')
        playOrStop()
    }
})

back.addEventListener('click', () => {
    if (track.classList.contains('anime')){
        track.classList.remove('anime')
        playOrStop()
    }
})


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
        durationTime.textContent = time(audio.duration);
    
})

audio.addEventListener('ended', () =>  {
    progress.value  = 0;
    count = 0;
    track.classList.remove('anime');
    poster.classList.remove('hide');
    document.getElementById("playStop").src="assets/png/play.png";
})

