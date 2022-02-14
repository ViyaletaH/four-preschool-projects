const basicUrl =
  "https://api.unsplash.com/search/photos?query=shanghai+night&client_id=6adFL1um8JXRIrgsfChxvwqAc_f1MVYZKe5lOBtuSek";
const china =
  "https://api.unsplash.com/search/photos?query=china&client_id=6adFL1um8JXRIrgsfChxvwqAc_f1MVYZKe5lOBtuSek";
const search = document.querySelector("form");
const searcher = document.querySelector(".searcherItself");
const glass = document.querySelector(".glass");
const close = document.querySelector(".close");
const mao = document.querySelector(".mao");
const back = document.querySelector(".back");
const carD = document.querySelector(".card");
const main = document.querySelector("main");
const music = document.createElement("div");

getData(basicUrl);
async function getData(url) {
  const res = await fetch(url, {
    headers: {
      Authorization: "Client-ID 6adFL1um8JXRIrgsfChxvwqAc_f1MVYZKe5lOBtuSek",
    },
  });
  const data = await res.json();
  photoCards(data);
  console.log(data);
}

function photoCards(data) {
  const photos = document.querySelector(".image-container");
  document.querySelector(".image-container").innerHTML = "";
  data.results.forEach((results) => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `<img src="${results.urls.regular}">`;
    photos.appendChild(card);

    card.addEventListener("click", () => {
      const cardOpen = document.createElement("div");
      cardOpen.classList.add("cardOpen");
      cardOpen.innerHTML = card.innerHTML;
      main.appendChild(cardOpen);

      if (main.contains(cardOpen)) {
        const darkenedCover = document.createElement("div");
        darkenedCover.classList.add("darkenedCover");
        main.appendChild(darkenedCover);

        darkenedCover.addEventListener("click", () => {
          main.removeChild(darkenedCover);
          main.removeChild(cardOpen);
        });
      }
    });
  });
}

back.addEventListener("click", () => {
  if (mao.classList.contains("force")) {
    getData(china);
    mao.classList.remove("force");
    back.classList.remove("enable");
    
    music.classList.add("music");
    music.innerHTML = `<embed src="./assets/music.mp3" autostart="true">`;
    back.appendChild(music);
  }
});

search.addEventListener("submit", (el) => {
  el.preventDefault();
  const searchContent =
    "https://api.unsplash.com/search/photos?query=" +
    searcher.value +
    "&client_id=6adFL1um8JXRIrgsfChxvwqAc_f1MVYZKe5lOBtuSek";
  getData(searchContent);
  close.classList.add("active");
  if (
    searcher.value == "america" ||
    searcher.value == "America" ||
    searcher.value == "AMERICA" ||
    searcher.value == "New York" ||
    searcher.value == "new york" ||
    searcher.value == "'america'"
  ) {
    mao.classList.add("force");
    back.classList.add("enable");
  } else {
    back.removeChild(music);
  }
});

glass.addEventListener("click", () => {
  const searchContent =
    "https://api.unsplash.com/search/photos?query=" +
    searcher.value +
    "&client_id=6adFL1um8JXRIrgsfChxvwqAc_f1MVYZKe5lOBtuSek";
  getData(searchContent);
  close.classList.add("active");

  if (
    searcher.value == "america" ||
    searcher.value == "America" ||
    searcher.value == "AMERICA" ||
    searcher.value == "New York" ||
    searcher.value == "new york" ||
    searcher.value == "'america'"
  ) {
    mao.classList.add("force");
    back.classList.add("enable");
  } else {
    back.removeChild(music);
  }
});

close.addEventListener("click", () => {
  searcher.value = "";
  close.classList.remove("active");
});

console.log(
  "Вёрстка +10\nна странице есть несколько фото и строка поиска +5-да\nв футере приложения есть ссылка на гитхаб автора приложения, год создания приложения, логотип курса со ссылкой на курс +5-да\nПри загрузке приложения на странице отображаются полученные от API изображения +10-да\nЕсли в поле поиска ввести слово и отправить поисковый запрос, на странице отобразятся изображения соответствующей тематики, если такие данные предоставляет API +10-да\nПоиск +30\nпри открытии приложения курсор находится в поле ввода +5-да\nесть placeholder +5-да\nавтозаполнение поля ввода отключено (нет выпадающего списка с предыдущими запросами) +5-да\nпоисковый запрос можно отправить нажатием клавиши Enter +5-да\nпосле отправки поискового запроса и отображения результатов поиска, поисковый запрос продолжает отображаться в поле ввода +5-да\nв поле ввода есть крестик при клике по которому поисковый запрос из поля ввода удаляется и отображается placeholder +5-да\nОчень высокое качество оформления приложения и/или дополнительный не предусмотренный в задании функционал, улучшающий качество приложения +10-дополнительный функционал\nвысокое качество оформления приложения предполагает собственное оригинальное оформление равное или отличающееся в лучшую сторону по сравнению с демо\n68/70"
);
