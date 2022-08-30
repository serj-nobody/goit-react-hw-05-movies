import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { getMovieCast } from "shared/api/api";

import css from './CastPage.module.css';



  
const CastPage = () => {
  const [movieCast, setMovieCast] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    const fetchMovieCredits = async () => {
      setLoading(true);

      try {
        const { cast } = await getMovieCast(id);
        setMovieCast(cast);
      } catch (error) {
        setError(error);
      }
      finally {
        setLoading(false);
      }
    };

    fetchMovieCredits();
  }, []);

  const movieCreditsList = movieCast.map(({ id, profile_path, name, character }) => (
    <li className={css.castItem} key={id}>
      <img className={css.castPhoto} src={profile_path ? `https://image.tmdb.org/t/p/w500${profile_path}` : 'https://feb.kuleuven.be/drc/LEER/visiting-scholars-1/image-not-available.jpg/image'} alt="" />
      <h2 className={css.name}>{name}</h2>
      <p className={css.text}>Character: <span className={css.character}>{character}</span></p>
    </li>
  ));
  
  return (
    <div className={css.container}>
      <ul className={css.castList}>{movieCreditsList}</ul>
      {loading && <p className={css.loading}>...loading</p>}
      {error && <p>Oops! Loading failed due to an error</p>}
    </div>
  );
}

export default CastPage;