import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function DataContext(props) {
  const navigate = useNavigate();

  const [dataTypes] = useState(["number", "text", "Date", "Two Values"]);

  const [typeOfFieldsObj, setTypeOfFieldsObj] = useState();
  const [user, setUser] = useState("")


  useEffect(() => {
    console.log(JSON.parse(sessionStorage.getItem("currentUser")));
    if (JSON.parse(sessionStorage.getItem("currentUser")))
      setUser(JSON.parse(sessionStorage.getItem("currentUser")))
  }, []);

  const logout = () => {
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("id");
    setUser("")
    navigate("/");
  };
  const [FileTable, setFileTable] = useState([])

  return {
    dataTypes,
    typeOfFieldsObj,
    setTypeOfFieldsObj,
    logout,
    user, setUser,
    setFileTable,
    FileTable
  };
}

export default DataContext;
