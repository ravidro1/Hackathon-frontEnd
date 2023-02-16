import axios from "axios";
import react, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import "../Style/signUpPage.css";

const SignUp = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [errorLine, setErrorLine] = useState();

  const signUp = () => {
    axios
      .post(`${process.env.REACT_APP_EXPRESS_PORT}/SignUp`, {
        username,
        password,
        phoneNumber: phone,
        email,
      })
      .then((res) => {
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
        setErrorLine("Both Input Required");
      });

    setUsername("");
    setPassword("");
  };

  return (
    // <div className="formCenter">
    //   <div className="formFields">
    //     <div className="formField">
    //       <label className="formFieldLabel" htmlFor="userName">
    //         UserName
    //       </label>
    //       <input
    //         type="text"
    //         id="userName"
    //         className="formFieldInput"
    //         placeholder="Enter your userName"
    //         name="userName"
    //         onChange={(e) => {
    //           setUsername(e.target.value.trim());
    //           setErrorLine("");
    //         }}

    //       />
    //     </div>
    //     <div className="formField">
    //       <label className="formFieldLabel" htmlFor="email">
    //         E-Mail Address
    //       </label>
    //       <input
    //         type="email"
    //         id="email"
    //         className="formFieldInput"
    //         placeholder="Enter your email"
    //         name="email"
    //         onChange={(e) => setEmail(e.target.value)}

    //       />
    //     </div>

    //     <div className="formField">
    //       <label className="formFieldLabel" htmlFor="password">
    //         Password
    //       </label>
    //       <input
    //         type="password"
    //         id="password"
    //         className="formFieldInput"
    //         placeholder="Enter your password"
    //         name="password"
    //         onChange={(e) => {
    //           setPassword(e.target.value.trim());
    //           setErrorLine("");
    //         }}
    //       />
    //     </div>
    //     <div className="formField">
    //       <label className="formFieldLabel" htmlFor="phone">
    //         phone
    //       </label>
    //       <input
    //         type="phone"
    //         id="phone"
    //         className="formFieldInput"
    //         placeholder="Enter your phone"
    //         name="phone"
    //         onChange={(e) => setPhone(e.target.value)}

    //       />
    //     </div>

    //     <div className="formField">
    //       <button className="formFieldButton">Sign In</button>{" "}
    //       {/* <Link to="/" className="formFieldLink">
    //         Create an account
    //       </Link> */}
    //     </div>


    //   </div>
    // </div>
    <div className="main-signUpPage">
      <div className="main-signUpPage-wrapper">

        <div className="toRegister-SignPage" onClick={() => navigate("/")}>
          <h1>To Login</h1>
        </div>
        <div className="form-signUpPage">
          <div className="right-side">
            <h1>Sign Up To Enjoy</h1>
          </div>
          <div className="left-side">

            <div className="signUpWord-signUpPage"><h2>Register</h2>  </div>
            <div className="inputs-signUpPage">
              <div>

                <input
                  className="input-signUpPage"
                  placeholder="Username"
                  onChange={(e) => {
                    setUsername(e.target.value.trim());
                    setErrorLine("");
                  }}
                  type={"text"}
                />
              </div>
              <div>

                <input
                  className="input-signUpPage"
                  placeholder="Password"
                  onChange={(e) => {
                    setPassword(e.target.value.trim());
                    setErrorLine("");
                  }}
                  type={"text"}
                />
              </div>
              <div>

                <input
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="email"
                />
              </div>
              <div>

                <input
                  type="number"
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="number"
                />
              </div>
            </div>

            <div className="errorLine-signUpPage">
              {errorLine && <span> {errorLine} </span>}
            </div>

            <div className="signUpButton-signUpPage" >
              <button onClick={() => signUp()}>
                SignUp
              </button>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default SignUp;
