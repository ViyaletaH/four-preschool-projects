
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

const records = document.querySelector('.records');
const container =  document.querySelector('.another-buttons-container');
const buttonStart  = document.querySelector('button');


buttonStart.addEventListener('click', () => {
    buttonStart.classList.add('clicked');
    setTimeout(() => buttonCont.classList.add('clicked'), 2000);
    setTimeout(() =>gameplay.classList.add('open'), 3000);
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
}

function countUp() {
    updateCount(++countSteps);
    
}

function updateCount() {
    document.getElementById('counter-display').innerText= countSteps;
}