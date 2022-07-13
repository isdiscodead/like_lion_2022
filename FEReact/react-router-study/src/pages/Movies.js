import React from 'react'
import { Link, Outlet, NavLink } from 'react-router-dom';
import { getMovies } from "../movie_data";

const movies = () => {
  const movies = getMovies();

  return (
    <div>
        <h1>넷플릭스 영화 추천 목록</h1>
        <div>
          { movies.map( (movie) => (
            <NavLink to={`/movies/${movie.id}`} key={movie.id} style={({isActive})=>{
              return {
                display: "block",
                textDecoration: isActive ? "underline" : "none",
                color: isActive ? "#FF9E1B" : "black",
              }
            }}> 
              { movie.title } 
            </NavLink>
          ) ) }
        </div>
        
        <hr/>
        
        <Outlet/>
    </div>
  );
};

export default movies;