import { Link, useParams } from 'react-router-dom';
import { users } from '../data/users';
export default function UserDetails() {
  const { userId } = useParams();
  const user = users.find((item) => String(item.id) === userId);
  return (
    <div>
      {user ? (
        <>
          <h3>
            {user.firstName} {user.lastName} : {user.age}
          </h3>
          <p>Resource ID: {userId}</p>
        </>
      ) : (
        <p role="alert">Không tìm thấy user ID {userId}.</p>
      )}
      <Link to="/exercises/21/users">← Danh sách users</Link>
    </div>
  );
}
