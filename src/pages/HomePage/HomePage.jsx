import TrendingMovies from "components/TrendingMovies/TrendingMovies";
import css from './HomePage.module.css';



const HomePage = () => {
  return (
    <div className={css.container}>
      <h2 className={css.title}>Trending Today</h2>
      <TrendingMovies />
    </div>
  );
}

export default HomePage;