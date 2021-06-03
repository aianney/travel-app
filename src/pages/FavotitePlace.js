import { useContext } from 'react';

import FavoritesContext from '../store/book-context';
import TravelList from '../components/travels/TravelList';

function FavoritePlace() {
  const favoritesCtx = useContext(FavoritesContext);

  let content;

  if (favoritesCtx.totalBooks === 0) {
    content = <p>You got no favorites yet. Start adding some?</p>;
  } else {
    content = <TravelList travels={favoritesCtx.favorites} />;
  }

  return (
    <section>
      <h1>My Favorites</h1>
      {content}
    </section>
  );
}

export default FavoritePlace;
