import React from 'react';
import MovieList from './movielist.jsx'

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      movielist: [],
      DB =  [
        {title: 'Mean Girls'},
        {title: 'Hackers'},
        {title: 'The Grey'},
        {title: 'Sunshine'},
        {title: 'Ex Machina'},
      ]
    };
  }
//THIS is hte client so make all of your request froms here
//USE AXIOS


// componentDidMount() {
//   this.setState({
//     movielist: this.state.DB
//   })
// }

handleSubmit (event){
  console.log(this)
  event.preventDefault();
  //get the values of the input
  var input = document.getElementById('input').value;
  var movielist = [];
  for (var i =0; i<this.state.movielist.length; i++) {
    if (this.state.movielist[i].title === input) {
      movielist.push(this.state.movielist[i]);
    }
  }

  console.log(movielist)

}


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////Below this is where I will make the HTML page using REACT///////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////





render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit.bind(this)}>
        <label>
          <input type="text" name="name" placeholder="Search..." id='input'/>
          </label>
          <input type="submit" value="Go!"/>
        </form>
        <MovieList movies = {this.state.movielist}/>
      </div> 
    )
  }
}


export default App;