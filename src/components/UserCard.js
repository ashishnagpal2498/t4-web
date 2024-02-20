import React from 'react';
import '../stylesheets/user-card.css'
import { Link } from 'react-router-dom';

const UserCard = ({ user }) => {
  return (
    <Link to={`/${user._id}`} className="user-card" >
      <img src={user.picture} alt={user.name} />
      <div className="user-info">
        <h3>{user.name}</h3>
        <p>{user.email}</p>
      </div>
    </Link>
  );
};

export default UserCard;
