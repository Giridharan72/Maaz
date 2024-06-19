// import { useState } from "react";
// import { Link, Navigate } from "react-router-dom";
// import { backendUrl } from "../../../config";
// import Home from "../Home";
// import '../../App.css';

// export const Login = () => {
//     const [login, setLogin] = useState({
//         email: '',
//         password: ''
//     });

//     const handleChange = (ele) => {
//         const { name, value } = ele.target;
//         setLogin({ ...login, [name]: value });
//     };

//     const handleSubmit = async (ele) => {
//         ele.preventDefault();
//         const loginResponse = await fetch(`https://giridharan-5.onrender.com/login`, {
//             method: 'POST',
//             body: JSON.stringify(login),
//             headers: {
//                 'Content-Type': 'application/json'
//             }
//         });

//         if (loginResponse.status === 401) {
//             alert('Login failed');
//         } else if (loginResponse.status === 403) {
//             alert('Not registered');
//         } else {
//             alert('Login success');
//             localStorage.setItem('user', JSON.stringify(loginResponse));
//         }

//         setLogin({
//             email: '',
//             password: ''
//         });
//     };

//     if (localStorage.getItem('user') && JSON.parse(localStorage.getItem('user'))) {
//         return <Navigate to={'/'} replace />;
//     }

//     return (
//         <div>
//             {/* Header */}
//             <nav className="navbar navbar-expand-lg navbar-dark bg-primary"> {/* Changed bg-light to bg-primary for vibrant color */}
//                 <div className="container-fluid">
//                     <h2 className="navbar-brand">Inventory Billing App</h2> {/* Removed href from h2 */}
//                     <div className="ml-auto">
//                         <Link to='/login' className="btn btn-light">Log In</Link> {/* Added btn-outline-light class for light outline */}
                      
//                         <Link to='/register' className="btn btn-light">Sign In</Link> {/* Changed button color to light */}
//                     </div>
//                 </div>
//             </nav>
//             <h1 className="lk">Welcome To JourneyJet</h1> {/* Corrected classname to className */}
//             {/* Login Form */}
//             <div className="container mt-5">
//                 <div className="row justify-content-center">
//                     {/* Left Column for Logo */}
//                     <div className="col-md-4">
//                         <img src="https://aathifpay.com/Content/HomeContentV3/images/busbooking.png" alt="Logo" className="img-fluid" />
//                     </div>
//                     <div className="col-md-6">
//                         <div className="card">
//                             <div className="card-body">
//                                 {/* Login Form */}
//                                 <h4 className="card-title text-center mb-4">Login In</h4>
//                                 <form onSubmit={handleSubmit}>
//                                     <div className="mb-3">
//                                         <label htmlFor="email">Email:</label>
//                                         <input type="email" className="form-control" id="email" name="email" value={login.email} onChange={handleChange} required />
//                                     </div>
//                                     <div className="mb-3">
//                                         <label htmlFor="password">Password:</label>
//                                         <input type="password" className="form-control" id="password" name="password" value={login.password} onChange={handleChange} required />
//                                     </div>
//                                     <div className="mb-3">
//                                         <Link to='/Forgot'>Forgot Password?</Link>
//                                         &nbsp;&nbsp;&nbsp;
//                                         <Link to='/reset'>Reset?</Link>
//                                     </div>
//                                     <div className="d-grid">
//                                         <button type="submit" className="btn btn-primary">Submit</button>
//                                     </div>
//                                     <div className="text-center mt-3">
//                                         <Link to="/register" className="text-decoration-none">Register ? New account</Link> {/* Changed text color to dark */}
//                                     </div>
//                                 </form>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };


// import React, { useState } from "react";
// import { Link, Navigate } from "react-router-dom";
// import { backendUrl } from "../../../config";
// import Home from "../Home";
// import '../../App.css';

// export const Login = () => {
//     const [login, setLogin] = useState({
//         email: '',
//         password: ''
//     });

//     const handleChange = (ele) => {
//         const { name, value } = ele.target;
//         setLogin({ ...login, [name]: value });
//     };

//     const handleSubmit = async (ele) => {
//         ele.preventDefault();
//         const loginResponse = await fetch(`https://billing-l50y.onrender.com/login`, {
//             method: 'POST',
//             body: JSON.stringify(login),
//             headers: {
//                 'Content-Type': 'application/json'
//             }
//         });

//         if (loginResponse.status === 401) {
//             alert('Login failed');
//         } else if (loginResponse.status === 403) {
//             alert('Not registered');
//         } else {
//             alert('Login success');
//             localStorage.setItem('user', JSON.stringify(loginResponse));
//         }

//         setLogin({
//             email: '',
//             password: ''
//         });
//     };

//     if (localStorage.getItem('user') && JSON.parse(localStorage.getItem('user'))) {
//         return <Navigate to={'/'} replace />;
//     }

//     return (
//         <div className="background-container" style={{ backgroundColor: '#d1e0e0' }}>
//             <div className="login-form-container">
//                 {/* Header */}
//                 <nav className="navbar navbar-expand-lg" style={{ backgroundColor: '#3d5c5c' }}> {/* Changed bg-light to bg-primary for vibrant color */}
//                     <div className="container-fluid">
//                     <h2 className="navbar-brand" style={{ fontFamily: 'Arial, sans-serif', fontWeight: 'bold', fontSize: '24px', color: '#141f1f' }}>JourneyJet Bus Booking</h2>{/* Removed href from h2 */}
//                         <div className="ml-auto">
//                             <Link to='/login' className="btn btn-light">Log In</Link> {/* Added btn-outline-light class for light outline */}
                          
//                             <Link to='/register' className="btn btn-light">Sign In</Link> {/* Changed button color to light */}
//                         </div>
//                     </div>
//                 </nav>
//                 <h1 className="lk"  style={{ color: '#1f2e2e' }}>Welcome To JourneyJet</h1> {/* Corrected classname to className */}
//                 {/* Login Form */}
//                 <div className="container mt-5"  >
//                     <div className="row justify-content-center" >
//                         {/* Left Column for Logo */}
//                         <div className="col-md-4">
//                             <img src="https://aathifpay.com/Content/HomeContentV3/images/busbooking.png" alt="Logo" className="img-fluid" />
//                         </div>
//                         <div className="col-md-6" >
//                             <div className="card" style={{ backgroundColor: '#b3cccc' }}>
//                                 <div className="card-body">
//                                     {/* Login Form */}
//                                     <h4 className="card-title text-center mb-4">Login In</h4>
//                                     <form onSubmit={handleSubmit}>
//                                         <div className="mb-3">
//                                             <label htmlFor="email">Email:</label>
//                                             <input type="email" className="form-control" id="email" name="email" value={login.email} onChange={handleChange} required />
//                                         </div>
//                                         <div className="mb-3">
//                                             <label htmlFor="password">Password:</label>
//                                             <input type="password" className="form-control" id="password" name="password" value={login.password} onChange={handleChange} required />
//                                         </div>
//                                         <div className="mb-3" >
//                                             <Link to='/Forgot' style={{ color: '#1f2e2e' }}>Forgot Password?</Link>
//                                             &nbsp;&nbsp;&nbsp;
//                                             <Link to='/reset' style={{ color: '#1f2e2e' }}>Reset?</Link>
//                                         </div>
//                                         <div className="d-grid">
//     <button type="submit" className="btn btn-primary" style={{ backgroundColor: '#1f2e2e', border: 'none' }}>Submit</button>
// </div>

//                                         <div className="text-center mt-3">
//                                             <Link to="/register" className="text-decoration-none" style={{ color: '#1f2e2e' }}>Register ? New account</Link> {/* Changed text color to dark */}
//                                         </div>
//                                     </form>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             {/* Footer */}
//         <footer className="footer">
//             <div className="container text-center">
//                 <span className="text-muted">&copy; 2024 Inventory Billing App</span>
//                 <span className="text-muted">&nbsp;|&nbsp;</span>
//                 <Link to='/contact' className="text-muted">Contact Us</Link>
//                 <span className="text-muted">&nbsp;|&nbsp;</span>
//                 <Link to='/help' className="text-muted">Help</Link>
//             </div>
//         </footer>
//         </div>
//     );
// };
// import React, { useState } from "react";
// import { Link, Navigate } from "react-router-dom";
// import { backendUrl } from "../../../config";
// import Home from "../Home";
// import '../../App.css';

// export const Login = () => {
//     const [login, setLogin] = useState({
//         email: '',
//         password: ''
//     });

//     const handleChange = (ele) => {
//         const { name, value } = ele.target;
//         setLogin({ ...login, [name]: value });
//     };

//     const handleSubmit = async (ele) => {
//         ele.preventDefault();
//         const loginResponse = await fetch(`https://billing-l50y.onrender.com/login`, {
//             method: 'POST',
//             body: JSON.stringify(login),
//             headers: {
//                 'Content-Type': 'application/json'
//             }
//         });

//         if (loginResponse.status === 401) {
//             alert('Login failed');
//         } else if (loginResponse.status === 403) {
//             alert('Not registered');
//         } else {
//             alert('Login success');
//             localStorage.setItem('user', JSON.stringify(loginResponse));
//         }

//         setLogin({
//             email: '',
//             password: ''
//         });
//     };

//     if (localStorage.getItem('user') && JSON.parse(localStorage.getItem('user'))) {
//         return <Navigate to={'/'} replace />;
//     }

//     return (
//         <div
//             className="background-container"
//             style={{
//                 backgroundImage: 'url("data:image/jpeg;base64,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")',
//                 backgroundSize: 'cover',
//                 backgroundPosition: 'center',
//                 minHeight: '100vh'
//             }}
//         >
//             <div className="login-form-container">
//                 {/* Header */}
//                 <nav className="navbar navbar-expand-lg" style={{ backgroundColor: '#3d5c5c' }}>
//                     <div className="container-fluid">
//                         <h2 className="navbar-brand" style={{ fontFamily: 'Arial, sans-serif', fontWeight: 'bold', fontSize: '24px', color: '#141f1f' }}>JourneyJet Bus Booking</h2>
//                         <div className="ml-auto">
//                             <Link to='/login' className="btn btn-light">Log In</Link>
//                             <Link to='/register' className="btn btn-light">Sign In</Link>
//                         </div>
//                     </div>
//                 </nav>
//                 <h1 className="lk" style={{ color: '#1f2e2e' }}>Welcome To JourneyJet</h1>
//                 {/* Login Form */}
//                 <div className="container mt-5">
//                     <div className="row justify-content-center">
//                         {/* Left Column for Logo */}
//                         <div className="col-md-4">
//                             <img src="https://aathifpay.com/Content/HomeContentV3/images/busbooking.png" alt="Logo" className="img-fluid" />
//                         </div>
//                         <div className="col-md-6">
//                             <div className="card" style={{ backgroundColor: '#b3cccc' }}>
//                                 <div className="card-body">
//                                     {/* Login Form */}
//                                     <h4 className="card-title text-center mb-4">Login In</h4>
//                                     <form onSubmit={handleSubmit}>
//                                         <div className="mb-3">
//                                             <label htmlFor="email">Email:</label>
//                                             <input type="email" className="form-control" id="email" name="email" value={login.email} onChange={handleChange} required />
//                                         </div>
//                                         <div className="mb-3">
//                                             <label htmlFor="password">Password:</label>
//                                             <input type="password" className="form-control" id="password" name="password" value={login.password} onChange={handleChange} required />
//                                         </div>
//                                         <div className="mb-3">
//                                             <Link to='/Forgot' style={{ color: '#1f2e2e' }}>Forgot Password?</Link>
//                                             &nbsp;&nbsp;&nbsp;
//                                             <Link to='/reset' style={{ color: '#1f2e2e' }}>Reset?</Link>
//                                         </div>
//                                         <div className="d-grid">
//                                             <button type="submit" className="btn btn-primary" style={{ backgroundColor: '#1f2e2e', border: 'none' }}>Submit</button>
//                                         </div>
//                                         <div className="text-center mt-3">
//                                             <Link to="/register" className="text-decoration-none" style={{ color: '#1f2e2e' }}>Register ? New account</Link>
//                                         </div>
//                                     </form>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             {/* Footer */}
//             <footer className="footer">
//                 <div className="container text-center">
//                     <span className="text-muted">&copy; 2024 Inventory Billing App</span>
//                     <span className="text-muted">&nbsp;|&nbsp;</span>
//                     <Link to='/contact' className="text-muted">Contact Us</Link>
//                     <span className="text-muted">&nbsp;|&nbsp;</span>
//                     <Link to='/help' className="text-muted">Help</Link>
//                 </div>
//             </footer>
//         </div>
//     );
// };
// import React, { useState } from "react";
// import { Link, Navigate } from "react-router-dom";
// import '../../App.css';


// export const Login = () => {
//     const [login, setLogin] = useState({
//         email: '',
//         password: ''
//     });

//     const handleChange = (ele) => {
//         const { name, value } = ele.target;
//         setLogin({ ...login, [name]: value });
//     };

//     const handleSubmit = async (ele) => {
//         ele.preventDefault();
//         const loginResponse = await fetch(`https://billing-l50y.onrender.com/login`, {
//             method: 'POST',
//             body: JSON.stringify(login),
//             headers: {
//                 'Content-Type': 'application/json'
//             }
//         });

//         if (loginResponse.status === 401) {
//             alert('Login failed');
//         } else if (loginResponse.status === 403) {
//             alert('Not registered');
//         } else {
//             alert('Login success');
//             localStorage.setItem('user', JSON.stringify(loginResponse));
//         }

//         setLogin({
//             email: '',
//             password: ''
//         });
//     };

//     if (localStorage.getItem('user') && JSON.parse(localStorage.getItem('user'))) {
//         return <Navigate to={'/'} replace />;
//     }

//     return (
//         <div
//             className="background-container"
//             style={{
//                 backgroundImage: 'url("/highway.jpg")',
//                 backgroundSize: 'cover',
//                 backgroundPosition: 'center',
//                 minHeight: '100vh'
//             }}
//         >
//             <div className="login-form-container">
//                 {/* Header */}
//                 <nav className="navbar navbar-expand-lg" style={{ backgroundColor: '#3d5c5c' }}>
//                     <div className="container-fluid">
//                         <h2 className="navbar-brand" style={{ fontFamily: 'Arial, sans-serif', fontWeight: 'bold', fontSize: '24px', color: '#141f1f' }}>JourneyJet Bus Booking</h2>
//                         <div className="ml-auto">
//                             <Link to='/login' className="btn btn-light">Log In</Link>
//                             <Link to='/register' className="btn btn-light">Sign In</Link>
//                         </div>
//                     </div>
//                 </nav>
//                 <h1 className="lk" style={{ color: '#1f2e2e' }}>Welcome To JourneyJet</h1>
//                 {/* Login Form */}
//                 <div className="container mt-5">
//                     <div className="row justify-content-center">
//                         {/* Left Column for Logo */}
//                         <div className="col-md-4">
//                             <img src="https://aathifpay.com/Content/HomeContentV3/images/busbooking.png" alt="Logo" className="img-fluid" />
//                         </div>
//                         <div className="col-md-6">
//                             <div className="card" style={{ backgroundColor: '#b3cccc' }}>
//                                 <div className="card-body">
//                                     {/* Login Form */}
//                                     <h4 className="card-title text-center mb-4">Login In</h4>
//                                     <form onSubmit={handleSubmit}>
//                                         <div className="mb-3">
//                                             <label htmlFor="email">Email:</label>
//                                             <input type="email" className="form-control" id="email" name="email" value={login.email} onChange={handleChange} required />
//                                         </div>
//                                         <div className="mb-3">
//                                             <label htmlFor="password">Password:</label>
//                                             <input type="password" className="form-control" id="password" name="password" value={login.password} onChange={handleChange} required />
//                                         </div>
//                                         <div className="mb-3">
//                                             <Link to='/Forgot' style={{ color: '#1f2e2e' }}>Forgot Password?</Link>
//                                             &nbsp;&nbsp;&nbsp;
//                                             <Link to='/reset' style={{ color: '#1f2e2e' }}>Reset?</Link>
//                                         </div>
//                                         <div className="d-grid">
//                                             <button type="submit" className="btn btn-primary" style={{ backgroundColor: '#1f2e2e', border: 'none' }}>Submit</button>
//                                         </div>
//                                         <div className="text-center mt-3">
//                                             <Link to="/register" className="text-decoration-none" style={{ color: '#1f2e2e' }}>Register ? New account</Link>
//                                         </div>
//                                     </form>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             {/* Footer */}
//             <footer className="footer">
//                 <div className="container text-center">
//                     <span className="text-muted">&copy; 2024 Inventory Billing App</span>
//                     <span className="text-muted">&nbsp;|&nbsp;</span>
//                     <Link to='/contact' className="text-muted">Contact Us</Link>
//                     <span className="text-muted">&nbsp;|&nbsp;</span>
//                     <Link to='/help' className="text-muted">Help</Link>
//                 </div>
//             </footer>
//         </div>
//     );
// };
// import React, { useState } from "react";
// import { Link, Navigate } from "react-router-dom";
// import '../../App.css';

// export const Login = () => {
//     const [login, setLogin] = useState({
//         email: '',
//         password: ''
//     });

//     const handleChange = (ele) => {
//         const { name, value } = ele.target;
//         setLogin({ ...login, [name]: value });
//     };

//     const handleSubmit = async (ele) => {
//         ele.preventDefault();
//         const loginResponse = await fetch(`https://sample-code-npxe.onrender.com/login`, {
//             method: 'POST',
//             body: JSON.stringify(login),
//             headers: {
//                 'Content-Type': 'application/json'
//             }
//         });

//         if (loginResponse.status === 401) {
//             alert('Login failed');
//         } else if (loginResponse.status === 403) {
//             alert('Not registered');
//         } else {
//             alert('Login success');
//             localStorage.setItem('user', JSON.stringify(loginResponse));
//         }

//         setLogin({
//             email: '',
//             password: ''
//         });
//     };

//     if (localStorage.getItem('user') && JSON.parse(localStorage.getItem('user'))) {
//         return <Navigate to={'/'} replace />;
//     }

//     return (
//         <div
//             className="background-container"
//             style={{
//                 backgroundImage: 'url("/highway.jpg")',
//                 backgroundSize: 'cover',
//                 backgroundPosition: 'center',
//                 minHeight: '100vh'
//             }}
//         >
//             <div className="login-form-container">
                
               
//                 {/* Login Form */}
//                 <div className="container mt-5">
//                     <div className="row justify-content-center">
//                         {/* Left Column for Logo */}
                       
//                         <div className="col-md-6">
//                             <div className="card transparent-form">
//                             <h1 className="lk" style={{ color: '#1f2e2e' }}>Welcome To JourneyJet</h1>
//                                 <div className="card-body">
//                                     {/* Login Form */}
//                                     <h4 className="card-title text-center mb-4">Login In</h4>
//                                     <form onSubmit={handleSubmit}>
//                                         <div className="mb-3">
//                                             <label htmlFor="email">Email:</label>
//                                             <input type="email" className="form-control" id="email" name="email" value={login.email} onChange={handleChange} required />
//                                         </div>
//                                         <div className="mb-3">
//                                             <label htmlFor="password">Password:</label>
//                                             <input type="password" className="form-control" id="password" name="password" value={login.password} onChange={handleChange} required />
//                                         </div>
//                                         <div className="mb-3">
//                                             <Link to='/Forgot' style={{ color: '#1f2e2e' }}>Forgot Password?</Link>
//                                             &nbsp;&nbsp;&nbsp;
//                                             <Link to='/reset' style={{ color: '#1f2e2e' }}>Reset?</Link>
//                                         </div>
//                                         <div className="d-grid">
//                                             <button type="submit" className="btn btn-primary" style={{ backgroundColor: '#1f2e2e', border: 'none' }}>Submit</button>
//                                         </div>
//                                         <div className="text-center mt-3">
//                                             <Link to="/register" className="text-decoration-none" style={{ color: '#1f2e2e' }}>Register ? New account</Link>
//                                         </div>
//                                     </form>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
            
//         </div>
//     );
// };


//86/24
// import React, { useState } from "react";
// import { Link, Navigate } from "react-router-dom";
// import '../../App.css';

// export const Login = () => {
//     const [login, setLogin] = useState({
//         email: '',
//         password: ''
//     });

//     const handleChange = (ele) => {
//         const { name, value } = ele.target;
//         setLogin({ ...login, [name]: value });
//     };

//     const handleSubmit = async (ele) => {
//         ele.preventDefault();
//         const loginResponse = await fetch(`https://sample-code-npxe.onrender.com/login`, {
//             method: 'POST',
//             body: JSON.stringify(login),
//             headers: {
//                 'Content-Type': 'application/json'
//             }
//         });

//         if (loginResponse.status === 401) {
//             alert('Login failed');
//         } else if (loginResponse.status === 403) {
//             alert('Not registered');
//         } else {
//             alert('Login success');
//             localStorage.setItem('user', JSON.stringify(loginResponse));
//         }

//         setLogin({
//             email: '',
//             password: ''
//         });
//     };

//     if (localStorage.getItem('user') && JSON.parse(localStorage.getItem('user'))) {
//         return <Navigate to={'/'} replace />;
//     }

//     return (
//         <div
//             className="background-container"
//             style={{
//                 backgroundImage: 'url("/highway.jpg")',
//                 backgroundSize: 'cover',
//                 backgroundPosition: 'center',
//                 minHeight: '100vh',
//                 display: 'flex',
//                 justifyContent: 'center',
//                 alignItems: 'center',
               
//             }}
//         >
//             <div className="login-form-container">
//                 {/* Login Form */}
//                 <div className="container mt-5">
//                     <div className="row justify-content-center">
//                         <div className="col-md-6">
//                             <div className="card transparent-form">
//                                 <h1 className="lk" style={{ color: '#1f2e2e' }}>Welcome To JourneyJet</h1>
//                                 <div className="card-body">
//                                     {/* Login Form */}
//                                     <h4 className="card-title text-center mb-4">Login In</h4>
//                                     <form onSubmit={handleSubmit}>
//                                         <div className="mb-3">
//                                             <label htmlFor="email">Email:</label>
//                                             <input type="email" className="form-control" id="email" name="email" value={login.email} onChange={handleChange} required />
//                                         </div>
//                                         <div className="mb-3">
//                                             <label htmlFor="password">Password:</label>
//                                             <input type="password" className="form-control" id="password" name="password" value={login.password} onChange={handleChange} required />
//                                         </div>
//                                         <div className="mb-3">
//                                             <Link to='/Forgot' style={{ color: '#1f2e2e' }}>Forgot Password?</Link>
//                                             &nbsp;&nbsp;&nbsp;
//                                             <Link to='/reset' style={{ color: '#1f2e2e' }}>Reset?</Link>
//                                         </div>
//                                         <div className="d-grid">
//                                             <button type="submit" className="btn btn-primary" style={{ backgroundColor: '#1f2e2e', border: 'none' }}>Submit</button>
//                                         </div>
//                                         <div className="text-center mt-3">
//                                             <Link to="/register" className="text-decoration-none" style={{ color: '#1f2e2e' }}>Register ? New account</Link>
//                                         </div>
//                                     </form>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };
import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { Dropdown, DropdownButton } from 'react-bootstrap';
import '../../App.css';

export const Login = () => {
    const [login, setLogin] = useState({
        email: '',
        password: ''
    });

    const handleChange = (ele) => {
        const { name, value } = ele.target;
        setLogin({ ...login, [name]: value });
    };

    const handleSubmit = async (ele) => {
        ele.preventDefault();
        const loginResponse = await fetch(`http://localhost:5000/login`
            , {
            method: 'POST',
            body: JSON.stringify(login),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (loginResponse.status === 401) {
            alert('Login failed');
        } else if (loginResponse.status === 403) {
            alert('Not registered');
        } else {
            alert('Login success');
            localStorage.setItem('user', JSON.stringify(loginResponse));
        }

        setLogin({
            email: '',
            password: ''
        });
    };

    if (localStorage.getItem('user') && JSON.parse(localStorage.getItem('user'))) {
        return <Navigate to={'/'} replace />;
    }

    return (
        <div className="background-container">
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">
                        <img src="\mybuslogo-removebg-preview.png" alt="JourneyJet Logo" width="30" height="30" className="d-inline-block align-text-top" />
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto">
                            <li className="nav-item">
                                <Link className="nav-link" to="/"  style={{ color: 'orange' }}>Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/destinations"  style={{ color: 'orange' }}>Destinations</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about"  style={{ color: 'orange' }}>About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/contact"  style={{ color: 'orange' }}>Contact Us</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="ml-auto" >
                        <DropdownButton
                            align="end"
                            title="Accounts"
                            id="dropdown-menu-align-end"
                            variant="secondary"
                            
                        >
                            <Dropdown.Item as={Link} to="/register">Sign Up</Dropdown.Item>
                            <Dropdown.Item as={Link} to="/login">Sign In</Dropdown.Item>
                        </DropdownButton>
                    </div>
                </div>
            </nav>
            <div className="login-form-container" style={{ marginTop: '100px' }}> {/* Adjusted downward */}
                <div className="container mt-5">
                    <div className="row justify-content-end">
                        <div className="col-md-8">
                            <div className="card transparent-form">
                                <h1 className="lk" style={{ color: 'orange' }}>Welcome To MyBus</h1>
                                <div className="card-body">
                                    <h4 className="card-title text-center mb-4" >Login In</h4>
                                    <form onSubmit={handleSubmit}>
                                        <div className="mb-3">
                                            <label htmlFor="email"  style={{ color: 'orange' }}>Email:</label>
                                            <input type="email" className="form-control" id="email" name="email" value={login.email} onChange={handleChange} required />
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="password"  style={{ color: 'orange' }}>Password:</label>
                                            <input type="password" className="form-control" id="password" name="password" value={login.password} onChange={handleChange} required />
                                        </div>
                                        <div className="mb-3">
                                            <Link to='/Forgot' style={{ color: 'orange' }}>Forgot Password?</Link>
                                            &nbsp;&nbsp;&nbsp;
                                            {/* <Link to='/reset' style={{ color: 'orange' }}>Reset?</Link> */}
                                        </div>
                                        <div className="d-grid">
                                            <button type="submit" className="btn btn-primary" style={{ backgroundColor: '#1f2e2e', border: 'none' }}>Submit</button>
                                        </div>
                                        <div className="text-center mt-3">
                                            <Link to="/register" className="text-decoration-none" style={{ color: 'orange' }}>Register ? New account</Link>
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

export default Login;
