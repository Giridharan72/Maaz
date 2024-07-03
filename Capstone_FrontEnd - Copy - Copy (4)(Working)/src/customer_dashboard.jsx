// App.js

// import React from 'react';
// import './index.css';

// function customer_dashboard() {
//   return (
//     <div className="App">
//       <header>
//         <div className="title">Bus Booking</div>
//         <nav>
//           <ul>
//             <li><a href="#">Account</a></li>
//           </ul>
//         </nav>
//       </header>

//       <main>
//         <div className="booking-container">
//           <div className="column">
//             <label htmlFor="pickup">Pick Up</label>
//             <input type="text" id="pickup" />
//           </div>
//           <div className="column">
//             <label htmlFor="dropoff">Drop Off</label>
//             <input type="text" id="dropoff" />
//           </div>
//           <div className="column">
//             <label htmlFor="datepicker">Select Date</label>
//             <input type="date" id="datepicker" />
//           </div>
//           <div className="column1">
//             <button type="submit">Search</button>
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// }

// export default customer_dashboard;


// import React, { useState } from 'react';
// import './index.css';
// import { searchBuses } from './api';

// function CustomerDashboard() {
//   const [pickup, setPickup] = useState('');
//   const [dropoff, setDropoff] = useState('');
//   const [date, setDate] = useState('');
//   const [buses, setBuses] = useState([]);

//   const handleSearch = async () => {
//     try {
//       const result = await searchBuses(pickup, dropoff, date);
//       setBuses(result);
//     } catch (error) {
//       console.error('Search error:', error);
//     }
//   };

//   return (
//     <div className="App">
//       <header>
//         <div className="title">Bus Booking</div>
//         <nav>
//           <ul>
//             <li><a href="#">Account</a></li>
//           </ul>
//         </nav>
//       </header>

//       <main>
//         <div className="booking-container">
//           <div className="column">
//             <label htmlFor="pickup">Pick Up</label>
//             <input type="text" id="pickup" value={pickup} onChange={(e) => setPickup(e.target.value)} />
//           </div>
//           <div className="column">
//             <label htmlFor="dropoff">Drop Off</label>
//             <input type="text" id="dropoff" value={dropoff} onChange={(e) => setDropoff(e.target.value)} />
//           </div>
//           <div className="column">
//             <label htmlFor="datepicker">Select Date</label>
//             <input type="date" id="datepicker" value={date} onChange={(e) => setDate(e.target.value)} />
//           </div>
//           <div className="column1">
//             <button type="button" onClick={handleSearch}>Search</button>
//           </div>
//         </div>
//         {buses.length > 0 && (
//           <div className="results-container">
//             <h2>Available Buses</h2>
//             <ul>
//               {buses.map(bus => (
//                 <li key={bus.busId}>
//                   <div>{bus.busName}</div>
//                   <div>{bus.busNumber}</div>
//                   <div>{bus.from} - {bus.to}</div>
//                   <div>Departure: {new Date(bus.departure).toLocaleString()}</div>
//                   <div>Arrival: {new Date(bus.arrival).toLocaleString()}</div>
//                   <div>Fare: ${bus.fare}</div>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         )}
//       </main>
//     </div>
//   );
// }

// export default CustomerDashboard;


import React, { useState } from 'react';
import './index.css';
import { searchBuses } from './api';

function CustomerDashboard() {
  const [pickup, setPickup] = useState('');
  const [dropoff, setDropoff] = useState('');
  const [date, setDate] = useState('');
  const [buses, setBuses] = useState([]);

  const handleSearch = async () => {
    try {
      const result = await searchBuses(pickup, dropoff, date);
      setBuses(result);
    } catch (error) {
      console.error('Search error:', error);
    }
  };

  return (
    <div className="App">
      <header>
        <div className="title">Bus Booking</div>
        <nav>
          <ul>
            <li><a href="#">Account</a></li>
          </ul>
        </nav>
      </header>

      <main>
        <div className="booking-container">
          <div className="column">
            <label htmlFor="pickup">Pick Up</label>
            <input
              type="text"
              id="pickup"
              value={pickup}
              onChange={(e) => setPickup(e.target.value)}
            />
          </div>
          <div className="column">
            <label htmlFor="dropoff">Drop Off</label>
            <input
              type="text"
              id="dropoff"
              value={dropoff}
              onChange={(e) => setDropoff(e.target.value)}
            />
          </div>
          <div className="column">
            <label htmlFor="datepicker">Select Date</label>
            <input
              type="date"
              id="datepicker"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>
          <div className="column1">
            <button type="button" onClick={handleSearch}>Search</button>
          </div>
        </div>
        {buses.length > 0 && (
          <div className="results-container">
            <h2>Available Buses</h2>
            <ul>
              {buses.map(bus => (
                <li key={bus.busId}>
                  <div>{bus.busName}</div>
                  <div>{bus.busNumber}</div>
                  <div>{bus.from} - {bus.to}</div>
                  <div>Departure: {new Date(bus.departure).toLocaleString()}</div>
                  <div>Arrival: {new Date(bus.arrival).toLocaleString()}</div>
                  <div>Fare: ${bus.fare}</div>
                </li>
              ))}
            </ul>
          </div>
        )}
      </main>
    </div>
  );
}

export default CustomerDashboard;
