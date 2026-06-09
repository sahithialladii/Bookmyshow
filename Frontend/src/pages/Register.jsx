

// import "./Register.css";
// import { Link } from "react-router-dom";

// function Register() {
//   return (
//     <div className="register-container">

//       <form className="register-form">

//         <h2>Create Account</h2>

//         <label>Username</label>
//         <input
//           type="text"
//           placeholder="Enter your username"
//         />

//         <label>Email</label>
//         <input
//           type="email"
//           placeholder="Enter your email"
//         />

//         <label>Password</label>
//         <input
//           type="password"
//           placeholder="Enter your password"
//         />

//         <label>Confirm Password</label>
//         <input
//           type="password"
//           placeholder="Confirm your password"
//         />

//         <label>Phone Number</label>
//         <input
//           type="tel"
//           placeholder="Enter your phone number"
//         />

//         <button
//           type="submit"
//           className="register-btn"
//         >
//           Register
//         </button>

//         <p className="signin-text">
//           Already have an account?
//           <Link to="/login" className="signin-link">
//             Sign In
//           </Link>
//         </p>

//       </form>

//     </div>
//   );
// }

// export default Register;



import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./Register.css";

function Register() {

  const navigate = useNavigate();

  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
    phoneNumber: ""
  });

  const handleChange = (e) => {

    setUser({
      ...user,
      [e.target.name]: e.target.value
    });

  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      await axios.post(
        "http://localhost:8080/api/users/register",
        user
      );

      alert("Registration Successful");

      navigate("/login");

    } catch (error) {

      console.log(error);

      alert("Registration Failed");

    }
  };

  return (

    <div className="register-container">

      <form
        className="register-form"
        onSubmit={handleSubmit}
      >

        <h2>Create Account</h2>

        <input
          type="text"
          name="username"
          placeholder="Username"
          onChange={handleChange}
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
        />

        <input
          type="text"
          name="phoneNumber"
          placeholder="Phone Number"
          onChange={handleChange}
        />

        <button
          type="submit"
          className="register-btn"
        >
          Register
        </button>

        <p className="signin-text">

          Already have an account?

          <Link
            to="/login"
            className="signin-link"
          >
            Sign In
          </Link>

        </p>

      </form>

    </div>

  );
}

export default Register;