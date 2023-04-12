import { Link } from "react-router-dom";
import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";
import { useAuthContext2 } from "../hooks/useAuthContext2";
import { useAuthContext3 } from "../hooks/useAuthContext3";
const Navbar = () => {
  const { logout } = useLogout();
  const { user } = useAuthContext();
  const { admin } = useAuthContext2();
  const { clerk } = useAuthContext3();
  const handleClick = () => {
    logout();
  };
  const handleChat = () => {};

  console.log(user,"inside authcontext");
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
          {user && !admin && !clerk && (
            <div>
              <span>{user.email}</span>
              <span>{user.year}</span>
              <Link to="/fees">FeePayment</Link>
              <Link to="/blocks">SeeAllotedRooms</Link>
              <Link to="/allot">Allotment-list</Link>
              {user.year != 2022 &&
              //  user.feesUpload!=1 && 
               <Link to="/feesupload">Uploads </Link>}
              <Link to="/complainclerk">ComplainClerk</Link>
              {user.year != 2022 && user.feesUpload== 1 && 
              // user.alloted!=1 &&
              <Link to="/home">SY</Link>}
              {/* <Link to="/home">SY</Link> */}
              <Link to="/pass">Pass</Link>
              <Link to="/rules">Hostel Rules</Link>
              {/* <Link to="/notification">Notification</Link> */}

              {/* <button onClick={handleChat}>Chat</button> */}
              {/* <Link to="/chatapp">Chat</Link> */}
              <Link to="/Complains">Complaints</Link>
              <button onClick={handleClick}>Log out</button>
            </div>
          )}
        </nav>

        {/* <nav>

          {!user && !clerk && !admin && (
            <div>
              <Link to="/login">Login</Link>
              <Link to="/register">Register</Link>
              <Link to="/adminlogin">Admin-Login</Link>
              <Link to="/clerklogin">Clerk-Login</Link>
              <Link to="/adminsignup">Admin-Signup</Link>
              <Link to="/clerksignup">CLerk-Signup</Link>
            </div>
          )}
        </nav> */}
      </div>
    </header>
  );
};

export default Navbar;
