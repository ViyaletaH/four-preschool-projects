import i18Obj from './translate.js';

const a = document.querySelector('.hamburger')
const b = document.querySelector('.nav')
const c = document.querySelector('.line1')
const d = document.querySelector('.line2')
const f = document.querySelector('.line3')

a.addEventListener('click', () => {
    b.classList.toggle('open') + c.classList.toggle('open') + d.classList.toggle('open') + f.classList.toggle('open') + a.classList.toggle('open')
})


const e = document.querySelector('.navigation')

e.addEventListener('click', () => {
   b.classList.remove('open') + c.classList.remove('open') + d.classList.remove('open') + f.classList.remove('open') + a.classList.remove('open')
   
})

const portfolioImgs = document.querySelectorAll('#portfolio-img');
const winButt = document.querySelector('.button-win')
const sprButt = document.querySelector('.button-spr')
const sumButt = document.querySelector('.button-sum')
const autButt = document.querySelector('.button-aut')

winButt.addEventListener ('click', () => {
    portfolioImgs.forEach((img, index) => img.src = `./assets/img/winter/${index + 1}.jpg`)
})                  

sprButt.addEventListener ('click', () => {
    portfolioImgs.forEach((img, index) => img.src = `./assets/img/spring/${index + 1}.jpg`)
})     

autButt.addEventListener ('click', () => {
    portfolioImgs.forEach((img, index) => img.src = `./assets/img/autumn/${index + 1}.jpg`)
})

sumButt.addEventListener ('click', () => {
    portfolioImgs.forEach((img, index) => img.src = `./assets/img/summer/${index + 1}.jpg`)
}) 

function changeClassActive() {
    winButt.addEventListener('click',() => {
        winButt.classList.add("active")
        sprButt.classList.remove("active")
        autButt.classList.remove("active")
        sumButt.classList.remove("active")
    })

    sprButt.addEventListener('click',() => {
        sprButt.classList.add("active")
        winButt.classList.remove("active")
        autButt.classList.remove("active")
        sumButt.classList.remove("active")
    })

    autButt.addEventListener('click',() => {
        autButt.classList.add("active")
        sprButt.classList.remove("active")
        winButt.classList.remove("active")
        sumButt.classList.remove("active")
    })

    sumButt.addEventListener('click',() => {
        sumButt.classList.add("active")
        sprButt.classList.remove("active")
        autButt.classList.remove("active")
        winButt.classList.remove("active")
    })
    
}

import {i18Obj as i} from './translate.js'

const rus = document.querySelector('.rus');
const eng = document.querySelector('.eng');
// let lang;



// rus.addEventListener('click', function() {
//   lang = 'ru';
// function getTranslate(lang) {
//     const datas= document.querySelectorAll(data-i18);
//     {datas.forEach((item) => {
//         item.textContent = i[lang][item.dataset.i18n];
//         } 
//         ); return(lang);
    
//     }
// }
// }
// )

rus.addEventListener('click', () => {
    
    document.querySelector('.hero-title').textContent = 'Алекса Райс';
    document.querySelector('.h2skills').textContent = 'Навыки';
    document.querySelector('.h2portfolio').textContent = 'Портфолио';
    document.querySelector('.h2video').textContent = 'Видео';
    document.querySelector('.h2price').textContent = 'Цены';
    document.getElementById('liskills').textContent = 'Навыки';
    document.getElementById('liportfolio').textContent = 'Портфолио';
    document.getElementById('livideo').textContent = 'Видео';
    document.getElementById('liprice').textContent = 'Цены';
    document.getElementById('contactsli').textContent = 'Контакты';
    document.querySelector('.hero-text').textContent  = 'Сохраните искренние эмоции, романтические переживания и счастливые моменты жизни вместе с профессиональным фотографом';
    document.querySelector('.button').textContent = 'Пригласить';
    document.querySelector('.ph-name').textContent = 'Фотография';
    document.querySelector('.ph1').textContent = 'Высококачественные  фото в студии';
    document.querySelector('.ph2').textContent = 'и на природе';
    document.querySelector('.vid-name').textContent = 'Видеосъемка';
    document.querySelector('.vid-text').textContent = 'Запечатлите лучшие моменты, чтобы они всегда оставались с вами';
    document.querySelector('.ret-name').textContent = 'Ретушь';
    document.querySelector('.ret-text').textContent = 'Я стремлюсь к тому, чтобы фотография превосходила реальность';
    document.querySelector('.aud-name').textContent = 'Звук';
    document.querySelector('.aud-text').textContent = 'Профессиональная запись звука для видео, рекламы, портфолио';
    document.querySelector('.button-win').textContent = 'Зима';
    document.querySelector('.button-spr').textContent = 'Весна',
    document.querySelector('.button-sum').textContent = 'Лето',
    document.querySelector('.button-aut').textContent = 'Осень',
    document.getElementById('price-description-1-span-1').textContent = 'Одна локация';
    document.getElementById('price-description-1-span-2').textContent = '120 цветных фото';
    document.getElementById('price-description-1-span-3').textContent = '12 отретушированных фото';
    document.getElementById('price-description-1-span-4').textContent = 'Готовность через 2-3 недели';
    document.getElementById('price-description-1-span-5').textContent = 'Макияж, визаж';
    document.getElementById('price-description-2-span-1').textContent = 'Одна-две локации';
    document.getElementById('price-description-2-span-2').textContent = '200 цветных фото';
    document.getElementById('price-description-2-span-3').textContent = '20 отретушированных фото';
    document.getElementById('price-description-2-span-4').textContent = 'Готовность через 1-2 недели';
    document.getElementById('price-description-2-span-5').textContent = 'Макияж, визаж';
    document.getElementById('price-description-3-span-1').textContent = 'Три локации и больше';
    document.getElementById('price-description-3-span-2').textContent = '300 цветных фото';
    document.getElementById('price-description-3-span-3').textContent = '50 отретушированных фото';
    document.getElementById('price-description-3-span-4').textContent = 'Готовность через 1 неделю';
    document.getElementById('price-description-3-span-5').textContent = 'Макияж, визаж, прическа';
    document.getElementById('price-btn1').textContent = 'Заказать съемку';
    document.getElementById('price-btn2').textContent = 'Заказать съемку';
    document.getElementById('price-btn3').textContent = 'Заказать съемку';
    document.getElementById('message').textContent = 'Ваше сообщение';
    document.querySelector('.contactsh2').textContent = 'Свяжитесь со мной';
    document.querySelector('.cont-btn').textContent = 'Отправить';
   }  
) 

eng.addEventListener('click', () => {
    document.querySelector('.hero-title').textContent = 'Alexa Rise';
    document.querySelector('.h2skills').textContent = 'Skills';
    document.querySelector('.h2portfolio').textContent = 'Portfolio';
    document.querySelector('.h2video').textContent = 'Video';
    document.querySelector('.h2price').textContent = 'Price';
    document.getElementById('liskills').textContent = 'Skills';
    document.getElementById('liportfolio').textContent = 'Portfolio';
    document.getElementById('livideo').textContent = 'Video';
    document.getElementById('liprice').textContent = 'Price';
    document.getElementById('contactsli').textContent = 'Contacts';
    document.querySelector('.hero-text').textContent  = 'Save sincere emotions, romantic feelings and happy moments of life together with professional photographer Alexa Rise';
    document.querySelector('.button').textContent = 'Hire me';
    document.querySelector('.ph-name').textContent = 'Photo';
    document.querySelector('.ph1').textContent = 'High-quality photos in the studio';
    document.querySelector('.ph2').textContent = 'and on the nature';
    document.querySelector('.vid-name').textContent = 'Video';
    document.querySelector('.vid-text').textContent = 'Capture your moments so that they always stay with you';
    document.querySelector('.ret-name').textContent = 'Retouch';
    document.querySelector('.ret-text').textContent = 'I strive to make photography surpass reality';
    document.querySelector('.aud-name').textContent = 'Audio';
    document.querySelector('.aud-text').textContent = 'Professional sounds recording for video, advertising, portfolio';
    document.querySelector('.button-win').textContent = 'Winter';
    document.querySelector('.button-spr').textContent = 'Spring',
    document.querySelector('.button-sum').textContent = 'Summer',
    document.querySelector('.button-aut').textContent = 'Autumn',
    document.getElementById('price-description-1-span-1').textContent = 'One location';
    document.getElementById('price-description-1-span-2').textContent = '120 photos in color';
    document.getElementById('price-description-1-span-3').textContent = '12 photos in retouch';
    document.getElementById('price-description-1-span-4').textContent = 'Readiness 2-3 weeks';
    document.getElementById('price-description-1-span-5').textContent = 'Make up, visage';
    document.getElementById('price-description-2-span-1').textContent = 'One or two locations';
    document.getElementById('price-description-2-span-2').textContent = '200 photos in color';
    document.getElementById('price-description-2-span-3').textContent = '20 photos in retouch';
    document.getElementById('price-description-2-span-4').textContent = 'Readiness 1-2 weeks';
    document.getElementById('price-description-2-span-5').textContent = 'Make up, visage';
    document.getElementById('price-description-3-span-1').textContent = 'Three locations or more';
    document.getElementById('price-description-3-span-2').textContent = '300 photos in color';
    document.getElementById('price-description-3-span-3').textContent = '50 photos in retouch';
    document.getElementById('price-description-3-span-4').textContent = 'Readiness 1 week';
    document.getElementById('price-description-3-span-5').textContent = 'Make up, visage, hairstyle';
    document.getElementById('price-btn1').textContent = 'Order shooting';
    document.getElementById('price-btn2').textContent = 'Order shooting';
    document.getElementById('price-btn3').textContent = 'Order shooting';
    document.getElementById('message').textContent = 'Message';
    document.querySelector('.contactsh2').textContent = 'Contact me';
    document.querySelector('.cont-btn').textContent = 'Send message';
})


