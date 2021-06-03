import { useHistory } from 'react-router-dom';
import  NewTravelForm from '../components/travels/NewTravelForm';

function AddTravelPackage() {
  const history = useHistory();

  function addTravelHandler(travelData) {
    fetch(
      'https://travel-app-project-1b4dc-default-rtdb.firebaseio.com/travel.json',
      {
        method: 'POST',
        body: JSON.stringify(travelData),
        headers: {
          'Content-Type': 'application/json'
        },
      }
    ).then(() => {
      history.replace('/');
    });
  }

  return (
    <section>
      <h1>Add New Place</h1>
      <NewTravelForm onAddTravel={addTravelHandler} />
    </section>
  );
}

export default AddTravelPackage;
