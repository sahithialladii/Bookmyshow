import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import "./MovieDetails.css";

function MovieDetails() {

  const { id } = useParams();

  const navigate = useNavigate();

  const [movie, setMovie] = useState(null);

  useEffect(() => {

    axios
      .get(`http://localhost:8080/api/movies/${id}`)
      .then((response) => {

        setMovie(response.data);

      })
      .catch((error) => {

        console.log(error);

      });

  }, [id]);

  if (!movie) {

    return <h2>Loading Movie...</h2>;

  }

  return (

    <div className="movie-details-page">

      <div className="movie-banner">

<img
  className="movie-poster"
  src={
    movie.posterUrl ||
    "https://via.placeholder.com/300x450"
  }
  alt={movie.title}
/>

        <div className="movie-info">

          <h1>{movie.title}</h1>


          <p>
  <strong>Director:</strong> {movie.director}
</p>

<p>
  <strong>Cast:</strong> {movie.cast}
</p>

<p>
  <strong>Certificate:</strong> {movie.certificate}
</p>


          <div className="rating-box">
            ⭐ {movie.rating}/10
          </div>

          <div className="movie-tags">

            <span>
              {movie.language}
            </span>

            <span>
              {movie.status}
            </span>

          </div>

          <p className="movie-meta">
            Genre:  {movie.genre}
          </p>

          <p className="movie-meta">
            Duration:  {movie.duration} mins
          </p>

          <p className="movie-meta">
            Released:
            {" "}
            {movie.releaseDate}
          </p>

          <button
            className="book-btn"
onClick={() =>
  navigate(`/booking/${movie.id}`)
}
          >
            Book Tickets
          </button>
          {
  movie.trailerUrl && (
    <a
      href={movie.trailerUrl}
      target="_blank"
      rel="noreferrer"
      className="book-btn"
      style={{
        marginLeft: "10px"
      }}
    >
      Watch Trailer
    </a>
  )
}

        </div>

      </div>

      <section className="about-section">

        <h2>About the Movie</h2>

        <p>
          {movie.description}
        </p>

      </section>

    </div>

  );
}

export default MovieDetails;