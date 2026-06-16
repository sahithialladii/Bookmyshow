// import "./Profile.css";
// import { useNavigate } from "react-router-dom";
// import { useState, useEffect } from "react";
// import axios from "axios";

// function Profile() {

//   const navigate = useNavigate();

//   const [bookings,setBookings]=useState([]);

//   const downloadTicket = (bookingId) => {
//     alert(`Download Ticket: ${bookingId}`);
//   };

//   const shareTicket = (bookingId) => {
//     navigator.clipboard.writeText(`Booking ID: ${bookingId}`);
//     alert("Booking ID copied!");
//   };

//   const handleLogout = () => {
//     localStorage.removeItem("user"); // important
//     navigate("/");
//   };

//   return (
//     <div className="profile-page">

//       {/* HEADER */}
//       <div className="profile-header">
//         <h2>My Profile</h2>

//         <button
//           className="logout-btn"
//           onClick={handleLogout}
//         >
//           Logout
//         </button>
//       </div>

//       <div className="profile-card">

//         <p><strong>Name:</strong> Sahithi</p>
//         <p><strong>Email:</strong> sahithi@gmail.com</p>
//         <p><strong>Phone:</strong> 9876543210</p>
//         <p><strong>Total Bookings:</strong> {bookings.length}</p>

//       </div>

//       <div className="bookings-section">

//         <h2>My Tickets</h2>

//         {bookings.map((booking) => (
//           <div key={booking.id} className="ticket-card">

//             <h3>{booking.movie}</h3>

//             <p><strong>Theatre:</strong> {booking.theatre}</p>
//             <p><strong>Location:</strong> {booking.location}</p>
//             <p><strong>Date:</strong> {booking.date}</p>
//             <p><strong>Time:</strong> {booking.time}</p>
//             <p><strong>Seats:</strong> {booking.seats}</p>
//             <p><strong>Booking ID:</strong> {booking.id}</p>

//             <div className="ticket-actions">

//               <button onClick={() => downloadTicket(booking.id)}>
//                 Download Ticket
//               </button>

//               <button onClick={() => shareTicket(booking.id)}>
//                 Share Ticket
//               </button>

//             </div>

//           </div>
//         ))}

//       </div>
//     </div>
//   );
// }

// export default Profile;






import "./Profile.css";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

function Profile() {

  const navigate = useNavigate();

  const [bookings, setBookings] = useState([]);

  const user = JSON.parse(
    localStorage.getItem("user")
  );

  useEffect(() => {

    if (user?.id) {

      axios
        .get(
          `http://localhost:8080/api/bookings/user/${user.id}`
        )
        .then((res) => {

          setBookings(res.data);

        })
        .catch((err) => {

          console.log(err);

        });

    }

  }, []);

  const downloadTicket = (bookingId) => {

    alert(`Download Ticket: ${bookingId}`);

  };

  const shareTicket = (bookingId) => {

    navigator.clipboard.writeText(
      `Booking ID: ${bookingId}`
    );

    alert("Booking ID copied!");

  };

  const handleLogout = () => {

    localStorage.removeItem("user");

    navigate("/");

  };

  return (

    <div className="profile-page">

      <div className="profile-header">

        <h2>My Profile</h2>

        <button
          className="logout-btn"
          onClick={handleLogout}
        >
          Logout
        </button>

      </div>

      <div className="profile-card">

        <p>
          <strong>Name:</strong>{" "}
          {user?.username}
        </p>

        <p>
          <strong>Email:</strong>{" "}
          {user?.email}
        </p>

        <p>
          <strong>Phone:</strong>{" "}
          {user?.phoneNumber}
        </p>

        <p>
          <strong>Total Bookings:</strong>{" "}
          {bookings.length}
        </p>

      </div>

      <div className="bookings-section">

        <h2>My Tickets</h2>

        {bookings.length === 0 ? (

          <p>No bookings found.</p>

        ) : (

          bookings.map((booking) => (

            <div
              key={booking.id}
              className="ticket-card"
            >

              <h3>
                {booking.show?.movie?.title}
              </h3>

              <p>
                <strong>Theatre:</strong>{" "}
                {booking.show?.theatre?.name}
              </p>

              <p>
                <strong>Location:</strong>{" "}
                {booking.show?.theatre?.city}
              </p>

              <p>
                <strong>Date:</strong>{" "}
                {
                  booking.bookingDate
                    ?.split("T")[0]
                }
              </p>

              <p>
                <strong>Time:</strong>{" "}
                {booking.show?.showTime}
              </p>

              <p>
                <strong>Seats:</strong>{" "}
                {booking.seatNumbers}
              </p>

              <p>
                <strong>Total Amount:</strong>{" "}
                ₹{booking.totalAmount}
              </p>

              <p>
                <strong>Status:</strong>{" "}
                {booking.status}
              </p>

              <p>
                <strong>Booking ID:</strong>{" "}
                {booking.id}
              </p>

              <div className="ticket-actions">

                <button
                  onClick={() =>
                    downloadTicket(
                      booking.id
                    )
                  }
                >
                  Download Ticket
                </button>

                <button
                  onClick={() =>
                    shareTicket(
                      booking.id
                    )
                  }
                >
                  Share Ticket
                </button>

              </div>

            </div>

          ))

        )}

      </div>

    </div>

  );

}

export default Profile;