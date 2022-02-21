const buttonCont = document.querySelector('.button-container');
const cards = document.querySelectorAll('.card');
const gameplay = document.querySelector('.gameplay')
const killers = document.querySelectorAll('.killer');
const covers = document.querySelectorAll('.cover');
let turned = false;
let killerOne, killerTwo;
let block = false;
let count = [];
var countSteps = 0; 
const music = document.querySelector('.music');
var facts = document.querySelector('.random-facts');
var fact = document.querySelector('.facts-themselves');

const records = document.querySelector('.records');
const container =  document.querySelector('.another-buttons-container');
const buttonStart  = document.querySelector('button');


buttonStart.addEventListener('click', () => {
    buttonStart.classList.add('clicked');
    setTimeout(() => buttonCont.classList.add('clicked'), 2000);
    setTimeout(() =>gameplay.classList.add('open'), 3000);
    const mus = document.createElement('div');
    mus.innerHTML = `<embed autostart="true" type="audio/mpeg" loop="" src="./assets/sound/Far From Any Road.mp3">`;
    music.appendChild(mus);
    mix();
})

function mix() {
    cards.forEach(card => {
        let random  = Math.floor(Math.random() * 20);
        card.style.order = random;
    })

}

    function turn() {
        if (block) return;
        if (this === killerOne) return;
        this.classList.add('open'); 
        if (block) return;
        if(!turned) {
            turned = true;
            killerOne = this;

            return;

        } 
        
        turned = false;
        killerTwo = this;
        match();
        

    }

    function match() {
        
        if (killerOne.dataset.killer === killerTwo.dataset.killer) {
            isMatch();
        } else {
            isNotMatch();
        }
    }

    function isMatch() {
        killerOne.removeEventListener('click', turn);
        killerTwo.removeEventListener('click', turn);
        count.push('match');
        if (count.length == 10) {
            gameplay.classList.remove('open');
            reset.classList.add('open');
            count.length = 0;
            container.classList.add('open');
            randomPrise();
        }
    }

    function isNotMatch() {
        block = true;
        setTimeout(() => {
            killerOne.classList.remove('open');
            killerTwo.classList.remove('open');
            block =  false;
        }, 1500);
        
    }

cards.forEach(card => card.addEventListener('click', turn));
const reset = document.querySelector('.play-again');
reset.addEventListener('click', () => {
    location.reload();
       
})

function randomPrise() {
    let a = 'https://www.youtube.com/watch?v=08dpnn0cd10&t=2293s'; 
    let b ='https://www.youtube.com/watch?v=1_KpxSjwzM4';
    let c ='https://www.youtube.com/watch?v=3YLh1-mCIpU';
    let d = 'https://www.youtube.com/watch?v=hnuSl8PNYqc';
    const wins = [];
    wins.push(a, b, c, d);
    var rand = wins[Math.floor(Math.random() * wins.length)];
    var win = document.querySelector('.win');
    win.classList.add('open');
    var link = document.createElement('a');
    link.innerHTML = `<a href="${rand}"> here</a>`;
    win.appendChild(link);
    var counter = document.querySelector('.counter');
    counter.classList.add('open');
    
    facts.classList.add('open');
    var aileen = document.querySelector('.aileen');
    aileen.addEventListener('click', () => {
        
        fact.classList.add('open');
        facts.classList.remove ('open');
        var imgCont = document.querySelector('.img');
        imgCont.innerHTML = `<img class="image" src="assets/img/aileenmin.png">`
        var textCont = document.querySelector('.text');
        textCont.innerText = "Aileen was caught and convicted in 7 murders of men \"thanks\" to her girlfriend's betrayal. She got a death penalty as a result. By the way, all the jury members were male.";
            
    })
    var back = document.querySelector('.arrow');
    back.addEventListener('click', () => {
        fact.classList.remove('open');
        facts.classList.add ('open');
    })
    var brenda = document.querySelector('.brenda');
    brenda.addEventListener('click', () => {
        
        fact.classList.add('open');
        facts.classList.remove ('open');
        var imgCont = document.querySelector('.img');
        imgCont.innerHTML = `<img class="image" src="assets/img/brendamin.png">`
        var textCont = document.querySelector('.text');
        textCont.innerText = "Brenda was 16 when she took a rifle opened a window and shoot 6 children, who were standing nearby the school next to her house. When she was asked for a reason, she answered: \"I don't like Mondays\".";
            
    })

    var myra = document.querySelector('.myra');
    myra.addEventListener('click', () => {
        
        fact.classList.add('open');
        facts.classList.remove ('open');
        var imgCont = document.querySelector('.img');
        imgCont.innerHTML = `<img class="image" src="assets/img/couplemin.png">`
        var textCont = document.querySelector('.text');
        textCont.innerText = "Myra and Ian were lovers. Together they kidnapped, sexually assaulted and killed 5 boys and girls. Myra helped Ian to kidnap children and torture them. They also videotaped the tortures.";
            
    })

    var ed = document.querySelector('.ed');
    ed.addEventListener('click', () => {
        
        fact.classList.add('open');
        facts.classList.remove ('open');
        var imgCont = document.querySelector('.img');
        imgCont.innerHTML = `<img class="image" src="assets/img/edmin.png">`
        var textCont = document.querySelector('.text');
        textCont.innerText = "Ed was a necrophile who sewed masks and clothes out of human skin after his murders.";
            
    })

    var jeff = document.querySelector('.jeff');
    jeff.addEventListener('click', () => {
        
        fact.classList.add('open');
        facts.classList.remove ('open');
        var imgCont = document.querySelector('.img');
        imgCont.innerHTML = `<img class="image" src="assets/img/jeffreymin.png">`
        var textCont = document.querySelector('.text');
        textCont.innerText = "Jeffrey was a killer who didn't want to kill. He strived to create a \"zombie\" - a partner who would never refuse or leave him alone. Unfortunately every experiment of his would end with a new death.";
            
    })

    var manson = document.querySelector('.charles');
    manson.addEventListener('click', () => {
        
        fact.classList.add('open');
        facts.classList.remove ('open');
        var imgCont = document.querySelector('.img');
        imgCont.innerHTML = `<img class="image" src="assets/img/mansonmin.png">`
        var textCont = document.querySelector('.text');
        textCont.innerText = "Manson was a mad man, a souteneur and a killer who created his own hippy-style cult. Many of his followers didn't renounce him even in jail.";
            
    })

    var sada = document.querySelector('.sada');
    sada.addEventListener('click', () => {
        
        fact.classList.add('open');
        facts.classList.remove ('open');
        var imgCont = document.querySelector('.img');
        imgCont.innerHTML = `<img class="image" src="assets/img/sadamin.png">`
        var textCont = document.querySelector('.text');
        textCont.innerText = "Sada Abe was a young woman who killed her man cause of jealousy and love to him. She strangled him to death, then she cut her name on his skin, cut off his penis and ran away. She preserved the penis and had necrophilic acts with it. After she was caught she became a famous writer.";
            
    })

    var slivko = document.querySelector('.slivko');
    slivko.addEventListener('click', () => {
        
        fact.classList.add('open');
        facts.classList.remove ('open');
        var imgCont = document.querySelector('.img');
        imgCont.innerHTML = `<img class="image" src="assets/img/slivkomin.png">`
        var textCont = document.querySelector('.text');
        textCont.innerText = "Slivko was a soviet honored teacher before he was caught and convicted in murders, tortures and sexual assault of teenage boys. He videotaped his crimes.";
            
    })

    var ted = document.querySelector('.ted');
    ted.addEventListener('click', () => {
        
        fact.classList.add('open');
        facts.classList.remove ('open');
        var imgCont = document.querySelector('.img');
        imgCont.innerHTML = `<img class="image" src="assets/img/tedmin.png">`
        var textCont = document.querySelector('.text');
        textCont.innerText = "Ted was a loving father and husband with a law education and the experience of work on psychology help hotline. But also he was the reason of 38 young girls deaths.";
            
    })

    var zodiac = document.querySelector('.zodiac');
    zodiac.addEventListener('click', () => {
        
        fact.classList.add('open');
        facts.classList.remove ('open');
        var imgCont = document.querySelector('.img');
        imgCont.innerHTML = `<img class="image" src="assets/img/zodiacmin.png">`
        var textCont = document.querySelector('.text');
        textCont.innerText = "Yes! There's no photo! It's all because so-called Zodiac was never caught for his murders. He left only a mistery and several encrypted letters. Most of them are still not decrypted.";
            
    })
    

}

function countUp() {
    updateCount(++countSteps);
    
}

function updateCount() {
    document.getElementById('counter-display').innerText= countSteps;
}


