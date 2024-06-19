// import { useState } from "react";
// import { Link, Navigate } from "react-router-dom";
// import { backendUrl } from "../../../config";


// export const Reset = () => {
//   const [data, setData] = useState({
//     password: "",
//   });
//   const [isReset, setIsReset] = useState(false);
//   const handleChange = (ele) => {
//     const { name, value } = ele.target;
//     setData({
//       ...data,
//       [name]: value,
//     });
//   };
//   const handleSubmit = async (ele) => {
//     ele.preventDefault();
//     const response = await fetch(`${backendUrl}/resetPassword`, {
//       method: "POST",
//       body: JSON.stringify(data),
//       headers: {
//         "Content-Type": "application/json",
//       },
//     });
//     if (response.status === 401) {
//       alert("Error");
//     } else {
//       alert("Password reset successfully");
//       setIsReset(true);
//     }
//     setData({
//       password: "",
//     });
//   };
//   if (isReset) {
//     return <Navigate to={'/login'} replace />
//   }
//   return (
//     <div>
//       {/* Header */}
//       <nav className="navbar navbar-expand-lg navbar-dark bg-primary"> {/* Changed bg-light to bg-primary for vibrant color */}
//                 <div className="container-fluid">
//                     <h2 className="navbar-brand">Inventory Billing App</h2> {/* Removed href from h2 */}
//                     <div className="ml-auto">
//                         <Link to='/login' className="btn btn-light">Log In</Link> {/* Added btn-outline-light class for light outline */}
//                         <Link to='/register' className="btn btn-light">Sign In</Link> {/* Changed button color to light */}
//                     </div>
//                 </div>
//       </nav>

//       {/* Reset Form */}
//       <div className="container">
//         <div className="row justify-content-center mt-5">
//           <div className="col-md-6">
//             <div className="card">
//               <div className="card-body">
//                 <h4 className="card-title text-center mb-4">Password Reset Form</h4>
//                 <form onSubmit={handleSubmit}>
//                   <div className="mb-3">
//                     <label htmlFor="password" className="form-label">Password:</label>
//                     <input
//                       type="password"
//                       className="form-control"
//                       id="password"
//                       name="password"
//                       value={data.password}
//                       onChange={handleChange}
//                       required
//                     />
//                   </div>
//                   <div className="d-grid">
//                     <button type="submit" className="btn btn-primary">Submit</button>
//                   </div>
//                 </form>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
// import { useState } from "react";
// import { Link, Navigate } from "react-router-dom";
// import { backendUrl } from "../../../config";

// export const Reset = () => {
//   const [data, setData] = useState({
//     email: "",
//     oldPassword: "",
//     newPassword: "",
//     confirmPassword: "",
//   });
//   const [isReset, setIsReset] = useState(false);
//   const [passwordsMatch, setPasswordsMatch] = useState(true);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setData({
//       ...data,
//       [name]: value,
//     });

//     // Check if new passwords match when either new password or confirm password changes
//     if (name === "newPassword" || name === "confirmPassword") {
//       setPasswordsMatch(data.newPassword === data.confirmPassword);
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // Check if passwords match before submitting the form
//     if (!passwordsMatch) {
//       alert("New passwords do not match!");
//       return;
//     }

//     const response = await fetch(`${backendUrl}/resetPassword`, {
//       method: "POST",
//       body: JSON.stringify(data),
//       headers: {
//         "Content-Type": "application/json",
//       },
//     });

//     if (response.status === 401) {
//       alert("Error");
//     } else {
//       alert("Password reset successfully");
//       setIsReset(true);
//     }

//     // Clear form data after submission
//     setData({
//       email: "",
//       oldPassword: "",
//       newPassword: "",
//       confirmPassword: "",
//     });
//   };

//   if (isReset) {
//     return <Navigate to={'/login'} replace />;
//   }

//   return (
//     <div>
//       {/* Header */}
//       <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
//         <div className="container-fluid">
//           <h2 className="navbar-brand">Inventory Billing App</h2>
//           <div className="ml-auto">
//             <Link to='/login' className="btn btn-light">Log In</Link>
//             <Link to='/register' className="btn btn-light">Sign In</Link>
//           </div>
//         </div>
//       </nav>

//       {/* Reset Form */}
//       <div className="container">
//         <div className="row justify-content-center mt-5">
//           <div className="col-md-6">
//             <div className="card">
//               <div className="card-body">
//                 <h4 className="card-title text-center mb-4">Password Reset Form</h4>
//                 <form onSubmit={handleSubmit}>
//                   <div className="mb-3">
//                     <label htmlFor="email" className="form-label">Email:</label>
//                     <input
//                       type="email"
//                       className="form-control"
//                       id="email"
//                       name="email"
//                       value={data.email}
//                       onChange={handleChange}
//                       required
//                     />
//                   </div>
//                   <div className="mb-3">
//                     <label htmlFor="oldPassword" className="form-label">Old Password:</label>
//                     <input
//                       type="password"
//                       className="form-control"
//                       id="oldPassword"
//                       name="oldPassword"
//                       value={data.oldPassword}
//                       onChange={handleChange}
//                       required
//                     />
//                   </div>
//                   <div className="mb-3">
//                     <label htmlFor="newPassword" className="form-label">New Password:</label>
//                     <input
//                       type="password"
//                       className="form-control"
//                       id="newPassword"
//                       name="newPassword"
//                       value={data.newPassword}
//                       onChange={handleChange}
//                       required
//                     />
//                   </div>
//                   <div className="mb-3">
//                     <label htmlFor="confirmPassword" className="form-label">Confirm New Password:</label>
//                     <input
//                       type="password"
//                       className="form-control"
//                       id="confirmPassword"
//                       name="confirmPassword"
//                       value={data.confirmPassword}
//                       onChange={handleChange}
//                       required
//                     />
//                     {!passwordsMatch && <p className="text-danger">Passwords do not match!</p>}
//                   </div>
//                   <div className="d-grid">
//                     <button type="submit" className="btn btn-primary">Submit</button>
//                   </div>
//                 </form>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// import { useState } from "react";
// import { Link, Navigate } from "react-router-dom";
// import { backendUrl } from "../../../config";
// import '../../App.css';

// export const Reset = () => {
//   const [data, setData] = useState({
//     email: "",
//     oldPassword: "",
//     newPassword: "",
//     confirmPassword: "",
//   });
//   const [isReset, setIsReset] = useState(false);
//   const [passwordsMatch, setPasswordsMatch] = useState(true);
//   const [showNewPassword, setShowNewPassword] = useState(false); // State to toggle new password visibility
//   const [showConfirmPassword, setShowConfirmPassword] = useState(false); // State to toggle confirm password visibility

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setData({
//       ...data,
//       [name]: value,
//     });

//     if (name === "newPassword" || name === "confirmPassword") {
//       setPasswordsMatch(data.newPassword === value);
//     }
//   };

//   const toggleNewPasswordVisibility = () => {
//     setShowNewPassword(!showNewPassword);
//   };

//   const toggleConfirmPasswordVisibility = () => {
//     setShowConfirmPassword(!showConfirmPassword);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!passwordsMatch) {
//       alert("New passwords do not match!");
//       return;
//     }

//     const response = await fetch(`https://giridharan-5.onrender.com/resetPassword`, {
//       method: "POST",
//       body: JSON.stringify(data),
//       headers: {
//         "Content-Type": "application/json",
//       },
//     });

//     if (response.status === 401) {
//       alert("Error");
//     } else {
//       alert("Password reset successfully");
//       setIsReset(true);
//     }

//     setData({
//       email: "",
//       oldPassword: "",
//       newPassword: "",
//       confirmPassword: "",
//     });
//   };

//   if (isReset) {
//     return <Navigate to={'/login'} replace />;
//   }

//   return (
//     <div style={{ backgroundColor: '#d1e0e0' }}>
//       {/* Header */}
//       <nav className="navbar navbar-expand-lg " style={{ backgroundColor: '#3d5c5c' }}>
//         <div className="container-fluid">
//         <h2 className="navbar-brand" style={{ fontFamily: 'Arial, sans-serif', fontWeight: 'bold', fontSize: '24px', color: '#141f1f' }}>JourneyJet Bus Booking</h2>
//           <div className="ml-auto">
//             <Link to='/login' className="btn btn-light">Log In</Link>
//             &nbsp;&nbsp;&nbsp;
//             <Link to='/register' className="btn btn-light">Sign In</Link>
//           </div>
//         </div>
//       </nav>
//       <h1 className="lk" style={{ color: '#1f2e2e' }}>Welcome To JourneyJet</h1>
//       {/* Reset Form */}
//       <div className="container">
//         <div className="row justify-content-center mt-5">
//           <div className="col-md-6">
//             <div className="card">
//               <div className="card-body" style={{ backgroundColor: '#b3cccc' }}>
//                 <h4 className="card-title text-center mb-4">Password Reset Form</h4>
//                 <form onSubmit={handleSubmit}>
//                   <div className="mb-3">
//                     <label htmlFor="email" className="form-label">Email:</label>
//                     <input
//                       type="email"
//                       className="form-control"
//                       id="email"
//                       name="email"
//                       value={data.email}
//                       onChange={handleChange}
//                       required
//                     />
//                   </div>
//                   <div className="mb-3">
//                     <label htmlFor="oldPassword" className="form-label">Old Password:</label>
//                     <input
//                       type="password"
//                       className="form-control"
//                       id="oldPassword"
//                       name="oldPassword"
//                       value={data.oldPassword}
//                       onChange={handleChange}
//                       required
//                     />
//                   </div>
//                   <div className="mb-3">
//                     <label htmlFor="newPassword" className="form-label">New Password:</label>
//                     <div className="input-group">
//                       <input
//                         type={showNewPassword ? "text" : "password"}
//                         className="form-control"
//                         id="newPassword"
//                         name="newPassword"
//                         value={data.newPassword}
//                         onChange={handleChange}
//                         required
//                       />
//                       <button
//                         className="btn btn-outline-secondary"
//                         type="button"
//                         onClick={toggleNewPasswordVisibility}
//                       >
//                         {showNewPassword ? "Hide" : "Show"}
//                       </button>
//                     </div>
//                   </div>
//                   <div className="mb-3">
//                     <label htmlFor="confirmPassword" className="form-label">Confirm New Password:</label>
//                     <div className="input-group">
//                       <input
//                         type={showConfirmPassword ? "text" : "password"}
//                         className="form-control"
//                         id="confirmPassword"
//                         name="confirmPassword"
//                         value={data.confirmPassword}
//                         onChange={handleChange}
//                         required
//                       />
//                       <button
//                         className="btn btn-outline-secondary"
//                         type="button"
//                         onClick={toggleConfirmPasswordVisibility}
//                       >
//                         {showConfirmPassword ? "Hide" : "Show"}
//                       </button>
//                     </div>
//                     {!passwordsMatch && <p className="text-danger">Passwords do not match!</p>}
//                   </div>
//                   <div className="d-grid">
//                     <button type="submit" className="btn btn-primary" style={{ backgroundColor: '#1f2e2e', border: 'none' }}>Submit</button>
//                   </div>
//                 </form>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";

export const Reset = () => {
  const [data, setData] = useState({
    email: "",
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  });
  const [isReset, setIsReset] = useState(false);
  const [passwordsMatch, setPasswordsMatch] = useState(true);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (data.newPassword !== data.confirmPassword) {
      setPasswordsMatch(false);
      return;
    }

    const response = await fetch(`https://authentication-9qlt.onrender.com/resetPassword` , {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.status === 200) {
      setIsReset(true);
    }
  };

  if (isReset) {
    return <Navigate to={'/login'} replace />;
  }

  return (
    <div
      className="background-container"
      style={{
        backgroundImage: 'url("/highway.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
      }}
    >
      <div className="login-form-container">
        {/* Header */}
        <nav className="navbar navbar-expand-lg" style={{ backgroundColor: '#3d5c5c' }}>
          <div className="container-fluid">
            <h2 className="navbar-brand" style={{ fontFamily: 'Arial, sans-serif', fontWeight: 'bold', fontSize: '24px', color: '#141f1f' }}>JourneyJet Bus Booking</h2>
            <div className="ml-auto">
              <Link to='/login' className="btn btn-light">Log In</Link>
              <Link to='/register' className="btn btn-light">Sign In</Link>
            </div>
          </div>
        </nav>
       
        {/* Reset Form */}
        <div className="container mt-5">
          <div className="row justify-content-center">
            <div className="col-md-6">
              <div className="card transparent-form">
                <h1 className="lk" style={{ color: '#1f2e2e' }}>Welcome To JourneyJet</h1>
                <div className="card-body">
                  <h4 className="card-title text-center mb-4">Password Reset Form</h4>
                  <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                      <label htmlFor="email">Email:</label>
                      <input type="email" className="form-control" id="email" name="email" value={data.email} onChange={(e) => setData({ ...data, email: e.target.value })} required />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="oldPassword">Old Password:</label>
                      <input type="password" className="form-control" id="oldPassword" name="oldPassword" value={data.oldPassword} onChange={(e) => setData({ ...data, oldPassword: e.target.value })} required />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="newPassword">New Password:</label>
                      <input type="password" className="form-control" id="newPassword" name="newPassword" value={data.newPassword} onChange={(e) => setData({ ...data, newPassword: e.target.value })} required />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="confirmPassword">Confirm New Password:</label>
                      <input type="password" className="form-control" id="confirmPassword" name="confirmPassword" value={data.confirmPassword} onChange={(e) => setData({ ...data, confirmPassword: e.target.value })} required />
                      {!passwordsMatch && <p className="text-danger">Passwords do not match!</p>}
                    </div>
                    <div className="d-grid">
                      <button type="submit" className="btn btn-primary" style={{ backgroundColor: '#1f2e2e', border: 'none' }}>Submit</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
