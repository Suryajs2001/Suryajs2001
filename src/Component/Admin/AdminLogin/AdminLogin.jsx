import React, { useState } from 'react';
import './AdminLogin.css'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const AdminLogin = () => {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    console.log('Logging in with:', { user, password });
  
    try {
      const response = await axios.post(
        'http://localhost:5000/adminlogin',
        { user, password },
        { headers: { 'Content-Type': 'application/json' } }
      );
      localStorage.setItem('token', response.data.token);
      navigate('/admin');
    } catch (error) {
      console.error('Login failed', error.response?.data || error.message);
    }
  };
  return (
    <div className='admin-login-container'>
      <h2>Admin Login</h2>
      <input type="text" placeholder="user" value={user} onChange={(e) => setUser(e.target.value)} className='admininput' />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}  className='admininput'/>
      <button onClick={handleLogin} className='adminbtn'>Login</button>
    </div>
  );
};

export default AdminLogin;
