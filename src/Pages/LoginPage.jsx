import {useEffect, useContext, useState} from "react";
import {useNavigate} from "react-router-dom";
import axios from "axios";

import "../Style/loginPage.css";
import {Context} from "../App";

const Login = () => {
  const navigate = useNavigate();
  const {currentUser, setCurrentUser} = useContext(Context);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [errorLine, setErrorLine] = useState();

  const login = () => {
    if (username.length == 0 || password.length == 0) {
      setErrorLine("Both Fields Should Be Filled");
    } else {
      axios
        .post(`${process.env.REACT_APP_EXPRESS_PORT}/Login`, {
          username,
          password,
        })
        .then((res) => {
          sessionStorage.setItem("token", JSON.stringify(res.data.token));
          sessionStorage.setItem("id", JSON.stringify(res.data.userID));
          sessionStorage.setItem(
            "currentUser",
            JSON.stringify(res.data.userData)
          );
          setCurrentUser(res.data.userData);
          // console.log(res.data.userData);
          navigate("/DashBoard");
        })
        .catch((err) => {
          console.log(err);
          setErrorLine("Username Or Password incorrect");
        });
    }
  };

  return (
    <div className="main-loginPage">
      <div className="form-loginPage">
        <div className="loginWord-LoginPage"> Login </div>

        <div className="inputs-loginPage">
          <input
            className="input-loginPage"
            placeholder="Username"
            onChange={(e) => {
              setErrorLine("");
              setUsername(e.target.value.trim());
            }}
            type={"text"}
          />

          <input
            className="input-loginPage"
            placeholder="Password"
            onChange={(e) => {
              setErrorLine("");

              setPassword(e.target.value.trim());
            }}
            type={"password"}
          />
        </div>

        <div className="errorLine-LoginPage">
          {" "}
          {errorLine && <span> {errorLine} </span>}
        </div>

        <div className="loginButton-loginPage" onClick={() => login()}>
          Login
        </div>

        <div
          className="toRegister-LoginPage"
          onClick={() => navigate("/SignUp")}
        >
          Register
        </div>
      </div>
    </div>
  );
};

export default Login;
