import React from 'react'

const MovieCard = ({key, movie: {title, poster_path, release_date, vote_average, original_language}}) => {

    
  return (
    <div className='movie-card'>
        <img src={poster_path ? `https://image.tmdb.org/t/p/w500${poster_path}` : './public/no-poster.png'} alt={title} />
        
        
       
        </div>
    </div>
  )
}

export default MovieCard