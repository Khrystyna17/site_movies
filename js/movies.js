const moviesJSON =  `
[
    {
        "id": "1",
        "title": "Мавританець",
        "image": "mauritanian.jpg",
        "description": "Реальна історія в’язня Гуантанамо, який провів за ґратами 14 років. У центрі сюжету мавританець Мохаммед Ульд Слахі (Тагар Рагім). Влада США підозрює його у вербуванні терористів під час терактів 11 вересня. Без офіційних звинувачень і можливості захисту в суді, Слахі запроторюють до в’язниці. Лише через 6 років він отримує право на адвоката, і у боротьбу проти урядової машини вступають адвокатка Ненсі Голландер (Джоді Фостер) та її помічниця Тері Дункан (Шейлін Вудлі). Завдяки їхній титанічній праці вдасться розкрити шокуючу істину та довести, що людський дух не стримають ніякі ґрати. Фільм засновано на автобіографічній книзі «Щоденник Гуантанамо»."
    },
    {
        "id": "2",
        "title": "Небезпечний елемент",
        "image": "radioactive.jpg",
        "description": "Одержимі пристрастю до досліджень, вони назавжди змінили світ. Ця історія про те, як великі відкриття можуть призвести до страшних катастроф. П'єр і Марія Кюрі. Коханці, першовідкривачі, генії."
    },
    {
        "id": "3",
        "title": "Почесна місія: герої назавжди",
        "image": "hurricane.jpg",
        "description": "««Почесна місія: герої назавжди» - це історія Hurricane Squadron 303, групи відважних пілотів, які билися в небі над Англією під час Другої світової війни, не тільки для того, щоб уберегти Великобританію від нацистів, а й щоб зберегти саму ідею своєї країни."
    }
]
`;

function renderMovies(movies) {
    const moviesContainer = document.querySelector('.movies-list');
   // const sortedMovies = movies.slice().sort( (a, b) => a.title - b.title);
    for (const movie of movies) {
        moviesContainer.innerHTML += `
            <article>
                <h3>${movie.title}</h3>
                <img src="img/${movie.image}" alt="${movie.title}">
                <p>${movie.description}
                </p>
                <div class="button-container">
                    <button><a href="movie.html">Переглянути</a></button>
                </div>
            </article>
            <article>
        `
    }
}

renderMovies(JSON.parse(moviesJSON));