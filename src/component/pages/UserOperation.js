import React, { useEffect, useState } from "react";
import { MDBInput, MDBBtn, MDBValidation } from "mdb-react-ui-kit";
import { useDispatch, useSelector } from "react-redux";
import { getCreateUser, updateUser } from "../../redux/action";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
const initialState = {
  first_name: "",
  last_name: "",
  contact_number: "",
  email: "",
  address: "",
};
function UserOperation() {
  const [formState, setFormState] = useState(initialState);
  const [editable, setEditable] = useState(false);
  const { first_name, last_name, contact_number, email, address } = formState;

  const dispatch = useDispatch();
  const createdData = useSelector((state) => state.users.data);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      setEditable(true);
      const singleUser = createdData.users.find((item) => item.id === +id);
      setFormState({ ...singleUser });
    } else {
      setEditable(false);
      setFormState(initialState);
    }
  }, [id, createdData]);

  const submitHandler = (e) => {
    e.preventDefault();
    if (first_name && last_name && contact_number && email && address) {
      if (!editable) {
        dispatch(getCreateUser(formState));
        toast.success("User Created successfully");
        setTimeout(() => navigate("/"), 500);
      } else {
        dispatch(updateUser({ id, formState }));
        setEditable(false);
        toast.success("User updated successfully");
        setTimeout(() => navigate("/"), 500);
      }
    }
  };

  useEffect(() => {
    createdData.users.error && toast.success(createdData.users.error);
  }, [createdData.users.error]);

  const onChangeHandler = (e) => {
    let { name, value } = e.target;
    setFormState({ ...formState, [name]: value });
  };

  return (
    <MDBValidation
      className="row-g-3"
      style={{ marginTop: "150PX" }}
      noValidate
      onSubmit={submitHandler}
    >
      <p
        className="fs-2 fw-bold"
        style={{ marginLeft: "415px", color: "purple" }}
      >
        {!editable ? "Add User Details" : "Update User Details"}
      </p>
      <div
        style={{
          margin: "auto",
          padding: "10px",
          maxWidth: "500px",
          alignContent: "center",
        }}
      >
        <MDBInput
          label="First Name"
          type="text"
          name="first_name"
          value={first_name || ""}
          onChange={onChangeHandler}
          required
          novalidation="please Enter First Name"
          invalid
        />
        <br />
        <MDBInput
          label="Last Name"
          type="text"
          name="last_name"
          value={last_name || ""}
          onChange={onChangeHandler}
          required
          novalidation="please Enter Last Name"
          invalid
        />
        <br />
        <MDBInput
          label=" Contact Number"
          type="number"
          name="contact_number"
          value={contact_number || ""}
          onChange={onChangeHandler}
          required
          novalidation="please Enter Contact Number"
          invalid
        />
        <br />
        <MDBInput
          label="Email Id"
          type="email"
          name="email"
          value={email || ""}
          onChange={onChangeHandler}
          required
          novalidation="please Enter Email"
          invalid
        />
        <br />
        <MDBInput
          label="Address"
          type="text"
          name="address"
          value={address || ""}
          onChange={onChangeHandler}
          required
          novalidation="please Enter Address"
          invalid
        />
        <br />
        <div className="col-12">
          <MDBBtn type="submit"> {!editable ? "Add " : "Update"} </MDBBtn>
        </div>
      </div>
    </MDBValidation>
  );
}

export default UserOperation;
