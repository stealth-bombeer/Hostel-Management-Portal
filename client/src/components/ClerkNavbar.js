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
    <header className="bg-white-900 text-black">
  <div className="container mx-auto px-4 py-4 flex justify-between items-center">
    <Link to="/clerk/home">
      <h1 className="text-xl">VJTI Hostel Portal-Admin</h1>
    </Link>
    <nav className="flex">
      {clerk && !user && !admin && (
        <div className="flex items-center space-x-4">
          <span className="hidden sm:inline">{clerk.email}</span>
          <button className="border border-white py-1 px-2 rounded" onClick={handleClick}>Log out</button>
          <Link to="/signup" className="border border-white py-1 px-2 rounded">Create User</Link>
        </div>
      )}
      {/* {!admin && (
        <div className="flex space-x-4">
          <Link to="/adminlogin" className="border border-white py-1 px-2 rounded">Login</Link>
          <Link to="/adminsignup" className="border border-white py-1 px-2 rounded">Signup</Link>
        </div>
      )} */}
    </nav>
  </div>
</header>

  )
}

export default Navbar3