import { useState } from "react";

function ShowManagement() {

  const [shows, setShows] =
    useState([]);

  const [movie, setMovie] =
    useState("");

  const [theatre, setTheatre] =
    useState("");

  const [time, setTime] =
    useState("");

  const addShow = () => {

    setShows([
      ...shows,
      {
        movie,
        theatre,
        time
      }
    ]);

    setMovie("");
    setTheatre("");
    setTime("");
  };

  return (

    <div>

      <h2>Manage Shows</h2>

      <input
        placeholder="Movie"
        value={movie}
        onChange={(e) =>
          setMovie(e.target.value)
        }
      />

      <input
        placeholder="Theatre"
        value={theatre}
        onChange={(e) =>
          setTheatre(e.target.value)
        }
      />

      <input
        placeholder="Time"
        value={time}
        onChange={(e) =>
          setTime(e.target.value)
        }
      />

      <button onClick={addShow}>
        Add Show
      </button>

      {shows.map((show, index) => (

        <div key={index}>

          <p>
            {show.movie}
          </p>

          <p>
            {show.theatre}
          </p>

          <p>
            {show.time}
          </p>

          <hr />

        </div>

      ))}

    </div>
  );
}

export default ShowManagement;