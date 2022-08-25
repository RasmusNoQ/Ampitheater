import React,{useEffect} from 'react'
import MovieListing from '../MovieListing/MovieListing';
import { fetchAsyncMovies, fetchAsyncShows } from '../../features/movies/movieSlice';
import { useDispatch } from 'react-redux';



const Home = () => {

  const dispatch = useDispatch()
  const movieText = "Godfather";
  const showText = "Theory"
  


  useEffect(() =>{
    dispatch(fetchAsyncMovies(movieText))
    dispatch(fetchAsyncShows(showText))

  },[dispatch]);
  return (
    <div>
      <div className='banner-img'></div>
      <MovieListing/>

    </div>
  )
}

export default Home