
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Login from "./controllers/Login";
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
