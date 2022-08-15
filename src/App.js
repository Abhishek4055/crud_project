import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./component/pages/Home";
import UserOperation from "./component/pages/UserOperation";
import AboutUser from "./component/pages/AboutUser";
import AboutUs from "./component/pages/AboutUs";
import NavBar from "./header/NavBar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <BrowserRouter>
      <ToastContainer />
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/addUser" element={<UserOperation />} />
        <Route path="/editUser/:id" element={<UserOperation />} />
        <Route path="/aboutUser/:id" element={<AboutUser />} />
        <Route path="/aboutUs" element={<AboutUs />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
