import { useWorkoutsContext } from '../hooks/useWorkoutsContext'
import { useAuthContext } from '../hooks/useAuthContext'

// date fns
// import formatDistanceToNow from 'date-fns/formatDistanceToNow'

const WorkoutDetails = ({ workout }) => {
  const { dispatch } = useWorkoutsContext()
  const { user } = useAuthContext()

  // const handleClick = async () => {
  //   if (!user) {
  //     return
  //   }

  //   const response = await fetch('/api/workouts/' + workout._id, {
  //     method: 'DELETE',
  //     headers: {
  //       'Authorization': `Bearer ${user.token}`
  //     }
  //   })
  //   const json = await response.json()

  //   if (response.ok) {
  //     dispatch({type: 'DELETE_WORKOUT', payload: json})
  //   }
  // }

  return (
    <div className="workout-details">
      <h4>{workout.title}</h4>
      <p><strong>Roome Mate 1 : </strong>{workout.Name1}</p>
      <p><strong>Roome Mate 2 </strong>{workout.Name2}</p>
      <p><strong>Roome Mate 3 </strong>{workout.Name3}</p>
      <p><strong>Room No. </strong>{workout.RoomNo}</p>
      {/* <p>{formatDistanceToNow(new Date(workout.createdAt), { addSuffix: true })}</p> */}
      
    </div>
  )
}

export default WorkoutDetails