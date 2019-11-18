import React from 'react'

var MovieItem = (props) => {
    console.log('this is what is recieved inside moveITEM:', props)
    return (
        <li>
            <div> {props.movie.title} </div>
            {/* <div> Description </div> */}
        </li>
    )
}

export default MovieItem;