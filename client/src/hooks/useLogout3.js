import { useAuthContext3 } from './useAuthContext3'
import { useWorkoutsContext } from './useWorkoutsContext'

export const useLogout3 = () => {
  const { dispatch } = useAuthContext3()
  const { dispatch: dispatchWorkouts } = useWorkoutsContext()

  const logout3 = () => {
    // remove user from storage
    localStorage.removeItem('clerk')

    // dispatch logout action
    dispatch({ type: 'LOGOUT' })
    dispatchWorkouts({ type: 'SET_WORKOUTS', payload: null })
  }

  return { logout3 }
}