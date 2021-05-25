
import React, { useState, useEffect } from 'react'
import axios from 'axios';
import MovieItem from './MovieItem';
import './MovieList.css';

const MovieList = props => {

    const [movies, setMovies] = useState([]);

    useEffect(()=>{
        axios.get('http://localhost:5000/api/movies')
        .then((response) => {
            setMovies(response.data);
        })
        .catch((error) => {
            console.log(error);
        });
        console.log(movies)

    }
        
    , [])


    return (
        <div className='movie-list'>
            {movies.map(movie => <MovieItem title={movie.title} director={movie.director} length={movie.duration} />)}
            
        </div>
    )
}



export default MovieList
