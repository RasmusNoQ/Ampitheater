import React from 'react'
import {useSelector} from 'react-redux';
import MovieCard from '../MovieCard/MovieCard';
import "./MovieListing.scss";
import { getAllMovies,getAllShows } from '../../features/movies/movieSlice'

const MovieListing = () => {
  const movies = useSelector(getAllMovies)
  const shows = useSelector(getAllShows)

  let renderMovies,renderShows = "";

  
  renderMovies = movies.Response === "True" ? (
    movies.Search.map((movie,index) =>(
      <MovieCard key={index} data={movie}/>
    ))
  ):(<div className="movies-error"><h3>{movies.Error}</h3></div>); 
  
  
  renderShows = shows.Response === "True" ? (
    shows.Search.map((show,index) =>(
      <MovieCard key={index} data={show}/>
    ))
  ):(<div className="movies-error"><h3>{movies.Error}</h3></div>); 


  return (
    <div className='movie-wrapper'>
      <div className='movie-lists'>
        <h2 style={{color:"white"}}>Movies</h2>
        <div className='movie-container'>{renderMovies}</div>
      </div>
      <div className='show-lists'>
        <h2 style={{color:"white"}}>Shows</h2>
        <div className='movie-container'>{renderShows}</div>
      </div>
    </div>
  )
}

export default MovieListing