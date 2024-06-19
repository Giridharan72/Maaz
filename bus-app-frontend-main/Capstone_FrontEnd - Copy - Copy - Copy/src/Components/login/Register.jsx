
import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { Dropdown, DropdownButton } from 'react-bootstrap';

const Register = () => {
  const [data, setData] = useState({
    userName: "",
    email: "",
    password: "",
    phoneNumber: "",
  });
  const [loggedIn, setLoggedIn] = useState(false);

  const handleChange = (ele) => {
    const { name, value } = ele.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  const handleSubmit = async (ele) => {
    ele.preventDefault();
    try {
      const response = await fetch(`http://localhost:5000/register`, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error(`Error: ${response.status} ${response.statusText}`, errorData);

        if (response.status === 409) {
          alert("User already exists");
        } else {
          alert("Error while registering");
        }
        return;
      }

      const result = await response.json();
      console.log("Success:", result);

      setData({
        userName: "",
        email: "",
        password: "",
        phoneNumber: "",
      });

      alert("User registered successfully");
      setLoggedIn(true);
    } catch (err) {
      console.log(err);
      alert("Error while registering");
    }
  };

  if (loggedIn) {
    return <Navigate to="/login" replace />;
  }

  if (localStorage.getItem("Register") && JSON.parse(localStorage.getItem("Register"))) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="background-container">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img src="/mybuslogo-removebg-preview.png" alt="JourneyJet Logo" width="30" height="30" className="d-inline-block align-text-top" />
          </Link>
          <div className="navbar-center">
            <ul className="navbar-nav">
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
          </div>
          <div className="ml-auto">
            <DropdownButton align="end" title="Accounts" id="dropdown-menu-align-end" variant="secondary">
              <Dropdown.Item as={Link} to="/register">Sign Up</Dropdown.Item>
              <Dropdown.Item as={Link} to="/login">Sign In</Dropdown.Item>
            </DropdownButton>
          </div>
        </div>
      </nav>
      <div className="register-form-container">
        <div className="container mt-5">
          <div className="row justify-content-end">
            <div className="col-md-8">
              <div className="card transparent-form">
                <h1 className="lk" style={{ color: 'orange' }}>Welcome To MyBus</h1>
                <div className="card-body">
                  <h4 className="card-title text-center mb-4">Sign Up</h4>
                  <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                      <label htmlFor="userName" className="form-label" style={{ color: 'orange' }}>Name:</label>
                      <input
                        type="text"
                        className="form-control"
                        id="userName"
                        name="userName"
                        value={data.userName}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="email" className="form-label" style={{ color: 'orange' }}>Email:</label>
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        name="email"
                        value={data.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="password" className="form-label" style={{ color: 'orange' }}>Password:</label>
                      <input
                        type="password"
                        className="form-control"
                        id="password"
                        name="password"
                        value={data.password}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="phoneNumber" className="form-label" style={{ color: 'orange' }}>Phone Number:</label>
                      <input
                        type="text"
                        className="form-control"
                        id="phoneNumber"
                        name="phoneNumber"
                        value={data.phoneNumber}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="d-grid">
                      <button type="submit" className="btn btn-primary">Submit</button>
                    </div>
                  </form>
                  <div className="text-center mt-3">
                    <Link to="/login" className="text-decoration-none" style={{ color: 'orange' }}>Already registered? Log In</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
