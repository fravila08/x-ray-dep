import { useEffect, useState } from "react";
import NavBar from "./components/NavBar";
import {
  Outlet,
  useLoaderData,
  useLocation,
  useNavigate,
} from "react-router-dom";
import "./App.css";

function App() {
  const [user, setUser] = useState(useLoaderData());
  const [itemCreated, setItemCreated] = useState(null)
  const location = useLocation();
  const navigate = useNavigate();


  useEffect(() => {
    let nullUserUrls = ["/login/", "/signup/"];
    let isAllowed = nullUserUrls.includes(location.pathname);
    if (user && isAllowed) {
      navigate("/");
    } else if (!user && !isAllowed) {
      navigate("/");
    }
  }, [location.pathname, user]);

  return (
    <>
      <NavBar setUser={setUser} user={user} />
      <Outlet context={{ user, setUser, itemCreated, setItemCreated}} />
    </>
  );
}

export default App;
