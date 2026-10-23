import { Link, useParams } from 'react-router-dom';
import dishes from '../../../shared/data/dishes';
export default function DishDetails() {
  const { dishId } = useParams();
  const dish = dishes.find((item) => String(item.id) === dishId);
  return (
    <div>
      {dish ? (
        <div className="row g-3">
          <div className="col-md-5">
            <img className="sample-image rounded" src={dish.image} alt={dish.name} />
          </div>
          <div className="col-md-7">
            <h3>{dish.name}</h3>
            <p>
              {dish.category}{' '}
              {dish.label && <span className="badge bg-danger">{dish.label}</span>}
            </p>
            <p>{dish.description}</p>
            <p className="fw-bold">${dish.price}</p>
          </div>
        </div>
      ) : (
        <p role="alert">Không tìm thấy dish ID {dishId}.</p>
      )}
      <Link className="d-inline-block mt-3" to="/exercises/21/dishes">
        ← Danh sách dishes
      </Link>
    </div>
  );
}
