// import "./MovieCard.css";

// function MovieCard({movie}) {

//   return (
//     <div className="movie-card">

//       <img
//         src={movie.poster}
//         alt={movie.title}
//       />

//       <h3>{movie.title}</h3>

//       <p>⭐ {movie.rating}</p>

//       <p>{movie.genre}</p>

//     </div>
//   );
// }

// export default MovieCard;




// import { useNavigate } from "react-router-dom";

// function MovieCard({movie}) {

//   const navigate = useNavigate();

//   return (

//     <div
//       onClick={() =>
//         navigate(`/movie/${movie.id}`)
//       }
//     >

//       <img
//         src={movie.poster}
//         alt=""
//       />

//       <h3>{movie.title}</h3>

//     </div>

//   );
// }

// export default MovieCard;






import { useNavigate } from "react-router-dom";
import "./MovieCard.css";

function MovieCard({ movie }) {

  const navigate = useNavigate();

  return (

    <div
      className="movie-card"
      onClick={() =>
        navigate(`/movie/${movie.id}`)
      }
    >

      <img
        src={movie.posterUrl}
        alt={movie.title}
      />

      <h3>{movie.title}</h3>

      <p>⭐ {movie.rating}</p>

      <p>{movie.genre}</p>

    </div>

  );
}

export default MovieCard;