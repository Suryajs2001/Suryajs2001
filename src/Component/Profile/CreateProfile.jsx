// import React, { useState } from 'react';
// import './CreateProfile.css'
// import axios from 'axios';
// import { useLocation } from 'react-router-dom';
// import { useEffect } from 'react';

// function CreateProfile({ name, email }) {
//     const [fatherName, setFatherName] = useState('');
//     const [motherName, setMotherName] = useState('');
//     const [dateOfBirth, setDateOfBirth] = useState('');
//     const [phone, setPhone] = useState('');
//     const [aadharCard, setAadharCard] = useState(null);
//     const [panCard, setPanCard] = useState(null);
//     // const location = useLocation()

//     // useEffect(()=>{
//     //      console.log(location.state);
        
//     // },[])

//     const handleSubmit = async (e) => {
//         e.preventDefault();

//         const formData = new FormData();
//         // formData.append('studentId',location.state.studentId);
//         formData.append('fatherName', fatherName);
//         formData.append('motherName', motherName);
//         formData.append('dateOfBirth', dateOfBirth);
//         formData.append('phone', phone);
//         formData.append('aadhar_card', aadharCard);
//         formData.append('pan_card', panCard);

//         await axios.post('http://localhost:5000/createprofile', formData, {
//             headers: {
//                 'Content-Type': 'multipart/form-data',
//             },
//         });

//         alert('Profile created successfully');
//     };

//     return (
//         <form onSubmit={handleSubmit}>
           
//             <h2>Create Profile for {studentId} {name} ({email})</h2>
//             <input type="text" placeholder="Father's Name" value={fatherName} onChange={(e) => setFatherName(e.target.value)} />
//             <input type="text" placeholder="Mother's Name" value={motherName} onChange={(e) => setMotherName(e.target.value)} />
//             <input type="date" value={dateOfBirth} onChange={(e) => setDateOfBirth(e.target.value)} />
//             <input type="text" placeholder="Phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
//             <input type="file"  placeholder='Aadhar-card'  onChange={(e) => setAadharCard(e.target.files[0])} />
//             <input type="file" placeholder='Pan-card' onChange={(e) => setPanCard(e.target.files[0])} />
//             <button type="submit">Create Profile</button>
//         </form>
//     );
// }

// export default CreateProfile;
