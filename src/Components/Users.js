import React, { useState, useEffect } from "react";
import getUsers from "../ApiService";

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers()
      .then((data) => setUsers(data))
      .then(() => console.log("users: ", users));
  }, []);

  return (
    <div className='users-container'>
      {users.map((user) => (
        <p key={user.id} name={user.name}>
          {user.name}
        </p>
      ))}
    </div>
  );
}

export default Users;
