// // import { useState } from "react";

// // function TheatreManagement() {

// //   const [theatres, setTheatres] =
// //     useState([
// //       "PVR Cinemas",
// //       "INOX",
// //       "AMB Cinemas"
// //     ]);

// //   const [theatre, setTheatre] =
// //     useState("");

// //   const addTheatre = () => {

// //     if(theatre.trim() === "") return;

// //     setTheatres([
// //       ...theatres,
// //       theatre
// //     ]);

// //     setTheatre("");
// //   };

// //   return (

// //     <div>

// //       <h2>Manage Theatres</h2>

// //       <input
// //         type="text"
// //         placeholder="Theatre Name"
// //         value={theatre}
// //         onChange={(e) =>
// //           setTheatre(e.target.value)
// //         }
// //       />

// //       <button onClick={addTheatre}>
// //         Add Theatre
// //       </button>

// //       <ul>

// //         {theatres.map((t, index) => (

// //           <li key={index}>
// //             {t}
// //           </li>

// //         ))}

// //       </ul>

// //     </div>
// //   );
// // }

// // export default TheatreManagement;










// import { useState, useEffect } from "react";
// import axios from "axios";

// function TheatreManagement() {

//   const [theatres, setTheatres] = useState([]);
//   const [theatre, setTheatre] = useState("");

//   // Load theatres from backend
//   useEffect(() => {
//     axios.get("http://localhost:8080/api/theatres")
//       .then((res) => {
//         setTheatres(res.data);
//       })
//       .catch((err) => {
//         console.log("Error fetching theatres:", err);
//       });
//   }, []);

//   // Add theatre to backend
//   const addTheatre = () => {

//     if (theatre.trim() === "") return;

//     const newTheatre = {
//       name: theatre
//     };

//     axios.post("http://localhost:8080/api/theatres", newTheatre)
//       .then((res) => {

//         // update UI with backend response
//         setTheatres([...theatres, res.data]);

//         setTheatre("");
//       })
//       .catch((err) => {
//         console.log("Error adding theatre:", err);
//       });
//   };

//   return (
//     <div>

//       <h2>Manage Theatres</h2>

//       <input
//         type="text"
//         placeholder="Theatre Name"
//         value={theatre}
//         onChange={(e) => setTheatre(e.target.value)}
//       />

//       <button onClick={addTheatre}>
//         Add Theatre
//       </button>

//       <ul>
//         {theatres.map((t) => (
//           <li key={t.id}>
//             {t.name}
//           </li>
//         ))}
//       </ul>

//     </div>
//   );
// }

// export default TheatreManagement;









import { useState, useEffect } from "react";
import axios from "axios";

function TheatreManagement() {

  const [theatres, setTheatres] = useState([]);
  const [theatre, setTheatre] = useState("");

  // GET from backend
  useEffect(() => {
    axios.get("http://localhost:8080/api/theatres")
      .then((res) => setTheatres(res.data))
      .catch((err) => console.log(err));
  }, []);

  // POST to backend
  const addTheatre = () => {

    if (theatre.trim() === "") return;

    const newTheatre = {
      name: theatre
    };

    axios.post("http://localhost:8080/api/theatres", newTheatre)
      .then((res) => {

        setTheatres([...theatres, res.data]);
        setTheatre("");

      })
      .catch((err) => {
        console.log("Error adding theatre:", err);
      });
  };

  return (
    <div>

      <h2>Manage Theatres</h2>

      <input
        type="text"
        placeholder="Theatre Name"
        value={theatre}
        onChange={(e) => setTheatre(e.target.value)}
      />

      <button onClick={addTheatre}>
        Add Theatre
      </button>

      <ul>
        {theatres.map((t) => (
          <li key={t.id}>{t.name}</li>
        ))}
      </ul>

    </div>
  );
}

export default TheatreManagement;