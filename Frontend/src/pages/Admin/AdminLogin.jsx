import { useNavigate } from "react-router-dom";
import "./AdminLogin.css";

function AdminLogin() {

  const navigate = useNavigate();

  const handleLogin = () => {

    localStorage.setItem(
      "admin",
      JSON.stringify({
        email: "admin@gmail.com"
      })
    );

    navigate("/admin/dashboard");
  };

  return (

    <div className="admin-login-container">

      <form className="admin-login-form">

        <h2>Admin Login</h2>

        <input
          type="email"
          placeholder="Admin Email"
        />

        <input
          type="password"
          placeholder="Password"
        />

        <button
          type="button"
          onClick={handleLogin}
        >
          Login
        </button>

      </form>

    </div>
  );
}

export default AdminLogin;