import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './StudentList.css';

const StudentList = () => {
    const [students, setStudents] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/students')
            .then(response => {
                setStudents(response.data);
            })
            .catch(error => {
                console.error('There was an error fetching the students!', error);
            });
    }, []);

    return (
        <div className='studentlist'>
            <h2>Student List</h2>
            <table>
                <thead className='studenthead'>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Father's Name</th>
                        <th>Mother's Name</th>
                        <th>DOB</th>
                        <th>Aadhar Card</th>
                        <th>PAN Card</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {students.map(student => (
                        <tr key={student.id}>
                            <td>{student.id}</td>
                            <td>{student.name}</td>
                            <td>{student.email}</td>
                            <td>{student.phone}</td>
                            <td>{student.father_name}</td>
                            <td>{student.mother_name}</td>
                            <td>{student.date_of_birth}</td>
                            <td>{student.aadhar_card}</td>
                            <td>{student.pan_card}</td>
                            <td>
                                <button className='studentbtnn'>Edit</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default StudentList;
