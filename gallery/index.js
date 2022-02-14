const basicUrl =
  "https://api.unsplash.com/search/photos?query=beijing&client_id=6adFL1um8JXRIrgsfChxvwqAc_f1MVYZKe5lOBtuSek";
const china = "https://api.unsplash.com/search/photos?query=china&client_id=6adFL1um8JXRIrgsfChxvwqAc_f1MVYZKe5lOBtuSek";
const search = document.querySelector("form");
const searcher = document.querySelector(".searcherItself");
const glass = document.querySelector(".glass");
const close = document.querySelector(".close");
const mao = document.querySelector(".mao");
const back = document.querySelector('.back');
const carD = document.querySelector('.card');
const main = document.querySelector('main');

getData(basicUrl);
async function getData(url) {
  const res = await fetch(url, {
    headers: {
      Authorization: "Client-ID 6adFL1um8JXRIrgsfChxvwqAc_f1MVYZKe5lOBtuSek",
    },
    // parameters: {
    //     per_page = 30,
    // },
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
    
    card.addEventListener('click', () => {
        const cardOpen = document.createElement('div');
        cardOpen.classList.add('cardOpen');
        cardOpen.innerHTML = card.innerHTML;
        main.appendChild(cardOpen);

        if (main.contains(cardOpen)) {
            const darkenedCover = document.createElement('div');
            darkenedCover.classList.add('darkenedCover');
            main.appendChild(darkenedCover);

            darkenedCover.addEventListener('click', () => {
                darkenedCover.classList.add('close');
                main.removeChild(cardOpen);

            })
        }
        
    })
  });
}



search.addEventListener("submit", (el) => {
  el.preventDefault();
  const searchContent =
    "https://api.unsplash.com/search/photos?query=" +
    searcher.value +
    "&client_id=6adFL1um8JXRIrgsfChxvwqAc_f1MVYZKe5lOBtuSek";
  getData(searchContent);
  close.classList.add("active");
  if (searcher.value == 'america' || searcher.value == 'America' ||  searcher.value == 'AMERICA' || searcher.value == 'New York' || searcher.value == 'new york' || searcher.value == "'america'") {
    mao.classList.add('force');
    back.classList.add('enable');
    } 
    else {
        document.querySelector('.music').innerHTML = '';
    }
});

back.addEventListener('click', () => {
    if (mao.classList.contains('force'))  {
        getData(china);
        mao.classList.remove('force');
        back.classList.remove('enable');
        const music = document.createElement("div");
        music.classList.add("music");
        music.innerHTML = `<embed src="./assets/music.mp3" autostart="true">`;
        back.appendChild(music);
    }
})

glass.addEventListener("click", () => {

  getData(searchContent);
  close.classList.add("active");
});

close.addEventListener("click", () => {
  searcher.value = "";
  close.classList.remove("active");
});
