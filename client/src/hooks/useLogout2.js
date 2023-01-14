import { useAuthContext2 } from './useAuthContext2'
import { useWorkoutsContext } from './useWorkoutsContext'

export const useLogout2 = () => {
  const { dispatch } = useAuthContext2()
  const { dispatch: dispatchWorkouts } = useWorkoutsContext()

  const logout2 = () => {
    // remove user from storage
    localStorage.removeItem('admin')

    // dispatch logout action
    dispatch({ type: 'LOGOUT' })
    dispatchWorkouts({ type: 'SET_WORKOUTS', payload: null })
  }

  return { logout2 }
}