// import React from 'react';
// import { Container, Row, Col, Card } from 'react-bootstrap';

// const Dashboard = () => {
//   const data = {
//     bookings: 6,
//     buses: 10,
//     routes: 7,
//     seats: 380,
//     customers: 6,
//     admins: 2,
//     earnings: 490,
//   };

//   return (
//     <Container fluid>
//       <Row className="mb-4">
//         <Col md={12} className="text-center">
//           <h2>Welcome, Liam Moore</h2>
//         </Col>
//       </Row>
//       <Row>
//         <Col md={3}>
//           <Card className="mb-4">
//             <Card.Body>
//               <Card.Title>Bookings</Card.Title>
//               <Card.Text>Total Bookings: {data.bookings}</Card.Text>
//               <a href="#bookings" className="btn btn-primary">View More</a>
//             </Card.Body>
//           </Card>
//         </Col>
//         <Col md={3}>
//           <Card className="mb-4">
//             <Card.Body>
//               <Card.Title>Buses</Card.Title>
//               <Card.Text>Total Buses: {data.buses}</Card.Text>
//               <a href="#buses" className="btn btn-primary">View More</a>
//             </Card.Body>
//           </Card>
//         </Col>
//         <Col md={3}>
//           <Card className="mb-4">
//             <Card.Body>
//               <Card.Title>Routes</Card.Title>
//               <Card.Text>Total Routes: {data.routes}</Card.Text>
//               <a href="#routes" className="btn btn-primary">View More</a>
//             </Card.Body>
//           </Card>
//         </Col>
//         <Col md={3}>
//           <Card className="mb-4">
//             <Card.Body>
//               <Card.Title>Seats</Card.Title>
//               <Card.Text>Total Seats: {data.seats}</Card.Text>
//               <a href="#seats" className="btn btn-primary">View More</a>
//             </Card.Body>
//           </Card>
//         </Col>
//       </Row>
//       <Row>
//         <Col md={3}>
//           <Card className="mb-4">
//             <Card.Body>
//               <Card.Title>Customers</Card.Title>
//               <Card.Text>Total Customers: {data.customers}</Card.Text>
//               <a href="#customers" className="btn btn-primary">View More</a>
//             </Card.Body>
//           </Card>
//         </Col>
//         <Col md={3}>
//           <Card className="mb-4">
//             <Card.Body>
//               <Card.Title>Admins</Card.Title>
//               <Card.Text>Total Admins: {data.admins}</Card.Text>
//               <a href="#admins" className="btn btn-primary">View More</a>
//             </Card.Body>
//           </Card>
//         </Col>
//         <Col md={3}>
//           <Card className="mb-4">
//             <Card.Body>
//               <Card.Title>Earnings</Card.Title>
//               <Card.Text>Total Earnings: {data.earnings}</Card.Text>
//               <a href="#earnings" className="btn btn-primary">View More</a>
//             </Card.Body>
//           </Card>
//         </Col>
//       </Row>
//     </Container>
//   );
// };

// export default Dashboard;
// import React from 'react';
// import { Container, Row, Col, Card } from 'react-bootstrap';
// import Sidebar from './Sidebar';

// const Dashboard = () => {
//   const data = {
//     bookings: 6,
//     buses: 10,
//     routes: 7,
//     seats: 380,
//     customers: 6,
//     admins: 2,
//     earnings: 490,
//   };

//   return (
//     <Container fluid className="h-100">
//       <Row className="h-100">
//         <Col md={3} className="bg-light p-0">
//           <Sidebar />
//         </Col>
//         <Col md={9} className="p-4">
//           <Row className="mb-4">
//             <Col md={12} className="text-center">
//               <h2>Welcome, Liam Moore</h2>
//             </Col>
//           </Row>
//           <Row>
//             <Col md={4}>
//               <Card className="mb-4">
//                 <Card.Body>
//                   <Card.Title>Bookings</Card.Title>
//                   <Card.Text>Total Bookings: {data.bookings}</Card.Text>
//                   <a href="#bookings" className="btn btn-primary">View More</a>
//                 </Card.Body>
//               </Card>
//             </Col>
//             <Col md={4}>
//               <Card className="mb-4">
//                 <Card.Body>
//                   <Card.Title>Buses</Card.Title>
//                   <Card.Text>Total Buses: {data.buses}</Card.Text>
//                   <a href="#buses" className="btn btn-primary">View More</a>
//                 </Card.Body>
//               </Card>
//             </Col>
//             <Col md={4}>
//               <Card className="mb-4">
//                 <Card.Body>
//                   <Card.Title>Routes</Card.Title>
//                   <Card.Text>Total Routes: {data.routes}</Card.Text>
//                   <a href="#routes" className="btn btn-primary">View More</a>
//                 </Card.Body>
//               </Card>
//             </Col>
//             <Col md={4}>
//               <Card className="mb-4">
//                 <Card.Body>
//                   <Card.Title>Seats</Card.Title>
//                   <Card.Text>Total Seats: {data.seats}</Card.Text>
//                   <a href="#seats" className="btn btn-primary">View More</a>
//                 </Card.Body>
//               </Card>
//             </Col>
//           </Row>
//           <Row>
//             <Col md={4}>
//               <Card className="mb-4">
//                 <Card.Body>
//                   <Card.Title>Customers</Card.Title>
//                   <Card.Text>Total Customers: {data.customers}</Card.Text>
//                   <a href="#customers" className="btn btn-primary">View More</a>
//                 </Card.Body>
//               </Card>
//             </Col>
//             <Col md={4}>
//               <Card className="mb-4">
//                 <Card.Body>
//                   <Card.Title>Admins</Card.Title>
//                   <Card.Text>Total Admins: {data.admins}</Card.Text>
//                   <a href="#admins" className="btn btn-primary">View More</a>
//                 </Card.Body>
//               </Card>
//             </Col>
//             <Col md={4}>
//               <Card className="mb-4">
//                 <Card.Body>
//                   <Card.Title>Earnings</Card.Title>
//                   <Card.Text>Total Earnings: {data.earnings}</Card.Text>
//                   <a href="#earnings" className="btn btn-primary">View More</a>
//                 </Card.Body>
//               </Card>
//             </Col>
//           </Row>
//         </Col>
//       </Row>
//     </Container>
//   );
// };

// export default Dashboard;

import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import Sidebar from './Sidebar';

const Dashboard = () => {
  const data = {
    bookings: 6,
    buses: 10,
    routes: 7,
    seats: 380,
    customers: 6,
    admins: 2,
    earnings: 490,
  };

  return (
    <Container fluid>
      <Row>
        <Col md={3}>
          <Sidebar />
        </Col>
        <Col md={9}>
          <Row className="mb-4">
            <Col md={12} className="text-center">
              <h2>Welcome, Liam Moore</h2>
            </Col>
          </Row>
          <Row>
            <Col md={4}>
              <Card className="mb-4">
                <Card.Body>
                  <Card.Title>Bookings</Card.Title>
                  <Card.Text>Total Bookings: {data.bookings}</Card.Text>
                  <a href="#bookings" className="btn btn-primary">View More</a>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="mb-4">
                <Card.Body>
                  <Card.Title>Buses</Card.Title>
                  <Card.Text>Total Buses: {data.buses}</Card.Text>
                  <a href="#buses" className="btn btn-primary">View More</a>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="mb-4">
                <Card.Body>
                  <Card.Title>Routes</Card.Title>
                  <Card.Text>Total Routes: {data.routes}</Card.Text>
                  <a href="#routes" className="btn btn-primary">View More</a>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="mb-4">
                <Card.Body>
                  <Card.Title>Seats</Card.Title>
                  <Card.Text>Total Seats: {data.seats}</Card.Text>
                  <a href="#seats" className="btn btn-primary">View More</a>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col md={4}>
              <Card className="mb-4">
                <Card.Body>
                  <Card.Title>Customers</Card.Title>
                  <Card.Text>Total Customers: {data.customers}</Card.Text>
                  <a href="#customers" className="btn btn-primary">View More</a>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="mb-4">
                <Card.Body>
                  <Card.Title>Admins</Card.Title>
                  <Card.Text>Total Admins: {data.admins}</Card.Text>
                  <a href="#admins" className="btn btn-primary">View More</a>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="mb-4">
                <Card.Body>
                  <Card.Title>Earnings</Card.Title>
                  <Card.Text>Total Earnings: {data.earnings}</Card.Text>
                  <a href="#earnings" className="btn btn-primary">View More</a>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
