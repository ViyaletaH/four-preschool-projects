const buttonStart  = document.querySelector('button');
const buttonCont = document.querySelector('.button-container');
const cards = document.querySelectorAll('.card');
const gameplay = document.querySelector('.gameplay')
const killers = document.querySelectorAll('.killer');
const covers = document.querySelectorAll('.cover');
let turned = false;
let killerOne, killerTwo;
let block = false;
let count = [];
const reset = document.querySelector('.play-again');
const records = document.querySelector('.records');
const container =  document.querySelector('.another-buttons-container');

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
        records.classList.add('open');
        container.classList.add('open');
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

reset.addEventListener('click', () => {
    reset.classList.remove('open');
    records.classList.remove('open');
    container.classList.remove('open');
    setTimeout(() =>gameplay.classList.add('open'), 3000);
    mix();
})


