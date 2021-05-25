import React from 'react';
import './MovieItem.css'

const MovieItem = ({title, length, director}) => {
    return (
        <div className='movie-item'>
            <h2>Title: {title}</h2>
            <h3>Length: {length}</h3>
            <h3>Director: {director}</h3>
        </div>

    )
}

export default MovieItem;