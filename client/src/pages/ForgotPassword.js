import { useState } from "react";
import  {useForgotPassword} from "../hooks/useForgotPassword"

const ForgotPassword = () => {
  const{forgotPassword,error,isLoading}=useForgotPassword();
  const [email , setEmail ]= useState ('');
// const [newpassword, setNewpassword ]= useState ('');


const handleSubmit = async(e) => {
  e.preventDefault();

  await forgotPassword(email);

}
console.log(email)


  return (


<form className="login" onSubmit={handleSubmit}>
<h3>Reset Password</h3>

<label>Email address:</label>
<input 
  type="email" 
  onChange={(e) => setEmail(e.target.value)} 
  value={email} 
/>
{/* <label>Password:</label>
<input 
  type="password" 
  onChange={(e) => setNewpassword(e.target.value)} 
  value={newpassword} 
/> */}

<button>Reset Password</button>

</form>
            );
}

export default ForgotPassword;