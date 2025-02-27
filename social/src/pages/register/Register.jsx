import { Link } from "react-router-dom";
import "./register.scss";

const Register = () => {
  return (
    <div className="register">
      <div className="card">
        <div className="left">
          <h1>Stay Connected.</h1>
          <p>
            Every picture tells a story, and every video captures a moment.
            Share your creativity with the world, explore stunning visuals, and
            connect with people who inspire you. Your creativity deserves to be
            seen—start sharing now!
          </p>
          <span>Do you have an account ?</span>
          <Link to="/login">
            <button>Login</button>
          </Link>
        </div>
        <div className="right">
          <h1>Register</h1>
          <form>
            <input type="text" placeholder="Username" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />

            <button>Register</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
