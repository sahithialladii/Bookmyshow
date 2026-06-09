// import Navbar from "../components/Navbar/Navbar";
// import HeroBanner from "../components/HeroBanner/HeroBanner";
// import MovieSection from "../components/MovieSection/MovieSection";
// import Footer from "../components/Footer/Footer";

// function Home() {

//   const movies = [

//     {
//       id:1,
//       title:"Avengers",
//       rating:8.9,
//       genre:"Action",
//       language:"English",
//       status:"now-showing",
//       poster:"https://picsum.photos/220/320?1"
//     },

//     {
//       id:2,
//       title:"Pushpa",
//       rating:8.5,
//       genre:"Action",
//       language:"Telugu",
//       status:"now-showing",
//       poster:"https://picsum.photos/220/320?2"
//     },

//     {
//       id:3,
//       title:"KGF",
//       rating:8.7,
//       genre:"Action",
//       language:"Kannada",
//       status:"now-showing",
//       poster:"https://picsum.photos/220/320?3"
//     },

//     {
//       id:4,
//       title:"Avatar 3",
//       rating:9.1,
//       genre:"Sci-Fi",
//       language:"English",
//       status:"upcoming",
//       poster:"https://picsum.photos/220/320?4"
//     },

//     {
//       id:5,
//       title:"Kalki 2",
//       rating:9.0,
//       genre:"Sci-Fi",
//       language:"Telugu",
//       status:"upcoming",
//       poster:"https://picsum.photos/220/320?5"
//     }

//   ];

//   const nowShowing =
//     movies.filter(
//       movie =>
//         movie.status === "now-showing"
//     );

//   const upcomingMovies =
//     movies.filter(
//       movie =>
//         movie.status === "upcoming"
//     );

//   return (

//     <>

//       <Navbar />

//       <HeroBanner />

//       <MovieSection
//         title="Now Showing"
//         movies={nowShowing}
//       />

//       <MovieSection
//         title="Upcoming Movies"
//         movies={upcomingMovies}
//       />

//       <Footer />

//     </>

//   );
// }

// export default Home;







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