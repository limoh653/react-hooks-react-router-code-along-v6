import { Link } from "react-router-dom";

function UserCard({user}) {
  return (
    <article>
        <h2>{user.name}</h2>
        <p>
          <link to={`/profile/${user.id}`}>View profile</link>
        </p>
    </article>
  );
};

export default UserCard;