import { Link } from 'react-router-dom'
import { useLogout3 } from '../hooks/useLogout3'
import { useAuthContext3 } from '../hooks/useAuthContext3'
import { useAuthContext } from '../hooks/useAuthContext'

import { useAuthContext2 } from '../hooks/useAuthContext2'

const Navbar3 = () => {
  const { logout3 } = useLogout3()
  const { admin } = useAuthContext2()
  const { user } = useAuthContext()
  const { clerk } = useAuthContext3()
  const handleClick = () => {
    logout3()
  }

  return (
    <header>
      <div className="container">
        <Link to="/clerk/home">
          <h1>VJTI Hostel Portal-Admin</h1>
        </Link>
        <nav>
          {clerk &&!user && !admin && (
            <div>
              <span>{clerk.email}</span>
              <button onClick={handleClick}>Log out</button>
              {/* <Link to="/admin/mer">Merit-List</Link> */}
              <Link to="/signup">CreateUser</Link>
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

export default Navbar3