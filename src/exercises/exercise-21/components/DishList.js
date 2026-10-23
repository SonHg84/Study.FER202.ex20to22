import { Link } from 'react-router-dom';
import dishes from '../../../shared/data/dishes';
export default function DishList() {
  return (
    <div>
      <h3 className="h5">Dishes</h3>
      <div className="row row-cols-1 row-cols-sm-2 g-3">
        {dishes.map((dish) => (
          <div className="col" key={dish.id}>
            <article className="card h-100">
              <Link to={`/exercises/21/dishes/${dish.id}`}>
                <img
                  src={dish.image}
                  alt={dish.name}
                  className="sample-image card-img-top"
                />
              </Link>
              <div className="card-body">
                <Link to={`/exercises/21/dishes/${dish.id}`}>
                  ID {dish.id}: {dish.name}
                </Link>
              </div>
            </article>
          </div>
        ))}
      </div>
    </div>
  );
}
