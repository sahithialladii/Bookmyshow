

import { useState } from "react";

import axios from "axios";

function MovieManagement() {

  const [movies, setMovies] = useState([
    {
      title: "Avengers Endgame",
      genre: "Action",
      language: "English",
      rating: 8.9,
      status: "now-showing"
    }
  ]);

  const [movieName, setMovieName] = useState("");
  const [genre, setGenre] = useState("");
  const [language, setLanguage] = useState("");
  const [rating, setRating] = useState("");
  const [status, setStatus] = useState("now-showing");

  const addMovie = () => {

  if (
    movieName.trim() === "" ||
    genre.trim() === "" ||
    language.trim() === "" ||
    rating === ""
  ) return;

  const newMovie = {
    title: movieName,
    genre,
    language,
    rating: Number(rating),
    status
  };

  axios.post("http://localhost:8080/api/movies", newMovie)
    .then((res) => {
      setMovies([...movies, res.data]); // update UI from backend response
    })
    .catch((err) => {
      console.log("Error saving movie:", err);
    });

  setMovieName("");
  setGenre("");
  setLanguage("");
  setRating("");
  setStatus("now-showing");
};


  const deleteMovie = (index) => {

    setMovies(
      movies.filter(
        (_, i) => i !== index
      )
    );
  };

  return (

    <div>

      <h2>Manage Movies</h2>

      <input
        type="text"
        placeholder="Movie Name"
        value={movieName}
        onChange={(e) =>
          setMovieName(e.target.value)
        }
      />

      <input
        type="text"
        placeholder="Genre"
        value={genre}
        onChange={(e) =>
          setGenre(e.target.value)
        }
      />

      <input
        type="text"
        placeholder="Language"
        value={language}
        onChange={(e) =>
          setLanguage(e.target.value)
        }
      />

      <input
        type="number"
        step="0.1"
        placeholder="Rating"
        value={rating}
        onChange={(e) =>
          setRating(e.target.value)
        }
      />

      <select
        value={status}
        onChange={(e) =>
          setStatus(e.target.value)
        }
      >
        <option value="now-showing">
          Now Showing
        </option>

        <option value="upcoming">
          Upcoming
        </option>
      </select>

      <button
        className="add-btn"
        onClick={addMovie}
      >
        Add Movie
      </button>

      <br /><br />

      {movies.map((movie, index) => (

        <div
          key={index}
          style={{
            border:"1px solid #ddd",
            padding:"15px",
            marginBottom:"15px",
            borderRadius:"8px"
          }}
        >

          <h3>{movie.title}</h3>

          <p>
            Genre: {movie.genre}
          </p>

          <p>
            Language: {movie.language}
          </p>

          <p>
            Rating: ⭐ {movie.rating}
          </p>

          <p>
            Status:
            {" "}
            {
              movie.status === "now-showing"
                ? "Now Showing"
                : "Upcoming"
            }
          </p>

          <button
            className="delete-btn"
            onClick={() =>
              deleteMovie(index)
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