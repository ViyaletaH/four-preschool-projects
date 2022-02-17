const buttonStart  = document.querySelector('button');
const buttonCont = document.querySelector('.button-container');
const cards = document.querySelector('.gameplay');


buttonStart.addEventListener('click', () => {
    buttonStart.classList.add('clicked');
    setTimeout(() => buttonCont.classList.add('clicked'), 2000);
    setTimeout(() =>cards.classList.add('open'), 3000);
})

const imgCover = document.querySelector('img');
const imgUke = document.querySelector('.two');

    imgCover.addEventListener('click', () => {
        imgCover.classList.add('open');
        imgUke.classList.add('open');
    })

const numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
numbersArray.sort(()=>Math.random()-0.5);
const arrayNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
arrayNumbers.sort(()=>Math.random()-0.5);

const objectA = {
    'assets/img/brenda-min.png': numbersArray[0],
    'assets/img/couple-min.png': numbersArray[1],
    'assets/img/jeffrey-min.png': numbersArray[2],
    'assets/img/ted-min.png': numbersArray[3],
    'assets/img/slivko-min.png': numbersArray[4],
    'assets/img/aileen-min.png': numbersArray[5],
    'assets/img/sada-min.png': numbersArray[6],
    'assets/img/manson-min.png': numbersArray[7],
    'assets/img/ed-min.png': numbersArray[8],
    'assets/img/zodiac-min.png': numbersArray[9],
}

const objectB = {
    'assets/img/brenda-min.png': arrayNumbers[0],
    'assets/img/couple-min.png': arrayNumbers[1],
    'assets/img/jeffrey-min.png': arrayNumbers[2],
    'assets/img/ted-min.png': arrayNumbers[3],
    'assets/img/slivko-min.png': arrayNumbers[4],
    'assets/img/aileen-min.png': arrayNumbers[5],
    'assets/img/sada-min.png': arrayNumbers[6],
    'assets/img/manson-min.png': arrayNumbers[7],
    'assets/img/ed-min.png': arrayNumbers[8],
    'assets/img/zodiac-min.png': arrayNumbers[9],
}


// function turningCards(data) {
    
    
    // data.forEach((element) => {
    //   const card = document.querySelector('card');
    //   card.classList.add("card");
    //   card.innerHTML = `<img src="${results.urls.regular}">`;
    //   photos.appendChild(card);
  
    // });
// }