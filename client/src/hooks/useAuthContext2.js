import { AuthContext2 } from "../context/AuthContext2"
import { useContext } from "react"

export const useAuthContext2 = () => {
  const context2 = useContext(AuthContext2)

  if(!context2) {
    throw Error('useAuthContext must be used inside an AuthContextProvider')
  }

  return context2
}