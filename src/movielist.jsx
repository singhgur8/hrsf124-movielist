import React from 'react'
import MovieItem from './movieitem.jsx'

var MovieList = (props) => {
    console.log(props)
    return (
        <ul>
            {props.movies.map( (item) => (
                <MovieItem movie = {item}/>
            )
            )}
        </ul>

    )
    
    
}

export default MovieList