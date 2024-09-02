import React, { useState } from 'react';
import './Form.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Form = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        father_name: '',
        mother_name: '',
        date_of_birth: '',
        phone: '',
        aadhar_card: '',
        pan_card: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
      
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
            const response = await axios.post('http://localhost:5000/register', formData);
            navigate('/');
            alert(response.data);
            
        } catch (error) {
            if (error.response) {
                alert('Error: ' + error.response.data)
                
            } else if (error.request) {
                alert('Error: No response received from the server.');
            } else {
                alert('Error: ' + error.message);
            }
        }
    };
    
    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Name"
            />
            <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
            />
            <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Password"
            />
            <input
                type="text"
                name="father_name"
                value={formData.father_name}
                onChange={handleChange}
                placeholder="Father's Name"
            />
            <input
                type="text"
                name="mother_name"
                value={formData.mother_name}
                onChange={handleChange}
                placeholder="Mother's Name"
            />
            <input
                type="date"
                name="date_of_birth"
                value={formData.date_of_birth}
                onChange={handleChange}
                placeholder="Date of Birth"
            />
            <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone"
            />
            <input
                type="text"
                name="aadhar_card"
                value={formData.aadhar_card}
                onChange={handleChange}
                placeholder="Aadhar Number"
            />
            <input
                type="text"
                name="pan_card"
                value={formData.pan_card}
                onChange={handleChange}
                placeholder="PAN Number"
            />
            <button type="submit">Register</button>
        </form>
    );
};

export default Form;
