import React, { useContext, useEffect, useRef, useState } from "react";
import { Context } from "../App";
import DefineDataTypes from "./DefineDataTypes";

import axios from "axios";

function AddTabel(props) {
  const { dataTypes, typeOfFieldsObj, setTypeOfFieldsObj, FileTable, setFileTable, user } = useContext(Context);



  const fileInputRef = useRef();

  const [tempFile, setTempFile] = useState();
  const [Tabel, setTabel] = useState();
  const [excelName, setExcelName] = useState("")



  const uploadFileToDb = () => {
    const fileData = new FormData()
    fileData.append("uploadFile", tempFile)
    console.log(tempFile);
    console.log(fileData);
    axios.post(`${process.env.REACT_APP_EXPRESS_PORT}/HandleFileUpload`, fileData)
      .then(res => {
        setTabel(res.data.data)
      })

    setTempFile("");
    fileInputRef.current.value = [];
  };

  const [isAllTheFieldsWithDataType, setIsAllTheFieldsWithDataType] =
    useState(false);

  useEffect(() => {
    if (typeOfFieldsObj) {
      let isFill = true;

      Object.keys(typeOfFieldsObj).forEach((key) => {
        if (typeOfFieldsObj[key] == "") isFill = false;
      });

      setIsAllTheFieldsWithDataType(isFill);
    }
  }, [typeOfFieldsObj]);

  function setSchemaMongoose() {
    console.log(typeOfFieldsObj);
    axios.post(`${process.env.REACT_APP_EXPRESS_PORT}/UploadTableToDataBase`, { dataType: typeOfFieldsObj, tableData: Tabel, name: excelName, userId: user._id })
      .then(res => { setFileTable(res.data.table) })
      .catch(err => { console.log(err); })
  }
  return (
    <div>
      <input
        ref={fileInputRef}
        onChange={(e) => {
          setTempFile(e.target.files[0]);
        }}
        type={"file"}
      />
      <button onClick={uploadFileToDb}> Add Tabel </button>
      {Tabel && <DefineDataTypes tabelArray={Tabel} />}
      {isAllTheFieldsWithDataType &&
        <>
          <h3>Enter Excel Name</h3>
          <input type="text" onChange={(e) => setExcelName(e.target.value)} />
        </>}
      {excelName.length > 3 && <button onClick={setSchemaMongoose}> submit </button>}
    </div>
  );
}


export default AddTabel;
