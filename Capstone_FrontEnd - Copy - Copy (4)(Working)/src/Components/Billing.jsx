// import React from 'react';
// import { useLocation } from 'react-router-dom';
// import '../App.css';

// const Billing = () => {
//   const location = useLocation();
//   const { bookingDetails, customerDetails } = location.state;

//   const {
//     selectedSeats,
//     bus,
//     numPassengers,
//     discount,
//     discountAmount,
//     GST,
//     cartTotal
//   } = bookingDetails;

//   return (
//     <div className="container">
//       <h2>Booking Confirmation</h2>
//       <hr />
//       {customerDetails && (
//         <div>
//           <h4>Customer Name: {customerDetails.name}</h4>
//           <p>Phone Number: {customerDetails.phoneNumber}</p>
//           <p>Email: {customerDetails.email}</p>
//           <p>Address: {customerDetails.address}</p>
//         </div>
//       )}
//       <hr />
//       <div>
//         <h3>Bus Details:</h3>
//         <p><strong>Bus Name:</strong> {bus.busName}</p>
//         <p><strong>Bus Number:</strong> {bus.busNumber}</p>
//         <p><strong>Route:</strong> {bus.from} - {bus.to}</p>
//         <p><strong>Type:</strong> {bus.busType}</p>
//         <p><strong>Departure:</strong> {new Date(bus.departure).toLocaleString()}</p>
//         <p><strong>Arrival:</strong> {new Date(bus.arrival).toLocaleString()}</p>
//         <p><strong>Fare:</strong> ₹ {bus.fare.toLocaleString()}</p>
//         <p><strong>Selected Seats:</strong> {selectedSeats.join(', ')}</p>
//         <p><strong>Number of Passengers:</strong> {numPassengers}</p>
//       </div>
//       <hr />
//       <div className="totals">
//         <h3>Discount: ₹ {discountAmount.toLocaleString()}</h3>
//         <h3>GST (5%): ₹ {GST.toLocaleString()}</h3>
//         <h2>Total: ₹ {cartTotal.toLocaleString()}</h2>
//       </div>
//     </div>
//   );
// };

// export default Billing;


// import React, { useState } from 'react';
// import { useLocation } from 'react-router-dom';
// import '../App.css';

// const Billing = () => {
//   const location = useLocation();
//   const { bookingDetails, customerDetails } = location.state;

//   const {
//     selectedSeats,
//     bus,
//     numPassengers,
//     discountAmount,
//     GST,
//     cartTotal
//   } = bookingDetails;

//   const [passengerDetails, setPassengerDetails] = useState(
//     Array(numPassengers).fill({ name: '', age: '', gender: '' })
//   );

//   const handlePassengerChange = (index, field, value) => {
//     const updatedDetails = [...passengerDetails];
//     updatedDetails[index][field] = value;
//     setPassengerDetails(updatedDetails);
//   };

//   const handleConfirmBooking = () => {
//     console.log('Booking confirmed with the following details:');
//     console.log('Passenger Details:', passengerDetails);
//     // Add your booking confirmation logic here
//   };

//   return (
//     <div className="container">
//       <h2>Booking Confirmation</h2>
//       <hr />
//       {customerDetails && (
//         <div>
//           <h4>Customer Name: {customerDetails.name}</h4>
//           <p>Phone Number: {customerDetails.phoneNumber}</p>
//           <p>Email: {customerDetails.email}</p>
//           <p>Address: {customerDetails.address}</p>
//         </div>
//       )}
//       <hr />
//       <div>
//         <h3>Bus Details:</h3>
//         <p><strong>Bus Name:</strong> {bus.busName}</p>
//         <p><strong>Bus Number:</strong> {bus.busNumber}</p>
//         <p><strong>Route:</strong> {bus.from} - {bus.to}</p>
//         <p><strong>Type:</strong> {bus.busType}</p>
//         <p><strong>Departure:</strong> {new Date(bus.departure).toLocaleString()}</p>
//         <p><strong>Arrival:</strong> {new Date(bus.arrival).toLocaleString()}</p>
//         <p><strong>Fare:</strong> ₹ {bus.fare.toLocaleString()}</p>
//         <p><strong>Selected Seats:</strong> {selectedSeats.join(', ')}</p>
//         <p><strong>Number of Passengers:</strong> {numPassengers}</p>
//       </div>
//       <hr />
//       <div>
//         <h3>Passenger Details:</h3>
//         {passengerDetails.map((passenger, index) => (
//           <div key={index} className="passenger-form">
//             <h4>Passenger {index + 1}</h4>
//             <div className="form-group">
//               <label htmlFor={`name-${index}`}>Name</label>
//               <input
//                 type="text"
//                 id={`name-${index}`}
//                 className="form-control"
//                 value={passenger.name}
//                 onChange={(e) => handlePassengerChange(index, 'name', e.target.value)}
//               />
//             </div>
//             <div className="form-group">
//               <label htmlFor={`age-${index}`}>Age</label>
//               <input
//                 type="number"
//                 id={`age-${index}`}
//                 className="form-control"
//                 value={passenger.age}
//                 onChange={(e) => handlePassengerChange(index, 'age', e.target.value)}
//               />
//             </div>
//             <div className="form-group">
//               <label htmlFor={`gender-${index}`}>Gender</label>
//               <select
//                 id={`gender-${index}`}
//                 className="form-control"
//                 value={passenger.gender}
//                 onChange={(e) => handlePassengerChange(index, 'gender', e.target.value)}
//               >
//                 <option value="">Select Gender</option>
//                 <option value="Male">Male</option>
//                 <option value="Female">Female</option>
//                 <option value="Other">Other</option>
//               </select>
//             </div>
//             <hr />
//           </div>
//         ))}
//       </div>
//       <div className="totals">
//         <h3>Discount: ₹ {discountAmount.toLocaleString()}</h3>
//         <h3>GST (5%): ₹ {GST.toLocaleString()}</h3>
//         <h2>Total: ₹ {cartTotal.toLocaleString()}</h2>
//       </div>
//       <button className="btn btn-primary" onClick={handleConfirmBooking}>
//         Confirm Booking
//       </button>
//     </div>
//   );
// };

// export default Billing;


// import React, { useState } from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';
// import '../App.css';

// const Billing = () => {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const { bookingDetails, customerDetails } = location.state;

//   const {
//     selectedSeats,
//     bus,
//     numPassengers,
//     discountAmount,
//     GST,
//     cartTotal
//   } = bookingDetails;

//   const [passengerDetails, setPassengerDetails] = useState(
//     Array.from({ length: numPassengers }, () => ({ name: '', age: '', gender: '' }))
//   );

//   const handlePassengerChange = (index, field, value) => {
//     const updatedDetails = passengerDetails.map((passenger, i) =>
//       i === index ? { ...passenger, [field]: value } : passenger
//     );
//     setPassengerDetails(updatedDetails);
//   };

//   const validatePassengerDetails = () => {
//     for (const passenger of passengerDetails) {
//       if (!passenger.name || !passenger.age || !passenger.gender) {
//         return false;
//       }
//     }
//     return true;
//   };

//   const handleConfirmBooking = async () => {
//     if (!validatePassengerDetails()) {
//       alert('Please fill in all passenger details.');
//       return;
//     }

//     const bookingData = {
//       customerDetails,
//       busId: bus.busId,
//       selectedSeats,
//       passengerDetails,
//       discountAmount,
//       GST,
//       cartTotal,
//     };

//     try {
//       const response = await fetch('https://your-backend-api.com/api/bookings', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(bookingData),
//       });

//       if (response.ok) {
//         const data = await response.json();
//         console.log('Booking confirmed:', data);
//         alert('Booking confirmed successfully!');
//         navigate('/');
//       } else {
//         const errorData = await response.json();
//         console.error('Booking error:', errorData);
//         alert('Failed to confirm booking. Please try again.');
//       }
//     } catch (error) {
//       console.error('Error:', error);
//       alert('An error occurred while confirming the booking. Please try again.');
//     }
//   };

//   return (
//     <div className="container">
//       <h2>Booking Confirmation</h2>
//       <hr />
//       {customerDetails && (
//         <div>
//           <h4>Customer Name: {customerDetails.name}</h4>
//           <p>Phone Number: {customerDetails.phoneNumber}</p>
//           <p>Email: {customerDetails.email}</p>
//           <p>Address: {customerDetails.address}</p>
//         </div>
//       )}
//       <hr />
//       <div>
//         <h3>Bus Details:</h3>
//         <p><strong>Bus Name:</strong> {bus.busName}</p>
//         <p><strong>Bus Number:</strong> {bus.busNumber}</p>
//         <p><strong>Route:</strong> {bus.from} - {bus.to}</p>
//         <p><strong>Type:</strong> {bus.busType}</p>
//         <p><strong>Departure:</strong> {new Date(bus.departure).toLocaleString()}</p>
//         <p><strong>Arrival:</strong> {new Date(bus.arrival).toLocaleString()}</p>
//         <p><strong>Fare:</strong> ₹ {bus.fare.toLocaleString()}</p>
//         <p><strong>Selected Seats:</strong> {selectedSeats.join(', ')}</p>
//         <p><strong>Number of Passengers:</strong> {numPassengers}</p>
//       </div>
//       <hr />
//       <div>
//         <h3>Passenger Details:</h3>
//         {passengerDetails.map((passenger, index) => (
//           <div key={index} className="passenger-form">
//             <h4>Passenger {index + 1}</h4>
//             <div className="form-group">
//               <label htmlFor={`name-${index}`}>Name</label>
//               <input
//                 type="text"
//                 id={`name-${index}`}
//                 className="form-control"
//                 value={passenger.name}
//                 onChange={(e) => handlePassengerChange(index, 'name', e.target.value)}
//               />
//             </div>
//             <div className="form-group">
//               <label htmlFor={`age-${index}`}>Age</label>
//               <input
//                 type="number"
//                 id={`age-${index}`}
//                 className="form-control"
//                 value={passenger.age}
//                 onChange={(e) => handlePassengerChange(index, 'age', e.target.value)}
//               />
//             </div>
//             <div className="form-group">
//               <label htmlFor={`gender-${index}`}>Gender</label>
//               <select
//                 id={`gender-${index}`}
//                 className="form-control"
//                 value={passenger.gender}
//                 onChange={(e) => handlePassengerChange(index, 'gender', e.target.value)}
//               >
//                 <option value="">Select Gender</option>
//                 <option value="Male">Male</option>
//                 <option value="Female">Female</option>
//                 <option value="Other">Other</option>
//               </select>
//             </div>
//             <hr />
//           </div>
//         ))}
//       </div>
//       <div className="totals">
//         <h3>Discount: ₹ {discountAmount.toLocaleString()}</h3>
//         <h3>GST (5%): ₹ {GST.toLocaleString()}</h3>
//         <h2>Total: ₹ {cartTotal.toLocaleString()}</h2>
//       </div>
//       <button className="btn btn-primary" onClick={handleConfirmBooking}>
//         Confirm Booking
//       </button>
//     </div>
//   );
// };

// export default Billing;


// import React, { useState } from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';
// import '../App.css';

// const Billing = () => {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const { bookingDetails, customerDetails } = location.state;

//   const {
//     selectedSeats,
//     bus,
//     numPassengers,
//     discountAmount,
//     GST,
//     cartTotal
//   } = bookingDetails;

//   const [passengerDetails, setPassengerDetails] = useState(
//     Array.from({ length: numPassengers }, () => ({ name: '', age: '', gender: '' }))
//   );

//   const handlePassengerChange = (index, field, value) => {
//     const updatedDetails = passengerDetails.map((passenger, i) =>
//       i === index ? { ...passenger, [field]: value } : passenger
//     );
//     setPassengerDetails(updatedDetails);
//   };

//   const validatePassengerDetails = () => {
//     for (const passenger of passengerDetails) {
//       if (!passenger.name || !passenger.age || !passenger.gender) {
//         return false;
//       }
//     }
//     return true;
//   };

//   const handleConfirmBooking = async () => {
//     if (!validatePassengerDetails()) {
//       alert('Please fill in all passenger details.');
//       return;
//     }

//     const bookingData = {
//       customer_name: customerDetails.name,
//       phone_number: customerDetails.phoneNumber,
//       email: customerDetails.email,
//       address: customerDetails.address,
//       bus_id: bus.busId,
//       selected_seats: selectedSeats,
//       passenger_details: passengerDetails,
//       discount_amount: discountAmount,
//       gst: GST,
//       cart_total: cartTotal,
//       route: `${bus.from} - ${bus.to}`,
//       bus_type: bus.busType
//     };

//     try {
//       const response = await fetch('http://localhost:3000/booking', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(bookingData),
//       });

//       if (response.ok) {
//         const data = await response.json();
//         console.log('Booking confirmed:', data);
//         alert('Booking confirmed successfully!');
//         navigate('/');
//       } else {
//         const errorData = await response.json();
//         console.error('Booking error:', errorData);
//         alert('Failed to confirm booking. Please try again.');
//       }
//     } catch (error) {
//       console.error('Error:', error);
//       alert('An error occurred while confirming the booking. Please try again.');
//     }
//   };

//   return (
//     <div className="container">
//       <h2>Booking Confirmation</h2>
//       <hr />
//       {customerDetails && (
//         <div>
//           <h4>Customer Name: {customerDetails.name}</h4>
//           <p>Phone Number: {customerDetails.phoneNumber}</p>
//           <p>Email: {customerDetails.email}</p>
//           <p>Address: {customerDetails.address}</p>
//         </div>
//       )}
//       <hr />
//       <div>
//         <h3>Bus Details:</h3>
//         <p><strong>Bus Name:</strong> {bus.busName}</p>
//         <p><strong>Bus Number:</strong> {bus.busNumber}</p>
//         <p><strong>Route:</strong> {bus.from} - {bus.to}</p>
//         <p><strong>Type:</strong> {bus.busType}</p>
//         <p><strong>Departure:</strong> {new Date(bus.departure).toLocaleString()}</p>
//         <p><strong>Arrival:</strong> {new Date(bus.arrival).toLocaleString()}</p>
//         <p><strong>Fare:</strong> ₹ {bus.fare.toLocaleString()}</p>
//         <p><strong>Selected Seats:</strong> {selectedSeats.join(', ')}</p>
//         <p><strong>Number of Passengers:</strong> {numPassengers}</p>
//       </div>
//       <hr />
//       <div>
//         <h3>Passenger Details:</h3>
//         {passengerDetails.map((passenger, index) => (
//           <div key={index} className="passenger-form">
//             <h4>Passenger {index + 1}</h4>
//             <div className="form-group">
//               <label htmlFor={`name-${index}`}>Name</label>
//               <input
//                 type="text"
//                 id={`name-${index}`}
//                 className="form-control"
//                 value={passenger.name}
//                 onChange={(e) => handlePassengerChange(index, 'name', e.target.value)}
//               />
//             </div>
//             <div className="form-group">
//               <label htmlFor={`age-${index}`}>Age</label>
//               <input
//                 type="number"
//                 id={`age-${index}`}
//                 className="form-control"
//                 value={passenger.age}
//                 onChange={(e) => handlePassengerChange(index, 'age', e.target.value)}
//               />
//             </div>
//             <div className="form-group">
//               <label htmlFor={`gender-${index}`}>Gender</label>
//               <select
//                 id={`gender-${index}`}
//                 className="form-control"
//                 value={passenger.gender}
//                 onChange={(e) => handlePassengerChange(index, 'gender', e.target.value)}
//               >
//                 <option value="">Select Gender</option>
//                 <option value="Male">Male</option>
//                 <option value="Female">Female</option>
//                 <option value="Other">Other</option>
//               </select>
//             </div>
//             <hr />
//           </div>
//         ))}
//       </div>
//       <div className="totals">
//         <h3>Discount: ₹ {discountAmount.toLocaleString()}</h3>
//         <h3>GST (5%): ₹ {GST.toLocaleString()}</h3>
//         <h2>Total: ₹ {cartTotal.toLocaleString()}</h2>
//       </div>
//       <button className="btn btn-primary" onClick={handleConfirmBooking}>
//         Confirm Booking
//       </button>
//     </div>
//   );
// };

// export default Billing;


import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import '../App.css';

const Billing = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { bookingDetails, customerDetails } = location.state || {};

  const {
    selectedSeats,
    bus,
    numPassengers,
    discountAmount,
    GST,
    cartTotal
  } = bookingDetails || {};

  const [passengerDetails, setPassengerDetails] = useState(
    Array.from({ length: numPassengers || 0 }, () => ({ name: '', age: '', gender: '' }))
  );

  const handlePassengerChange = (index, field, value) => {
    const updatedDetails = passengerDetails.map((passenger, i) =>
      i === index ? { ...passenger, [field]: value } : passenger
    );
    setPassengerDetails(updatedDetails);
  };

  const validatePassengerDetails = () => {
    for (const passenger of passengerDetails) {
      if (!passenger.name || !passenger.age || !passenger.gender) {
        return false;
      }
    }
    return true;
  };

  const handleConfirmBooking = async () => {
    if (!validatePassengerDetails()) {
      alert('Please fill in all passenger details.');
      return;
    }

    const bookingData = {
      customer_name: customerDetails?.name || 'N/A',
      phone_number: customerDetails?.phoneNumber || 'N/A',
      email: customerDetails?.email || 'N/A',
      address: customerDetails?.address || 'N/A',
      bus_id: bus?.busId || 'N/A',
      selected_seats: selectedSeats || [],
      passenger_details: passengerDetails,
      discount_amount: discountAmount || 0,
      gst: GST || 0,
      cart_total: cartTotal || 0,
      route: bus ? `${bus.from} - ${bus.to}` : 'N/A',
      bus_type: bus?.busType || 'N/A'
    };

    try {
      const response = await fetch('http://localhost:3000/booking', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(bookingData),
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Booking confirmed:', data);
        alert('Booking confirmed successfully!');
        navigate('/');
      } else {
        const errorData = await response.json();
        console.error('Booking error:', errorData);
        alert('Failed to confirm booking. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred while confirming the booking. Please try again.');
    }
  };

  return (
    <div className="container">
      <h2>Booking Confirmation</h2>
      <hr />
      {customerDetails && (
        <div>
          <h4>Customer Name: {customerDetails.name}</h4>
          <p>Phone Number: {customerDetails.phoneNumber}</p>
          <p>Email: {customerDetails.email}</p>
          <p>Address: {customerDetails.address}</p>
        </div>
      )}
      <hr />
      {bus && (
        <div>
          <h3>Bus Details:</h3>
          <p><strong>Bus Name:</strong> {bus.busName}</p>
          <p><strong>Bus Number:</strong> {bus.busNumber}</p>
          <p><strong>Route:</strong> {bus.from} - {bus.to}</p>
          <p><strong>Type:</strong> {bus.busType}</p>
          <p><strong>Departure:</strong> {new Date(bus.departure).toLocaleString()}</p>
          <p><strong>Arrival:</strong> {new Date(bus.arrival).toLocaleString()}</p>
          <p><strong>Fare:</strong> ₹ {bus.fare.toLocaleString()}</p>
          <p><strong>Selected Seats:</strong> {selectedSeats.join(', ')}</p>
          <p><strong>Number of Passengers:</strong> {numPassengers}</p>
        </div>
      )}
      <hr />
      <div>
        <h3>Passenger Details:</h3>
        {passengerDetails.map((passenger, index) => (
          <div key={index} className="passenger-form">
            <h4>Passenger {index + 1}</h4>
            <div className="form-group">
              <label htmlFor={`name-${index}`}>Name</label>
              <input
                type="text"
                id={`name-${index}`}
                className="form-control"
                value={passenger.name}
                onChange={(e) => handlePassengerChange(index, 'name', e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor={`age-${index}`}>Age</label>
              <input
                type="number"
                id={`age-${index}`}
                className="form-control"
                value={passenger.age}
                onChange={(e) => handlePassengerChange(index, 'age', e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor={`gender-${index}`}>Gender</label>
              <select
                id={`gender-${index}`}
                className="form-control"
                value={passenger.gender}
                onChange={(e) => handlePassengerChange(index, 'gender', e.target.value)}
              >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <hr />
          </div>
        ))}
      </div>
      <div className="totals">
        <h3>Discount: ₹ {discountAmount ? discountAmount.toLocaleString() : 0}</h3>
        <h3>GST (5%): ₹ {GST ? GST.toLocaleString() : 0}</h3>
        <h2>Total: ₹ {cartTotal ? cartTotal.toLocaleString() : 0}</h2>
      </div>
      <button className="btn btn-primary" onClick={handleConfirmBooking}>
        Confirm Booking
      </button>
    </div>
  );
};

export default Billing;
