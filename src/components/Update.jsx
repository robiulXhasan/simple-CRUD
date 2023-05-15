import React from "react";
import { Button, Form } from "react-bootstrap";
import { Link, useLoaderData } from "react-router-dom";

const Update = () => {
  const loaderData = useLoaderData();

  const handleUpdateUser = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const updatedUser = { name, email };
    fetch(`http://localhost:5000/users/${loaderData._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedUser),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          alert("Successfully Updated!!!");
        }
      });
  };
  return (
    <Form onSubmit={handleUpdateUser} className="text-start p-5 border ">
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          name="name"
          defaultValue={loaderData?.name}
          placeholder="Enter your name"
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label className="">Email address</Form.Label>
        <Form.Control
          type="email"
          name="email"
          defaultValue={loaderData?.email}
          placeholder="Enter email"
        />
      </Form.Group>
      <div className="text-center">
        <Button variant="primary" type="submit">
          Update User
        </Button>
      </div>
      <Link to="/users">See All Users</Link>
    </Form>
  );
};

export default Update;
