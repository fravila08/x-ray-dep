import { useEffect, useState, useRef } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import NavBar from "./components/NavBar";
import {
  Outlet,
  useLoaderData,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { api } from "./utilities";

function App() {
  const [user, setUser] = useState(useLoaderData());
  const location = useLocation();
  const navigate = useNavigate();

  const test_connection = async () => {
    let response = await api.get("test/");
    // console.log(response.data)
  };

  useEffect(() => {
    let nullUserUrls = ["/login/", "/signup/"];
    let isAllowed = nullUserUrls.includes(location.pathname);
    if (user && isAllowed) {
      navigate("/");
    } else if (!user && !isAllowed) {
      navigate("/");
    } 
  }, [location.pathname, user]);

  useEffect(() => {
    // console.log(window.location.href)
    console.log(user);
  }, [user]);

  return (
    <>
      <NavBar setUser={setUser} user={user} />
      <Outlet context={{ user, setUser }} />
    </>
  );
}

export default App;
