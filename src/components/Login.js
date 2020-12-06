import React from "react";
import { Link } from "react-router-dom";
import avatar from "../images/avatar.png";

const Login = () => {
  return (
    <div className="bg">
      <div className="login-box">
        <img src={avatar} className="avatar" alt="" />
        <h1>Login Here</h1>
        <form>
          <p>Email</p>
          <input type="text" name="username" placeholder="Enter Email" />
          <p>Password</p>
          <input type="password" name="password" placeholder="Enter Password" />
          <input type="submit" name="submit" value="Login" />
          <Link to="/api/auth/register">Don't Have An Account</Link>
          <br />
          <Link to="/">Forgot Password</Link>
        </form>
      </div>
    </div>
  );
};
export default Login;
