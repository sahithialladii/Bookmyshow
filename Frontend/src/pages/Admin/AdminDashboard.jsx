import "./AdminDashboard.css";
import {useState,useEffect} from "react";
import { useNavigate } from "react-router-dom";

import MovieManagement from "../../components/Admin/MovieManagement";
import TheatreManagement from "../../components/Admin/TheatreManagement";
import ShowManagement from "../../components/Admin/ShowManagement";
import BookingManagement from "../../components/Admin/BookingManagement";
import UserManagement from "../../components/Admin/UserManagement";

function AdminDashboard() {

  const [activeTab, setActiveTab] = useState("movies");
  const navigate =
  useNavigate();

useEffect(() => {

  const isAdmin =
    localStorage.getItem(
      "admin"
    );

  if (!isAdmin) {

    navigate("/login");

  }

}, []);

  return (

    <div className="dashboard-container">

      <aside className="sidebar">

  <h2>Admin Panel</h2>

  <div className="menu">

    <button className={activeTab === "movies" ? "active-tab" : ""} onClick={() => setActiveTab("movies")}>
      🎬 Movies
    </button>

    <button className={activeTab === "theatres" ? "active-tab" : ""} onClick={() => setActiveTab("theatres")}>
      🏢 Theatres
    </button>

    <button className={activeTab === "shows" ? "active-tab" : ""} onClick={() => setActiveTab("shows")}>
      🎟 Shows
    </button>

    <button className={activeTab === "bookings" ? "active-tab" : ""} onClick={() => setActiveTab("bookings")}>
      📋 Bookings
    </button>

    <button className={activeTab === "users" ? "active-tab" : ""} onClick={() => setActiveTab("users")}>
      👥 Users
    </button>

  </div>

  <button className="logout-btn"
    onClick={() => {
      localStorage.removeItem("admin");
      navigate("/");
    }}
  >
    Logout
  </button>

</aside>

      <main className="dashboard-content">

        <h1>Dashboard Overview</h1>

        <div className="stats">

          <div className="stat-card">
            <h3>12</h3>
            <p>Movies</p>
          </div>

          <div className="stat-card">
            <h3>5</h3>
            <p>Theatres</p>
          </div>

          <div className="stat-card">
            <h3>245</h3>
            <p>Bookings</p>
          </div>

        </div>

        <div className="management-section">

          {activeTab === "movies" && (
            <MovieManagement />
          )}

          {activeTab === "theatres" && (
            <TheatreManagement />
          )}

          {activeTab === "shows" && (
            <ShowManagement />
          )}

          {activeTab === "bookings" && (
            <BookingManagement />
          )}

          {activeTab === "users" && (
  <UserManagement />
)}

        </div>

      </main>

    </div>

  );
}

export default AdminDashboard;