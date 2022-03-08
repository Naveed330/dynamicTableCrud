import React, { useState } from "react";
import "./Table.css";
import { Button, Table, Form } from "react-bootstrap";
import { AiFillDelete } from "react-icons/ai";
import { FiEdit } from "react-icons/fi";
import { GrAddCircle } from "react-icons/gr";
import Data from "./Data";
const TableCrud = () => {
  //   const [group, setGroup] = useState(1);
  const Tabletemplate = { FirstName: "", LastName: "", Username: "" };
  const [users, setUsers] = useState([Tabletemplate]);
  //   Add User Function
  const AddHandler = () => {
    setUsers([...users, Tabletemplate]);
  };
  //   Change Handler
  const ChangeHandler = (e, index) => {
    const updatedValue = users.map((user, i) =>
      index === i
        ? Object.assign(user, { [e.target.name]: e.target.value })
        : user
    );
    setUsers(updatedValue);
  };
  //   Delete Button
  const removeuser = (index) => {
    const filteredUser = [...users];
    filteredUser.splice(index, 1);
    setUsers(filteredUser);
  };
  return (
    <>
      <div className="row">
        <div className="col-md-12 col-sm-12 d-flex justify-content-end">
          <GrAddCircle
            cursor={"pointer"}
            className="add_btn_class"
            onClick={AddHandler}
          />
        </div>
      </div>

      {users.map((val, index) => (
        <div className="container" key={index}>
          <div className="row">
            <div className="col-md-3">
              <Form.Label htmlFor="inputPassword5">
                <strong>First Name</strong>{" "}
              </Form.Label>
              <Form.Control
                type="Text"
                placeholder="First Name"
                id="inputText"
                aria-describedby="textHelpBlock"
                name="FirstName"
                onChange={(e) => ChangeHandler(e, index)}
                value={val.FirstName}
              />
            </div>
            <div className="col-md-3">
              <Form.Label htmlFor="inputPassword5">
                <strong>Last Name</strong>{" "}
              </Form.Label>
              <Form.Control
                type="Text"
                placeholder="Last Name"
                id="inputText"
                aria-describedby="textHelpBlock"
                name="LastName"
                onChange={(e) => ChangeHandler(e, index)}
                value={val.LastName}
              />
            </div>
            <div className="col-md-3">
              <Form.Label htmlFor="inputPassword5">
                <strong>UserName</strong>
              </Form.Label>
              <Form.Control
                type="Text"
                placeholder="UserName"
                id="inputText"
                aria-describedby="textHelpBlock"
                name="UserName"
                onChange={(e) => ChangeHandler(e, index)}
                value={val.Username}
              />
            </div>
            <div className="col-md-3">
              <Form.Label htmlFor="inputPassword5">.</Form.Label>
              <div>
                <Button variant="success">Edit</Button>
                <Button
                  variant="danger"
                  style={{ marginLeft: "15px" }}
                  onClick={() => removeuser(index)}
                >
                  Delete
                </Button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default TableCrud;
