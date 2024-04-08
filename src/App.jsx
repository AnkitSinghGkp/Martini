import { useEffect, useState } from "react";
import "./App.css";
import { useDispatch } from "react-redux";
import authService from "./appwrite/auth";
import { login, logout } from "./store/authSlice";
import { Footer, Header } from "./components";
import { Outlet } from "react-router-dom";
function App() {
  const [loading, setLaoding] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    authService
      .getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }));
        } else {
          dispatch(logout());
        }
      })
      .finally(() => setLaoding(false));
  }, []);

  return !loading ? (
    <div className="app">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer className="footer" />
    </div>
  ) : (
    <></>
  );
}

export default App;
