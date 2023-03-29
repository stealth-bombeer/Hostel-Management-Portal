import { Link } from 'react-router-dom'
import { useLogout2 } from '../hooks/useLogout2'
import { useAuthContext2 } from '../hooks/useAuthContext2'
import { useAuthContext } from '../hooks/useAuthContext'
import { useAuthContext3 } from '../hooks/useAuthContext3'



const Navbar2 = () => {
  const { logout2 } = useLogout2()
  const { admin } = useAuthContext2()
  const { user } = useAuthContext()
  const { clerk } = useAuthContext3()
  const handleClick = () => {
    logout2()
  }

  return (
    <header>
      <div className="container">
      
          {/* <img
            src="https://img.collegepravesh.com/2016/01/VJTI-Mumbai-Logo.png"
            className="h-6 mr-6 sm:h-10"
            alt="Flowbite Logo"
          />
        <Link to="/admin/home">
          <h1>VJTI Hostel Portal-Admin</h1>
        </Link> */}
        <a href="#" className="flex items-center">
          <img
            src="https://img.collegepravesh.com/2016/01/VJTI-Mumbai-Logo.png"
            className="h-6 mr-3 sm:h-10"
            alt="Flowbite Logo"
          />
          <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
            <Link to="/">
              <h1>VJTI Hostel Portal-Admin</h1>
            </Link>
          </span>
        </a>
        <nav>
          {admin &&!user && !clerk && (
            <div>
              <span>{admin.email}</span>
              <button onClick={handleClick}>Log out</button>
              {/* <Link to="/admin/mer">Merit-List</Link> */}
              <Link to="/signup">CreateUser</Link>
              <Link to="/verify">Verify</Link>
              <Link to="/admin/ann">Announce</Link>
              <Link to="/admin/ad">ViewStudents</Link>
              <Link to="/admin/acc">Accepted-students</Link>
              <Link to="/admin/rej">Rejected-students</Link>
              <Link to="/adminnotification">ViewAndDelAnnouncement</Link>
            </div>
            
          )}
          {/* {!admin && (
            <div>
              <Link to="/adminlogin">Login</Link>
              <Link to="/adminsignup">Signup</Link>
            </div>
          )} */}
        </nav>
      </div>
    </header>
  )
}

export default Navbar2