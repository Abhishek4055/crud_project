import React from "react";
import { MDBTypography } from "mdb-react-ui-kit";

function AboutUs() {
  return (
    <div style={{ marginTop: "100px" }}>
      <MDBTypography note noteColor="primary">
        Hey Guys,this is full CRUD Application with the help of React.js. I have
        use Redux and used Saga middleware to perform all the Crud operation and
        used axios to fetch the API. In this react application i have also added
        routing facility as well.
      </MDBTypography>
    </div>
  );
}

export default AboutUs;
