import React, { useState } from "react";
import "./Register.css";
import { Link, useNavigate } from "react-router-dom";
import { FaUserShield } from "react-icons/fa";
import { BsFillShieldLockFill } from "react-icons/bs";
import { AiOutlineSwapRight } from "react-icons/ai";
import { MdMarkEmailRead } from "react-icons/md";
import axios from "axios";

const Register = ({ onClose }) => {
  const [values, setValues] = useState({
    email: "",
    username: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:5000/register", values)
      .then((res) => {
        if (res.data.status === "Success") {
          navigate("/login");
          onClose(); 
        } else {
          alert("error occurred during registering");
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="register-overlay">
      <div className="registerPage flex">
        <div className="container flex">
         
          <div className="formDiv flex">
            <div className="headerDiv">
              <img src="" alt="" />
              <h3>Come Join us</h3>
            </div>

            <form onSubmit={handleSubmit} className="form grid">
              <div className="inputDiv">
                <label htmlFor="email">Email</label>
                <div className="input flex">
                  <MdMarkEmailRead className="icon" />
                  <input
                    type="email"
                    id="email"
                    placeholder="Enter Email"
                    onChange={(e) =>
                      setValues({ ...values, email: e.target.value })
                    }
                    required
                  />
                </div>
              </div>

              <div className="inputDiv">
                <label htmlFor="username">Username</label>
                <div className="input flex">
                  <FaUserShield className="icon" />
                  <input
                    type="text"
                    id="username"
                    placeholder="Enter Username"
                    onChange={(e) =>
                      setValues({ ...values, username: e.target.value })
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
                <span>Register</span>
                <AiOutlineSwapRight className="icon" />
              </button>

              <span className="forgotPassword">
                <Link to={'/login'}>Click here for Login</Link>
              </span>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Register };
