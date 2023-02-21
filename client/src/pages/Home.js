import { useEffect, useState }from 'react'
import { useWorkoutsContext } from "../hooks/useWorkoutsContext"
import { useAuthContext } from "../hooks/useAuthContext"
import { useLogout } from "../hooks/useLogout";

import WorkoutDetails from '../components/WorkoutDetails'
import WorkoutForm from '../components/WorkoutForm'

const Home = () => {
  const {workouts, dispatch} = useWorkoutsContext()
  const {user} = useAuthContext()
  const [BlockNo, setBlockNo] = useState(" ");
  const [x,setX] = useState(0);
  const [FloorNo, setFloorNo] = useState(" ");
  const [RoomNo, setRoomNo] = useState(" ");
  // const [Email, setEmail] = useState(" ");
  const[temp,setTemp]=useState(false);
  const [rm,setRm]=useState([]);
  const[loading,setLoading]=useState(true);
  const[dat,setDat]=useState([]);
  const { logout } = useLogout();

  // const handleChange = (event) => {
    
  //   setBlockNo(event.target.value);
  //   setFloorNo(event.target.value);
  // };
  let [ vacant, setVacant]= useState([])
  // useEffect(() => {
  //   const fetchVacant = async () => {
  //     const response = await fetch("/api/workouts/home?BlockNo=${BlockNo}&FloorNo=${FloorNo}")
  //     const json = await response.json()
  
  //     if (response.ok) {
  //       setVacant(json)
  //       console.log(vacant)
  //     }
  //   }
  //   fetchVacant()
  // },[])
  const handleSelect=async(e) =>{
      console.log(RoomNo)
      const Email=user.name
      //const alloted =1
      const a = { BlockNo,FloorNo,Email,RoomNo };
      //const b= {Email,alloted}

    const response = await fetch("/api/workouts/home", {
      method: "PUT",
      body: JSON.stringify(a),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user.token}`,
      },
    });
    const json = await response.json();

   
    if (json=='alloted') {
      console.log("Hii")
      logout();
    }
    if(!response.ok) {
      if(json.error=='less than 3')
      alert(json.error)
    }

    // const resp = await fetch("/api/workouts/home", {
    //   method: "POST",
    //   body: JSON.stringify(b),
    //   headers: {
    //     "Content-Type": "application/json",
    //     Authorization: `Bearer ${user.token}`,
    //   },
    // });
    // const json1 = await resp.json1();

   
    // if (response.ok) {
    //   console.log("Hii")
    // }
  }
  const handleSubmit = async (e) => {
    
    e.preventDefault();

    console.log("hi")
    console.log(user)
    console.log(BlockNo,FloorNo)
    console.log(user.allocated)
    setRm([
      ...dat.filter((student) => {
        return student.BlockNo === BlockNo && student.FloorNo == FloorNo&&student.Students.length>=0 //&& user.alloted!=="1";
      }),
    ]);
    setTimeout(() => {
      console.log(rm);
      setTemp(true);
    }, 1000);
    
    //console.log(BlockNo,FloorNo)
    // const a = { BlockNo,FloorNo };

    // const response = await fetch("/api/workouts/home", {
    //   method: "POST",
    //   body: JSON.stringify(a),
    //   headers: {
    //     "Content-Type": "application/json",
    //     Authorization: `Bearer ${user.token}`,
    //   },
    // });
    // const json = await response.json();

   
    // if (response.ok) {
    //   console.log("Hii")
    // }
    
     
  //     fetch("/api/workouts/home", {
  //       method: "GET",
  //       crossDomain: true,
  //       headers: {
  //         "Content-Type": "application/json",
  //         Accept: "application/json",
  //         "Access-Control-Allow-Origin": "*",
  //         'Authorization':`Bearer ${user.accessToken}`,
  //         BlockNo:BlockNo,
  //         FloorNo:FloorNo
  //       },
  //     })
  //       .then((res) => {
  //         return res.json();
  //       })
  //       .then((data) => {
  //         // console.log(data.rank.scoreArray, "Ranklist-Received");
  //         // setRankArray(data.rank.scoreArray.sort((a, b) => b.score - a.score));
  //         // //console.log(rankArray)
  //         // rankArray.map((pos)=>
  //         // {
  //         //   console.log(pos.username," ",pos.score)
  //         // })
  //         console.log(data)
  //       });
    
  // };
  }
   useEffect(() => {
    const fetchWorkouts = async () => {
      const response = await fetch('/api/workouts/home', {
        headers: {'Authorization': `Bearer ${user.token}`},
      })
      const json = await response.json()

      if (response.ok) {
       //console.log(json)
       setDat([...json])
       setLoading(false);
      //  const x=[json]
      //  console.log(x)
      // console.log(BlockNo,FloorNo)
      
     
      // setTemp(true);
      // // setVacant(st2)
      // console.log(vacant)
      }
    }

    
      fetchWorkouts()
  },[])

  
  


  return (
    // <div className="home">
    //   <div className="workouts">
    //     {workouts && workouts.map((workout) => (
    //       <WorkoutDetails key={workout._id} workout={workout} />
    //     ))}
    //   </div>
    //   <WorkoutForm />
    // </div>
   
    <div className="relative w-full mx-auto">
  {!loading && (
    <form onSubmit={handleSubmit}>
      Block:
      <select value={BlockNo} onChange={(e) => setBlockNo(e.target.value)}>
        <option value="" selected>--Select--</option>
        <option value="A">A</option>
        <option value="B">B</option>
        <option value="C">C</option>
        <option value="D">D</option>
        <option value="E">E</option>
        <option value="F">F</option>
      </select>

      Floor:
      <select value={FloorNo} onChange={(e) => setFloorNo(e.target.value)}>
        <option value="" selected>--Select--</option>
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
    {temp &&
      rm.map((date) => (
        <div key={date._id} className="border border-gray-200 shadow-md rounded-lg p-4 bg-yellow-100">
          <h3 className="text-lg font-medium">{date.RoomNo}</h3>
          <div className="mt-2">
            <p className="text-sm text-gray-500">
              Occupied: {date.Students.length}
            </p>
          </div>
          <div className="mt-4">
            <button
              onClick={() => {
                setRoomNo(date.RoomNo);
                setTimeout(() => {
                  handleSelect();
                }, 1000);
              }}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Select
            </button>
          </div>
        </div>
      ))}
  </div>
</div>



  )
}

export default Home