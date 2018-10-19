import React, { Component } from 'react'; 
import './App.css';
import Movie from './Movie.js'

class App extends Component {
  state = {
  }

  _getMovies = async () => {
    const movies = await this._callApi()
    this.setState({
      movies
    })
    console.log(this.state)
  }

  _callApi = () => {
    return fetch('https://yts.am/api/v2/list_movies.json?sort_by=rating')
    .then(response => response.json())
    .then(json => json.data.movies)
    .catch(err => console.log(err))
  }

  componentDidMount(){
    this._getMovies()
  }

  _renderMovies = () => {
    var movies = this.state.movies.map(movie => {
      return <Movie 
      title={movie.title} 
      poster={movie.medium_cover_image} 
      genre={movie.genres} 
      summary = {movie.summary} 
      key={movie.id} />
    })
    return movies
  }

  render() {
    return (
      <div className="App">  
        {this.state.movies ? this._renderMovies() : "Loading"}
      </div>
    );
  } 
}

export default App;
