import React, { useState } from 'react';

import { useHistory } from 'react-router-dom';

const AdminLogin = () => {

 const [adminId, setAdminId] = useState('');

 const [adminPassword, setAdminPassword] = useState('');

 const history = useHistory();

 const handleLogin = () => {

  // Perform admin login validation here

  // For simplicity, you can hardcode the admin credentials

  const validAdminId = 'admin123';

  const validAdminPassword = 'adminpassword';

  if (adminId === validAdminId && adminPassword === validAdminPassword) {

   // Redirect to admin dashboard or other pages

   history.push('/adminDashboard');

  } else {

   alert('Invalid admin credentials');

  }

 };

 return (

  <div className="container">

   <h2>Admin Login</h2>

   <div className="form-group">

    <label>Admin ID</label>

    <input

     type="text"

     className="form-control"

     value={adminId}

     onChange={(e) => setAdminId(e.target.value)}

    />

   </div>

   <div className="form-group">

    <label>Password</label>

    <input

     type="password"

     className="form-control"

     value={adminPassword}

     onChange={(e) => setAdminPassword(e.target.value)}

    />

   </div>

   <button className="btn btn-primary" onClick={handleLogin}>

    Login

   </button>

  </div>

 );

};

export default AdminLogin;
