import React, { use } from 'react'
import Search from './components/search'
import { useState,useEffect } from 'react'
import Spinner from './components/Spinner';
import MovieCard from './components/MovieCard';

const API_BASE_URL = 'https://api.themoviedb.org/3';

const TMDB_API_KEY = import.meta.env.VITE_TMDB_API_KEY;

const API_OPTIONS = {
  method: 'GET',
  headers: {
    Accept: 'application/json',
    Authorization: `Bearer ${TMDB_API_KEY}`,
  },

};
const App = () => {

  const[error, setError] = useState(null);
  const [movieList, setMovieList] = useState([]);
  const[loading, setLoading] = useState(false);

  const fetchMovies = async (query) => {
    
    setLoading(true);
  
    setError('')
    try {
      const endpoint = `${API_BASE_URL}/discover/movie?sort_by=popularity.desc&query=${encodeURIComponent(query)}`;

      const response = await fetch(endpoint, API_OPTIONS);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      
      const data = await response.json();

      if(data.response === 'False'){
        setError(data.error || 'No movies found.');
        setMovieList([]);
        return;
      }
      console.log(data);
      setMovieList(data.results);

    } 
    catch (error) {
      console.error('Error fetching movies:', error);
      setError('Failed to fetch movies. Please try again later.');
    }
    finally {
      setLoading(false);
    }
  }
    

  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {

    fetchMovies();

  }, [])

  return (
    <main>
      <div className='pattern' />
    <div className=' wrapper'>
      <header>
        {/* inserting hero image here */}
        <img src="./public/hero.png" alt="Hero Image" className='hero-image' />
        
        <h1>Find <span className='text-gradient'>Movies</span> You'll Enjoy Without The Hassle</h1>

    <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
      </header>

      <section className='all-movies'>
        {/* Movie cards will be displayed here */}
        <h2 className='mt-[40px]'>All Movies</h2>

        {loading ? (
          <Spinner />
        ) : error ? (<p className='text-red-500'>{error}</p>  ) : (
          <ul>
            {movieList.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </ul>
          
          

        )}

      </section>
    </div>
    </main>
  )
}

export default App