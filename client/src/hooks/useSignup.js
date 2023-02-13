import { useState } from 'react'
import { useAuthContext } from './useAuthContext'
import { useNavigate } from 'react-router-dom'

export const useSignup = () => {
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(null)
  const { dispatch } = useAuthContext()
  const [success, setSuccess] = useState()
  const navigate = useNavigate();
  const signup = async (name,number,branch,category,year,merit,address,gender,email,password) => {
    setIsLoading(true)
    setError(null)
      console.log(name,number,branch,category,year,merit,address,gender,email,password)
      setSuccess(0);
    const response = await fetch('/api/user/signup', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({ name,number,branch,category,year,merit,address,gender,email,password })
    })
    const json = await response.json()

    if (!response.ok) {
      setIsLoading(false)
      setError(json.error)
      {alert(json.error)}
    }
    if (response.ok) {
      // save the user to local storage
      // localStorage.setItem('user', JSON.stringify(json))

      // // update the auth context
      // dispatch({type: 'LOGIN', payload: json})

      // update loading state
      console.log("Success")
      {alert("Success")}
      // window.location.reload(true);
      setIsLoading(false)
      setSuccess(1);
   
      
    }
  }

  return { signup, isLoading, error,success }
}