import React from "react";
import { Button } from "react-bootstrap";

const EditableRow = ({EditformData,HandlerEditformChange}) => {
  return (
    <>
      <tr>
        <td>
          <input
            type="text"
            placeholder="First Name"
            required="required"
            name="firstname"
            value={EditformData.FirstName}
            onChange={HandlerEditformChange}
          />
        </td>
        <td>
          <input
            type="text"
            placeholder="Last Name"
            required="required"
            name="lastname"
            value={EditformData.LastName}
            onChange={HandlerEditformChange}
          />
        </td>
        <td>
          <input
            type="text"
            placeholder="Email"
            required="required"
            onChange={HandlerEditformChange}
            value={EditformData.Email}
            name="email"
          />
        </td>
        <td>
        </td>
      </tr>
    </>
  );
};

export default EditableRow;
