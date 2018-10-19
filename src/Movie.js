import React from 'react';
import './Movie.css'
import PropTypes from 'prop-types'

// class Movie extends Component{

//     static propTypes = {
//         title: PropTypes.string.isRequired,
//         poster: PropTypes.string.isRequired
//     }

//     render(){
//         // console.log(this.props)
//         return(
//             <div>
//                 <MoviePoster poster={this.props.poster}/>
//                 <h3>movie title: {this.props.title} </h3>
//             </div>
//         ) 
//     }
// }

function Movie ({title, poster, genre, summary}){
    return (
        <div className="Movie">
            <div className="Movie_columns">
                <MoviePoster poster={poster}/>
            </div>
            <div className="Movie_columns">
                title: {title}
                <div className="Movie_genre">
                    {genre.map((genre, index)=> 
                    <MovieGenre genre={genre} key={index}/> 
                     )}
                </div> 
                <p className="Movie_summary">
                    summary : {summary}
                </p>
            </div>
        </div>
    )
}


// class MoviePoster extends Component{
//     static propTypes = {
//         poster:PropTypes.string.isRequired
//     }
//     render(){
//         // console.log(this.props)
//         return(
//             <img src={this.props.poster}></img>
//         )
//     }
// }

function MoviePoster({poster}){
    return (
        <img src={poster} className="Movie_poster"></img>
    )
}

function MovieGenre({genre}){
    return (
        <span className="Movie_genre"> {genre} </span>
    )
}

MovieGenre.propTypes = {
    genre: PropTypes.string.isRequired
}

MoviePoster.propTypes = {
    poster:PropTypes.string.isRequired
}

Movie.propTypes = {
    title:PropTypes.string.isRequired,
    poster:PropTypes.string.isRequired,
    genre: PropTypes.array.isRequired,
    summary:PropTypes.string.isRequired
}


export default Movie