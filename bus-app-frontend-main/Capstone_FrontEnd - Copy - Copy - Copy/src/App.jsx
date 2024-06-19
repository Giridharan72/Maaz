import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Register from "./Components/login/Register";
import { Login } from "./Components/login/Login";
import { Forgot } from "./Components/login/Forgot";
import { Reset } from "./Components/login/Reset";
import PrivateRouted from "./PrivatedRoute";
import Dashboard from "./Components/Dashboard/Dashboard";
import Availablebus from "./Components/BusResults";  

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index path="/" element={<PrivateRouted element={<Dashboard />} />} />
          <Route path="/bus-results" element={<Availablebus />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgot" element={<Forgot />} />
          <Route path="/reset" element={<Reset />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
