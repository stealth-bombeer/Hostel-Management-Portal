import { useState } from "react"
// import { useLogin } from "../hooks/useLogin"
import { useLogin3 } from "../hooks/useLogin3"

const ClerkLogin = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const {login3, error, isLoading} = useLogin3()

  const handleSubmit = async (e) => {
    e.preventDefault()

    await login3(email, password)
  }

  return (
    <div class="form-wrapper">
    <h1>Sign In</h1>
    <form onSubmit={handleSubmit}>
      
     <div className="form-item"> 
      <label for="email"></label>
      <input 
        type="email" 
        placeholder="Email Address"
        onChange={(e) => setEmail(e.target.value)} 
        value={email} 
      />
      </div>
      <div className="form-item">
      <label for="password"></label>
      <input 
        type="password"
        placeholder="Password" 
        onChange={(e) => setPassword(e.target.value)} 
        value={password} 
      />
      </div>

      <div className="button-panel">
      <button className="button" style={{ background: 'yellow' }}
 disabled={isLoading}>Log in</button>
      {error && <div className="error">{error}</div>}
      </div>
      <div>
          {isLoading && (
            <div>
              {" "}
              <i class="fa fa-circle-o-notch fa-spin"></i> <span>Loading </span>
            </div>
          )}
        </div>
    </form>

    <div class="form-footer">
    <p><a href="/signup">Create an account</a></p>
    
  </div>
    </div>
  )
}

export default ClerkLogin