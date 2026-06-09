


import { useState, useEffect } from "react";
import "./BookingPage.css";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

function BookingPage() {

  const { movieId } = useParams();

  const [shows, setShows] = useState([]);
  const [selectedShowId, setSelectedShowId] =
  useState(null);

  const [location, setLocation] = useState("");
  const [theatre, setTheatre] = useState("");
  const [showTime, setShowTime] = useState("");
  const [selectedSeats, setSelectedSeats] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {

    axios
      .get("http://localhost:8080/api/shows")
      .then((response) => {

        const filteredShows =
          response.data.filter(
            (show) =>
              show.movie.id == movieId
          );

        setShows(filteredShows);
      })
      .catch((error) => {
        console.log(error);
      });

  }, [movieId]);

//   const handleProceed = () => {

//     const isLoggedIn =
//       localStorage.getItem("user");

//     if (!isLoggedIn) {

//       navigate("/login");

//     } else {

//       navigate("/booking-success", {
//   state: {
//     seats: selectedSeats,
//     totalAmount: totalPrice,
//     showTime: showTime,
//     theatre: theatre,
//     location: location
//   }
// });

//     }
//   };


const handleProceed = async () => {

  const user =
    JSON.parse(
      localStorage.getItem("user")
    );

  if (!user) {

    navigate("/login");

    return;
  }

  if (selectedSeats.length === 0) {

    alert("Please select seats");

    return;
  }

  if (!selectedShowId) {

    alert("Please select show time");

    return;
  }

  const bookingData = {

    seatNumbers:
      selectedSeats.join(","),

    totalAmount:
      totalPrice,

    user: {
      id: user.id
    },

    show: {
      id: selectedShowId
    }

  };

  try {

    const response =
      await axios.post(
        "http://localhost:8080/api/bookings",
        bookingData
      );

    navigate(
      "/booking-success",
      {
        state: response.data
      }
    );

  } catch (error) {

    console.log(error);

    alert(
      "Booking failed"
    );

  }

};

  const bookedSeats = [
    "A3",
    "A4",
    "B5",
    "C7"
  ];

  const rows = [
    "A",
    "B",
    "C",
    "D",
    "E"
  ];

  const selectSeat = (seat) => {

    if (bookedSeats.includes(seat))
      return;

    if (selectedSeats.includes(seat)) {

      setSelectedSeats(
        selectedSeats.filter(
          s => s !== seat
        )
      );

    } else {

      setSelectedSeats([
        ...selectedSeats,
        seat
      ]);

    }
  };

  const totalPrice =
    selectedSeats.length * 250;

  return (

    <div className="booking-page">

      <h1>Book Tickets</h1>

      <div className="movie-info-card">
        <h2>Movie Booking</h2>
        <p>Select Theatre & Seats</p>
      </div>

      {/* Location */}

      <div className="selection-section">

        <label>Select Location</label>

        <select
          value={location}
          onChange={(e) =>
            setLocation(e.target.value)
          }
        >

          <option value="">
            Choose Location
          </option>

          {shows.map((show) => (

            <option
              key={show.id}
              value={show.theatre.city}
            >
              {show.theatre.city}
            </option>

          ))}

        </select>

      </div>

      {/* Theatre */}

      <div className="selection-section">

        <label>Select Theatre</label>

        <select
          value={theatre}
          onChange={(e) =>
            setTheatre(e.target.value)
          }
        >

          <option value="">
            Choose Theatre
          </option>

          {shows.map((show) => (

            <option
              key={show.id}
              value={show.theatre.name}
            >
              {show.theatre.name}
            </option>

          ))}

        </select>

      </div>

      {/* Timings */}

      <div className="selection-section">

        <label>Show Timings</label>

        <div className="timing-container">

          {shows.map((show) => (

            <button
              key={show.id}
              className={
                showTime === show.showTime
                  ? "time-btn active-time"
                  : "time-btn"
              }
onClick={() => {

  setShowTime(show.showTime);

  setSelectedShowId(show.id);

  setLocation(show.theatre.city);

  setTheatre(show.theatre.name);

}}
            >
              {show.showTime}
            </button>

          ))}

        </div>

      </div>

      {/* Screen */}

      <div className="screen">
        SCREEN THIS WAY
      </div>

      {/* Seats */}

      <div className="seat-grid">

        {rows.map((row) =>

          Array.from(
            { length: 10 },
            (_, index) => {

              const seat =
                `${row}${index + 1}`;

              let seatClass =
                "seat";

              if (
                bookedSeats.includes(
                  seat
                )
              ) {
                seatClass +=
                  " booked";
              }
              else if (
                selectedSeats.includes(
                  seat
                )
              ) {
                seatClass +=
                  " selected";
              }

              return (

                <div
                  key={seat}
                  className={seatClass}
                  onClick={() =>
                    selectSeat(seat)
                  }
                >
                  {seat}
                </div>

              );
            }
          )

        )}

      </div>

      {/* Legend */}

      <div className="legend">

        <div>
          <span className="box available"></span>
          Available
        </div>

        <div>
          <span className="box selected-box"></span>
          Selected
        </div>

        <div>
          <span className="box booked-box"></span>
          Booked
        </div>

      </div>

      {/* Summary */}

      <div className="summary-card">

        <h3>Booking Summary</h3>

        <p>
          <strong>Location:</strong>
          {" "}
          {location || "-"}
        </p>

        <p>
          <strong>Theatre:</strong>
          {" "}
          {theatre || "-"}
        </p>

        <p>
          <strong>Show:</strong>
          {" "}
          {showTime || "-"}
        </p>

        <p>
          <strong>Seats:</strong>
          {" "}
          {
            selectedSeats.length
              ? selectedSeats.join(", ")
              : "-"
          }
        </p>

        <p>
          <strong>Total:</strong>
          ₹{totalPrice}
        </p>

        <button
          className="proceed-btn"
          onClick={handleProceed}
        >
          Proceed
        </button>

      </div>

    </div>

  );
}

export default BookingPage;