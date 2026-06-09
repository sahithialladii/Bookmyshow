// import "./Navbar.css";
// import { Link } from "react-router-dom";

// function Navbar() {
//   return (
//     <nav className="navbar">

//       <div className="logo">
//         MovieTicket Pro
//       </div>

//       <input
//         type="text"
//         placeholder="Search Movies"
//         className="search-box"
//       />
//         <Link to="/login">
//       <button className="login-btn">
//           Sign In
//       </button>
//               </Link>

//     </nav>
//   );
// }

// export default Navbar;






import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {

  const user = JSON.parse(
    localStorage.getItem("user")
  );

  return (

    <nav className="navbar">

      <div className="logo">
        MovieTicket Pro
      </div>

      <input
        type="text"
        placeholder="Search Movies"
        className="search-box"
      />

      {user ? (

        <Link to="/profile">

          <button className="profile-btn">
            👤 Profile
          </button>

        </Link>

      ) : (

        <Link to="/login">

          <button className="login-btn">
            Sign In
          </button>

        </Link>

      )}

    </nav>
  );
}

export default Navbar;