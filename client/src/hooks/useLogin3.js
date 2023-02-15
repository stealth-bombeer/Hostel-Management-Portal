import { useState } from 'react'
import { useAuthContext3 } from './useAuthContext3'

export const useLogin3 = () => {
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(null)
  const { dispatch } = useAuthContext3()

  const login3 = async (email, password) => {
    setIsLoading(true)
    setError(null)

    const response = await fetch('/api/clerk/clerklogin', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({ email, password })
    })
    const json = await response.json()

    if (!response.ok) {
      setIsLoading(false)
      setError(json.error)
    }
    if (response.ok) {
      // save the user to local storage
      localStorage.setItem('clerk', JSON.stringify(json))

      // update the auth context
      dispatch({type: 'LOGIN', payload: json})

      // update loading state
      setIsLoading(false)
    }
  }

  return { login3, isLoading, error }
}