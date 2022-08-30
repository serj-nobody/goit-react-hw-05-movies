import { Routes, Route } from 'react-router-dom';

import Menu from './components/Menu/Menu';

import HomePage from 'pages/HomePage/HomePage';
import MoviesPage from 'pages/MoviesPage/MoviesPage';
import MovieDetailsPage from 'pages/MovieDetailsPage/MovieDetailsPage';
import CastPage from 'pages/CastPage/CastPage';
import ReviewsPage from 'pages/ReviewsPage/ReviewsPage';
import NotFoundPage from 'pages/NotFoundPage/NotFoundPage';

import css from './App.module.css';
  
  
export const App = () => {
  return (
    <div className={css.AppContainer}>
      <div className={css.App}>
        <Menu />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/movies' element={<MoviesPage />} />
          <Route path='/movies/:id' element={<MovieDetailsPage />}>
            <Route path='cast' element={<CastPage />} />
            <Route path='reviews' element={<ReviewsPage />} />
          </Route>
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </div>
    </div>
    
  );
};
