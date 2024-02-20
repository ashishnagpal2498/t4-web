import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import '../stylesheets/user-detail.css';

const UserDetails = () => {
  const [user, setUserDetails] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const response = await axios.get(`https://express-t4.onrender.com/api/users/${id}`);
        if (response.status === 200) {
          setUserDetails(response.data);
        }
      } catch (error) {
        console.error('Error fetching user details:', error);
      }
    };

    fetchUserDetails();
  }, [id]);

  if (!user) {
    return <div className="loading">Loading . . .</div>;
  }

  return (
    <div className="user-details">
      <h2>User Details</h2>
      <div className="user-detail-info">
        <div className='avatar-div'><img className="user-avatar" src={user.picture} alt={user.name} /> </div>
        <div className="user-text">
          <h3>{user.name}</h3>
          <p><strong>Email: </strong> {user.email}</p>
          <p> <strong>Age: </strong> {user.age}</p>
          <p><strong>Address: </strong> {user.address}</p>
          <p> <strong>Phone: </strong> {user.phone}</p>
          <p><strong>Company: </strong>{user.company}</p>
          <p><strong>Tags: </strong> {user.tags.join(", ")}</p>
          <p><strong>About: </strong> {user.about}</p>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
