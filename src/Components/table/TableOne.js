import React, { useState } from "react";
import Data from "./Data";
import { Button, Table, Form } from "react-bootstrap";
import { GrAddCircle } from "react-icons/gr";
import { AiFillDelete } from "react-icons/ai";
import { FiEdit } from "react-icons/fi";
import "./Table.css";
import EditRow from "./EditRow";
import EditableRow from "./EditableRow";
const TableOne = () => {
  const [users, setUsers] = useState(Data);
  const [EditableRows, setEditAbleRow] = useState(null);
  // const [toggle, setToggle] = useState(true);
  const [active, setActive] = useState(null);

  const [formData, setFormData] = useState({
    firstname: "",
    lastName: "",
    email: "",
  });

  const [EditformData, setEditFormData] = useState();

  // Add Change Handler
  const handlerformchange = (e) => {
    const fieldName = e.target.getAttribute("name");
    const fieldValue = e.target.value;
    const NewformData = { ...formData };
    NewformData[fieldName] = fieldValue;
    setFormData(NewformData);
  };
  // Add Handler
  const AddHandler = (e) => {
    e.preventDefault();
    const newuser = {
      FirstName: formData.firstname,
      LastName: formData.lastName,
      Email: formData.email,
    };
    const newUsers = [...users, newuser];
    setUsers(newUsers);
  };
  // OnChange EditHandler
  const HandlerEditformChange = (e) => {
    e.preventDefault();
    const fieldName = e.target.getAttribute("name");
    const fieldValue = e.target.value;
    const newData = { ...EditformData };
    newData[fieldName] = fieldValue;
    setEditFormData(newData);
  };
  // Edit Handler
  const EditHandler = (e, ID) => {
    document.getElementById(`${ID}_fname`).contentEditable = "true";
    document.getElementById(`${ID}_lname`).contentEditable = "true";
    document.getElementById(`${ID}_email`).contentEditable = "true";
    // setToggle(false);
    setActive(ID);
  };

  // Delete Handler
  const removeuser = (contactId, id) => {
    const filterUser = [...users];
    const index = users.findIndex((e) => users.id === contactId);
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
            <div className="col-md-12 col-sm-12 table_manage_width">
              <form>
                <Table striped bordered hover variant="dark">
                  <thead>
                    <tr>
                      <th>First Name {active}</th>
                      <th>Last Name</th>
                      <th>Username</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {users.map((value, index) => (
                      <>
                        {EditableRows === value.id ? (
                          <EditableRow
                            EditformData={EditformData}
                            HandlerEditformChange={HandlerEditformChange}
                          />
                        ) : (
                          <EditRow
                            value={value}
                            EditHandler={EditHandler}
                            removeuser={removeuser}
                            index={index}
                            setUsers={setUsers}
                            users={users}
                            active={active}
                            setActive={setActive}
                          />
                        )}
                      </>
                    ))}
                  </tbody>
                </Table>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TableOne;
