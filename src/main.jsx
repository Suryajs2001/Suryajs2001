import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import FullStack from './Component/Paid-Course/FullStack.jsx';
import AppDevelopment from './Component/Paid-Course/AppDevelopment.jsx';
import FundamentalCourse from './Component/Paid-Course/FundamentalCourse.jsx';
import SystemDesgin from './Component/Paid-Course/SystemDesgin.jsx';
import DataAlgorithm from './Component/Paid-Course/DataAlgorithm.jsx';
import Home from './Component/Home/Home.jsx';
import Privcay from './Component/Privacy/Privcay.jsx';
import Form from './Component/Form/Signup/Form.jsx';

import StudentList from './Component/Admin/StudenList.jsx';
import ProtectedRoute from './Component/Admin/Protected/ProtectedRoute.jsx'
import AdminLogin from './Component/Admin/AdminLogin/Adminlogin.jsx'





const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path='/' element={<App />}>
        <Route path='' element={<Home />} />
        <Route path="/fullstack" element={<FullStack />} />
        <Route path="/app" element={<AppDevelopment />} />
        <Route path="/fundamental" element={<FundamentalCourse />} />
        <Route path="/system" element={<SystemDesgin />} />
        <Route path="/algorithm" element={<DataAlgorithm />} />
        <Route path="/privacy" element={<Privcay />} />
        <Route path='/form' element={<Form />} />
      </Route>

      
      <Route path="/adminlogin" element={<AdminLogin />} />

    <Route path="/admin" element={ <ProtectedRoute> <StudentList /> </ProtectedRoute>}/>
     
    
    
    </>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)