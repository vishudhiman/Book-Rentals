import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
import avatar from "../images/avatar.png";

const Register = () => {
  return (
    <div className="bg">
      <div className="login-box">
        <img src={avatar} className="avatar" alt="" />
        <h1>Register Here</h1>
        <form>
          <p>Name</p>
          <input type="text" name="username" placeholder="Enter Name" />
          <p>Email</p>
          <input type="text" name="username" placeholder="Enter Email" />
          <p>Password</p>
          <input type="password" name="password" placeholder="Enter Password" />
          <p>Address</p>
          <input type="text" name="username" placeholder="Enter Your Address" />
          <input type="submit" name="submit" value="Login" />
          <Link to="/api/auth/login">Already Have An Account?</Link>
        </form>
      </div>
    </div>
  );
};

export default Register;
