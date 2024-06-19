// import React, { useState, useEffect } from "react";
// import { useLocation } from "react-router-dom";
// import { Button } from 'react-bootstrap';
// import '../../App.css';

// const BusResults = () => {
//     const location = useLocation();
//     const searchData = location.state;
//     const [buses, setBuses] = useState([]);
//     const [filteredBuses, setFilteredBuses] = useState([]);
//     const [error, setError] = useState(null);

//     useEffect(() => {
//         const fetchAllBuses = async () => {
//             try {
//                 const response = await fetch('http://localhost:5000/booking/available');
//                 if (!response.ok) {
//                     throw new Error('Network response was not ok');
//                 }
//                 const data = await response.json();
//                 setBuses(data);
//                 filterBuses(data, searchData); // Filter buses based on search criteria
//             } catch (error) {
//                 console.error("Error while fetching all buses:", error);
//                 setError("Error while fetching all buses");
//             }
//         };

//         fetchAllBuses();
//     }, [searchData]);

//     const filterBuses = (buses, searchData) => {
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
//         <div className="container mt-5">
//             <h2 style={{ color: 'orange' }}>Available Buses:</h2>
//             {error && <div className="alert alert-danger">{error}</div>}
//             <ul className="list-group">
//                 {filteredBuses.map((bus) => (
//                     <li key={bus.busId} className="list-group-item">
//                         Bus Number: {bus.busNumber}, From: {bus.from}, To: {bus.to}, Price: ${bus.price}
//                         <Button variant="primary" style={{ float: 'right' }}>Book Now</Button>
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     );
// };

// export default BusResults;

import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Button, Table } from 'react-bootstrap';
import '../../App.css';

const BusResults = () => {
    const location = useLocation();
    const searchData = location.state || {};
    const [buses, setBuses] = useState([]);
    const [filteredBuses, setFilteredBuses] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchAllBuses = async () => {
            try {
                const response = await fetch('http://localhost:5000/booking/available');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setBuses(data);
                filterBuses(data, searchData); // Filter buses based on search criteria
            } catch (error) {
                console.error("Error while fetching all buses:", error);
                setError("Error while fetching all buses");
            }
        };

        fetchAllBuses();
    }, [searchData]);

    const filterBuses = (buses, searchData) => {
        const { source, destination, date } = searchData;
        const filtered = buses.filter(bus => {
            return (
                (!source || bus.from.toLowerCase().includes(source.toLowerCase())) &&
                (!destination || bus.to.toLowerCase().includes(destination.toLowerCase())) &&
                (!date || bus.dates.includes(date))
            );
        });
        setFilteredBuses(filtered);

        if (filtered.length === 0) {
            setError("No available buses found for the given criteria");
        } else {
            setError(null);
        }
    };

    return (
        <div className="background-container">
            <div className="container mt-5">
                <div className="row justify-content-center">
                    <div className="col-md-10">
                        <div className="card transparent-form">
                            <h1 className="lk" style={{ color: 'orange' }}>Available Buses</h1>
                            <div className="card-body">
                                {error && <div className="alert alert-danger">{error}</div>}
                                <Table striped bordered hover>
                                    <thead>
                                        <tr>
                                            <th>Bus Number</th>
                                            <th>From</th>
                                            <th>To</th>
                                            <th>Price</th>
                                            <th>Departure Date</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {filteredBuses.map((bus) => (
                                            <tr key={bus.busId}>
                                                <td>{bus.busNumber}</td>
                                                <td>{bus.from}</td>
                                                <td>{bus.to}</td>
                                                <td>${bus.price}</td>
                                                <td>{new Date(bus.dates).toLocaleDateString()}</td>
                                                <td>
                                                    <Button variant="primary" className="book-button">Book Now</Button>
                                                </td>
                                            </tr>
                                        ))}
                                        {filteredBuses.length === 0 && (
                                            <tr>
                                                <td colSpan="6" className="text-center">No available buses found</td>
                                            </tr>
                                        )}
                                    </tbody>
                                </Table>
                                <div className="mt-3">
                                    <strong>Search Criteria:</strong><br />
                                    Source: {searchData.source}<br />
                                    Destination: {searchData.destination}<br />
                                    Date: {searchData.date}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BusResults;
