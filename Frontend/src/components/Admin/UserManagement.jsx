import { useEffect, useState } from "react";
import axios from "axios";

function UserManagement() {

  const [users, setUsers] =
    useState([]);

  useEffect(() => {

    axios
      .get("http://localhost:8080/api/users")
      .then((response) => {

        setUsers(response.data);

      })
      .catch((error) => {

        console.log(error);

      });

  }, []);

  return (

    <div>

      <h2>All Users</h2>

      <table
        border="1"
        cellPadding="10"
        style={{
          width:"100%",
          borderCollapse:"collapse"
        }}
      >

        <thead>

          <tr>

            <th>ID</th>

            <th>Username</th>

            <th>Email</th>

            <th>Phone</th>

          </tr>

        </thead>

        <tbody>

          {users.map((user) => (

            <tr key={user.id}>

              <td>{user.id}</td>

              <td>{user.username}</td>

              <td>{user.email}</td>

              <td>{user.phoneNumber}</td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>

  );
}

export default UserManagement;