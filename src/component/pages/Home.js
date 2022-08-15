import React, { useEffect, useState } from "react";
import {
  MDBTable,
  MDBTableHead,
  MDBTableBody,
  MDBBtn,
  MDBIcon,
  MDBSpinner,
  MDBTooltip,
} from "mdb-react-ui-kit";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser, getUser } from "../../redux/action";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

function Home() {
  const [userState, setUserState] = useState([]);
  const dispatch = useDispatch();
  const usersData = useSelector((state) => state.users.data);

  if (usersData.loading) {
    <MDBSpinner style={{ marginTop: "150px" }} role="status">
      <span className="visually-hidden">Loading....</span>
    </MDBSpinner>;
  }

  useEffect(() => {
    if (usersData) {
      setUserState(usersData.users);
    }
  }, [usersData]);

  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

  const deleteHandler = (id) => {
    console.log(id);
    if (window.confirm("Are you sure want to delete the User Details?")) {
      dispatch(deleteUser(id));
      toast.success("User Deleted Successfully");
    }
  };

  return (
    <div
      className="container"
      style={{ marginTop: "100px", borderRadius: "20px" }}
    >
      <MDBTable>
        <MDBTableHead class="p-3 mb-2 bg-primary bg-gradient text-white">
          <tr>
            <th scope="col">S.No.</th>
            <th scope="col">Name</th>
            <th scope="col">Contact No</th>
            <th scope="col">Email</th>
            <th scope="col">Address</th>
            <th scope="col">Actions</th>
          </tr>
        </MDBTableHead>

        {userState &&
          userState?.map((item, index) => {
            return (
              <MDBTableBody
                key={item.id}
                // class="p-3 mb-2 bg-info bg-gradient text-white"
              >
                <tr>
                  <th scope="row"> {index + 1}</th>
                  <td> {item.first_name + " " + item.last_name} </td>
                  <td> {item.contact_number}</td>
                  <td> {item.email}</td>
                  <td> {item.address}</td>
                  <td>
                    <Link to={`/aboutUser/${item.id}`}>
                      <MDBTooltip title={`About  ${item.first_name}`} tag="a">
                        <MDBIcon
                          fas
                          icon="user"
                          size="lg"
                          style={{
                            color: "blue",
                            marginBottom: "10px",
                            marginRight: "22px",
                          }}
                        />
                      </MDBTooltip>
                    </Link>
                    <Link to={`/editUser/${item.id}`}>
                      <MDBTooltip title="Edit" tag="a">
                        <MDBIcon
                          fas
                          icon="edit"
                          size="lg"
                          style={{
                            color: "green",
                            marginBottom: "10px",
                            marginRight: "20px",
                          }}
                        />
                      </MDBTooltip>
                    </Link>
                    <MDBBtn
                      className="m-1"
                      tag="a"
                      color="none"
                      onClick={() => deleteHandler(item.id)}
                    >
                      <MDBTooltip title="Delete" tag="a">
                        <MDBIcon
                          fas
                          icon="trash-alt"
                          size="lg"
                          style={{ color: "red" }}
                        />
                      </MDBTooltip>
                    </MDBBtn>
                  </td>
                </tr>
              </MDBTableBody>
            );
          })}
      </MDBTable>
    </div>
  );
}

export default Home;
