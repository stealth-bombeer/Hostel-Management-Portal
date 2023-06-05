import { Link } from "react-router-dom";
import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";
import { useAuthContext2 } from "../hooks/useAuthContext2";
import { useAuthContext3 } from "../hooks/useAuthContext3";
// import '@fortawesome/fontawesome-free/css/all.css';
const Navbar = () => {
  const { logout } = useLogout();
  const { user } = useAuthContext();
  const { admin } = useAuthContext2();
  const { clerk } = useAuthContext3();
  const handleClick = () => {
    logout();
  };
  const menuOnClick=()=>{
    document.getElementById("menu-bar").classList.toggle("change");
  document.getElementById("nav").classList.toggle("change");
  document.getElementById("menu-bg").classList.toggle("change-bg");
  document.getElementById("menu-bg").classList.toggle("change-opacity");
  }
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
        <div id="menu2">
          <nav id="credMenu">
            {user && !admin &&!clerk && (
              <ul>
             <li><i class="fas fa-envelope"></i> {user.email}</li>
            <li><i class="fas fa-calendar-alt"></i> {user.year}</li>
              </ul>
            )}
          </nav>
        </div>
        <div id="menu">
        <div id="menu-bar" onClick={menuOnClick}>
          <div id="bar1" class="bar"></div>
          <div id="bar2" class="bar"></div>
          <div id="bar3" class="bar"></div>
        </div>
        <nav className="nav" id="nav">
          {user && !admin && !clerk && (
            <div>
               <li><Link to="/viewrooms">SeeAllotedRooms</Link></li>
               {user.year != 2022 &&
               user.feesUpload!=1 && 
               <li><Link to="/feesupload">Uploads </Link></li>}
                <li><Link to="/complainclerk">ComplainClerk</Link></li>
              {user.year != 2022 && user.feesUpload== 1 &&
              //  user.alloted!=1 &&
               <li><Link to="/home">SY</Link></li>}
               {/* <Link to="/home">SY</Link> */}
              <li><Link to="/pass">Pass</Link></li>
              <li><Link to="/rules">Hostel Rules</Link></li>
               <li><Link to="/Complains">Complaints</Link></li>
              <button onClick={handleClick}>Log out</button>
            </div>
          )}
        </nav>
</div>
        
      </div>
    </header>
  );
};

export default Navbar;
