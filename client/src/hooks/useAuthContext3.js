import { AuthContext3 } from "../context/AuthContext3"
import { useContext } from "react"

export const useAuthContext3 = () => {
  const context3 = useContext(AuthContext3)

  if(!context3) {
    throw Error('useAuthContext must be used inside an AuthContextProvider')
  }

  return context3
}