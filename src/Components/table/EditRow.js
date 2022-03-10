import React, { useState } from "react";
import { GrAddCircle } from "react-icons/gr";
import { AiFillDelete } from "react-icons/ai";
import { FiEdit } from "react-icons/fi";
import Data from "./Data";
import { Button } from "react-bootstrap";

const EditRow = ({index,value,EditHandler,removeuser,active,setActive,setUsers,users,}) => {
  const UpdateHanlder = (ID) => {
    setUsers(
      users.map((itm, index) => {
        if (ID === index) {
          itm.FirstName = document.getElementById(`${ID}_fname`).innerHTML;
          itm.LastName = document.getElementById(`${ID}_lname`).innerHTML;
          itm.Email = document.getElementById(`${ID}_email`).innerHTML;
        }
        return itm;
      })
    );
    document.getElementById(`${ID}_fname`).contentEditable = "false";
    document.getElementById(`${ID}_lname`).contentEditable = "false";
    document.getElementById(`${ID}_email`).contentEditable = "false";
    setActive(null);
  };
  return (
    <>
      <tr>
        <td id={`${index}_fname`}>{value.FirstName} </td>
        <td id={`${index}_lname`}>{value.LastName} </td>
        <td id={`${index}_email`}>{value.Email} </td>
        <td>
          {!(active === index) ? (
            <FiEdit
              size={20}
              color="green"
              cursor={"pointer"}
              onClick={(e) => EditHandler(e, index)}
            />
          ) : (
            <Button variant="primary" onClick={() => UpdateHanlder(index)}>
              Update
            </Button>
          )}

          <AiFillDelete
            size={25}
            color="red"
            cursor={"pointer"}
            style={{ marginLeft: "15px" }}
            onClick={(e) => removeuser(e, index)}
          />
        </td>
      </tr>
    </>
  );
};

export default EditRow;
