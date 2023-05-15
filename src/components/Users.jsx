import React, { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

const Users = () => {
  const usersData = useLoaderData();
  const [users, setUsers] = useState(usersData);
  const handleDelete = (id) => {
    console.log("delete", id);
    fetch(`http://localhost:5000/users/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount > 0) {
          const remaining = users.filter((user) => user._id !== id);
          setUsers(remaining);
          alert("Deleted Successfully!!");
        }
      });
  };
  return (
    <div>
      <h3>{users.length}</h3>
      {users.map((user) => (
        <p key={user._id}>
          {user.name} : {user.email}
          <Link className="ms-3" to={`/update/${user._id}`}>
            Update
          </Link>
          <button
            onClick={() => handleDelete(user._id)}
            className="bg-danger ms-3 rounded text-white"
          >
            X
          </button>
        </p>
      ))}
      <Link to="/">Add User</Link>
    </div>
  );
};

export default Users;
