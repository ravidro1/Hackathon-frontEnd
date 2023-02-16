import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function DataContext(props) {
  const navigate = useNavigate();

  const [dataTypes] = useState(["number", "text", "Date", "Two Values"]);

  const [typeOfFieldsObj, setTypeOfFieldsObj] = useState();
  const [user, setUser] = useState("")
  const [excelDataType, setExcelDataType] = useState("")
  const [currentExcel, setCurrentExcel] = useState([])
  const [userExcelCollection, setUserExcelCollection] = useState([])

  const [FileTable, setFileTable] = useState([])
  useEffect(() => {
    if (user) {
      axios.post(`${process.env.REACT_APP_EXPRESS_PORT}/GetAllTable`, { user_id: user._id })
        .then((res) => {
          console.log(res.data)
          if (res.data?.allTables) {

            setUserExcelCollection(res.data?.allTables)
          }

        })
        .catch(err => console.log(err))

    }


  }, [user])


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
    currentExcel, setCurrentExcel,
    userExcelCollection, setUserExcelCollection,
  };
}

export default DataContext;
