import { useEffect, useState }from 'react'
import { useWorkoutsContext } from "../hooks/useWorkoutsContext"
import { useAuthContext } from "../hooks/useAuthContext"

import WorkoutDetails from '../components/WorkoutDetails'
import WorkoutForm from '../components/WorkoutForm'

const Home = () => {
  const {workouts, dispatch} = useWorkoutsContext()
  const {user} = useAuthContext()
  const [BlockNo, setBlockNo] = useState(" ");
  const [x,setX] = useState(0);
  const [FloorNo, setFloorNo] = useState(" ");
  const [RoomNo, setRoomNo] = useState(" ");
  const [Email, setEmail] = useState(" ");
  const[temp,setTemp]=useState(false);
  const [rm,setRm]=useState([]);
  const[loading,setLoading]=useState(true);
  const[dat,setDat]=useState([]);

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
      setEmail(user.email)
      const a = { BlockNo,FloorNo,Email,RoomNo };

    const response = await fetch("/api/workouts/home", {
      method: "POST",
      body: JSON.stringify(a),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user.token}`,
      },
    });
    const json = await response.json();

   
    if (response.ok) {
      console.log("Hii")
    }
  }
  const handleSubmit = async (e) => {
    
    e.preventDefault();

    console.log("hi")
    console.log(BlockNo,FloorNo)
    setRm([
      ...dat.filter((student) => {
        return student.BlockNo === BlockNo && student.FloorNo == FloorNo&&student.Students.length<=1;
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
   
    <div className="relative w-full lg:max-w-sm">
          { !loading && <form onSubmit={handleSubmit}>

            Block:no
            <select
              // className={emptyFields.includes("RoomNo") ? "error" : ""}
              value={BlockNo}
              onChange={(e) => setBlockNo(e.target.value)}
            >
              <option value="A">A</option>
              <option value="B">B</option>
              <option value="C">C</option>
              <option value="D">D</option>
              <option value="E">E</option>
              <option value="F">F</option>
             
            </select>
            Floor:no
            <select
              // className={emptyFields.includes("RoomNo") ? "error" : ""}
              value={FloorNo}
              onChange={(e) => setFloorNo(e.target.value)}
            >
              <option value="1">1</option>
              <option value="2">2</option>
              
             
            </select>
            <button>Search</button>
      </form>}

      <table>
    <tr>
          <th> Room No</th>
          <th> Size</th>
          <th> Select</th>
          
          </tr>
      {temp && rm.map((date) => (
       <tr key={date._id}>
         
         <td>{date.RoomNo}</td>
         <td>{date.Students.length}</td>
         <td><button onClick={() => {setRoomNo(date.RoomNo);setTimeout(() => {
      handleSelect()
    }, 1000);}}>Select</button></td>
         
       </tr>
     ))}
     </table>
          </div>
  )
}

export default Home