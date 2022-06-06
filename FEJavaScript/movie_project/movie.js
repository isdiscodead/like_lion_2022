const APIKEY = "";

const options = {
    method: "GET",
    headers : {
        'Content-Type' : "application/json; charset=utf-8"
    }
};

const popularURL = `https://api.themoviedb.org/3/movie/now_playing?api_key=${APIKEY}&language=en-US&page=1`;


fetch( popularURL, options )
    .then( response => response.json )
    .then(response => { console.log(response)});

