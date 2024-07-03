// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import BusSearch from './Components/BusSearch';
// import BusDetails from './Components/BusDetails';

// const App1 = () => {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<BusSearch />} />
//         <Route path="/bus-details" element={<BusDetails />} />
//       </Routes>
//     </Router>
//   );
// };

// export default App1;


import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BusSearch from './Components/BusSearch';
import BusDetails from './Components/BusDetails';
import Billing from './Components/Billing';

const App1 = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<BusSearch />} />
        <Route path="/bus-details" element={<BusDetails />} />
        <Route path="/billing" element={<Billing />} />
      </Routes>
    </Router>
  );
};

export default App1;
