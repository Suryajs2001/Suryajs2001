import React, { useState } from 'react';
import axios from 'axios';

const EditStudent = ({ student }) => {
    const [formData, setFormData] = useState(student);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:5000/students/${student.id}`, formData)
            .then(response => {
                alert('Student updated successfully');
            })
            .catch(error => {
                console.error('There was an error updating the student!', error);
            });
    };

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                name="name" 
                value={formData.name} 
                onChange={handleChange} 
            />
            <input 
                type="email" 
                name="email" 
                value={formData.email} 
                onChange={handleChange} 
            />
            <input 
                type="text" 
                name="phone" 
                value={formData.phone} 
                onChange={handleChange} 
            />
            {/* Add other input fields */}
            <button type="submit">Save Changes</button>
        </form>
    );
};

export default EditStudent;
