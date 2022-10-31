const ul =document.querySelector('ul');
const input = document.querySelector("input");

fetch("https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json")
    .then(response => response.json())
    .then(movies => {
        setupEventListeners(movies);
    });

function setupEventListeners(movies) {
    input.addEventListener('input', () => {
        const inputFromUser = input.value;
        // It should not matter with capital or small letters
        const matchingMovies = getSearchedMovies(inputFromUser, movies);

        renderMovies(matchingMovies);
    })
}

// This function is responsible for rendering the movies
function renderMovies(movies) {
    // Clear all the movies already in the list
    ul.innerHTML = "";

    movies.forEach(function(movie) {
        const li = document.createElement('li');
        const titleSpan =  document.createElement('p');
        titleSpan.innerHTML = movie.title;
        li.appendChild(titleSpan);
        const YearSpan =  document.createElement('p');
        YearSpan.innerHTML = movie.year;
        li.appendChild(YearSpan);
        ul.appendChild(li);
    })
}

// This function is responsible for returning the movies which title match
// what the user wrote in the input field
function getSearchedMovies(inputFromUser, movies) {
    const inputFromUserLower = inputFromUser.toLowerCase();
    const matchingMovies = movies.filter(function(movie) {
        const titleLowercase = movie.title.toLowerCase();
        const doesInputMatchTitle = titleLowercase.includes(inputFromUserLower);
        return doesInputMatchTitle;
    })

    return matchingMovies;
}