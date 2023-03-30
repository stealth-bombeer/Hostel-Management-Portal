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
    <div class="container py-2 md:py-4 flex items-center justify-between">
      <a href="#" class="flex items-center">
        <img src="https://img.collegepravesh.com/2016/01/VJTI-Mumbai-Logo.png" class="h-6 mr-3 sm:h-10" alt="Flowbite Logo" />
        <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
          <a href="/">
            <h1>VJTI Hostel Portal-Admin</h1>
          </a>
        </span>
      </a>
      <button class="block sm:hidden focus:outline-none">
        <svg class="h-6 w-6 fill-current text-gray-500" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M3 5h18v2H3V5zm0 6h18v2H3v-2zm18 6H3v2h18v-2z" />
        </svg>
      </button>
      <nav class="hidden sm:flex sm:items-center">
        {admin && !user && !clerk && (
        <div class="flex items-center">
          <span class="mr-4">{admin.email}</span>
          <button onClick={handleClick} class="mr-4">Log out</button>
          <Link to="/signup" class="mr-4">CreateUser</Link>
          <Link to="/verify" class="mr-4">Verify</Link>
          <Link to="/admin/ann" class="mr-4">Announce</Link>
          <Link to="/admin/ad" class="mr-4">ViewStudents</Link>
          <Link to="/admin/acc" class="mr-4">Accepted-students</Link>
          <Link to="/admin/rej" class="mr-4">Rejected-students</Link>
          <Link to="/adminnotification" class="mr-4">ViewAndDelAnnouncement</Link>
        </div>
        )}
      </nav>
    </div>
    <div class="sm:hidden">
      {admin && !user && !clerk && (
      <div class="px-2 pb-3">
        <span class="block mb-2">{admin.email}</span>
        <button onClick={handleClick} class="block mb-2">Log out</button>
        <Link to="/signup" class="block mb-2">CreateUser</Link>
        <Link to="/verify" class="block mb-2">Verify</Link>
        <Link to="/admin/ann" class="block mb-2">Announce</Link>
        <Link to="/admin/ad" class="block mb-2">ViewStudents</Link>
        <Link to="/admin/acc" class="block mb-2">Accepted-students</Link>
        <Link to="/admin/rej" class="block mb-2">Rejected-students</Link>
        <Link to="/adminnotification" class="block mb-2">ViewAndDelAnnouncement</Link>
      </div>
      )}
    </div>
  </header>
  
  
  )
}

export default Navbar2