import { useContext } from 'react';
import { Link } from 'react-router-dom';

import classes from './MainNavigation.module.css';
import FavoritesContext from '../../store/book-context';

function MainNavigation() {
  const favoritesCtx = useContext(FavoritesContext);

  return (
    <header className={classes.header}>
      <div className={classes.logo}>Summer Place in Philippine</div>
      <nav>
        <ul>
          <li>
            <Link to='/'>Travel Places</Link>
          </li>
          <li>
            <Link to='/add-travel'>Add To Travel</Link>
          </li>
          <li>
            <Link to='/favorite-travel'>
            Favorite Place
              <span className={classes.badge}>
                {favoritesCtx.totalFavorites}
              </span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
