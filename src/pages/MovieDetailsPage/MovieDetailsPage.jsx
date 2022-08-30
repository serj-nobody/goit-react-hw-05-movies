import { useState, useEffect } from "react";
import { useParams, NavLink, useNavigate, Outlet, useLocation } from "react-router-dom";

import { getMovieDetails } from "shared/api/api";

import css from './MovieDetailsPage.module.css';



const getClassName = ({isActive}) => {
  const className = isActive ? `${ css.addLink } ${ css.active }` : css.addLink;

  return className;
}

const MovieDetailsPage = () => {
  const [movieDetails, setMovieDetails] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from;
  const goBack = () => navigate(from);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      setLoading(true);

      try {
        const result = await getMovieDetails(id);
        setMovieDetails(result);
      } catch (error) {
        setError(error);
      }
      finally {
        setLoading(false);
      }
    };

    fetchMovieDetails();
  }, [id]);

  const { poster_path, title, release_date, vote_average, overview, genres } = movieDetails;
  const releaseYear = release_date?.slice(0, 4);
  const votesPercentage = vote_average?.toFixed(1) * 10;
  const genreList = genres?.map(genre => genre.name).join(', ');

  return (
    <div className={css.movieContainer}>
      <div className={css.buttonContainer}>
        <button className={css.button} onClick={goBack}>Go back</button>
      </div>

      {loading && <p className={css.loading}>...loading movie info</p>}
      {error && <p>Oops! Loading movie info failed due to an error</p>}

      <div className={css.movieMain}>
        <img className={css.poster} src={poster_path ? `https://image.tmdb.org/t/p/w500${poster_path}` : 'https://qqcinema.com/wp-content/uploads/no-poster.png'} alt="" />
        <div className={css.info}>
          <h2 className={css.title}>{title} ({releaseYear})</h2>
          <p className={css.text}>User score: {votesPercentage}%</p>
          <h3 className={css.secondaryTitle}>Overview:</h3>
          <p className={css.text}>{overview}</p>
          <h3 className={css.secondaryTitle}>Genres:</h3>
          <p>{genreList}</p>
        </div> 
      </div>
      <div className={css.additionalInfo}>
        <h3 className={css.secondaryTitle}>Additional info:</h3>
        <ul className={css.addLinksList}>
          <li className={css.addLinkItem}><NavLink state={{ from }} className={getClassName} to={`/movies/${id}/cast`}>Cast</NavLink></li>
          <li className={css.addLinkItem}><NavLink state={{ from }} className={getClassName} to={`/movies/${id}/reviews`}>Reviews</NavLink></li>
        </ul>
      </div>
      <Outlet />
    </div>
  );
}

export default MovieDetailsPage;