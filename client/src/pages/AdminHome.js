import { useEffect, useState } from 'react'
import { useAuthContext } from "../hooks/useAuthContext"

const AdminHome = () => {
  const [dat, setDat] = useState([]);
  const { user } = useAuthContext();
  const [selectedRoom, setSelectedRoom] = useState(null);

  useEffect(() => {
    const fetchWorkouts = async () => {
      const response = await fetch('/api/admin/ad', {
        //headers: {'Authorization': `Bearer ${user.token}`},
      })
      const json = await response.json()

      if (response.ok) {
        console.log(json);
        setDat([...json]);
      }
    }

    fetchWorkouts();
  }, []);

  const handleSelectRoom = (students) => {
    setSelectedRoom(students);
  }

  return (
    <div className="announcement-box">
      <table>
        <thead>
          <tr>
            <th>Block No</th>
            <th>Floor No</th>
            <th>Room No</th>
            <th>Occupied</th>
            <th>Students</th>
          </tr>
        </thead>
        <tbody>
          {dat && dat.map((date) => (
            <tr key={date._id}>
              <td>{date.BlockNo}</td>
              <td>{date.FloorNo}</td>
              <td>{date.RoomNo}</td>
              <td>{date.Students.length}</td>
              <td>
              
              <ul>
              {date.Students.map((student) => (
              <li key={student._id}>{student.Name}</li>
              ))}
              </ul>
              
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      
    </div>
  );
}
export default AdminHome;
