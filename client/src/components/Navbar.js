import { Link } from "react-router-dom";
import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";

const Navbar = () => {
  const { logout } = useLogout();
  const { user } = useAuthContext();

  const handleClick = () => {
    logout();
  };
  const handleChat = () => {};

  console.log(user);
  return (
    <header>
      
      <div className="container">
        
        <a href="#" className="flex items-center">
          <img
            src="https://img.collegepravesh.com/2016/01/VJTI-Mumbai-Logo.png"
            className="h-6 mr-3 sm:h-10"
            alt="Flowbite Logo"
          />
          <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
            <Link to="/">
              <h1>VJTI Hostel Portal</h1>
            </Link>
          </span>
        </a>

        <nav>
          {user && (
            <div>
              <span>{user.email}</span>
              <span>{user.year}</span>
              <Link to="/fees">FeePayment</Link>
              <Link to="/allot">Allotment-list</Link>
              {user.year!= 2022 && <Link to="/home">SY</Link>}
              <Link to="/pass">Pass</Link>
              <Link to="/rules">Hostel Rules</Link>
              {/* <Link to="/notification">Notification</Link> */}

              {/* <button onClick={handleChat}>Chat</button> */}
              {/* <Link to="/chatapp">Chat</Link> */}
              <Link to="/Complains">Complaints</Link>
              <button onClick={handleClick}>Log out</button>
            </div>
          )}

          {!user && (
            <div>
              <Link to="/login">Login</Link>
              <Link to="/signup">Signup</Link>
              <Link to="/adminlogin">Admin-Login</Link>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
