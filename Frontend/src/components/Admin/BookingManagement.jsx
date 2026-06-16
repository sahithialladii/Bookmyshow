import { useEffect, useState } from "react";
import axios from "axios";
import "./AdminManagement.css";

function BookingManagement() {

  const [bookings, setBookings] =
    useState([]);

  useEffect(() => {

    axios
      .get("http://localhost:8080/api/bookings")
      .then((response) => {

        setBookings(response.data);

      })
      .catch((error) => {

        console.log(error);

      });

  }, []);

  return (

    <div className="admin-container">

      <h2>All Bookings</h2>

      <table
        className="admin-table"
        border="1"
        cellPadding="10"
        style={{
          width: "100%",
          borderCollapse: "collapse"
        }}
      >

        <thead>

          <tr>

            <th>ID</th>

            <th>User</th>

            <th>Movie</th>

            <th>Theatre</th>

            <th>Seats</th>

            <th>Amount</th>

            <th>Status</th>

          </tr>

        </thead>

        <tbody>

          {bookings.map((booking) => (

            <tr key={booking.id}>

              <td>
                {booking.id}
              </td>

              <td>
                {booking.user?.username}
              </td>

              <td>
                {booking.show?.movie?.title}
              </td>

              <td>
                {booking.show?.theatre?.name}
              </td>

              <td>
                {booking.seatNumbers}
              </td>

              <td>
                ₹{booking.totalAmount}
              </td>

              <td>
                {booking.status}
              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>

  );
}

export default BookingManagement;