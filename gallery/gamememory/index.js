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


// function turningCards(data) {
    
    
    // data.forEach((element) => {
    //   const card = document.querySelector('card');
    //   card.classList.add("card");
    //   card.innerHTML = `<img src="${results.urls.regular}">`;
    //   photos.appendChild(card);
  
    // });
// }