// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { Dropdown, DropdownButton, Form, Button } from 'react-bootstrap';
// import '../../App.css';

// const Dashboard = () => {
//     const [searchData, setSearchData] = useState({
//         source: '',
//         destination: '',
//         date: ''
//     });

//     const handleChange = (ele) => {
//         const { name, value } = ele.target;
//         setSearchData({ ...searchData, [name]: value });
//     };

//     const handleSubmit = (ele) => {
//         ele.preventDefault();
//         console.log('Search Data:', searchData);
//         // You can send this data to your backend or handle it accordingly
//     };

//     return (
//         <div className="background-container">
//             <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
//                 <div className="container-fluid">
//                     <Link className="navbar-brand" to="/">
//                         <img src="/mybuslogo-removebg-preview.png" alt="JourneyJet Logo" width="30" height="30" className="d-inline-block align-text-top" />
//                     </Link>
//                     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//                         <span className="navbar-toggler-icon"></span>
//                     </button>
//                     <div className="collapse navbar-collapse" id="navbarSupportedContent">
//                         <ul className="navbar-nav mx-auto">
//                             <li className="nav-item">
//                                 <Link className="nav-link" to="/" style={{ color: 'orange' }}>Home</Link>
//                             </li>
//                             <li className="nav-item">
//                                 <Link className="nav-link" to="/destinations" style={{ color: 'orange' }}>Destinations</Link>
//                             </li>
//                             <li className="nav-item">
//                                 <Link className="nav-link" to="/about" style={{ color: 'orange' }}>About</Link>
//                             </li>
//                             <li className="nav-item">
//                                 <Link className="nav-link" to="/contact" style={{ color: 'orange' }}>Contact Us</Link>
//                             </li>
//                         </ul>
//                     </div>
//                     <div className="ml-auto">
//                         <DropdownButton
//                             align="end"
//                             title="Accounts"
//                             id="dropdown-menu-align-end"
//                             variant="secondary"
//                         >
//                             <Dropdown.Item as={Link} to="/register">Sign Up</Dropdown.Item>
//                             <Dropdown.Item as={Link} to="/login">Sign In</Dropdown.Item>
//                         </DropdownButton>
//                     </div>
//                 </div>
//             </nav>
//             <div className="search-form-container" style={{ marginTop: '100px' }}>
//                 <div className="container mt-5">
//                     <div className="row justify-content-center">
//                         <div className="col-md-8">
//                             <div className="card transparent-form">
//                                 <h1 className="lk" style={{ color: 'orange' }}>Search Buses</h1>
//                                 <div className="card-body">
//                                     <Form onSubmit={handleSubmit}>
//                                         <Form.Group className="mb-3">
//                                             <Form.Label style={{ color: 'orange' }}>Source:</Form.Label>
//                                             <Form.Control
//                                                 type="text"
//                                                 name="source"
//                                                 value={searchData.source}
//                                                 onChange={handleChange}
//                                                 required
//                                             />
//                                         </Form.Group>
//                                         <Form.Group className="mb-3">
//                                             <Form.Label style={{ color: 'orange' }}>Destination:</Form.Label>
//                                             <Form.Control
//                                                 type="text"
//                                                 name="destination"
//                                                 value={searchData.destination}
//                                                 onChange={handleChange}
//                                                 required
//                                             />
//                                         </Form.Group>
//                                         <Form.Group className="mb-3">
//                                             <Form.Label style={{ color: 'orange' }}>Date:</Form.Label>
//                                             <Form.Control
//                                                 type="date"
//                                                 name="date"
//                                                 value={searchData.date}
//                                                 onChange={handleChange}
//                                                 required
//                                             />
//                                         </Form.Group>
//                                         <div className="d-grid">
//                                             <Button type="submit" className="btn btn-primary" style={{ backgroundColor: '#1f2e2e', border: 'none' }}>Search</Button>
//                                         </div>
//                                     </Form>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Dashboard;
// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { Dropdown, DropdownButton, Form, Button } from 'react-bootstrap';
// import '../../App.css';

// const Dashboard = () => {
//     const [searchData, setSearchData] = useState({
//         source: '',
//         destination: '',
//         date: ''
//     });
//     const [buses, setBuses] = useState([]);
//     const [error, setError] = useState(null);

//     const handleChange = (ele) => {
//         const { name, value } = ele.target;
//         setSearchData({ ...searchData, [name]: value });
//     };

//     const handleSubmit = async (ele) => {
//         ele.preventDefault();
//         console.log('Search Data:', searchData);

//         try {
//             const response = await fetch(`/api/buses?from=${searchData.source}&to=${searchData.destination}&date=${searchData.date}`);
//             if (!response.ok) {
//                 throw new Error('Network response was not ok');
//             }
//             const data = await response.json();
//             setBuses(data);
//         } catch (error) {
//             console.error("Error while fetching available buses:", error);
//             setError("Error while fetching available buses");
//         }
//     };

//     return (
//         <div className="background-container">
//             <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
//                 <div className="container-fluid">
//                     <Link className="navbar-brand" to="/">
//                         <img src="/mybuslogo-removebg-preview.png" alt="JourneyJet Logo" width="30" height="30" className="d-inline-block align-text-top" />
//                     </Link>
//                     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//                         <span className="navbar-toggler-icon"></span>
//                     </button>
//                     <div className="collapse navbar-collapse" id="navbarSupportedContent">
//                         <ul className="navbar-nav mx-auto">
//                             <li className="nav-item">
//                                 <Link className="nav-link" to="/" style={{ color: 'orange' }}>Home</Link>
//                             </li>
//                             <li className="nav-item">
//                                 <Link className="nav-link" to="/destinations" style={{ color: 'orange' }}>Destinations</Link>
//                             </li>
//                             <li className="nav-item">
//                                 <Link className="nav-link" to="/about" style={{ color: 'orange' }}>About</Link>
//                             </li>
//                             <li className="nav-item">
//                                 <Link className="nav-link" to="/contact" style={{ color: 'orange' }}>Contact Us</Link>
//                             </li>
//                         </ul>
//                     </div>
//                     <div className="ml-auto">
//                         <DropdownButton
//                             align="end"
//                             title="Accounts"
//                             id="dropdown-menu-align-end"
//                             variant="secondary"
//                         >
//                             <Dropdown.Item as={Link} to="/register">Sign Up</Dropdown.Item>
//                             <Dropdown.Item as={Link} to="/login">Sign In</Dropdown.Item>
//                         </DropdownButton>
//                     </div>
//                 </div>
//             </nav>
//             <div className="search-form-container" style={{ marginTop: '100px' }}>
//                 <div className="container mt-5">
//                     <div className="row justify-content-center">
//                         <div className="col-md-8">
//                             <div className="card transparent-form">
//                                 <h1 className="lk" style={{ color: 'orange' }}>Search Buses</h1>
//                                 <div className="card-body">
//                                     <Form onSubmit={handleSubmit}>
//                                         <Form.Group className="mb-3">
//                                             <Form.Label style={{ color: 'orange' }}>Source:</Form.Label>
//                                             <Form.Control
//                                                 type="text"
//                                                 name="source"
//                                                 value={searchData.source}
//                                                 onChange={handleChange}
//                                                 required
//                                             />
//                                         </Form.Group>
//                                         <Form.Group className="mb-3">
//                                             <Form.Label style={{ color: 'orange' }}>Destination:</Form.Label>
//                                             <Form.Control
//                                                 type="text"
//                                                 name="destination"
//                                                 value={searchData.destination}
//                                                 onChange={handleChange}
//                                                 required
//                                             />
//                                         </Form.Group>
//                                         <Form.Group className="mb-3">
//                                             <Form.Label style={{ color: 'orange' }}>Date:</Form.Label>
//                                             <Form.Control
//                                                 type="date"
//                                                 name="date"
//                                                 value={searchData.date}
//                                                 onChange={handleChange}
//                                                 required
//                                             />
//                                         </Form.Group>
//                                         <div className="d-grid">
//                                             <Button type="submit" className="btn btn-primary" style={{ backgroundColor: '#1f2e2e', border: 'none' }}>Search</Button>
//                                         </div>
//                                     </Form>
//                                     {error && <div className="mt-3 alert alert-danger">{error}</div>}
//                                     {buses.length > 0 && (
//                                         <div className="mt-3">
//                                             <h2 style={{ color: 'orange' }}>Available Buses:</h2>
//                                             <ul className="list-group">
//                                                 {buses.map((bus) => (
//                                                     <li key={bus.busId} className="list-group-item">
//                                                         Bus Number: {bus.busNumber}, From: {bus.from}, To: {bus.to}, Price: ${bus.price}
//                                                     </li>
//                                                 ))}
//                                             </ul>
//                                         </div>
//                                     )}
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Dashboard;


// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import { Dropdown, DropdownButton, Form, Button } from 'react-bootstrap';
// import '../../App.css';

// const Dashboard = () => {
//     const [searchData, setSearchData] = useState({
//         source: '',
//         destination: '',
//         date: ''
//     });
//     const [buses, setBuses] = useState([]);
//     const [filteredBuses, setFilteredBuses] = useState([]);
//     const [error, setError] = useState(null);

//     // Fetch all buses when the component mounts
//     useEffect(() => {
//         const fetchAllBuses = async () => {
//             try {
//                 const response = await fetch('http://localhost:5000/booking/available');
//                 if (!response.ok) {
//                     throw new Error('Network response was not ok');
//                 }
//                 const data = await response.json();
//                 setBuses(data);
//                 setFilteredBuses(data); // Set filtered buses to all buses initially
//             } catch (error) {
//                 console.error("Error while fetching all buses:", error);
//                 setError("Error while fetching all buses");
//             }
//         };

//         fetchAllBuses();
//     }, []);

//     const handleChange = (ele) => {
//         const { name, value } = ele.target;
//         setSearchData({ ...searchData, [name]: value });
//     };

//     const handleSubmit = (ele) => {
//         ele.preventDefault();
//         console.log('Search Data:', searchData);

//         // Filter buses based on search criteria
//         const { source, destination, date } = searchData;
//         const filtered = buses.filter(bus => {
//             return (
//                 (!source || bus.from.toLowerCase().includes(source.toLowerCase())) &&
//                 (!destination || bus.to.toLowerCase().includes(destination.toLowerCase())) &&
//                 (!date || bus.dates.includes(date))
//             );
//         });
//         setFilteredBuses(filtered);

//         if (filtered.length === 0) {
//             setError("No available buses found for the given criteria");
//         } else {
//             setError(null);
//         }
//     };

//     return (
//         <div className="background-container">
//             <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
//                 <div className="container-fluid">
//                     <Link className="navbar-brand" to="/">
//                         <img src="/mybuslogo-removebg-preview.png" alt="JourneyJet Logo" width="30" height="30" className="d-inline-block align-text-top" />
//                     </Link>
//                     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//                         <span className="navbar-toggler-icon"></span>
//                     </button>
//                     <div className="collapse navbar-collapse" id="navbarSupportedContent">
//                         <ul className="navbar-nav mx-auto">
//                             <li className="nav-item">
//                                 <Link className="nav-link" to="/" style={{ color: 'orange' }}>Home</Link>
//                             </li>
//                             <li className="nav-item">
//                                 <Link className="nav-link" to="/destinations" style={{ color: 'orange' }}>Destinations</Link>
//                             </li>
//                             <li className="nav-item">
//                                 <Link className="nav-link" to="/about" style={{ color: 'orange' }}>About</Link>
//                             </li>
//                             <li className="nav-item">
//                                 <Link className="nav-link" to="/contact" style={{ color: 'orange' }}>Contact Us</Link>
//                             </li>
//                         </ul>
//                     </div>
//                     <div className="ml-auto">
//                         <DropdownButton
//                             align="end"
//                             title="Accounts"
//                             id="dropdown-menu-align-end"
//                             variant="secondary"
//                         >
//                             <Dropdown.Item as={Link} to="/register">Sign Up</Dropdown.Item>
//                             <Dropdown.Item as={Link} to="/login">Sign In</Dropdown.Item>
//                         </DropdownButton>
//                     </div>
//                 </div>
//             </nav>
//             <div className="search-form-container" style={{ marginTop: '100px' }}>
//                 <div className="container mt-5">
//                     <div className="row justify-content-center">
//                         <div className="col-md-8">
//                             <div className="card transparent-form">
//                                 <h1 className="lk" style={{ color: 'orange' }}>Search Buses</h1>
//                                 <div className="card-body">
//                                     <Form onSubmit={handleSubmit}>
//                                         <Form.Group className="mb-3">
//                                             <Form.Label style={{ color: 'orange' }}>Source:</Form.Label>
//                                             <Form.Control
//                                                 type="text"
//                                                 name="source"
//                                                 value={searchData.source}
//                                                 onChange={handleChange}
//                                                 required
//                                             />
//                                         </Form.Group>
//                                         <Form.Group className="mb-3">
//                                             <Form.Label style={{ color: 'orange' }}>Destination:</Form.Label>
//                                             <Form.Control
//                                                 type="text"
//                                                 name="destination"
//                                                 value={searchData.destination}
//                                                 onChange={handleChange}
//                                                 required
//                                             />
//                                         </Form.Group>
//                                         <Form.Group className="mb-3">
//                                             <Form.Label style={{ color: 'orange' }}>Date:</Form.Label>
//                                             <Form.Control
//                                                 type="date"
//                                                 name="date"
//                                                 value={searchData.date}
//                                                 onChange={handleChange}
//                                                 required
//                                             />
//                                         </Form.Group>
//                                         <div className="d-grid">
//                                             <Button type="submit" className="btn btn-primary" style={{ backgroundColor: '#1f2e2e', border: 'none' }}>Search</Button>
//                                         </div>
//                                     </Form>
//                                     {error && <div className="mt-3 alert alert-danger">{error}</div>}
//                                     {filteredBuses.length > 0 && (
//                                         <div className="mt-3">
//                                             <h2 style={{ color: 'orange' }}>Available Buses:</h2>
//                                             <ul className="list-group">
//                                                 {filteredBuses.map((bus) => (
//                                                     <li key={bus.busId} className="list-group-item">
//                                                         Bus Number: {bus.busNumber}, From: {bus.from}, To: {bus.to}, Price: ${bus.price}
//                                                     </li>
//                                                 ))}
//                                             </ul>
//                                         </div>
//                                     )}
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Dashboard;

// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { Dropdown, DropdownButton, Form, Button } from 'react-bootstrap';
// import '../../App.css';

// const Dashboard = () => {
//     const [searchData, setSearchData] = useState({
//         source: '',
//         destination: '',
//         date: ''
//     });

//     const navigate = useNavigate();

//     const handleChange = (ele) => {
//         const { name, value } = ele.target;
//         setSearchData({ ...searchData, [name]: value });
//     };

//     const handleSubmit = (ele) => {
//         ele.preventDefault();
//         console.log('Search Data:', searchData);
//         navigate('/bus-results', { state: searchData });
//     };

//     return (
//         <div className="background-container">
//             <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
//                 <div className="container-fluid">
//                     <Link className="navbar-brand" to="/">
//                         <img src="/mybuslogo-removebg-preview.png" alt="JourneyJet Logo" width="30" height="30" className="d-inline-block align-text-top" />
//                     </Link>
//                     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//                         <span className="navbar-toggler-icon"></span>
//                     </button>
//                     <div className="collapse navbar-collapse" id="navbarSupportedContent">
//                         <ul className="navbar-nav mx-auto">
//                             <li className="nav-item">
//                                 <Link className="nav-link" to="/" style={{ color: 'orange' }}>Home</Link>
//                             </li>
//                             <li className="nav-item">
//                                 <Link className="nav-link" to="/destinations" style={{ color: 'orange' }}>Destinations</Link>
//                             </li>
//                             <li className="nav-item">
//                                 <Link className="nav-link" to="/about" style={{ color: 'orange' }}>About</Link>
//                             </li>
//                             <li className="nav-item">
//                                 <Link className="nav-link" to="/contact" style={{ color: 'orange' }}>Contact Us</Link>
//                             </li>
//                         </ul>
//                     </div>
//                     <div className="ml-auto">
//                         <DropdownButton
//                             align="end"
//                             title="Accounts"
//                             id="dropdown-menu-align-end"
//                             variant="secondary"
//                         >
//                             <Dropdown.Item as={Link} to="/register">Sign Up</Dropdown.Item>
//                             <Dropdown.Item as={Link} to="/login">Sign In</Dropdown.Item>
//                         </DropdownButton>
//                     </div>
//                 </div>
//             </nav>
//             <div className="search-form-container" style={{ marginTop: '100px' }}>
//                 <div className="container mt-5">
//                     <div className="row justify-content-center">
//                         <div className="col-md-8">
//                             <div className="card transparent-form">
//                                 <h1 className="lk" style={{ color: 'orange' }}>Search Buses</h1>
//                                 <div className="card-body">
//                                     <Form onSubmit={handleSubmit}>
//                                         <Form.Group className="mb-3">
//                                             <Form.Label style={{ color: 'orange' }}>Source:</Form.Label>
//                                             <Form.Control
//                                                 type="text"
//                                                 name="source"
//                                                 value={searchData.source}
//                                                 onChange={handleChange}
//                                                 required
//                                             />
//                                         </Form.Group>
//                                         <Form.Group className="mb-3">
//                                             <Form.Label style={{ color: 'orange' }}>Destination:</Form.Label>
//                                             <Form.Control
//                                                 type="text"
//                                                 name="destination"
//                                                 value={searchData.destination}
//                                                 onChange={handleChange}
//                                                 required
//                                             />
//                                         </Form.Group>
//                                         <Form.Group className="mb-3">
//                                             <Form.Label style={{ color: 'orange' }}>Date:</Form.Label>
//                                             <Form.Control
//                                                 type="date"
//                                                 name="date"
//                                                 value={searchData.date}
//                                                 onChange={handleChange}
//                                                 required
//                                             />
//                                         </Form.Group>
//                                         <div className="d-grid">
//                                             <Button type="submit" className="btn btn-primary" style={{ backgroundColor: '#1f2e2e', border: 'none' }}>Search</Button>
//                                         </div>
//                                     </Form>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Dashboard;

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Dropdown, DropdownButton, Form, Button } from 'react-bootstrap';
import '../../App.css';

const Dashboard = () => {
    const [searchData, setSearchData] = useState({
        source: '',
        destination: '',
        date: ''
    });

    const navigate = useNavigate();

    const handleChange = (ele) => {
        const { name, value } = ele.target;
        setSearchData({ ...searchData, [name]: value });
    };

    const handleSubmit = (ele) => {
        ele.preventDefault();
        console.log('Search Data:', searchData);
        navigate('/bus-results', { state: searchData });
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
                    </div>
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
            </nav>
            <div className="search-form-container" style={{ marginTop: '100px' }}>
                <div className="container mt-5">
                    <div className="row justify-content-center">
                        <div className="col-md-8">
                            <div className="card transparent-form">
                                <h1 className="lk" style={{ color: 'orange' }}>Search Buses</h1>
                                <div className="card-body">
                                    <Form onSubmit={handleSubmit}>
                                        <Form.Group className="mb-3">
                                            <Form.Label style={{ color: 'orange' }}>Source:</Form.Label>
                                            <Form.Control
                                                type="text"
                                                name="source"
                                                value={searchData.source}
                                                onChange={handleChange}
                                            />
                                        </Form.Group>
                                        <Form.Group className="mb-3">
                                            <Form.Label style={{ color: 'orange' }}>Destination:</Form.Label>
                                            <Form.Control
                                                type="text"
                                                name="destination"
                                                value={searchData.destination}
                                                onChange={handleChange}
                                            />
                                        </Form.Group>
                                        <Form.Group className="mb-3">
                                            <Form.Label style={{ color: 'orange' }}>Date:</Form.Label>
                                            <Form.Control
                                                type="date"
                                                name="date"
                                                value={searchData.date}
                                                onChange={handleChange}
                                            />
                                        </Form.Group>
                                        <div className="d-grid">
                                            <Button type="submit" className="btn btn-primary" style={{ backgroundColor: '#1f2e2e', border: 'none' }}>Search</Button>
                                        </div>
                                    </Form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
