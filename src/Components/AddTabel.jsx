import React, { useContext, useEffect, useRef, useState } from "react";
import { Context } from "../App";
import DefineDataTypes from "./DefineDataTypes";

import axios from "axios";
import React, { useContext, useEffect, useRef, useState } from 'react';
import { Context } from '../App';
import DefineDataTypes from './DefineDataTypes';

function AddTabel(props) {
  const { dataTypes, typeOfFieldsObj, setTypeOfFieldsObj, FileTable, setFileTable } = useContext(Context);

  const [tabelArray, setArray] = useState([
    [
      "Full Name",
      "Job Title",
      "Department",
      "Business Unit",
      "Gender",
      "Ethnicity",
      "Age",
    ],
  ]);

  const fileInputRef = useRef();

  const [tempFile, setTempFile] = useState();
  const [Tabel, setTabel] = useState();




  const uploadFileToDb = () => {
    setTempFile("");
    const fileData = new FormData()
    fileData.append("uploadFile", tempFile)

    axios.post(`${process.env.REACT_APP_EXPRESS_PORT}/HandleFileUpload`, fileData)
      .then(res => {
        setTabel(res.data.data)
      })

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
    axios.post("", { dataType: typeOfFieldsObj })
      .then(res => { setFileTable(res.data.table) })
      .catch(err => { })
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
      {console.log(tabelArray)};
      {Tabel && <DefineDataTypes tabelArray={Tabel} />}
      {isAllTheFieldsWithDataType && <button onClick={setSchemaMongoose}> submit </button>}
    </div>
  );
}


export default AddTabel;
