import { createContext, useReducer, useEffect } from 'react'

export const AuthContext3 = createContext()

export const authReducer3 = (state, action) => {
  switch (action.type) {
    case 'LOGIN':
      return { clerk: action.payload }
    case 'LOGOUT':
      return { clerk: null }
    default:
      return state
  }
}

export const AuthContext3Provider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer3, { 
    clerk: null
  })

  useEffect(() => {
    const clerk = JSON.parse(localStorage.getItem('clerk'))

    if (clerk) {
      dispatch({ type: 'LOGIN', payload: clerk }) 
    }
  }, [])

  console.log('AuthContext state:', state)
  
  return (
    <AuthContext3.Provider value={{ ...state, dispatch }}>
      { children }
    </AuthContext3.Provider>
  )

}