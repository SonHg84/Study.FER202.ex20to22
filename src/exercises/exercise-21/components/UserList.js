import { Link } from 'react-router-dom';
import { users } from '../data/users';
export default function UserList() {
  return (
    <div>
      <h3 className="h5">Users</h3>
      <ul className="list-group">
        {users.map((user) => (
          <li className="list-group-item" key={user.id}>
            <Link to={`/exercises/21/users/${user.id}`}>
              ID {user.id}: {user.firstName} {user.lastName}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
