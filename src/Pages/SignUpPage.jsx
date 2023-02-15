import react, {useState, useEffect} from "react";
import {useNavigate} from "react-router-dom";

import "../Style/signUpPage.css";


const SignUp = () => {

  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorLine, setErrorLine] = useState();



  const signUp = () => {
   
  };

  return (
    <div className="main-signUpPage">
      <div className="form-signUpPage">
        <div className="signUpWord-signUpPage"> Register </div>
        <div className="inputs-signUpPage">
          <input
            className="input-signUpPage"
            placeholder="Username"
            onChange={(e) => {
              setUsername(e.target.value.trim());
              setErrorLine("");
            }}
            type={"text"}
          />

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

        <div className="errorLine-signUpPage">
          {errorLine && <span> {errorLine} </span>}
        </div>

        <div className="signUpButton-signUpPage" onClick={() => signUp()}>
          SignUp
        </div>

        <div className="toRegister-SignPage" onClick={() => navigate("/")}>
          To Login
        </div>
      </div>
    </div>
  );
};

export default SignUp;
