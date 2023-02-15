import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function DataContext(props) {
  const navigate = useNavigate();

  const [dataTypes] = useState(["number", "text", "Date", "Two Values"]);

  const [typeOfFieldsObj, setTypeOfFieldsObj] = useState();


  const logout = () => {
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("id");
    navigate("/");
  };
  const [FileTable, setFileTable] = useState([])

  return {
    dataTypes,
    typeOfFieldsObj,
    setTypeOfFieldsObj,
    logout,

    setFileTable,
    FileTable
  };
}

export default DataContext;
