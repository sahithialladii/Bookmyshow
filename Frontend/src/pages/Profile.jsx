// import "./Profile.css";

// function Profile() {

//   const bookings = [
//     {
//       id: "BK10234",
//       movie: "Avengers Endgame",
//       theatre: "PVR Cinemas",
//       location: "Hyderabad",
//       date: "10 Jul 2026",
//       time: "7:00 PM",
//       seats: "A1, A2"
//     },
//     {
//       id: "BK10235",
//       movie: "Interstellar",
//       theatre: "INOX",
//       location: "Hyderabad",
//       date: "15 Jul 2026",
//       time: "4:00 PM",
//       seats: "B4, B5"
//     }
//   ];

//   const downloadTicket = (bookingId) => {
//     alert(`Download Ticket: ${bookingId}`);
//   };

//   const shareTicket = (bookingId) => {

//     navigator.clipboard.writeText(
//       `Booking ID: ${bookingId}`
//     );

//     alert("Booking ID copied!");
//   };

//   return (

//     <div className="profile-page">

//       <div className="profile-card">

//         <h2>My Profile</h2>

//         <p>
//           <strong>Name:</strong> Sahithi
//         </p>

//         <p>
//           <strong>Email:</strong>
//           sahithi@gmail.com
//         </p>

//         <p>
//           <strong>Phone:</strong>
//           9876543210
//         </p>

//         <p>
//           <strong>Total Bookings:</strong>
//           {bookings.length}
//         </p>

//       </div>

//       <div className="bookings-section">

//         <h2>My Tickets</h2>

//         {bookings.map((booking) => (

//           <div
//             key={booking.id}
//             className="ticket-card"
//           >

//             <h3>{booking.movie}</h3>

//             <p>
//               <strong>Theatre:</strong>
//               {booking.theatre}
//             </p>

//             <p>
//               <strong>Location:</strong>
//               {booking.location}
//             </p>

//             <p>
//               <strong>Date:</strong>
//               {booking.date}
//             </p>

//             <p>
//               <strong>Time:</strong>
//               {booking.time}
//             </p>

//             <p>
//               <strong>Seats:</strong>
//               {booking.seats}
//             </p>

//             <p>
//               <strong>Booking ID:</strong>
//               {booking.id}
//             </p>

//             <div className="ticket-actions">

//               <button
//                 onClick={() =>
//                   downloadTicket(
//                     booking.id
//                   )
//                 }
//               >
//                 Download Ticket
//               </button>

//               <button
//                 onClick={() =>
//                   shareTicket(
//                     booking.id
//                   )
//                 }
//               >
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

function Profile() {

  const navigate = useNavigate();

  const bookings = [
    {
      id: "BK10234",
      movie: "Avengers Endgame",
      theatre: "PVR Cinemas",
      location: "Hyderabad",
      date: "10 Jul 2026",
      time: "7:00 PM",
      seats: "A1, A2"
    },
    {
      id: "BK10235",
      movie: "Interstellar",
      theatre: "INOX",
      location: "Hyderabad",
      date: "15 Jul 2026",
      time: "4:00 PM",
      seats: "B4, B5"
    }
  ];

  const downloadTicket = (bookingId) => {
    alert(`Download Ticket: ${bookingId}`);
  };

  const shareTicket = (bookingId) => {
    navigator.clipboard.writeText(`Booking ID: ${bookingId}`);
    alert("Booking ID copied!");
  };

  const handleLogout = () => {
    localStorage.removeItem("user"); // important
    navigate("/login");
  };

  return (
    <div className="profile-page">

      {/* HEADER */}
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

        <p><strong>Name:</strong> Sahithi</p>
        <p><strong>Email:</strong> sahithi@gmail.com</p>
        <p><strong>Phone:</strong> 9876543210</p>
        <p><strong>Total Bookings:</strong> {bookings.length}</p>

      </div>

      <div className="bookings-section">

        <h2>My Tickets</h2>

        {bookings.map((booking) => (
          <div key={booking.id} className="ticket-card">

            <h3>{booking.movie}</h3>

            <p><strong>Theatre:</strong> {booking.theatre}</p>
            <p><strong>Location:</strong> {booking.location}</p>
            <p><strong>Date:</strong> {booking.date}</p>
            <p><strong>Time:</strong> {booking.time}</p>
            <p><strong>Seats:</strong> {booking.seats}</p>
            <p><strong>Booking ID:</strong> {booking.id}</p>

            <div className="ticket-actions">

              <button onClick={() => downloadTicket(booking.id)}>
                Download Ticket
              </button>

              <button onClick={() => shareTicket(booking.id)}>
                Share Ticket
              </button>

            </div>

          </div>
        ))}

      </div>
    </div>
  );
}

export default Profile;