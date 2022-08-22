import React,{useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch,useSelector } from 'react-redux';
import "./MovieDetails.scss";
import { fetchAsyncMovieOrShowDetail,getSelectedMovieOrShow,removeSelectedMovieOrShow } from '../../features/movies/movieSlice';
import {FaStar,FaThumbsUp,FaFile,FaCalendar} from 'react-icons/fa';

const MovieDetails = () => {
  const {imdbID} = useParams();
  const dispatch = useDispatch();
  const data = useSelector(getSelectedMovieOrShow)

  useEffect(() => {
    
    dispatch(fetchAsyncMovieOrShowDetail(imdbID))

    return () =>{
      dispatch(removeSelectedMovieOrShow())
    }
  
  }, [dispatch,imdbID])
  


  return (
    <div className='movie-section'>
      {Object.keys(data).length === 0 ? (<div>...Loading</div>):(

      
      <>
      <div className='section-left'>
        <div className='movie-title'>{data.Title}</div>
        <div className='movie-rating'>
          <span>
            IMDB Rating <FaStar style={{position:"relative", top:"3px"}} className='star'/> : {data.imdbRating}
          </span>
          <span>
            IMDB Votes <FaThumbsUp className='thumbs-up'/> : {data.imdbVotes}
          </span>
          <span>
            Runtime <FaFile className='file'/> : {data.Runtime}
          </span>
          <span>
            Year <FaCalendar className='calendar'/> : {data.Year}
          </span>
        </div>
        <div className='movie-plot'>
          {
            data.Plot
          }
        </div>
        <div className='movie-info'>
          <div>
            <span>Director</span>
            <span>{data.Director}</span>
          </div>
          <div>
            <span>Stars</span>
            <span>{data.Actors}</span>
          </div>
          <div>
            <span>Genres</span>
            <span>{data.Genre}</span>
          </div>
          <div>
            <span>Languages</span>
            <span>{data.Language}</span>
          </div>
          <div>
            <span>Award</span>
            <span>{data.Award}</span>
          </div>
        </div>
        
      </div>
      <div className='section-right'>
        <img src={data.Poster} alt={data.Title}/>
      </div>
      </>
    )}
    </div>
    
  )
}

export default MovieDetails