import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
const UserDetails = () => {
  const [user, setUserDetails] = useState(null);
  const {id} = useParams();
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

  if(!user){
    return <div>Loading . . .</div>
  }
  return (
    <div>
      <h2>User Details</h2>
      <div>
        <img src={user.picture} alt={user.name} />
        <h3>{user.name}</h3>
        <p>Email: {user.email}</p>
      </div>
    </div>
  );
};

export default UserDetails;
