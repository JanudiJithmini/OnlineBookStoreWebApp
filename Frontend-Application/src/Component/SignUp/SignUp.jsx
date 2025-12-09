import { useNavigate } from "react-router-dom";

import "./SignUp.css";

function SignUp() {
  const navigate = useNavigate();

  return (
    <div className="full">
      <div className="signup-container">
        <h2>Registration</h2>
        <form>
          <div className="input-group">
            <input type="text" placeholder="First Name" required />
            <input type="text" placeholder="Last Name" required />
          </div>
          <div className="input-group">
            <input type="email" placeholder="E-mail" required />
            <input type="text" placeholder="Address" required />
          </div>
          <div className="input-group">
            <input type="number" placeholder="Age" required />
            <input type="text" placeholder="Gender" required />
          </div>
          <div className="input-group">
            <input type="password" placeholder="Password" required />
            <input type="password" placeholder="Confirm Password" required />
          </div>
          <button type="submit">Sign Up</button>
        </form>

        <p>
          Already have an account?{" "}
          <span onClick={() => navigate("/login")} className="login-link">
            Login
          </span>
        </p>
      </div>
    </div>
  );
}

export default SignUp;
