

/*
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Login from "./controllers/Login";
import Signup from "./controllers/Signup";
import ProtectedRoute from "./controllers/ProtectedRoute";
import Dashboard from "./pages/Dashboard";
import GuestDash from "./pages/GuestDash";

//import Dashboard from "./pages/Dashboard";



function App() {
  return (
    
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Landing />} />
        <Route path="/guest" element={<GuestDash />} />
         <Route path="/admin" element={<Dashboard/>} />
        <Route
          path="/" // redirected page after login
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
*/

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Login from "./controllers/Login";
import Signup from "./controllers/Sign";
import ProtectedRoute from "./controllers/ProtectedRoute";
import Dashboard from "./pages/Dashboard";
import GuestDash from "./pages/GuestDash";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public routes */}
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/guest" element={<GuestDash />} />

        {/* Protected routes */}
        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
