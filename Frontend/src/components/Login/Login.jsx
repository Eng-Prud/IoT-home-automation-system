import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css";
import { FaUserShield } from "react-icons/fa";
import { BsFillShieldLockFill } from "react-icons/bs";
import { AiOutlineSwapRight } from "react-icons/ai";
import axios from "axios";


const Login = ({ onClose }) => {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:5000/login", values)
      .then((res) => {
        if (res.data.status === "Success") {
          onClose(); // Close the login popup on successful login
        } else {
          alert("error occurred during login");
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="login-overlay">
      <div className="loginPage flex">
        <div className="container flex">
         

          <div className="formDiv flex">
            <div className="headerDiv">
              <img src="" alt="" />
              <h3>Welcome Back</h3>
            </div>

            <form onSubmit={handleSubmit} className="form grid">
              <span></span>
              <div className="inputDiv">
                <label htmlFor="email">Email</label>
                <div className="input flex">
                  <FaUserShield className="icon" />
                  <input
                    type="text"
                    id="email"
                    placeholder="Enter your email"
                    onChange={(e) =>
                      setValues({ ...values, email: e.target.value })
                    }
                    required
                  />
                </div>
              </div>

              <div className="inputDiv">
                <label htmlFor="password">Password</label>
                <div className="input flex">
                  <BsFillShieldLockFill className="icon" />
                  <input
                    type="password"
                    id="password"
                    placeholder="Enter Password"
                    onChange={(e) =>
                      setValues({ ...values, password: e.target.value })
                    }
                    required
                  />
                </div>
              </div>
              <button type="submit" className="btn flex">
                <span>Login</span>
                <AiOutlineSwapRight className="icon" />
              </button>

              <span className="forgotPassword">
                <Link to={'/register'}> Register account</Link>
              </span>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Login };
