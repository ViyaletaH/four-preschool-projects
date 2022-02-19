const buttonStart  = document.querySelector('button');
const buttonCont = document.querySelector('.button-container');
const cards = document.querySelectorAll('.card');
const gameplay = document.querySelector('.gameplay')
// const card = document.querySelectorAll('.card');
// const arrayC = [card];
// console.log(arrayC);


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

const imgCover = document.querySelector('img');
const imgBr = document.querySelector('.brendamin');  ;
const imgCou = document.querySelector('.couplemin');
const imgJef = document.querySelector('.jeffreymin');
const imgTed = document.querySelector('.tedmin');
const imgSliv = document.querySelector('.slivkomin');
const imgAil = document.querySelector('.aileenmin');
const imgSada = document.querySelector('.sadamin');
const imgMan = document.querySelector('.mansonmin');
const imgEd = document.querySelector('.edmin');
const imgZod = document.querySelector('.zodiacmin');
    imgCover.addEventListener('click', () => {
        imgCover.classList.add('open');
        imgBr.classList.add('open');
        imgCou.classList.add('open');
        imgJef.classList.add('open');
        imgTed.classList.add('open');
        imgSliv.classList.add('open');
        imgAil.classList.add('open');
        imgSada.classList.add('open');
        imgMan.classList.add('open');
        imgEd.classList.add('open');
        imgZod.classList.add('open');
    })

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