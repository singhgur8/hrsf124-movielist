import React from 'react';
import MovieList from './movielist.jsx'

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      movielist: [],
      DB:  [ 
        //this is here just for now while I dont have a DB. NOW DB is empty. 
      ],
      watchedMovies: [] //list of movies...movies in this list should have css. green watched button
    };
  }
//THIS is hte client so make all of your request froms here
//USE AXIOS


componentDidMount() {
  this.setState({
    movielist: this.state.DB //eventually want to grab from mysql
  })
}

goHandleSubmit (event){ //search through movies
  
  event.preventDefault();
  //get the values of the input
  var input = document.getElementById('inputGo').value;
  var localMovieList = [];
  for (var i =0; i<this.state.DB.length; i++) {
    //also can make it so its no case sensitive
    if (this.state.DB[i].title.indexOf(input) !== -1) { //adjust this so it only looks for keyword in the data base...
      localMovieList.push(this.state.DB[i]);
    }
  }

  if (localMovieList.length !== 0){
    this.setState({
      movielist: localMovieList 
    })
  } else {
    this.setState({
      movielist: this.state.DB //eventually want to grab from mysql
    })
  }

}

addHandleSubmit (event){ //add moviees
  
  event.preventDefault();
  //get the values of the input
  var input = document.getElementById('inputAdd').value;
  var movieObj = {title: input};
  var moviesArr = this.state.movielist;
  moviesArr.push(movieObj);
  
  this.setState({
    movielist: moviesArr,
    DB: moviesArr //delte later
  })
 
 

}



/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////Below this is where I will make the HTML page using REACT///////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////





render() {
    return (
      <div>
        
        <form onSubmit={this.addHandleSubmit.bind(this)}>
        <label>
          <input type="text" name="name" placeholder="Search..." id='inputAdd'/>
          </label>
          <input type="submit" value="Add"/>
        </form>

        <form onSubmit={this.goHandleSubmit.bind(this)}>
        <label>
          <input type="text" name="name" placeholder="Search..." id='inputGo'/>
          </label>
          <input type="submit" value="Go!"/>
        </form>

        <MovieList movies = {this.state.movielist}/>
      </div> 
    )
  }
}


export default App;