// import { useState } from "react";
// import { backendUrl } from "../../../config";
// import { Link } from "react-router-dom";

// export const Forgot = () => {
//   const [data, setData] = useState({
//     email: "",
//   });
//   const [hold, setHold] = useState(false);
//   const handleChange = (ele) => {
//     const { name, value } = ele.target;
//     setData({
//       ...data,
//       [name]: value,
//     });
//   };
//   const handleSubmit = async (ele) => {
//     ele.preventDefault();
//     setHold(true);
//     const response = await fetch(`https://giridharan-5.onrender.com/forgotPassword`, {
//       method: "POST",
//       body: JSON.stringify(data),
//       headers: {
//         "Content-Type": "application/json",
//       },
//     });
//     if (response.status === 401) {
//       alert("Invalid email");
//     } else {
//       setHold(false);
//       alert("Verify your email, please check your email");
//     }
//     setData({
//       email: "",
//     });
//   };
//   return (
//     <div style={{ backgroundColor: '#d1e0e0' }}>
//       {/* Header */}
//       <nav className="navbar navbar-expand-lg " style={{ backgroundColor: '#3d5c5c' }}> {/* Changed bg-light to bg-primary for vibrant color */}
//                 <div className="container-fluid">
//                 <h2 className="navbar-brand" style={{ fontFamily: 'Arial, sans-serif', fontWeight: 'bold', fontSize: '24px', color: '#141f1f' }}>JourneyJet Bus Booking</h2>{/* Removed href from h2 */}
//                     <div className="ml-auto">
//                         <Link to='/login' className="btn btn-light">Log In</Link> {/* Added btn-outline-light class for light outline */}
//                         <Link to='/register' className="btn btn-light">Sign In</Link> {/* Changed button color to light */}
//                     </div>
//                 </div>
//             </nav>
//             <h1 className="lk" style={{ color: '#1f2e2e' }}>Welcome To JourneyJet</h1>
//       {/* Forgot Password Form */}
//       <div className="container">
//         <div className="row justify-content-center mt-5">
//           <div className="col-md-6">
//             <div className="card" style={{ backgroundColor: '#b3cccc' }}>
//               <div className="card-body">
//                 <h4 className="card-title text-center mb-4">Forgot Password Form</h4>
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
//                   <div className="d-grid">
//                     <button type="submit" className="btn btn-primary" style={{ backgroundColor: '#1f2e2e', border: 'none' }}>Submit</button>
//                   </div>
//                 </form>
//                 {hold && <p className="text-center mt-3">Hold tight, we are sending email to you</p>}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// import { useState } from "react";
// import { Link } from "react-router-dom";

// export const Forgot = () => {
//   const [data, setData] = useState({
//     email: "",
//   });
//   const [hold, setHold] = useState(false);

//   const handleChange = (ele) => {
//     const { name, value } = ele.target;
//     setData({
//       ...data,
//       [name]: value,
//     });
//   };

//   const handleSubmit = async (ele) => {
//     ele.preventDefault();
//     setHold(true);
//     const response = await fetch(`https://giridharan-5.onrender.com/forgotPassword`, {
//       method: "POST",
//       body: JSON.stringify(data),
//       headers: {
//         "Content-Type": "application/json",
//       },
//     });
//     if (response.status === 401) {
//       alert("Invalid email");
//     } else {
//       setHold(false);
//       alert("Verify your email, please check your email");
//     }
//     setData({
//       email: "",
//     });
//   };

//   return (
//     <div style={{ backgroundColor: '#d1e0e0', minHeight: '100vh' }}>
//       {/* Header */}
//       <nav className="navbar navbar-expand-lg " style={{ backgroundColor: '#3d5c5c' }}>
//         <div className="container-fluid">
//           <h2 className="navbar-brand" style={{ fontFamily: 'Arial, sans-serif', fontWeight: 'bold', fontSize: '24px', color: '#141f1f' }}>JourneyJet Bus Booking</h2>
//           <div className="ml-auto">
//             <Link to='/login' className="btn btn-light">Log In</Link>
//             <Link to='/register' className="btn btn-light">Sign In</Link>
//           </div>
//         </div>
//       </nav>
//       <h1 className="text-center" style={{ color: '#1f2e2e', margin: '20px 0' }}>Welcome To JourneyJet</h1>
//       {/* Forgot Password Form */}
//       <div className="container">
//         <div className="row justify-content-center mt-5">
//           <div className="col-12 col-sm-8 col-md-6 col-lg-5">
//             <div className="card" style={{ backgroundColor: '#b3cccc' }}>
//               <div className="card-body">
//                 <h4 className="card-title text-center mb-4">Forgot Password Form</h4>
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
//                   <div className="d-grid">
//                     <button type="submit" className="btn btn-primary" style={{ backgroundColor: '#1f2e2e', border: 'none' }}>Submit</button>
//                   </div>
//                 </form>
//                 {hold && <p className="text-center mt-3">Hold tight, we are sending email to you</p>}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
import { useState } from "react";
import { Link } from "react-router-dom";
import { Dropdown, DropdownButton } from 'react-bootstrap';
import '../../App.css';

export const Forgot = () => {
  const [data, setData] = useState({
    email: "",
  });
  const [hold, setHold] = useState(false);

  const handleChange = (ele) => {
    const { name, value } = ele.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  const handleSubmit = async (ele) => {
    ele.preventDefault();
    setHold(true);
    const response = await fetch(`https://authentication-9qlt.onrender.com/forgotPassword`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.status === 401) {
      alert("Invalid email");
    } else {
      setHold(false);
      alert("Verify your email, please check your email");
    }
    setData({
      email: "",
    });
  };

  return (
    <div className="background-container">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img src="/mybuslogo-removebg-preview.png" alt="JourneyJet Logo" width="30" height="30" className="d-inline-block align-text-top" />
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/" style={{ color: 'orange' }}>Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/destinations" style={{ color: 'orange' }}>Destinations</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about" style={{ color: 'orange' }}>About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact" style={{ color: 'orange' }}>Contact Us</Link>
              </li>
            </ul>
            <div className="ml-auto">
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
        </div>
      </nav>
      <div className="login-form-container">
        <div className="container mt-5" style={{ marginTop: '50px' }}>
          <div className="row justify-content-end">
            <div className="col-md-6" style={{ paddingTop: '100px' }}>
              <div className="card transparent-form">
                <h1 className="lk" style={{ color: 'orange' }}>Welcome To MyBus</h1>
                <div className="card-body">
                  <h4 className="card-title text-center mb-4" >Forgot Password Form</h4>
                  <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                      <label htmlFor="email"style={{ color: 'orange' }}>Email:</label>
                      <input type="email" className="form-control" id="email" name="email" value={data.email} onChange={handleChange} required />
                    </div>
                    <div className="d-grid">
                      <button type="submit" className="btn btn-primary">Submit</button>
                    </div>
                  </form>
                  {hold && <p className="text-center mt-3">Hold tight, we are sending an email to you</p>}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Forgot;
