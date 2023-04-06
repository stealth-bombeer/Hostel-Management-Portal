import { Link } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";
import { useAuthContext2 } from "../hooks/useAuthContext2";
import { useAuthContext3 } from "../hooks/useAuthContext3";

const menuOnClick=()=>{
    document.getElementById("menu-bar").classList.toggle("change");
  document.getElementById("nav").classList.toggle("change");
  document.getElementById("menu-bg").classList.toggle("change-bg");
  document.getElementById("menu-bg").classList.toggle("change-opacity");
  }


const StartNavbar = () => {
   
  const { user } = useAuthContext();
  const { admin } = useAuthContext2();
  const { clerk } = useAuthContext3();
    return (  <header>
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
        
    
    <div id="menu">
  <div id="menu-bar" onClick={menuOnClick}>
    <div id="bar1" class="bar"></div>
    <div id="bar2" class="bar"></div>
    <div id="bar3" class="bar"></div>
  </div>
    <nav className="nav" id="nav">
        {!user && !clerk && !admin && (
          <div>
            <ul>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/register">Register</Link></li>
            <li><Link to="/adminlogin">Admin-Login</Link></li>
            <li><Link to="/clerklogin">Clerk-Login</Link></li>
            <li><Link to="/adminsignup">Admin-Signup</Link></li>
            <li><Link to="/clerksignup">CLerk-Signup</Link></li>
            </ul>
          </div>
        )}
      </nav>
      </div>
      </div>
      </header>);
}
 
export default StartNavbar;

