import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

import Menu from './components/Menu/Menu';

import css from './App.module.css';

const HomePage = lazy(() => import ('pages/HomePage/HomePage'));
const MoviesPage = lazy(() => import ('pages/MoviesPage/MoviesPage'));
const MovieDetailsPage = lazy(() => import ('pages/MovieDetailsPage/MovieDetailsPage'));
const CastPage = lazy(() => import ('pages/CastPage/CastPage'));
const ReviewsPage = lazy(() => import ('pages/ReviewsPage/ReviewsPage'));
const NotFoundPage = lazy(() => import ('pages/NotFoundPage/NotFoundPage'));



export const App = () => {
  return (
    <div className={css.AppContainer}>
      <div className={css.App}>
        <Menu />
        <Suspense fallback={<p>...loading page</p>}>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/movies' element={<MoviesPage />} />
            <Route path='/movies/:id' element={<MovieDetailsPage />}>
              <Route path='cast' element={<CastPage />} />
              <Route path='reviews' element={<ReviewsPage />} />
            </Route>
            <Route path='*' element={<NotFoundPage />} />
          </Routes>
        </Suspense>    
      </div>
    </div>
  );
};
