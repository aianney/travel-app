import { Route, Switch } from 'react-router-dom';

import AddTravelPackage from './pages/AddTravelPackage';
import AllTravelPackage from './pages/AllTravelPackage';
import BookTravel from './pages/FavotitePlace';
import Layout from './components/layout/Layout';


function App() {
	return (
		<Layout>
      <Switch>
      <Route path='/' exact>
        <AllTravelPackage/>
      </Route>
      <Route path='/add-travel'>
        <AddTravelPackage/>
      </Route>
      <Route path='/favorite-travel'>
        <BookTravel/>
      </Route>
      </Switch>
    </Layout>
	);
}

export default App;
