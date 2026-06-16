import { useState, useEffect } from "react";
import axios from "axios";
import "./AdminManagement.css";

function TheatreManagement() {

  const [theatres, setTheatres] = useState([]);

  const [theatre, setTheatre] = useState({
    name: "",
    location: "",
    city: "",
    totalSeats: ""
  });

  const [editingId, setEditingId] =
    useState(null);

  useEffect(() => {
    fetchTheatres();
  }, []);

  const fetchTheatres = () => {

    axios
      .get("http://localhost:8080/api/theatres")
      .then((res) => {

        setTheatres(res.data);

      })
      .catch((err) => {

        console.log(err);

      });

  };

  const handleChange = (e) => {

    setTheatre({
      ...theatre,
      [e.target.name]:
        e.target.value
    });

  };

  const resetForm = () => {

    setTheatre({
      name: "",
      location: "",
      city: "",
      totalSeats: ""
    });

    setEditingId(null);

  };

  const handleSubmit = () => {

    if (
      !theatre.name ||
      !theatre.location ||
      !theatre.city ||
      !theatre.totalSeats
    ) {

      alert(
        "Please fill all fields"
      );

      return;
    }

    if (editingId) {

      axios
        .put(
          `http://localhost:8080/api/theatres/${editingId}`,
          theatre
        )
        .then(() => {

          alert(
            "Theatre Updated"
          );

          fetchTheatres();

          resetForm();

        });

    } else {

      axios
        .post(
          "http://localhost:8080/api/theatres",
          theatre
        )
        .then(() => {

          alert(
            "Theatre Added"
          );

          fetchTheatres();

          resetForm();

        });

    }

  };

  const editTheatre = (t) => {

    setEditingId(t.id);

    setTheatre({
      name: t.name || "",
      location:
        t.location || "",
      city: t.city || "",
      totalSeats:
        t.totalSeats || ""
    });

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });

  };

  const deleteTheatre = (id) => {

    if (
      !window.confirm(
        "Delete this theatre?"
      )
    ) {
      return;
    }

    axios
      .delete(
        `http://localhost:8080/api/theatres/${id}`
      )
      .then(() => {

        alert(
          "Theatre Deleted"
        );

        fetchTheatres();

      })
      .catch((err) => {

        console.log(err);

        alert(
          "Unable to delete theatre"
        );

      });

  };

  return (

    <div className="admin-container">

      <h2>
        {editingId
          ? "Edit Theatre"
          : "Add Theatre"}
      </h2>

      <input
      className="admin-input"
        type="text"
        name="name"
        placeholder="Theatre Name"
        value={theatre.name}
        onChange={handleChange}
      />

      <br /><br />

      <input
      className="admin-input"
        type="text"
        name="location"
        placeholder="Location"
        value={theatre.location}
        onChange={handleChange}
      />

      <br /><br />

      <input
      className="admin-input"
        type="text"
        name="city"
        placeholder="City"
        value={theatre.city}
        onChange={handleChange}
      />

      <br /><br />

      <input
      className="admin-input"
        type="number"
        name="totalSeats"
        placeholder="Total Seats"
        value={theatre.totalSeats}
        onChange={handleChange}
      />

      <br /><br />

      <button
        className="primary-btn"
        onClick={handleSubmit}
      >
        {editingId
          ? "Update Theatre"
          : "Add Theatre"}
      </button>

      {editingId && (

        <button
        className="secondary-btn"
          onClick={resetForm}
          style={{
            marginLeft: "10px"
          }}
        >
          Cancel
        </button>

      )}

      <hr />

      <h2>
        Theatre List
      </h2>

      {theatres.map((t) => (

<div key={t.id} className="admin-card">

          <h3>{t.name}</h3>

          <p>
            Location:
            {" "}
            {t.location}
          </p>

          <p>
            City:
            {" "}
            {t.city}
          </p>

          <p>
            Seats:
            {" "}
            {t.totalSeats}
          </p>

          <button
            className="edit-btn"
            onClick={() =>
              editTheatre(t)
            }
          >
            Edit
          </button>

          <button
            className="delete-btn"
            onClick={() =>
              deleteTheatre(t.id)
            }
            style={{
              marginLeft:
                "10px"
            }}
          >
            Delete
          </button>

        </div>

      ))}

    </div>

  );

}

export default TheatreManagement;