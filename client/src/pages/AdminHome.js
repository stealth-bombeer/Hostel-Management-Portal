import { useEffect, useState } from 'react'
import { useAuthContext } from "../hooks/useAuthContext"

const AdminHome = () => {
  const [dat, setDat] = useState([]);
  const { user } = useAuthContext();
  const [selectedBlockNo, setSelectedBlockNo] = useState('');

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

  const filteredDat = selectedBlockNo
    ? dat.filter((item) => item.BlockNo === selectedBlockNo)
    : dat;

  return (
    <div className="announcement-box">
    <select
      className="block w-full border-2 border-gray-300 bg-white focus:border-blue-500 rounded-md shadow-sm mb-4 text-gray-600 font-medium"
      value={selectedBlockNo}
      onChange={(e) => setSelectedBlockNo(e.target.value)}
    >
      <option value="">Select a block number</option>
      <option value="A">Block A</option>
      <option value="B">Block B</option>
      <option value="C">Block C</option>
      <option value="D">Block D</option>
      <option value="E">Block E</option>
    </select>
    
    <div className="grid grid-cols-1 sm:grid-cols-4 lg:grid-cols-5 gap-4 mt-4">
      {filteredDat.map((date) => (
        <div
          key={date._id}
          className="border-2 border-gray-300 rounded-lg bg-white overflow-hidden hover:shadow-xl transition duration-300 ease-in-out"
        >
          <div className="bg-blue-500 text-white text-lg font-medium py-3 px-4">
            Room No: {date.RoomNo}
          </div>
          
          <div className="p-4">
          <div className="flex flex-row items-center mb-4">
  <div className="text-sm text-gray-500 font-medium mr-2">Room No:</div>
  <div className="text-sm text-gray-700 font-medium">{date.RoomNo}</div>
</div>

<div className="flex flex-row items-center mb-4">
  <div className="text-sm text-gray-500 font-medium mr-2">Block No:</div>
  <div className="text-sm text-gray-700 font-medium">{date.BlockNo}</div>
</div>

<div className="flex flex-row items-center mb-4">
  <div className="text-sm text-gray-500 font-medium mr-2">Floor No:</div>
  <div className="text-sm text-gray-700 font-medium">{date.FloorNo}</div>
</div>

<div className="flex flex-row items-center mb-4">
  <div className="text-sm text-gray-500 font-medium mr-2">Occupied:</div>
  <div className="text-sm text-gray-700 font-medium">{date.Students.length}</div>
</div>

            
            <div className="mt-4">
              <ul>
                {date.Students.map((student) => (
                  <li key={student._id} className="text-sm text-gray-700 font-medium ml-4 mb-2">
                    {student.Name}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
  


  );
};

export default AdminHome;
