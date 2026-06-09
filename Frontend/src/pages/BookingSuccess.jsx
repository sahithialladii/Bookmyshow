// // import "./BookingSuccess.css";

// // function BookingSuccess() {

// //   return (

// //     <div className="success-page">

// //       <div className="ticket-card">

// //         <h1>
// //           🎉 Booking Successful
// //         </h1>

// //         <p>
// //           Your tickets have been booked.
// //         </p>

// //         <h3>Booking ID</h3>

// //         <p>BK10234</p>

// //       </div>

// //     </div>

// //   );
// // }

// // export default BookingSuccess;




// import "./BookingSuccess.css";
// import { useLocation } from "react-router-dom";

// function BookingSuccess() {

//   const locationData = useLocation();

//   const booking =
//     locationData.state;

//   if (!booking) {

//     return (
//       <h2>
//         No Booking Found
//       </h2>
//     );
//   }

//   return (

//     <div className="success-page">

//       <div className="ticket-card">

//         <h1>
//           🎉 Booking Successful
//         </h1>

//         <p>
//           Your tickets have been booked.
//         </p>

//         <hr />

//         <h3>
//           Theatre
//         </h3>

//         <p>
//           {booking.theatre}
//         </p>

//         <h3>
//           Location
//         </h3>

//         <p>
//           {booking.location}
//         </p>

//         <h3>
//           Show Time
//         </h3>

//         <p>
//           {booking.showTime}
//         </p>

//         <h3>
//           Seats
//         </h3>

//         <p>
//           {booking.seats.join(", ")}
//         </p>

//         <h3>
//           Total Amount
//         </h3>

//         <p>
//           ₹{booking.totalAmount}
//         </p>

//       </div>

//     </div>

//   );
// }

// export default BookingSuccess;






import "./BookingSuccess.css";
import { useLocation } from "react-router-dom";

function BookingSuccess() {

  const location = useLocation();

  const booking =
    location.state;

  if (!booking) {

    return (
      <h2>
        No Booking Found
      </h2>
    );

  }

  return (

    <div className="success-page">

      <div className="ticket-card">

        <h1>
          🎉 Booking Successful
        </h1>

        <p>
          Your tickets have been booked.
        </p>

        <hr />

        <h3>
          Booking ID
        </h3>

        <p>
          {booking.id}
        </p>

        <h3>
          Seats
        </h3>

        <p>
          {booking.seatNumbers}
        </p>

        <h3>
          Total Amount
        </h3>

        <p>
          ₹{booking.totalAmount}
        </p>

        <h3>
          Status
        </h3>

        <p>
          {booking.status}
        </p>

        <h3>
          Booking Date
        </h3>

        <p>
          {booking.bookingDate}
        </p>

        <h3>
          Theatre
        </h3>

        <p>
          {booking.show?.theatre?.name}
        </p>

        <h3>
          City
        </h3>

        <p>
          {booking.show?.theatre?.city}
        </p>

        <h3>
          Show Time
        </h3>

        <p>
          {booking.show?.showTime}
        </p>

        <h3>
          Movie
        </h3>

        <p>
          {booking.show?.movie?.title}
        </p>

      </div>

    </div>

  );
}

export default BookingSuccess;