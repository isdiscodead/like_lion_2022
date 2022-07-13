import React from 'react';

// 객체 조회를 위한 hooks
import { useParams, useLocation, useSearchParams } from 'react-router-dom';
import { getMovie } from '../movie_data';

const Movie = () => {
    // url 파라미터를 가져올 수 있음 
    const params = useParams();
    // console.log(params)

    // id값을 통해 객체 형태로 가져옴 
    const movie = getMovie(parseInt(params.movieId));
    // console.log(movie);

    // 쿼리스트링 사용 
    const location = useLocation();
    // console.log(location); // url, search, hash, state, key값 등이 출력됨 

    const [searchParams, setSearchParams] = useSearchParams();
    const detail = searchParams.get("detail"); // get -> ?detail= 값을 가져옴 
    // searchParams.set(); // set -> 특정 파라미터 업데이트

    const handleClick = () => {
        // param 값을 toggle 해줌
        setSearchParams({detail: detail ===  "true" ? false : true});
    };

    return (
        <div>
            <h2>{movie.title}</h2>
            <p>감독 : {movie.director}</p>
            <p>카테고리 : {movie.category}</p>
            <button type='button' onClick={handleClick}>자세히</button>
            { detail === "true" ? <p>{movie.detail}</p> : "" }
        </div>
    )
}

export default Movie