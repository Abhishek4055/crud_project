import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { MDBBtn } from "mdb-react-ui-kit";
function AboutUser() {
  const { id } = useParams();
  const navigate = useNavigate();
  const userInfo = useSelector((state) => state.users.data);
  const singleUser = userInfo.users.find((item) => item.id === +id);
  console.log(singleUser);
  return (
    <div style={{ marginTop: "150px" }}>
      <div
        className="row"
        style={{
          margin: "auto",
          padding: "10px",
          maxWidth: "500px",
          alignContent: "center",
        }}
      >
        <p
          className="col-md-12 fs-3"
          style={{ marginLeft: "115px", color: "purple" }}
        >
          Details About User
        </p>
        <hr />
        <p className="col-md-6 fw-bold"> ID :</p>
        <p className="col-md-6">{singleUser.id}</p>
        <p className="col-md-6  fw-bold "> Name : </p>
        <p className="col-md-6">
          {singleUser.first_name + " " + singleUser.last_name}
        </p>
        <p className="col-md-6  fw-bold"> Contact No. :</p>
        <p className="col-md-6">{singleUser.contact_number}</p>
        <p className="col-md-6  fw-bold"> Email Id :</p>
        <p className="col-md-6">{singleUser.email}</p>
        <p className="col-md-6  fw-bold"> Address :</p>
        <p className="col-md-6"> {singleUser.address}</p>
      </div>
      <MDBBtn
        onClick={() => navigate("/")}
        color="danger"
        style={{ marginLeft: "425px", color: "purple" }}
      >
        {" "}
        Go Back{" "}
      </MDBBtn>
    </div>
  );
}

export default AboutUser;
