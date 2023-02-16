import axios from "axios";
import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";

function DataContext(props) {
  const navigate = useNavigate();

  const [dataTypes] = useState(["number", "text", "date"]);

  const [typeOfFieldsObj, setTypeOfFieldsObj] = useState();
  const [currentUser, setCurrentUser] = useState("");
  const [excelDataType, setExcelDataType] = useState("");
  const [currentExcel, setCurrentExcel] = useState([]);
  const [userExcelCollection, setUserExcelCollection] = useState([]);

  const [FileTable, setFileTable] = useState([]);
  useEffect(() => {
    if (currentUser) {
      axios
        .post(`${process.env.REACT_APP_EXPRESS_PORT}/GetAllTable`, {
          user_id: currentUser._id,
        })
        .then((res) => {
          if (res.data?.allTables) {
            setUserExcelCollection(res.data?.allTables);
          }
        })
        .catch((err) => console.log(err));
    }
  }, [currentUser]);

  useEffect(() => {
    // console.log(JSON.parse(sessionStorage.getItem("currentUser")));
    if (JSON.parse(sessionStorage.getItem("currentUser")))
      setCurrentUser(JSON.parse(sessionStorage.getItem("currentUser")));
  }, []);

  const logout = () => {
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("id");
    setCurrentUser("");
    navigate("/");
  };

  return {
    dataTypes,
    typeOfFieldsObj,
    setTypeOfFieldsObj,
    logout,
    currentUser,
    setCurrentUser,
    setFileTable,
    FileTable,
    excelDataType,
    setExcelDataType,
    currentExcel,
    setCurrentExcel,
    userExcelCollection,
    setUserExcelCollection,

    typeOfFieldsObj,
  };
}

export default DataContext;
