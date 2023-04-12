import { useEffect, useState } from "react";
import { useWorkoutsContext } from "../hooks/useWorkoutsContext";
import { useAuthContext } from "../hooks/useAuthContext";
import { useLogout } from "../hooks/useLogout";

const SelectBlocks = () => {
  const { workouts, dispatch } = useWorkoutsContext();
  const { user } = useAuthContext();
  const [BlockNo, setBlockNo] = useState(" ");
  const [x, setX] = useState(0);
  const [FloorNo, setFloorNo] = useState(" ");
  const [RoomNo, setRoomNo] = useState(" ");
  // const [Email, setEmail] = useState(" ");
  const [rm, setRm] = useState([]);
  const [loading, setLoading] = useState(false);
  const [dat, setDat] = useState([]);
  const { logout } = useLogout();

  const handleSelect = async (floor, block, room) => {
    const Email = user.name;
    const roomDetails = { BlockNo: block, FloorNo: floor, Email, RoomNo: room };
    setLoading(true);
    console.log(roomDetails);

    const response = await fetch("/api/user/home", {
      method: "PUT",
      body: JSON.stringify(roomDetails),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user.token}`,
      },
    });
    const json = await response.json();

    if (json == "alloted") {
      console.log("Hii");
      logout();
    }
    if (!response.ok) {
      // if (json.error == "Full")
      alert(json.error);
      window.location.reload(true);
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("hi");
    console.log(user);
    console.log(BlockNo, FloorNo);
    console.log(user.allocated);
    setRm([
      ...dat.filter((student) => {
        return (
          student.BlockNo === BlockNo &&
          student.FloorNo == FloorNo &&
          student.Students.length >= 0
        ); //&& user.alloted!=="1";
      }),
    ]);
  };

  useEffect(() => {
    const fetchWorkouts = async () => {
      const response = await fetch("/api/user/home", {
        headers: { Authorization: `Bearer ${user.token}` },
      });
      const json = await response.json();
      console.log("Data fetched from the backend is", json);
      if (response.ok) {
        //console.log(json)
        setDat([...json]);
        setLoading(false);
      }
    };

    fetchWorkouts();
  }, [user]);

  return (

    <div className="relative w-full mx-auto">
      {!loading && (
        <form onSubmit={handleSubmit}>
          Block:
          <select value={BlockNo} onChange={(e) => setBlockNo(e.target.value)}>
            <option value="" selected>
              --Select--
            </option>
            <option value="A">A</option>
            <option value="B">B</option>
            <option value="C">C</option>
            <option value="D">D</option>
            <option value="E">E</option>
            <option value="F">F</option>
          </select>
          Floor:
          <select value={FloorNo} onChange={(e) => setFloorNo(e.target.value)}>
            <option value="" selected>
              --Select--
            </option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
          </select>
          <button>Search</button>
        </form>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        {rm?.map((date) => (
          <div
            key={date._id}
            className="border border-gray-200 shadow-md rounded-lg p-4 bg-yellow-100"
          >
            <h3 className="text-lg font-medium">{date.RoomNo}</h3>
            <div className="mt-2">
              <p className="text-sm text-gray-500">
                Occupied: {date.Students.length}
              </p>
            </div>
            <div className="mt-4">
              <button
                disabled={loading}
                onClick={() =>
                  handleSelect(date.FloorNo, date.BlockNo, date.RoomNo)
                }
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Select
              </button>
            </div>
          </div>
        ))}
      </div>
      {loading && (
        <div>
          {" "}
          <i class="fa fa-circle-o-notch fa-spin"></i> <span>Loading </span>
        </div>
      )}
    </div>
  );
};

export default SelectBlocks;
