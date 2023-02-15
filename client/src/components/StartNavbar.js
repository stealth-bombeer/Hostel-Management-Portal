import { Link } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";
import { useAuthContext2 } from "../hooks/useAuthContext2";
import { useAuthContext3 } from "../hooks/useAuthContext3";

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
        
    
    
    <nav>

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
      </nav>
      </div>
      </header>);
}
 
export default StartNavbar;

