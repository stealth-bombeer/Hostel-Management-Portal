import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useAuthContext } from "./hooks/useAuthContext";
import { useAuthContext2 } from "./hooks/useAuthContext2";
import AdminHome from "./pages/AdminHome";
import AdminLogin from "./pages/AdminLogin";
import AdminSignup from "./pages/AdminSignup";
// pages & components
import AdminNavbar from "./components/AdminNavbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Mer from "./pages/Mer";
import Navbar from "./components/Navbar";
import Fees from "./context/Fees";
import Complains from "./context/Complains";
import ChatApp from "./components/ChatApp";
import Chat from "./components/Chat";
import AllotmentList from "./components/AllotmentList";
import io from "socket.io-client";
import Pass from "./pages/Pass";
import Al from "./components/Al";
import Notification from "./pages/Notification";
import HomeMain from "./pages/HomeMain";
import Rules from "./pages/Rules";

const socket = io.connect("http://localhost:4000");

function App() {
  const { user } = useAuthContext();
  const { admin } = useAuthContext2();
  return (
    <div className="App">
      <BrowserRouter>
        {admin ? <AdminNavbar /> : <Navbar />}
        <div className="pages">
          <Routes>
            <Route
              path="/"
              element={user ? <HomeMain/> : <Navigate to="/login" />}
            />
            <Route
              path="/login"
              element={!user ? <Login /> : <Navigate to="/" />}
            />
            <Route
              path="/signup"
              element={!user ? <Signup /> : <Navigate to="/" />}
            />

            <Route
              path="/fees"
              element={user ? <Fees /> : <Navigate to="/login" />}
            />
            <Route path="/allot" element={<AllotmentList />} />
            <Route
              path="/home"
              element={user ? <Home /> : <Navigate to="/login" />}
            />
            <Route
              path="/chatapp"
              element={
                user ? <ChatApp socket={socket} /> : <Navigate to="/login" />
              }
            />

            <Route
              path="/complains"
              element={user ? <Complains /> : <Navigate to="/login" />}
            />
            <Route
              path="/pass"
              element={user ? <Pass /> : <Navigate to="/login" />}
            />
            <Route
              path="/notification"
              element={user ? <Notification /> : <Navigate to="/login" />}
            />
            <Route path="/admin/mer" element={admin ? <Mer /> : <Navigate to="/adminlogin" />} />

            <Route
              path="/rules"
              element={user ? <Rules /> : <Navigate to="/login" />}
            />
            <Route
              path="/admin/ad"
              element={admin ? <AdminHome /> : <Navigate to="/adminlogin" />}
            />
            <Route
              path="/adminlogin"
              element={!admin ? <AdminLogin /> : <Navigate to="/admin/ad" />}
            />
            <Route
              path="/adminsignup"
              element={!admin ? <AdminSignup /> : <Navigate to="/admin/ad" />}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
