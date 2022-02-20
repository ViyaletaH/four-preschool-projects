const buttonStart  = document.querySelector('button');
const buttonCont = document.querySelector('.button-container');
const cards = document.querySelectorAll('.card');
const gameplay = document.querySelector('.gameplay')
const killers = document.querySelectorAll('.killer');
const covers = document.querySelectorAll('.cover');


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

let turned = false;
let killerOne, killerTwo;
let block = false;

function turn() {
    this.classList.toggle('open'); 
    if (block) return;
    if(!turned) {
        turned = true;
        killerOne = this;
    } else {
        turned = false;
        killerTwo = this;
    }

}

cards.forEach(card => card.addEventListener('click', turn));




// covers.forEach(cover => cover.addEventListener('click', openTwo));
// killers.forEach(killer => killer.classList.add('open'));
// function open() {
//     this.classList.add('open');
// }
// killers.forEach(killer => killer.addEventListener('click', open));
// const imgCover1 = document.querySelector('.img1');
// const imgCover2 = document.querySelector('.img2');
// const imgCover3 = document.querySelector('.img3');
// const imgCover4 = document.querySelector('.img4');
// const imgCover5 = document.querySelector('.img5');
// const imgCover6 = document.querySelector('.img6');
// const imgCover7 = document.querySelector('.img7');
// const imgCover8 = document.querySelector('.img8');
// const imgCover9 = document.querySelector('.img9');
// const imgCover10 = document.querySelector('.img10');
// const imgCover11 = document.querySelector('.img11');
// const imgCover12 = document.querySelector('.img12');
// const imgCover13 = document.querySelector('.img13');
// const imgCover14 = document.querySelector('.img14');
// const imgCover15 = document.querySelector('.img15');
// const imgCover16 = document.querySelector('.img16');
// const imgCover17 = document.querySelector('.img17');
// const imgCover18 = document.querySelector('.img18');
// const imgCover19 = document.querySelector('.img19');
// const imgCover20 = document.querySelector('.img20');

// const img1 = document.getElementById('1');
// const img2 = document.getElementById('2'); 
// const img3 = document.getElementById('3'); 
// const img4 = document.getElementById('4'); 
// const img5 = document.getElementById('5');
// const img6 = document.getElementById('6'); 
// const img7 = document.getElementById('7'); 
// const img8 = document.getElementById('8'); 
// const img9 = document.getElementById('9');
// const img10 = document.getElementById('10'); 
// const img11 = document.getElementById('11'); 
// const img12 = document.getElementById('12'); 
// const img13 = document.getElementById('13');
// const img14 = document.getElementById('14'); 
// const img15 = document.getElementById('15'); 
// const img16 = document.getElementById('16'); 
// const img17 = document.getElementById('17');
// const img18 = document.getElementById('18'); 
// const img19 = document.getElementById('19'); 
// const img20 = document.getElementById('20'); 

// let firstCard = [];
// let secondCard = []; 

// imgCover1.addEventListener('click', () => {
//     imgCover1.classList.add('open');
//     img1.classList.add('open');
//     // firstCard.push(img1);
//     // firstCard.length === 1 && secondCard.length === 1 ? match() : console.log('not enough');
// })

// imgCover2.addEventListener('click', () => {
//     imgCover2.classList.add('open');
//     img2.classList.add('open');
        
// })

// imgCover3.addEventListener('click', () => {
//     imgCover3.classList.add('open');
//     img3.classList.add('open');
            
// })

// imgCover4.addEventListener('click', () => {
//     imgCover4.classList.add('open');
//     img4.classList.add('open');
            
// })

// imgCover5.addEventListener('click', () => {
//     imgCover5.classList.add('open');
//     img5.classList.add('open');
        
// })

// imgCover6.addEventListener('click', () => {
//     imgCover6.classList.add('open');
//     img6.classList.add('open');
 
// })

// imgCover7.addEventListener('click', () => {
//     imgCover7.classList.add('open');
//     img7.classList.add('open');
        
// })

// imgCover8.addEventListener('click', () => {
//     imgCover8.classList.add('open');
//     img8.classList.add('open');
       
// })

// imgCover9.addEventListener('click', () => {
//     imgCover9.classList.add('open');
//     img9.classList.add('open');
      
// })

// imgCover10.addEventListener('click', () => {
//     imgCover10.classList.add('open');
//     img10.classList.add('open');
//     secondCard.push(img10);
//     firstCard.length === 1 && secondCard.length === 1 ? match() : console.log('not enough');
// })

// imgCover11.addEventListener('click', () => {
//     imgCover11.classList.add('open');
//     img11.classList.add('open');
       
// })

// imgCover12.addEventListener('click', () => {
//     imgCover12.classList.add('open');
//     img12.classList.add('open');
        
// })

// imgCover13.addEventListener('click', () => {
//     imgCover13.classList.add('open');
//     img13.classList.add('open');
  
// })

// imgCover14.addEventListener('click', () => {
//     imgCover14.classList.add('open');
//     img14.classList.add('open');
        
// })

// imgCover15.addEventListener('click', () => {
//     imgCover15.classList.add('open');
//     img15.classList.add('open');
       
// })

// imgCover16.addEventListener('click', () => {
//     imgCover16.classList.add('open');
//     img16.classList.add('open');
       
// })

// imgCover17.addEventListener('click', () => {
//     imgCover17.classList.add('open');
//     img17.classList.add('open');
       
// })

// imgCover18.addEventListener('click', () => {
//     imgCover18.classList.add('open');
//     img18.classList.add('open');
       
// })

// imgCover19.addEventListener('click', () => {
//     imgCover19.classList.add('open');
//     img19.classList.add('open');
        
// })

// imgCover20.addEventListener('click', () => {
//     imgCover20.classList.add('open');
//     img20.classList.add('open');
//     firstCard.push(img20);
//     firstCard.length === 1 && secondCard.length === 1 ? match() : console.log('not enough');
// })

// function match() {
//     if (firstCard === secondCard) {
//         console.log('match');
//         console.log(firstCard, secondCard);
//     } else {
//         console.log('none');
//     }
// }


// let turned = false;
// let cardOne, cardTwo;

// function match() {
//     if (!turned) {
//         turned = true;
//         cardOne  = this;
//     } else {
//         turned = false;
//         cardTwo = this;

//         if (cardOne.dataset.killer === cardTwo.dataset.killer) {
//             console.log('match');
//         }
//     }


// }

// function match(array) {
//     array = chosenCards;
//     var test  =  array[1].toLowerCase();
//     var target  = array[0].toLowerCase();
//     for (var i = 0; i < test.length; i++) {
//         if (target.indexOf(test[i]) < 0)
//         console.log('none');
//         }
//         console.log('true');
    
    
   
// }

// console.log(chosenCards);

// const card = document.querySelectorAll('.card');
// const arrayC = [card];
// console.log(arrayC);
// const arrayNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
// function reArrange(){
// arrayNumbers.sort(()=>Math.random()-0.5);
// }
// reArrange();
// const arrayA = [
//     {name: 'brendamin', id: arrayNumbers[0], path: 'assets/img/brendamin.png'},
//     {name: 'couplemin', id: arrayNumbers[1], path: 'assets/img/couplemin.png'},
//     {name: 'jeffreymin', id: arrayNumbers[2], path: 'assets/img/jeffreymin.png'},
//     {name: 'tedmin', id: arrayNumbers[3], path: 'assets/img/tedmin.png'},
//     {name: 'slivkomin', id: arrayNumbers[4], path: 'assets/img/slivkomin.png'},
//     {name: 'aileenmin', id: arrayNumbers[5], path: 'assets/img/aileenmin.png'},
//     {name: 'sadamin', id: arrayNumbers[6], path: 'assets/img/sadamin.png'},
//     {name:  'mansonmin', id: arrayNumbers[7], path: 'assets/img/mansonmin.png'},
//     {name: 'edmin', id: arrayNumbers[8], path: 'assets/img/edmin.png'},
//     {name: 'zodiacmin', id: arrayNumbers[9], path: 'assets/img/zodiacmin.png'},
//     {name: 'brendamin', id: arrayNumbers[0], path: 'assets/img/brendamin.png'},
//     {name: 'couplemin', id: arrayNumbers[1], path: 'assets/img/couplemin.png'},
//     {name: 'jeffreymin', id: arrayNumbers[2], path: 'assets/img/jeffreymin.png'},
//     {name: 'tedmin', id: arrayNumbers[3], path: 'assets/img/tedmin.png'},
//     {name: 'slivkomin', id: arrayNumbers[4], path: 'assets/img/slivkomin.png'},
//     {name: 'aileenmin', id: arrayNumbers[5], path: 'assets/img/aileenmin.png'},
//     {name: 'sadamin', id: arrayNumbers[6], path: 'assets/img/sadamin.png'},
//     {name:  'mansonmin', id: arrayNumbers[7], path: 'assets/img/mansonmin.png'},
//     {name: 'edmin', id: arrayNumbers[8], path: 'assets/img/edmin.png'},
//     {name: 'zodiacmin', id: arrayNumbers[9], path: 'assets/img/zodiacmin.png'},
// ]


// function getCard1() {
   
//     arrayA.forEach(function(item) {
//         arrayA.find(item => item.id === '1');
//         const image = document.createElement('img');
//         const card1 = document.getElementById('1');
//         image.classList.add(item.name);
//         image.innerHTML = `<img src="${item.path}">`
//         card1.appendChild(image);
//     })      
    
// }

// function getCard2() {
//     for (const {name, id, path} of arrayA) {
        
//         const b = arrayA.filter(y => y.id === 2);
//         const image2 = document.createElement('div');
//         const card2 = document.querySelector('.card2');
//         image2.classList.add(name);
//         image2.innerHTML = `<img src="assets/img/${name}.png">`
//         card2.appendChild(image2);
        
//     }
// }

// getCard1();
// getCard2();
// function imagesAdd() {
//     for (let i = 0; i < arrayA.length; i++) {
//         const image = document.createElement('img');
//         image.setAttribute('id', String(i));
//         image.setAttribute('src', 'assets/img/KILLER.png');
//         cards.appendChild(image);
        
//     }
// }
// const one =  document.getElementById('1');
// const two =  document.getElementById('2');
// const three =  document.getElementById('3');
// const four =  document.getElementById('4');
// const five =  document.getElementById('5');
// const six =  document.getElementById('6');
// const seven =  document.getElementById('7');
// const eight =  document.getElementById('8');
// const nine =  document.getElementById('9');
// const ten =  document.getElementById('10');
// const eleven =  document.getElementById('11');
// const twelve =  document.getElementById('12');
// const thirteen =  document.getElementById('13');
// const fourteen =  document.getElementById('14');
// const fifteen =  document.getElementById('15');
// const sixteen =  document.getElementById('16');
// const seventeen =  document.getElementById('17');
// const eighteen =  document.getElementById('18');
// const nineteen =  document.getElementById('19');
// const twenty =  document.getElementById('20');

// const cardsArray = [];

// cardsArray.push(one, two, three, four, five, six, seven, eight, nine, ten, eleven, twelve, thirteen, fourteen, fifteen, sixteen, seventeen, eighteen, nineteen, twenty);
// const data = [];
// data.push(cardsArray, arrayA, arrayB);
// function imagesAdd() { 
    // for (const {name, id, path} of arrayA) {
    // for (let i = 0; i < arrayA.length; i++) {
    //     const image = document.createElement('img');
    //     image.setAttribute('id', String(i));
    //     image.setAttribute('src', 'assets/img/KILLER.png');
    //     image.classList.add(name);
    //     card.appendChild(image);
        // arrayA.forEach((item) => {
        //     arrayC.forEach((item2) => {
        //         if (item.id === item2.id) {
        //             const image = document.createElement('img');
        //             image.setAttribute('id', `${item.id}`);
        //             image.setAttribute('src', `${item.path}`);
        //             image.classList.add(item.name);
        //             item2.appendChild(image);
        //         }
        //     }) 
        // })
        
    // }
    // break
    // }
    // const arr1 = cardsArray;
    // const arr2 = arrayA;
    // for (const {name, id} of arr2) {
    // if (arr1[index] == id) {
    //     const image = document.createElement("div");
    //     const card = document.getElementById(id);
    //     image.classList.add(name);
    //     image.innerHTML = `<img src="assets/img/${name}.png">`
    //     card.appendChild(image);
    // } else {console.log('problem');}}

// }

// function turningCards(data) {
    
    
    // data.forEach((element) => {
    //   const card = document.querySelector('card');
    //   card.classList.add("card");
    //   card.innerHTML = `<img src="${results.urls.regular}">`;
    //   photos.appendChild(card);
  
    // });
// }