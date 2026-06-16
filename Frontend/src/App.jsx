import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import MovieDetails from "./pages/MovieDetails";
import BookingPage from "./pages/BookingPage";

import BookingSuccess from "./pages/BookingSuccess";
import Profile from "./pages/Profile";


import AdminDashboard from "./pages/admin/AdminDashboard";

function App() {

  return (

    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/login" element={<Login />} />

        <Route path="/register" element={<Register />} />

        <Route path="/movie/:id" element={<MovieDetails />} />

        {/* <Route path="/booking" element={<BookingPage />} /> */}


        <Route
 path="/booking/:movieId"
 element={<BookingPage />}
/>


        <Route path="/booking-success" element={<BookingSuccess />}/>

        <Route
  path="/profile"
  element={<Profile />}
/>






<Route
  path="/admin/dashboard"
  element={<AdminDashboard />}
/>

      </Routes>

    </BrowserRouter>

  );
}

export default App;