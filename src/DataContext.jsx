import axios from "axios";
import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";

function DataContext(props) {
  const navigate = useNavigate();

  const [dataTypes] = useState(["number", "text", "Date", "Two Values"]);

  const [typeOfFieldsObj, setTypeOfFieldsObj] = useState();
  const [user, setUser] = useState("")
  const [excelDataType, setExcelDataType] = useState("")
  const [currentExcel, setCurrentExcel] = useState([])


  useEffect(() => {
    console.log(JSON.parse(sessionStorage.getItem("currentUser")));
    if (JSON.parse(sessionStorage.getItem("currentUser")))
      setUser(JSON.parse(sessionStorage.getItem("currentUser")));
  }, []);

  const logout = () => {
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("id");
    setUser("");
    navigate("/");
  };
  const [FileTable, setFileTable] = useState([]);

  const [currentTable, setCurrentTable] = useState();

  return {
    dataTypes,
    typeOfFieldsObj,
    setTypeOfFieldsObj,
    logout,
    user,
    setUser,
    setFileTable,
    FileTable,
    excelDataType, setExcelDataType,
    currentExcel, setCurrentExcel
  };
}

export default DataContext;
