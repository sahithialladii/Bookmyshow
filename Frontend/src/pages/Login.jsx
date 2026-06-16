import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./Login.css";

function Login() {

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  const navigate =
    useNavigate();

  const handleLogin = async (e) => {

    e.preventDefault();

    // Admin Login

    if (
      email === "admin@gmail.com" &&
      password === "admin123"
    ) {

      localStorage.setItem(
        "admin",
        "true"
      );

      navigate("/admin/dashboard");

      return;
    }

    try {

      const response =
        await axios.post(
          "http://localhost:8080/api/users/login",
          {
            email,
            password
          }
        );

      localStorage.setItem(
        "user",
        JSON.stringify(
          response.data
        )
      );

      navigate("/");

    } catch (error) {

      alert(
        "Invalid Email or Password"
      );

    }
  };

  return (

    <div className="login-container">

      <form
        className="login-form"
        onSubmit={handleLogin}
      >

        <h2>Sign In</h2>

        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) =>
            setEmail(
              e.target.value
            )
          }
        />

        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) =>
            setPassword(
              e.target.value
            )
          }
        />

        <button
          type="submit"
          className="login-btn"
        >
          Login
        </button>



        <p className="signup-text">

          Don't have an account?

          <Link
            to="/register"
            className="signup-link"
          >
            Sign Up
          </Link>

        </p>

      </form>

    </div>

  );
}

export default Login;