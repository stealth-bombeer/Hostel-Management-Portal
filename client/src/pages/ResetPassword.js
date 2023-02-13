import { useState } from "react";
import  {useResetPassword} from "../hooks/useResetPassword"


const ResetPassword = () => {
    const{resetPassword,error,isLoading}=useResetPassword();
  const [newpassword, setNewpassword ]= useState ('');
  const [confirmpassword,setConfirmpassword]=useState('');
  
  
  const handleSubmit = async(e) => {
    e.preventDefault();
await resetPassword(newpassword,confirmpassword);
  
  }
  console.log(newpassword)
  
  
    return (
  
  
  <form className="login" onSubmit={handleSubmit}>
  <h3>Reset Password</h3>

   <label>Password:</label>
  <input 
    type="password" 
    onChange={(e) => setNewpassword(e.target.value)} 
    value={newpassword} 
  /> 
  <label>Confirm Password:</label>
   <input 
    type="password" 
    onChange={(e) => setConfirmpassword(e.target.value)} 
    value={confirmpassword} 
  /> 
  
  <button>Reset Password</button>
  
  </form>
              );
  }
  
  export default ResetPassword;