import { useState } from "react";
import { useSignup3 } from "../hooks/useSignup3";

const ClerkSignup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signup3, error, isLoading } = useSignup3();

  const handleSubmit = async (e) => {
    e.preventDefault();

    await signup3(email, password);
  };

  return (
    <div class="form-wrapper">
      <h1>Sign Up</h1>
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
          <button
            className="button"
            style={{ background: "yellow" }}
            disabled={isLoading}
          >
            Sign Up
          </button>
          {error && <div className="error">{error}</div>}
        </div>
      </form>
      <div>
        {isLoading && (
          <div>
            {" "}
            <i class="fa fa-circle-o-notch fa-spin"></i> <span>Loading </span>
          </div>
        )}
      </div>
      <div class="form-footer">
        <p>
          <a href="/login">Already a user?</a>
        </p>
      </div>
    </div>
  );
};

export default ClerkSignup;
