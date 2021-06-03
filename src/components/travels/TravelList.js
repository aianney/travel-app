import TravelItem from './TravelItem';
import classes from './TravelList.module.css';

function TravelList(props) {
  return (
    <ul className={classes.list}>
      {props.travels.map((travel) => (
        <TravelItem
          key={travel.id}
          id={travel.id}
          image={travel.image}
          title={travel.title}
          address={travel.address}
          description={travel.description}
        />
      ))}
    </ul>
  );
}

export default TravelList;
