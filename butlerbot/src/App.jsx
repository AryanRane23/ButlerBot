import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./controllers/Login";
import ProtectedRoute from "./controllers/ProtectedRoute";
import Dashboard from "./pages/Dashboard";

//import Dashboard from "./pages/Dashboard";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
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