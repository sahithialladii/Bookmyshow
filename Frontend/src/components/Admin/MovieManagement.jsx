import { useEffect, useState } from "react";
import axios from "axios";
import "./AdminManagement.css";

function MovieManagement() {

  const [movies, setMovies] = useState([]);

const [movie, setMovie] = useState({
  title: "",
  genre: "",
  language: "",
  rating: "",
  duration: "",
  releaseDate: "",
  status: "now-showing",
  posterUrl: "",
  trailerUrl: "",
  director: "",
  cast: "",
  certificate: "",
  description: ""
});

  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    fetchMovies();
  }, []);

  const fetchMovies = () => {
    axios
      .get("http://localhost:8080/api/movies")
      .then((res) => {
        setMovies(res.data);
      })
      .catch((err) => console.log(err));
  };

  const handleChange = (e) => {
    setMovie({
      ...movie,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = () => {

    if (
      movie.title === "" ||
      movie.genre === "" ||
      movie.language === ""
    ) {
      alert("Please fill all required fields");
      return;
    }

    if (editingId) {

      axios
        .put(
          `http://localhost:8080/api/movies/${editingId}`,
          movie
        )
        .then(() => {

          alert("Movie Updated");

          setEditingId(null);

          resetForm();

          fetchMovies();
        });

    } else {

      console.log(movie);
console.log("Poster URL Length:", movie.posterUrl.length);
      axios
        .post(
          "http://localhost:8080/api/movies",
          movie
        )
        .then(() => {

          alert("Movie Added");

          resetForm();

          fetchMovies();
        });
    }
  };

const resetForm = () => {

  setMovie({
    title: "",
    genre: "",
    language: "",
    rating: "",
    duration: "",
    releaseDate: "",
    status: "now-showing",
    posterUrl: "",
    trailerUrl: "",
    director: "",
    cast: "",
    certificate: "",
    description: ""
  });

};

  const editMovie = (movieData) => {

    setMovie(movieData);

    setEditingId(movieData.id);

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  const deleteMovie = (id) => {

    if (!window.confirm("Delete this movie?")) {
      return;
    }

    axios
      .delete(
        `http://localhost:8080/api/movies/${id}`
      )
      .then(() => {

        alert("Movie Deleted");

        fetchMovies();

      })
      .catch((err) => {

        console.log(err);

        alert(
          "Movie cannot be deleted. It may be linked to shows."
        );
      });
  };

  return (
    <div className="admin-container">

      <h2>
        {editingId
          ? "Edit Movie"
          : "Add Movie"}
      </h2>

      <input
      className="admin-input"
        type="text"
        name="title"
        placeholder="Movie Title"
        value={movie.title}
        onChange={handleChange}
      />

      <input
      className="admin-input"
        type="text"
        name="genre"
        placeholder="Genre"
        value={movie.genre}
        onChange={handleChange}
      />

      <input
      className="admin-input"
        type="text"
        name="language"
        placeholder="Language"
        value={movie.language}
        onChange={handleChange}
      />

      <input
      className="admin-input"
        type="number"
        name="rating"
        placeholder="Rating"
        value={movie.rating}
        onChange={handleChange}
      />

      <input
      className="admin-input"
        type="text"
        name="duration"
        placeholder="Duration"
        value={movie.duration}
        onChange={handleChange}
      />

      <input
      className="admin-input"
        type="date"
        name="releaseDate"
        value={movie.releaseDate}
        onChange={handleChange}
      />

      <input
      className="admin-input"
        type="text"
        name="posterUrl"
        placeholder="Poster URL"
        value={movie.posterUrl}
        onChange={handleChange}
      />


      <input
      className="admin-input"
  type="text"
  name="trailerUrl"
  placeholder="Trailer URL"
  value={movie.trailerUrl}
  onChange={handleChange}
/>

<input
className="admin-input"
  type="text"
  name="director"
  placeholder="Director"
  value={movie.director}
  onChange={handleChange}
/>

<input
className="admin-input"
  type="text"
  name="cast"
  placeholder="Cast"
  value={movie.cast}
  onChange={handleChange}
/>

<input
className="admin-input"
  type="text"
  name="certificate"
  placeholder="Certificate (U, U/A, A)"
  value={movie.certificate}
  onChange={handleChange}
/>

      <textarea
      className="admin-input"
        name="description"
        placeholder="Description"
        value={movie.description}
        onChange={handleChange}
      />

      <select
      className="admin-input"
        name="status"
        value={movie.status}
        onChange={handleChange}
      >
        <option value="now-showing">
          Now Showing
        </option>

        <option value="upcoming">
          Upcoming
        </option>
      </select>

      <button 
      className="primary-btn"
      onClick={handleSubmit}>
        {editingId
          ? "Update Movie"
          : "Add Movie"}
      </button>

      <hr />

      <h2>Movie List</h2>

      {movies.map((movie) => (

<div key={movie.id} className="admin-card">

          {movie.posterUrl && (
            <img
              src={movie.posterUrl}
              alt={movie.title}
              width="150"
            />
          )}

          <h3>{movie.title}</h3>

          <p>
            Genre: {movie.genre}
          </p>

          <p>
            Language: {movie.language}
          </p>

          <p>
            Rating: {movie.rating}
          </p>

          <p>
            Duration: {movie.duration}
          </p>

          <p>
            Release Date: {movie.releaseDate}
          </p>

          <p>
            Status: {movie.status}
          </p>


          <p>
  Director: {movie.director}
</p>

<p>
  Cast: {movie.cast}
</p>

<p>
  Certificate: {movie.certificate}
</p>

{movie.trailerUrl && (
  <p>
    <a
      href={movie.trailerUrl}
      target="_blank"
      rel="noreferrer"
    >
      Watch Trailer
    </a>
  </p>
)}

          <p>
            {movie.description}
          </p>

          <button
            className="edit-btn"
            onClick={() =>
              editMovie(movie)
            }
          >
            Edit
          </button>

          <button
            className="delete-btn"
            onClick={() =>
              deleteMovie(movie.id)
            }
          >
            Delete
          </button>

        </div>

      ))}

    </div>
  );
}

export default MovieManagement;