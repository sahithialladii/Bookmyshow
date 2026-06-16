
import { useState, useEffect } from "react";
import axios from "axios";
import "./AdminManagement.css";

function ShowManagement() {

  const [shows, setShows] = useState([]);
  const [movies, setMovies] = useState([]);
  const [theatres, setTheatres] = useState([]);

  const [movieId, setMovieId] = useState("");
  const [theatreId, setTheatreId] = useState("");
  const [showDate, setShowDate] = useState("");
  const [showTime, setShowTime] = useState("");
  const [ticketPrice, setTicketPrice] = useState("");

  const [editingId, setEditingId] =
    useState(null);

  useEffect(() => {
    fetchShows();
    fetchMovies();
    fetchTheatres();
  }, []);

  const fetchShows = () => {

    axios
      .get("http://localhost:8080/api/shows")
      .then((res) => {
        setShows(res.data);
      });

  };

  const fetchMovies = () => {

    axios
      .get("http://localhost:8080/api/movies")
      .then((res) => {
        setMovies(res.data);
      });

  };

  const fetchTheatres = () => {

    axios
      .get("http://localhost:8080/api/theatres")
      .then((res) => {
        setTheatres(res.data);
      });

  };

  const resetForm = () => {

    setMovieId("");
    setTheatreId("");
    setShowDate("");
    setShowTime("");
    setTicketPrice("");
    setEditingId(null);

  };

  const handleSubmit = () => {

    if (
      !movieId ||
      !theatreId ||
      !showDate ||
      !showTime ||
      !ticketPrice
    ) {

      alert(
        "Please fill all fields"
      );

      return;
    }

    const showData = {

      movie: {
        id: movieId
      },

      theatre: {
        id: theatreId
      },

      showDate,
      showTime,
      ticketPrice

    };

    if (editingId) {

      axios
        .put(
          `http://localhost:8080/api/shows/${editingId}`,
          showData
        )
        .then(() => {

          alert(
            "Show Updated"
          );

          fetchShows();

          resetForm();

        });

    } else {

      axios
        .post(
          "http://localhost:8080/api/shows",
          showData
        )
        .then(() => {

          alert(
            "Show Added"
          );

          fetchShows();

          resetForm();

        });

    }

  };

  const editShow = (show) => {

    setEditingId(show.id);

    setMovieId(show.movie?.id);

    setTheatreId(show.theatre?.id);

    setShowDate(show.showDate);

    setShowTime(show.showTime);

    setTicketPrice(
      show.ticketPrice
    );

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });

  };

  const deleteShow = (id) => {

    if (
      !window.confirm(
        "Delete this show?"
      )
    ) {
      return;
    }

    axios
      .delete(
        `http://localhost:8080/api/shows/${id}`
      )
      .then(() => {

        alert(
          "Show Deleted"
        );

        fetchShows();

      })
      .catch((err) => {

        console.log(err);

      });

  };

  return (

    <div className="admin-container">

      <h2>
        {editingId
          ? "Edit Show"
          : "Add Show"}
      </h2>

      <select
      className="admin-input"
        value={movieId}
        onChange={(e) =>
          setMovieId(
            e.target.value
          )
        }
      >

        <option value="">
          Select Movie
        </option>

        {movies.map((movie) => (

          <option
            key={movie.id}
            value={movie.id}
          >
            {movie.title}
          </option>

        ))}

      </select>

      <br /><br />

      <select
      className="admin-input"
        value={theatreId}
        onChange={(e) =>
          setTheatreId(
            e.target.value
          )
        }
      >

        <option value="">
          Select Theatre
        </option>

        {theatres.map((theatre) => (

          <option
            key={theatre.id}
            value={theatre.id}
          >
            {theatre.name}
          </option>

        ))}

      </select>

      <br /><br />

      <input
        className="admin-input"
        type="date"
        value={showDate}
        onChange={(e) =>
          setShowDate(
            e.target.value
          )
        }
      />

      <br /><br />

      <input
      className="admin-input"
        type="text"
        placeholder="Show Time"
        value={showTime}
        onChange={(e) =>
          setShowTime(
            e.target.value
          )
        }
      />

      <br /><br />

      <input
      className="admin-input"
        type="number"
        placeholder="Ticket Price"
        value={ticketPrice}
        onChange={(e) =>
          setTicketPrice(
            e.target.value
          )
        }
      />

      <br /><br />

      <button
      className="primary-btn"
        onClick={
          handleSubmit
        }
      >
        {editingId
          ? "Update Show"
          : "Add Show"}
      </button>

      {editingId && (

        <button
          className="secondary-btn"
          style={{
            marginLeft:
              "10px"
          }}
          onClick={
            resetForm
          }
        >
          Cancel
        </button>

      )}

      <hr />

      <h2>
        Show List
      </h2>

      {shows.map((show) => (

<div key={show.id} className="admin-card">

          <h3>
            {
              show.movie?.title
            }
          </h3>

          <p>
            Theatre:
            {" "}
            {
              show.theatre?.name
            }
          </p>

          <p>
            City:
            {" "}
            {
              show.theatre?.city
            }
          </p>

          <p>
            Date:
            {" "}
            {
              show.showDate
            }
          </p>

          <p>
            Time:
            {" "}
            {
              show.showTime
            }
          </p>

          <p>
            Price:
            {" "}
            ₹
            {
              show.ticketPrice
            }
          </p>

          <button
          className="edit-btn"
            onClick={() =>
              editShow(
                show
              )
            }
          >
            Edit
          </button>

          <button
          className="delete-btn"
            style={{
              marginLeft:
                "10px"
            }}
            onClick={() =>
              deleteShow(
                show.id
              )
            }
          >
            Delete
          </button>

        </div>

      ))}

    </div>

  );

}

export default ShowManagement;