import React, { useState } from "react";
import Data from "./Data";
import { Button, Table, Form } from "react-bootstrap";
import { GrAddCircle } from "react-icons/gr";
import { AiFillDelete } from "react-icons/ai";
import { FiEdit } from "react-icons/fi";
import "./Table.css";
import { nanoid } from "nanoid";
const TableOne = () => {
  const [users, setUsers] = useState(Data);
  const [formData, setFormData] = useState({
    firstname: "",
    lastName: "",
    email: "",
  });
  const handlerformchange = (e) => {
    const fieldName = e.target.getAttribute("name");

    const fieldValue = e.target.value;
    const NewformData = { ...formData };
    console.log("fieldName:", fieldName, " kk:", NewformData);
    NewformData[fieldName] = fieldValue;
    console.log("newformdata", NewformData);
    setFormData(NewformData);
  };
  const AddHandler = (e) => {
    e.preventDefault();
    const newuser = {
      // id:nanoid(),
      FirstName: formData.firstname,
      LastName: formData.lastName,
      Email: formData.email,
    };
    console.log("newuser", newuser);
    const newUsers = [...users, newuser];
    setUsers(newUsers);
  };
  const removeuser = (index) => {
    const filterUser = [...users];
    filterUser.splice(index, 1);
    setUsers(filterUser);
  };
  return (
    <>
      <div className="container-fluid">
        <div className="container">
          <div className="row mb-4 ">
            <div className="col-md-3">
              <Form.Control
                type="text"
                name="firstname"
                onChange={handlerformchange}
                placeholder="First Name"
              />
            </div>
            <div className="col-md-3">
              <Form.Control
                type="text"
                name="lastName"
                onChange={handlerformchange}
                placeholder="Last Name"
              />
            </div>
            <div className="col-md-3">
              <Form.Control
                type="email"
                onChange={handlerformchange}
                name="email"
                placeholder="Enter email"
              />
            </div>
            <div className="col-md-3">
              <Button variant="primary" onClick={AddHandler}>
                ADD
              </Button>
            </div>
          </div>

          <div className="row">
            <div className="col-md-12 col-sm-12">
              <Table striped bordered hover variant="dark">
                <thead>
                  <tr>
                    {/* <th>#</th> */}
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Username</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((value, index) => (
                    <tr>
                      {/* <td> {value.id} </td> */}
                      <td>{value.FirstName} </td>
                      <td>{value.LastName} </td>
                      <td>{value.Email} </td>
                      <td>
                        <FiEdit size={20} color="green" cursor={"pointer"} />
                        <AiFillDelete
                          size={25}
                          color="red"
                          cursor={"pointer"}
                          onClick={() => removeuser(index)}
                          style={{ marginLeft: "10px" }}
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TableOne;
