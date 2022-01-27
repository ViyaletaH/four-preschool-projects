console.log(
'Верстка валидная +10\nВёрстка семантическая +20-да\nВ коде странице присутствуют следующие элементы:\nheader, main, footer +2-да\nшесть элементов section +2-да\nтолько один заголовок h1 +2-да\nпять заголовков h2 +2-да\nодин элемент nav +2-да\nдва списка ul-li-a (панель навигации, ссылки на соцсети) +2-да\nдесять кнопок button +2-да\nдва инпута: input type="email" и input type="tel" +2-да\nодин элемент textarea +2-да\nтри атрибута placeholder +2-да\nВёрстка соответствует макету +48-да\nблок header +6-да\nсекция hero +6-да\nсекция skills +6-да\nсекция portfolio +6-да\nсекция video +6-да\nсекция price +6-да\nсекция contacts +6-да\nблок footer +6-да\nТребования к css + 12\nдля построения сетки используются флексы или гриды +2-да, флексы\nпри уменьшении масштаба страницы браузера вёрстка размещается по центру, а не сдвигается в сторону +2-да\nфоновый цвет тянется на всю ширину страницы +2-да\nиконки добавлены в формате .svg. +2-да\nизображения добавлены в формате .jpg +2-да\nесть favicon +2-да\nИнтерактивность, реализуемая через css +20\nплавная прокрутка по якорям +5-да \nссылки в футере ведут на гитхаб автора проекта и на страницу курса +5-да\nинтерактивность включает в себя не только изменение внешнего вида курсора, например, при помощи свойства cursor: pointer,\nно и другие визуальные эффекты, например, изменение цвета фона или цвета шрифта. +5-да, согласно макету: кнопки и ссылки(текстовые)+реализация своих дизайнерских воззрений относительно переходов хд\nплавное изменение внешнего вида элемента при наведении и клике не влияющее на соседние элементы +5-да\nTotal score: 100/100'
);
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

console.log('Вёрстка соответствует макету. Ширина экрана 768px +48-да\nНи на одном из разрешений до 320px включительно не появляется горизонтальная полоса прокрутки. Весь контент страницы при этом сохраняется: не обрезается и не удаляется +15-контент частично обрезается 5 из 15 пунктов\nнет полосы прокрутки при ширине страницы от 1440рх до 768рх +5-да\nнет полосы прокрутки при ширине страницы от 768рх до 480рх +5-да\nнет полосы прокрутки при ширине страницы от 480рх до 320рх +5-да\nНа ширине экрана 768рх и меньше реализовано адаптивное меню +22-да\nпри ширине страницы 768рх панель навигации скрывается, появляется бургер-иконка +2-да\nпри нажатии на бургер-иконку справа плавно появляется адаптивное меню, бургер-иконка изменяется на крестик +4-да\nвысота адаптивного меню занимает всю высоту экрана. При ширине экрана 768-620рх вёрстка меню соответствует макету, когда экран становится уже, меню занимает всю ширину экрана +4-да, но высота не по экрану, 2 из 4\nпри нажатии на крестик адаптивное меню плавно скрывается уезжая за правую часть экрана, крестик превращается в бургер-иконку +4-да\nбургер-иконка, которая при клике превращается в крестик, создана при помощи css-анимаций без использования изображений +2-да\nссылки в адаптивном меню работают, обеспечивая плавную прокрутку по якорям +2-да\nпри клике по ссылке в адаптивном меню адаптивное меню плавно скрывается, крестик превращается в бургер-иконку +4-нет')


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