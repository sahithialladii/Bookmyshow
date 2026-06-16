import { useEffect, useState } from "react";
import axios from "axios";

import Navbar from "../components/Navbar/Navbar";
import HeroBanner from "../components/HeroBanner/HeroBanner";
import MovieSection from "../components/MovieSection/MovieSection";
import Footer from "../components/Footer/Footer";

function Home() {

  const [movies, setMovies] = useState([]);

  useEffect(() => {

    axios
      .get("http://localhost:8080/api/movies")
      .then((response) => {

        console.log(response.data);
        setMovies(response.data);

      })
      .catch((error) => {

        console.log(error);

      });

  }, []);

  const nowShowing =
    movies.filter(
      movie =>
        movie.status === "now-showing"
    );

  const upcomingMovies =
    movies.filter(
      movie =>
        movie.status === "upcoming"
    );

  return (

    <>

      <Navbar />

      <HeroBanner />

      <MovieSection
        title="Now Showing"
        movies={nowShowing}
      />

      <MovieSection
        title="Upcoming Movies"
        movies={upcomingMovies}
      />

      <Footer />

    </>

  );
}

export default Home;