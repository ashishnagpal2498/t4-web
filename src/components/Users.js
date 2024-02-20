import React, { useContext, useState, useEffect } from 'react';
import { AuthContext } from '../context/AuthContext';
import UserCard from './UserCard';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'

const Users = () => {
    const { user, logout } = useContext(AuthContext);
    const [users, setUsers] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate(); 
    useEffect(() => {
        if (!user) {
            navigate("/login");
        }
    }, [user, navigate])

    useEffect(() => {
        console.log("UseEffect Run")
        const fetchUsers = async () => {
            try {
                const response = await axios.get("https://express-t4.onrender.com/api/users");
                if (response.status === 200) {
                    setUsers(response.data);
                    console.log(response.data);
                }
            } catch (error) {
                console.error('Error fetching users:', error);
            }

        }
        fetchUsers();
    }, []);

    const filteredUsers = users.filter(
        (user) =>
        user.name.split(' ')[0].toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.name.split(' ')[1].toLowerCase().includes(searchTerm.toLowerCase())
    )
    return (
        <div>
            <h2>Users</h2>
            <div className='title-box'>
            <p>Welcome, {user?.username}</p>
            <button onClick={logout}>Logout</button>
            </div>
           
            <div className="users-container">
                    <input className='search-box' placeholder='Search User' type='text' onChange={(e) => setSearchTerm(e.target.value)} />
                    {filteredUsers.map(user => (
                        <UserCard key={user._id} user={user} />
                    ))}
            </div>
        </div>
    );
};

export default Users;
