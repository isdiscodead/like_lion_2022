const APIKEY = "";

const options = {
    method: "GET",
    headers : {
        'Content-Type' : "application/json; charset=utf-8"
    }
};

const IMAGE_URL = "https://image.tmdb.org/t/p/w500";

const now_playingURL = `https://api.themoviedb.org/3/movie/now_playing?api_key=${APIKEY}&language=en-US&page=1`;
const popularURL = `https://api.themoviedb.org/3/movie/popular?api_key=${APIKEY}&language=en-US&page=1`;
const top_ratedURL = `https://api.themoviedb.org/3/movie/top_rated?api_key=${APIKEY}&language=en-US&page=1`;
const upcomingURL = `https://api.themoviedb.org/3/movie/upcoming?api_key=${APIKEY}&language=en-US&page=1`;


const now_playing = document.getElementById("now-playing");

fetch( now_playingURL, options )
    .then( response => response.json )
    .then(response => { 
        console.results.forEach(element => { // 모든 값 순회 
            let movie = document.createElement("li");
            let movieDiv = document.createElement("div");

            let backdrop = document.createElement("img");
            backdrop.setAttribute("src", IMAGE_URL + element.backdrop_path);

            let title = createElement("h4");
            title.innerText = element.title;

            let rate = document.createElement("span");
            rate.innerText = '★' + element.vote_average;

            movieDiv.appendChild(backdrop);
            movieDiv.appendChild(title);
            movieDiv.appendChild(rate);

            movie.appendChild(movieDiv);
            now_playing.appendChild(movie);
        });
    });


const popular = document.getElementById("popular");

fetch( popularURL, options )
    .then( response => response.json )
    .then(response => { 
        console.results.forEach(element => { // 모든 값 순회 
            let movie = document.createElement("li");
            let movieDiv = document.createElement("div");

            let backdrop = document.createElement("img");
            backdrop.setAttribute("src", IMAGE_URL + element.backdrop_path);

            let title = createElement("h4");
            title.innerText = element.title;

            let rate = document.createElement("span");
            rate.innerText = '★' + element.vote_average;

            movieDiv.appendChild(backdrop);
            movieDiv.appendChild(title);
            movieDiv.appendChild(rate);

            movie.appendChild(movieDiv);
            popular.appendChild(movie);
        });
    });


const top_rated = document.getElementById("top-rated");

fetch( top_ratedURL, options )
    .then( response => response.json )
    .then(response => { 
        console.results.forEach(element => { // 모든 값 순회 
            let movie = document.createElement("li");
            let movieDiv = document.createElement("div");

            let backdrop = document.createElement("img");
            backdrop.setAttribute("src", IMAGE_URL + element.backdrop_path);

            let title = createElement("h4");
            title.innerText = element.title;

            let rate = document.createElement("span");
            rate.innerText = '★' + element.vote_average;

            movieDiv.appendChild(backdrop);
            movieDiv.appendChild(title);
            movieDiv.appendChild(vote_average);

            movie.appendChild(movieDiv);
            top_rated.appendChild(movie);
        });
    });



const upcoming = document.getElementById("upcoming");

fetch( upcomingURL, options )
    .then( response => response.json )
    .then(response => { 
        console.results.forEach(element => { // 모든 값 순회 
            let movie = document.createElement("li");
            let movieDiv = document.createElement("div");

            let backdrop = document.createElement("img");
            backdrop.setAttribute("src", IMAGE_URL + element.backdrop_path);

            let title = createElement("h4");
            title.innerText = element.title;

            let rate = document.createElement("span");
            rate.innerText = '★' + element.vote_averages;

            movieDiv.appendChild(backdrop);
            movieDiv.appendChild(title);
            movieDiv.appendChild(rate);

            movie.appendChild(movieDiv);
            upcoming.appendChild(movie);
        });
    });