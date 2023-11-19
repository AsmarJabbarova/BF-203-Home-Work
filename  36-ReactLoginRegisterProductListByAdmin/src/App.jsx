import { Outlet } from "react-router-dom";
import Navbar from "./assets/pages/Navbar";
import Productss from "./assets/pages/Productss/Productss";

function App() {
  let userWish = JSON.parse(localStorage.getItem("user"));
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

export default App;
