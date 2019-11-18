import React from 'react';

class MovieItem extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            watched: false
        }
    }

    fn(event) {
        event.preventDefault();
        this.setState({
            watched: !this.state.watched
        })
        
    }
    
    render () {
        //want to add buttons to both....but depends on which button is clicked, it will change the state of this 
        if (this.state.watched){
            return (
            <li>
                <span> {this.props.movie.title} </span>
                <span>
                    <form onSubmit={this.fn.bind(this)}>
                        <input type='submit' value='watched'></input>
                    </form>
                </span>
            </li>
    
            )  
        } else {

            return (
            <li id='test'>
                <span> {this.props.movie.title} </span>
                <form onSubmit = {this.fn.bind(this)}>
                        <input type='submit' value='unwatched'></input>
                </form>
            </li>
    
            )
        }
    }
    
}

export default MovieItem;