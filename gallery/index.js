const basicUrl = "https://api.unsplash.com/search/photos?query=spring&client_id=6adFL1um8JXRIrgsfChxvwqAc_f1MVYZKe5lOBtuSek";
const searchUrl = ''
const search = document.querySelector('form');
const searcher = document.querySelector('.searcher-itself');

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
}

function photoCards(data) {
    const photos = document.querySelector('.image-container');
    document.querySelector('.image-container') =  "";
    data.results.forEach((results) => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = `<img src="${results.urls.regular}">`;
        photos.appendChild(card)
    })
    
}
  
