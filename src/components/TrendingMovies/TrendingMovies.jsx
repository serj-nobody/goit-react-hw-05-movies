import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

import { getTrendingMovies } from "shared/api/api";

import css from './TrendingMovies.module.css';



const TrendingMovies = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const location = useLocation();

  useEffect(() => {
    const fetchTrendingMovies = async () => {
      setLoading(true);

      try {
        const { results } = await getTrendingMovies();
        setTrendingMovies(results);
      } catch (error) {
        setError(error);
      }
      finally {
        setLoading(false);
      }
    };

    fetchTrendingMovies();
  }, []);

  const trendingMoviesList = trendingMovies.map(({ id, poster_path, title }) => (
    <li key={id} className={css.movieItem}>
      <Link state={{from: location}} className={css.movieLink} to={`/movies/${id}`}>
        <img className={css.moviePoster} src={poster_path ? `https://image.tmdb.org/t/p/w500${poster_path}` : 'https://qqcinema.com/wp-content/uploads/no-poster.png'} alt="" />
        <p className={css.movieTitle}>{title}</p>
      </Link>
    </li>
  ));

  return (
    <div>
      <ul className={css.movieList}>
        {trendingMoviesList}
      </ul>
      {loading && <p className={css.loading}>...loading movies</p>}
      {error && <p>Oops! Loading movies failed due to an error</p>}
    </div> 
  );
}

export default TrendingMovies;