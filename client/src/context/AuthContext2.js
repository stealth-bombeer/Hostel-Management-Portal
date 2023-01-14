import { createContext, useReducer, useEffect } from 'react'

export const AuthContext2 = createContext()

export const authReducer2 = (state, action) => {
  switch (action.type) {
    case 'LOGIN':
      return { admin: action.payload }
    case 'LOGOUT':
      return { admin: null }
    default:
      return state
  }
}

export const AuthContext2Provider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer2, { 
    admin: null
  })

  useEffect(() => {
    const admin = JSON.parse(localStorage.getItem('admin'))

    if (admin) {
      dispatch({ type: 'LOGIN', payload: admin }) 
    }
  }, [])

  console.log('AuthContext state:', state)
  
  return (
    <AuthContext2.Provider value={{ ...state, dispatch }}>
      { children }
    </AuthContext2.Provider>
  )

}