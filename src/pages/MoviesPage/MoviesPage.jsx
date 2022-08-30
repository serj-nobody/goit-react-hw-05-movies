import { useState, useEffect } from "react";
import { Link, useSearchParams, useLocation } from "react-router-dom";

import { searchMovies } from "shared/api/api";

import css from './MoviesPage.module.css';

const MoviesPage = () => {
  const [inputValue, setInputValue] = useState('');
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get('query');

  const location = useLocation();

  useEffect(() => {
    const fetchMovies = async () => {
      setLoading(true);

      try {
        const { results } = await searchMovies(searchQuery);
        setMovies(results);
      } catch (error) {
        setError(error);
      }
      finally {
        setLoading(false);
      }
    };

    if (searchQuery) {
      fetchMovies();
    }
  }, [searchQuery]);

  const handleChange = (event) => {
    const { value } = event.target;
    setInputValue(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSearchParams({ query: inputValue });
    setInputValue('');
  };

  const moviesList = movies.map(({ id, poster_path, title }) => (
    <li key={id} className={css.movieItem}>
      <Link state={{from: location}} className={css.movieLink} to={`/movies/${id}`}>
        <img className={css.moviePoster} src={poster_path ? `https://image.tmdb.org/t/p/w500${poster_path}` : 'https://qqcinema.com/wp-content/uploads/no-poster.png'} alt="" />
        <p className={css.movieTitle}>{title}</p>
      </Link>
    </li>
  ));

  return (
    <div className={css.container}>
      <h2 className={css.title}>Movies search</h2>
      <form className={css.form} onSubmit={handleSubmit}>
        <input className={css.input} value={inputValue} onChange={handleChange} placeholder='Enter keyword...' required />
        <button className={css.button} type='submit'>Search</button>
      </form>
      <ul className={css.movieList}>
        {movies && moviesList}
      </ul>
      {loading && <p className={css.loading}>...loading movies</p>}
      {error && <p>Oops! Loading movies failed due to an error</p>}
    </div>
  );
}

export default MoviesPage;