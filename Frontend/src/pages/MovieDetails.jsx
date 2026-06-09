


// import { useNavigate } from "react-router-dom";
// import "./MovieDetails.css";

// function MovieDetails() {

//   const navigate = useNavigate();

//   return (
//     <div className="movie-details-page">

//       <div className="movie-banner">

//         <img
//           className="movie-poster"
//           src="https://picsum.photos/300/450"
//           alt="Movie Poster"
//         />

//         <div className="movie-info">

//           <h1>Avengers: Endgame</h1>

//           <div className="rating-box">
//             ⭐ 8.9/10 (1.2M Votes)
//           </div>

//           <div className="movie-tags">
//             <span>U/A</span>
//             <span>English</span>
//             <span>3D</span>
//             <span>IMAX</span>
//           </div>

//           <p className="movie-meta">
//             Action • Adventure • Sci-Fi
//           </p>

//           <p className="movie-meta">
//             3h 1m • Released: 26 Apr 2019
//           </p>

//           <button
//             className="book-btn"
//             onClick={() => navigate("/booking")}
//           >
//             Book Tickets
//           </button>

//         </div>

//       </div>

//       <section className="about-section">
//         <h2>About the Movie</h2>

//         <p>
//           After the devastating events of Infinity War,
//           the Avengers assemble once more to reverse
//           Thanos' actions and restore balance to the universe.
//         </p>
//       </section>

//       <section className="cast-section">
//         <h2>Cast</h2>

//         <div className="cast-list">

//           <div className="cast-card">
//             <img
//               src="https://picsum.photos/100?1"
//               alt=""
//             />
//             <p>Robert Downey Jr.</p>
//           </div>

//           <div className="cast-card">
//             <img
//               src="https://picsum.photos/100?2"
//               alt=""
//             />
//             <p>Chris Evans</p>
//           </div>

//           <div className="cast-card">
//             <img
//               src="https://picsum.photos/100?3"
//               alt=""
//             />
//             <p>Scarlett Johansson</p>
//           </div>

//         </div>
//       </section>

//       <section className="crew-section">
//         <h2>Crew</h2>

//         <div className="crew-grid">

//           <div>
//             <strong>Director</strong>
//             <p>Anthony Russo</p>
//           </div>

//           <div>
//             <strong>Producer</strong>
//             <p>Kevin Feige</p>
//           </div>

//           <div>
//             <strong>Music</strong>
//             <p>Alan Silvestri</p>
//           </div>

//         </div>
//       </section>

//     </div>
//   );
// }

// export default MovieDetails;







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
            {movie.genre}
          </p>

          <p className="movie-meta">
            {movie.duration}
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