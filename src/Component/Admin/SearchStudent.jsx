import React, { useState } from 'react';
import axios from 'axios';

const SearchStudent = () => {
    const [search, setSearch] = useState('');
    const [student, setStudent] = useState(null);

    const handleSearch = () => {
        axios.get(`/http://localhost:5000/students/search?query=${search}`)
            .then(response => {
                setStudent(response.data);
            })
            .catch(error => {
                console.error('There was an error fetching the student!', error);
            });
    };

    return (
        <div>
            <h2>Search Student</h2>
            <input 
                type="text" 
                placeholder="Search by phone or email" 
                value={search} 
                onChange={(e) => setSearch(e.target.value)} 
            />
            <button onClick={handleSearch}>Search</button>
            {student && (
                <div>
                    <h3>Student Details</h3>
                    <p>Name: {student.name}</p>
                    <p>Email: {student.email}</p>
                    <p>Phone: {student.phone}</p>
                    {/* Display other details */}
                </div>
            )}
        </div>
    );
};

export default SearchStudent;
