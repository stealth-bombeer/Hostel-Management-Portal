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
        <Link to="/admin/ad">
          <h1>VJTI Hostel Portal-Admin</h1>
        </Link>
        <nav>
          {admin &&!user && !clerk && (
            <div>
              <span>{admin.email}</span>
              <button onClick={handleClick}>Log out</button>
              <Link to="/admin/mer">Merit-List</Link>
              <Link to="/signup">CreateUser</Link>
              <Link to="/verify">Verify</Link>
              <Link to="/admin/ann">Announce</Link>
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