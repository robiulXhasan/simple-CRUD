import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

const handleAddUser = (event) => {
  event.preventDefault();
  const form = event.target;
  const name = form.name.value;
  const email = form.email.value;
  const userInfo = { name, email };
  console.log(userInfo);
  fetch("http://localhost:5000/users", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(userInfo),
  })
    .then((res) => res.json())
    .then((data) => console.log(data));
  form.reset();
};

function App() {
  return (
    <>
      <Form onSubmit={handleAddUser} className="text-start p-5 border ">
        <h3>Simple CRUD</h3>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" name="name" placeholder="Enter your name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label className="">Email address</Form.Label>
          <Form.Control type="email" name="email" placeholder="Enter email" />
        </Form.Group>
        <div className="text-center">
          <Button variant="primary" type="submit">
            Add User
          </Button>
        </div>
        <Link to="/users">See All Users</Link>
      </Form>
    </>
  );
}

export default App;
