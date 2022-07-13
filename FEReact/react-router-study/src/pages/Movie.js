import React from 'react';

// 객체 조회를 위한 hooks
import { useParams } from 'react-router-dom';
import { getMovie } from '../movie_data';

const Movie = () => {
    // url 파라미터를 가져올 수 있음 
    const params = useParams();
    // console.log(params)

    // id값을 통해 객체 형태로 가져옴 
    const movie = getMovie(parseInt(params.movieId));
    // console.log(movie);

    return (
        <div>
            <h2>{movie.title}</h2>
            <p>감독 : {movie.director}</p>
            <p>카테고리 : {movie.category}</p>
        </div>
    )
}

export default Movie