import { useState, useEffect } from 'react';

import TravelList from '../components/travels/TravelList';

function AllTravelPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedTravels, setLoadedTravels] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetch(
      'https://travel-app-project-1b4dc-default-rtdb.firebaseio.com/travel.json'
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const travels = [];

        for (const key in data) {
          const travel = {
            id: key,
            ...data[key]
          };

          travels.push(travel);
        }

        setIsLoading(false);
        setLoadedTravels(travels);
      });
  }, []);

  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }

  return (
    <section>
      <h1>All Places</h1>
      <TravelList travels={loadedTravels} />
    </section>
  );
}

export default AllTravelPage;
