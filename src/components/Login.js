import React, { useContext, useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import '../stylesheets/login.css'

const Login = () => {
    const [formData, setFormData] = useState({
        username: "",
        password: "",
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };
    const { error, loading, login, successMessage } = useContext(AuthContext);


    const handleSubmit = (event) => {
        event.preventDefault();
        login({ username: formData.username, password:formData.password });
    };

    return (
        <div className="container">
            <div className="title-container">
                <h1 className="title">Login</h1>
            </div>
            {error && <span className="error">{error}</span>}
            <form className={"register-form"} onSubmit={handleSubmit}>
                <div className="input-group">
                    <input
                        type="text"
                        name="username"
                        value={formData.firstName}
                        onChange={handleChange}
                        placeholder="Username"
                    />
                </div>
                <div className="input-group">
                    <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        placeholder="Password"
                    />
                </div>
                <button type="submit" disabled={loading}>{loading ? 'Loading...' : 'Login'}</button>
            </form>
            {successMessage && (
                <div className="success-message">
                    Login Successful...Redirecting to the Users Page
                </div>
            )}
        </div>
    );
};

export default Login;
