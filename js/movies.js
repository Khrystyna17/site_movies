//const moviesJSON =  ``;


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

// function fetchAndRenderMovies() {
//     fetch('movies.json')
//         .then( response => response.json() )
//         .then( movies => renderMovies(movies) );
// }


async function fetchAndRenderMovies() {
    const response = await fetch('movies.json');
    const movies = await response.json();
    renderMovies(movies);
}




fetchAndRenderMovies();

//renderMovies(JSON.parse(moviesJSON));