import { useEffect, useState } from "react";
import { useAuthContext } from "../hooks/useAuthContext";

const GetUserBlocks = () => {
  const [dat, setDat] = useState([]);
  const { user } = useAuthContext();
  const [selectedBlockNo, setSelectedBlockNo] = useState("");
console.log("inside getuserblocks ",user);
  useEffect(() => {
    const fetchWorkouts = async () => {
      const response = await fetch("/api/user/ad", {
        headers: { Authorization: `Bearer ${user.token}` },
      });
      const json = await response.json();

      if (response.ok) {
        console.log(json);
        setDat([...json]);
        console.log("inside getblocks");
      }
    };

    fetchWorkouts();
  }, [selectedBlockNo]);

  // const handleSelectRoom = (students) => {
  //   setSelectedBlockNo(students);
  // }

  const filteredDat = selectedBlockNo
    ? dat.filter((item) => item.BlockNo === selectedBlockNo)
    : dat;

  return (
    <div className="announcement-box">
      <select
        value={selectedBlockNo}
        onChange={(e) => setSelectedBlockNo(e.target.value)}
      >
        <option value="">Select a block number</option>
        <option value="A">A</option>
        <option value="B">B</option>
        <option value="C">C</option>
        <option value="D">D</option>
        <option value="E">E</option>
      </select>
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
          {filteredDat.map((date) => (
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
};

export default GetUserBlocks;
