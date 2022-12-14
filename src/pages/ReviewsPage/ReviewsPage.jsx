import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { getMovieReviews } from "shared/api/api";

import css from './ReviewsPage.module.css';



const ReviewsPage = () => {
  const [movieReviews, setMovieReviews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    const fetchMovieReviews = async () => {
      setLoading(true);

      try {
        const { results } = await getMovieReviews(id);
        setMovieReviews(results);
      } catch (error) {
        setError(error);
      }
      finally {
        setLoading(false);
      }
    };

    fetchMovieReviews();
  }, [id]);

  const movieReviewsList = movieReviews?.map(({ id, author, content }) => (
    <li className={css.reviewItem} key={id}>
      <h2 className={css.name}>{author}</h2>
      <p>{content}</p>
    </li>
  ));
  
  return (
    <div className={css.container}>
      {movieReviewsList.length ?
        <ul className={css.castList}>
          {movieReviewsList}
        </ul> :
        <p className={css.notification}>No reviews were added yet</p>}
      
      {loading && <p className={css.loading}>...loading</p>}
      {error && <p>Oops! Loading failed due to an error</p>}
    </div>
  );
}

export default ReviewsPage;